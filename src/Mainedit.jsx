
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Table from 'react-bootstrap/Table'
import {get_Emp_Data} from "./Services.jsx";
import Button from 'react-bootstrap/Button';  
import{axiosPrivate} from './Axios_interceptor.jsx';
function Mainedit(){
     

    const[data,setData] =useState(null);
    useEffect(() => {
        getData()
      },[])
  
    const getData=async()=>{
        
        let response = await axiosPrivate();
        if(response.status ===200) { 
          setData(response.data);
        }
    }

  const navigate = useNavigate(); 
  const handleAction = (_id,action) => {
    const emp= data.find((emp)=> emp._id === _id);
    
    if(action == "edit"){
       let path = `/Editform/${emp._id}`; 
       console.log(typeof emp._id)
       navigate(path);
    }
  }

    return(
    <>
        <Table striped bordered hover variant="dark">
       <thead>
          <tr>
            <th>Index</th>
            <th>Email</th>
            <th>Password</th>
            <th>Name</th>
            <th>Age</th>
            <th>Role</th>
            <th>Edit</th>
            </tr>
          </thead>
          <tbody>
        {data && data.length && (
          <> 
            {data.map((item,index) => {
                return (
                  
                  <tr>
                    <td>{index}</td>
                    <td>{item.email}</td>
                    <td>{item.password}</td>
                    <td>{item.name}</td>
                    <td>{item.age}</td>
                    <td>{item.role}</td>
                    <td><Button onClick={()=>handleAction(item._id,"edit")}>Edit</Button></td>
                  </tr>
                )
              }
              )}
          </>
        )}
        </tbody>
        </Table>
        </>
)
}

export default Mainedit;