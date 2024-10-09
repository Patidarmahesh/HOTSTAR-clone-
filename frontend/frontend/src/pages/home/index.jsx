import React from "react";
import MainLayOut from "../../mainlayout";
import Banner from "../../component/banner";
import VideoCarousal from "../../component/carousalvideo";
import LatestMovie from "../../component/latest-movie";
import StarPlusShow from "../../component/starplus";
import ShowFrom2020 from "../../component/show2020";
import HotstarChannel from "../../component/hotstar-chhannels";
import Reels from "../../component/reels";
import DoubedShow from "../../component/foregin-show-doubed";

function Home() {
  return (
    <MainLayOut>
      <Banner />
      <VideoCarousal />
      <LatestMovie />
      {/* <StarPlusShow /> */}
      {/* <ShowFrom2020 /> */}
      {/* <DoubedShow /> */}
      {/* <Reels /> */}
      {/* <HotstarChannel /> */}
    </MainLayOut>
  );
}

export default Home;
