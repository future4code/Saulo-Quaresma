import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import LoginPage from "../LoginPage";
import HomePage from '../HomePage';
import AplicationPage from '../AplicationPage';
import ListTripsPage from '../ListTripsPage';
import TripsDetailsPage from '../TripsDetailsPage';
import CreateTrip from '../CreateTrip';

export const routes = {
  root: "/",
  aplicationform: "/aplication-form",
  login: "/login",
  createTrip: "/trips/create",
  listTrips: "/trips/list",
  detailsTrip: "/trips/details",
  // Outras rotas aqui
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route path={routes.root} component={HomePage} exact/>
        <Route path={routes.aplicationform} component={AplicationPage} exact/>
        <Route path={routes.login} component={LoginPage} exact/>
        <Route path={routes.createTrip} component={CreateTrip} exact/>
        <Route path={routes.listTrips} component={ListTripsPage} exact/>
        <Route path={routes.detailsTrip} component={TripsDetailsPage} exact/>
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
