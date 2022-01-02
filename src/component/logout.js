import React from "react";
import { getAuth, signOut } from "firebase/auth";
function logout() {
    const auth = getAuth();
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
}

export default logout;
