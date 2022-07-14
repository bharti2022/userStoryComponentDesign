import { Box, Tab } from "@mui/material";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

import React from "react";

const Tabs = ({props}) => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box>
      <TabContext value={value}>
        <Box>
          <TabList onChange={handleChange}>
            {props.data.map((tabData, index) => {
              return <Tab label={tabData} value={index} />;
            })}
          </TabList>
        </Box>
        {data.map((tabData, index) => {
          return <TabPanel value={index}>{tabData}</TabPanel>;
        })}
      </TabContext>
    </Box>
  );
};
export default Tabs;
