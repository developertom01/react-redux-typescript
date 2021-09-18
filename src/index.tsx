import { render } from "react-dom";
import { Provider } from "react-redux";
import reduxStore from "./state_manager/store";
import "bootstrap/dist/css/bootstrap.min.css";
import "rsuite/dist/styles/rsuite-default.css";

import App from "./App";

const rootElement = document.getElementById("root");
render(
  <Provider store={reduxStore}>
    <App />
  </Provider>,
  rootElement
);
