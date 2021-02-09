import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import Main from "./Main.js";
import store from "./store";
import { BrowserRouter as Router } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";

const defaultTheme = createMuiTheme();
const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Router>
        <Main />
      </Router>
    </ThemeProvider>
  </Provider>
);

render(<App />, document.getElementById("root"));
