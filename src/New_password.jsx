import {  Formik } from 'formik';
import Button from 'react-bootstrap/Button';
import { useNavigate,useParams} from "react-router-dom";
import {pass_update} from './Services.jsx';
import'./style1.css';



function New_password(){
    
  let {email}=useParams();
  console.log(email);

    let navigate = useNavigate(); 
    const routeChange = () =>{ 
    let path = `/`; 
      navigate(path);
}
    return (
        <>
        <div className="main" >
        <Formik  
   initialValues={{newpassword:'',confirmpassword:''}}
   validate={values => {
     const errors = {};
     if(!values.newpassword){
        errors.newpassword = 'please fill the password field !';
     }else if(values.newpassword.length<4){
      errors.newpassword = 'password must contain atleast 4 digit !';
     }

     if(!values.confirmpassword){
        errors.confirmpassword = 'please fill the password field !';
     }else if(values.confirmpassword!=values.newpassword){
      errors.confirmpassword = 'password do not match !';
     }

     return errors;
    }}
    
    onSubmit={async(values,{setErrors,setSubmitting}) => {
      let response;
     try{
        if(values.newpassword) {
          response= await  pass_update(email,values.newpassword)
          console.log(response)
         }
         if(response.status===200){
            routeChange();
           }
   }
   catch(error){
        console.log(error);
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
           
           <div className='innerchild'>
           {touched.newpassword && errors.newpassword ?
           (<input style={{border:"2px solid red "}}
             type="password"
             name="newpassword"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.newpassword}
             />):(
             <input
              type="password"
              name="newpassword"
              placeholder="Enter your New password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.newpassword}
              />
               )}
             {touched.newpassword && errors.newpassword ?<div style={{color:"red",fontSize:"20px"}} >{errors.newpassword}</div>:null}
           </div> 
           <div className='innerchild'>
           {touched.confirmpassword && errors.confirmpassword ?
           (<input style={{border:"2px solid red "}}
             type="password"
             name="confirmpassword"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.confirmpassword}
             />):(
              <input
              type="password"
              name="confirmpassword"
              placeholder="Confirm password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.confirmpassword}
              />
             )}
             {touched.confirmpassword && errors.confirmpassword ?<div style={{color:"red",fontSize:"20px"}}>{errors.confirmpassword}</div>:null}
           </div> 
           <Button id="button" type="submit" onClick={handleSubmit}>Update</Button>
             </form>
             )}
           </Formik>
        </div>
        </>
    )

}

export default New_password;