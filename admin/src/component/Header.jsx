import React from "react";
import { Link } from "react-router-dom";

const Header = ({ title }) => {
  return (
    <div className="flex flex-row items-center max-w-full justify-between mt-5 w-full">
      <h4 className="font-bold text-2xl pl-5">{title}</h4>
      <Link to="/admin/profile">
        <img
          src="https://ideogram.ai/api/images/direct/sHTlYO7-RbCvmqYy39o2wA.jpg"
          alt="profile pic"
          srcset=""
          className="h-14 rounded-full"
        />
      </Link>
    </div>
  );
};

export default Header;
