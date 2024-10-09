import React, { Fragment } from "react";
import KidsCard from "../card";
import '../card.css';

const CardData = [
    {
        image:"https://img1.hotstarext.com/image/upload/f_auto/sources/r1/cms/prod/1627/651627-r"
    },
    {
        image:"https://img1.hotstarext.com/image/upload/f_auto/sources/r1/cms/prod/1658/651658-r"
    },
    {
        image:"https://img1.hotstarext.com/image/upload/f_auto/sources/r1/cms/prod/3341/653341-r"
    },
    {
        image:"https://img1.hotstarext.com/image/upload/f_auto/sources/r1/cms/prod/1650/651650-r"
    },
    {
        image:"https://img1.hotstarext.com/image/upload/f_auto/sources/r1/cms/prod/6715/646715-r"
    },
    {
        image:"https://img1.hotstarext.com/image/upload/f_auto/sources/r1/cms/prod/1586/651586-r"
    },
    {
        image:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/6544/666544-v"
    },
    {
        image:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/8667/1078667-v-f9e161fbfb7e"
    },
    {
        image:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6576/666576-v"
    },
    {
        image:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6126/686126-v"
    },
    {
        image:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5199/875199-v"
    },
    {
        image:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4344/674344-v"
    },
    {
        image:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/7850/687850-v"
    },
    {
        image:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5879/805879-v"
    },
    {
        image:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3700/673700-v"
    },
    {
        image:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3047/1413047-v-c1ad3dd8ea81"
    },
    {
        image:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/9700/1289700-v-606bd48d21ab"
    },
    {
        image:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/9246/1159246-v-aa1c2a050bc8"
    },
    {
        image:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/9389/1119389-v-8d06625813a0"
    },
    {
        image:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/7698/1037698-v-5918220faceb"
    },
    {
        image:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3702/673702-v"
    },
    {
        image:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4420/674420-v"
    },
    {
        image:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/265/650265-v"
    },
    {
        image:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4420/674420-v"
    }
    
    
]

const KidsNoramlCard = ()=>{
    return(
        <Fragment>
            <div style={{border:"0px solid green",width:"100%",display:"grid",gridTemplateColumns:"1fr",gridTemplateRows:"auto",marginTop:"4.5rem",justifyItems:"center",paddingTop:"28px"}}>
                <div style={{border:"0px solid gold",width:"96%",display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr 1fr",gap:"20px"}}>
                    {
                        CardData.map((data)=>{
                            return(
                                <Fragment>
                                    <KidsCard cardValue = {data}/>
                                </Fragment>
                            );
                        })
                    }
                </div>
            </div>
        </Fragment>
    )
}
export default KidsNoramlCard;