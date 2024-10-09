import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import Movies from "../pages/movies";
import Tv from "../pages/tv";
import Sports from "../pages/sports";
import Login from "../pages/login";
import Kids from "../pages/kids";
import Error from "../pages/error400";
import BackgroundInformation from "../pages/backgroundInformation";

function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/tv" element={<Tv />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/login" element={<Login />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/:mediaType/:id" element={<BackgroundInformation/>} />
        <Route path="*" element={<Error/>} />
      </Routes>
    </div>
  );
}

export default AllRoutes;
