
import React, { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table'
import {get_product} from "./Services_1.jsx";


function Product_detail(){
    const[data,setData] =useState(null);

    useEffect(() => {
        getData()
      },[]);

      const getData=async()=>{
        let response = await get_product();
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
        <th>Product Name</th>
        <th>Price</th>
        <th>Manufactured On</th>
        <th>Company Name</th>
        <th>Quality</th>
        </tr>
      </thead>
      <tbody>
    {data && data.length && (
      <> 
        {data.map((item,index) => {
            return (
              
              <tr>
                <td>{index}</td>
                <td>{item.productname}</td>
                <td>{item.price}</td>
                <td>{item.manufactured}</td>
                <td>{item.companyname}</td>
                <td>{item.quality}</td>
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

export default Product_detail;