import React, { Fragment } from "react";
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

const KidsCard = (props) => {
  const {image,heading} = props.cardValue;
  return (
    <Fragment>
      <div><Card className="Zoom_Hover" sx={{width:"100%",height:"100%"}}>
            <img src={image} style={{width:"100%",height:"100%"}}></img>
      </Card><Typography variant="h6" sx={{textAlign:"start",color:"white",padding:"10px"}}>{heading}</Typography></div>
    </Fragment>
  );
};
export default KidsCard;
