import {Typography } from "@mui/material";
import React, { useState } from "react";
import "./videosec.css";
import VideoTab from "../videotab";
import Skelton from "../../skelton";
import ComponentWrapper from "../../componentWrapper";
import ItemsCarousel from "react-items-carousel";

const VideoSection = ({ data, loading }) => {
  const [show, setShow] = useState(false);
  const [videoId, setVideoId] = useState(null);
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 10;

  // const loadingSkelton = () => {
  //   return (
  //     <div>
  //       <div style={{ border: "1px solid blue", height: "200px" }}>
  //         <Skeleton
  //           variant="rectangular"
  //           sx={{ height: "200px", width: "100%", background: "gray" }}
  //         />
  //       </div>
  //       <Skeleton sx={{ height: "60px", background: "gray", width: "100%" }} />
  //     </div>
  //   );
  // };

  return (
    <ComponentWrapper heading="Official Videos">
      {!loading ? (
        <div style={{ padding: `0 ${chevronWidth}px` }}>
          <ItemsCarousel
            requestToChangeActive={setActiveItemIndex}
            activeItemIndex={activeItemIndex}
            numberOfCards={5}
            gutter={20}
            leftChevron={<button>{"<"}</button>}
            rightChevron={<button>{">"}</button>}
            outsideChevron
            chevronWidth={chevronWidth}
          >
            {data?.results.map((video) => {
              return (
                <div className="videoConatiner">
                  <div
                    className="videoItem"
                    key={video.id}
                    onClick={() => {
                      setVideoId(video.key);
                      setShow(true);
                    }}
                  >
                    <div className="videoThamb">
                      <img
                        alt="error"
                        src={`https://img.youtube.com/vi/${video.key}/hqdefault.jpg`}
                      />
                    </div>

                    <Typography sx={{ color: "white", textAlign: "start" }}>
                      {video.name}
                    </Typography>
                  </div>
                </div>
              );
            })}
          </ItemsCarousel>
          <VideoTab
            show={show}
            setShow={setShow}
            videoId={videoId}
            setVideoId={setVideoId}
          />
        </div>
      ) : (
        <ItemsCarousel
          requestToChangeActive={setActiveItemIndex}
          activeItemIndex={activeItemIndex}
          numberOfCards={2}
          gutter={20}
          leftChevron={<button>{"<"}</button>}
          rightChevron={<button>{">"}</button>}
          outsideChevron
          chevronWidth={chevronWidth}
        >
          <Skelton />
          <Skelton />
          <Skelton />
          <Skelton />
          <Skelton />
        </ItemsCarousel>
      )}
    </ComponentWrapper>
  );
};

export default VideoSection;
