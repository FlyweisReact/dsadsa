/** @format */

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAddress, getProfile } from "../Repository/Api";

const MyProfile = () => {
  const [profile, setProfile] = useState({});
  const [ address , setAddress ] = useState([])


  useEffect(() => {
    getProfile(setProfile);
    getAddress(setAddress)
  }, []);



  const navigate = useNavigate();

  function QueryHandler(query, title) {
    if (query) {
      return (
        <div className="two-sec">
          <p className="dark"> {title} : </p>
          <p> {query} </p>
        </div>
      );
    }
  }

  function filterData(query) {
   console.log() a
  }

  filterData("Shipping")



  return (
    <>
      <div style={{ padding: "20px" }}>
        <div className="Backward_Heading step_Heading">
          <div>
            <img src="/Image/1.png" alt="" onClick={() => navigate(-1)} />
          </div>
          <p className="title">My Profile</p>
        </div>

        <div className="profile_div">
          <div className="heading">
            <p>Profile Details</p>

            <button>
              <img src="/Image/103.png" alt="" />
              EDIT PROFILE
            </button>
          </div>

          {QueryHandler(profile?.firstName, "First Name ")}
          {QueryHandler(profile?.lastName, "Last Name ")}
          {QueryHandler(profile?.gender, "Gender ")}
          {QueryHandler(profile?.dob, "Date of Birth")}
          {QueryHandler(profile?.countryCode, "Country Code")}
          {QueryHandler(profile?.phone, "Mobile Number")}
          {QueryHandler(profile?.email, "Email Id ")}
        </div>

        <div className="profile_div">
          <div className="heading">
            <p>Saved Addresses</p>

            <button>
              <img src="/Image/103.png" alt="" />
              EDIT PROFILE
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyProfile;