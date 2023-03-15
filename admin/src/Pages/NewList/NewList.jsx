import { useState } from 'react'

import './NewList.css'
import { CreateMovie, getMovies } from '../../Context/MovieContext/ApiCalls';
import { useContext } from 'react';
import { ListContext, ListContextProvider } from '../../Context/ListContext/ListContext';

import { MovieContext } from '../../Context/MovieContext/MovieContext';
import { useEffect } from 'react';
import { CreateList } from '../../Context/ListContext/ApiCalls';
import { useNavigation } from 'react-router-dom';
const NewList = () => {

  const [List, setList] = useState(null);

  const {dispatch}=useContext(ListContext)
  const {movies,dispatch:dispatchMovie}=useContext(MovieContext)

  useEffect(()=>{
    getMovies(dispatchMovie)
  },[dispatchMovie])
  const handleChange = (e) => {
    const value = e.target.value;
    setList({...List, [e.target.name]: value});
  }

  const handelSubmit=(e)=>{
 e.preventDefault()
CreateList(List,dispatch)
window.location = "/lists"
  }
  const handleSelect=(e)=>{
    let value = Array.from(e.target.selectedOptions,(option)=>option.value)
    setList({...List,[e.target.name]:value})
  }
console.log(List)
  return (
    <div className='newProduct'>
         <h1 className="addProductTitle">New List</h1>
      <form className="addProductForm">
      <div className="fromLeft">
        <div className="addProductItem">
          <label>Title</label>
          <input type="text" placeholder="Populer Movies" name='title' onChange={handleChange}/>
        </div>
        <div className="addProductItem">
          <label>Genre</label>
          <input type="text" placeholder="Genre..."name='genre' onChange={handleChange}/>
        </div>
        <div className="addProductItem">
          <label>type</label>
          <select name="type"  onChange={handleChange}>
            <option>type</option>
            <option value="movie">movie</option>
            <option value="series">series</option>
          </select>
         
        </div>
        </div>
        <div className="formRight">
        <div className="addProductItem">
          <label>Content</label>
          <select
              multiple
              name="content"
              onChange={handleSelect}
              style={{ height: "280px" }}
            >
              {movies.map((movie) => (
                <option key={movie._id} value={movie._id}>
                  {movie.title}
                </option>
              ))}
            </select>
        </div>
        </div>
            <button className="addProductButton" onClick={handelSubmit}>Create</button>
      </form>
        </div>
  )
}

export default NewList