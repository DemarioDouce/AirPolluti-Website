import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
//Load react-router-dom package
import { BrowserRouter, Route, Switch } from "react-router-dom";
//Pages
import AirPollution from "./pages/AirPollutionPage";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        {/* Main */}
        <Route path="/" component={App} exact />
        {/* AirPollution page */}
        <Route path="/air-pollution" component={AirPollution} exact />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
