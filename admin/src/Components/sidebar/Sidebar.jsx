import React from 'react'
import "./sidebar.css"
import {
    LineStyle,
    Timeline,
    TrendingUp,
    PermIdentity,
    Storefront,
    AttachMoney,
    BarChart,
    MailOutline,
    DynamicFeed,
    ChatBubbleOutline,
    WorkOutline,
    Report,
    PlayCircleOutline,
    List,
  } from "@material-ui/icons";
import { Link } from 'react-router-dom';
const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="sidebarwrapper">
            <div className="sidebarmenu">
                <h3 className="sidebarTitle">
                Dashbord
                </h3>
                <ul className="sidebarList">
                    <li 
    className="sidebarlistitem active"  >
<LineStyle className='sidebaricon'/>
<Link style={{textDecoration:"none",color:"inherit"}}  to="/">
Home
</Link>

                    </li>
                    <li className="sidebarlistitem">
<Timeline className='sidebaricon'/>
Analytics
                    </li>
                    <li className="sidebarlistitem">
<TrendingUp className='sidebaricon'/>
Sales
                    </li>

                </ul>
            </div>
            <div className="sidebarmenu">
                <h3 className="sidebarTitle">
               Quik Menu
                </h3>
                <ul className="sidebarList">
                    <li 
    className="sidebarlistitem"  >
<PermIdentity className='sidebaricon'/>
        <Link style={{textDecoration:"none",color:"inherit"}} to="/users" >Users</Link>
                    </li>
                    <li className="sidebarlistitem">
<PlayCircleOutline className='sidebaricon'/>
<Link style={{textDecoration:"none",color:"inherit"}} to="/movies" >Movies</Link>
                    </li>
                    <li className="sidebarlistitem">
<List className='sidebaricon'/>
<Link style={{textDecoration:"none",color:"inherit"}} to="/lists">
Lists
</Link>
                    </li>

                    <li className="sidebarlistitem">
<BarChart className='sidebaricon'/>
Reports
                    </li>
                </ul>
            </div>
            <div className="sidebarmenu">
                <h3 className="sidebarTitle">
                Notifications
                </h3>
                <ul className="sidebarList">
                    <li 
    className="sidebarlistitem "  >
<MailOutline className='sidebaricon'/>
Mail
                    </li>
                    <li className="sidebarlistitem">
<DynamicFeed className='sidebaricon'/>
Feedback
                    </li>
                    <li className="sidebarlistitem">
<ChatBubbleOutline className='sidebaricon'/>
Messages
                    </li>

                </ul>
            </div>
            <div className="sidebarmenu">
                <h3 className="sidebarTitle">
               Staff
                </h3>
                <ul className="sidebarList">
                    <li 
    className="sidebarlistitem"  >
<WorkOutline className='sidebaricon'/>
Manage
                    </li>
                   
                    <li className="sidebarlistitem">
<Report className='sidebaricon'/>
Reports
                    </li>

                </ul>
            </div>
        </div>
        </div>

  )
}

export default Sidebar