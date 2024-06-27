import React from "react";
import { BsBoxSeam } from "react-icons/bs";
import { FaBox } from "react-icons/fa";
import { HiMiniUsers } from "react-icons/hi2";
import { MdDashboard, MdReviews } from "react-icons/md";
import { Link } from "react-router-dom";
import { LuArrowDownUp } from "react-icons/lu";

const SideBar = () => {
  return (
    <div className="flex flex-col w-1/6  border-r border-gray-500 gap-8 pt-20 sticky overflow-hidden min-h-screen items-center">
      <Link to="/admin/dashboard">
        <div className="flex flex-row items-center">
          <MdDashboard className="mr-2" />
          <h5>Dashboard</h5>
        </div>
      </Link>

      <Link to="/admin/product/all">
        <div className="flex flex-row items-center">
          <LuArrowDownUp className="mr-2" />
          <h5>Product</h5>
        </div>
      </Link>
      <Link to="/admin/order/all">
        <div className="flex flex-row items-center">
          <FaBox className="mr-2" />
          <h5>Orders</h5>
        </div>
      </Link>
      <Link to="/admin/user/all">
        <div className="flex flex-row items-center">
          <HiMiniUsers className="mr-2" />
          <h5>Users</h5>
        </div>
      </Link>

      <div className="flex flex-row items-center">
        <MdReviews className="mr-2" />
        <h5>Reviews</h5>
      </div>
    </div>
  );
};

export default SideBar;
