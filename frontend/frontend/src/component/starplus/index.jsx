import React, { useState } from "react";
import UseFetch from "../usefetch";
import { useSelector } from "react-redux";
import BothCarousal from "../bothCarousal";


const StarPlusShow = () => {
  const [endpoint, setendPoint] = useState("movie");

  const { url } = useSelector((state) => state.home);

  const { data, loading } = UseFetch(`/${endpoint}/popular`);

  console.log(",,,,,,,,,,",data);

  const onTabChange = (tab) => {
    setendPoint(tab === "Movies" ? "movie" : "tv");
  };

  const tabData = ["Movies","TV Show"];

  return (
    <BothCarousal
      heading="Movie And Tv"
      tabData={tabData}
      onTabChange={onTabChange}
      data={data}
      loading={loading}
      url={url}
      endpoint={endpoint}
    />
    
  );
};
export default StarPlusShow;
