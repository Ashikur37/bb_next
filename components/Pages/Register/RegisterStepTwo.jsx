import React, { useState, useEffect } from "react";
import Link from "next/link";
import { cityNames } from "../../mobile/static";
import axios from "../../../redux/actions/axios";

function RegisterStepTwo({ phone }) {
  const [disabled, setDisabled] = useState(true);
  const [error, setError] = useState(null);
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_no: phone
      ? "+" + JSON.parse(phone).country_code + JSON.parse(phone).phone
      : "",
    apartment: "",
    address: "",
    city: "",
    country: "QA",
    privacy_policy: false,
    password: "",
    password_confirmation: "",
  });
  const formSubmitHandler = (event) => {
    event.preventDefault();
    const newForm = new FormData();
    newForm.append("first_name", form.first_name);
    newForm.append("last_name", form.first_name);
    newForm.append("email", form.email);
    newForm.append("password", form.password);
    newForm.append("password_confirmation", form.password_confirmation);
    newForm.append("phone_no", form.phone_no);
    newForm.append("address", form.address);
    newForm.append("apartment", form.apartment); // area
    newForm.append("city", form.city);
    newForm.append("privacy_policy", form.privacy_policy);
    newForm.append("country", form.country);
    axios
      .post("en/auth/register", newForm)
      .then((res) => {
        localStorage.removeItem("number");
        window.location.href = "/login";
      })
      .catch((err) => {
        setError(
          err.response ? err.response.data.message : "Something went wrong"
        );
        window.alert(error);
      });
  };
  useEffect(() => {
    if (
      form.privacy_policy &&
      form.first_name !== "" &&
      form.email !== "" &&
      form.password !== "" &&
      form.apartment !== "" &&
      form.password_confirmation !== "" &&
      form.password === form.password_confirmation &&
      form.city !== ""
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [form]);
  return (
    <>
      <div className="container">
        <span className="title">ACCOUNT</span>
        <span className="title sub_title">
          Fill-up your PERSONAL INFORMATION
        </span>
        <div className=" mt-3 register_container">
          <form onSubmit={(e) => formSubmitHandler(e)} method="POST">
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label className="input_label">Full Name*</label>
                  <input
                    type="text"
                    className="form-control "
                    value={form.first_name}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        first_name: e.currentTarget.value,
                        last_name: e.currentTarget.value,
                      })
                    }
                  />
                  {/* <input hidden type="text" className="form-control " 
                  value={form.first_name}
                  onChange={e => handleChange({'last_name':e.currentTarget.value})} /> */}
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label className="input_label">Email address</label>
                  <input
                    type="email"
                    className="form-control "
                    value={form.email}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        email: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label className="input_label">Password*</label> (password
                  must contain at least 6 characters)
                  <input
                    type="password"
                    className="form-control "
                    value={form.password}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        password: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label className="input_label">Re-enter Password*</label>
                  <input
                    type="password"
                    className="form-control "
                    value={form.password_confirmation}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        password_confirmation: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label className="input_label">Phone Number*</label>
                  <input
                    type="text"
                    className="form-control "
                    value={form.phone_no}
                    disabled={true}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label className="input_label">Area*</label>
                  <input
                    type="text"
                    className="form-control "
                    value={form.apartment}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        apartment: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label className="input_label">Full Address*</label>
                  <input
                    type="text"
                    className="form-control "
                    value={form.address}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        address: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="input_label">City*</label>
                      {/* <input type="text" className="form-control " /> */}
                      <select
                        className="custom-select inp ut_box"
                        value={form.city}
                        onChange={(e) =>
                          setForm({
                            ...form,
                            city: e.target.value,
                          })
                        }
                      >
                        <option value="" disabled>
                          Pick a city
                        </option>
                        {cityNames.map((city, index) => (
                          <option value={city} key={index}>
                            {city}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="input_label">Country*</label>
                      {/* <input type="text" className="form-control " /> */}
                      <select
                        value={form.country}
                        className="custom-select inp ut_box"
                        onChange={(e) =>
                          setForm({
                            ...form,
                            country: e.target.value,
                          })
                        }
                      >
                        <option value="QA">Qatar</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="form-group">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="gridCheck"
                  value={form.privacy_policy}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      privacy_policy: e.target.checked,
                    })
                  }
                />
                <label className="form-check-label" htmlFor="gridCheck">
                  By clicking, I agree to{" "}
                  <Link href="/terms-and-conditions">
                    <a className="form_check_label"> Terms & Conditions</a>
                  </Link>{" "}
                  and{" "}
                  <Link href="/privacy-policy">
                    <a className="form_check_label">Privacy Policy</a>
                  </Link>
                  .
                </label>
              </div>
            </div>
            <div className="form_btn_container">
              <input
                className={disabled ? "disabled submit_btn" : "submit_btn"}
                type="submit"
                value="CREATE ACCOUNT"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default RegisterStepTwo;
