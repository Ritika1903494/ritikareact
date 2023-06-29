
import {  Formik } from 'formik';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { get_Emp_Data,post_Emp_Data,update_Emp_Data} from './Services.jsx';

 export default function Simple_modal({show,handleClose,emp,setShow,setData,setEmp,action}){
    return(
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Fill the Form..</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Formik
       initialValues={emp}
       validate={values => {
         const errors = {};
         if (!values.email) {
           errors.email = 'Please fill the email field..';
         } else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
         ) {
           errors.email = 'Invalid email format..';
         }

         if(!values.password){
            errors.password = 'please fill the password field..';
         }else if(values.password.length<4){
          errors.password = 'password must contain atleast 4 digit..';
         }

         if(!values.name){
            errors.name = 'please fill the name field..';
         }else if(values.name.length<4){
          errors.name = 'name must contain atleast 4 characters..';
         }
         if(!values.age){
            errors.age = 'please fill the age field...';
         }else if(values.age>60){
          errors.age = 'invalid age';
         }
         if(!values.role){
            errors.role = 'please fill the role field..';
         }
         return errors;
       }}
        onSubmit={(values) => {
        if(values.email && values.password && values.name && values.age && values.role ) {
            if(action === "add") {
             post_Emp_Data(values.email,values.password,values.name,values.age,values.role)
            } if(action === "edit") {
                console.log(values.email)
                console.log(values.password)
                console.log(values.age)
                console.log(values.role)
                update_Emp_Data(values._id,values.email,values.password,values.name,values.age,values.role)
            }
            
            const getEmp=async()=>{
              let response = await get_Emp_Data();
              if(response.status === 200) {
                setData(response.data);
              }
          }
              getEmp()
              setEmp({ email: '',password: '',name:'',age:'',role:'' })   
        }
         setShow(false)
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
         <form>
            <div >
           <input
             type="email"
             name="email"
             placeholder="Enter your email"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.email}
           />
           {touched.email && errors.email ?<div>{errors.email}</div>:null}
           </div><br/>
           
           <div >
           <input
             type="password"
             name="password"
             placeholder="Enter your password"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.password}
             />
             {touched.password && errors.password ?<div>{errors.password}</div>:null}
           </div><br/>

           <div >
           <input
             type="text"
             name="name"
             placeholder="Enter your Name"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.name}
             />
            {touched.name && errors.name ?<div>{errors.name}</div>:null}
           </div><br/>
           
           <div >
           <input
             type="text"
             name="age"
             placeholder="Enter your Age"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.age}
           />
           {touched.age && errors.age ?<div>{errors.age}</div>:null}
           </div><br/>
  
           <div >
            <label> Choose your Role:
            <select name="role" type="text"  value={values.role} onChange={handleChange} onBlur={handleBlur} >
            <option value="role">Role</option>
            <option value="Web Developer">Web Developer</option>
            <option value="Tester">Tester</option>
            <option value="Java Developer">Java Developer</option>
            </select>
            </label>
            {touched.role && errors.role ?<div>{errors.role}</div>:null}
           </div><br/>
           <Button variant="primary"  type="submit" value="Submit" onClick={handleSubmit} >
          Submit
        </Button>
         </form>
       )}
     </Formik>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

