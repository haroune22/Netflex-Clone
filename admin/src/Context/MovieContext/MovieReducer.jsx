const MovieReducer = (state,action)=>{
    switch (action.type){
        case "Movies_Start":
            return{
                    movies:[],
                    isFetching:true,
                    error:false,
            }
        case "Movies_Success":
            return{
                    movies:action.payload,
                    isFetching:false,
                    error:false,
            }
        case "Movies_Failure":
            return{
                    movies:[],
                    isFetching:false,
                    error:true,
            }
        case "Delete_Movie_Start":
            return{
                  ...state,
                  isFetching:true,
                  error:false,
            }
        case "Delete_Movie_Success":
            return{
                    movies:state.movies.filter((movie)=>movie._id !== action.payload),
                    isFetching:false,
                    error:false,
            }
        case "Delete_Movie_Failure":
            return{
                    ...state,
                    isFetching:false,
                    error:true,
            }
        case "Create_Movie_Start":
            return{
                  ...state,
                  isFetching:true,
                  error:false,
            }
        case "Create_Movie_Success":
            return{
                    movies:[...state.movies,action.payload],
                    isFetching:false,
                    error:false,
            }
        case "Create_Movie_Failure":
            return{
                    ...state,
                    isFetching:false,
                    error:true,
            }
            default:
                return {
                      ...state
                }
            }    
}
export default MovieReducer;