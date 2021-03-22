import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchUser=createAsyncThunk('user/getUser',async (data)=>{
    const res= await axios(
        {
            method: 'post',
            headers: { 'Content-Type': 'application/json'},
            url: 'https://book-store-server-vn.herokuapp.com/post/user',
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
    },
    reducers:{
        checkUser:(state,action)=>state
    },
    extraReducers:{
        [fetchUser.fulfilled]: (state,action)=>{
            state=action.payload
        },
        [fetchUser.rejected]:()=>console.log('Error')
    }
})
export const {checkUser}=userSlice.actions

export default userSlice.reducer