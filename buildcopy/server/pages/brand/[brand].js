(() => {
var exports = {};
exports.id = 631;
exports.ids = [631,2431,5660];
exports.modules = {

/***/ 6658:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _brand_),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "next/dynamic"
var dynamic_ = __webpack_require__(9639);
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic_);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./components/layout/partials/Header.js
var Header = __webpack_require__(5773);
// EXTERNAL MODULE: external "algoliasearch/lite"
var lite_ = __webpack_require__(8019);
var lite_default = /*#__PURE__*/__webpack_require__.n(lite_);
// EXTERNAL MODULE: external "react-media"
var external_react_media_ = __webpack_require__(9533);
var external_react_media_default = /*#__PURE__*/__webpack_require__.n(external_react_media_);
// EXTERNAL MODULE: external "react-instantsearch-dom"
var external_react_instantsearch_dom_ = __webpack_require__(542);
// EXTERNAL MODULE: external "qs"
var external_qs_ = __webpack_require__(6850);
var external_qs_default = /*#__PURE__*/__webpack_require__.n(external_qs_);
;// CONCATENATED MODULE: ./components/brandURL.js


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const updateAfter = 100;
const routeStateDefaultValues = {
  query: "",
  page: "1",
  category: undefined,
  // brands: undefined,
  // price: '',
  rank: "",
  sortBy: "products",
  hitsPerPage: "12"
};
const encodedCategories = {
  Cameras: "Cameras & Camcorders",
  Cars: "Car Electronics & GPS",
  Phones: "Cell Phones",
  TV: "TV & Home Theater"
};
const decodedCategories = Object.keys(encodedCategories).reduce((acc, key) => {
  const newKey = encodedCategories[key];
  const newValue = key;
  return _objectSpread(_objectSpread({}, acc), {}, {
    [newKey]: newValue
  });
}, {}); // Returns a slug from the category name.
// Spaces are replaced by "-" to make
// the URL easier to read and other
// characters are encoded.

function getCategorySlug(name) {
  const encodedName = decodedCategories[name] || name;
  return encodedName[0].split(" ").map(encodeURIComponent).join("-");
} // Returns a name from the category slug.
// The "-" are replaced by spaces and other
// characters are decoded.


function getCategoryName(slug) {
  const decodedSlug = encodedCategories[slug] || slug;
  return decodedSlug.split("-").map(decodeURIComponent).join(" ").replace(/\//g, " > ");
}

const searchStateToURL = searchState => {
  const routeState = {
    query: searchState.query,
    page: String(searchState.page),
    category: searchState.refinementList && searchState.refinementList["product.categories.name"],
    // brands: searchState.refinementList && searchState.refinementList['product.attributes.Brand'],
    // price:
    //   searchState.range &&
    //   searchState.range['product.price.amount'] &&
    //   `${searchState.range['product.price.amount'].min || ''}:${searchState.range['product.price.amount'].max ||
    //     ''}`,
    rank: searchState.multiRange && searchState.multiRange["product.price.amount"] && `${searchState.multiRange["product.price.amount"] || ""}`,
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
  const urlParts = location.href.match(/^(.*?)\/brand/); // (urlParts && urlParts[0]) ||

  const baseUrl = `${protocol}//${hostname}${portWithPrefix}${pathname}`; // const categoryPath = routeState.brands
  // ? `${getCategorySlug(routeState.brands)}/`
  // : '';

  const queryParameters = {};

  if (routeState.query && routeState.query !== routeStateDefaultValues.query) {
    queryParameters.query = encodeURIComponent(routeState.query);
  }

  if (routeState.page && routeState.page !== routeStateDefaultValues.page) {
    queryParameters.page = routeState.page;
  }

  if (routeState.category && routeState.category !== routeStateDefaultValues.category) {
    queryParameters.category = routeState.category.map(decodeURIComponent);
  } // if (
  //   routeState.brands &&
  //   routeState.brands !== routeStateDefaultValues.brands
  // ) {
  //   queryParameters.brands = routeState.brands.map(encodeURIComponent);
  // }
  // if (routeState.price && routeState.price !== routeStateDefaultValues.price) {
  //   queryParameters.price = routeState.price;
  // }


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
    arrayFormat: "repeat"
  });
  return `${baseUrl}${queryString}${hash}`;
};

const urlToSearchState = location => {
  const pathnameMatches = location.pathname.match(/brand\/(.*?)\/?$/); // const brands = getCategoryName(
  //   (pathnameMatches && pathnameMatches[1]) || ''
  // );

  const queryParameters = external_qs_default().parse(location.search.slice(1));
  const {
    query = "",
    page = 1,
    // brands = [],
    category = [],
    // price,
    rank,
    hitsPerPage,
    sortBy
  } = queryParameters; // `qs` does not return an array when there's a single value.
  // const allBrands = Array.isArray(brands) ? brands : [brands].filter(Boolean);

  const allCategories = Array.isArray(category) ? category : [category].filter(Boolean);
  const searchState = {
    refinementList: []
  };

  if (query) {
    searchState.query = decodeURIComponent(query);
  }

  if (page) {
    searchState.page = page;
  }

  if (allCategories.length) {
    searchState.refinementList = {
      "product.categories.name": allCategories.map(decodeURIComponent)
    };
  }

  if (rank) {
    searchState.multiRange = {
      "product.price.amount": rank
    };
  }

  if (sortBy) {
    searchState.sortBy = sortBy;
  }

  if (hitsPerPage) {
    searchState.hitsPerPage = hitsPerPage;
  }

  return searchState;
};

const brandURL = BrandPage => {
  var _temp;

  return _temp = class brandURL extends external_react_.Component {
    constructor(props) {
      super(props);

      _defineProperty(this, "onPopState", ({
        state
      }) => this.setState({
        searchState: state || {}
      }));

      _defineProperty(this, "onSearchStateChange", searchState => {
        clearTimeout(this.debouncedSetState);
        this.debouncedSetState = setTimeout(() => {
          window.history.pushState(searchState, null, searchStateToURL(searchState));
        }, updateAfter);
        this.setState({
          searchState
        });
      });

      this.state = {
        searchState: null,
        params: props.context
      };
    }

    componentDidMount() {
      this.setState({
        searchState: urlToSearchState(window.location)
      });
      window.addEventListener("popstate", this.onPopState);
    }

    componentWillUnmount() {
      clearTimeout(this.debouncedSetState);
      window.removeEventListener("popstate", this.onPopState);
    }

    render() {
      const {
        searchState,
        params
      } = this.state;

      if (searchState) {
        return /*#__PURE__*/jsx_runtime_.jsx(BrandPage, _objectSpread(_objectSpread({}, this.props), {}, {
          searchState: searchState,
          params: params,
          onSearchStateChange: this.onSearchStateChange,
          createURL: searchStateToURL
        }));
      } else {
        return null;
      }
    }

  }, _temp;
};

/* harmony default export */ const components_brandURL = (brandURL);
// EXTERNAL MODULE: external "@fortawesome/free-solid-svg-icons"
var free_solid_svg_icons_ = __webpack_require__(887);
// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__(799);
// EXTERNAL MODULE: ./redux/actions/axios.js
var axios = __webpack_require__(6698);
// EXTERNAL MODULE: ./node_modules/next/dist/client/router.js
var router = __webpack_require__(4651);
;// CONCATENATED MODULE: ./pages/brand/[brand].jsx




function _brand_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _brand_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { _brand_ownKeys(Object(source), true).forEach(function (key) { _brand_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { _brand_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _brand_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








 // const brandURL = dynamic(() => import("../../components/brandURL"));
// import Footer from "../layout/Footer";





const SingleProduct = dynamic_default()(() => Promise.all(/* import() */[__webpack_require__.e(1664), __webpack_require__.e(434), __webpack_require__.e(7043)]).then(__webpack_require__.bind(__webpack_require__, 7043)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(7043)],
    modules: ["brand/[brand].jsx -> " + "../../components/atom/SingleProduct"]
  }
});
const CustomRangeSlider = dynamic_default()(() => __webpack_require__.e(/* import() */ 9717).then(__webpack_require__.bind(__webpack_require__, 9717)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(9717)],
    modules: ["brand/[brand].jsx -> " + "../../components/atom/CustomRangeSlider"]
  }
});
const Loader = dynamic_default()(() => __webpack_require__.e(/* import() */ 3921).then(__webpack_require__.bind(__webpack_require__, 3921)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(3921)],
    modules: ["brand/[brand].jsx -> " + "../../components/atom/Loader"]
  }
});

function BrandPage(props) {
  const {
    0: defaultNumber,
    1: setDefaultNumber
  } = (0,external_react_.useState)(1);
  const {
    0: locale,
    1: setLocale
  } = (0,external_react_.useState)("en");
  const {
    0: brandName,
    1: setBrandName
  } = (0,external_react_.useState)("");
  const {
    0: mFilter,
    1: setMfilter
  } = (0,external_react_.useState)(false);
  const searchClient = lite_default()({"appId":"4F2AV10UAX","appKey":"b7e52f6f6ad165b30cfdc3d0e2e3e67d"}.appId, {"appId":"4F2AV10UAX","appKey":"b7e52f6f6ad165b30cfdc3d0e2e3e67d"}.appKey);
  (0,external_react_.useEffect)(() => {
    window.scrollTo(0, 0);
  }, []);
  (0,external_react_.useEffect)(() => {
    let name = props.name;
    setBrandName(name.split("-").join(" "));
    setLocale(props.lang == "ar" ? "ar_QA" : "en");
    let searchState = props.searchState;
    searchState.refinementList = {
      "product.categories.name": props.searchState.refinementList["product.categories.name"] || []
    };
    searchState.page = props.params.page || 1; // searchState.multiRange="";

    searchState.sortBy = props.params.sortBy || "products";
    props.onSearchStateChange(searchState);
  }, [props.name, props.lang]);

  const Hit = ({
    hit
  }) => /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "product_wrapper",
    children: /*#__PURE__*/jsx_runtime_.jsx(SingleProduct, {
      product: hit.product,
      locale: locale
    })
  });

  const createMarkup = data => {
    return {
      __html: data
    };
  };

  const BrandDetails = () => {
    if (props.attributeDetails && props.attributeDetails[0].image && props.attributeDetails[0].translations[0].description && props.attributeDetails[0].image.featured_image) {
      return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "row",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-md-5",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "brnad_image_container",
            children: /*#__PURE__*/jsx_runtime_.jsx("img", {
              src: props.attributeDetails ? props.attributeDetails[0].image.featured_image : null,
              alt: "Brand Image"
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-md-7",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "brand_details_container",
            children: /*#__PURE__*/jsx_runtime_.jsx("p", {
              dangerouslySetInnerHTML: createMarkup(props.attributeDetails[0].translations[0].description)
            })
          })
        })]
      });
    }

    return null;
  };

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

  const paginateHandl = number => {
    console.log(number);
    setDefaultNumber(number);
  };

  const initialState = {
    device: "mobile" // this is a config for SSR, which helps to set the initial device props

  }; //

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("title", {
        children: [props.name, " | BeautyBooth"]
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
          children: props.attributeDetails ? /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "container",
            children: [/*#__PURE__*/jsx_runtime_.jsx(Header.default, {
              text: brandName
            }), /*#__PURE__*/jsx_runtime_.jsx(BrandDetails, {}), /*#__PURE__*/jsx_runtime_.jsx(external_react_instantsearch_dom_.InstantSearch, {
              searchClient: searchClient,
              indexName: "products",
              searchState: props.searchState,
              createURL: props.createURL,
              onSearchStateChange: props.onSearchStateChange,
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "row",
                children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "col",
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
                          }) => attribute !== "product.attributes.Brand")
                        }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                          className: "mb_refinment_title",
                          children: "Brand"
                        }), /*#__PURE__*/jsx_runtime_.jsx(external_react_instantsearch_dom_.RefinementList, {
                          attribute: "product.attributes.Brand",
                          defaultRefinement: [brandName],
                          showMore: true
                        }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                          className: "mb_refinment_title",
                          children: "Category"
                        }), /*#__PURE__*/jsx_runtime_.jsx(external_react_instantsearch_dom_.RefinementList, {
                          attribute: "product.categories.name",
                          showMore: true,
                          transformItems: items => items.map(item => _brand_objectSpread(_brand_objectSpread({}, item), {}, {
                            label: item.label.split("-").join(" ")
                          }))
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
          }) : /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "loader",
            children: /*#__PURE__*/jsx_runtime_.jsx(Loader, {})
          })
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx((external_react_media_default()), {
      queries: {
        medium: "(min-width: 992px)"
      },
      defaultMatches: {
        medium: initialState.device !== "mobile"
      },
      render: () => /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "brand_page",
          children: props.attributeDetails ? /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "container",
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "text-center mt-2",
              children: /*#__PURE__*/jsx_runtime_.jsx(Header.default, {
                text: brandName
              })
            }), /*#__PURE__*/jsx_runtime_.jsx(BrandDetails, {}), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "row",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_instantsearch_dom_.InstantSearch, {
                searchClient: searchClient,
                indexName: "products",
                searchState: props.searchState,
                createURL: props.createURL,
                onSearchStateChange: props.onSearchStateChange,
                children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: "col-md-3",
                  children: [/*#__PURE__*/jsx_runtime_.jsx(CustomClearRefinements, {
                    transformItems: items => items.filter(({
                      attribute
                    }) => attribute !== "product.attributes.Brand")
                  }), /*#__PURE__*/jsx_runtime_.jsx(external_react_instantsearch_dom_.NumericMenu, {
                    attribute: "product.price.amount",
                    items: [{
                      label: " <= QAR 99",
                      end: 99
                    }, {
                      label: " QAR 100 - QAR 250",
                      start: 100,
                      end: 250
                    }, {
                      label: " QAR 251 - QAR 500",
                      start: 251,
                      end: 500
                    }, {
                      label: " >= QAR 500",
                      start: 500
                    }]
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "refinment_title",
                    children: "Brand"
                  }), /*#__PURE__*/jsx_runtime_.jsx(external_react_instantsearch_dom_.RefinementList, {
                    attribute: "product.attributes.Brand",
                    defaultRefinement: [brandName],
                    showMore: true,
                    searchable: true
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "refinment_title",
                    children: "Category"
                  }), /*#__PURE__*/jsx_runtime_.jsx(external_react_instantsearch_dom_.RefinementList, {
                    attribute: "product.categories.name",
                    showMore: true,
                    transformItems: items => items.map(item => _brand_objectSpread(_brand_objectSpread({}, item), {}, {
                      label: item.label.split("-").join(" ")
                    }))
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "refinment_title",
                    children: "Concern"
                  }), /*#__PURE__*/jsx_runtime_.jsx(external_react_instantsearch_dom_.RefinementList, {
                    attribute: "product.attributes.Concern",
                    showMore: true,
                    searchable: true
                  })]
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "col-md-9",
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
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
                        defaultRefinement: 18,
                        items: [{
                          value: 12,
                          label: "Show 12 Products"
                        }, {
                          value: 15,
                          label: "Show 15 Products"
                        }, {
                          value: 18,
                          label: "Show 18 Products"
                        }]
                      }), /*#__PURE__*/jsx_runtime_.jsx(external_react_instantsearch_dom_.Stats, {})]
                    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_instantsearch_dom_.ScrollTo, {
                      children: [/*#__PURE__*/jsx_runtime_.jsx(external_react_instantsearch_dom_.Hits, {
                        hitComponent: Hit
                      }), " "]
                    }), /*#__PURE__*/jsx_runtime_.jsx(external_react_instantsearch_dom_.Pagination, {
                      showLast: true,
                      padding: 3,
                      onClick: e => {
                        console.log("jhdjdfjdf");
                      }
                    })]
                  })
                })]
              })
            })]
          }) : /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "loader",
            children: /*#__PURE__*/jsx_runtime_.jsx(Loader, {})
          })
        })
      })
    })]
  }); //
} // This gets called on every request


async function getServerSideProps(context) {
  // Fetch data from external API
  let name = context.params.brand;
  let language = context.req.language || "en";
  let attributeDetails = await axios/* default.get */.Z.get(language + "/getdata/attribute", {
    params: {
      name
    }
  }).then(res => {
    return res.data;
  }); // Pass data to the page via props

  return {
    props: {
      attributeDetails,
      name,
      context: context.query
    }
  };
}
/* harmony default export */ const _brand_ = (components_brandURL((0,router.withRouter)(BrandPage)));

/***/ }),

/***/ 6698:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const axios = __webpack_require__(2376);

const url = "https://admin.beautyboothqa.com/"; // const url = "http://localhost:8000/";
// const url = "https://new.beautybooth.shop/";

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (axios.create({
  baseURL: url,
  responseType: "json",
  headers: {
    "Content-Type": "application/json" // Authorization: `Bearer ${localStorage.getItem("auth_token") || ""}`,

  }
}));
/* Please add bearer token first while live for production */

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

/***/ 2376:
/***/ ((module) => {

"use strict";
module.exports = require("axios");

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

/***/ 3768:
/***/ ((module) => {

"use strict";
module.exports = require("rheostat");

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
var __webpack_exports__ = __webpack_require__.X(0, [4920,5773], () => (__webpack_exec__(6658)));
module.exports = __webpack_exports__;

})();