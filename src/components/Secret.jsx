import React from "react";

Secret.propTypes = {};

function Secret(props) {
  return (
    <div>
      Secret component
      <button onClick={() => props.auth.logout()}>Logout</button>
    </div>
  );
}

export default Secret;
