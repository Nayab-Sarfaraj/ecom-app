import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import SideBar from "../component/SideBar";
import { MdOutlineFormatColorText } from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const CreateProduct = (props) => {
  const location = useLocation();
  const navigate = useNavigate()
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [stock, setStock] = useState(0);
  const [category, setCategory] = useState("");
  const [images, setImages] = useState([])

  const product = location?.state?.product;
  const title = location?.state?.title;
  useEffect(() => {
    if (product) {
      setCategory(product?.category);
      setPrice(product?.price);
      setStock(product?.Stock);
      setName(product?.name);
      setDescription(product?.description);
    }
  }, [product]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.patch(`/product/${product._id}`, {
      name,
      price,
      Stock: stock,
      description,
      category,
    });
    console.log(response.data)
    if (response.data.succss) navigate("/admin/product/all")
    else toast.error("Something went wrong")
  };
  const handleCreate = async (e) => {
    try {
      e.preventDefault();
      if (!name || !category || !price || !stock || !description) {
        toast.error("All fields should be filled")
        return
      }
      const formData = new FormData();
      formData.append("name", name);
      formData.append("category", category);
      formData.append("price", price);
      formData.append("stock", stock);
      formData.append("description", description);

      images.forEach((file) => {
        formData.append("images", file)
      })
      const response = await axios.post("/product/new", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      if (response.data.succss)
        navigate("/admin/product/all")
      else toast.error("Something went wrong try again")
    } catch (error) {
      console.log(error)
    }

  };
  const handleFileUpload = (e) => {
    if (images.length !== 0) {

      const copyImage = [...images]
      // console.log(copyImage)
      copyImage.push(e.target.files[0])
      console.log(copyImage)
      setImages([...copyImage])

    } else {
      const img = []
      img.push(e.target.files[0])
      setImages(img)
    }
  }
  return (
    <div className=" flex flex-row overflow-hidden ">


        <SideBar />

      <div className="w-[75vw] max-h-screen flex flex-col items-center justify-center bg-slate-100 ">
        <div className="bg-white px-10 py-14 shadow-xl">
          <div className="text-2xl text-center">
            {title ? title : "Create Product"}
          </div>

          <form>
            <div className="flex items-center justify-center border-gray-500 border-2 p-[.3rem] mt-5 mb-4 w-[246px]">
              <MdOutlineFormatColorText className="text-lg mr-3" />
              <input
                className="border-none outline-none text-lg"
                placeholder="Name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></input>
            </div>
            <div className="flex items-center justify-center border-gray-500 border-2 p-[.3rem] mb-4 w-[246px]">
              <MdOutlineFormatColorText className="text-lg" />
              <textarea
                className="border-none outline-none text-lg ml-7 text-left"
                placeholder="Description"
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={1}
              // cols={1}
              ></textarea>
            </div>
            <div className="flex items-center justify-center border-gray-500 border-2 p-[.3rem] mb-4 w-[245px]">
              <MdOutlineFormatColorText className="text-lg mr-3" />
              <input
                className="border-none outline-none text-lg"
                placeholder="Price"
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              ></input>
            </div>
            <div className="flex items-center justify-center border-gray-500 border-2 p-[.3rem] mb-4 w-[246px]">
              <MdOutlineFormatColorText className="text-lg mr-3" />
              <input
                className="border-none outline-none text-lg"
                placeholder="Stock"
                type="number"
                value={stock}
                onChange={(e) => setStock(e.target.value)}
              ></input>
            </div>
            <div className="flex items-center justify-center border-gray-500 border-2 p-[.3rem] mb-4 w-[246px]">
              <MdOutlineFormatColorText className="text-lg mr-3" />
              <input
                className="border-none outline-none text-lg"
                placeholder="Category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              ></input>
            </div>
            <div className="flex items-center justify-center border-gray-500 border-2 p-[.3rem] mb-4 w-[246px]">
              <input
                className="border-none outline-none text-lg"
                // placeholder=""
                type="file"
                // value={images}
                onChange={product ? null : (e) => handleFileUpload(e)}
              ></input>
            </div>
            <div className="flex items-center justify-center border-gray-500 border-2 p-[.3rem] mb-4 w-[246px]">
              <input
                className="border-none outline-none text-lg"
                // placeholder=""
                type="file"
                // value={images}
                onChange={product ? null : (e) => handleFileUpload(e)}
              ></input>
            </div>
            <button
              className="text-lg w-[246px] p-[.3rem] bg-[#1A1A1A] text-white"
              onClick={product ? (e) => handleSubmit(e) : (e) => handleCreate(e)}
            >
              Create
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateProduct;
