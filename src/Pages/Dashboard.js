import {React,useEffect} from "react";
import Sidebar from "../Components/Sidebar";
import { Box, Toolbar } from "@mui/material";
import { ScheduleMini } from "../Components/ScheduleMini";
import { AnnouncementMini } from "../Components/AnnouncementMini";
import { LeaderboardMini } from "../Components/LBoardMini";
import { AssignmentMini } from "../Components/AssignmentMini";
import { useSessionStorage } from 'react-storage-complete';
import { useNavigate } from "react-router-dom";
function Dashboard() {
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
          <div className="grid grid-cols-2 gap-2">
            <ScheduleMini />
            <AnnouncementMini />
            <LeaderboardMini />
            <AssignmentMini />
          </div>
        </Box>
      </Box>
    );
    }
  }
export default Dashboard;
