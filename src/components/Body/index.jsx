import { Grid } from "@material-ui/core";
import LeftPane from "./leftPane/leftHome";
import { Switch, Route } from "react-dom";
import RightPane from "./rightPane/rightPane";

const Body = () => {
  return (
    <Grid container>
      <Grid item sm>
        <LeftPane />
      </Grid>
      <Grid item sm>
        <Switch>
          <Route path="/" component={RightPane} />
        </Switch>
      </Grid>
    </Grid>
  );
};
export default Body;
