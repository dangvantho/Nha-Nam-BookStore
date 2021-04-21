import {createAsyncThunk,createSlice} from '@reduxjs/toolkit'
import axios from 'axios'
import {DOMAIN} from '../../constanes'

export const fetchAddress=createAsyncThunk('address/fetchAddress',async (user)=>{
    const res=await axios.get(`${DOMAIN}/address/${user}`)
    return res.data
})
export const postAddress= createAsyncThunk('address/postAddress',async(data)=>{
    const res= await axios({
        method:'post',
        url: DOMAIN+'/address',
        data: data,
    })
    return res.data
})
const addressSlice=createSlice({
    name:'address',
    initialState: {
        isPending: false,
    },
    reducers:{
        sessionAddress:(state,action)=> action.payload
    },
    extraReducers:{
        [fetchAddress.pending]:state=>{
            state.isPending=true
        },
        [fetchAddress.fulfilled]:(state,action)=>{
            return ({
                ...action.payload,
                isPending: false,
            })
        },
        [postAddress.pending]: state=>{
            state.isPending=true
        },
        [postAddress.fulfilled]:(state,action)=>{
            return ({
                ...action.payload,
                isPending: false,
            })
        }

    }
})
export const {sessionAddress} = addressSlice.actions

export default addressSlice.reducer