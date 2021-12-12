import React from "react";
import { Employee } from "./../../store";
import { List, ListItem, Typography } from "@material-ui/core";
const GroupMem = (props) => {
  const data = Employee.filter((mp) => mp.position === props.type);
  return (
    <Typography varient="subtitle1">
      <List>
        {data.map((d) => (
          <ListItem key={d.id} component="a" href="">
            {d.name}
          </ListItem>
        ))}
      </List>
    </Typography>
  );
};
export default GroupMem;
