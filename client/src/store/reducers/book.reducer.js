import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
const domain='http://localhost:8080'
export const fetchAddBook= createAsyncThunk('books/addBook',async (data)=>{
    const res= await axios({
        method:'post',
        url: domain+'/book',
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
        url: domain+'/book',
        params: params,
    })
    return res.data
})
export const fetchOneBook=createAsyncThunk('books/fetchOneBook',async (id)=>{
    const url= domain+'/book/'+id
    const res= await axios({url, method:'get'})
    return res.data
})
export const fetchByFilter=createAsyncThunk('books/fetchByFilter',async (filter)=>{
    const res= await axios({
        method:'post',
        url:domain+'/book/sortBy',
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
        },
        formErr:null,
        book:'',
        isLoading:false,
        filterBooks:{},
    },
    reducers:{
        
    },
    extraReducers:{
        [fetchAddBook.fulfilled]:(state,action)=>{
            const res=action.payload
            if(res.errs) state.formErr=res.errs
            else{
                console.log(res)
            }
        },
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
        // [fetchOneBook.pending]:(state,action)=>state.isLoading=true,
        [fetchOneBook.fulfilled]:(state,action)=>{
            const res=action.payload
            if(res.err) {
                state.book=res.err
                state.isLoading=false
            }
            else {
                state.book=res
                state.isLoading=false
            }
        },
        [fetchByFilter.fulfilled]:(state,action)=>{
            const res= action.payload
            const {data,key}=res
            state.filterBooks[key]=data
        }
    }
})
export default booksSlice.reducer