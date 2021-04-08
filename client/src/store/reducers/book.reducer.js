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
export const fetchImageBook= createAsyncThunk('books/fetchImageBook', async (data)=>{
    const fetchImage= function (id){
        return new Promise((resolve,reject)=>{
            axios({
                method:'get',
                url:domain+'/book/image',
                params:{id: id},
            }).then(res=>resolve(res.data))
            .catch(err=>reject(err))
        })
    }
    const values= await Promise.all(data.list.map(book=>fetchImage(book._id)))
    return {data: values, type: data.type}
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
        images:[],
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
        [fetchBook.fulfilled]:(state,action)=>{
            const res=action.payload
            if(res.data.length>0){
                state.type[res.type]=res.data
                //state.type[]
            }
        },
        [fetchImageBook.fulfilled]: (state,action)=>{
            const data= action.payload
            const type= data.type
            const books= state.type[type]
            let newBooks=[]
            data.data.map(value=>{
                let book= books.find(x=>x._id===value.id)
                book.image=value.data
                newBooks.push(book)
            })
            state.images=newBooks
        }
    }
})
export default booksSlice.reducer