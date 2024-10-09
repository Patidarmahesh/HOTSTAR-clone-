import React from "react";
import MovieInformation from "../../component/movieinformation";
import BackgroundHeader from "../../layout/backgroundHeader";
import UseFetch from "../../component/usefetch";
import { useParams } from "react-router-dom";
import VideoSection from "../../component/movieinformation/videosection";
import Simelar from "../../component/movieinformation/carousalinfo/similer";
import Recomendation from "../../component/movieinformation/carousalinfo/recomendation";
import Footer from "../../layout/footer/Footer";


const BackgroundInformation = () => {
  const { mediaType, id } = useParams();
  const { data, loading } = UseFetch(`/${mediaType}/${id}/videos`);
  const { data : credits, loading : loadingCredits } = UseFetch(`/${mediaType}/${id}/credits`);

  return (
    <div>
        <BackgroundHeader/>
        <MovieInformation video={data?.results?.[0]} crew={credits?.crew}/>
        {/* <Casting data={credits?.cast} loadingCredits={loadingCredits}/> */}
        <VideoSection data={data} loading={loading}/>
        <Simelar mediaType={mediaType} id={id}/>
        <Recomendation mediaType={mediaType} id={id}/>
        <Footer/>
    </div>
  );
};

export default BackgroundInformation;
