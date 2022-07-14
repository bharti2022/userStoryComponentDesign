import React from "react";
import TypographyComponent from "../../atoms/Typography/Typography";
import { listDropData } from "../../../Constants/constant";
import LabelWithIcon from "../LabelWithIcon/LabelWithIcon";
import { Box, Grid } from "@material-ui/core";

const ExploreDropDown = () => {
  return (
    <Box>
      <div>
        <TypographyComponent
          color="primary"
          className={classes.explore_titles}
          variant="body1"
        >
          Explore by category
        </TypographyComponent>
        <TypographyComponent variant="body1">
          See recently added titles
        </TypographyComponent>
        <TypographyComponent variant="body1">
          See popular titles
        </TypographyComponent>
      </div>
      <Grid container>
        {listDropData &&
          listDropData.map((result) => {
            return <>
            <Grid item >
              <LabelWithIcon imgSrc={result.src} text={result.label} />
            </Grid>
            </>;
          })}
      </Grid>
    </Box>
  );
};

export default ExploreDropDown;
