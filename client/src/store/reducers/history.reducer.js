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
        isPending: false,
    },
    extraReducers:{
        [postHistory.pending]:state=>{
            state.isPending= true
        },
        [postHistory.fulfilled]:(state,action)=>{
            state.isPending= false
        },
        [fetchByUser.pending]:state=>{
            state.isPending= true
        },
        [fetchByUser.fulfilled]:(state,action)=>{
            state.user=action.payload
            state.isPending= false
        },
        [fetchHistoryById.pending]: state=>{
            state.isPending= true
        },
        [fetchHistoryById.fulfilled]:(state,action)=>{
            state.id=action.payload
            state.isPending= false
        }
    },
})
export default historySlice.reducer