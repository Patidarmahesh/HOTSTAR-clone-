import React from "react";
import ComponentWrapper from "../componentWrapper";
import CommenCarousal from "../commenCarousal";
import Skelton from "../skelton";
import CommenCard from "../commenCard";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";
import "./bothCarousal.css";

const BothCarousal = ({
  heading,
  tabData,
  onTabChange,
  data,
  loading,
  url,
  endpoint,
}) => {
  const Navigate = useNavigate();

  const defultPic =
    "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/896/580896-v";

  return (
    <ComponentWrapper
      heading={heading}
      tabData={tabData}
      onTabChange={onTabChange}
    >
      {!loading ? (
        <CommenCarousal>
          {data?.results?.map((item) => {
            const poster = item.poster_path
              ? url.backdrop + item.poster_path
              : defultPic;
            return (
              <div
                onClick={() =>
                  Navigate(`${item.media_type || endpoint}/${item.id}`)
                }
              >
                <CommenCard
                  poster={poster}
                  title={item.title || item.name}
                  date={dayjs(item.release_date).format("MMM D, YYYY")}
                  rating={item.vote_average.toFixed(1)}
                />
              </div>
            );
          })}
        </CommenCarousal>
      ) : (
        <CommenCarousal>
          <Skelton />
          <Skelton />
          <Skelton />
          <Skelton />
          <Skelton />
        </CommenCarousal>
      )}
    </ComponentWrapper>
  );
};

export default BothCarousal;
