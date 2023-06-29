import React, { useState, useEffect } from "react";
import {  Formik } from 'formik';
import Button from 'react-bootstrap/Button';
import {get_product,post_product} from "./Services_1.jsx";
import { useNavigate} from "react-router-dom";
import'./style1.css';
function Product_form(){

  let navigate = useNavigate(); 
  const routeChange = () =>{ 
  let path = `/product_detail`; 
  navigate(path);
}
 return(
    <div className="main">
    <>
     <Formik  
   initialValues={{productname:'',price:'',manufactured:'',companyname:'',quality:''}}
   validate={values => {
     const errors = {};
     if (!values.productname) {
       errors.productname = 'Please fill the  field..';
     } 

     if(!values.price){
        errors.price= 'please fill the field..';
     }

     if(!values.manufactured){
        errors.manufactured = 'please fill the  field..';
     }
     if(!values.companyname){
        errors.companyname = 'please fill the  field...';
     }
     if(!values.quality){
        errors.quality = 'please fill the  field..';
     }
     return errors;
   }}
    onSubmit={(values) => {
    if(values.productname && values.price && values.manufactured && values.companyname && values.quality ){
        post_product(values.productname,values.price,values.manufactured,values.companyname,values.quality)
    }

     routeChange();
     
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
       <input
         type="text"
         name="productname"
         placeholder="Product Name"
         onChange={handleChange}
         onBlur={handleBlur}
         value={values.productname}
       />
       {touched.productname && errors.productname ?<div>{errors.productname}</div>:null}
       </div><br/>
       
       <div className='innerchild'>
       <input
         type="number"
         name="price"
         placeholder="Enter the Price of Product"
         onChange={handleChange}
         onBlur={handleBlur}
         value={values.price}
         />
         {touched.price && errors.price ?<div>{errors.price}</div>:null}
       </div><br/>

       <div className='innerchild' >
       <input
         type="date"
         name="manufactured"
         placeholder="Enter the manufacturing date"
         onChange={handleChange}
         onBlur={handleBlur}
         value={values.manufactured}
         />
        {touched.manufactured && errors.manufactured ?<div>{errors.manufactured}</div>:null}
       </div><br/>
       
       <div className='innerchild'>
       <input
         type="text"
         name="companyname"
         placeholder="Enter Product Company Name"
         onChange={handleChange}
         onBlur={handleBlur}
         value={values.companyname}
       />
       {touched.companyname && errors.companyname ?<div>{errors.companyname}</div>:null}
       </div><br/>

       <div >
        <label> Quality:   </label><br/>
        <select name="quality" type="text"  value={values.quality} onChange={handleChange} onBlur={handleBlur} >
        <option value="quality">Quality</option>
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
        </select>
     
        {touched.quality && errors.quality ?<div>{errors.quality}</div>:null}
       </div><br/>
       <Button variant="primary"  type="submit" value="Submit" onClick={handleSubmit}>Submit</Button>
     </form>
   )}
 </Formik>
</>
</div>
 )

}

export default Product_form;