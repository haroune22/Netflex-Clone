export const GetMoviesStart= () =>({
    type:"Movies_Start",
})
export const GetMoviesSuccess= (movies) =>({
    type:"Movies_Success",
    payload:movies,
})
export const GetMoviesFailure= () =>({
    type:"Movies_Failure",
})
export const deleteMovieStart= () =>({
    type:"Delete_Movie_Start",
})
export const deleteMovieSuccess= (id) =>({
    type:"Delete_Movie_Success",
    payload:id,
})
export const deleteMovieFailure= () =>({
    type:"Delete_Movie_Failure",
})
export const CreateMovieStart= () =>({
    type:"Create_Movie_Start",
})
export const CreateMovieSuccess= (movie) =>({
    type:"Create_Movie_Success",
    payload:movie,
})
export const CreateMovieFailure= () =>({
    type:"Create_Movie_Failure",
})