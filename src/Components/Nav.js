import { AppBar, Toolbar, IconButton, Typography, Divider, Avatar } from "@mui/material";
import React from "react";
import glb from '../Assets/glb.png'
import { NavLink } from "react-router-dom";
import { Menu, MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useSessionStorage } from "react-storage-complete";
function Nav(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const navigate = useNavigate();
  const open = Boolean(anchorEl);
  const [accessToken,setAccessToken] = useSessionStorage('access_token', '');

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
      setAccessToken('')
      navigate("/login-student")
  }

  const handleAccount = () => {
    navigate("/account")
  }
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
          {props.page === "login" ? <NavLink to="/"><p className="text-[#4361EE] py-5 font-albert text-3xl">Brainiac</p></NavLink> :
            <div className="flex  align-middle  place-items-center">
              <NavLink to="https://glbitm.org"><img className="py-5 px-2 w-36 h-20" src={glb} alt="glb logo" /></NavLink>
              <Divider className="my-10 p-2 py-7" orientation="vertical" />
              <NavLink to="/"><div className="flex flex-col mx-5">
                <Typography variant="subtitle1"><p className="font-montserrat leading-none">powered by</p></Typography>
                <Typography variant="h4"><p className="font-albert text-[#4361EE] leading-none">Brainiac</p></Typography>
              </div></NavLink>
            </div>
          }
        </Typography>
        <Typography
          variant="h6"
          color="inherit"
          component="div"
          className="flex w-5/6 justify-center "
        >
          {props.page === "login" ? <div className="flex flex-row">
            <NavLink to='/about'><div className="px-10 font-montserrat">About</div></NavLink>
            <NavLink to='/privacy-policy'><div className="px-10 font-montserrat">Privacy</div></NavLink>
          </div> :
            <NavLink><div className="px-10 font-montserrat">Dashboard</div></NavLink>
          }

        </Typography>
        {props.page === "login" ?
          <Typography component="div">
            <NavLink to="mailto:brainiac@pm.me"><p className="text-white bg-[#4361EE] py-2 px-3 rounded-lg font-montserrat">
              Contact Us
            </p>
            </NavLink>
          </Typography> :
          <div>
            <Typography onClick={handleClick} component="div" className="flex flex-row"><p className="p-2 font-montserrat">$Student_Name</p><Avatar src="#">SN</Avatar></Typography>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >

              <MenuItem onClick={handleAccount}>My account</MenuItem>
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
          </div>
        }
      </Toolbar>
    </AppBar>
  );
}

export default Nav;
