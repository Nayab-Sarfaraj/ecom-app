import React, { useEffect } from "react";
import SideBar from "../component/SideBar";
import Header from "../component/Header";
import Table from "../component/Table";
import { MdModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { actions } from "react-table";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { STATUSES, fetchProducts } from "../Store/slices/productsSlice";
import Loader from "../component/Loader";
import axios from "axios";

const Actions = ({ product }) => {


  const navigate = useNavigate();
  const dispatch = useDispatch()

  const handleEdit = () => {
    navigate("/admin/product/new", {
      state: { title: "update product", product: product },
    });
  };
  const handleDelete = async () => {
    try {
      const res = await axios.delete(`/product/${product._id}`);
      navigate("/admin/product/all")
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
const AllProducts = () => {
  const columns = [
    {
      Header: "Product Id",
      accessor: "productId", // key from data object
    },
    {
      Header: "Name",
      accessor: "name",
    },
    {
      Header: "Stock",
      accessor: "stock",
    },
    {
      Header: "Price",
      accessor: "price",
    },
    {
      Header: "Actions",
      accessor: "actions",
    },
  ];

  const dispatch = useDispatch();

  const status = useSelector((state) => state.products?.status);
  const products = useSelector((state) => state.products.data?.products);
  const data = [];
  if (products) {
    products.forEach((prd) => {
      let tempData = {
        productId: prd._id,
        name: prd.name,
        stock: prd.Stock,
        price: prd.price,
        actions: <Actions product={prd} />,
      };
      data.push(tempData);
    });
  }

  return (
    <div className="px-10 flex flex-row overflow-hidden">
      <SideBar />

      <div className="w-5/6  h-screen flex flex-col items-center overflow-y-scroll">
        <Header title={"All Products"} />
        {status === STATUSES.LOADING ? (
          <Loader />
        ) : (
          <Table columns={columns} data={data} className="w-5/6" />
        )}
        <div className="flex w-full items-center justify-evenly mt-10">
          <Link to="/admin/product/new">
            <button>Create new product</button>
          </Link>
          <div>Next</div>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
