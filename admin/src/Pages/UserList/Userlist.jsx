import "./Userlist.css"
import { DataGrid } from '@mui/x-data-grid';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Userrows } from "../../Dummydata";
import { Link } from "react-router-dom";
import { useState } from "react";



const Userlist = () => {
    const [data,setData]=useState(Userrows)
    const handeldelete = (id)=>{
        setData(data.filter(item=>item.id!==id))
    }

    
    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'user', headerName: 'Username', width: 200,renderCell:(params)=>{
            return(
                <div className="userListuser">
                    <img className="userListimg" src={params.row.Avatar} alt="" />
                    {params.row.username}
                </div>
            )
        } },
        { field: 'email', headerName: 'email', width: 200 },
        {
          field: 'Status',
          headerName: 'Status',

          width: 120,
        },
        {
            field: 'transactions',
            headerName: 'transactions',
  
            width: 140,
          },
        {
            field: 'Action',
            headerName: 'Action',
  
            width: 93,
            renderCell:(params)=>{
                return(<>
                <Link to={"/user/" +params.row.id}>

                    <button className="userListEdit">
                    Edit
                    </button>
                </Link>
                    <DeleteOutlineIcon onClick={()=>handeldelete(params.row.id)}className="userListDelete"/>
                    </>)
            }
          },
      ];
      
  
  return (
    <div className="Userlist">
           <DataGrid
        rows={data}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[5]}
        disableSelectionOnClick
        checkboxSelection
      />
        </div>
  )
}

export default Userlist