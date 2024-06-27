import axios from "axios";
import React from "react";
import { MdDelete, MdModeEdit } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { STATUSES } from "../Store/slices/productsSlice";
import Header from "../component/Header";
import Loader from "../component/Loader";
import SideBar from "../component/SideBar";
import Table from "../component/Table";

const Actions = ({ user }) => {
  const navigate = useNavigate();
  const handleEdit = () => {
    navigate("/admin/order/update", {
      state: { title: "Edit role", user: user },
    });
  };
  const handleDelete = async () => {
    try {
      const res = await axios.delete(`/admin/user/${user._id}`);
      console.log(res.data);
      navigate("/admin/user/all")
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-row items-center justify-center">
      <MdModeEdit className="mr-2 text-xl" onClick={handleEdit} />
      <MdDelete className="text-xl" onClick={handleDelete} />
    </div>
  );
};
const AllUsers = () => {
  const navigate = useNavigate();

  const columns = [
    {
      Header: "User Id",
      accessor: "userId", // key from data object
    },
    {
      Header: "Name",
      accessor: "name",
    },
    {
      Header: "Email",
      accessor: "email",
    },
    {
      Header: "Role",
      accessor: "role",
    },
    {
      Header: "Actions",
      accessor: "actions",
    },
  ];
  const dispatch = useDispatch();
 
  const { status } = useSelector((state) => state.users);
  console.log(status);
  const { users } = useSelector((state) => state.users.data);
  console.log(users);
  const data = [];


  if (users) {
    users.forEach((user) => {
      const tempData = {
        userId: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        actions: <Actions user={user} />,
      };
      data.push(tempData);
    });
  }
  return (
    <div className="mx-10 flex flex-row overflow-hidden">
      <SideBar />

      <div className="w-5/6  h-screen flex flex-col items-center ">
        <Header title={"All Users"} />
        {status === STATUSES.LOADING ? (
          <Loader />
        ) : (
          <Table columns={columns} data={data} className="w-5/6" />
        )}
      </div>
    </div>
  );
};

export default AllUsers;
