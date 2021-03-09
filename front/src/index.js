import React from "react";
import ReactDOM from "react-dom";
import Index from "./containers/Index";
// import { Provider } from "react-redux";
// import store from "./store/store";
import { BrowserRouter, Route } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    <BrowserRouter>
      <Route path="/" component={Index} />
    </BrowserRouter>
    {/* </Provider> */}
  </React.StrictMode>,
  document.getElementById("root")
);
