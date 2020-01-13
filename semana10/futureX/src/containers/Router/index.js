import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import LoginPage from "../LoginPage";
import HomePage from '../HomePage';

const routes = {
  root: "/",
  aplicationform: "/aplication-form",
  login: "/login",
  createTrip: "/trips/create",
  listTrips: "trips/list",
  detailsTrip: "/trips/details",
  // Outras rotas aqui
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route path={routes.root} component={HomePage} />
        <Route path={routes.aplicationform}/>
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
