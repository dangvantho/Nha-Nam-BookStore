import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

const domain='http://localhost:8080'
export const fetchUser=createAsyncThunk('user/getUser',async (data)=>{
    const res= await axios(
        {
            method: 'post',
            headers: { 'Content-Type': 'application/json'},
            url: domain+'/post/user',
            data: data,
          }
    )
    return res.data
})
export const fetchLogin=createAsyncThunk('user/login',async (data)=>{
    const res= await axios(
        {
            method:'post',
            headers: { 'Content-Type': 'application/json'},
            url: domain+'/post/login',
            data: data,
        }
    )
    return res.data
})
const userSlice=createSlice({
    name:'user',
    initialState:{
        name:null,
        isAdmin:false,
        password:null,
        cart:'',
        formErr:null,
    },
    reducers:{
        checkUser:(state,action)=>state
    },
    extraReducers:{
        [fetchUser.fulfilled]: (state,action)=>{
            const res=action.payload
            if(res.errs){
                state.formErr=res.errs
            } else{
                state.name=res.name
                state.cart=res.cart
                state.isAdmin=res.isAdmin
                state.formErr=null
                state.password=res.password
            }
        },
        [fetchUser.rejected]:()=>console.log('Error'),
        [fetchLogin.fulfilled]:(state,action)=>{
            const res=action.payload
            if(res.errs){
                state.formErr= res.errs
            } else{
                state.name=res.name
                state.cart=res.cart
                state.isAdmin=res.isAdmin
                state.formErr=null
                state.password=res.password
            }
        }
    }
})
export const {checkUser}=userSlice.actions

export default userSlice.reducer