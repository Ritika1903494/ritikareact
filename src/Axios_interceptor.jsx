import axios from 'axios';
import {getData} from './Services_local.jsx';

export const axiosPrivate=axios.create({
    baseURL:`http://localhost:8081/users/emp_get`
});

axiosPrivate.interceptors.request.use(
    config => {
    const data= getData('user_authority')
    const Token=data.token;
    console.log(Token)
    if(Token){
        config.headers['Authorization'] = `Bearer ${Token}`;   
    }
    console.log(config);
    return config;
},
 (error) => {
    Promise.reject(error)
  }

)