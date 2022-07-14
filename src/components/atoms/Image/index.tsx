import React from "react";

const Image = (imgSrc: string | undefined,onclick: void,height: string | number | undefined,width: string | number | undefined) => {
  return <img src={imgSrc} onClick={()=>onclick} height={height} width={width}></img>
};

export default Image;
