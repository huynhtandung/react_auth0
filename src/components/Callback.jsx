import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Auth from "./../Auth";

Callback.propTypes = {};

function Callback(props) {
  useEffect(() => {
    const auth = new Auth();
    auth.handleAuthentication();
  }, []);
  return <div>Loading...</div>;
}

export default Callback;
