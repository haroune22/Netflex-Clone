import axios from 'axios'
import { loginFailure, loginStart, loginSuccess } from './AuthActions'
const apiurl = process.env.apiurl
export const login = async(user,dispatch)=>{

    dispatch(loginStart());
    try {
        const res = await axios.post(`${apiurl}auth/Login`,user)
        dispatch(loginSuccess(res.data))
    } catch (err) {
        dispatch(loginFailure())
    }
}