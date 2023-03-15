import './Chart.css'
import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';



const Chart = ({title,data,dataKey,grid}) => {
    
  return (
    <div className='chart'>
        <h4 className='chartTitle'>{title}</h4>
        <ResponsiveContainer width="100%"  aspect={4/1}>
            <LineChart data={data}>
            <XAxis dataKey="name" stroke='#5550bd'/>
            <Line type="monotone" dataKey={dataKey}stroke='#5550bd'/>
            <Tooltip/>
           {grid && (
               
               <CartesianGrid stroke="#edecec" strokeDasharray="5 5"/>
               )} 
            
            </LineChart>
        </ResponsiveContainer>
    </div>
  )
}

export default Chart