exports.id = 7094;
exports.ids = [7094];
exports.modules = {

/***/ 7094:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9639);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(701);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(79);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _redux_actions_authActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6808);
/* harmony import */ var _styles_UserProfilePage_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3362);
/* harmony import */ var _styles_UserProfilePage_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_UserProfilePage_module_scss__WEBPACK_IMPORTED_MODULE_6__);









const SideBar = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(() => Promise.all(/* import() */[__webpack_require__.e(4920), __webpack_require__.e(1664), __webpack_require__.e(7906)]).then(__webpack_require__.bind(__webpack_require__, 8473)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(8473)],
    modules: ["../components/profile/Layout.jsx -> " + "./SideBar"]
  }
});

function Layout({
  children,
  active,
  auth,
  logout
}) {
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (!auth.isAuthenticated) {
      logout();
      window.location.href = '/login';
    }
  }, [auth]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: `${(_styles_UserProfilePage_module_scss__WEBPACK_IMPORTED_MODULE_6___default().user_profile)} my-3`,
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
        children: "User Profile"
      })
    }), auth.isAuthenticated && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      className: "container",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "row",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
          className: "col-lg-3",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SideBar, {
            styles: (_styles_UserProfilePage_module_scss__WEBPACK_IMPORTED_MODULE_6___default()),
            active: active
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
          className: "col-lg-9",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: (_styles_UserProfilePage_module_scss__WEBPACK_IMPORTED_MODULE_6___default().main_container),
            children: children && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().cloneElement(children, {
              auth
            })
          })
        })]
      })
    })]
  });
}

const mapStateToProps = state => ({
  auth: state.auth
});

const mapDispatchToProps = dispatch => {
  return {
    logout: () => (0,_redux_actions_authActions__WEBPACK_IMPORTED_MODULE_5__/* .logoutUser */ .TX)(dispatch)
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_4__.connect)(mapStateToProps, mapDispatchToProps)(Layout));

/***/ }),

/***/ 3362:
/***/ ((module) => {

// Exports
module.exports = {
	"user_profile": "UserProfilePage_user_profile__2Izfq",
	"side_container": "UserProfilePage_side_container__-WqwI",
	"side_header": "UserProfilePage_side_header__3wXH2",
	"side_list": "UserProfilePage_side_list__htNpA",
	"side_item": "UserProfilePage_side_item__3oQO5",
	"active": "UserProfilePage_active__3fB_w",
	"mb_select": "UserProfilePage_mb_select__3oGwu",
	"main_container": "UserProfilePage_main_container__2khMq",
	"welcome": "UserProfilePage_welcome__Y6LgN",
	"ac_info": "UserProfilePage_ac_info__3zG-E",
	"addressbook": "UserProfilePage_addressbook__2IOke",
	"addressbook_title": "UserProfilePage_addressbook_title__164zz",
	"address_info": "UserProfilePage_address_info__3h8cv",
	"address_title": "UserProfilePage_address_title__1xRyX",
	"add_new": "UserProfilePage_add_new__1nnch",
	"new_address": "UserProfilePage_new_address__ltTVB",
	"sectionHeader": "UserProfilePage_sectionHeader__sxmQu",
	"saveBtn": "UserProfilePage_saveBtn__6ig4R",
	"refer__friend__form": "UserProfilePage_refer__friend__form__3hzul",
	"order_history": "UserProfilePage_order_history__Uvq0l",
	"btn-sm": "UserProfilePage_btn-sm__3PUw2",
	"history_title_container": "UserProfilePage_history_title_container__1TAHD",
	"history_title": "UserProfilePage_history_title__1SsAR",
	"accordion__item": "UserProfilePage_accordion__item__eA2ga",
	"accordion__panel": "UserProfilePage_accordion__panel__2Hl1J",
	"accordion__button": "UserProfilePage_accordion__button__1EB9m",
	"sts": "UserProfilePage_sts__RAKHn",
	"table_heading": "UserProfilePage_table_heading__20-PE",
	"order_heading": "UserProfilePage_order_heading__2ItmQ",
	"table": "UserProfilePage_table__1mS-5",
	"order_details_ul": "UserProfilePage_order_details_ul__1Bwed",
	"li_title": "UserProfilePage_li_title__OPHBz"
};


/***/ })

};
;