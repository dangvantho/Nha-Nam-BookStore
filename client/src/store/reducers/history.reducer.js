import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {DOMAIN} from '../../constanes'
import axios from 'axios'

export const postHistory= createAsyncThunk('history/postHistory',async(data)=>{
    const res= await axios.post(`${DOMAIN}/history`,{data: data})
    return res.data
})
export const fetchHistoryById= createAsyncThunk('history/fetchHistoryById',async(id)=>{
    const res= await axios.get(`${DOMAIN}/history/${id}`)
    return res.data
})
export const fetchByUser= createAsyncThunk('history/fetchByUser',async(user)=>{
    const res= await axios.get(`${DOMAIN}/history/${user}`)
    return res.data
})
const historySlice= createSlice({
    name:'history',
    initialState:{
        user: null,
        id: null,
    },
    extraReducers:{
        [postHistory.fulfilled]:(state,action)=>{

        },
        [fetchByUser.fulfilled]:(state,action)=>{
            state.user=action.payload
        },
        [fetchHistoryById.fulfilled]:(state,action)=>{
            state.id=action.payload
        }
    },
})
export default historySlice.reducer