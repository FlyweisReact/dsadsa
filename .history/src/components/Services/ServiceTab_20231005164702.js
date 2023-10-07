/** @format */

import React from "react";
import Services from "../home/Services";
import { Outlet, useNavigate, useParams } from "react-router-dom";

const ServiceTab = () => {
  const navigate = useNavigate();

  return (
    <section>
     <div className="relative_product_container">
          <img
            className="full_Image"
            src={'/Image/71.jpg'}
            alt=""
          />
          <div className="content">
            <h1 className="text-6xl text-white text-center  z-50 font-light">
            BOOK ONLINE
            </h1>
          </div>
          <div className="Image">
            <img
              src="/asessts/back-button.svg"
              alt=""
              onClick={() => navigate(-1)}
            />
          </div>
        </div>
      <div className="relative max-w-screen">
        <img
          className="w-full h-[26rem] object-cover"
          src=""
          alt="service cover"
        />
        <div className="absolute top-0 w-full h-full flex flex-col bg-black bg-opacity-25  justify-around">
          <h1 className="text-6xl text-white text-center  z-50 font-light">
        
          </h1>

          <button
            className="w-52 mx-auto py-2 text-lg font-semibold z-50  bg-secondary text-primary"
            onClick={() => navigate("/appointment")}
          >
            BOOK ONLINE
          </button>
        </div>
        <div
          onClick={() => navigate(-1)}
          className="absolute cursor-pointer top-24 left-12"
        >
          <img src="/asessts/back-button.svg" alt="back-button" />
        </div>
      </div>

      <Services />
    </section>
  );
};

export default ServiceTab;