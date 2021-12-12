import React from "react";
import * as types from "./acTypes";
const instate = {
  count: 0,
};

export default function Reducer(state = instate, action) {
  if (action.type === types.ITEM_ADD) {
    return {
      count: state.count,
    };
  } else {
    return {
      count: "state",
    };
  }
  console.log("after condisd", instate);
}
