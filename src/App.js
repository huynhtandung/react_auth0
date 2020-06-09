import React from "react";
import "./App.css";
import Main from "./components/Main";
import Secret from "./components/Secret";
import NotFound from "./components/NotFound";
import Callback from "./components/Callback";

function App(props) {
  let mainComponent = "";

  switch (props.location) {
    case "":
      mainComponent = <Main {...props} />;
      break;
    case "secret": {
      mainComponent = props.auth.isAuthenticated() ? (
        <Secret {...props} />
      ) : (
        <NotFound />
      );
      break;
    }
    case "callback": {
      mainComponent = <Callback />;
      break;
    }
    default: {
      mainComponent = <NotFound />;
    }
  }

  return <>{mainComponent}</>;
}

export default App;
