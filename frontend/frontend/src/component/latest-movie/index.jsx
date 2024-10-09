import React, { useState } from "react";
import { useSelector } from "react-redux";
import UseFetch from "../usefetch";
import BothCarousal from "../bothCarousal";

const LatestMovie = () => {
  const [endpoint, setendPoint] = useState("day");

  const { url } = useSelector((state) => state.home);

  const { data, loading } = UseFetch(`/trending/movie/${endpoint}`);

  const onTabChange = (tab) => {
    setendPoint(tab === "Day" ? "day" : "week");
  };

  const tabData = ["Day", "Week"];

  return (
    <BothCarousal
      heading="Latest Movies"
      tabData={tabData}
      onTabChange={onTabChange}
      data={data}
      loading={loading}
      url={url}
    />
  );
};
export default LatestMovie;
