import React from "react";
import {Grid} from '@material-ui/core'
import TypographyComponent from "../../atoms/Typography/Typography";
const Banner = ({imgSrc,text}:{imgSrc:string,text:string}) => {
  return (
  <><Grid container>
         <Grid item xs={8} lg={8}>
            <TypographyComponent variant="body1">{text}</TypographyComponent>
           </Grid>
           <Grid item xs={4} lg={8}>
         <Image imgSrc={imgSrc}></Image>

           </Grid>
         
         
         </Grid>
         </>
  )
}

export default Banner;
