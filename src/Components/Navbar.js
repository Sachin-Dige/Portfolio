import { BellIcon, SearchIcon } from "@chakra-ui/icons";
import { useState } from "react";
import "./Style.css";
import { Box, Typography } from "@mui/material";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return (
    <Box className={isScrolled ? "navbar scrolled" : "navbar"}>
      <Box className="container"  sx={{marginLeft: {xs: "0px", lg: '10%'}}}>
        <Box className="left">
          <Typography sx={{fontSize:{lg: "60px", xs: '45px'},fontFamily:"Love Light",fontWeight:"500", textAlign: 'center'}}>Sachin..</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;