import React from "react";
import "../App.css";
import { Box, Button, IconButton, Link, Typography } from "@mui/material";
import { GitHub, Instagram, Twitter, LinkedIn } from "@mui/icons-material";
import { TypeAnimation } from "react-type-animation";
import bg from "../Assets/Images/bg.jpg";
import Slider from "./Slider";
import Contact from "./Contact";
import Resume from "../Assets/PDF/Resume (Sachin Dige).pdf";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Portfolio = () => {
  return (
    <>
      <Navbar />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: { lg: "64vh", xs: "709px", md: "85vh" },
          width: "100%",
          backgroundImage: `url(${bg})`,
          mt: "62px",
        }}
      >
        <Box
          className="profile-container"
          display="flex"
          alignItems="center"
          textAlign="center"
          justifyContent="center"
          heigth="10%"
          minHeight="fit-content"
        >
          <Box
            className="profile-parent"
            display="flex"
            alignItems="center"
            color="aliceblue"
            sx={{
              flexDirection: {
                lg: "unset",
                xs: "column-reverse",
                m: { lg: "20px", xs: "0px" },
              },
            }}
          >
            <Box
              className="profile-details"
              display="grid"
              justifyContent="center"
              textAlign="center"
              sx={{ m: { lg: "0px", xs: "25px" } }}
              width="90%"
            >
              <Box>
                <Link href="https://github.com/Sachin-Dige">
                  <IconButton
                    sx={{
                      color: "white",
                      "&:hover": {
                        transform: "scale(1.5)",
                      },
                    }}
                  >
                    <GitHub />
                  </IconButton>
                </Link>
                <Link href="https://www.linkedin.com/in/sachin-dige-725265263/">
                  <IconButton
                    sx={{
                      color: "white",
                      "&:hover": {
                        transform: "scale(1.5)",
                      },
                    }}
                  >
                    <LinkedIn />
                  </IconButton>
                </Link>
                <Link href="">
                  <IconButton
                    sx={{
                      color: "white",
                      "&:hover": {
                        transform: "scale(1.5)",
                      },
                    }}
                  >
                    <Twitter />
                  </IconButton>
                </Link>
                <Link href="">
                  <IconButton
                    sx={{
                      color: "white",
                      "&:hover": {
                        transform: "scale(1.5)",
                      },
                    }}
                  >
                    <Instagram />
                  </IconButton>
                </Link>
              </Box>

              <Box className="profile-details-name">
                <Typography
                  className="primary-text"
                  component="span"
                  sx={{
                    fontSize: { lg: "24px", xs: "20px" },
                    fontFamily: "Poppins SemiBold",
                    wordSpacing: 4.5,
                  }}
                >
                  Hello, I'm{" "}
                  <span
                    className="heighlighted-text"
                    style={{ color: "#FF5F1F" }}
                  >
                    Sachin Dige
                  </span>
                </Typography>
              </Box>
              <Box
                className="profile-details-role"
                display="flex"
                flexDirection="column"
                justifyContent="center"
                textAlign="center"
                m="14px 0 24px 0"
              >
                <Typography
                  variant="h4"
                  sx={{
                    fontSize: { lg: "40px", xs: "24.8px" },
                    fontFamily: "cursive",
                    m: "0px 0px 12px 0px",
                  }}
                >
                  <TypeAnimation
                    wrapper="div"
                    cursor={true}
                    repeat={Infinity}
                    sequence={[
                      "Enthusiastic Developer 🔴",
                      1000,
                      "React Native Developer 📱",
                      1000,
                      1000,
                      "UI Designer 🖼",
                      1000,
                      "Web Designer 🖌",
                      1000,
                      "Testing 🧪",
                      1000,
                      "ReactJS Developer 📱",
                      1000,
                    ]}
                  />
                </Typography>
                <Typography component="span" fontSize="19px" marginTop="5px">
                  Knack of building applications with Front and Back end
                  operations.
                </Typography>
              </Box>

              <Box
                sx={{
                  display: { lg: "flex", xs: "flex" },
                  justifyContent: { lg: "center", xs: "center" },
                }}
              >
                <Link
                  href={"https://www.linkedin.com/in/sachin-dige-725265263/"}
                  sx={{ textDecoration: "none" }}
                >
                  <Button
                    className="btn primary-btn"
                    sx={{
                      borderRadius: "50px",
                      background: "#1f2235",
                      border: "2px solid linen",
                      fontSize: { lg: "15px", xs: "12.8px" },
                      color: "white",
                      padding: { lg: "14px 0", xs: "11px 0" },
                      width: { lg: "160px", xs: "120px" },
                      cursor: "pointer",
                      transition: "0.2s",
                      fontWeight: "700",
                      "&:hover": {
                        border: "2px solid#FF5824",
                      },
                    }}
                  >
                    Hire Me
                  </Button>
                </Link>
                <Link
                  href={Resume}
                  download="Resume(SachinDige).pdf"
                  sx={{ textDecoration: "none" }}
                >
                  <Button
                    className="btn highlighted-btn"
                    sx={{
                      borderRadius: "50px",
                      background: "#FF5824",
                      border: "2px solid linen",
                      fontSize: { lg: "15px", xs: "12.8px" },
                      color: "white",
                      padding: { lg: "14px 0", xs: "11px 0" },
                      width: { lg: "160px", xs: "120px" },
                      cursor: "pointer",
                      transition: "0.2s",
                      ml: "28px",
                      zIndex: "1",
                      fontWeight: "700",
                      "&:hover": {
                        backgroundColor: "cornsilk",
                        color: "#111",
                        fontWeight: "900",
                      },
                    }}
                  >
                    Get Resume
                  </Button>
                </Link>
              </Box>
            </Box>
            <Box
              className="profile-picture"
              display="flex"
              alignItems="center"
              justifyContent="center"
              boxShadow="0 1px 0px 0px white"
              borderRadius="50%"
              sx={{
                height: { lg: "480px", xs: "285px" },
                width: { lg: "680px", xs: "285px" },
                m: { lg: "0 0 0 100px", xs: "90px 0 0 0" },
              }}
            >
              <Box
                className="profile-picture-background"
                height="92%"
                width="92%"
                sx={{
                  // backgroundImage: `url(${`https://i.pinimg.com/280x280_RS/f9/82/91/f98291998cbfe2e637ba54f1a4937177.jpg`})`,
                  backgroundImage: `url(${`https://i.pinimg.com/originals/85/59/09/855909df65727e5c7ba5e11a8c45849a.png`})`,
                  backgroundSize: "cover",
                  borderRadius: "50%",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  cursor: "pointer",
                  "&:hover": {
                    transform: "scale(1.07)",
                    transition: "1s ease-out",
                  },
                }}
              ></Box>
            </Box>
          </Box>
        </Box>
        {/* FOOTER BORDER */}
        <Box className="footer-container">
          <Box className="footer-parent">
            <Box
              component="img"
              src={require("../Assets/Images/shape-bg.png")}
              alt="image not found"
              width="100%"
              sx={{ height: { lg: "15.2vh", xs: "none", md: "11.7vh" } }}
            />
          </Box>
        </Box>
      </Box>

      <Box>
        {/* PROJECT SLIDER SECTION*/}
        <Slider />
        {/* CONTACT SECTION */}
        <Contact />
        <Footer />
      </Box>
    </>
  );
};

export default Portfolio;
