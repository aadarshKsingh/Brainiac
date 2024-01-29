import React from "react";
import Nav from "./Nav";
import { NavLink } from "react-router-dom";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import {
  AssignmentIndRounded,
  BookRounded,
  ChatRounded,
  LeaderboardRounded,
  ScheduleRounded,
  SpaceDashboardRounded,
  VerifiedUserRounded,
  VideocamRounded,
} from "@mui/icons-material";
function Sidebar() {
  return (
        <Drawer
        sx={{
          width: 300,
          flexShrink: 0,
          ".MuiPaper-root": {
            backgroundColor: "#f5f5f5", 
          },
          '& .MuiDrawer-paper': {
            width: 300,
            boxSizing: 'border-box',
          },
        }}
       
          variant="permanent"
          anchor="left"
        >
          <nav>
            <Nav page="dash" />
          </nav>
          <div>
            <List>
              <ListItem className="my-5">
                <ListItemText primary="placeholder" />
              </ListItem>
              <ListItem>
                <NavLink to="/dashboard">
                <div className="hover:bg-gray-200 transition duration-900 rounded-lg flex flex-row items-start pl-3 py-3 font-montserrat">
                <SpaceDashboardRounded/>
                <p className="pl-11 pr-20">Dashboard</p>
                </div>
                </NavLink>
              </ListItem>

              <ListItem>
              <NavLink to="/schedule">
                <div className="hover:bg-gray-200 transition duration-900 rounded-lg flex flex-row items-start pl-3 py-3 font-montserrat whitespace-nowrap">
                <ScheduleRounded/>
                <p className="pl-11 pr-12">Class Schedule</p>
                </div>
                </NavLink>
                
              </ListItem>

              <ListItem>
              <NavLink to="/rsessions">
                <div className="hover:bg-gray-200 transition duration-900 rounded-lg flex flex-row items-start pl-3 py-3 font-montserrat whitespace-nowrap">
                <VideocamRounded/>
                <p className="pl-11 pr-5">Recorded Sessions</p>
                </div>
                </NavLink>
              </ListItem>
{/* 
              <ListItem>
              <NavLink to="/assignments">
                <div className="hover:bg-gray-200 transition duration-900 rounded-lg flex flex-row items-start pl-3 py-3 font-montserrat whitespace-nowrap">
                <AssignmentIndRounded/>
                <p className="pl-11 pr-3">Tests & Assignments</p>
                </div>
                </NavLink>
              </ListItem> */}

              <ListItem>
              <NavLink to="/communities">
                <div className="hover:bg-gray-200 transition duration-900 rounded-lg flex flex-row items-start pl-3 py-3 font-montserrat whitespace-nowrap">
                <ChatRounded/>
                <p className="pl-11 pr-16">Communities</p>
                </div>
                </NavLink>
              </ListItem>

              <ListItem>
              <NavLink to="/books">
                <div className="hover:bg-gray-200 transition duration-900 rounded-lg flex flex-row items-start pl-3 py-3 font-montserrat whitespace-nowrap">
                <BookRounded/>
                <p className="pl-11 pr-28 mr-3">Books</p>
                </div>
                </NavLink>
              </ListItem>

              {/* <ListItem>
              <NavLink to="/lboard">
                <div className="hover:bg-gray-200 transition duration-900 rounded-lg flex flex-row items-start pl-3 py-3 font-montserrat whitespace-nowrap">
                <LeaderboardRounded/>
                <p className="pl-11 pr-16 mr-2">Leaderboard</p>
                </div>
                </NavLink>
              
              </ListItem> */}

              <ListItem>
              <NavLink to="/account">
                <div className="hover:bg-gray-200 transition duration-900 rounded-lg flex flex-row items-start pl-3 py-3 font-montserrat whitespace-nowrap">
                <VerifiedUserRounded/>
                <p className="pl-11 pr-28">Account</p>
                </div>
                </NavLink>
              </ListItem>
            </List>
          </div>
        </Drawer>
  );
}

export default Sidebar;
