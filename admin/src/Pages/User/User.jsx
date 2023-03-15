import './User.css'
import img from '../../../public/images.jpeg'
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import { CalendarToday, LocationSearching, MailOutline, PhoneAndroid, Publish } from '@material-ui/icons';
import { Link } from 'react-router-dom';
const User = () => {
  return (
    <div className='user'>
        <div className="userTitleContainer">
            <h1 className="userTitle">Edit User</h1>
            <Link to="/newUser">

            <button className="userAddButton">
                Create
            </button>
            </Link>
        </div>
        <div className="userContainer">
            <div className="userShow">
            <div className="userShowTop">
                <img src={img} alt="" className="userShowImg" />
                <div className="userShowTopTitle">
                    <span className="userShowUsername">
                        Anna Backer
                    </span>
                    <span className="userShowUser">
                        Software Engineer
                    </span>
                </div>
            </div>
            <div className="userShowBottom">
                <span className="userShowTitle">Account Details</span>
                <div className="userShowInfo">
                    
                <PermIdentityIcon className='userShowIcon'/>
                <span className="userShowInfoTitle">Annaback99</span>
                </div>
                <div className="userShowInfo">
                    
                <CalendarToday className='userShowIcon'/>
                <span className="userShowInfoTitle">10.12.2000</span>
                </div>
                <span className="userShowTitle">Contact Details</span>
                <div className="userShowInfo">
                    
                <PhoneAndroid className='userShowIcon'/>
                <span className="userShowInfoTitle">+1 235 273 362</span>
                </div>
                <div className="userShowInfo">
                    
                <MailOutline className='userShowIcon'/>
                <span className="userShowInfoTitle">Annaback99@gmail.com</span>
                </div>
                <div className="userShowInfo">
                    
                <LocationSearching className='userShowIcon'/>
                <span className="userShowInfoTitle">New York | USA</span>
                </div>
            </div>
            </div>
            <div className="userUpdate">
            <span className="userUpdateTitle">Edit</span>
            <form className="userUpdateForm">
                <div className="userupdateLeft">
                    <div className="userUpdateItem">
                        <label>Username</label>
                        <input type="text" placeholder='annabcke99' className='userupdateInput' />
                    </div>
                    <div className="userUpdateItem">
                        <label>Full Name</label>
                        <input type="text" placeholder='Anna Backer' className='userupdateInput' />
                    </div>
                    <div className="userUpdateItem">
                        <label>Email</label>
                        <input type="text" placeholder='Annaback99@gmail.com' className='userupdateInput' />
                    </div>
                    <div className="userUpdateItem">
                        <label>Phone Number</label>
                        <input type="text" placeholder='+1 235 273 362' className='userupdateInput' />
                    </div>
                    <div className="userUpdateItem">
                        <label>Address</label>
                        <input type="text" placeholder='New York | USA' className='userupdateInput' />
                    </div>
                    
                </div>
                <div className="userUpdateRight">
<div className="userUpdateUpload"><img src={img} alt="" className='userUpdateImg' />
<label htmlFor="file"><Publish className='userUpdateIcon'/></label>
<input type="file" style={{display:"none"}} id='file' />
</div>
<button className="userUpdateButton">Update</button>
                </div>
            </form>
            </div>
        </div>
        </div>
  )
}

export default User