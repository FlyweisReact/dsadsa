/** @format */

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import Sidebar from "./Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { DummyCartItems } from "../../store/DummyCart";
import { isAuthenticated } from "../../store/authSlice";
import { getCart } from "../../Repository/Api";

const MobileBar = () => {
  const [open, setOpen] = useState(false);
  const [dummyLength, setDummyLength] = useState(0);
  const [serviceLength, setServiceLength] = useState(0);
  const [cart, setCart] = useState({});
  const dummyItem = useSelector(DummyCartItems);
  const isLoggedIn = useSelector(isAuthenticated);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(getCart());
    }
  }, [isLoggedIn]);

  useEffect(() => {
    if (isLoggedIn) {
      setCart(myCart);
    } else {
      setDummyLength(dummyItem?.length);
      setServiceLength(serviceItem?.length);
    }
  }, [isLoggedIn, myCart, dummyItem, serviceItem]);

  const length =
    (cart?.AddOnservicesSchema?.length || 0) +
    (cart?.frequentlyBuyProductSchema?.length || 0) +
    (cart?.gifts?.length || 0) +
    (cart?.products?.length || 0) +
    (cart?.services?.length || 0);

  const myLength = dummyLength + serviceLength;

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Sidebar onClose={onClose} open={open} />
      <div className="Mobile_Bar">
        <img
          src="/Image/Menu_Alt_03.png"
          className="HamberGur"
          onClick={() => showDrawer()}
          alt=""
        />

        <Link to={"/"}>
          <img className="Logo" src="/asessts/navbar/logo.png" alt="logo" />
        </Link>

        <Link to={"/mycart"}>
          <FaShoppingCart
            className="text-2xl cursor-pointer"
            style={{ cursor: "pointer" }}
          />
        </Link>
      </div>
    </>
  );
};

export default MobileBar;
