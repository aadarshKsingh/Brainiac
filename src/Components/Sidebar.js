import React from "react";
import Nav from "./Nav";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import {
  AssignmentIndRounded,
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
                <ListItemButton sx={{ marginRight: "-100px" }}>
                  <ListItemIcon>
                    <SpaceDashboardRounded />
                  </ListItemIcon>
                </ListItemButton>
                <ListItemText
                  sx={{
                    ".MuiListItemText-primary": {
                      fontFamily: "montserrat",
                    },
                  }}
                  primary="Dashboard"
                />
              </ListItem>

              <ListItem>
                <ListItemButton sx={{ marginRight: "-70px" }}>
                  <ListItemIcon>
                    <ScheduleRounded />
                  </ListItemIcon>
                </ListItemButton>
                <ListItemText
                  sx={{
                    ".MuiListItemText-primary": {
                      fontFamily: "montserrat",
                    },
                  }}
                  primary="Class Schedule"
                />
              </ListItem>

              <ListItem>
                <ListItemButton sx={{ marginRight: "-40px" }}>
                  <ListItemIcon>
                    <VideocamRounded />
                  </ListItemIcon>
                </ListItemButton>
                <ListItemText
                  sx={{
                    ".MuiListItemText-primary": {
                      fontFamily: "montserrat",
                    },
                  }}
                  primary="Recorded Sessions"
                />
              </ListItem>

              <ListItem>
                <ListItemButton sx={{ marginRight: "-25px" }}>
                  <ListItemIcon>
                    <AssignmentIndRounded />
                  </ListItemIcon>
                </ListItemButton>
                <ListItemText
                  sx={{
                    ".MuiListItemText-primary": {
                      fontFamily: "montserrat",
                    },
                  }}
                  primary="Tests & Assignments"
                />
              </ListItem>

              <ListItem>
                <ListItemButton sx={{ marginRight: "-80px" }}>
                  <ListItemIcon>
                    <ChatRounded />
                  </ListItemIcon>
                </ListItemButton>
                <ListItemText
                  sx={{
                    ".MuiListItemText-primary": {
                      fontFamily: "montserrat",
                    },
                  }}
                  primary="Communities"
                />
              </ListItem>

              <ListItem>
                <ListItemButton sx={{ marginRight: "-85px" }}>
                  <ListItemIcon>
                    <LeaderboardRounded />
                  </ListItemIcon>
                </ListItemButton>
                <ListItemText
                  sx={{
                    ".MuiListItemText-primary": {
                      fontFamily: "montserrat",
                    },
                  }}
                  primary="Leaderboard"
                />
              </ListItem>

              <ListItem>
                <ListItemButton sx={{ marginRight: "-120px" }}>
                  <ListItemIcon>
                    <VerifiedUserRounded />
                  </ListItemIcon>
                </ListItemButton>
                <ListItemText
                  sx={{
                    ".MuiListItemText-primary": {
                      fontFamily: "montserrat",
                    },
                  }}
                  primary="Account"
                />
              </ListItem>
            </List>
          </div>
        </Drawer>
  );
}

export default Sidebar;
