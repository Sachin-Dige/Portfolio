import React, { useState } from 'react'
import "../App.css"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import { Box, IconButton } from '@mui/material'
// import bg from '../Assets/Images/bg.jpg'
import zenwe from '../Assets/Images/zenwe.png'
import ArrowBack from '@mui/icons-material/ArrowBackIos';
import ArrowForward from '@mui/icons-material/ArrowForwardIos';

const Projectdata = [
  {
    image:
      "https://media.istockphoto.com/photos/image-of-open-antique-book-on-wooden-table-with-glitter-overlay-picture-id1354441996?b=1&k=20&m=1354441996&s=170667a&w=0&h=O4JDagXhIh1N13PNN6G4_L5KB5QPZryin7FOrZnzYvc="
  },
  {
    image:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlLarv0jwBNhB5eKo0sb6408d9PIAcGsXAgLcAmjKoQCLoSzXFtjXsrQsY-vAlaIJeaoo&usqp=CAU"
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPvDcRzMY5YHLwOcDVg_lFpcpclh87Ne8tkUyuevpZbTkKBzmpyworc8dphN4fOKwpk7o&usqp=CAU"},
  {
    image:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSytmjx9GVao9ao5mRVKj0PQv3bo8mmfKLpXY0Tt-jskbY0843Kjy5Qf6ijSXvoRGlMG94&usqp=CAU"
  }
  ];

const Slider = () => {
  const [selected, setSelected] = useState(0);
  let Plength = Projectdata.length
  return (
    <Box
      sx={{
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        height: "70vh",
        textAlign:"center",
        width: { lg: "80%", xs: "100%" },
        ml: { lg: "200px", xs: "0px" },
        mt: {lg: "5%", xs: '14%'},
      }}
    >
      <Box
        sx={{
          color: "var(--black)",
          fontSize: {lg: "54px", xs: '40px'},
          fontWeight: "bold",
          mb: {xs: "10%"}
        }}
      >
        Projects
      </Box>
      <Box sx={{display: {lg:"flex",xs:"none"}}}>
      <Swiper
        spaceBetween={40}
        slidesPerView={3}
        grabCursor={true}
        style={{
          marginTop: "48px",
          width: "100%",
        }}
      >
        <SwiperSlide style={{ textAlign: "center" }}>
          <Box
            component="img"
            src={zenwe}
            alt="Internet Failed"
            sx={{
              width: { lg: "460px", xs: "304px" },
              filter: "drop-shadow(-12px 15px 13px rgba(0, 0, 0, 0.25))",
              borderRadius: "19px",
            }}
          />
          <a href="https://dsk-chat-app.netlify.app/" target="_blank" rel="noreferrer">ZenWe</a>
        </SwiperSlide>
        <SwiperSlide style={{ textAlign: "center" }}>
          <Box
            component="img"
            src={zenwe}
            alt="Internet Failed"
            sx={{
              width: { lg: "460px", xs: "304px" },
              filter: "drop-shadow(-12px 15px 13px rgba(0, 0, 0, 0.25))",
              borderRadius: "19px",
            }}
          />
          <a href="https://zenwe.netlify.app/" target="_blank" rel="noreferrer">
            ZenWe
          </a>
        </SwiperSlide>
        <SwiperSlide style={{ textAlign: "center" }}>
          <Box
            component="img"
            src={zenwe}
            alt="Internet Failed"
            sx={{
              width: { lg: "460px", xs: "304px" },
              filter: "drop-shadow(-12px 15px 13px rgba(0, 0, 0, 0.25))",
              borderRadius: "19px",
            }}
          />
          <a href="https://zenwe.netlify.app/" target="_blank" rel="noreferrer">ZenWe</a>
        </SwiperSlide>
        <SwiperSlide style={{ textAlign: "center" }}>
          <Box
            component="img"
            src={zenwe}
            alt="Internet Failed"
            sx={{
              width: { lg: "460px", xs: "304px" },
              filter: "drop-shadow(-12px 15px 13px rgba(0, 0, 0, 0.25))",
              borderRadius: "19px",
            }}
          />
          <a href="https://zenwe.netlify.app/" target="_blank" rel="noreferrer">ZenWe</a>
        </SwiperSlide>
      </Swiper>
    </Box>
  
    
     {/* Mobile screen view only 👇 */}

    <Box sx={{display:{xs:"content",lg:"none"}}}>
    <Box
      style={{
        flex: "1",
        position: "relative",
      }}
    >
      <Box
        style={{
          position: "absolute",
          width: "15rem",
          height: "19rem",
          right: "23.5%",
          top: "0.9rem",
          border: "2px solid #9d00ff",
          backgroundColor: "transparent",
        }}
      ></Box>
      <Box
        style={{
          position: "absolute",
          width: "15rem",
          height: "18rem",
          right: "16.5%",
          top: "4rem",
          backgroundColor: "rgb(207 159 255)",
        }}
      ></Box>

      <IconButton
          sx={{
            position: "absolute",
            width: "1.5rem",
            cursor: "pointer",
            left:"8%",
            top:"150px",
          }}
          onClick={() => {
            selected === 0
              ? setSelected(Plength - 1)
              : setSelected((prev) => prev - 1);
          }}
        >
          <ArrowBack />
        </IconButton>

        <img
        src={Projectdata[selected]?.image}
        alt=""
        style={{
          position: "absolute",
          width: "15rem",
          height: "19rem",
          objectFit: "cover",
          right: "21%",
          top: "2rem",
        }}
      />
        
        <IconButton
          sx={{
            position: "absolute",
            width: "1.5rem",
            cursor: "pointer",
            right: "9%",
            top:"150px",
            "&:hover": {
              scale: "1.1",
              background: "none",
            },
          }}
          onClick={() => {
            selected === Plength - 1
              ? setSelected(0)
              : setSelected((succ) => succ + 1);
          }}
        >
          <ArrowForward />
        </IconButton>
    </Box>
  </Box> 
</Box> 
  );
}

export default Slider