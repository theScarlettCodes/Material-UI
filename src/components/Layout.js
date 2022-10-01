import {
  AppBar,
  Avatar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
} from "@material-ui/core";
import React from "react";
import { Drawer } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { AddCircleOutline, SubjectOutlined } from "@material-ui/icons";
import { useLocation, useNavigate } from "react-router-dom";
import { Toolbar } from "@material-ui/core";
import { format } from "date-fns";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => {
  return {
    page: {
      background: "#f9f9f9",
      width: "100%",
      padding: theme.spacing(3),
    },
    drawer: {
      width: drawerWidth,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    root: {
      display: "flex",
    },
    active: {
      background: "#f4f4f4",
    },
    list: {
      cursor: "pointer",
      "&:hover": {
        color: "gray",
      },
    },
    title: {
      padding: theme.spacing(2),
    },
    appbar: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    toolbar: theme.mixins.toolbar,
    date: { flexGrow: 1 },
    avatar: {
      marginLeft: theme.spacing(2),
    },
  };
});

const Layout = ({ children }) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    {
      text: "My Notes",
      icon: <SubjectOutlined color="secondary" />,
      path: "/",
    },
    {
      text: "Create Note",
      icon: <AddCircleOutline color="secondary" />,
      path: "/create",
    },
  ];
  return (
    <div className={classes.root}>
      <AppBar className={classes.appbar} elevation={0}>
        <Toolbar>
          <Typography className={classes.date}>
            {" "}
            Today is the {format(new Date(), "do MMMM Y")}
          </Typography>
          <Typography>Jeffrey</Typography>
          <Avatar src="" className={classes.avatar} />
        </Toolbar>
      </AppBar>

      <Drawer
        className={classes.drawer}
        variant="permanent"
        anchor="left"
        classes={{ paper: classes.drawerPaper }}
      >
        <div>
          <Typography variant="h5" className={classes.title}>
            Ninja Notes
          </Typography>
        </div>

        <List>
          {menuItems.map((item) => (
            <ListItem
              key={item.text}
              onClick={() => navigate(item.path)}
              className={
                location.pathname === item.path ? classes.active : null
              }
            >
              <ListItemIcon> {item.icon} </ListItemIcon>
              <ListItemText primary={item.text} className={classes.list} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <div className={classes.page}>
        <div className={classes.toolbar}></div>
        {children}
      </div>
    </div>
  );
};

export default Layout;
