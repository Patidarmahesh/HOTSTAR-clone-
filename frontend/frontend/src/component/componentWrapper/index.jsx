import React, { Fragment } from "react";
import "./wrapper.css";
import { Button, Typography } from "@mui/material";

const ComponentWrapper = ({ children, heading, onTabChange, tabData = [] }) => {
  return (
    <div
      className={ heading === "Similar Con" || heading === "Recomendation" || heading === "Official Videos" ? "bothComponent" : "latest_movies"}
    >
      <div className="headingSection">
        <Typography id="hedaing12">
          {`${heading}`}
        </Typography>
        <div className="buttonSection">
          {tabData.map((tab, index) => {
            return (
              <Fragment key={index}>
                <Button
                  style={{
                    padding: "8px",
                    width: "45%",
                    background: `${index == 0 ? "gold" : "red"}`,
                    color: "white",
                  }}
                  onClick={() => onTabChange(tab)}
                >
                  {tab}
                </Button>
              </Fragment>
            );
          })}
        </div>
      </div>
      <div className="slider_container">{children}</div>
    </div>
  );
};

export default ComponentWrapper;
