import {createAsyncThunk,createSlice, isPending} from '@reduxjs/toolkit'
import {DOMAIN} from '../../constanes'
import axios from 'axios'

export const fetchCommentOfBook= createAsyncThunk('comment/fetchComments',async (id,pages)=>{
    const res= await axios({
        method:'get',
        url:DOMAIN+'/comments/'+id,
        params:{pages},
    })
    return res.data
})
export const postComment=createAsyncThunk('comment/postComment',async(data)=>{
    console.log(data)
    const res= await axios({
        method:'post',
        url:DOMAIN+'/comments/'+data.idBook,
        data:data,
    })
    return res.data
})
const comments=createSlice({
    name:'comment',
    initialState:{
        data:[],
        err:null,
        isPending: false,
    },
    reducers:{
        sortComment:(state,action)=>{
            const sort=action.payload
            if(sort==1)
              state.data.sort((a,b)=>{
                  return new Date(a.createAt) - new Date(b.createAt)
                })
            else state.data.sort((a,b)=>{
                return new Date(b.createAt) - new Date(a.createAt)
            })  
        }
    },
    extraReducers:{
        [fetchCommentOfBook.fulfilled]:(state,action)=>{
            state.data=action.payload
        },
        [postComment.fulfilled]:(state)=>{
            state.isPending=false
        },
        [postComment.pending]:(state,action)=>{
            state.isPending=true
        },
    }
})
export const {sortComment}= comments.actions
export default comments.reducer