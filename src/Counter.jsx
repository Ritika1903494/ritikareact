
import React from 'react';
import { useState, useEffect } from 'react';
import OTPInput,{ResendOTP} from "otp-input-react";
import Button from 'react-bootstrap/Button';
import { useNavigate,useParams} from "react-router-dom";
import {verify_otp,post_otp} from './Services.jsx';
import './style4.css';
import './style5.css';
const Counter = () => {
    const [minutes, setMinutes] = useState(1);
    const [seconds, setSeconds] = useState(30);
    const [otp, setOTP] = useState("");
    
    let {email}=useParams();
    console.log(email)

    let navigate = useNavigate(); 
    const routeChange = (email) =>{ 
    let path = `/Employee/New_password/${email}`; 
    navigate(path);
}

const verify=async() =>{
    let response;      
    try{
         response= await  verify_otp(otp)
         if(response.status===200){
            routeChange(email);
           }
        }
  catch(error){
    if(error.status===422){
     console.log("aaa")
       const common=error.message;
       console.log(common)
    }
  }
}

const res_email = async() =>{
    let response;
    try{
        if(email){
          response= await  post_otp(email)
         }
         if(response.status===200){
                console.log("done")
           }
   }
   catch(error){
     if(error.status===422){
      console.log("not done ")
     }
   }
}
const reset= () =>{
    setMinutes(1);
    setSeconds(30);
    
    res_email();
}
 
  useEffect(() =>{

         const Interval = setInterval(() => {

            if (seconds > 0) {
               setSeconds(seconds-1)
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(Interval)
                } else {
                    setMinutes( minutes - 1)
                        setSeconds( 59)
                    }
            } 
        }, 1000);

        return ()=> clearInterval(Interval)

     }, [seconds]);

        return (
             <>
            <div className='wrapper'>
            <div className='box'>
            <div>
                { minutes === 0 && seconds === 0
                    ? <h1 style={{color: "red",fontSize:"20px"}}>Busted!</h1>
                    : <div id="time">{minutes}:{seconds < 10 ? `0${seconds}` : seconds}</div> 
                }
            </div>
           
             <OTPInput
                 value={otp}
                 onChange={setOTP}
                 autoFocus
                 OTPLength={6}
                 name="otp"
                 otpType="string"
                 disabled={false}
                 secure
            />
           <div>
           <Button id="button" type="submit" onClick={verify}>Verify OTP </Button>
           <div>
                { minutes === 0 && seconds === 0
                    ?<Button id="button" type="submit" onClick={reset}>Resend</Button>
                    :<Button id="button" type="submit" size="lg" disabled>Resend</Button>
                }
            </div>
           </div>
           </div>
           </div>
           </>
        )
    }

export default Counter;
