
import React, { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button';  
import {get_Emp_Data,delete_Emp_Data} from "./Services.jsx";
import Simple_modal from "./Simple_modal.jsx";
import Delete_modal from "./Delete_modal.jsx"; 
import {axiosPrivate} from "./Axios_interceptor.jsx";

function EmpMain(){
  const[data,setData] =useState(null);
  const [emp,setEmp] = useState({ email: '', password: '',name:'',age:'',role:'' });
  const [show, setShow] = useState(false);
  const [deleteShow,setDeleteShow] = useState(false);
  const [action, setAction] = useState("add");
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const handleDeleteShow = () => setDeleteShow(true);
  const handleDeleteClose = () => setDeleteShow(false);
  useEffect(() => {
      getData()
    },[])

  const getData=async()=>{
      let response = await axiosPrivate();
      if(response.status === 200) {
        setData(response.data);
      }
  }
  const handleAction = (_id,action) => {
    const emp= data.find((emp)=> emp._id === _id);
    if(emp) {
      setEmp(emp);
      setAction(action);
    }
    if(action === "edit"){
      handleShow();
    } else {
      handleDeleteShow();
    } 

  }
  
  const handleDelete= () => {
    if(emp){
      console.log(emp._id)
      delete_Emp_Data(emp._id)
      console.log(emp.email)
      getData();
      
    }
    setDeleteShow(false);
  }
return(<>
    <div>
      <Button variant="success"  align="center"  onClick={handleShow}>Add User</Button>{' '}
    </div>
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
        <th>Delete</th>

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
                <td><Button onClick={()=>handleAction(item._id,"delete")}>Delete</Button></td>
              </tr>
            )
          }
          )}
      </>
    )}
    </tbody>
    </Table>
    <Simple_modal show={show} handleClose={handleClose} emp={emp} setData={setData} setShow={setShow} setEmp={setEmp} action={action}/>
    <Delete_modal show={deleteShow} handleDelete={handleDelete}   handleDeleteClose={ handleDeleteClose} />
 </>
)
}

export default EmpMain;
