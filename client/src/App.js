import { notification } from "antd";
import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Cart from "./pages/Cart/Cart";
import Home from "./pages/Home/Home";
import Newarrivals from "./pages/NewArrivals/NewArrivals";
import NotFound from "./pages/NotFound/NotFound";
import Login from "./pages/User/Login/Login";
import Register from "./pages/User/Register/Register";
import ViewItem from "./pages/ViewItem/ViewItem";
import { closeNotification } from "./redux/slices/notificationSlice";

function App() {
  const [api, contextHolder] = notification.useNotification();

  const notificationSlice = useSelector((state) => state.notification);
  const dispatch = useDispatch();

  const openNotificationWithIcon = useCallback((type, message, description) => {
    api[type]({
      message,
      description,
    });
  },[api]);
  
  useEffect(() => {
    if (notificationSlice.isOpen) {
      const { type, message, description } = notificationSlice;
      openNotificationWithIcon(type, message, description);
      dispatch(closeNotification());
    }
  }, [dispatch, notificationSlice, openNotificationWithIcon]);


  return (
    <div>
      {contextHolder}
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/newarrivals" element={<Newarrivals />} />
          <Route path="/ViewItem/:id" element={<ViewItem />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
