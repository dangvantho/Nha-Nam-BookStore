import {createAsyncThunk,createSlice} from '@reduxjs/toolkit'
import axios from 'axios'
const domain='http://localhost:8080'
export const fetchCart=createAsyncThunk('session/fetchCart',async (id)=>{
    const res= await axios({
        method:'get',
        data:id,
        url: domain + '/session/cart',
    })
    return res.data
})
export const fetchSessionId=createAsyncThunk('session/fetchSessionId',async ()=>{
    const res= await axios({
        method: 'get',
        url:domain+ '/session'
    })
    return res.data
})
export const deleteSession=createAsyncThunk('session/deleteSession', async (id)=>{
    const res= await axios({
        method:'delete',
        url:domain+'/session/'+id,
    })
    return res.data
})
const sessionSlice=createSlice({
    name:'session',
    initialState:{
        sessionId: localStorage.getItem('sessionId')||null,
        cart:[],
    },
    reducers:{},
    extraReducers:{
        [fetchCart.fulfilled]:(state,action)=>{
            state.cart=action.payload.cart
        },
        [fetchSessionId.fulfilled]:(state,action)=>{
            const {_id,cart} = action.payload.session
            localStorage.setItem('sessionId',_id)
            state.sessionId=_id
            state.cart=cart
        },
        [deleteSession.fulfilled]:()=>{
            localStorage.removeItem('sessionId')
            return ({sessionId: null, cart:[]})
        }
    },
})
 export default sessionSlice.reducer