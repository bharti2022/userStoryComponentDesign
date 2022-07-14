import { Grid } from "@material-ui/core";
import React, { useState } from "react";
import LabelWithIcon from "../../molecules/LabelWithIcon/LabelWithIcon";

const ExploreDropDown = ({ data }) => {
  const [open, setOpen] = useState(data.open);
  const changeState=()=>{
    setOpen(!open)
  }
  return 
  (
  { open && 
    <Grid container>
      {data.ExploreDropDown.map(data=>{
  <Grid item>
     <LabelWithIcon imgSrc={src} text={text} onclick={onclick}/>
    </Grid>
      })}
  </Grid>
});
};

export default ExploreDropDown;
