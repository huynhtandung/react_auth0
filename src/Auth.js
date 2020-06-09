import auth from "auth0-js";

const LOGIN_SUCCESS_PAGE = "/secret";
const LOGIN_FAILURE_PAGE = "/";

export default class Auth {
  auth = new auth.WebAuth({
    domain: "dev-sj7xbtea.auth0.com",
    clientID: "Z2H0CuNrtPoprypldxD4QGtf4XV1B0Tn",
    redirectUri: "http://localhost:3000/callback",
    audience: "https://dev-sj7xbtea.auth0.com/userinfo",
    responseType: "token id_token",
    scope: "openid",
  });

  constructor() {
    this.login = this.login.bind(this);
  }

  login() {
    console.log("chay");
    this.auth.authorize();
  }

  handleAuthentication() {
    this.auth.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        let expireAt = JSON.stringify(
          authResult.expiresIn * 1000 + new Date().getTime()
        );
        localStorage.setItem("access-token", authResult.accessToken);
        localStorage.setItem("id-token", authResult.idToken);
        localStorage.setItem("expires_at", expireAt);
        window.location.hash = "";
        window.location.pathname = LOGIN_SUCCESS_PAGE;
      } else if (err) {
        window.location = LOGIN_FAILURE_PAGE;
        console.log(err);
      }
    });
  }

  isAuthenticated() {
    let expiresAt = JSON.parse(localStorage.getItem("expires_at"));
    return new Date().getTime() < expiresAt;
  }

  logout() {
    localStorage.setItem("expires_at", 0);
    window.location.pathname = LOGIN_FAILURE_PAGE;
  }
}
