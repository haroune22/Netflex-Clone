import React, { useEffect, useState } from 'react'
import './Listitem.scss'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import axios from 'axios';
import { Link } from 'react-router-dom';
const apiurl = process.env.apiurl


const Listitem = ({index,item}) => {
    const [hoverd,sethoverd]=useState(false)
    const [Movie,setMovie]=useState([])
    useEffect(()=>{
        const getmovie = async()=>{
            try {
                const res = await axios.get(`${apiurl}movie/find/`+item,{
                    headers:{
                      token:"bearer "+JSON.parse(localStorage.getItem("user")).accessToken,
                    },
                  });
                    setMovie(res.data)
            } catch (err) {
                console.log(err)
            }
        }
        getmovie()
    },[item])
  return (
    <Link to="/watch" state={{ movie: Movie }} >
    <div className='listItem' style={{left:hoverd && index *225 - 50 + index * 2.5 }} onMouseEnter={()=>sethoverd(true)} onMouseLeave={()=>sethoverd(false)}>
        <img src={Movie.img} alt="" />
        {hoverd && (<>

        <video src={Movie.trailer} autoPlay={true} loop/>
        <div className="itemInfo">
            <div className="icons">
            <PlayArrowIcon className='icon'/>
            <AddIcon className='icon'/>
            <ThumbUpOffAltIcon className='icon'/>
            <ThumbDownOffAltIcon className='icon'/>
            </div>
            <div className="itemInfoTop">
                <span>{Movie.title}</span>
                <span className='limit'>+{Movie.limit}</span>
                <span>{Movie.year}</span>
            </div>
            <div className="desc">
            {Movie.desc}
            </div>
            <div className="genre">
                {Movie.genre}
            </div>
        </div>
        </>)}
    </div>
    </Link>
  )
}

export default Listitem