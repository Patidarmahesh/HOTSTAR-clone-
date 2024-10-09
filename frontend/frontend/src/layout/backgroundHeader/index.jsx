import React from "react";
import "./back.css";
import AppBar from "@mui/material/AppBar";
import { Link } from "react-router-dom";
import Search from "../../component/search";

const BackgroundHeader = () => {
  return (
    <div>
      <AppBar
        sx={{
          background: "rgb(24, 18, 29)",
          border: "none",
          boxShadow: "none",
          height: "50px",
        }}
      >
        <div style={{ border: "none" }}>
          <ul>
            <li>
              <Link to="/">
                <img src="https://secure-media.hotstarext.com/web-assets/prod/images/brand-logos/disney-kids.svg" ></img>
              </Link>
            </li>
            <input placeholder="Search Here.........................." style={{width:"40%",borderRadius:"4px",background:"none",border:"none",fontSize:"20px",color:"yellow"}}/>
          </ul>
        </div>
      </AppBar>
    </div>
  );
};

export default BackgroundHeader;
