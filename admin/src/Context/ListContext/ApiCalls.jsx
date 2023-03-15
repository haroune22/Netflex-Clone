import { GetlistsStart,GetlistsSuccess ,GetlistsFailure, deletelistStart, deletelistSuccess, deletelistFailure, CreatelistStart, CreatelistSuccess, CreatelistFailure } from "./ListActions"
const apiurl = process.env.apiurl
import axios from 'axios'

//get
export const getlists =async(dispatch)=>{
   dispatch(GetlistsStart())
   try {
    const res =await axios.get(`${url}lists/`,{headers:{token:"bearer " + JSON.parse(localStorage.getItem("user")).accessToken},})
    dispatch(GetlistsSuccess(res.data))
   } catch (err) {
    dispatch(GetlistsFailure())
   }

}

//create
export const CreateList =async(list,dispatch)=>{
   dispatch(CreatelistStart())
   try {
const res = await axios.post("http://localhost:8800/api/lists/",list,{headers:{token:"bearer " + JSON.parse(localStorage.getItem("user")).accessToken},})
    dispatch(CreatelistSuccess(res.data))
   } catch (err) {
    dispatch(CreatelistFailure())
   }
}



//delete
export const deleteList =async(id,dispatch)=>{
   dispatch(deletelistStart())
   try {
await axios.delete("http://localhost:8800/api/lists/"+id,{headers:{token:"bearer " + JSON.parse(localStorage.getItem("user")).accessToken},})
    dispatch(deletelistSuccess(id))
   } catch (err) {
    dispatch(deletelistFailure())
   }
}