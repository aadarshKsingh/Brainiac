import { AppBar, Toolbar, IconButton, Typography, Divider, Avatar } from "@mui/material";
import React from "react";
import glb from '../Assets/glb.png'
import { NavLink } from "react-router-dom";
import { Privacy } from "../Pages/Privacy";
function Nav(props) {
  return (
    <AppBar color="default" elevation={0}>
      <Toolbar variant="dense">
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        ></IconButton>
        <Typography variant="h6" color="inherit" component="div">
         {props.page === "login" ?  <p className="text-[#4361EE] py-5 font-albert text-3xl">Brainiac</p> :
          <div className="flex  align-middle  place-items-center">
            <img className="py-5 px-2" src={glb} alt="glb logo"/>
            <Divider className="my-10 p-2 py-8" orientation="vertical"/>
            <div className="flex flex-col mx-5">
              <Typography variant="subtitle1"><p className="font-montserrat leading-none">powered by</p></Typography>
            <Typography variant="h4"><p className="font-albert text-[#4361EE] leading-none">Brainiac</p></Typography>
            </div>
          </div>
         }
        </Typography>
        <Typography
          variant="h6"
          color="inherit"
          component="div"
          className="flex w-5/6 justify-center "
        >
          {props.page==="login" ? <div className="flex flex-row">
          <NavLink to='/about'><div className="px-10 font-montserrat">About</div></NavLink>
          <NavLink to='/privacy-policy'><div className="px-10 font-montserrat">Privacy</div></NavLink>
            </div>:
          <NavLink to='/about-us'><div className="px-10 font-montserrat">Dashboard</div></NavLink>
          }
          
        </Typography>
        {props.page === "login" ? 
        <Typography component="div">
          <button className="text-white bg-[#4361EE] py-2 px-3 rounded-lg font-montserrat">
            Contact Us
          </button>
        </Typography>:
          <Typography component="div" className="flex flex-row"><p className="p-2 font-montserrat">$Student_Name</p><Avatar src="#">SN</Avatar></Typography>
          
        }
      </Toolbar>
    </AppBar>
  );
}

export default Nav;
