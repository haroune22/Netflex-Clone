import './Productlist.css'
import { DataGrid } from '@mui/x-data-grid';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Productrows } from "../../Dummydata";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useContext } from 'react';
import { MovieContext } from '../../Context/MovieContext/MovieContext';
import { useEffect } from 'react';
import { deleteMovie, getMovies } from '../../Context/MovieContext/ApiCalls';

const Productlist = () => {
    

    const {movies,dispatch}=useContext(MovieContext)

    useEffect(()=>{
        getMovies(dispatch)
    },[dispatch])
    const handeldelete = (id)=>{
        deleteMovie(id,dispatch)
    }

    
    const columns = [
        { field: '_id', headerName: 'ID', width: 90 },
        { field: 'movie', headerName: 'movie', width: 200,renderCell:(params)=>{
            return(
                <div className="productListItem">
                    <img className="productListimg" src={params.row.img} alt="" />
                    {params.row.title}
                </div>
            )
        } },
        { field: 'genre', headerName: 'Genre', width: 120 },
       
        { field: 'year', headerName: 'year', width: 120 },
       
        { field: 'limit', headerName: 'limit', width: 120 },
       
        { field: 'isSeries', headerName: 'isSeries', width: 120 },
       
        {
            field: 'Action',
            headerName: 'Action',
  
            width: 93,
            renderCell:(params)=>{
                return(<>
                <Link to={{pathname:"/product/"+params.row._id}} state={{ movie: params.row}}>

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
        rows={movies}
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

export default Productlist