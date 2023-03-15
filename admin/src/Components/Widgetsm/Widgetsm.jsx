import './Widgetsm.css'
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios'
const apiurl = process.env.apiurl



const Widgetsm = () => {
    const [newUsers,setNewUsers]=useState([])
    useEffect(()=>{
        const getNewUsers = async()=>{
            try {
                const res = await axios.get(`${url}users?new=true`,{headers:{token:"Bearer " + JSON.parse(localStorage.getItem("user")).accessToken},})
                setNewUsers(res.data)
            } catch (err) {
                console.log(err)
            }
        }
        getNewUsers()
    },[])
  return (
    <div className='widgetsm'>
<span className="widgetsmTitle">
    New Join Members
</span>
<ul className="widgetsmlist">
    {newUsers.map(user=>(
    <li className="widgetsmlistitem">
        <img className='widgetsmimg' src={user.profilePic  || "NetflexDefault.jpeg"} alt="" />
        <div className="widgetsmUser">
            <span className="widgetsmUsername">{user.username}</span>
        </div>
        <button className="widgetsmbutton">
            <VisibilityIcon className='widgetsmIcon'/>
            Display
        </button>
    </li>
    ))}
  
</ul>
    </div>
  )
}

export default Widgetsm