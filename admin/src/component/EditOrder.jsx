import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import SideBar from "./SideBar";
import { MdOutlineFormatColorText } from "react-icons/md";
import { useLocation } from "react-router-dom";
import axios from "axios";

const EditOrder = (props) => {
  const [status, setStatus] = useState("");
  const [role, setRole] = useState("");
  const location = useLocation();
  console.log(location.state);
  const { product } = location.state;
  const { user } = location.state;
  useEffect(() => {
    if (product) setStatus(product.orderStatus);
    if (user) setRole(user.role);
  }, [product, user]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (product) {
      console.log(status);
      const res = await axios.patch(`/admin/order/${product._id}`, {
        status: status,
      });
      console.log(res.data);
    }
    if (user) {
      console.log(role);
      const res = await axios.post(`/admin/user/${user._id}`, { role: role });
      console.log(res.data);
    }
  };
  return (
    <div className=" flex flex-row overflow-hidden">
      <SideBar />
      <div className="w-5/6  h-screen flex flex-col items-center justify-center bg-slate-100 ">
        <div className="bg-white px-10 py-14 shadow-xl">
          <div className="text-2xl text-center">
            {product ? "Edit Status" : user ? "Update role" : null}
          </div>

          <form>
            <div className="flex items-center justify-center border-gray-500 border-2 p-[.3rem] mt-5 mb-4 w-[246px]">
              <MdOutlineFormatColorText className="text-lg mr-3" />
              <input
                className="border-none outline-none text-lg"
                placeholder={product ? "Status" : user ? "Role" : "Text"}
                type="text"
                value={product ? status : user ? role : ""}
                onChange={
                  product
                    ? (e) => setStatus(e.target.value)
                    : user
                    ? (e) => setRole(e.target.value)
                    : (e) => console.log(e.target.value)
                }
              ></input>
            </div>

            <button
              className="text-lg w-[246px] p-[.3rem] bg-[#1A1A1A] text-white"
              onClick={(e) => handleSubmit(e)}
            >
              Create
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditOrder;
