import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import Auth from "./Auth";

const auth = new Auth();

let state = {};

window.setState = (changes) => {
  state = Object.assign({}, state, changes);

  ReactDOM.render(
    <React.StrictMode>
      <App {...state} />
    </React.StrictMode>,
    document.getElementById("root")
  );
};

let initialState = {
  name: "Dung",
  location: window.location.pathname.replace(/^\/?|\/$/g, ""),
  auth,
};

window.setState(initialState);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
