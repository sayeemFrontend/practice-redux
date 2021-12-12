import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import ExpandMore from "@material-ui/icons/ExpandMore";
import ExpandLess from "@material-ui/icons/ExpandLess";
import StoreIcon from "@material-ui/icons/Store";
import { Button, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 160,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    flex: 1,
    justifyContent: "flex-end",
    background: "red",
  },
  items: {
    flex: 1,
  },
}));

const LeftPane = () => {
  const classes = useStyles();

  const [open, setOpen] = React.useState([false, false, false, false]);

  const handleClick = (item) => {
    const cpy = { ...open };
    cpy[item] = !open[item];
    setOpen(cpy);
  };
  const data = [
    "Dashboard",
    "Product",
    "Coupon",
    "Delevery",
    "Orders",
    "Customer",
    "Email",
    "SMS",
    "Pages",
    "Settings",
  ];
  const icons = [
    <StoreIcon />,
    <InboxIcon />,
    <StoreIcon />,
    <InboxIcon />,
    <StoreIcon />,
    <InboxIcon />,
    <StoreIcon />,
    <InboxIcon />,
    <StoreIcon />,
    <InboxIcon />,
  ];
  const listPro = ["Products", "Tags", "Categories", "Brand"];
  const listPage = ["List Pages", "Add new Page"];
  const listSet = ["Site Information", "Admins", "Components", "Theme"];
  const listOrder = ["List Orders", "Order Analytics", "Add Order"];
  const listIdex = [listPro, listOrder, listPage, listSet];

  const handleList = (index) => {
    return (
      <div>
        {listIdex[index].map((li) => (
          <Typography align="center">
            <Link to={hadleLink(index, li)}>{li}</Link>
          </Typography>
        ))}
      </div>
    );
  };
  const arr = ["Product", "Orders", "Pages", "Settings"];

  const hadleLink = (index, li) => {
    const type = arr[index].toLowerCase();
    const item = li.toLowerCase();
    const url = "/" + type + "/" + item;
    console.log("itsss Index=", url);
    console.log("itsss Li=", li);
    return url;
  };

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      className={classes.root}
    >
      {data.map((item) => (
        <Typography variant="h4" color="primary">
          {arr.includes(item) ? (
            <div>
              <ListItem button onClick={() => handleClick(arr.indexOf(item))}>
                <ListItemIcon style={{ flex: 1 }}>
                  {icons[data.indexOf(item)]}
                  <ListItemText style={{ paddingLeft: 10 }} primary={item} />
                </ListItemIcon>
                {open[arr.indexOf(item)] ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              {open[arr.indexOf(item)] ? handleList(arr.indexOf(item)) : null}
            </div>
          ) : (
            <ListItem button>
              <ListItemIcon>
                {icons[data.indexOf(item)]}
                <ListItemText style={{ paddingLeft: 10 }} primary={item} />
              </ListItemIcon>
            </ListItem>
          )}
        </Typography>
      ))}
    </List>
  );
};
export default LeftPane;
