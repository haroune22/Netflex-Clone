import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { AuthContextProvider } from './Context/authContext/AuthContext'
import { MovieContextProvider } from './Context/MovieContext/MovieContext'
import { ListContextProvider } from './Context/ListContext/ListContext'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <AuthContextProvider>
    <MovieContextProvider>
        <ListContextProvider>
    <App />
        </ListContextProvider>
    </MovieContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
)
