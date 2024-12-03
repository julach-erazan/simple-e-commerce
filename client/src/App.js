import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Register from './pages/User/Register/Register';
import Login from './pages/User/Login/Login';
import Navbar from './components/Navbar/Navbar';
import ViewItem from './pages/ViewItem/ViewItem';
import NotFound from './pages/NotFound/NotFound';
import Cart from './pages/Cart/Cart';
import Newarrivals from "./pages/NewArrivals/NewArrivals";
import { message, notification } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { closeNotification } from "./redux/slices/notificationSlice";

function App() {

  const [api, contextHolder] = notification.useNotification();

  const notificationSlice = useSelector(state => state.notification);
  const dispatch = useDispatch();

  useEffect(() => {
    if (notificationSlice.isOpen) {
      const { type, message, description } = notificationSlice;
      openNotificationWithIcon(type, message, description)
      dispatch(closeNotification());
    }
  },[notificationSlice])

  const openNotificationWithIcon = (type, message, description) => {
    api[type]({
      message,
      description
    })
  }

  return (
    <div>
      {contextHolder}
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/newarrivals" element={<Newarrivals/>} />
          <Route path="/ViewItem" element={<ViewItem/>} />
          <Route path="/Cart" element={<Cart/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
    </Router>
    </div>
  );
}

export default App;
