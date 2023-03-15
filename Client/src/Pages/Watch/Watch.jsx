import React, { useEffect } from 'react'
import './Watch.scss'
import { Link, useLocation } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LiveTvOutlinedIcon from '@mui/icons-material/LiveTvOutlined';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import NewReleasesOutlinedIcon from '@mui/icons-material/NewReleasesOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';


const Watch = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const location = useLocation()
  const movie = location.state.movie
  console.log(location)
  return (<>
    <Navbar/>
    <div className='watch'>
      <div className='wrapper'>
      <div class="title">
        <span class="spantitle">{movie.title}</span>
      </div>
      <table>
  <tr>
    <td class="watchImg">
      <img src={movie.img} alt="" />
    </td>
    <td class="watchInfo">
      
      <div>
        <span>Title:</span>
        <span>{movie.title}</span>
      </div>
      <div>
        <span>Language • Country:</span>
        <span>English . USA</span>
      </div>
      <div>
        <span>Genre</span>
        <span>{movie.genre}</span>
      </div>
      <div>
        <span>Limit:</span>
        <span>+{movie.limit}</span>
      </div>
      <div>
        <span>Release Date:</span>
        <span>{movie.year}</span>
      </div>
      <div>
        <span>Quality:</span>
      1<span>WEB-DL</span>
      </div>
      <div>
        <span>Type:</span>
        <span>{movie.isSeries === false ? "Movie":"Series"}</span>
      </div>
    </td>
  </tr>
</table>
      <div className='watchDescription'>
          <span>Description:</span>
          <span>{movie.desc} </span>
        </div>

        <div className='watchTrailer'>
          <h3>Watch Trailer</h3>
          <video progress controls  src={movie.trailer}></video>
        </div>
    <div className='watchSecondary'>
      <span>Wacth Movie</span>
     
       <video className='video'  progress controls src={movie.video}/>
       </div>
       <div className='watchButtons'>
        <button>Previous</button>
        <button>Next</button>
       </div>
       <table>
  <thead>
    <tr>
      <th>Quality</th>
      <th>Size</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1080p</td>
      <td>2.5 GB</td>
      <td><a href="#" class="download-button">Download</a></td>
    </tr>
    <tr>
      <td>720p</td>
      <td>1.5 GB</td>
      <td><a href="#" class="download-button">Download</a></td>
    </tr>
    <tr>
      <td>480p</td>
      <td>700 MB</td>
      <td><a href="#" class="download-button">Download</a></td>
    </tr>
  </tbody>
</table>
       </div>
       <div class="sidebar">
       <form class="search-form">
  <input type="text" placeholder="Search..."/>
  <button type="submit"><SearchOutlinedIcon/></button>
</form>
  <ul>

    <li><HomeOutlinedIcon/><Link className='link'  to={"/"} >Home Page</Link></li>
    <li><LiveTvOutlinedIcon/> <Link className='link'  to={"/series"} >Series</Link></li>
    <li><VideocamOutlinedIcon/> <Link  className='link' to={"/movie"}>Movies</Link></li>
  <li><NewReleasesOutlinedIcon />New And Popular</li>
  <li><FormatListBulletedOutlinedIcon/>  My List</li>
  </ul>
</div>
    </div>
    </>)
}

export default Watch