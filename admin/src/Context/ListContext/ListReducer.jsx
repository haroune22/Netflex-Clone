const ListReducer = (state,action)=>{
    switch (action.type){
        case "Lists_Start":
            return{
                    lists:[],
                    isFetching:true,
                    error:false,
            }
        case "Lists_Success":
            return{
                    lists:action.payload,
                    isFetching:false,
                    error:false,
            }
        case "Lists_Failure":
            return{
                    lists:[],
                    isFetching:false,
                    error:true,
            }
        case "Delete_List_Start":
            return{
                  ...state,
                  isFetching:true,
                  error:false,
            }
        case "Delete_List_Success":
            return{
                    lists:state.lists.filter((list)=>list._id !== action.payload),
                    isFetching:false,
                    error:false,
            }
        case "Delete_List_Failure":
            return{
                    ...state,
                    isFetching:false,
                    error:true,
            }
        case "Create_List_Start":
            return{
                  ...state,
                  isFetching:true,
                  error:false,
            }
        case "Create_List_Success":
            return{
                    lists:[...state.lists,action.payload],
                    isFetching:false,
                    error:false,
            }
        case "Create_List_Failure":
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
export default ListReducer;