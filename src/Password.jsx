import {  Formik } from 'formik';
import Button from 'react-bootstrap/Button';
import {post_otp} from './Services.jsx';
import { useNavigate} from "react-router-dom";
import'./style3.css';
function Password(){
  
    let navigate = useNavigate(); 
     const routeChange = (email) =>{ 
     let path = `/Employee/Counter/${email}`; 
     navigate(path);
}
    
    return (
        <div className="main">
        <>
         <Formik  
       initialValues={{email:''}}
       validate={values => {
         const errors = {};
         if (!values.email) {
           errors.email = 'Please fill the email field !';
         } else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
         ) {
           errors.email = 'Invalid email format !';
         }
         return errors;
        }}
        
        onSubmit={async(values,{setErrors,setSubmitting}) => {
          let response;
          
         try{
            if(values.email) {
              response= await  post_otp(values.email)
             }
             if(response.status===200){
                routeChange(values.email);
               }
       }
       catch(error){
         if(error.status===422){
          console.log("aaa")
            setErrors({common:error.message});
         }
       }
         setSubmitting(false);
       }}
          >
           
           {({
             values,
             errors,
             touched,
             handleChange,
             handleBlur,
             handleSubmit,
           }) => (
             <form className='child'>
                <div className='innerchild' >
                {touched.email && errors.email ?
               (<input style={{border:"2px solid red "}}
                 type="email"
                 name="email"
                 onChange={handleChange}
                 onBlur={handleBlur}
                 value={values.email}
               />):(
                <input
                type="email"
                name="email"
                placeholder="Enter your email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
               )}
               {touched.email && errors.email ?<div style={{color: "red",fontSize:"20px"}}>{errors.email}</div>:null}
                 </div>
               <br/>
               <Button id="button" type="submit" onClick={handleSubmit}>Send OTP </Button>
               {errors && errors.common && (<span class="error" style={{color: "red",fontSize:"20px"}}>{errors.common}</span>)}
             </form>
           )}
         </Formik>
       </>
       </div>
    )

}

export default Password;