import React, { useState } from "react";
import { useSelector } from "react-redux";
import UseFetch from "../usefetch";
import BothCarousal from "../bothCarousal";

const ShowFrom2020 = () => {
  const [endpoint, setendPoint] = useState("movie");

  const { url } = useSelector((state) => state.home);

  const { data, loading } = UseFetch(`/${endpoint}/top_rated`);
  console.log(",,,,,,,,,,", data);

  const onTabChange = (tab) => {
    setendPoint(tab === "Movies" ? "movie" : "tv");
  };

  const tabData = ["Movies", "TV Show"];

  return (
    <BothCarousal
      heading="Star Show (2023)"
      tabData={tabData}
      onTabChange={onTabChange}
      data={data}
      loading={loading}
      url={url}
      endpoint={endpoint}
    />
  );
};
export default ShowFrom2020;
