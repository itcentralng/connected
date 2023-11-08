import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { NavLink } from "react-router-dom";
import { Typography } from "@mui/material";
import { MessageSharp, ViewList } from "@mui/icons-material";
import { ReactNode } from "react";

type Props = {
  drawerWidth: number;
};

type MenuItem = {
  icon: ReactNode;
  text: string;
  link: string;
};

const Sidebar = ({ drawerWidth }: Props) => {
  const menuItems = [
    {
      icon: <MessageSharp />,
      text: "New Message",
      link: "/",
    },
    {
      icon: <ViewList />,
      text: "Messages",
      link: "messages",
    },
  ];

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Toolbar>
        <Typography
          color="primary.main"
          sx={{
            fontWeight: "600",
            letterSpacing: "4px",
            fontSize: 18,
            textTransform: "uppercase",
            fontFamily: "monospace",
            textAlign: "center",
          }}
        >
          Connected
        </Typography>
      </Toolbar>
      <Divider />
      <List>
        {menuItems?.map((item: MenuItem, index: number) => (
          <ListItem key={index} disablePadding>
            <NavLink
              to={item.text === "Dashboard" ? "/" : `${item.link}`}
              end
              style={({ isActive }) => ({
                width: "100%",
                backgroundColor: isActive ? "#d1d1d1" : "",
              })}
            >
              <ListItemButton>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </NavLink>
          </ListItem>
        ))}
      </List>
      {/* <Button
        variant="contained"
        color="error"
        endIcon={<PowerOff />}
        sx={{ mt: 4 }}
      >
        Logout
      </Button> */}
    </Drawer>
  );
};

export default Sidebar;
