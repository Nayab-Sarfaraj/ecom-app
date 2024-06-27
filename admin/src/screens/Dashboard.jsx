import React, { useEffect } from "react";

// import { Doughnut, Line } from "react-chartjs-2";
import { Cell, Pie, PieChart } from "recharts";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import Header from "../component/Header";
import SideBar from "../component/SideBar";
import { LineChartComponent, PieChartComponent } from "../component/Chart";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../Store/slices/productsSlice";
import { STATUSES } from "../Store/slices/productsSlice";
import { useNavigate } from "react-router-dom";
import { fetchUsers } from "../Store/slices/userSlice";
import { fetchOrders } from "../Store/slices/orderSlice";
import { fetchProfile } from "../Store/slices/logInSlice";
const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchProfile());
    dispatch(fetchProducts());
    dispatch(fetchUsers());
    dispatch(fetchOrders());
  }, [dispatch]);


  const { productCount } = useSelector((state) => state.products.data);
  const { userCount } = useSelector((state) => state.users.data);
  const { orderCount } = useSelector((state) => state.orders.data);
  const totalAmount = useSelector(state => state.orders.data.totalAmount)
  const products = useSelector(state => state.products.data.products)
  return (
    <div className="mx-10 flex flex-row overflow-hidden">
      {/* side bar section */}
      <div className="fixed w-5/6">

        <SideBar />
      </div>
      {/* side bar section */}
      {/* header adn other segment */}

      <div className="w-5/6 flex flex-col ml-56">
        <Header title={"Dashboard"} />
        <div className="bg-blue-600 text-white text-center w-11/12 self-center pt-3 pb-3 mt-5">
          <div>Total Amount</div>
          <div>${totalAmount}</div>
        </div>
        <div className="flex flex-row items-center justify-center gap-10 mt-5 text-white">
          <div className="bg-orange-500 rounded-full w-32 h-32 flex flex-col items-center justify-center text-white">
            <h3>Product</h3>
            <h3>{productCount}</h3>
          </div>
          <div className="bg-red-500 rounded-full w-32 h-32 flex flex-col items-center justify-center">
            <h3>Ordes</h3>
            <h3>{orderCount}</h3>
          </div>
          <div className="bg-black  rounded-full w-32 h-32 flex flex-col items-center justify-center">
            <h3>Users</h3>
            <h3>{userCount}</h3>
          </div>
        </div>
        <div className="h-[30vw]">
          <LineChartComponent products={products} />
        </div>
        <div className="h-[50vw] mt-10">
          <PieChartComponent products={products} />
        </div>


      </div>
      {/* header adn other segment*/}
    </div>
  );
};

export default Dashboard;
