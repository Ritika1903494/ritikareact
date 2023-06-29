import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import{get_Emp_Data} from "../../Services.jsx";
import {axiosPrivate} from "../../Axios_interceptor.jsx";

const initialState={
    employee:[],
    isFetching:false,
    isError:false,
    errorCode:0,
    errorMessage:""
};

export const getEmployee=createAsyncThunk(
    "employee/getEmployee",
    async(_,thunkAPI) =>{
        try{
            const response= await axiosPrivate();
            console.log(response);
            if(response.status===200){
                return response.data;
            }
            else{
                const message=response.message;
                const status=response.status||404;
                return thunkAPI.rejectWithValue([status,message]);
            }
        }
        catch(error){
            console.log(error)
             if(error.status && error.message){
                const message=error.message;
                const status=error.status;
                return thunkAPI.rejectWithValue([status,message]);
             }
             console.log("Error",error.response.data);
             thunkAPI.rejectWithValue([error.error,error.message]);
        }
    }
)

export const employeeSlice=createSlice({
    name:"employee",
    initialState:initialState,
    reducers:{
       clearState:(state) =>{
        console.log("ritika thakur")
        state.isError=false;
        state.errorCode=0;
        state.errorMessage="";
        state.isFetching=false;
        return state
       } 
    },
    extraReducers:{
        [getEmployee.fulfilled]:(state,{payload}) =>{
            state.employee=payload;
            state.isFetching=false;
            state.isError=false;
            state.errorCode=0;
            state.errorMessage="";
            return state
        },
        [getEmployee.rejected]:(state,{payload}) =>{
            state.isFetching=false;
            state.isError=false;
            state.errorCode=payload[0];
            state.errorMessage=payload[1];
            return state
        },
        [getEmployee.pending]:(state) =>{
           state.isFetching=true;
           return state
        },
    }
})

export const {clearState} = employeeSlice.actions;
export const userSelector =(state)  => state.employee;  