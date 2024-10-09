import React, { useState } from "react";
import { useSelector } from "react-redux";
import UseFetch from "../usefetch";
import BothCarousal from "../bothCarousal";

const DoubedShow = () => {
  const [endpoint, setendPoint] = useState("movie");

  const { url } = useSelector((state) => state.home);

  const { data, loading } = UseFetch(`/${endpoint}/upcoming`);
  console.log("upcoming", data);

  return (
    <BothCarousal
      heading="Best Of Foreign Show"
      data={data}
      loading={loading}
      url={url}
    />
  );
};

export default DoubedShow;
