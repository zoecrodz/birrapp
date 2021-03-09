import React from "react";
import { Route, Switch } from "react-router-dom";
import App from "./App";
import Admin from "./Admin";

const Index = () => {
  return (
    <div>
      <Switch>
        <Route path="/admin" render={() => <Admin />} />
        <Route path="/" render={() => <App />} />
      </Switch>
    </div>
  );
};
export default Index;
