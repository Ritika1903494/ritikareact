import {  Formik } from 'formik';
import Button from 'react-bootstrap/Button';
import { post_Emp_Sign} from './Services.jsx';
import{setData} from './Services_local.jsx';
import { useNavigate} from "react-router-dom";
import'./style1.css';
function Login(){

  let navigate = useNavigate(); 
  const routeChange = () =>{ 
  let path = `/Employee`; 
  navigate(path);
}
 return(
    <div className="main">
    <>
     <Formik  
   initialValues={{email:'',password:''}}
   validate={values => {
     const errors = {};
     if (!values.email) {
       errors.email = 'Please fill the email field !';
     } else if (
       !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
     ) {
       errors.email = 'Invalid email format !';
     }

     if(!values.password){
        errors.password = 'please fill the password field !';
     }else if(values.password.length<4){
      errors.password = 'password must contain atleast 4 digit !';
     }

     return errors;
    }}
    
    onSubmit={async(values,{setErrors,setSubmitting}) => {
       let response;
       
      try{
         if(values.email && values.password ) {
           response= await  post_Emp_Sign(values.email,values.password)
          }
          if(response.status===200){
            console.log(response.data)
             setData("user_authority",response.data);
             routeChange();

          }
    }
    catch(error){
      if(error.status===422){
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
            <div className='innerchild'>
            {touched.email && errors.email ?
           (<input style={{border:"2px solid red "}}
             type="email"
             name="email"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.email}
           />):(<input
            type="email"
            name="email"
            placeholder="Enter your email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            />)
           }
           {touched.email && errors.email ?<div style={{color: "red",fontSize:"20px"}}>{errors.email}</div>:null}
           </div>
           <br/>
           
           <div className='innerchild'>
           {touched.password && errors.password ?
           (<input style={{border:"2px solid red "}}
             type="password"
             name="password"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.password}
             />):(<input
             type="password"
             name="password"
             placeholder="Enter your password"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.password}
             />)
            }
             {touched.password && errors.password ?<div style={{color: "red",fontSize:"20px"}}>{errors.password}</div>:null}
           </div>
           <a href="/Employee/Password">Forget Password ?</a>
           <Button id="button" type="submit" onClick={handleSubmit}>Sign In </Button>
           {errors && errors.common && (<span class="error"style={{color: "red"}}>{errors.common}</span>)}
         </form>
       )}
     </Formik>
   </>
   </div>
 )
}

export default Login;