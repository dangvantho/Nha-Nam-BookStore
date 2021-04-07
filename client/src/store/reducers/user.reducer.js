import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

const domain='http://localhost:8080'
// Register
export const fetchUser=createAsyncThunk('user/createUser',async (data)=>{
    const res= await axios(
        {
            method: 'post',
            url: domain+'/post/user',
            data: data,
          }
    )
    return res.data
})
// Login
export const fetchLogin=createAsyncThunk('user/login',async (data)=>{
    const res= await axios(
        {
            method:'post',
            url: domain+'/post/login',
            data: data,
        }
    )
    return res.data
})
// Check accesstoken
export const fetchAccessToken=createAsyncThunk('user/accesstoken',async (accesstoken)=>{
    const res=await axios({
        method: 'post',
        headers:{'Content-Type': 'application/x-www-form-urlencoded', accesstoken},
        url:domain+'/post/auth',
    })
    return res.data
})
const userSlice=createSlice({
    name:'user',
    initialState:{
        name:null,
        isAdmin:false,
        password:null,
        cart:[],
        formErr:null,
        accesstoken: document.cookie.split('=')[1] || null,
    },
    reducers:{
        checkUser:(state,action)=>state,
        logOut:()=>{
            document.cookie='accesstoken='
            return ({name:null, isAdmin: false, password:null, cart:[], formErr:null, accesstoken:null})
        }
    },
    extraReducers:{
        [fetchUser.fulfilled]: (state,action)=>{
            const res=action.payload
            if(res.errs){
                state.formErr=res.errs
            } else{
                console.log(res)
            }
        },
        [fetchLogin.fulfilled]:(state,action)=>{
            const res=action.payload
            if(res.errs){
                state.formErr= res.errs
            } else{
                const {name, isAdmin, cart, password,accesstoken}= res
                document.cookie=`accesstoken=${accesstoken}`
                return ({name, isAdmin, cart, password, accesstoken, formErr:null})
            }
        },
        [fetchAccessToken.fulfilled]:(state,action)=>{
            const res=action.payload
            if(res.errs) {
                document.cookie='accesstoken='
                return ({name:null, isAdmin: false, password:null, cart:[], formErr: null, accesstoken: null})
            } else{
                const {name, isAdmin, cart, password, accesstoken}= res
                document.cookie=`accesstoken=${accesstoken}`
                return ({name, isAdmin, cart, password, accesstoken, formErr:null})
            }
        }
    }
})
export const {checkUser,logOut}=userSlice.actions

export default userSlice.reducer