import React, { useEffect } from "react";
import SideBar from "../component/SideBar";
import Header from "../component/Header";
import Table from "../component/Table";
import { MdModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { actions } from "react-table";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrders } from "../Store/slices/orderSlice";
import { STATUSES } from "../Store/slices/productsSlice";
import Loader from "../component/Loader";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Actions = ({ product }) => {
  const navigate = useNavigate();
  const handleEdit = () => {
    navigate("/admin/order/update", {
      state: { title: "update product", product: product },
    });
  };
  const handleDelete = async () => {
    try {
      const res = await axios.delete(`/admin/order/${product._id}`);
      console.log(res.data);
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
const Orders = () => {
  const navigate = useNavigate();

  const columns = [
    {
      Header: "Order Id",
      accessor: "orderId", // key from data object
    },
    {
      Header: "Status",
      accessor: "status",
    },
    {
      Header: "Item Qty",
      accessor: "itemQty",
    },
    {
      Header: "Amount",
      accessor: "amount",
    },
    {
      Header: "Actions",
      accessor: "actions",
    },
  ];



  const { status } = useSelector((state) => state.orders);
  console.log(status);

  const { order } = useSelector((state) => state.orders.data);
  const data = [];
  if (order) {
    order.forEach((prd) => {
      let itemQty = 0;
      prd.orderItems.forEach((ord) => {
        itemQty += ord.quantity;
      });
      let tempData = {
        orderId: prd._id,
        status: prd.orderStatus,
        amount: prd.itemsPrice,
        actions: <Actions product={prd} />,
        itemQty: itemQty,
      };
      data.push(tempData);
    });
  }
  console.log("this is data ", data);

  return (
    <div className="mx-10 flex flex-row overflow-hidden">
      <SideBar />

      <div className="w-5/6  h-screen flex flex-col items-center ">
        <Header title={"All Orders"} />
        {status === STATUSES.LOADING ? (
          <Loader />
        ) : (
          <Table columns={columns} data={data} className="w-5/6" />
        )}{" "}
      </div>
    </div>
  );
};

export default Orders;
