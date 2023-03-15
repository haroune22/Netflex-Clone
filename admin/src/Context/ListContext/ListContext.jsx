import { useReducer } from "react";
import { createContext } from "react";
import listReducer from "./ListReducer";


const INITIAL_STATE = {
    lists: [],
    isFetching: false,
    error: false,
  };
  
  export const ListContext = createContext(INITIAL_STATE);
  
  export const ListContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(listReducer, INITIAL_STATE);
  
    return (
      <ListContext.Provider
        value={{
          lists: state.lists,
          isFetching: state.isFetching,
          error: state.error,
          dispatch,
        }}
      >
        {children}
      </ListContext.Provider>
    );
  };