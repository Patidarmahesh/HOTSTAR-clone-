import React from "react";
import "./reels.css";
import ReelCard from "./cardvideo";
import ComponentWrapper from "../componentWrapper";
import CommenCarousal from "../commenCarousal";

const CardData = [
  {
    path: "/assets/Ram_Siya_Ram_x_Adipurush_4K_Hd_Full_Screen_Status_Ram_Siya_Ram_Lofi_Status_Dussehra_Special_Status(1080p).mp4",
  },
  {
    path: "/assets/Hasi_Ban_Gaye_Lofi_Status_Fullscreen_Lofi_StatusEfx_Status✨_Romantic_Status❤4K_Ultra_HD_(1080p).mp4",
  },
  {
    path: "/assets/❣️Itni_Si_Baat_Hain__WhatsApp⚡Status__Azhar__Love♥Sta️tus__Pritam__Arijit_Singh(720p).mp4",
  },
  {
    path: "/assets/Ram_Siya_Ram_x_Adipurush_4K_Hd_Full_Screen_Status_Ram_Siya_Ram_Lofi_Status_Dussehra_Special_Status(1080p).mp4",
  },
  {
    path: "/assets/Ram_Siya_Ram_x_Adipurush_4K_Hd_Full_Screen_Status_Ram_Siya_Ram_Lofi_Status_Dussehra_Special_Status(1080p).mp4",
  },
];

const Reels = () => {
  
  return (
    <ComponentWrapper heading="Entertanment Reels">
      <CommenCarousal slidelevel="5">
        {CardData.map((data, index) => {
          return <ReelCard cardValue={{data,index}} />
        })}
      </CommenCarousal>
    </ComponentWrapper>
  );
};
export default Reels;
