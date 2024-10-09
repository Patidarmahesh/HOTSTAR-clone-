import React, { Fragment } from "react";
import Card from "@mui/material/Card";
import "video-react/dist/video-react.css";
import { Player } from "video-react";

const ReelCard = (props) => {
  const { data, index } = props.cardValue;
  return (
    <Fragment>
      <Card key={index} id="flip-card_reel">
        <Card className="video_Hover" sx={{ width: "100%", height: "100%" }}>
          <Player source src={`${data.path}`} className="video_Hover_under" />
        </Card>
      </Card>
    </Fragment>
  );
};
export default ReelCard;
