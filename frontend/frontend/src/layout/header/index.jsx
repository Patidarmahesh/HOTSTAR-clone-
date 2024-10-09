import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import SearchIcon from "@mui/icons-material/Search";
import AddHomeIcon from "@mui/icons-material/AddHome";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import LocalMoviesIcon from "@mui/icons-material/LocalMovies";
import SportsVolleyballIcon from "@mui/icons-material/SportsVolleyball";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import "./header.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const drawerWidth = 240;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  // const [show, setShow] = useState("top");
  // const [lastScrolly, setLastScrolly] = useState(0);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // const controlNavbar = () => {
  //   console.log(window.scrolly);
  //   if (window.scrolly > 200) {
  //     if (window.scrolly > lastScrolly) {
  //       setShow("hide");
  //     } else {
  //       setShow("show");
  //     }
  //   }
  //   setLastScrolly(window.scrolly);
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", controlNavbar);
  //   return () => {
  //     window.removeEventListener("scroll", controlNavbar);
  //   };
  // }, [lastScrolly]);

  // useEffect(()=>{
  //   window.scrollTo(0,0);
  // },[location])

  const drawer = (
    <div className="headerContainer">
      <div className="headerImgCon">
        <img
          src="https://img.hotstar.com/image/upload/v1656431456/web-images/logo-d-plus.svg"
          alt="error"
          style={{ marginLeft: "-10px", width: "84%" }}
        />
        <div style={{ marginLeft: "-34px" }}>
          <NavLink to="/kids" className="kidsText">
            Kids
          </NavLink>
        </div>
      </div>
      <div className="textdropdowncon">
        <div className="textdropdownunder">
          <div class="dropdown">
            <NavLink to="/">
              <AddHomeIcon id="icon" />
            </NavLink>
          </div>

          <div class="dropdown">
            <NavLink to="/">
              <SearchIcon id="icon" />
            </NavLink>
          </div>

          <div class="dropdown">
            <NavLink to="/tv">
              <LiveTvIcon id="icon" />
            </NavLink>
          </div>

          <div class="dropdown">
            <NavLink to="/movies">
              <LocalMoviesIcon id="icon" />
            </NavLink>
          </div>
          <div class="dropdown">
            <NavLink to="/sports">
              <SportsVolleyballIcon id="icon" />
            </NavLink>
          </div>

          <div class="dropdown">
            <NavLink to="/login">
              <LockOpenIcon id="icon" />
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          height: "30px",
          display: "flex",
          justifyContent: "start",
          background: "#0f1014",
          //  background:"transparent",
          width: "100%",
          boxShadow: "0px 0px 15px 3px rgba(0, 0, 0, 1.0)",
          zIndex: "1",
        }}
        // id={`${show}`}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{
          width: { sm: drawerWidth },
          flexShrink: { sm: 0 },
          background: "transparent",
        }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none", zIndex: 1 },
            "& .MuiDrawer-paper": {
              background:"transparent",
              boxSizing: "border-box",
              // width: drawerWidth,
              width: "120px",
              display: "none",
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              background:"transparent",
              overflowY:"none",
              borderRight:"none",
              boxSizing: "border-box",
              // width: drawerWidth,
              width: "120px",
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
