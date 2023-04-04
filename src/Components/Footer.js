import { AttachEmail, GitHub, LinkedIn, Twitter } from '@mui/icons-material'
import { Box, IconButton, Link } from '@mui/material'
import React from 'react'

import Wave from '../Assets/Images/wave.png'
const Footer = () => {
  return (
<Box component="div" sx={{display:"flex",alignItems:"center",position:"relative", width: "100%"}}>
    <Box component="img" src={Wave} alt="Image is Loading...." sx={{width: "100%", height:{lg:"50vh", xs: "30vh"}}}/>
    <Box sx={{
      position:"absolute",
      display:"flex",
      alignItems:"center",
      justifyContent:"center",
      flexDirection:"column",
      width:"100%",
      mt:"104px",
      gap:{lg:"24px",xs:"20px"},
      color:"white",
      fontWeight: 'bold',
      fontSize: 20,
      letterSpacing: 1
    }}>
        <span>sachin.code45@gmail.com</span>
        <Box sx={{display:"flex",gap:"20px"}}>

            <Link href="https://github.com/Sachin-Dige" target="_blank">
              <IconButton sx={{color:"white",fontSize:"48px",'&:hover': {
            transform: "scale(1.5)",
          }}}>
                <GitHub />
              </IconButton>
            </Link>
                <Link href="https://www.linkedin.com/in/sachin-dige-725265263/">
                  <IconButton sx={{color:"white",fontSize:"48px",'&:hover': {
                transform: "scale(1.5)",
              }}}>
                    <LinkedIn />
                  </IconButton>
                </Link>
            <Link href="">
              <IconButton sx={{color:"white",fontSize:"48px",'&:hover': {
            transform: "scale(1.5)",
          }}}>
                <Twitter />
              </IconButton>
            </Link>
            <Link href="">
              <IconButton sx={{color:"white",fontSize:"48px",'&:hover': {
            transform: "scale(1.5)",
          }}}>
                <AttachEmail />
              </IconButton>
            </Link>
          </Box>
    </Box>
</Box>
  )
}

export default Footer