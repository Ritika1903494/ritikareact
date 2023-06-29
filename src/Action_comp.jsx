import {useDispatch, useSelector } from "react-redux";
import{userSelector,clearState} from './redux/reducer/Slice.jsx';
import { useEffect } from "react";
import Table from 'react-bootstrap/Table'
import { getEmployee } from "./redux/reducer/Slice.jsx";

export default function Action_comp(){

    const dispatch=useDispatch();
    const{
        employee,
        isFetching,
        isError,
        errorCode,
        errorMessage,
    }=useSelector(userSelector);


useEffect(() =>{
    dispatch(clearState());
    dispatch(getEmployee());
},[])

return (
    
        
    <>
    {isFetching?(<div>
               <h2>Loading...</h2>
         </div>):(<div> <Table striped bordered hover variant="dark">
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
    {employee && employee.length && (
      <> 
        {employee.map((item,index) => {
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
    </Table></div>)}

    </>
)
}