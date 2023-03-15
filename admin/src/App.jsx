import './App.css';
import Sidebar from './Components/sidebar/Sidebar';
import Topbar from './Components/Topbar/Topbar';
import Home from './Pages/Home/Home';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Userlist from './Pages/UserList/Userlist';
import User from './Pages/User/User';
import Newuser from './Pages/newuser/Newuser';
import Productlist from './Pages/ProductList/Productlist';
import Product from './Pages/Product/Product';
import NewProduct from './Pages/NewProduct/NewProduct';
import Login from './Pages/Login/Login';
import { useContext } from 'react';
import { AuthContext } from './Context/authContext/AuthContext';
import List from './Pages/Lists/List';
import Listsingle from './Pages/List/Listsingle';
import NewList from './Pages/NewList/NewList';

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();
  const { user } = useContext(AuthContext);

  return (
    <>
      {location.pathname !== '/Login' && <Topbar />}
      <div className="container">
        {location.pathname !== '/Login' && <Sidebar />}
        <Routes>
          <Route path="/Login" element={user ? <Navigate to="/" /> : <Login />} />
          <Route path="/users" element={user ? <Userlist /> : <Navigate to="/Login" />} />
          <Route path="/user/:userId" element={user ? <User /> : <Navigate to="/Login" />} />
          <Route path="/newUser/" element={user ? <Newuser /> : <Navigate to="/Login" />} />
          <Route path="/movies" element={user ? <Productlist /> : <Navigate to="/Login" />} />
          <Route path="/product/:productId" element={user ? <Product /> : <Navigate to="/Login" />} />
          <Route path="/newProduct/" element={user ? <NewProduct /> : <Navigate to="/Login" />} />
          <Route path="/lists" element={user ? <List /> : <Navigate to="/Login" />} />
          <Route path="/list/:listId" element={user ? <Listsingle /> : <Navigate to="/Login" />} />
          <Route path="/newList/" element={user ? <NewList /> : <Navigate to="/Login" />} />
          <Route  path="/" element={user ? <Home /> : <Navigate to="/Login" />} />
          <Route path='/'element={<Home/>}/>
        </Routes>
      </div>
    </>
  );
}

export default App;