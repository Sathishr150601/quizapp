// src/components/GoogleSignIn.tsx
import React from "react";
import { auth } from "@/firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const GoogleSignIn: React.FC = () => {
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("User Info: ", user);
      navigate("/profile");
    } catch (error) {
      console.error("Error during Google Sign-In: ", error);
    }
  };

  return (
    <button
      onClick={handleGoogleSignIn}
      className="bg-blue-500 text-white py-2 px-4 rounded"
    >
      Sign in with Google
    </button>
  );
};

export default GoogleSignIn;
