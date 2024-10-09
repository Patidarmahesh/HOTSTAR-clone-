import { Typography } from "@mui/material";
import React, { useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import dayjs from "dayjs";
import UseFetch from "../usefetch";
import SkeletonBg from "./skeltonbg";
import VideoTab from "./videotab";
import "./info.css";

const MovieInformation = ({ video, crew }) => {
  const [show, setShow] = useState(false);
  const [videoId, setVideoId] = useState(null);

  const { mediaType, id } = useParams();
  const { data, loading } = UseFetch(`/${mediaType}/${id}`);
  const { url } = useSelector((state) => state.home);
  const defultimg = "https://pbs.twimg.com/media/FXzXhyfVQAgPJfD?format=jpg&name=large";
  const percentage = 70;

  const director = crew?.filter((f) => f.job === "Director");
  const writer = crew?.filter((f) => f.job === "Screenplay" || f.job === "Story" || f.job === "Writer"
  );

  return (
    <div className="backgroundContainer">
      <div style={{ width: "100%" }}>
        <div
          className="backgroundimgCon"
          style={{
            backgroundImage: `url('${url.backdrop + data?.backdrop_path}')`,
          }}
        >
          <div className="middleContainer"></div>
          <div className="middlepart">
            <div className="maincontentSec">
              {!loading ? (
                <>
                  <div style={{ height: "100%" }}>
                    {data && data?.poster_path ? (
                      <img
                        src={url.backdrop + data.poster_path}
                        className="middleImagecon"
                        alt="error"
                      />
                    ) : (
                      <img
                        src={defultimg}
                        className="middleImagecon"
                        alt="error"
                      />
                    )}
                  </div>
                  <div>
                    <table>
                      <td className="tableContainer">
                        <tr>
                          <Typography
                            variant="h5"
                            sx={{
                              color: "white",
                              fontWeight: "bold",
                              textAlign: "start",
                            }}
                          >
                            {data &&
                              `${data?.name || data?.title} (${dayjs(
                                data?.release_date
                              ).format("YYYY")})`}
                          </Typography>
                        </tr>
                        <tr>
                          <Typography
                            sx={{ color: "gray", textAlign: "start" }}
                          >
                            {data && data?.tagline}
                          </Typography>
                        </tr>
                        <tr style={{ display: "flex", gap: "30px" }}>
                          <div style={{ width: "10%" }}>
                            <CircularProgressbar
                              value={percentage}
                              text={`${percentage}%`}
                            />
                            {/* <CircleRatting rating={data?.vote_average.toFixed(1)}/> */}
                          </div>
                          <div className="watchIconConten">
                            <div style={{ width: "10%" }}>
                              <div
                                className="videoShow"
                                onClick={() => {
                                  setShow(true);
                                  setVideoId(video.key);
                                }}
                              >
                                <PlayArrowIcon
                                  sx={{ fontSize: "40px", color: "white" }}
                                />
                              </div>
                            </div>
                            <p style={{ color: "white" }}>Watch Trailer</p>
                          </div>{" "}
                        </tr>
                        <tr>
                          <Typography id="textpart">Overview</Typography>
                        </tr>
                        <tr>
                          <p id="textpart">{data?.overview}</p>
                        </tr>
                        <tr style={{ borderBottom: "1px solid gray" }}>
                          {data && data.release_date && (
                            <p id="textpart">
                              Release Date :
                              <span style={{ color: "gray" }}>
                                {dayjs(data?.release_date).format(
                                  "MMM D, YYYY"
                                )}
                              </span>
                            </p>
                          )}
                        </tr>
                        {director && director?.length > 0 && (
                          <tr style={{ borderBottom: "1px solid gray" }}>
                            <p id="textpart">
                              Director:{" "}
                              {director?.map((dev, index) => {
                                return (
                                  <span key={index}>
                                    {dev.name}
                                    {director.length - 1 !== index && ", "}
                                  </span>
                                );
                              })}
                            </p>
                          </tr>
                        )}
                        {writer && writer?.length > 0 && (
                          <tr style={{ borderBottom: "1px solid gray" }}>
                            <p id="textpart">
                              Writer:{" "}
                              {writer?.map((d, index) => {
                                return (
                                  <span key={index}>
                                    {d.name}
                                    {writer.length - 1 !== index && ", "}
                                  </span>
                                );
                              })}
                            </p>
                          </tr>
                        )}
                        {data && data?.created_by?.length > 0 && (
                          <tr style={{ borderBottom: "1px solid gray" }}>
                            <p style={{ color: "white", textAlign: "start" }}>
                              Creator:{" "}
                              {data?.created_by?.map((d, index) => {
                                return (
                                  <span key={index}>
                                    {d.name}
                                    {data?.created_by.length - 1 !== index &&
                                      ", "}
                                  </span>
                                );
                              })}
                            </p>
                          </tr>
                        )}
                      </td>
                    </table>
                  </div>
                </>
              ) : (
                <SkeletonBg />
              )}
            </div>
          </div>
          <VideoTab
            show={show}
            setShow={setShow}
            videoId={videoId}
            setVideoId={setVideoId}
          />
        </div>
      </div>
    </div>
  );
};

export default MovieInformation;
