import { Typography } from "@mui/material";
import React from "react";

const data = [
  {
    url: "https://media.gettyimages.com/id/1375375084/photo/colin-farrell-attends-the-batman-world-premiere-on-march-01-2022-in-new-york-city.jpg?s=612x612&w=0&k=20&c=QwJo92b-_Oak1neoKwxl_e013qfqIvZkiPsZiEz3rKI=",
    name:"Alisa Hayden",
  },
  {
    url: "https://media.gettyimages.com/id/1375353107/photo/zo%C3%AB-kravitz-attends-the-batman-world-premiere-on-march-01-2022-in-new-york-city.jpg?s=612x612&w=0&k=20&c=uJInJ4gPL4lO6nh-ke4TiEnXZMtAzk-IxiMKxPBz0Lo=",
    name:"Emilay kerr",
  },
  {
    url: "https://media.gettyimages.com/id/1375389605/photo/peter-sarsgaard-attends-the-batman-world-premiere-on-march-01-2022-in-new-york-city.jpg?s=612x612&w=0&k=20&c=bWSww4mX6FnbQblcIsEEGFxLepUobHV6HmKWlEzb7rg=",
    name:"Beth Moony",
  },
  {
    url: "https://media.gettyimages.com/id/1378872687/photo/caterina-balivo-attends-the-red-carpet-of-the-premiere-of-the-movie-the-batman-at-the-space.jpg?s=612x612&w=0&k=20&c=rVqy_jrPQrcICEk8gvnnmui9kxY6Qk14mVrU_LPgdns=",
    name:"Gardener",
  },
  {
    url: "https://media.gettyimages.com/id/1378888663/photo/lorella-cuccarini-attends-the-red-carpet-of-the-premiere-of-the-movie-the-batman-at-the-space.jpg?s=612x612&w=0&k=20&c=A3eJZUAvgakzmjfFWgqboievl9t6Fuh7sC6i7bhCpFM=",
    name:"Katrina vyyy",
  },
  {
    url: "https://media.gettyimages.com/id/1378873252/photo/matilde-gioli-attends-the-red-carpet-of-the-premiere-of-the-movie-the-batman-at-the-space.jpg?s=612x612&w=0&k=20&c=ZCtJiuFCvzW7EXlTF57HjGu_sAM872yW6S8RXyPnEeQ=",
    name:"Melissa lynn",
  },
  {
    url: "https://media.gettyimages.com/id/1378887531/photo/mariano-di-vaio-attends-the-red-carpet-of-the-premiere-of-the-movie-the-batman-at-the-space.jpg?s=612x612&w=0&k=20&c=R0WoPQCKT5FQ5PuxbcNSIh3oC9Zq30O7IY1aVGSVgkc=",
    name:"Ashlay Talor",
  },
];

const Casting = ({loadingCredits}) => {
  return (
    <div style={{width:"100%",border:"1px solid gold",display:"flex",justifyContent:"center",marginTop:"-6rem"}}>
      <div style={{width:"75%"}}>
      <Typography sx={{ color: "white",textAlign:"start",marginBottom:"6px"}} variant="h5">
        Cast
      </Typography>
      <div
        style={{
          border: "0px solid red",
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        {data.map((avatar) => {
          return (
            <div>
            <div
              style={{
                width: "110px",
                height: "110px",
                borderRadius: "50%",
                border: "1px solid gray",
                marginBottom:"6px"
              }}
            ><img src={avatar.url} style={{width:"100%",height:"100%",borderRadius:"50%"}}/></div><p style={{color:"white"}}>{avatar.name}</p></div>
          );
        })}
      </div>
      </div>
    </div>
  );
};

export default Casting;
