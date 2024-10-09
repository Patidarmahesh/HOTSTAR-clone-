import React from "react";
import Card from "@mui/material/Card";
import "./commencard.css";
import { useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";
import CircleRatting from "../ratting";

const CommenCard = (props) => {
  
  const { poster, title, date, rating } = props;
  const navigate = useNavigate();

  return (
    <div>
      <Card id="flip-cardssss">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <Card className="w-100 h-100">
              <img
                src={`${poster}`}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Card>
          </div>
        </div>
      </Card>
      <CircleRatting rating={rating} />
      <div style={{border:"0px solid red",display:"flex",flexDirection:"column",gap:"5px",paddingTop:"18px",width:"94%"}}>
        <Typography
          sx={{ color: "white", textAlign: "start" }}
          variant="h5"
        >
          {title}
        </Typography>
        <Typography sx={{ textAlign: "start" }}>
          <span
            style={{
              color: "gray",
              textAlign: "start",
              border: "0px solid red",
            }}
          >
            {date}
          </span>
        </Typography>
      </div>
    </div>
  );
};

export default CommenCard;
