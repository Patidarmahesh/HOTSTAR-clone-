import React from "react";
import "./skelton.css";
import { Skeleton } from "@mui/material";

const Skelton = () => {
  return (
    <div class="card">
      <div class="card__image"></div>
      <div style={{border:"0px solid green",display:"flex",gap:"15px",flexDirection:"column",position:"absolute",zIndex:"1",top:180,width:"100%"}}>
        <Skeleton variant="circular" width={40} height={40} />
        <Skeleton variant="rectangular" sx={{ width: "80%",borderRadius:"10px"}} />
        <Skeleton variant="rectangular" sx={{ width: "40%",borderRadius:"10px"}} />
      </div>
    </div>
  );
};

export default Skelton;
