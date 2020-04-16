import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import LoginPage from "../LoginPage";
import HomePage from "../HomePage";

export const routes = {
   root: "/",
   homePage: "/home"
};

function Router(props) {
   return (
      <ConnectedRouter history={props.history}>
         <Switch>
            <Route exact path={routes.root} component={LoginPage} />
            <Route exact path={routes.homePage} component={HomePage} />
         </Switch>
      </ConnectedRouter>
   );
}

export default Router;