/** @format */

import React, { useState, useEffect } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { isAuthenticated, LOGOUT } from "../../store/authSlice";
import { useDispatch, useSelector } from "react-redux";
import MenuOptions from "./MenuOptions";
import { Store } from "react-notifications-component";
import { CartItems } from "../../store/cartSlice";
import { getCart } from "../../Repository/Api";

const Navbar = () => {
  const isLoggedIn = useSelector(isAuthenticated);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [cart, setCart] = useState({});
  const myCart = useSelector(CartItems);

  const fetchHandler = () => {
    dispatch(getCart(setCart));
  };

  useEffect(() => {
    fetchHandler();
    setCart(myCart);
  }, [myCart]);

  const length =
    cart?.AddOnservicesSchema?.length +
    cart?.frequentlyBuyProductSchema?.length +
    cart?.gift?.lengths +
    cart?.products?.length +
    cart?.services?.length;

  console.log(
    cart?.AddOnservicesSchema?.length +
      cart?.AddOnservicesSchema?.length +
      cart?.AddOnservicesSchema?.length
  );

  function LogoutHandler() {
    dispatch(LOGOUT());
    Store.addNotification({
      title: "",
      message: "Logged Out Successfully",
      type: "success",
      insert: "top",
      container: "top-center",
      animationIn: ["animate__animated", "animate__fadeIn"],
      animationOut: ["animate__animated", "animate__fadeOut"],
      dismiss: {
        duration: 2000,
        onScreen: true,
      },
    });
    navigate("/login");
  }

  return (
    <div className="Nav_Bar ">
      <header className="Header">
        <div className="left">
          <Link to={"/"}>
            <img className="" src="/asessts/navbar/logo.png" alt="logo" />
          </Link>
        </div>

        <div className="right-container">
          <img src="/asessts/navbar/search.png" alt="" />

          <div className="cartCountDiv">
            <Link to={"mycart"}>
              <FaShoppingCart
                className="text-2xl cursor-pointer"
                style={{ cursor: "pointer" }}
              />
            </Link>
            <span> {length} </span>
          </div>

          {isLoggedIn === true ? (
            <div className="prof-container">
              <img
                src="/asessts/navbar/profile.png"
                alt=""
                style={{ cursor: "pointer" }}
                onClick={() => navigate("/my-profile")}
              />
              <span
                className="text-secondary font-medium cursor-pointer"
                onClick={() => LogoutHandler()}
              >
                Logout
              </span>
            </div>
          ) : (
            <div className="prof-container">
              <img src="/asessts/navbar/profile.png" alt="" />
              <Link
                className="text-secondary font-medium"
                to={"/login"}
                style={{ cursor: "pointer" }}
              >
                <span style={{ fontSize: "20px" }}>LOGIN</span>
              </Link>
            </div>
          )}

          <Link to={"membership"}>
            <img src="/asessts/navbar/crown.png" alt="" />
          </Link>
        </div>
      </header>
      <div
        className="mx-auto mt-5"
        style={{ backgroundColor: "#E5D896", height: "2px", width: "85%" }}
      ></div>
      <MenuOptions />
    </div>
  );
};

export default Navbar;