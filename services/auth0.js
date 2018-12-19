// src/Auth/Auth.js

import auth0 from "auth0-js";

class Auth0 {
  constructor() {
    this.auth0 = new auth0.WebAuth({
      domain: "arunkiran.auth0.com",
      clientID: "VXLS8GUOIIuPe8fCJPhzdT82CuJJZ2Gs",
      redirectUri: "http://localhost:3000/callback",
      responseType: "token id_token",
      scope: "openid profile"
    });

    this.login = this.login.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
  }
  handleAuthentication() {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
      } else if (err) {
        console.log(err);
      }
    });
  }

  login() {
    this.auth0.authorize();
  }
}

const auth0Client = new Auth0();
export default auth0Client;
