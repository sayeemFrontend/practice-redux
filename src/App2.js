import React, { Component } from "react";
import Footers from "./components/Foot/Footers";
import Headers from "./components/Head/Headers";
import LeftPane from "./components/Body/leftPane/leftHome";
import { Route, Switch } from "react-router";
import Products from "./components/Body/rightPane/Product/products";
import Tags from "./components/Body/rightPane/Product/Tags";
import Categories from "./components/Body/rightPane/Product/Categories";
import Brand from "./components/Body/rightPane/Product/brand";
import Body from "./components/Body";
import { Grid } from "@material-ui/core";

export default class App2 extends Component {
  render() {
    return (
      <React.Fragment>
        <Headers />
        <Grid container>
          <Grid item md={5}>
            <LeftPane />
          </Grid>
          <Grid item md={7}>
            <Switch>
              <Route path="/product/products/" component={Products} />
              <Route path="/product/tags/" component={Tags} />
              <Route path="/product/categories/" component={Categories} />
              <Route path="/product/brand/" component={Brand} />
            </Switch>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}
