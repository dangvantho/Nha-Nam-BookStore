import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
import {DOMAIN} from '../../constanes'
export const fetchAddBook= createAsyncThunk('books/addBook',async (data)=>{
    const res= await axios({
        method:'post',
        url: DOMAIN+'/book',
        data: data,
    })
    return res.data
})
export const fetchBook= createAsyncThunk('books/fetchBook',async (data)=>{
    const params={
        type: data.type,
        page: data.page || '1',
    }
    const res= await axios({
        method:'get',
        url: DOMAIN+'/book',
        params: params,
    })
    return res.data
})
export const fetchOneBook=createAsyncThunk('books/fetchOneBook',async (id)=>{
    const url= DOMAIN+'/book/'+id
    const res= await axios({url, method:'get'})
    return res.data
})
export const fetchByFilter=createAsyncThunk('books/fetchByFilter',async (filter)=>{
    const res= await axios({
        method:'post',
        url:DOMAIN+'/book/sortBy',
        data:{filter},
    })
     return res.data
}) 

const booksSlice=createSlice({
    name:'books',
    initialState:{
        type:{
            literaryVietNam:[],
            children:[],
            foreign:[],
            novel:[],
            science:[],
            bestSeller:[],
        },
        formErr:null,
        book:'',
        isPending:false,
        filterBooks:{},
    },
    reducers:{
        updateBook:(state,action)=>{
            state.book=action.payload
        }
    },
    extraReducers:{
        // Add new book
        [fetchAddBook.pending]: state=>{
            state.isPending= true
        },
        [fetchAddBook.fulfilled]:(state,action)=>{
            const res=action.payload
            state.isPending=false
            if(res.errs) state.formErr=res.errs
        },
        // Get books have the same category
        [fetchBook.pending]:(state,action)=>{
            const {type}=action.meta.arg
            state.type[type]=null
        },
        [fetchBook.fulfilled]:(state,action)=>{
            const res=action.payload
            const {type,data}=res
            if(data.length>0){
                state.type[type]=data
                const info={list: data, type}
            }
        },
        // get one book when view information book
        [fetchOneBook.pending]:state=>{
            state.isPending= true
        },
        [fetchOneBook.fulfilled]:(state,action)=>{
            const res=action.payload
            state.isPending=false
            if(res.err) {
                state.book=res.err
            }
            else {
                state.book=res
            }
        },
        // Fetch books have the same filter
        [fetchByFilter.pending]:state=>{
            state.isPending= true
        },
        [fetchByFilter.fulfilled]:(state,action)=>{
            const res= action.payload
            state.isPending= false
            const {data,key}=res
            state.filterBooks[key]=data
        }
    }
})
export const {updateBook}=booksSlice.actions
export default booksSlice.reducer