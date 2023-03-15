
import React, { useEffect, useState } from 'react'
import Featured from '../../Components/Featured/Featured'
import Navbar from '../../Components/Navbar/Navbar'
import './Home.scss'
import List from '../../Components/List/List'
import axios from "axios"
const apiurl = process.env.apiurl



const Home = ({type}) => {
  const [Lists,setLists]=useState([])
  const [genre,setGenre]=useState(null)


  useEffect(()=>{
      window.scrollTo(0, 0);
   
    const getrandomlists = async()=>{
      try {
        const res = await axios.get(`${apiurl}lists${type ?"?type="+ type : ""}${genre ? "&genre="+ genre:""} `,{
          headers:{
            token:"bearer "+JSON.parse(localStorage.getItem("user")).accessToken,
          },
        });
        setLists(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    getrandomlists()
  },[type,genre])


  
  return (
    <div className='home'>
    <Navbar type={type} setGenre={setGenre}/>
    <Featured type={type} setGenre={setGenre}/>
    {Lists.map((list,i)=>(

    <List key={i} list={list}/>
    ))}
        </div>
  )
}

export default Home