import axios from 'axios'
import { loginFailure, loginStart, loginSuccess } from './AuthActions'
const apiurl = process.env.apiurl
export const login = async(user,dispatch)=>{

    dispatch(loginStart());
    try {
        const res = await axios.post(`${url}auth/Login`,user)
       res.data.isAdmin && dispatch(loginSuccess(res.data))
    } catch (err) {
        dispatch(loginFailure())
    }
}