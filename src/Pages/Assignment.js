import {React, useEffect} from 'react'
import Sidebar from "../Components/Sidebar";
import { Box, Toolbar } from "@mui/material";
import { useSessionStorage } from 'react-storage-complete';
import { useNavigate } from 'react-router-dom';
export const Assignment = () => {
  const [accessToken] = useSessionStorage('access_token', '');
  const navigate = useNavigate();
  useEffect(() => {
    if (!accessToken) {
      navigate("/login-student");
    }
  }, [accessToken, navigate]);

  if(accessToken){
    return (
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Toolbar />
          <div className="">
            assignments
          </div>
        </Box>
      </Box>
    )
  }
}
