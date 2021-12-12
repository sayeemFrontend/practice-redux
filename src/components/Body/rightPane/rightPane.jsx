import React from "react";
import { Paper } from "@material-ui/core";
import { Style } from "../style";

const RightPane = (props) => {
  console.log("passss", props);
  return <Paper style={Style.Paper}>Right item</Paper>;
};
export default RightPane;
