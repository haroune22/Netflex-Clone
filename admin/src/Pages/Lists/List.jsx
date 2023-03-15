import './List.css'
import { DataGrid } from '@mui/x-data-grid';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Link } from "react-router-dom";
import { useState } from "react";
import { useContext,useEffect } from 'react';
import {ListContext} from "../../Context/ListContext/ListContext"
import { deleteList, getlists } from '../../Context/ListContext/ApiCalls';
const List = () => {
    

    const {lists,dispatch}=useContext(ListContext)

    useEffect(()=>{
        getlists(dispatch)
    },[dispatch])
    const handeldelete = (id)=>{
        deleteList(id,dispatch)
    }

    
    const columns = [
        { field: '_id', headerName: 'ID', width: 180 },
     
        { field: 'title', headerName: 'title', width: 200 },
        { field: 'genre', headerName: 'Genre', width: 150 },
       
        { field: 'type', headerName: 'type', width: 150 },
       
        {
            field: 'Action',
            headerName: 'Action',
  
            width: 93,
            renderCell:(params)=>{
                return(<>
                <Link to={{pathname:"/list/"+params.row._id}} state={{ list: params.row}}>

                    <button className="productListEdit">
                    Edit
                    </button>
                </Link>
                    <DeleteOutlineIcon onClick={()=>handeldelete(params.row._id)}className="productListDelete"/>
                    </>)
            }
          },
      ];
      
  return (
    <div className='productList'>
             <DataGrid
        rows={lists}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[5]}
        disableSelectionOnClick
        checkboxSelection
        getRowId={r=>r._id}
        />
    </div>
  )
}

export default List