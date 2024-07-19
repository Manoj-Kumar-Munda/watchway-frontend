import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ProfileCircle from "./ProfileCircle";

const AuthNavLinks = () => {
  const authStatus = useSelector((store) => store.auth.status);

  return (
    <>
      {authStatus ? (
        <ProfileCircle className="w-12 h-12" />
      ) : (
        <div className="flex gap-2 items-center">
          <Link
            to={"/login"}
            className="px-6 py-1 border border-gray-300 rounded-2xl hover-effect"
          >
            <span className="text-sm font-Roboto">Login</span>
          </Link>
        </div>
      )}
    </>
  );
};

export default AuthNavLinks;
