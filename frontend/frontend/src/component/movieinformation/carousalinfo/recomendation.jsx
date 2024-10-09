import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import UseFetch from "../../usefetch";
import ComponentWrapper from "../../componentWrapper";
import CommenCarousal from "../../commenCarousal";
import CommenCard from "../../commenCard";
import Skelton from "../../skelton";
import dayjs from "dayjs";

const Recomendation = ({ mediaType, id }) => {
  const navigate = useNavigate();
  const [endpoint, setendPoint] = useState("movie");

  const { url } = useSelector((state) => state.home);

  const { data, loading } = UseFetch(`/${mediaType}/${id}/recommendations`);

  const defultPic =
    "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/896/580896-v";

  return (
    <ComponentWrapper heading="Recomendation">
      {!loading ? (
        <CommenCarousal>
          {data?.results.map((item) => {
            const poster = item.poster_path
              ? url.backdrop + item.poster_path
              : defultPic;
            return (
              <div
                onClick={() =>
                  navigate(`/${item.media_type || endpoint}/${item.id}`)
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

export default Recomendation;
