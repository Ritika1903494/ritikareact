import {  Formik } from 'formik';
import Button from 'react-bootstrap/Button';
import { post_Emp_Data} from './Services.jsx';
import { useNavigate } from "react-router-dom";
import'./style1.css';

function Formik_form(){
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
    let path = `/Employee`; 
    navigate(path);
  }
    return(
        
        <div className='main'>
            <>
         <Formik
       initialValues={{ email: '',password: '',name:'',age:'',role:'' }}
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

         if(!values.name){
            errors.name = 'please fill the name field !';
         }else if(values.name.length<4){
          errors.name = 'name must contain atleast 4 characters !';
         }
         if(!values.age){
            errors.age = 'please fill the age field !';
         }else if(values.age>60){
          errors.age = 'invalid age !';
         }
         if(!values.role){
            errors.role = 'please fill the role field !';
         }
         return errors;
       }}
        onSubmit={(values) => {
        if(values.email && values.password && values.name && values.age && values.role ) {
             post_Emp_Data(values.email,values.password,values.name,values.age,values.role)   
        }
         routeChange();
         console.log("a")
       }} >
       
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
           </div><br/>
           
           <div className='innerchild'>
           {touched.password && errors.password?
           (<input  style={{border:"2px solid red "}}
             type="password"
             name="password"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.password}
             />):(
              <input
              type="password"
              name="password"
              placeholder="Enter your password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              />
             )}
             {touched.password && errors.password ?<div style={{color: "red",fontSize:"20px"}}>{errors.password}</div>:null}
           </div><br/>

           <div className='innerchild' >
           {touched.name && errors.name ?
          (<input  style={{border:"2px solid red "}}
             type="text"
             name="name"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.name}
             />):(
              <input
              type="text"
              name="name"
              placeholder="Enter your Name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
              />
             )}
            {touched.name && errors.name ?<div style={{color: "red",fontSize:"20px"}}>{errors.name}</div>:null}
           </div><br/>
           
           <div className='innerchild'>
           {touched.age && errors.age ?
           (<input  style={{border:"2px solid red "}}
             type="text"
             name="age"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.age}
           />):(
            <input
            type="text"
            name="age"
            placeholder="Enter your Age"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.age}
          />
           )}
           {touched.age && errors.age ?<div style={{color: "red",fontSize:"20px"}}>{errors.age}</div>:null}
           </div><br/>
  
           <div >
            <label> Choose your Role:   </label><br/>
            <select name="role" type="text"  value={values.role} onChange={handleChange} onBlur={handleBlur} >
            <option value="role">Role</option>
            <option value="Web Developer">Web Developer</option>
            <option value="Tester">Tester</option>
            <option value="Java Developer">Java Developer</option>
            </select>
            {touched.role && errors.role ?<div style={{color: "red",fontSize:"20px"}}>{errors.role}</div>:null}
           </div><br/>
           <Button variant="primary"  type="submit" value="Submit" onClick={handleSubmit} >
          Submit
        </Button>
         </form>
       )}
     </Formik>
     </>
     </div>
    )
}


export default Formik_form;