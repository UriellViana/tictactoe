import React from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

import * as firebase from "../firebase";
import "./Card.css";

const uiConfig = {
  signInSuccessUrl: "/home",
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.GithubAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID
  ]
};

export default () => (
  <div className="Card">
    <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
  </div>
);