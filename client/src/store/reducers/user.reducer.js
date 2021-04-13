import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
import { DOMAIN } from '../../constanes'

// const DOMAIN='http://localhost:8080'
// Register
export const fetchUser=createAsyncThunk('user/createUser',async (data)=>{
    const res= await axios(
        {
            method: 'post',
            url: DOMAIN+'/post/user',
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
            url: DOMAIN+'/post/login',
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
        url:DOMAIN+'/post/auth',
    })
    return res.data
})
// Update cart
export const updateCart= createAsyncThunk('user/updateCart',async(data)=>{
    const res = await axios({
        method:'PUT',
        url:DOMAIN+'/post/user/updateCart',
        data: data,
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
                let {name, isAdmin, cart, password,accesstoken}= res
                cart.sort((a,b)=>{
                    return new Date(a.createAt) - new Date(b.createAt)
                })
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
                let {name, isAdmin, cart, password, accesstoken}= res
                cart.sort((a,b)=>{
                    return new Date(a.createAt) - new Date(b.createAt)
                })
                document.cookie=`accesstoken=${accesstoken}`
                return ({name, isAdmin, cart, password, accesstoken, formErr:null})
            }
        },
        [updateCart.fulfilled]:(state,action)=>{
            state.cart=action.payload.cart
            state.cart.sort((a,b)=>{
                return new Date(a.createAt) - new Date(b.createAt)
            })
        }
    }
})
export const {checkUser,logOut}=userSlice.actions

export default userSlice.reducer