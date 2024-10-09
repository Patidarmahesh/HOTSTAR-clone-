import { Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UseFetch from "../usefetch";
import { useSelector } from "react-redux";
import Skelton from "../skelton";


export default function Banner() {
  const [background, setBackground] = useState("");
  const navigate = useNavigate();
  const { data } = UseFetch("/movie/upcoming");
  console.log("myyyyyyyyyyy",data);
  const { url } = useSelector((state) => state.home);

  useEffect(() => {
    const bg =
      url.backdrop +
      data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
    setBackground(bg);
  }, [data]);

  return (
    <div
      style={{
        border: "0px solid red",
        marginTop: "40px",
        display: "grid",
        gridTemplateColumns: "94%",
        gridTemplateRows: "auto",
        marginLeft: "6rem",
        // background: "rgb(22, 24, 31)",
        background: "#0f1014",
        padding: "4px",
        paddingBottom: "14px",
      }}
    >
      <div
        style={{
          border: "0px solid blue",
          borderRadius: "6px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          marginRight: "20px",
          gridTemplateRows: "240px",
          width: "100%",
          gap: "0px",
          color: "white",
          boxSizing: "border-box",
          boxShadow:
            "rgba(54, 54, 95, 0.35) -10px -30px 40px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -10px inset",
        }}
      >
        <div style={{ border: "0px solid green" }}>
          {/* {!loading ? ( */}
            <img
              // src="https://shifu.hotstarext.com/SOURCE/VOD/cd-2023-06-05/TNMP2DatedARK_deskXbb-752b26cd-3049-4360-bc82-2a84f5687779.jpg"
              src={background}
              style={{ width: "100%", height: "100%", borderRadius: "8px" }}
              alt="error"
            />
          {/* ) : (
            <Skelton />
          )} */}
        </div>
        <div
          style={{
            border: "0px solid gold",
            display: "grid",
            gridTemplateColumns: "350px",
            gridTemplateRows: "60px auto 54px",
            textAlign: "start",
            gap: "10px",
            padding: "24px",
          }}
        >
          <div
            style={{ border: "0px solid green", display: "flex", gap: "10px" }}
          >
            <img
              src="https://brand-img1.hotstarext.com/image/upload/v1585728139/Disnet%20Plus%20Hotstar%20Logo/D_Hotstar_logo_Dark_BG_120x120.png"
              alt="error"
            />
            <Typography>The Night Manager P2</Typography>
          </div>
          <Typography>
            The Wait Is Over Who Will Finally Get An Upper Hand Stay Tuned
          </Typography>
          <Button sx={{ background: "pink", width: "200px", color: "white" }}>
            SubsCribe
          </Button>
        </div>
      </div>
    </div>
  );
}
