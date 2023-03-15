import React, { useEffect, useState } from 'react'
import "./Featured.scss"
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoIcon from '@mui/icons-material/Info';
import axios from 'axios';
import { Link } from 'react-router-dom';
const apiurl = process.env.apiurl

const Featured = ({type,setGenre}) => {
    const [Content,setContent]=useState({})
    useEffect(()=>{
        const getrandomcontent = async()=>{
            try {
                const res =await axios.get(`${apiurl}movie/random?type=${type}`,{
                    headers:{
                      token:"bearer "+JSON.parse(localStorage.getItem("user")).accessToken,
                    },
                  });
                  setContent(res.data[0])
            } catch (err) {
                console.log(err)
            }
        };
        getrandomcontent()
    },[type])
  return (
    <div className='featured'>
        {type && (
            <div className="category">
                <span>{type === "movie" ? "Movie" : "Series"}</span>
                <select name="genre" id="genre" onChange={e=>setGenre(e.target.value)}>
                    <option >Genre</option>
                    <option value="Adventure">Adventure</option>
                    <option value="Crime">Crime</option>
                    <option value="Action">Action</option>
                    <option value="Animation">Animation</option>
                    <option value="Fantasy">Fantasy</option>
                    <option value="Horror">Horror</option>
                    <option value="Historical">Historical</option>
                    <option value="Romance">Romance</option>
                    <option value="Sci-fi">Sci-fi</option>
                    <option value="Thriller">Thriller</option>
                    <option value="Westorn">Westorn</option>
                    <option value="Animation">Animation</option>
                   <option value="Drama">Drama</option>
                </select>
            </div>
        )}
        <img  src={Content.imgtitle} alt="" />
        <div className="info">
       
        <span className='desc'>{Content.desc}
        </span>
        <div className='buttons'>
            <Link to={"/watch"} className="link"  state={{ movie: Content }}>
    <button className='Play'><PlayArrowIcon/>
    <span>Play</span> </button></Link>
    <button className='more'><InfoIcon/><span>Info</span></button>
        </div>
        </div>
    </div>
  )
}

export default Featured