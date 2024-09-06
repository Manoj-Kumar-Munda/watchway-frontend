import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ProfileCircle from "./ProfileCircle";

const AuthNavLinks = () => {
  const { user ,status} = useSelector((store) => store.auth);
  return (
    <>
      {status ? (
        <ProfileCircle className="w-12 h-12" imgSrc={user.avatar} />
      ) : (
        <div className="flex gap-2 items-center">
          <Link
            to={"/login"}
            className="px-6 py-1 border border-white/20 rounded-2xl hover-effect"
          >
            <span className="text-sm font-Roboto">Login</span>
          </Link>
        </div>
      )}
    </>
  );
};

export default AuthNavLinks;
