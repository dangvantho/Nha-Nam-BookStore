import {createAsyncThunk,createSlice} from '@reduxjs/toolkit'
import axios from 'axios'
import {DOMAIN} from '../../constanes'
// const DOMAIN='http://localhost:8080'
export const fetchCart=createAsyncThunk('session/fetchCart',async (id)=>{
    const res= await axios({
        method:'get',
        url: DOMAIN + '/session/cart/'+id,
    })
    return res.data
})
export const fetchSessionId=createAsyncThunk('session/fetchSessionId',async ()=>{
    const res= await axios({
        method: 'get',
        url:DOMAIN+ '/session'
    })
    return res.data
})
export const deleteSession=createAsyncThunk('session/deleteSession', async (id)=>{
    const res= await axios({
        method:'delete',
        url:DOMAIN+'/session/'+id,
    })
    return res.data
})
export const updateCartSession= createAsyncThunk('session/updateCart',async(data)=>{
    const res = await axios({
        method:'PUT',
        url:DOMAIN+'/session/cart',
        data: data,
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
            state.cart.sort((a,b)=>{
                return new Date(a.createAt) - new Date(b.createAt)
            })
        },
        [fetchSessionId.fulfilled]:(state,action)=>{
            const {_id,cart} = action.payload.session
            localStorage.setItem('sessionId',_id)
            state.sessionId=_id
            state.cart=cart.sort((a,b)=>{
                return new Date(a.createAt) - new Date(b.createAt)
            })
        },
        [deleteSession.fulfilled]:()=>{
            localStorage.removeItem('sessionId')
            return ({sessionId: null, cart:[]})
        },
        [updateCartSession.fulfilled]:(state,action)=>{
            state.cart=action.payload.cart
            state.cart.sort((a,b)=>{
                return new Date(a.createAt) - new Date(b.createAt)
            })
        }
    },
})
 export default sessionSlice.reducer