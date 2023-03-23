import { Button } from '@mui/material'
import React from 'react'
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();
  return (
    <div className='container'>
      <div className='header'>
        <p>Whooops!!</p>
      </div>
      <div className='imageStyle'>
        <img src='erro.jpg' alt='img not found' />
        <p>LOOKS LIKE THIS PAGE WENT ON VACTION!!!</p>
      </div>
      <div className='btn'>
        <Button variant="outlined" color="error" onClick={() => navigate("/")}>BACK TO LOGIN</Button>
      </div>
    </div>
  )
}


export default Error;
