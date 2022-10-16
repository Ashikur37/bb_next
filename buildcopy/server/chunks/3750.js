"use strict";
exports.id = 3750;
exports.ids = [3750];
exports.modules = {

/***/ 3750:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Blogs)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9639);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);





const Blog = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(() => __webpack_require__.e(/* import() */ 7303).then(__webpack_require__.bind(__webpack_require__, 7303)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(7303)],
    modules: ["../components/homepage/Blogs.js -> " + "../atom/Blog"]
  }
});
function Blogs({
  lang,
  Header,
  t,
  styles
}) {
  const {
    0: posts,
    1: setPosts
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    fetch("https://blog.beautyboothqa.com/wp-json/wp/v2/posts?per_page=4&_embed").then(res => res.json()).then(data => {
      let p = data.map(post => {
        var _post$excerpt, _post$_embedded$wpFe;

        return {
          title: post.title.rendered,
          excerpt: (_post$excerpt = post.excerpt) === null || _post$excerpt === void 0 ? void 0 : _post$excerpt.rendered,
          link: post.link,
          img: (_post$_embedded$wpFe = post._embedded["wp:featuredmedia"][0].source_url) !== null && _post$_embedded$wpFe !== void 0 ? _post$_embedded$wpFe : "/images/white-gray-gradient-background.jpg",
          modified: post.modified
        };
      });
      setPosts(p);
    }).catch(err => {
      console.log(err);
    });
  }, [lang]);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
    className: "container mt-5",
    children: posts ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "row",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          className: "col",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Header, {
            text: t("our_blog"),
            h: "h2"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "row",
            children: posts.map((post, index) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Blog, {
              title: post.title,
              excerpt: post.excerpt,
              link: post.link,
              img: post.img,
              styles: styles
            }, index))
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: styles.v_blog,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
              href: "https://blog.beautyboothqa.com/",
              target: "_blank",
              rel: "noreferrer",
              children: "Visit Blog"
            })
          })]
        })
      })
    }) : null
  });
}

/***/ })

};
;