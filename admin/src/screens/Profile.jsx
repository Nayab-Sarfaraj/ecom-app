import React, { useEffect } from "react";
import SideBar from "../component/SideBar";
import Header from "../component/Header";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { logOutUser } from "../Store/slices/logInSlice";
const Profile = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.loginCredentials.data?.user);
  const isAdmin = useSelector(state => state.loginCredentials.isAdmin)
  const dispatch = useDispatch()
 
  const handleLogout = async () => {
    try {
      await dispatch(logOutUser())
      if (!isAdmin) navigate("/signup");

    } catch (error) {

    }
  };
  return (
    <div className="mx-10 flex flex-row overflow-hidden">
      <SideBar />

      <div className="w-5/6  h-screen flex flex-col items-center justify-center">
        <img
          src="https://ideogram.ai/api/images/direct/sHTlYO7-RbCvmqYy39o2wA.jpg"
          alt="profile picture"
          className="h-64 rounded-full"
        />
        <div className="bg-red-950 text-white px-3 py-1 rounded-xl my-3">
          {user?.role}
        </div>
        <div className="text-2xl font-bold capitalize">{user?.name}</div>
        <div className="text-lg my-2">{user?.email}</div>
        <button
          className="bg-red-500 text-white px-5 py-1 rounded-md"
          onClick={handleLogout}
        >
          Log out
        </button>
      </div>
    </div>
  );
};

export default Profile;
