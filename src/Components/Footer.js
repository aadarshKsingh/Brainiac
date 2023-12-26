import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import "./Footer.css";
function Footer() {
  return (
    <AppBar
      position="fixed"
      sx={{ top: "auto", bottom: 0,backgroundColor:"#e6e3ff",color:'black' }}
      
    >
      <Toolbar variant="dense">
        <Typography
          variant="h6"
          color="inherit"
          component="div"
          className="flex w-5/6 "
        >
          <button className="px-10 font-montserrat">
            ©{new Date().getFullYear()} Brainiac Inc. All rights reserved.
          </button>
        </Typography>
        <Typography variant="h6" color="inherit" component="div">
          <p className="text-[#4361EE] py-5 font-albert text-5xl">Brainiac</p>
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Footer;
