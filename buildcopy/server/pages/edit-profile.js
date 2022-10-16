(() => {
var exports = {};
exports.id = 9046;
exports.ids = [9046];
exports.modules = {

/***/ 2170:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ edit_profile)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "react-phone-number-input"
var external_react_phone_number_input_ = __webpack_require__(6293);
var external_react_phone_number_input_default = /*#__PURE__*/__webpack_require__.n(external_react_phone_number_input_);
;// CONCATENATED MODULE: external "react-datepicker"
const external_react_datepicker_namespaceObject = require("react-datepicker");
var external_react_datepicker_default = /*#__PURE__*/__webpack_require__.n(external_react_datepicker_namespaceObject);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(79);
// EXTERNAL MODULE: ./redux/actions/authActions.js
var authActions = __webpack_require__(6808);
// EXTERNAL MODULE: ./node_modules/react-phone-number-input/style.css
var style = __webpack_require__(483);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2376);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: ./components/atom/HeaderComponent.jsx
var HeaderComponent = __webpack_require__(7040);
// EXTERNAL MODULE: ./components/layout/partials/Header.js
var Header = __webpack_require__(5773);
// EXTERNAL MODULE: external "react-toastify"
var external_react_toastify_ = __webpack_require__(2034);
// EXTERNAL MODULE: ./i18n.js
var i18n = __webpack_require__(2625);
// EXTERNAL MODULE: ./styles/EditProfilePage.module.scss
var EditProfilePage_module = __webpack_require__(6156);
var EditProfilePage_module_default = /*#__PURE__*/__webpack_require__.n(EditProfilePage_module);
;// CONCATENATED MODULE: ./pages/edit-profile/index.js










 // import axios from "../../redux/actions/axios";






 // import "react-datepicker/dist/react-datepicker.css";

const proImg = "images/avatar.png";

function EditProfile({
  auth,
  history,
  logout,
  lang,
  t
}) {
  const {
    0: user,
    1: setUser
  } = (0,external_react_.useState)(null);
  const {
    0: profileImg,
    1: setProfileImg
  } = (0,external_react_.useState)(); // profile info state

  const {
    0: fullName,
    1: setFullName
  } = (0,external_react_.useState)("");
  const {
    0: email,
    1: setEmail
  } = (0,external_react_.useState)("");
  const {
    0: fullAddress,
    1: setFullAddress
  } = (0,external_react_.useState)("");
  const {
    0: area,
    1: setArea
  } = (0,external_react_.useState)("");
  const {
    0: apt,
    1: setApt
  } = (0,external_react_.useState)("");
  const {
    0: profession,
    1: setProfession
  } = (0,external_react_.useState)("");
  const {
    0: dob,
    1: setDob
  } = (0,external_react_.useState)("");
  const {
    0: phone,
    1: setPhone
  } = (0,external_react_.useState)("");
  const {
    0: errors,
    1: setErrors
  } = (0,external_react_.useState)({});
  const {
    0: oldPassword,
    1: setOldPasswrod
  } = (0,external_react_.useState)();
  const {
    0: newPasswrod,
    1: setNewPassword
  } = (0,external_react_.useState)();
  const {
    0: newPasswrodConfirm,
    1: setNewPasswordConfirm
  } = (0,external_react_.useState)();
  const {
    0: validationMessage,
    1: setValidationMessage
  } = (0,external_react_.useState)();
  (0,external_react_.useEffect)(() => {
    if (!auth.isAuthenticated || !localStorage.getItem("auth_token")) {
      location.replace("/login");
    }

    if (auth.isAuthenticated && !user) {
      (external_axios_default()).defaults.headers.common.Authorization = `Bearer ${localStorage.getItem("auth_token") || ""}`;
      const locale = lang == "ar_QA" ? "ar_QA" : "en";
      external_axios_default().get(`/api/profile?locale=${locale}`).then(res => {
        setFullName(res.data.user.first_name);
        setEmail(res.data.user.email);
        setPhone(res.data.user.profile.phone_no);
        setFullAddress(res.data.user.profile.address);
        setArea(res.data.user.profile.city);
        setApt(res.data.user.profile.apartment);
        setProfession(res.data.user.profile.others.profession);
        setDob(new Date(res.data.user.profile.others.dob)); // setProfileImg(res.data.user.profile.profile_image);
      }).catch(err => {// if (err.response.status === 500) {
        //   logout();
        // }
      });
    }
  }, [auth, user]);

  const submitHandler = e => {
    e.preventDefault();
    let errorsValues = validation(); // console.log(errorsValues);

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
      (external_axios_default()).defaults.headers.common.Authorization = `Bearer ${localStorage.getItem("auth_token") || ""}`;
      external_axios_default().post("/api/profiles/update-profile", {
        first_name: fullName,
        email,
        profile: {
          city: area,
          apartment: apt,
          address: fullAddress,
          profile_image: profileImg,
          phone_no: phone
        },
        others: {
          profession: profession,
          dob: dob
        }
      }).then(res => {
        external_react_toastify_.toast.success(res.data, {
          position: "bottom-right",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined
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

    if (!(0,external_react_phone_number_input_.isValidPhoneNumber)(phone)) {
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
  } //for image change


  const imageHandler = e => {
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
  }; //for remove image


  const removePhoto = () => {
    if (profileImg) setProfileImg();
  }; // change password


  const changePasswordSubmitHandler = e => {
    e.preventDefault();
    let data = {
      old__pass: oldPassword,
      new__pass: newPasswrod,
      confirm__pass: newPasswrodConfirm
    }; // TODO: axios request

    (external_axios_default()).defaults.headers.common.Authorization = `Bearer ${localStorage.getItem("auth_token") || ""}`;
    external_axios_default().post("/api/profiles/change-password", data).then(res => {
      setValidationMessage(null);
      logout();
    }).catch(err => {
      if (err) {
        console.log(err);
        setValidationMessage(err.response.data);
      }
    });
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: (EditProfilePage_module_default()).edit__profile__page,
    children: [/*#__PURE__*/jsx_runtime_.jsx((head_default()), {
      children: /*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "Edit Profile"
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "container",
      children: [/*#__PURE__*/jsx_runtime_.jsx(external_react_toastify_.ToastContainer, {}), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "text-center mt-2",
        children: /*#__PURE__*/jsx_runtime_.jsx(Header.default, {
          text: t("Edit Profile")
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "row",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-lg-12",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "edit__form",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("form", {
              onSubmit: submitHandler,
              className: "my-5",
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "row ",
                children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "col-md-6",
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
                      htmlFor: "fullname",
                      children: t("Full Name")
                    }), /*#__PURE__*/jsx_runtime_.jsx("input", {
                      type: "text",
                      className: errors.fullName ? "form-control is-invalid" : "form-control",
                      id: "fullname",
                      name: "fullname",
                      placeholder: "Enter Your Name...",
                      value: fullName,
                      onChange: e => {
                        setFullName(e.target.value);
                      }
                    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                      className: "invalid-feedback",
                      children: errors.fullName
                    })]
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "col-md-6",
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
                      htmlFor: "email",
                      children: t("Email address")
                    }), /*#__PURE__*/jsx_runtime_.jsx("input", {
                      type: "email",
                      className: errors.email ? "form-control is-invalid" : "form-control",
                      id: "email",
                      name: "email",
                      value: email,
                      disabled: true,
                      onChange: e => {
                        setEmail(e.target.value);
                      },
                      placeholder: "Enter email..."
                    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                      className: "invalid-feedback",
                      children: errors.email
                    })]
                  })
                })]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "row ",
                children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "col-md-6",
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
                      htmlFor: "phone__number",
                      children: t("Your Phone Number")
                    }), /*#__PURE__*/jsx_runtime_.jsx((external_react_phone_number_input_default()), {
                      international: true,
                      defaultCountry: "QA",
                      value: phone,
                      onChange: value => {
                        setPhone(value);
                      }
                    }), errors.phone && /*#__PURE__*/jsx_runtime_.jsx("small", {
                      className: "mt-2 text-danger",
                      children: errors.phone
                    })]
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "col-md-6",
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
                      htmlFor: "apt",
                      children: "Apartment/Suit/Unit (optional)"
                    }), /*#__PURE__*/jsx_runtime_.jsx("input", {
                      type: "text",
                      className: "form-control",
                      id: "apt",
                      name: "apt",
                      value: apt,
                      onChange: e => {
                        setApt(e.target.value);
                      }
                    })]
                  })
                })]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "row ",
                children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "col-md-6",
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
                      htmlFor: "address",
                      children: t("Full Address")
                    }), /*#__PURE__*/jsx_runtime_.jsx("input", {
                      type: "text",
                      className: errors.fullAddress ? "form-control is-invalid" : "form-control",
                      id: "address",
                      name: "address",
                      value: fullAddress,
                      onChange: e => {
                        setFullAddress(e.target.value);
                      },
                      placeholder: "Enter Your address..."
                    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                      className: "invalid-feedback",
                      children: errors.fullAddress
                    })]
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "col-md-6",
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
                      htmlFor: "area",
                      children: t("Area")
                    }), /*#__PURE__*/jsx_runtime_.jsx("input", {
                      type: "text",
                      className: errors.area ? "form-control is-invalid" : "form-control",
                      id: "area",
                      name: "area",
                      value: area,
                      onChange: e => {
                        setArea(e.target.value);
                      },
                      placeholder: "Please enter your area"
                    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                      className: "invalid-feedback",
                      children: errors.area
                    })]
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "col-md-6",
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
                      htmlFor: "profession",
                      children: "Your occupassion (optional)"
                    }), /*#__PURE__*/jsx_runtime_.jsx("input", {
                      type: "text",
                      className: "form-control",
                      name: "profession",
                      value: profession,
                      onChange: e => {
                        setProfession(e.target.value);
                      }
                    })]
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "col-md-6",
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
                      htmlFor: "profession",
                      children: "Your Date of Birth (optional)"
                    }), /*#__PURE__*/jsx_runtime_.jsx((external_react_datepicker_default()), {
                      name: "dob",
                      className: "form-control",
                      dateFormat: "dd/MM/yyyy",
                      selected: dob,
                      onChange: date => setDob(date)
                    })]
                  })
                })]
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "row",
                children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "col",
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: (EditProfilePage_module_default()).buttons__wrapper,
                    children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                      href: "/profile",
                      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                        className: (EditProfilePage_module_default()).cancle,
                        children: [" ", t("Cancel")]
                      })
                    }), /*#__PURE__*/jsx_runtime_.jsx("input", {
                      type: "submit",
                      className: (EditProfilePage_module_default()).update,
                      value: t("Update")
                    })]
                  })
                })
              })]
            })
          })
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "row ",
        children: [/*#__PURE__*/jsx_runtime_.jsx(HeaderComponent/* default */.Z, {}), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-md-6 mx-auto",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "change_pass",
            children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
              className: "title",
              children: t("Change Password")
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("form", {
              onSubmit: changePasswordSubmitHandler,
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "form-group pass_group",
                children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
                  className: "input_label",
                  children: t("Old Password")
                }), /*#__PURE__*/jsx_runtime_.jsx("input", {
                  type: "password",
                  required: true,
                  className: "form-control input_box",
                  name: "old__pass",
                  value: oldPassword,
                  onChange: e => setOldPasswrod(e.target.value)
                })]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "form-group pass_group",
                children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
                  className: "input_label",
                  children: t("New Password")
                }), /*#__PURE__*/jsx_runtime_.jsx("input", {
                  type: "password",
                  required: true,
                  className: "form-control input_box",
                  name: "new__pass",
                  value: newPasswrod,
                  onChange: e => setNewPassword(e.target.value)
                })]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "form-group pass_group",
                children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
                  className: "input_label",
                  children: t("Confirm Password")
                }), /*#__PURE__*/jsx_runtime_.jsx("input", {
                  type: "password",
                  required: true,
                  className: "form-control input_box",
                  name: "new__pass",
                  value: newPasswrodConfirm,
                  onChange: e => setNewPasswordConfirm(e.target.value)
                })]
              }), validationMessage && /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "alert alert-danger",
                children: JSON.stringify(validationMessage)
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "form_btn_container",
                children: /*#__PURE__*/jsx_runtime_.jsx("input", {
                  className: "submit_btn change_btn",
                  type: "submit",
                  value: t("Save Changes")
                })
              })]
            })]
          })
        })]
      })]
    })]
  });
}

const mapStateToProps = state => ({
  auth: state.auth
});

const mapDispatchToProps = dispatch => {
  return {
    logout: () => (0,authActions/* logoutUser */.TX)(dispatch)
  };
};

/* harmony default export */ const edit_profile = ((0,external_react_redux_.connect)(mapStateToProps, mapDispatchToProps)((0,i18n.withTranslation)("common")(EditProfile)));

/***/ }),

/***/ 6156:
/***/ ((module) => {

// Exports
module.exports = {
	"edit__profile__page": "EditProfilePage_edit__profile__page__1s_0Z",
	"buttons__wrapper": "EditProfilePage_buttons__wrapper__1IxX6",
	"cancle": "EditProfilePage_cancle__1lk8N",
	"update": "EditProfilePage_update__6EPai"
};


/***/ }),

/***/ 483:
/***/ (() => {



/***/ }),

/***/ 887:
/***/ ((module) => {

"use strict";
module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ 2376:
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ 8475:
/***/ ((module) => {

"use strict";
module.exports = require("next-i18next");

/***/ }),

/***/ 8951:
/***/ ((module) => {

"use strict";
module.exports = require("next/config");

/***/ }),

/***/ 9325:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 5378:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 7162:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 8773:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 2248:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 9372:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 665:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 2747:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 333:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 3456:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 7620:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 701:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 5622:
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ 9297:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6293:
/***/ ((module) => {

"use strict";
module.exports = require("react-phone-number-input");

/***/ }),

/***/ 79:
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ 2034:
/***/ ((module) => {

"use strict";
module.exports = require("react-toastify");

/***/ }),

/***/ 5282:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 8993:
/***/ ((module) => {

"use strict";
module.exports = require("universal-cookie");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [4920,1664,3164,6808,5773,1843], () => (__webpack_exec__(2170)));
module.exports = __webpack_exports__;

})();