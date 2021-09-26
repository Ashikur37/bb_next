import React, { useState, useEffect } from "react";
import PhoneInput from "react-phone-number-input";
import DatePicker from "react-datepicker";
import Head from "next/head";
import { parsePhoneNumber, isValidPhoneNumber } from "react-phone-number-input";

import { connect } from "react-redux";
import { logoutUser } from "../../redux/actions/authActions";

import "react-phone-number-input/style.css";
import Link from "next/link";
// import axios from "../../redux/actions/axios";
import Axios from "axios";
import HeaderComponent from "../../components/atom/HeaderComponent";
import { toast, ToastContainer } from "react-toastify";

// import "react-datepicker/dist/react-datepicker.css";
const proImg = "images/avatar.png";
function EditProfile({ auth, history, logout, lang }) {
  const [user, setUser] = useState(null);

  const [profileImg, setProfileImg] = useState();

  // profile info state
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [fullAddress, setFullAddress] = useState("");
  const [area, setArea] = useState("");
  const [apt, setApt] = useState("");
  const [profession, setProfession] = useState("");
  const [dob, setDob] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState({});

  const [oldPassword, setOldPasswrod] = useState();
  const [newPasswrod, setNewPassword] = useState();
  const [newPasswrodConfirm, setNewPasswordConfirm] = useState();
  const [validationMessage, setValidationMessage] = useState();

  useEffect(() => {
    if (!auth.isAuthenticated || !localStorage.getItem("auth_token")) {
      location.replace("/login");
    }
    if (auth.isAuthenticated && !user) {
      Axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem("auth_token") || ""
        }`;

      const locale = lang == "ar" ? "ar_QA" : "en";
      Axios.get(`/api/profile?locale=${locale}`)
        .then((res) => {
          setFullName(res.data.user.first_name);
          setEmail(res.data.user.email);
          setPhone(res.data.user.profile.phone_no);
          setFullAddress(res.data.user.profile.address);
          setArea(res.data.user.profile.city);
          setApt(res.data.user.profile.apartment);
          setProfession(res.data.user.profile.others.profession);
          setDob(new Date(res.data.user.profile.others.dob));
          // setProfileImg(res.data.user.profile.profile_image);
        })
        .catch((err) => {
          // if (err.response.status === 500) {
          //   logout();
          // }
        });
    }
  }, [auth, user]);

  const submitHandler = (e) => {
    e.preventDefault();
    let errorsValues = validation();
    // console.log(errorsValues);
    if (errorsValues) {
      setErrors(errorsValues);
    }
    if (Object.keys(errorsValues).length === 0) {
      // alert("you are good to go");
      // let formData = new FormData();
      // formData.append("_method", "PUT");
      // formData.append("first_name", fullName);
      // formData.append("email", email);
      // formData.append("address", fullAddress);
      // formData.append("area", area);
      // formData.append("apartment", apt);
      // formData.append("phone_no", phone);
      // formData.append("profile_image", profileImg);
      // formData.append("others[profession]", profession);
      // formData.append("others[dob]", dob);
      Axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem("auth_token") || ""
        }`;
      Axios.post(
        "/api/profiles/update-profile",
        {
          first_name: fullName,
          email,
          profile: {
            city: area,
            apartment: apt,
            address: fullAddress,
            profile_image: profileImg,
            phone_no: phone,
          },
          others: {
            profession: profession,
            dob: dob,
          }
        }
      ).then((res) => {
        toast.success(res.data, {
          position: "bottom-right",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
    }
  };

  const validation = () => {
    let errorsValues = {};

    if (fullName == "") {
      errorsValues.fullName = "Full Name Required";
    }
    if (email == "") {
      errorsValues.email = "Email Name Required";
    } else if (!validateEmail(email)) {
      errorsValues.email = "Email Not Valid";
    }

    if (!isValidPhoneNumber(phone)) {
      errorsValues.phone = "Not a valid Phone Number";
    }

    if (fullAddress == "") {
      errorsValues.fullAddress = "Full Address Required";
    }
    if (area == "") {
      errorsValues.area = "Area Required";
    }
    return errorsValues;
  };
  function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
  //for image change
  const imageHandler = (e) => {
    let size = e.target.files[0].size;
    if (size > 2097152) {
      alert("Image size should be less than 2MB");
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        // console.log(reader.result);

        setProfileImg(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  //for remove image
  const removePhoto = () => {
    if (profileImg) setProfileImg();
  };
  // change password
  const changePasswordSubmitHandler = (e) => {
    e.preventDefault();

    let data = {
      old__pass: oldPassword,
      new__pass: newPasswrod,
      confirm__pass: newPasswrodConfirm,
    };
    // TODO: axios request
    Axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem("auth_token") || ""
      }`;
    Axios
      .post("/api/profiles/change-password", data)
      .then((res) => {

        setValidationMessage(null);
        logout();
      })
      .catch((err) => {
        if (err) {
          console.log(err);
          setValidationMessage(err.response.data);
        }
      });
  };

  return (
    <div className="edit__profile__page">
      <Head>
        <title>Edit Profile</title>
      </Head>
      <div className="container">

        <ToastContainer />
        <HeaderComponent text="Edit Profile" />
        {/* <div className="row">
          <div className="col">
            <div className="update__profile__title">
              update your profile and get 5% discount on your next checkout
            </div>
          </div>
        </div> */}
        <div className="row">
          {/* <div className="col-lg-3">
            <div className="image__upload">
              <div className="image__holder">
                <img src={profileImg ? profileImg : proImg} alt="" />
              </div>
              <input
                type="file"
                name="input__img"
                id="input__img"
                accept="image/*"
                onChange={(e) => imageHandler(e)}
              />
              <label htmlFor="input__img">Upload photo</label>
              <label htmlFor="" onClick={() => removePhoto()}>
                Remove photo
              </label>
            </div>
          </div> */}
          <div className="col-lg-12">
            <div className="edit__form">
              <form onSubmit={submitHandler} className="my-5">
                <div className="row ">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="fullname">Full Name</label>
                      <input
                        type="text"
                        className={
                          errors.fullName
                            ? "form-control is-invalid"
                            : "form-control"
                        }
                        id="fullname"
                        name="fullname"
                        placeholder="Enter Your Name..."
                        value={fullName}
                        onChange={(e) => {
                          setFullName(e.target.value);
                        }}
                      />

                      <div className="invalid-feedback">{errors.fullName}</div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        className={
                          errors.email
                            ? "form-control is-invalid"
                            : "form-control"
                        }
                        id="email"
                        name="email"
                        value={email}
                        disabled
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                        placeholder="Enter email..."
                      />
                      <div className="invalid-feedback">{errors.email}</div>
                    </div>
                  </div>
                </div>
                {/* <div className="row ">
                  <div className="col-md-6">
                    <div class="form-group">
                      <label for="password">Password</label>
                      <input
                        type="password"
                        class="form-control"
                        id="password"
                        name="password"
                        placeholder="Enter Your Passord..."
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div class="form-group">
                      <label for="confirm__passowrd">Confirm Password</label>
                      <input
                        type="password"
                        class="form-control"
                        id="confimr__password"
                        name="confirm__password"
                        placeholder="Enter  confirm Password..."
                      />
                    </div>
                  </div>
                </div> */}
                <div className="row ">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="phone__number">Phone Number</label>
                      <PhoneInput
                        international
                        defaultCountry="QA"
                        value={phone}
                        onChange={(value) => {
                          setPhone(value);
                        }}
                      />
                      {errors.phone && (
                        <small className="mt-2 text-danger">
                          {errors.phone}
                        </small>
                      )}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="apt">
                        Apartment/Suit/Unit (optional)
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="apt"
                        name="apt"
                        value={apt}
                        onChange={(e) => {
                          setApt(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className="row ">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="address">Full Address</label>
                      <input
                        type="text"
                        className={
                          errors.fullAddress
                            ? "form-control is-invalid"
                            : "form-control"
                        }
                        id="address"
                        name="address"
                        value={fullAddress}
                        onChange={(e) => {
                          setFullAddress(e.target.value);
                        }}
                        placeholder="Enter Your address..."
                      />
                      <div className="invalid-feedback">
                        {errors.fullAddress}
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="area">Area</label>
                      <input
                        type="text"
                        className={
                          errors.area
                            ? "form-control is-invalid"
                            : "form-control"
                        }
                        id="area"
                        name="area"
                        value={area}
                        onChange={(e) => {
                          setArea(e.target.value);
                        }}
                        placeholder="Please enter your area"
                      />
                      <div className="invalid-feedback">{errors.area}</div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="profession">
                        Your occupassion (optional)
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="profession"
                        value={profession}
                        onChange={(e) => {
                          setProfession(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="profession">
                        Your Date of Birth (optional)
                      </label>
                      {/* <input
                        type="date"
                        className="form-control"
                        name="dob"
                        value={dob}
                        onChange={(e) => {
                          setDob(e.target.value);
                        }}
                      /> */}
                      <DatePicker
                        name="dob"
                        className="form-control"
                        dateFormat="dd/MM/yyyy"
                        selected={dob}
                        onChange={(date) => setDob(date)}
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <div className="buttons__wrapper">
                      <Link href="/profile">
                        <a className="cancle"> Cancel</a>
                      </Link>
                      <input type="submit" className="update" value="update" />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="row">
          <HeaderComponent />

          <div className="col-md-6 offset-md-3">
            <div className="change_pass">
              <span className="title">Change Password</span>
              <form onSubmit={changePasswordSubmitHandler}>
                <div className="form-group pass_group">
                  <label className="input_label">Old Password</label>
                  <input
                    type="password"
                    required
                    className="form-control input_box"
                    name="old__pass"
                    value={oldPassword}
                    onChange={(e) => setOldPasswrod(e.target.value)}
                  />
                </div>
                <div className="form-group pass_group">
                  <label className="input_label">New Password</label>
                  <input
                    type="password"
                    required
                    className="form-control input_box"
                    name="new__pass"
                    value={newPasswrod}
                    onChange={(e) => setNewPassword(e.target.value)}
                  />
                </div>
                <div className="form-group pass_group">
                  <label className="input_label">Confirm Password</label>
                  <input
                    type="password"
                    required
                    className="form-control input_box"
                    name="new__pass"
                    value={newPasswrodConfirm}
                    onChange={(e) => setNewPasswordConfirm(e.target.value)}
                  />
                </div>
                {validationMessage && (
                  <div className="alert alert-danger">
                    {JSON.stringify(validationMessage)}
                  </div>
                )}
                <div className="form_btn_container">
                  <input
                    className="submit_btn change_btn"
                    type="submit"
                    value="Save Changes"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});
const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => logoutUser(dispatch),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);
