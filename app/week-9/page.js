"use client";

import { useState } from "react";
import { useUserAuth } from "../contexts/AuthContext";

const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

await gitHubSignIn();

await firebaseSignOut();


export default function LandingPage() {


  return (
    <div>
      <button>onClick={gitHubSignIn} Log In</button>
      <p>
        Welcome, {user.displayName} ({user.email})
      </p>
      <button>
        onClick={firebaseSignOut} Log out
      </button>
      ;
    </div>
  );
}
