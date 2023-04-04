import React from 'react'
import { Box, Button, Input, TextareaAutosize } from '@mui/material'

import SendIcon from '@mui/icons-material/Send';
// import emailjs from '@emailjs/browser';

const Contact = () => {
  return (
      <Box
        className="contact-form"
        sx={{ p:{ lg:"60px 408px",xs:"0px 0px"}, display: "flex", height: {lg:"40vh",xs:"55vh"}, mt: "5%", gap:{lg:"0px",xs:"80px"}, flexDirection: {lg:"unset",xs:"column"} }}
      >
          <Box sx={{
             display: "flex",
             flexDirection: "column",
             position:"relative",
             fontSize: {lg: "2.5rem", xs: "1.8rem"},
             fontWeight: "bold",
             textAlign:"center",
             mb: {xs: -4}
          }}>
            <span style={{color:"black"}}>Get in touch</span>
            <span style={{color:"#9D00FF"}}>Contact me</span>
          </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            position: "relative",
            flex: "1",
          }}
        >
          <form
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "32px",
              alignItems: "center",
            }}
          >
            <Input
              type="text"
              name="user_name"
              placeholder="Full Name"
              sx={{
                width: { lg: "320px", xs: "256px" },
                height: "42px",
                p: "0.3em",
                outline: "none",
                border: "2px solid #9D00FF",
                borderRadius: "8px",
                fontSize: "16px",
              }}
            />
            <Input
              type="email"
              name="user_email"
              placeholder="Email"
              className="user"
              sx={{
                width: { lg: "320px", xs: "256px" },
                height: "42px",
                p: "0.3em",
                outline: "none",
                border: "2px solid #9D00FF",
                borderRadius: "8px",
                fontSize: "16px",
              }}
            />
            <TextareaAutosize
              aria-label="minimum height"
              minRows={4}
              placeholder="Message"
              style={{
                width: 240,
                height: "64px",
                p: "0.3em",
                outline: "none",
                border: "2px solid #9D00FF",
                borderRadius: "8px",
                fontSize: "16px",
              }}
              className="user"
            />
            <Button
              variant="contained"
              endIcon={<SendIcon />}
              sx={{
                borderRadius: "34px",
                border: "none",
                color: "white",
                fontSize: "16px",
                fontWeight:"bold",
                padding: "11px 26px 11px 26px",
                background:
                  "linear-gradient(180deg, #24263b 2.71%, #2a3170 99.36%)",
                '&:hover': {
                    boxShadow: "0px 12px 24px 3px #6e82ef"
                  },
                }}
            >
              Send
            </Button>
            <Box
              className="blur c-blur1"
              sx={{ top: "16px", left: "128px", background: "purple" }}
            />
          </form>
        </Box>
      </Box>
  );
}

export default Contact