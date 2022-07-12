import React from "react";

const Image = ({imgSrc,onclick,height,width}) => {
  return <img src={imgSrc} onClick={()=>onclick} height={height} width={width}></img>
};

export default Image;
