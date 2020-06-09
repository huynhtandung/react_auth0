import React from "react";

Main.propTypes = {};

function Main(props) {
  return (
    <div>
      Main component - Hello {props.name} <br /> <a href="/secret">Secret</a>
      {!props.auth.isAuthenticated() ? (
        <div>
          <hr />
          Please login <button onClick={() => props.auth.login()}>Login</button>
          <hr />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Main;
