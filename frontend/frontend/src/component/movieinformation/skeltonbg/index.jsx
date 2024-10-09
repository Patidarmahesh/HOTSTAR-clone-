import React from "react";
import { Avatar, Skeleton } from "@mui/material";

const SkeletonBg = () => {
  return (
    <>
      <div style={{ border: "1px solid blue", height: "380px" }}>
        <Skeleton
          variant="rectangular"
          sx={{ height: "380px", width: "100%", background: "gray" }}
        />
      </div>
      <div style={{ border: "1px solid white" }}>
        <Skeleton sx={{ height: "60px", background: "gray" }} />
        <div style={{ display: "flex", gap: "50px" }}>
          <Skeleton variant="circular" sx={{ background: "gray" }}>
            <Avatar sx={{ height: "70px", width: "70px" }} />
          </Skeleton>
          <Skeleton variant="circular" sx={{ background: "gray" }}>
            <Avatar sx={{ height: "70px", width: "70px" }} />
          </Skeleton>
        </div>

        <Skeleton sx={{ height: "60px", background: "gray", width: "80%" }} />

        <Skeleton sx={{ height: "60px", background: "gray", width: "60%" }} />

        <Skeleton sx={{ height: "60px", background: "gray", width: "40%" }} />

        <Skeleton sx={{ height: "60px", background: "gray", width: "20%" }} />
      </div>
    </>
  );
};

export default SkeletonBg;
