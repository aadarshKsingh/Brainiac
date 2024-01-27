import React from 'react'
import Sidebar from "../Components/Sidebar";
import { Box, Toolbar } from "@mui/material";
export const Communities = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <div className="">
          Communities
        </div>
      </Box>
    </Box>
  )
}
