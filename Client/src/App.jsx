
import './App.scss'
import Home from './Pages/Home/Home'
import Login from './Pages/Login/Login'
import Register from './Pages/Register/Register'
import Watch from './Pages/Watch/Watch'
import {BrowserRouter as Router,
  Routes,
  Route,
  }from 'react-router-dom'
import { useContext } from 'react'
import{ AuthContext} from './authContext/AuthContext'

function App() {
const {user}=useContext(AuthContext)
  return (
    <Router>
    <Routes>
      <Route path="/Register" element={user ? <Home/> : <Register />}/>
        <Route path="/Login" element={user ? <Home/> : <Login />}/>
        <Route path="/" element={user ? <Home/> : <Login />}/>
      {user && (<>
    <Route  path="/" element={<Home type="" genre=""/>}/>
        <Route  path="/movie" element={<Home type="movie"/>}/>
        <Route  path="/series" element={<Home type="series"/>}/>
        <Route  path="/Watch" element={<Watch/>}/>
        </>
      )}
      
    </Routes>
    
    </Router>
  )
}

export default App
