exports.id = 9839;
exports.ids = [9839,2431,5660];
exports.modules = {

/***/ 9566:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9639);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_Menu_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2341);
/* harmony import */ var _styles_Menu_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Menu_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2625);
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_i18n__WEBPACK_IMPORTED_MODULE_4__);








const SubMenuLi = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(() => Promise.all(/* import() */[__webpack_require__.e(5675), __webpack_require__.e(2558)]).then(__webpack_require__.bind(__webpack_require__, 2558)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(2558)],
    modules: ["../components/layout/Menu.js -> " + "../atom/SubMenuLi"]
  }
});

function Menu({
  lang,
  t
}) {
  const {
    0: active,
    1: setActive
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(-1);
  const {
    0: bodycare
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
    0: [{
      hasItems: false,
      isParent: false,
      isCategory: true,
      slug: "bath",
      image: "body-care/bath.png",
      items: [],
      name: "Bath",
      url: "Body-Care?sub=Bath"
    }, {
      hasItems: false,
      isParent: false,
      isCategory: true,
      slug: "bb-body-cream",
      image: "body-care/bb-body-cream.png",
      items: [],
      name: "BB Body Cream",
      url: "Body-Care?sub=BB-Body-Cream"
    }, {
      hasItems: false,
      isParent: false,
      isCategory: true,
      slug: "body-sun-care",
      image: "body-care/body_sun.png",
      items: [],
      name: "Body Sun Care",
      url: "Body-Care?sub=Body-Sun-Care"
    }, {
      hasItems: false,
      isParent: false,
      isCategory: true,
      image: "body-care/Cream.png",
      items: [],
      name: "Lotion",
      url: "Body-Care?sub=Lotion",
      slug: "lotion"
    }, {
      hasItems: false,
      isParent: false,
      isCategory: true,
      slug: "intimate-care",
      image: "body-care/intimate_care.png",
      items: [],
      name: "Intimate Care",
      url: "Body-Care?sub=Intimate-Care"
    }],
    1: [{
      hasItems: true,
      isParent: false,
      isCategory: true,
      slug: "hand-foot-care",
      image: "body-care/7.png",
      items: [{
        hasItems: false,
        isParent: false,
        isCategory: true,
        slug: "foot-mask",
        image: "foot.jpg",
        items: [],
        name: "Foot Mask",
        url: "Body-Care?sub=Hand-%26-Foot-Care&child=Foot-Mask"
      }, {
        hasItems: false,
        isParent: false,
        isCategory: true,
        slug: "hand-cream",
        image: "9.jpg",
        items: [],
        name: "Hand Cream",
        url: "Body-Care?sub=Hand-%26-Foot-Care&child=Hand-Cream"
      }, {
        hasItems: false,
        isParent: false,
        isCategory: true,
        slug: "hand-mask",
        image: "8.jpg",
        items: [],
        name: "Hand Mask",
        url: "Body-Care?sub=Hand-%26-Foot-Care&child=Hand-Mask"
      }, {
        hasItems: false,
        isParent: false,
        isCategory: true,
        slug: "hand-sanitizer",
        image: "10.jpg",
        items: [],
        name: "Hand Sanitizer",
        url: "Body-Care?sub=Hand-%26-Foot-Care&child=Hand-Sanitizer"
      }],
      name: "Hand & Foot Care",
      url: "Body-Care?sub=Hand-%26-Foot-Care"
    }]
  });
  const {
    0: haircare
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
    0: [{
      hasItems: false,
      isParent: false,
      isCategory: true,
      slug: "conditioner",
      image: "hair-care/Conditioner.png",
      items: [],
      name: "Conditioner",
      url: "Hair-Care?sub=Conditioner"
    }, {
      hasItems: false,
      isParent: false,
      isCategory: true,
      slug: "hair-color",
      image: "hair-care/hair_color.png",
      items: [],
      name: "Hair Color",
      url: "Hair-Care?sub=Hair-Color"
    }, {
      hasItems: false,
      isParent: false,
      isCategory: true,
      slug: "hair-cream-masks",
      image: "hair-care/hair_cream.png",
      items: [],
      name: "Hair Cream & Masks",
      url: "Hair-Care?sub=Hair-Cream-%26-Masks"
    }, {
      hasItems: false,
      isParent: false,
      isCategory: true,
      slug: "hair-serum",
      image: "hair-care/hair_serum.png",
      items: [],
      name: "Hair Serum",
      url: "Hair-Care?sub=Hair-Serum"
    }, {
      hasItems: false,
      isParent: false,
      isCategory: true,
      slug: "shampoo",
      image: "hair-care/shampoo.png",
      items: [],
      name: "Shampoo",
      url: "Hair-Care?sub=Shampoo"
    }, {
      hasItems: false,
      isParent: false,
      isCategory: true,
      slug: "treatment",
      image: "hair-care/treatment.png",
      items: [],
      name: "Treatment",
      url: "Hair-Care?sub=Treatment"
    }]
  });
  const {
    0: makeup
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
    0: [{
      hasItems: false,
      isParent: false,
      isCategory: true,
      slug: "base-makeup",
      image: "make-up/base make up.png",
      items: [],
      name: "Base Makeup",
      url: "Makeup?sub=Base-Makeup"
    }, {
      hasItems: false,
      isParent: false,
      isCategory: true,
      slug: "beauty-accessories",
      image: "make-up/accesso.png",
      items: [],
      name: "Beauty Accessories",
      url: "Makeup?sub=Beauty-Accessories"
    }, {
      hasItems: false,
      isParent: false,
      isCategory: true,
      image: "make-up/base make up.png",
      items: [],
      name: "Blusher",
      url: "Makeup?sub=Blusher",
      slug: "blusher"
    }, {
      hasItems: false,
      isParent: false,
      isCategory: true,
      slug: "cushion",
      image: "make-up/Cushion.png",
      items: [],
      name: "Cushion",
      url: "Makeup?sub=Cushion"
    }, {
      hasItems: false,
      isParent: false,
      isCategory: true,
      image: "make-up/highlighter.png",
      items: [],
      name: "Highlighter",
      url: "Makeup?sub=Highlighter",
      slug: "highlighter"
    }],
    1: [{
      hasItems: true,
      isParent: false,
      isCategory: true,
      slug: "eye",
      image: "make-up/Eyes.png",
      items: [{
        hasItems: false,
        isParent: false,
        isCategory: true,
        slug: "eye-liner",
        image: "Eye liner.jpg",
        items: [],
        name: "Eye Liner",
        url: "Makeup?sub=Eye&child=Eye-Liner"
      }, {
        hasItems: false,
        isParent: false,
        isCategory: true,
        slug: "eye-shadow",
        image: "Eye shadow.jpg",
        items: [],
        name: "Eye Shadow",
        url: "Makeup?sub=Eye&child=Eye-Shadow"
      }, {
        hasItems: false,
        isParent: false,
        isCategory: true,
        slug: "eyebrow",
        image: "eye brow.jpg",
        items: [],
        name: "EyeBrow",
        url: "Makeup?sub=Eye&child=EyeBrow"
      }, {
        hasItems: false,
        isParent: false,
        isCategory: true,
        slug: "mascara",
        image: "mascara.jpg",
        items: [],
        name: "Mascara",
        url: "Makeup?sub=Eye&child=Mascara"
      }],
      name: "Eye",
      url: "Makeup?sub=Eye"
    }, {
      hasItems: true,
      isParent: false,
      isCategory: true,
      slug: "lip",
      image: "make-up/Lip.png",
      items: [{
        hasItems: false,
        isParent: false,
        isCategory: true,
        slug: "lip-tint",
        image: "Lip tint.jpg",
        items: [],
        name: "Lip Tint",
        url: "Makeup?sub=Lip&child=Lip-Tint"
      }, {
        hasItems: false,
        isParent: false,
        isCategory: true,
        slug: "lipstick",
        image: "lipstick.jpg",
        items: [],
        name: "lipstick",
        url: "Makeup?sub=Lip&child=lipstick"
      }],
      name: "Lip",
      url: "Makeup?sub=Lip"
    }]
  });
  const {
    0: accessories
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
    0: [{
      hasItems: false,
      isParent: false,
      isCategory: true,
      name: "Beauty Tools",
      url: "Accessories?sub=Beauty-Tools",
      image: "accesso.jpg",
      slug: "beauty-tools",
      items: []
    }, {
      hasItems: false,
      isParent: false,
      isCategory: true,
      name: "Women's Fashion Jewelry",
      url: "Accessories?sub=Women's-Fashion-Jewelry",
      image: "accesso.jpg",
      slug: "womens-fashion-jewelry-accessories",
      items: []
    }, {
      hasItems: false,
      isParent: false,
      isCategory: true,
      name: "Candles",
      image: "accesso.jpg",
      url: "Accessories?sub=Candles",
      slug: "candles",
      items: []
    }]
  });

  const handleHover = e => {
    setActive(e.target.dataset.index);
  };

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
    className: `container ${(_styles_Menu_module_scss__WEBPACK_IMPORTED_MODULE_5___default().menu_container)}`,
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      className: "row",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
        className: (_styles_Menu_module_scss__WEBPACK_IMPORTED_MODULE_5___default().nav),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
          className: (_styles_Menu_module_scss__WEBPACK_IMPORTED_MODULE_5___default().nav_main_ul),
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
            className: (_styles_Menu_module_scss__WEBPACK_IMPORTED_MODULE_5___default().nav_main_li),
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__.default, {
              href: "/new",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                className: (_styles_Menu_module_scss__WEBPACK_IMPORTED_MODULE_5___default().nav_main_a),
                children: [" ", t("New")]
              })
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
            className: (_styles_Menu_module_scss__WEBPACK_IMPORTED_MODULE_5___default().nav_main_li),
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__.default, {
              href: "/brands",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                className: (_styles_Menu_module_scss__WEBPACK_IMPORTED_MODULE_5___default().nav_main_a),
                children: [" ", t("Brands")]
              })
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
            className: (_styles_Menu_module_scss__WEBPACK_IMPORTED_MODULE_5___default().nav_main_li),
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__.default, {
              href: "/category/Skin-Care",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                className: (_styles_Menu_module_scss__WEBPACK_IMPORTED_MODULE_5___default().nav_main_a),
                "data-index": 1,
                onMouseEnter: handleHover,
                children: [" ", t("Skin Care")]
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
              className: (_styles_Menu_module_scss__WEBPACK_IMPORTED_MODULE_5___default().sub_menu),
              children: active == 1 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                  className: (_styles_Menu_module_scss__WEBPACK_IMPORTED_MODULE_5___default().sub_menu_li),
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                    className: (_styles_Menu_module_scss__WEBPACK_IMPORTED_MODULE_5___default().sub_menu_li_ul),
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SubMenuLi, {
                      lang: lang,
                      styles: (_styles_Menu_module_scss__WEBPACK_IMPORTED_MODULE_5___default()),
                      url: "/category/Skin-Care?sub=ampoule",
                      main: true,
                      Link: next_link__WEBPACK_IMPORTED_MODULE_1__.default,
                      name: t("Ampoule"),
                      img: "skin-care/Ampoule.png"
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SubMenuLi, {
                      lang: lang,
                      styles: (_styles_Menu_module_scss__WEBPACK_IMPORTED_MODULE_5___default()),
                      url: "/category/Skin-Care?sub=Bundle-Set",
                      main: true,
                      Link: next_link__WEBPACK_IMPORTED_MODULE_1__.default,
                      name: t("Bundle Set"),
                      img: "skin-care/Bundle.png"
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SubMenuLi, {
                      lang: lang,
                      styles: (_styles_Menu_module_scss__WEBPACK_IMPORTED_MODULE_5___default()),
                      url: "/category/Skin-Care?sub=Cream",
                      main: true,
                      Link: next_link__WEBPACK_IMPORTED_MODULE_1__.default,
                      name: t("Cream"),
                      img: "skin-care/Cream.png"
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SubMenuLi, {
                      lang: lang,
                      styles: (_styles_Menu_module_scss__WEBPACK_IMPORTED_MODULE_5___default()),
                      url: "/category/Skin-Care?sub=Essence",
                      main: true,
                      Link: next_link__WEBPACK_IMPORTED_MODULE_1__.default,
                      name: t("Essence"),
                      img: "skin-care/Essence.png"
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SubMenuLi, {
                      lang: lang,
                      styles: (_styles_Menu_module_scss__WEBPACK_IMPORTED_MODULE_5___default()),
                      url: "/category/Skin-Care?sub=Face-Roller",
                      main: true,
                      Link: next_link__WEBPACK_IMPORTED_MODULE_1__.default,
                      name: t("Face Roller"),
                      img: "skin-care/Roller.png"
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SubMenuLi, {
                      lang: lang,
                      styles: (_styles_Menu_module_scss__WEBPACK_IMPORTED_MODULE_5___default()),
                      url: "/category/Skin-Care?sub=Kit",
                      main: true,
                      Link: next_link__WEBPACK_IMPORTED_MODULE_1__.default,
                      name: t("Kit"),
                      img: "skin-care/Kit.png"
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SubMenuLi, {
                      lang: lang,
                      styles: (_styles_Menu_module_scss__WEBPACK_IMPORTED_MODULE_5___default()),
                      url: "/category/Skin-Care?sub=Scrub",
                      main: true,
                      Link: next_link__WEBPACK_IMPORTED_MODULE_1__.default,
                      name: t("Scrub"),
                      img: "skin-care/Scrub.png"
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SubMenuLi, {
                      lang: lang,
                      styles: (_styles_Menu_module_scss__WEBPACK_IMPORTED_MODULE_5___default()),
                      url: "/category/Skin-Care?sub=Serum",
                      main: true,
                      Link: next_link__WEBPACK_IMPORTED_MODULE_1__.default,
                      name: t("Serum"),
                      img: "skin-care/Serum.png"
                    })]
                  })
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                  className: (_styles_Menu_module_scss__WEBPACK_IMPORTED_MODULE_5___default().sub_menu_li),
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                    className: (_styles_Menu_module_scss__WEBPACK_IMPORTED_MODULE_5___default().sub_menu_li_ul),
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SubMenuLi, {
                      lang: lang,
                      styles: (_styles_Menu_module_scss__WEBPACK_IMPORTED_MODULE_5___default()),
                      url: "/category/Skin-Care?sub=Sun-Care",
                      main: true,
                      Link: next_link__WEBPACK_IMPORTED_MODULE_1__.default,
                      name: t("Sun Care"),
                      img: "skin-care/Sun_cream.png"
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SubMenuLi, {
                      lang: lang,
                      styles: (_styles_Menu_module_scss__WEBPACK_IMPORTED_MODULE_5___default()),
                      url: "/category/Skin-Care?sub=Soothing-Gel",
                      main: true,
                      Link: next_link__WEBPACK_IMPORTED_MODULE_1__.default,
                      name: t("Soothing Gel"),
                      img: "skin-care/Soothing_gel.png"
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SubMenuLi, {
                      lang: lang,
                      styles: (_styles_Menu_module_scss__WEBPACK_IMPORTED_MODULE_5___default()),
                      url: "/category/Skin-Care?sub=Toner",
                      main: true,
                      Link: next_link__WEBPACK_IMPORTED_MODULE_1__.default,
                      name: t("Toner"),
                      img: "skin-care/Toner.png"
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SubMenuLi, {
                      lang: lang,
                      styles: (_styles_Menu_module_scss__WEBPACK_IMPORTED_MODULE_5___default()),
                      url: "/category/Skin-Care?sub=Lip-Care",
                      main: true,
                      Link: next_link__WEBPACK_IMPORTED_MODULE_1__.default,
                      name: t("Lip Care"),
                      img: "skin-care/Lipsticks.png",
                      t: t,
                      childs: [{
                        name: t("Lip Balm"),
                        url: "Skin-Care?sub=Lip-Care&child=Lip-Balm"
                      }, {
                        name: t("Lip Sleeping Mask"),
                        url: "Skin-Care?sub=Lip-Care&child=Lip-Sleeping-Mask"
                      }]
                    })]
                  })
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                  className: (_styles_Menu_module_scss__WEBPACK_IMPORTED_MODULE_5___default().sub_menu_li),
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                    className: (_styles_Menu_module_scss__WEBPACK_IMPORTED_MODULE_5___default().sub_menu_li_ul),
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SubMenuLi, {
                      lang: lang,
                      styles: (_styles_Menu_module_scss__WEBPACK_IMPORTED_MODULE_5___default()),
                      url: "/category/Skin-Care?sub=Cleansers",
                      main: true,
                      Link: next_link__WEBPACK_IMPORTED_MODULE_1__.default,
                      name: t("Cleansers"),
                      img: "skin-care/Cleaner.png",
                      t: t,
                      childs: [{
                        name: "Cleansing Balms",
                        url: "Skin-Care?sub=Cleansers&child=Cleansing-Balms"
                      }, {
                        name: "Cleansing Gels",
                        url: "Skin-Care?sub=Cleansers&child=Cleansing-Gels"
                      }, {
                        name: "Cleansing Oils",
                        url: "Skin-Care?sub=Cleansers&child=Cleansing-Oils"
                      }, {
                        name: "Cleansing Waters",
                        url: "Skin-Care?sub=Cleansers&child=Cleansing-Waters"
                      }, {
                        name: "Face Wipes",
                        url: "Skin-Care?sub=Cleansers&child=Face-Wipes"
                      }, {
                        name: "Facial Cleansing bars",
                        url: "Skin-Care?sub=Cleansers&child=Facial-Cleansing-bars"
                      }, {
                        name: "Foaming Cleansers",
                        url: "Skin-Care?sub=Cleansers&child=Foaming-Cleansers"
                      }, {
                        name: "Make Up Removers",
                        url: "Skin-Care?sub=Cleansers&child=Make-Up-Removers"
                      }]
                    })
                  })
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                  className: (_styles_Menu_module_scss__WEBPACK_IMPORTED_MODULE_5___default().sub_menu_li),
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                    className: (_styles_Menu_module_scss__WEBPACK_IMPORTED_MODULE_5___default().sub_menu_li_ul),
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SubMenuLi, {
                      lang: lang,
                      styles: (_styles_Menu_module_scss__WEBPACK_IMPORTED_MODULE_5___default()),
                      url: "/category/Skin-Care?sub=Eye",
                      main: true,
                      Link: next_link__WEBPACK_IMPORTED_MODULE_1__.default,
                      name: t("Eye"),
                      img: "skin-care/Eye.png",
                      t: t,
                      childs: [{
                        name: "Eye Cream",
                        url: "Skin-Care?sub=Cleansers&child=Eye-Cream"
                      }, {
                        name: "Eye Patch",
                        url: "Skin-Care?sub=Cleansers&child=Eye-Patch"
                      }, {
                        name: "Eye Serum",
                        url: "Skin-Care?sub=Cleansers&child=Eye-Serum"
                      }]
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SubMenuLi, {
                      lang: lang,
                      styles: (_styles_Menu_module_scss__WEBPACK_IMPORTED_MODULE_5___default()),
                      url: "/category/Skin-Care?sub=Masks-&-Exfolators",
                      main: true,
                      Link: next_link__WEBPACK_IMPORTED_MODULE_1__.default,
                      name: t("Masks & Exfolators"),
                      img: "skin-care/Mask.png",
                      t: t,
                      childs: [{
                        name: "Exfoliators",
                        url: "Skin-Care?sub=Masks-&-Exfolators&child=Exfoliators"
                      }, {
                        name: "Mask Sheet",
                        url: "Skin-Care?sub=Masks-&-Exfolators&child=Mask-Sheet"
                      }, {
                        name: "Patchs",
                        url: "Skin-Care?sub=Masks-&-Exfolators&child=Patchs"
                      }, {
                        name: "Wash Off Mask",
                        url: "Skin-Care?sub=Masks-&-Exfolators&child=Wash-Off-Mask"
                      }]
                    })]
                  })
                })]
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
            className: (_styles_Menu_module_scss__WEBPACK_IMPORTED_MODULE_5___default().nav_main_li),
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__.default, {
              href: "/category/Body-Care",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                className: (_styles_Menu_module_scss__WEBPACK_IMPORTED_MODULE_5___default().nav_main_a),
                "data-index": 2,
                onMouseEnter: handleHover,
                children: [" ", t("Body Care")]
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
              className: (_styles_Menu_module_scss__WEBPACK_IMPORTED_MODULE_5___default().sub_menu),
              children: active == 2 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                  className: (_styles_Menu_module_scss__WEBPACK_IMPORTED_MODULE_5___default().sub_menu_li),
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                    className: (_styles_Menu_module_scss__WEBPACK_IMPORTED_MODULE_5___default().sub_menu_li_ul),
                    children: bodycare[0].map((item, index) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SubMenuLi, {
                      lang: lang,
                      styles: (_styles_Menu_module_scss__WEBPACK_IMPORTED_MODULE_5___default()),
                      url: `/category/${item.url}`,
                      Link: next_link__WEBPACK_IMPORTED_MODULE_1__.default,
                      name: t(item.name),
                      img: item.image,
                      childs: item.items,
                      t: t
                    }, index))
                  })
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                  className: (_styles_Menu_module_scss__WEBPACK_IMPORTED_MODULE_5___default().sub_menu_li),
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                    className: (_styles_Menu_module_scss__WEBPACK_IMPORTED_MODULE_5___default().sub_menu_li_ul),
                    children: bodycare[1].map((item, index) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SubMenuLi, {
                      lang: lang,
                      styles: (_styles_Menu_module_scss__WEBPACK_IMPORTED_MODULE_5___default()),
                      url: `/category/${item.url}`,
                      Link: next_link__WEBPACK_IMPORTED_MODULE_1__.default,
                      name: t(item.name),
                      img: item.image,
                      t: t,
                      childs: item.items
                    }, index))
                  })
                })]
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
            className: (_styles_Menu_module_scss__WEBPACK_IMPORTED_MODULE_5___default().nav_main_li),
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__.default, {
              href: "/category/Hair-Care",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                className: (_styles_Menu_module_scss__WEBPACK_IMPORTED_MODULE_5___default().nav_main_a),
                "data-index": 3,
                onMouseEnter: handleHover,
                children: [" ", t("Hair Care")]
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
              className: (_styles_Menu_module_scss__WEBPACK_IMPORTED_MODULE_5___default().sub_menu),
              children: active == 3 && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                  className: (_styles_Menu_module_scss__WEBPACK_IMPORTED_MODULE_5___default().sub_menu_li),
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                    className: (_styles_Menu_module_scss__WEBPACK_IMPORTED_MODULE_5___default().sub_menu_li_ul),
                    children: haircare[0].map((item, index) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SubMenuLi, {
                      lang: lang,
                      styles: (_styles_Menu_module_scss__WEBPACK_IMPORTED_MODULE_5___default()),
                      url: `/category/${item.url}`,
                      Link: next_link__WEBPACK_IMPORTED_MODULE_1__.default,
                      name: t(item.name),
                      img: item.image,
                      childs: item.items,
                      t: t
                    }, index))
                  })
                })
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
            className: (_styles_Menu_module_scss__WEBPACK_IMPORTED_MODULE_5___default().nav_main_li),
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__.default, {
              href: "/category/Makeup",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                className: (_styles_Menu_module_scss__WEBPACK_IMPORTED_MODULE_5___default().nav_main_a),
                "data-index": 4,
                onMouseEnter: handleHover,
                children: [" ", t("Makeup")]
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
              className: (_styles_Menu_module_scss__WEBPACK_IMPORTED_MODULE_5___default().sub_menu),
              children: active == 4 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                  className: (_styles_Menu_module_scss__WEBPACK_IMPORTED_MODULE_5___default().sub_menu_li),
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                    className: (_styles_Menu_module_scss__WEBPACK_IMPORTED_MODULE_5___default().sub_menu_li_ul),
                    children: makeup[0].map((item, index) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SubMenuLi, {
                      lang: lang,
                      styles: (_styles_Menu_module_scss__WEBPACK_IMPORTED_MODULE_5___default()),
                      url: `/category/${item.url}`,
                      Link: next_link__WEBPACK_IMPORTED_MODULE_1__.default,
                      name: t(item.name),
                      img: item.image,
                      childs: item.items,
                      t: t
                    }, index))
                  })
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                  className: (_styles_Menu_module_scss__WEBPACK_IMPORTED_MODULE_5___default().sub_menu_li),
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                    className: (_styles_Menu_module_scss__WEBPACK_IMPORTED_MODULE_5___default().sub_menu_li_ul),
                    children: makeup[1].map((item, index) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SubMenuLi, {
                      lang: lang,
                      styles: (_styles_Menu_module_scss__WEBPACK_IMPORTED_MODULE_5___default()),
                      url: `/category/${item.url}`,
                      Link: next_link__WEBPACK_IMPORTED_MODULE_1__.default,
                      name: t(item.name),
                      img: item.image,
                      childs: item.items,
                      t: t
                    }, index))
                  })
                })]
              })
            })]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
            className: (_styles_Menu_module_scss__WEBPACK_IMPORTED_MODULE_5___default().nav_main_li),
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__.default, {
              href: "/category/Fragrance",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                className: (_styles_Menu_module_scss__WEBPACK_IMPORTED_MODULE_5___default().nav_main_a),
                children: [" ", t("Fragrance")]
              })
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
            className: (_styles_Menu_module_scss__WEBPACK_IMPORTED_MODULE_5___default().nav_main_li),
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__.default, {
              href: "/category/Accessories",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                className: (_styles_Menu_module_scss__WEBPACK_IMPORTED_MODULE_5___default().nav_main_a),
                "data-index": 6,
                onMouseEnter: handleHover,
                children: [" ", t("Accessories")]
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
              className: (_styles_Menu_module_scss__WEBPACK_IMPORTED_MODULE_5___default().sub_menu),
              children: active == 6 && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                  className: (_styles_Menu_module_scss__WEBPACK_IMPORTED_MODULE_5___default().sub_menu_li),
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                    className: (_styles_Menu_module_scss__WEBPACK_IMPORTED_MODULE_5___default().sub_menu_li_ul),
                    children: accessories[0].map((item, index) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SubMenuLi, {
                      lang: lang,
                      styles: (_styles_Menu_module_scss__WEBPACK_IMPORTED_MODULE_5___default()),
                      url: `/category/${item.url}`,
                      Link: next_link__WEBPACK_IMPORTED_MODULE_1__.default,
                      name: t(item.name),
                      img: item.image,
                      childs: item.items,
                      t: t
                    }, index))
                  })
                })
              })
            })]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
            className: (_styles_Menu_module_scss__WEBPACK_IMPORTED_MODULE_5___default().nav_main_li),
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__.default, {
              href: "/campaigns",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                className: (_styles_Menu_module_scss__WEBPACK_IMPORTED_MODULE_5___default().nav_main_a),
                children: [" ", t("Campaigns")]
              })
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
            className: (_styles_Menu_module_scss__WEBPACK_IMPORTED_MODULE_5___default().nav_main_li),
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__.default, {
              href: "/best-selling",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                className: (_styles_Menu_module_scss__WEBPACK_IMPORTED_MODULE_5___default().nav_main_a),
                children: [" ", t("Best Selling")]
              })
            })
          })]
        })
      })
    })
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_i18n__WEBPACK_IMPORTED_MODULE_4__.withTranslation)("menu")(Menu));

/***/ }),

/***/ 2341:
/***/ ((module) => {

// Exports
module.exports = {
	"menu_container": "Menu_menu_container__1jI2-",
	"nav": "Menu_nav__kraOz",
	"nav_main_ul": "Menu_nav_main_ul__1fK3k",
	"nav_main_li": "Menu_nav_main_li__g9shh",
	"nav_main_a": "Menu_nav_main_a__50nNa",
	"sub_menu": "Menu_sub_menu__fHiyF",
	"sub_menu_li": "Menu_sub_menu_li__1RU62",
	"sub_menu_li_ul": "Menu_sub_menu_li_ul__10szG",
	"main": "Menu_main__1kAeB",
	"childs": "Menu_childs__HQrVy"
};


/***/ }),

/***/ 2431:
/***/ (() => {

/* (ignored) */

/***/ })

};
;