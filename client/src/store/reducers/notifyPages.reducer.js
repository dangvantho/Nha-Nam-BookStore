import {createAsyncThunk,createSlice} from '@reduxjs/toolkit'
import axios from 'axios'
import {DOMAIN} from '../../constanes'

// Get content notify pages
export const fetchNotifyPages= createAsyncThunk('notifyPages/fetchNotifyPages',async(title)=>{
    const res= await axios.get(`${DOMAIN}/pages/${title}`)
    return res.data 
})
// Create notify pages
export const createNotifyPage=createAsyncThunk('notifyPages/createPage',async(data)=>{
    const res= axios({
        method:'post',
        headers:{ accesstoken: data.accesstoken },
        url: DOMAIN+'/pages',
        data: {
            title: data.title,
            content: data.content,
        }
    })
})
const notifyPages= createSlice({
    name:'notifyPages',
    initialState:{
        title:'',
        content: '',
        isPending: false,
    },
    extraReducers:{
        [fetchNotifyPages.pending]: state=>{
            state.isPending= true
        },
        [fetchNotifyPages.fulfilled]:(state,action)=>{
            const {title,content}=action.payload
            return ({title,content,isPending: false})
        }
    },
})
export default notifyPages.reducer