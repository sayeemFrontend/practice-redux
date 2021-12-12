import React from "react";

import { Tabs, Paper, Tab } from "@material-ui/core";
const Footers = () => {
  const [value, setValue] = React.useState(0);
  const handleChange = (e, newValue) => {
    setValue(newValue);
  };
  return (
    <Paper>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="All" />
        <Tab label="1st" />
        <Tab label="2nd" />
        <Tab label="3rd" />
      </Tabs>
    </Paper>
  );
};
export default Footers;
