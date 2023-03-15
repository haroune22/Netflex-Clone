import React, { useRef, useState } from 'react'
import "./List.scss"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Listitem from '../Listitem/Listitem';



const List = ({list}) => {
const [slidenumber,setslidenumber]= useState(0)

const [moved,setmoved]= useState(false)

const listRef = useRef()
    const handelclick = (direction)=>{
        setmoved(true)
        let distance = listRef.current.getBoundingClientRect().x - 50
        if(direction==='left' && slidenumber>0  ){ 
            setslidenumber(slidenumber - 1)
            listRef.current.style.transform= `translateX(${230 + distance}px)`
        }
        if(direction==='right' && slidenumber<8){
            setslidenumber(slidenumber + 1)
            listRef.current.style.transform= `translateX(${-230 + distance}px)`
        }
        
    }
    
  return (
    <div className='list'>
        <span className="listTitle">
            {list.title}
        </span>
        <div className="wrapper">
<ArrowBackIosIcon style={{display:!moved && "none"}} onClick={()=>handelclick('left')} className='sliderArrow left'/>
<div className="container" ref={listRef}>
    {list.content.map((item,i)=>(

    <Listitem key={i} index={i} item={item}/>
    ))}
    
</div>
<ArrowForwardIosIcon onClick={()=>handelclick('right')} className='sliderArrow right'/>
        </div>
    </div>
  )
}

export default List