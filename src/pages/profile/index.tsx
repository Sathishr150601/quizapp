import { Button } from "@/components/ui/button";
import { auth } from "@/firebase";
import { useAuth } from "@/lib/modules/AuthProvider";
import { signOut } from "firebase/auth";
import React from "react";

const ProfilePage: React.FC = () => {
  const { user } = useAuth();

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center gap-5">
      {user ? <h1 className="">Hello, {user?.uid}</h1> : "you're not logged in"}

      {user ? (
        <Button onClick={() => signOut(auth)}>Sign Out</Button>
      ) : (
        <a href="/login" className="">
          Sign In
        </a>
      )}
    </div>
  );
};

export default ProfilePage;
