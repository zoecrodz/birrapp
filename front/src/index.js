import React from "react";
import ReactDOM from "react-dom";
import Index from "./containers/Index";
import { Provider } from "react-redux";
import store from "./store/store";
import { BrowserRouter, Route } from "react-router-dom";
import { ThemeProvider } from '@material-ui/styles';
import theme from "./Styles/theme"


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Route path="/" component={Index} />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
