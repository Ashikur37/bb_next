import React from "react";
import { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
function Additional({ user }) {
  const [userName, setUserName] = useState({
    editView: false,
    value: user.first_name,
    tempValue: user.first_name,
  });
  const [bDate, setBDate] = useState({
    editView: false,
    value: new Date(),
    tempValue: new Date(),
  });

  const changeView = (text) => {
    switch (text) {
      case "name":
        setUserName({
          ...userName,
          editView: !userName.editView,
        });
        break;
      case "bDate":
        setBDate({
          ...bDate,
          editView: !bDate.editView,
        });
        break;
    }
  };
  const changeHandler = (text, value) => {
    switch (text) {
      case "name":
        setUserName({
          ...userName,
          tempValue: value,
        });
        break;
      case "bDate":
        setBDate({
          ...bDate,
          tempValue: value,
        });
        break;
    }
  };

  const saveClick = (text) => {
    switch (text) {
      case "name":
        setUserName({
          ...userName,
          value: userName.tempValue,
          editView: false,
        });
        break;
      case "bDate":
        setBDate({
          ...bDate,
          value: bDate.tempValue,
          editView: false,
        });
        break;
    }
  };
  const cancelClick = (text) => {
    switch (text) {
      case "name":
        setUserName({
          ...userName,
          tempValue: userName.value,
          editView: false,
        });
        break;
      case "bDate":
        setBDate({
          ...bDate,
          tempValue: bDate.value,
          editView: false,
        });
        break;
    }
  };
  return (
    <div className="additional">
      <span className="title">Profile Information</span>
      <ul>
        <li>
          <strong>Name:</strong>
          {userName.editView ? (
            <div className="">
              <input
                type="text"
                className="form-control"
                value={userName.tempValue}
                onChange={(e) => changeHandler("name", e.target.value)}
              />
              <div className="text-center mt-3">
                <button
                  onClick={() => saveClick("name")}
                  className="btn btn-sm mr-2 btn-outline-success"
                >
                  Save
                </button>
                <button
                  onClick={() => cancelClick("name")}
                  className="btn btn-sm btn-outline-warning"
                >
                  cancel
                </button>
              </div>
            </div>
          ) : (
            <>
              {" "}
              <span>{userName.value}</span>
              <button
                onClick={() => changeView("name")}
                className="btn btn-sm btn-outline-warning text-black ml-2"
              >
                Edit
              </button>
            </>
          )}
        </li>
        <li>
          <strong>DATE OF BIRTH: </strong>{" "}
          {bDate.editView ? (
            <>
              <DatePicker
                className="form-control"
                dateFormat="dd/MM/yyyy"
                selected={bDate.tempValue}
                onChange={(date) => changeHandler("bDate", date)}
              />
              <div className="text-center mt-3">
                <button
                  onClick={() => saveClick("bDate")}
                  className="btn btn-sm mr-2 btn-outline-success"
                >
                  Save
                </button>
                <button
                  onClick={() => cancelClick("bDate")}
                  className="btn btn-sm btn-outline-warning"
                >
                  cancel
                </button>
              </div>
            </>
          ) : (
            <>
              <span> {bDate.value.toDateString()} </span>
              <button
                onClick={() => changeView("bDate")}
                className="btn btn-sm btn-outline-warning text-black ml-2"
              >
                Edit
              </button>{" "}
            </>
          )}
        </li>
        <li>
          <strong>CONTACT :</strong> {user.profile.phone_no}
        </li>
        <li>
          <strong>CONTACT INFORMATION:</strong> {user.profile.apartment},
          {user.profile.address},{user.profile.city},{user.profile.country}
        </li>
      </ul>
    </div>
  );
}

export default Additional;
