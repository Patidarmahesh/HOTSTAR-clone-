import React, { useEffect } from "react";
import "video-react/dist/video-react.css";
import { Player } from "video-react";
import "./carousal.css";
import CommenCarousal from "../commenCarousal";
import { Button, Typography } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import AddIcon from "@mui/icons-material/Add";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// src="https://img1.hotstarext.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/219/1530219-i-898c101fb615"

const VideoCarousal = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="video_container">
      <div style={{ width: "100%" }}>
      <Slider {...settings}>
          <div className="video_Card">
            <Player
              source
              autoPlay
              src="/assets/_The_Way_Of_Water_Official_trailer_4k_UHD_60fps_Avatar_2_trailer(1080p60).mp4"
            />
              <div
                style={{
                  border: "0px solid red",
                  width: "40%",
                  height: "auto",
                  marginTop: "16rem",
                  position: "relative",
                  zIndex: "1",
                  marginLeft: "80px",
                  display: "flex",
                  zIndex: "1",
                  position: "absolute",
                  top: "0",
                }}
              >
                <table>
                  <td
                    style={{
                      textAlign: "start",
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                    }}
                  >
                    <tr>
                      <Typography
                        variant="h4"
                        sx={{ fontWeight: "bold", color: "pink" }}
                      >
                        Hotstar{" "}
                        <span style={{ color: "green", fontSize: "50px" }}>
                          Special
                        </span>
                      </Typography>
                    </tr>
                    <tr>
                      <Typography variant="h3" sx={{ fontWeight: "bold",color:"white"}}>
                        AVATAR THE WAY OF WATER
                      </Typography>
                    </tr>
                    <tr>
                      <div style={{ display: "flex", fontSize: "20px" }}>
                        <li>Date: 2023</li>
                        <li>Language: 10</li>
                        <li>Title: Avatar</li>
                      </div>
                    </tr>
                    <tr style={{ color: "wheat" }}>
                      <p>
                        Avatar In 2009 Avatar was released with a highly
                        positive review. Watching this movie around eight times
                        in the first year it was out I concluded that the deeper
                        meaning of the story could be taken two different ways.
                        In a sense it could be depicting how the European’s came
                        and took the Indian’s land, just how the Na’vi
                      </p>
                    </tr>
                    <tr>
                      <div style={{ display: "flex", fontSize: "20px" }}>
                        <li>Action</li>
                        <li>Adventure</li>
                        <li>Fantasy</li>
                        <li>Suspense</li>
                      </div>
                    </tr>
                    <tr style={{ display: "flex", gap: "18px" }}>
                      <Button
                        style={{
                          padding: "14px",
                          background: "transparent",
                          width: "60%",
                          fontSize: "20px",
                          color: "white",
                          border: "2px solid gray",
                        }}
                      >
                        <PlayArrowIcon /> Watch Now
                      </Button>
                      <Button
                        style={{
                          padding: "14px",
                          background: "transparent",
                          fontSize: "20px",
                          color: "white",
                          border: "2px solid gray",
                        }}
                      >
                        <AddIcon />
                      </Button>
                    </tr>
                  </td>
                </table>
            </div>
          </div>
          </Slider>
      </div>
    </div>
  );
};

export default VideoCarousal;
