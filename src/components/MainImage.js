import React from "react";
import {faultImg} from "./helper";

/*
  Selected image on the product page
 */
export default function MainImage({ imgSrc }) {
    return (
        <div>
            <img src={imgSrc? imgSrc: faultImg}
                 style={{height: "40vh", width: "35vw"}} alt="main" />
        </div>
    )
}