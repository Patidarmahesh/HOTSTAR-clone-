import React from "react";
import "./kidsnav.css";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import AccountCircleIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import Search from "../../component/search";

const KidsNavbar = () => {
  return (
    <div>
        <AppBar
          sx={{ background: "#002159", border: "none", boxShadow: "none",height:"78px"}}
        >
          <div style={{ border: "none" }}>
            <ul>
              <li>
                <button className="logo">
                  <AccountCircleIcon />
                </button>
              </li>
              <li>
                <Link to="/">
                  <img src="https://secure-media.hotstarext.com/web-assets/prod/images/brand-logos/disney-kids.svg"></img>
                </Link>
              </li>
              <div className="Search_Content">
                {/* <input placeholder="Search Here" className="input_box"></input> */}

                <Search />
                <Button
                  variant="contained"
                  style={{ background: "gold" }}
                  className="button_hover"
                >
                  Exit Kids
                </Button>
              </div>
            </ul>
          </div>
        </AppBar>
    </div>
  );
};

export default KidsNavbar;
