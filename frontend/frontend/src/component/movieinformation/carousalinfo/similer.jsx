import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import dayjs from "dayjs";
import UseFetch from "../../usefetch";
import Skelton from "../../skelton";
import ComponentWrapper from "../../componentWrapper";
import CommenCarousal from "../../commenCarousal";
import CommenCard from "../../commenCard";

const Similar = ({ mediaType, id }) => {
  const [endpoint, setendPoint] = useState("movie");
  const navigate = useNavigate();
  const carousalContainer = useRef();

  const { url } = useSelector((state) => state.home);

  const { data, loading } = UseFetch(`/${mediaType}/${id}/similar`);
  console.log(",,,,,,,,,,", data);

  const defultPic =
    "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/896/580896-v";

  return (
    <ComponentWrapper heading="Similar Con">
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
export default Similar;
