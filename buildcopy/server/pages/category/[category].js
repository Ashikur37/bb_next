(() => {
var exports = {};
exports.id = 5694;
exports.ids = [5694,2431,5660];
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

/***/ 3377:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _category_),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./i18n.js
var i18n = __webpack_require__(2625);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: ./components/layout/partials/Header.js
var Header = __webpack_require__(5773);
// EXTERNAL MODULE: external "react-media"
var external_react_media_ = __webpack_require__(9533);
var external_react_media_default = /*#__PURE__*/__webpack_require__.n(external_react_media_);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "algoliasearch/lite"
var lite_ = __webpack_require__(8019);
var lite_default = /*#__PURE__*/__webpack_require__.n(lite_);
// EXTERNAL MODULE: external "react-instantsearch-dom"
var external_react_instantsearch_dom_ = __webpack_require__(542);
;// CONCATENATED MODULE: ./public/static/category.js
const arabic = {
  "Skin Care": "العناية بالبشرة",
  "Body Care": "العناية بالجسم",
  "Hair Care": "العناية بالشعر",

  /*****/
  "Skin-Care": "العناية بالبشرة",
  "Body-Care": "العناية بالجسم",
  "Hair-Care": "العناية بالشعر",
  "Makeup": "ميك اب",
  "Cleansers": "غسول",
  "Essence": "الجوهر",
  "Eye": "العين",
  "Lip-Care": "العناية بالشفاه",
  "Scrub": "مقشر",
  "Sun-Care": "العناية من الشمس",
  "Toner": "تونر",
  "Bath": "ادوات الاستحمام",
  "BB-Body-Cream": "بي بي كريم للجسم",
  "Body-Sun-Care": "العناية بالجسم من الشمس",
  "Lotion": "لوشن",
  "Hand-&-Foot-Care": "العناية باليد و القدم",
  "Intimate-Care": "العناية الحميمة",
  "Conditioner": "بلسم",
  "Treatment": "معالج",
  "Hair-Color": "لون الشعر",
  "Shampoo": "شامبو",
  "Base-Makeup": "الاساس للمكياج",
  "Beauty-Accessories": "ادوات التجميل",
  "Blusher": "احمر الخدود/بلاشر",
  "Eye": "العين",
  "Highlighter": "هايلايتر",
  "Lip": "الشفاة",
  "Serum": "سيروم",
  "Cream": "كريم",
  "Soothing-Gel": "جل التخفيف",
  "Lip-Tint": "لون الشفاه",
  "Offer": "تنريلات",
  "Bundle-Set": "مجموعة الحزمة",
  "lipstick": "روج",
  "Hand-Sanitizer": "معقم اليد",
  "Hand-Mask": "قناع اليد",
  "Foot-Mask": "قناع القدم",
  "Hair-Serum": "سيروم الشعر",
  "Eye-Liner": "محدد العين/ايلاينر",
  "Hair-Cream-&-Masks": "ماسك و كريم الشعر",
  "Mascara": "ماسكارا",
  "Cushion": "كريم اساس السفنجية/كوشن ",
  "EyeBrow": "الحواجب",
  "Eye-Shadow": "ظل العين",
  "Face-Roller": " رولر للوجه",
  "Kit": "طقم",
  "Cleansing-Balms": "غسول بلسمي",
  "Cleansing-Oils": "غسول زيتي",
  "Make-Up-Removers": "مريل المكياج",
  "Face-Wipes": "مناديل الوجه للعناية",
  "Cleansing-Gels": "جل للغسول",
  "Cleansing-Waters": "غسول مائي",
  "Facial-Cleansing-bars": "غسول شريط الصابون",
  "Eye-Cream": "كريم العين",
  "Eye-Serum": "سيروم العين",
  "Eye-Patch": "قناع العين",
  "Foaming-Cleansers": "غسول رغوي",
  "Masks-&-Exfolators": "اقنعة و مقشرات",
  "Mask-Sheet": "قناع ورقي",
  "Wash-Off-Mask": "قناع يغسل",
  "Exfoliators": "مقشرات",
  "Hand-Cream": "كريم اليد",
  "Lip-Balm": "بلسم الشفاه",
  "Lip-Sleeping-Mask": "قناع النوم للشفاه",
  "Patchs": "لصقات البقع",
  "ampoule": "امبولة",
  "CRAYON": "كرايون ",
  "Fragrance": "العطور",
  "Accessories": "اكسسوارات",
  "Women's-Fashion-Jewelry": "مجوهرات النسائية",
  "Beauty-Tools": "ادوات التجميل",
  "Dump-Stock": "تفريغ المحزون"
};
/* harmony default export */ const category = (arabic);
// EXTERNAL MODULE: external "qs"
var external_qs_ = __webpack_require__(6850);
var external_qs_default = /*#__PURE__*/__webpack_require__.n(external_qs_);
;// CONCATENATED MODULE: ./components/URLSync.js


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


 // import en from "../public/static/category_en";


const updateAfter = 500;
const routeStateDefaultValues = {
  query: "",
  page: "1",
  category: "",
  category_ar: "",
  sub: "",
  child: "",
  price: "",
  rank: "",
  sortBy: "products",
  hitsPerPage: "21"
}; // Returns a slug from the category name.
// Spaces are replaced by "-" to make
// the URL easier to read and other
// characters are encoded.

function getCategorySlug(name, sub, child) {
  let url = name.split(" ").join("-");

  if (sub) {
    url += `?sub=${sub}`;
  }

  if (child) {
    url += `&child=${child}`;
  }

  return url;
} // Returns a name from the category slug.
// The "-" are replaced by spaces and other
// characters are decoded.


function getCategoryName(slug) {
  const decodedSlug =
  /* encodedCategories[slug] ||  */
  slug;
  return slug.split("-").map(decodeURIComponent).join(" "); //.replace(/\-and\-/s, "-&-");

  return decodedSlug.split("-").map(decodeURIComponent).join(" ").replace(/\//g, " > ");
}

function setArabic(val) {
  return category[val];
}

const searchStateToURL = (searchState, lang = "en") => {
  let clicked = [];
  let hlen = 0;

  if (searchState.hierarchicalMenu) {
    // if (lang == "ar_QA") {
    //   clicked = searchState.hierarchicalMenu["product.hierarchicalCategories.lvl0.ar_QA"].split(" < ");
    // }else{
    clicked = searchState.hierarchicalMenu["product.hierarchicalCategories.lvl0.en"].split(" > "); // }

    hlen = clicked.length;
  }

  const routeState = {
    // query: searchState.query,
    category: clicked[0].split(" ").join("-"),
    //searchState.category && searchState.category
    category_ar: setArabic(clicked[0].split(" ").join("-")),
    //searchState.category_ar && searchState.category_ar,
    sub: hlen > 1 ? clicked[1].split(" ").join("-") : "",
    //searchState.sub && searchState.sub,
    child: hlen > 2 ? clicked[2].split(" ").join("-") : "",
    //searchState.child && searchState.child,
    sub_ar: hlen > 1 ? setArabic(clicked[1].split(" ").join("-")) : "",
    //searchState.sub_ar && searchState.sub_ar,
    child_ar: hlen > 2 ? setArabic(clicked[2].split(" ").join("-")) : "",
    //searchState.child_ar && searchState.child_ar,
    page: String(searchState.page),
    price: searchState.range && searchState.range["product.price.amount"] && `${searchState.range["product.price.amount"].min || ""}:${searchState.range["product.price.amount"].max || ""}`,
    rank: searchState.multiRange ? searchState.multiRange["product.price.amount"] && `${searchState.multiRange["product.price.amount"] || ""}` : searchState.rank,
    sortBy: searchState.sortBy,
    hitsPerPage: searchState.hitsPerPage && String(searchState.hitsPerPage) || undefined
  };
  const {
    protocol,
    hostname,
    port = "",
    pathname,
    hash
  } = location;
  const portWithPrefix = port === "" ? "" : `:${port}`;
  const urlParts = location.href.match(/^(.*?)\/category/);
  const baseUrl = urlParts && urlParts[0] || `${protocol}//${hostname}${portWithPrefix}${pathname}`;
  const categoryPath = routeState.category ? `${getCategorySlug(routeState.category, routeState.sub, routeState.child)}` : "";
  const queryParameters = {};

  if (routeState.query && routeState.query !== routeStateDefaultValues.query) {
    queryParameters.query = routeState.query;
  }

  if (routeState.page && routeState.page !== routeStateDefaultValues.page) {
    queryParameters.page = routeState.page;
  }

  if (routeState.price && routeState.price !== routeStateDefaultValues.price) {
    queryParameters.price = routeState.price;
  }

  if (routeState.rank && routeState.rank !== routeStateDefaultValues.rank) {
    queryParameters.rank = routeState.rank;
  }

  if (routeState.sortBy && routeState.sortBy !== routeStateDefaultValues.sortBy) {
    queryParameters.sortBy = routeState.sortBy;
  }

  if (routeState.hitsPerPage && routeState.hitsPerPage !== routeStateDefaultValues.hitsPerPage) {
    queryParameters.hitsPerPage = routeState.hitsPerPage;
  }

  const queryString = external_qs_default().stringify(queryParameters, {
    addQueryPrefix: true,
    arrayFormat: "indices"
  });
  return `${baseUrl}/${categoryPath}${queryString}${hash}`;
};

const urlToSearchState = location => {
  const pathnameMatches = location.pathname.match(/category\/(.*?)\/?$/);
  const category = getCategoryName(pathnameMatches && pathnameMatches[1] || "");
  let category_ar = null; // let sub_ar = null;
  // let child_ar = null;

  const queryParameters = external_qs_default().parse(location.search.slice(1));
  const {
    query = "",
    sub = "",
    child = "",
    page = 1,
    price,
    rank,
    hitsPerPage,
    sortBy
  } = queryParameters; // `qs` does not return an array when there's a single value.
  // const allBrands = Array.isArray(brands) ? brands : [brands].filter(Boolean);

  const searchState = {
    range: {},
    rank: ""
  };

  if (query) {
    searchState.query = decodeURIComponent(query);
  }

  if (sub) {
    searchState.sub = decodeURIComponent(sub);
    searchState.sub_ar = setArabic(decodeURIComponent(child));
  }

  if (child) {
    searchState.child = decodeURIComponent(child);
    searchState.child_ar = setArabic(decodeURIComponent(child));
  }

  if (page) {
    searchState.page = decodeURIComponent(page);
  }

  if (category) {
    category_ar = setArabic(category);
    searchState.hierarchicalMenu = {
      "product.hierarchicalCategories.lvl0.en": category
    };

    if (category_ar) {
      searchState.hierarchicalMenu = {
        "product.hierarchicalCategories.lvl0.ar_QA": category_ar
      };
    }
  }

  if (price) {
    const [min, max = undefined] = price.split(":");
    searchState.range["product.price.amount"] = {
      min: min || undefined,
      max: max || undefined
    };
  }

  if (rank) {
    searchState.rank = rank;
  }

  if (sortBy) {
    searchState.sortBy = sortBy;
  }

  if (hitsPerPage) {
    searchState.hitsPerPage = hitsPerPage;
  }

  return searchState;
};

let debouncedSetState = 0;

const withURLSync = CategoryPage => {
  var _temp;

  return _temp = class WithURLSync extends external_react_.Component {
    constructor(...args) {
      super(...args);

      _defineProperty(this, "state", {
        searchState: ""
      });

      _defineProperty(this, "onPopState", ({
        state
      }) => {
        this.setState({
          searchState: state || {}
        });
      });

      _defineProperty(this, "onSearchStateChange", searchState => {
        clearTimeout(debouncedSetState);
        debouncedSetState = setTimeout(() => {
          window.history.pushState(searchState, null, searchStateToURL(searchState, this.props.lang));
        }, updateAfter);
        this.setState({
          searchState
        });
      });
    }

    componentDidMount() {
      this.setState({
        searchState: urlToSearchState(window.location)
      });
      window.addEventListener("popstate", this.onPopState);
    }

    componentWillUnmount() {
      clearTimeout(debouncedSetState);
      window.removeEventListener("popstate", this.onPopState);
    }

    render() {
      const {
        searchState
      } = this.state;

      if (searchState) {
        return /*#__PURE__*/jsx_runtime_.jsx(CategoryPage, _objectSpread(_objectSpread({}, this.props), {}, {
          searchState: searchState,
          onSearchStateChange: this.onSearchStateChange,
          createURL: searchStateToURL
        }));
      } else {
        return null;
      }
    }

  }, _temp;
};

/* harmony default export */ const URLSync = (withURLSync);
// EXTERNAL MODULE: ./components/atom/SingleProduct.jsx
var SingleProduct = __webpack_require__(7043);
// EXTERNAL MODULE: external "@fortawesome/free-solid-svg-icons"
var free_solid_svg_icons_ = __webpack_require__(887);
// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__(799);
;// CONCATENATED MODULE: ./pages/category/[category].js




function _category_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _category_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { _category_ownKeys(Object(source), true).forEach(function (key) { _category_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { _category_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _category_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








 // import RheostatRangeSlider from "../../components/atom/RheostatRangeSlider";



 // import CustomRangeSlider from "../../components/atom/CustomRangeSlider";



const searchClient = lite_default()({"appId":"4F2AV10UAX","appKey":"b7e52f6f6ad165b30cfdc3d0e2e3e67d"}.appId, {"appId":"4F2AV10UAX","appKey":"b7e52f6f6ad165b30cfdc3d0e2e3e67d"}.appKey);
const initialState = {
  device: "mobile" // this is a config for SSR, which helps to set the initial device props

};

const CategoryPage = props => {
  const {
    t
  } = props;
  const router = (0,router_.useRouter)();
  const {
    0: categoryName,
    1: setCategoryName
  } = (0,external_react_.useState)("");
  const {
    0: subCategoryName,
    1: setSubCategoryName
  } = (0,external_react_.useState)("");
  const {
    0: subCategoryChild,
    1: setSubCategoryChild
  } = (0,external_react_.useState)("");
  const {
    0: selected,
    1: setSelected
  } = (0,external_react_.useState)(null);
  const {
    0: locale,
    1: setLocale
  } = (0,external_react_.useState)("en");
  const {
    0: mFilter,
    1: setMfilter
  } = (0,external_react_.useState)(false);
  (0,external_react_.useEffect)(() => {
    var _props$context$catego;

    setCategoryName((_props$context$catego = props.context.category) === null || _props$context$catego === void 0 ? void 0 : _props$context$catego.split("-").join(" "));
    window.scrollTo(0, 0);
    router.push(router.asPath, undefined, {
      shallow: true
    });
  }, []);
  (0,external_react_.useEffect)(() => {
    setLocale(props.lang);
  }, [props.lang]);
  (0,external_react_.useEffect)(() => {
    setSubCategoryName(router.query.sub ? decodeURIComponent(router.asPath.split("=")[1].replace(/\&child/s, "").replace(/\?page.*/s, "&page").replace(/\&page.*/s, "")).replace(/\?rank.*/s, "&rank").replace(/\&rank.*/s, "").replace(/\?price.*/s, "").replace(/\&price.*/s, "").replace(/\?query.*/s, "") : "");
    setSubCategoryChild(router.query.child ? decodeURIComponent(router.asPath.split("=")[2].replace(/\?page.*/s, "").replace(/\&page.*/s, "&page")).replace(/\?rank.*/s, "&rank").replace(/\&rank.*/s, "").replace(/\?price.*/s, "").replace(/\&price.*/s, "").replace(/\?query.*/s, "") : "");

    if (props.searchState.hierarchicalMenu) {
      if (subCategoryName !== "" && subCategoryChild === "") {
        setSelected(subCategoryName);
      }

      if (subCategoryChild !== "" && subCategoryName !== "") {
        setSelected(subCategoryChild);
      }

      if (subCategoryChild === "" && subCategoryName === "") {
        setSelected(categoryName);
      }

      setCategoryName(router.query.category);
    } else {
      if (props.router) {
        props.router.history.goBack();
      } else {
        router.back();
      }
    }
  }, [props.context, props.lang, selected, categoryName]);
  (0,external_react_.useEffect)(() => {
    let searchState = props.searchState;

    if (subCategoryName !== "" && subCategoryChild === "") {
      searchState.hierarchicalMenu["product.hierarchicalCategories.lvl0.en"] = `${router.query.category.split("-").join(" ")} > ${subCategoryName.split("-").join(" ")}`;
      setSelected(subCategoryName.split("-").join(" ")); // if (props.lang == "ar_QA") {

      searchState.hierarchicalMenu["product.hierarchicalCategories.lvl0.ar_QA"] = searchState.category_ar + " > " + category[subCategoryName]; // }
    }

    if (subCategoryChild !== "" && subCategoryName !== "") {
      searchState.hierarchicalMenu["product.hierarchicalCategories.lvl0.en"] = `${router.query.category.split("-").join(" ")} > ${subCategoryName.split("-").join(" ")} > ${subCategoryChild.split("-").join(" ")}`; // if (props.lang == "ar_QA") {

      searchState.hierarchicalMenu["product.hierarchicalCategories.lvl0.ar_QA"] = searchState.category_ar + " > " + searchState.sub_ar + " > " + searchState.child_ar; // }

      setSelected(subCategoryChild.split("-").join(" "));
    }

    if (subCategoryChild === "" && subCategoryName === "") {
      searchState.hierarchicalMenu["product.hierarchicalCategories.lvl0.en"] = `${router.query.category.split("-").join(" ")}`; // if (props.lang == "ar_QA") {

      searchState.hierarchicalMenu["product.hierarchicalCategories.lvl0.ar_QA"] = searchState.category_ar; // }

      setSelected(categoryName.split("-").join(" "));
    }

    setCategoryName(props.context.category.split("-").join(" "));
    searchState.sub = subCategoryName;
    searchState.child = subCategoryChild;
    searchState.category = categoryName;
    searchState.category_ar = category[categoryName];
    searchState.sub_ar = category[subCategoryName];
    searchState.child_ar = category[subCategoryChild];
    searchState.locale = props.lang;
  }, [props.context, props.lang, subCategoryName, subCategoryChild, selected, router]);

  const Hit = ({
    hit
  }) => /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "product_wrapper",
    children: /*#__PURE__*/jsx_runtime_.jsx(SingleProduct.default, {
      product: hit.product,
      locale: locale
    })
  });

  const ClearRefinements = ({
    items,
    refine
  }) => {
    return /*#__PURE__*/jsx_runtime_.jsx("button", {
      onClick: () => refine(items),
      className: !items.length ? "ais-ClearRefinements-button ais-ClearRefinements-button--disabled" : "ais-ClearRefinements-button",
      disabled: !items.length,
      children: "Clear all filters"
    });
  };

  const CustomClearRefinements = (0,external_react_instantsearch_dom_.connectCurrentRefinements)(ClearRefinements);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("title", {
        children: [categoryName, " | BeautyBooth"]
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1.0"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx((external_react_media_default()), {
      queries: {
        medium: "(max-width: 991px)"
      },
      defaultMatches: {
        medium: initialState.device === "mobile"
      },
      render: () => /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "category_page",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "container",
            children: [/*#__PURE__*/jsx_runtime_.jsx(Header.default, {
              text: t(selected)
            }), /*#__PURE__*/jsx_runtime_.jsx(external_react_instantsearch_dom_.InstantSearch, {
              searchClient: searchClient,
              indexName: "products",
              searchState: props.searchState,
              createURL: props.createURL,
              onSearchStateChange: props.onSearchStateChange,
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "row",
                children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "col-12",
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: "filterContainer",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                      className: "sortItem",
                      children: /*#__PURE__*/jsx_runtime_.jsx(external_react_instantsearch_dom_.SortBy, {
                        defaultRefinement: "products",
                        items: [{
                          value: "products",
                          label: "Price High to Low"
                        }, {
                          value: "instant_search",
                          label: "Price Low to High"
                        }]
                      })
                    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                      className: "filterItem",
                      children: /*#__PURE__*/jsx_runtime_.jsx("button", {
                        onClick: () => setMfilter(!mFilter),
                        children: "Filter By"
                      })
                    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                      className: mFilter ? "filterItemContainer active" : "filterItemContainer",
                      children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                        onClick: () => setMfilter(false),
                        className: "cancleBtn",
                        children: /*#__PURE__*/jsx_runtime_.jsx(react_fontawesome_.FontAwesomeIcon, {
                          icon: free_solid_svg_icons_.faWindowClose,
                          size: "3x"
                        })
                      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                        onClick: () => setMfilter(false),
                        className: "filter__left"
                      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                        className: "filterInner",
                        children: [/*#__PURE__*/jsx_runtime_.jsx(CustomClearRefinements, {
                          transformItems: items => items.filter(({
                            attribute
                          }) => attribute !== "product.categories.name")
                        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                          className: "custom__accordion",
                          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                            className: "single__accordion",
                            children: [/*#__PURE__*/jsx_runtime_.jsx("input", {
                              type: "checkbox",
                              name: "new_acc",
                              id: "cat",
                              className: "accordion__input"
                            }), /*#__PURE__*/jsx_runtime_.jsx("label", {
                              className: "accordion__label",
                              htmlFor: "cat",
                              children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                                className: "refinment_title",
                                children: "Category"
                              })
                            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                              className: "accordion__content mt-md-3",
                              children: /*#__PURE__*/jsx_runtime_.jsx(external_react_instantsearch_dom_.HierarchicalMenu, {
                                attributes: ["product.hierarchicalCategories.lvl0." + props.lang, "product.hierarchicalCategories.lvl1." + props.lang, "product.hierarchicalCategories.lvl2." + props.lang],
                                limit: 15,
                                showMoreLimit: 15
                              })
                            })]
                          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                            className: "single__accordion",
                            children: [/*#__PURE__*/jsx_runtime_.jsx("input", {
                              type: "checkbox",
                              name: "new_acc",
                              id: "brand",
                              className: "accordion__input"
                            }), /*#__PURE__*/jsx_runtime_.jsx("label", {
                              className: "accordion__label",
                              htmlFor: "brand",
                              children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                                className: "refinment_title",
                                children: "Brand"
                              })
                            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                              className: "accordion__content mt-md-3",
                              children: /*#__PURE__*/jsx_runtime_.jsx(external_react_instantsearch_dom_.RefinementList, {
                                attribute: "product.attributes.Brand",
                                showMore: true
                              })
                            })]
                          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                            className: "single__accordion",
                            children: [/*#__PURE__*/jsx_runtime_.jsx("input", {
                              type: "checkbox",
                              name: "new_acc",
                              id: "concern",
                              className: "accordion__input"
                            }), /*#__PURE__*/jsx_runtime_.jsx("label", {
                              className: "accordion__label",
                              htmlFor: "concern",
                              children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                                className: "refinment_title",
                                children: "Concern"
                              })
                            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                              className: "accordion__content mt-md-3",
                              children: /*#__PURE__*/jsx_runtime_.jsx(external_react_instantsearch_dom_.RefinementList, {
                                attribute: "product.attributes.Concern",
                                showMore: true,
                                transformItems: items => items.map(item => _category_objectSpread(_category_objectSpread({}, item), {}, {
                                  label: item.label.split("-").join(" ")
                                }))
                              })
                            })]
                          })]
                        })]
                      })]
                    })]
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "col-12",
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: "categories",
                    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                      className: "hit_result_info",
                      children: [/*#__PURE__*/jsx_runtime_.jsx(external_react_instantsearch_dom_.HitsPerPage, {
                        defaultRefinement: 16,
                        items: [{
                          value: 8,
                          label: "Show 8 Products"
                        }, {
                          value: 12,
                          label: "Show 12 Products"
                        }, {
                          value: 16,
                          label: "Show 16 Products"
                        }]
                      }), /*#__PURE__*/jsx_runtime_.jsx(external_react_instantsearch_dom_.Stats, {})]
                    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_instantsearch_dom_.ScrollTo, {
                      children: [/*#__PURE__*/jsx_runtime_.jsx(external_react_instantsearch_dom_.Hits, {
                        hitComponent: Hit
                      }), " "]
                    }), /*#__PURE__*/jsx_runtime_.jsx(external_react_instantsearch_dom_.Pagination, {
                      padding: 1,
                      showLast: true
                    })]
                  })
                })]
              })
            })]
          })
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx((external_react_media_default()), {
      queries: {
        medium: "(min-width: 992px)"
      },
      defaultMatches: {
        medium: initialState.device === "mobile"
      },
      render: () => /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "category_page mt-4",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "container",
            children: /*#__PURE__*/jsx_runtime_.jsx(external_react_instantsearch_dom_.InstantSearch, {
              searchClient: searchClient,
              indexName: "products",
              searchState: props.searchState,
              createURL: props.createURL,
              onSearchStateChange: props.onSearchStateChange,
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "row",
                children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: "col-md-3",
                  children: [/*#__PURE__*/jsx_runtime_.jsx(CustomClearRefinements, {
                    clearsQuery: true,
                    transformItems: items => items.filter(({
                      attribute
                    }) => attribute !== "product.hierarchicalCategories.lvl0." + props.lang)
                  }), /*#__PURE__*/jsx_runtime_.jsx(external_react_instantsearch_dom_.NumericMenu, {
                    attribute: "product.price.amount",
                    defaultRefinement: props.searchState.rank,
                    items: [{
                      label: "0 - 50 QAR",
                      end: 50
                    }, {
                      label: "50 - 100 QAR ",
                      start: 50,
                      end: 100
                    }, {
                      label: "100 - 200 QAR",
                      start: 100,
                      end: 200
                    }, {
                      label: "200 - 400 QAR",
                      start: 200,
                      end: 400
                    }, {
                      label: "400+ QAR",
                      start: 400
                    }]
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "refinment_title",
                    children: "Category"
                  }), /*#__PURE__*/jsx_runtime_.jsx(external_react_instantsearch_dom_.HierarchicalMenu, {
                    attributes: ["product.hierarchicalCategories.lvl0." + props.lang, "product.hierarchicalCategories.lvl1." + props.lang, "product.hierarchicalCategories.lvl2." + props.lang],
                    limit: 15,
                    showMoreLimit: 15 // defaultRefinement={props.searchState.hierarchicalMenu["product.hierarchicalCategories.lvl0."+props.lang]}

                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "refinment_title",
                    children: "Brand"
                  }), /*#__PURE__*/jsx_runtime_.jsx(external_react_instantsearch_dom_.RefinementList, {
                    attribute: "product.attributes.Brand",
                    showMore: true,
                    searchable: true
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "refinment_title",
                    children: "Trending"
                  }), /*#__PURE__*/jsx_runtime_.jsx(external_react_instantsearch_dom_.RefinementList, {
                    attribute: "product.attributes.Trending",
                    showMore: true
                  })]
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: "col-md-9",
                  children: [/*#__PURE__*/jsx_runtime_.jsx(Header.default, {
                    text: t(selected)
                  }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: "categories",
                    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                      className: "hit_result_info",
                      children: [/*#__PURE__*/jsx_runtime_.jsx(external_react_instantsearch_dom_.SortBy, {
                        defaultRefinement: "products",
                        items: [{
                          value: "products",
                          label: "Price High to Low"
                        }, {
                          value: "instant_search",
                          label: "Price Low to High"
                        }]
                      }), /*#__PURE__*/jsx_runtime_.jsx(external_react_instantsearch_dom_.HitsPerPage, {
                        defaultRefinement: 21,
                        items: [{
                          value: 12,
                          label: "Show 12 Products"
                        }, {
                          value: 15,
                          label: "Show 15 Products"
                        }, {
                          value: 18,
                          label: "Show 18 Products"
                        }, {
                          value: 21,
                          label: "Show 21 Products"
                        }]
                      }), /*#__PURE__*/jsx_runtime_.jsx(external_react_instantsearch_dom_.Stats, {})]
                    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_instantsearch_dom_.ScrollTo, {
                      children: [/*#__PURE__*/jsx_runtime_.jsx(external_react_instantsearch_dom_.Hits, {
                        hitComponent: Hit
                      }), " "]
                    }), /*#__PURE__*/jsx_runtime_.jsx(external_react_instantsearch_dom_.Pagination, {
                      padding: 3,
                      showLast: true
                    })]
                  })]
                })]
              })
            })
          })
        })
      })
    })]
  });
}; // This gets called on every request


async function getServerSideProps(context) {
  // Pass data to the page via props
  return {
    props: {
      context: context.query,
      lang: context.req.language
    }
  };
}
/* harmony default export */ const _category_ = ((0,i18n.withTranslation)("menu")(URLSync(CategoryPage)));

/***/ }),

/***/ 887:
/***/ ((module) => {

"use strict";
module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ 799:
/***/ ((module) => {

"use strict";
module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ 8019:
/***/ ((module) => {

"use strict";
module.exports = require("algoliasearch/lite");

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

/***/ 6850:
/***/ ((module) => {

"use strict";
module.exports = require("qs");

/***/ }),

/***/ 9297:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 542:
/***/ ((module) => {

"use strict";
module.exports = require("react-instantsearch-dom");

/***/ }),

/***/ 9533:
/***/ ((module) => {

"use strict";
module.exports = require("react-media");

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

/***/ 2431:
/***/ (() => {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [4920,1664,434,5773,7043], () => (__webpack_exec__(3377)));
module.exports = __webpack_exports__;

})();