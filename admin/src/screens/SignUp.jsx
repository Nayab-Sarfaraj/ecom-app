import React, { useState } from "react";
import PropTypes from "prop-types";
import SideBar from "../component/SideBar";
import { MdOutlineFormatColorText } from "react-icons/md";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { logInUser } from "../Store/slices/logInSlice";
import { useNavigate } from "react-router-dom";
const SignUp = (props) => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const dispatch = useDispatch();
  const isAdmin = useSelector((state) => state.loginCredentials.isAdmin);
  const navigation = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("All input should be filled")
      return
    }
    const res = await dispatch(logInUser({ email, password }));
    if (isAdmin) {
      toast.success("Login successful")
      navigation("/");
    }

  };
  return (
    <div className=" flex flex-row overflow-hidden">
      <SideBar />
      <div className="w-5/6  h-screen flex flex-col items-center justify-center bg-slate-100 ">
        <div className="bg-white px-10 py-14 shadow-xl">
          <div className="text-2xl text-center">Log in</div>

          <form>
            <div className="flex items-center justify-center border-gray-500 border-2 p-[.3rem] mt-5 mb-4 w-[246px]">
              <MdOutlineFormatColorText className="text-lg mr-3" />
              <input
                className="border-none outline-none text-lg"
                placeholder="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></input>
            </div>
            <div className="flex items-center justify-center border-gray-500 border-2 p-[.3rem] mt-5 mb-4 w-[246px]">
              <MdOutlineFormatColorText className="text-lg mr-3" />
              <input
                className="border-none outline-none text-lg"
                placeholder="Password"
                type="text"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></input>
            </div>

            <button
              className="text-lg w-[246px] p-[.3rem] bg-[#1A1A1A] text-white"
              onClick={(e) => handleSubmit(e)}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
