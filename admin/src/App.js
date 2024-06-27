import { Provider, useDispatch } from "react-redux";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { store } from "./Store/store";
import AllProducts from "./screens/AllProducts";
import AllUsers from "./screens/AllUsers";
import CreateProduct from "./screens/CreateProduct";
import Dashboard from "./screens/Dashboard";
import Orders from "./screens/Orders";
import SignUp from "./screens/SignUp";

import EditOrder from "./component/EditOrder";
import Profile from "./screens/Profile";
import PrivateRoute from "./component/PrivateRoute";
import PageNotFound from "./screens/PageNotFound";
import { useEffect } from "react";
import { fetchProfile } from "./Store/slices/logInSlice";
import { fetchProducts } from "./Store/slices/productsSlice";
import { fetchUsers } from "./Store/slices/userSlice";
import { fetchOrders } from "./Store/slices/orderSlice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
     dispatch(fetchProfile());
     dispatch(fetchProducts());
     dispatch(fetchUsers());
     dispatch(fetchOrders());
  }, []);
  return (
    <Router>
 
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/admin" element={<PrivateRoute />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="product/all" element={<AllProducts />} />
            <Route path="order/all" element={<Orders />} />
            <Route path="user/all" element={<AllUsers />} />
            <Route path="product/new" element={<CreateProduct />} />
            <Route path="product/new/:id" element={<CreateProduct />} />

            <Route path="order/update" element={<EditOrder />} />
            <Route path="profile" element={<Profile />} />
          </Route>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/admin/*" element={<PageNotFound />}></Route>
        </Routes>
    </Router>
  );
}

export default App;
