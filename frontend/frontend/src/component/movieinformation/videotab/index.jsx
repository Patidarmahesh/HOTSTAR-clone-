import React from "react";
import ReactPlayer from "react-player";
import "./videotab.css";

const VideoTab = ({ show, setShow, videoId, setVideoId }) => {
  const hidePopUp = () => {
    setShow(false);
    setVideoId(null);
  };
  
  return (
    <div className={`videopopup ${show ? "visible" : "visiable2"}`}>
      <div className="opacityLayer" onClick={hidePopUp}></div>
      <div className="videoPlayer2">
      <span className="closeBtn" onClick={hidePopUp} >
        Close
      </span>
      <div className="videoPlayer">
        <ReactPlayer
          className="react-player"
          url={`https://www.youtube.com/watch?v=${videoId}`}
          width="100%"
          height="100%"
          controls
        />
      </div>
      </div>
    </div>
  );
};

export default VideoTab;
