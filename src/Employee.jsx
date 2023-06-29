
import React, { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table'
import {get_Emp_Data} from "./Services.jsx";
import {axiosPrivate} from "./Axios_interceptor.jsx";

function Employee(){
    const[data,setData] =useState(null);

    useEffect(() => {
        getData()
      },[]);

      const getData=async()=>{
        let response = await axiosPrivate();
        if(response.status == 200) {
          setData(response.data);
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

export default Employee;