import { CreateMovieFailure, CreateMovieStart, CreateMovieSuccess, deleteMovieFailure, deleteMovieStart, deleteMovieSuccess, GetMoviesFailure, GetMoviesStart, GetMoviesSuccess } from "./MovieActions"
const apiurl = process.env.apiurl
import axios from 'axios'

//get
export const getMovies =async(dispatch)=>{
   dispatch(GetMoviesStart())
   try {
    const res =await axios.get(`${url}movie/`,{headers:{token:"bearer " + JSON.parse(localStorage.getItem("user")).accessToken},})
    dispatch(GetMoviesSuccess(res.data))
   } catch (err) {
    dispatch(GetMoviesFailure())
   }

}

//create
export const CreateMovie =async(movie,dispatch)=>{
   dispatch(CreateMovieStart())
   try {
const res = await axios.post("http://localhost:8800/api/movie/",movie,{headers:{token:"bearer " + JSON.parse(localStorage.getItem("user")).accessToken},})
    dispatch(CreateMovieSuccess(res.data))
   } catch (err) {
    dispatch(CreateMovieFailure())
   }
}



//delete
export const deleteMovie =async(id,dispatch)=>{
   dispatch(deleteMovieStart())
   try {
await axios.delete("http://localhost:8800/api/movie/"+id,{headers:{token:"bearer " + JSON.parse(localStorage.getItem("user")).accessToken},})
    dispatch(deleteMovieSuccess(id))
   } catch (err) {
    dispatch(deleteMovieFailure())
   }
}