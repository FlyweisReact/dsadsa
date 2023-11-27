/** @format */

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AiFillInstagram } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { getContactDetails } from "../../Repository/Api";

const CardSaver = () => {
  const navigate = useNavigate();
  const [contact, setContact] = useState({});

  function BackNavigation() {
    navigate(-1);
  }

  useEffect(() => {
    getContactDetails(setContact);
  }, []);

  return (
    <>
      <div className="Backward_Heading step_Heading">
        <div>
          <img src="/Image/1.png" alt="" onClick={() => BackNavigation()} />
        </div>
        <p className="title">Enter your Card Details</p>
      </div>

      <div className="schedule_1">
        <div className="left_div">
          <div className="review_box">
            <p className="title">Please Fill your Card Details Below</p>

            <form>
              <div>
                <p>Name on Card</p>
                <input type="text" />
              </div>

              <div>
                <p>Card Number</p>
                <input type="text" />
              </div>

              <div className="two_input">
                <div className="first">
                  <p>Expiry Date</p>
                  <input type="text" placeholder="MM / YYYY" />
                </div>
                <div>
                  <p>CVV</p>
                  <input type="text" placeholder="***" />
                </div>
              </div>

              <div>
                <p>Address Line 1</p>
                <input type="text" />
              </div>
              <div>
                <p>Address Line 2</p>
                <input type="text" />
              </div>

              <div className="two_input">
                <div className="first">
                  <p>City</p>
                  <input type="text" />
                </div>
                <div>
                  <p>State</p>
                  <input type="text" />
                </div>
              </div>
              <div>
                <p>Country</p>
                <input type="text" />
              </div>
              <div>
                <p>Phone Number</p>
                <input type="text" />
              </div>
              <div className="border-line" />
              <div className="submit_btn">
                <button
                  type="button"
                  style={{
                    background: "transparent",
                    border: "2px solid #042b26",
                    color: "#042b26",
                  }}
                  onClick={() => navigate(-1)}
                >
                  Back
                </button>
                <button onClick={() => navigate("/thanks")}>Save</button>
              </div>
            </form>
          </div>
        </div>

        <div className="right_div">
          <div className="Box">
            <div className="two-sec">
              <img src={contact?.image} alt="" />
              <div>
                <p className="title"> {contact?.name} </p>
                <span className="Stars">
                  <span>
                    {" "}
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                  </span>
                  <span> ({contact?.ratings}) </span>
                </span>
                <div className="contact-info">
                  <BsFillTelephoneFill />
                  <p> {contact?.phone} </p>
                </div>
                <div className="contact-info">
                  <GrMail />
                  <p
                    className="cursor-pointer"
                    onClick={() => Mail(contact?.email)}
                  >
                    {" "}
                    {contact?.email}{" "}
                  </p>
                </div>
                <div className="contact-info">
                  <AiFillInstagram />

                  <a href={contact?.instagram}>
                    <p>nurse.shahina </p>
                  </a>
                </div>
              </div>
            </div>

            <div className="two-sec mt-3">
              <BiCurrentLocation style={{ fontSize: "20px" }} />
              <div>
                <p className="title" style={{ fontSize: "16px" }}>
                  {contact?.address}
                </p>
              </div>
            </div>

            <a href={contact?.mapLink} target="_blank">
              <button className="locate_btn">LOCATE ON GOOGLE MAPS</button>
            </a>

            {/* Service */}
            {cart?.services?.map((i, index) => (
              <div className="Items" key={index}>
                <div className="two-div">
                  <p className="head"> {i?.serviceId?.name} </p>
                  <p className="head">
                    {" "}
                    {i?.serviceId?.type === "offer"
                      ? `$${i.total}`
                      : `$${i.subTotal}`}
                  </p>
                </div>
                <div className="two-div">
                  <p className="desc"></p>
                  <p
                    className="delete cursor-pointer"
                    onClick={() =>
                      deleteServiceItem(i.serviceId?._id, i?.priceId)
                    }
                  >
                    {" "}
                    DELETE
                  </p>
                </div>
              </div>
            ))}

            {/* Ad on Service */}


            {bookNow}
          </div>
        </div>
      </div>
    </>
  );
};

export default CardSaver;
