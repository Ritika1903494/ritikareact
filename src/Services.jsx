// all front end API

import axios from 'axios';

export const post_Emp_Data=async(email,password,name,age,role) => {
    try{
       const response= await axios.post("http://localhost:8081/users/emp_post", {
            email,password,name,age,role  
        })
            return response;
    }
    catch(error){
      console.log("error",error)
    }
  }

  export const post_otp=async(email) => {
    try{
      const response= await axios.post(`http://localhost:8081/users/generate_otp/${email}`, {
           email
       })
          if(response.status===200){
           return Promise.resolve(response)
          }
   }
   catch(error){
    if(error.response.status===422){
     return Promise.reject({status:422,message:error.response.data.message});
    }
    return Promise.reject({status:error.response.status,message:error.response.data.message});
   }
  }


  export const post_Emp_Sign=async(email,password) => {
    try{
       const response= await axios.post("http://localhost:8081/users/emp_sign", {
            email,password
        })
           if(response.status===200){
            return Promise.resolve(response)
           }
    }
    catch(error){
     if(error.response.status===422){
      return Promise.reject({status:422,message:error.response.data.message});
     }
     return Promise.reject({status:error.response.status,message:error.response.data.message});
    }
  }


export const get_Emp_Data=async()=>{
    try{
         
         const response = await axios.get("http://localhost:8081/users/emp_gets");
         console.log(response.data)
         console.log("asfdfgghhg")
         return response;

    }
    catch(error){
        console.log("error",error)
    }
}

export const verify_otp=async(otp)=>{
  console.log(otp)
  try{
    const response= await axios.post(`http://localhost:8081/users/verify_otp`, {
         otp
     })
        if(response.status===200){
         return Promise.resolve(response)
        }
 }
  catch(error){
    if(error.response.status===422){
      return Promise.reject({status:422,message:error.response.data.message});
     }
     return Promise.reject({status:error.response.status,message:error.response.data.message});
    }
  }


export const get_Emp_Data_id=async(_id)=>{
  console.log(_id)
  try{
       const response = await axios.get(`http://localhost:8081/users/emp_getemp/${_id}`);
       return response;
  }
  catch(error){
      console.log("error",error)
  }
}

export const pass_update=async(email,newpassword) => {
   
  try{
      const response=await axios.put(`http://localhost:8081/users/update_pass/${email}`, {
        newpassword
      })
      console.log(response);
       return response;
  }
  catch(error){
 console.log("error",error)
  }
}

export const update_Emp_Data=async(_id,email,password,name,age,role) => {
   
    try{
        const response=await axios.put(`http://localhost:8081/users/emp_put/${_id}`, {
            email,password,name,age,role  
        })
         return response;
    }
    catch(error){
   console.log("error",error)
    }
  }

  export const delete_Emp_Data=async(_id) => {
    try{
      console.log(_id)
        const response=await axios.delete(`http://localhost:8081/users/emp_delete/${_id}`)
        return response;
    }
    catch(error){
   console.log("error",error)
    }
  }
  // export const delete_Emp_Data2=async(id) => {
  //   try{
  //       const response=await axios.delete(`http://localhost:8081/emp_deleteuserT/:${id}`)
  //        return response;
  //   }
  //   catch(error){
  //  console.log("error",error)
  //   }
  // }

