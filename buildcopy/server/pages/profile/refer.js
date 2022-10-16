(() => {
var exports = {};
exports.id = 2359;
exports.ids = [2359];
exports.modules = {

/***/ 2625:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const NextI18Next = __webpack_require__(8475).default;

const {
  localeSubpaths
} = __webpack_require__(8951).default().publicRuntimeConfig;

const path = __webpack_require__(5622);

module.exports = new NextI18Next({
  useSuspense: true,
  otherLanguages: ["ar_QA"],
  defaultLanguage: "en",
  defaultLocale: "en",
  locales: ['en', 'ar_QA'],
  localeSubpaths,
  // localePath: typeof window === "undefined" ? path.resolve("./public/static/locales") : "locales",
  localePath: path.resolve("./public/locales")
});

/***/ }),

/***/ 772:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ profile_refer),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./components/profile/Layout.jsx
var Layout = __webpack_require__(7094);
// EXTERNAL MODULE: ./i18n.js
var i18n = __webpack_require__(2625);
// EXTERNAL MODULE: ./styles/UserProfilePage.module.scss
var UserProfilePage_module = __webpack_require__(3362);
var UserProfilePage_module_default = /*#__PURE__*/__webpack_require__.n(UserProfilePage_module);
;// CONCATENATED MODULE: ./components/profile/Refer.jsx






function Refer({
  user,
  t
}) {
  const copyLink = () => {
    /* Get the text field */
    var copyText = document.getElementById("ref__link");
    /* Select the text field */

    copyText.select();
    copyText.setSelectionRange(0, 99999);
    /*For mobile devices*/

    /* Copy the text inside the text field */

    document.execCommand("copy");
  };

  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "row",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "col",
      children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
        children: t("Refer A Friend")
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: `${(UserProfilePage_module_default()).refer__friend__form} my-3`,
        children: [/*#__PURE__*/jsx_runtime_.jsx("input", {
          type: "text",
          id: "ref__link",
          defaultValue: `https://beautyboothqa.com/register?ref=${user.profile.user_code}`
        }), /*#__PURE__*/jsx_runtime_.jsx("button", {
          onClick: copyLink,
          children: t("copy")
        })]
      })]
    })
  });
}

/* harmony default export */ const profile_Refer = ((0,i18n.withTranslation)("common")(Refer));
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2376);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
;// CONCATENATED MODULE: ./pages/profile/refer.jsx






function refer({
  user
}) {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    children: /*#__PURE__*/jsx_runtime_.jsx(Layout.default, {
      active: "refer",
      children: /*#__PURE__*/jsx_runtime_.jsx(profile_Refer, {
        user: user
      })
    })
  });
}

async function getServerSideProps(context) {
  let language = context.req.language || "en";
  let Auth = null;

  if (false) {} else {
    Auth = context.req.universalCookies.get('auth_token') || null;
  }

  if (!Auth) {
    return {
      props: {
        language
      }
    };
  }

  let host = `http://localhost:${process.env.PORT}`;
  (external_axios_default()).defaults.headers.common.Authorization = `Bearer ${Auth}`;
  const user = await external_axios_default().get(`${host}/api/profile?locale=${language}`).then(res => {
    if (res.data) {
      return res.data.user;
    }
  }).catch(err => {
    console.log(err);
  });
  return {
    props: {
      language,
      Auth,
      user
    }
  };
}
/* harmony default export */ const profile_refer = (refer);

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

/***/ 9639:
/***/ ((module) => {

"use strict";
module.exports = require("next/dynamic");

/***/ }),

/***/ 701:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 6731:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

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

/***/ 79:
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [3164,6808,7094], () => (__webpack_exec__(772)));
module.exports = __webpack_exports__;

})();