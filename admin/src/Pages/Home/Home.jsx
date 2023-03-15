import React from 'react'
import Chart from '../../Components/chart/Chart'
import FeaturedInfo from '../../Components/featuredInfo/FeaturedInfo'
import Widgetlg from '../../Components/Widgetlg/Widgetlg'
import Widgetsm from '../../Components/Widgetsm/Widgetsm'
import { Userdata } from '../../Dummydata'
import './Home.css'
import { useEffect } from 'react'
import axios from 'axios'
import { useMemo } from 'react'
import { useState } from 'react'
const url = process.env.url

const Home = () => {
  const MONTHS = useMemo(()=> [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "August", "Sep", "Oct", "Nov", "Dec"
  ],[]); 
  
  const [userStats,setUserStats]=useState([])
  useEffect(()=>{
  const getStats = async()=>{
    try {
      
      const res= await axios.get(`${url}users/stats`,{headers:{token:"Bearer " + JSON.parse(localStorage.getItem("user")).accessToken},})
      const statlist = res.data.sort(function(a,b){
        return a._id - b._id
      });
      const userStats = statlist.map((item) => ({
        name: MONTHS[item._id - 1],
        "New User": item.total,
      }));

      setUserStats(userStats);
    } catch (err) {
      console.log(err)
    }
  }
  getStats()
  },[MONTHS])
  return (
    <div 
    className='home'>
        <FeaturedInfo/>
        <Chart data={userStats} title="User Analytics" grid dataKey="New User" />
        <div className="homeWidgets">
          <Widgetsm/>
          <Widgetlg/>
        </div>
    </div>
  )
}

export default Home