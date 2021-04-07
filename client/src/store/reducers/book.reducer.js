import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
const domain='http://localhost:8080'
export const fetchAddBook= createAsyncThunk('books/addBook',async (data)=>{
    const res= await axios({
        method:'post',
        headers: { 'Content-Type': 'application/json'},
        url: domain+'/post/book',
        data: data,
    })
    return res.data
})
export const fetchBook= createAsyncThunk('books/fetchBook',async ()=>{
    const res= await axios({
        method:'get',
        headers:{'Content-Type': 'application/json'},
        url: domain+'/book',
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
    },
    reducers:{
        
    },
    extraReducers:{
        [fetchAddBook.fulfilled]:(state,action)=>{
            const res=action.payload
            if(res.errs) state.formErr=res.errs
            else{
                state.type[res.type].push(res)
            }
        },
        [fetchBook.fulfilled]:(state,action)=>{
            state.type={...action.payload}
        }
    }
})
export default booksSlice.reducer