import React from "react";
import Card from "@mui/material/Card";
import "./channel.css";
import ComponentWrapper from "../componentWrapper";
import CommenCarousal from "../commenCarousal";

const Slider2 = [
  {
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/1132/661132-h",
  },
  {
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/1168/661168-h",
  },
  {
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/1171/661171-h",
  },
  {
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/8774/1308774-h-524cdf69effa",
  },
  {
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/1121/661121-h",
  },
  {
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/1133/661133-h",
  },
  {
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1_5x/sources/r1/cms/prod/1119/661119-h",
  },
  {
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1_5x/sources/r1/cms/prod/1103/661103-h",
  },
  {
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1_5x/sources/r1/cms/prod/1138/661138-h",
  },
  {
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1_5x/sources/r1/cms/prod/1116/661116-h",
  },
  {
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1_5x/sources/r1/cms/prod/1136/661136-h",
  },
  {
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1_5x/sources/r1/cms/prod/1105/661105-h",
  },
  {
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1_5x/sources/r1/cms/prod/1100/661100-h",
  },
  {
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1_5x/sources/r1/cms/prod/6970/956970-h",
  },
  {
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1_5x/sources/r1/cms/prod/1109/661109-h",
  },
  {
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1_5x/sources/r1/cms/prod/1112/661112-h",
  },
  {
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1_5x/sources/r1/cms/prod/1117/661117-h",
  },
  {
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/1167/661167-h",
  },
];

const HotstarChannel = () => {
  return (
    <ComponentWrapper heading="Popular Channels">
      <CommenCarousal slidelevel="5">
        {Slider2.map((data, index) => {
          return (
            <Card key={index} id="flip-card-hotstar">
              <div class="flip-card-inner">
                <Card>
                  <img
                    src={data.image}
                    style={{ maxWidth: "100%", height: "150px" }}
                  />
                </Card>
              </div>
            </Card>
          );
        })}
      </CommenCarousal>
    </ComponentWrapper>
  );
};
export default HotstarChannel;
