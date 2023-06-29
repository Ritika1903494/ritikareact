import axios from 'axios';

export const post_product=async(productname,price,manufactured,companyname,quality) => {
    try{
       const response= await axios.post("http://localhost:8081/users/postproduct", {
        productname,price,manufactured,companyname,quality
        })
            return response;
    }
    catch(error){
      console.log("error",error)
    }
  }


  export const get_product=async()=>{
    try{
         
         const response = await axios.get("http://localhost:8081/users/getproducts");
         console.log(response.data)
         return response;

    }
    catch(error){
        console.log("error",error)
    }
}
 
export const get_product_by_id=async(_id)=>{
    console.log(_id)
    try{
         const response = await axios.get(`http://localhost:8081/users/getproduct/${_id}`);
         return response;
    }
    catch(error){
        console.log("error",error)
    }
  }


  export const update_product=async(_id,productname,price,manufactured,companyname,quality) => {
   
    try{
        const response=await axios.put(`http://localhost:8081/users/putproduct/${_id}`, {
            productname,price,manufactured,companyname,quality
        })
         return response;
    }
    catch(error){
   console.log("error",error)
    }
  }

  export const delete_product=async(_id) => {
    try{
      console.log(_id)
        const response=await axios.delete(`http://localhost:8081/users/deleteproduct/${_id}`)
        return response;
    }
    catch(error){
   console.log("error",error)
    }
  }