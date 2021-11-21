import React, { Component } from "react";
import arabic from "../public/static/category";
// import en from "../public/static/category_en";

import qs from "qs";

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
};


// Returns a slug from the category name.
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
}

// Returns a name from the category slug.
// The "-" are replaced by spaces and other
// characters are decoded.
function getCategoryName(slug) {
  const decodedSlug = /* encodedCategories[slug] ||  */ slug;
  return slug.split("-").map(decodeURIComponent).join(" ");
  //.replace(/\-and\-/s, "-&-");
  return decodedSlug
    .split("-")
    .map(decodeURIComponent)
    .join(" ")
    .replace(/\//g, " > ");
}

function setArabic(val) {
  return arabic[val];
}

const searchStateToURL = (searchState, lang = "en") => {
  let clicked = [];
  let hlen = 0;
  if (searchState.hierarchicalMenu) {
    // if (lang == "ar_QA") {
    //   clicked = searchState.hierarchicalMenu["product.hierarchicalCategories.lvl0.ar_QA"].split(" < ");
    // }else{
      clicked = searchState.hierarchicalMenu["product.hierarchicalCategories.lvl0.en"].split(" > ");
    // }
    hlen = clicked.length;
  }
  const routeState = {
    // query: searchState.query,
    category: clicked[0].split(" ").join("-"),//searchState.category && searchState.category
    category_ar: setArabic(clicked[0].split(" ").join("-")),//searchState.category_ar && searchState.category_ar,
    sub: hlen > 1 ? clicked[1].split(" ").join("-") : "",//searchState.sub && searchState.sub,
    child: hlen > 2 ? clicked[2].split(" ").join("-") : "",//searchState.child && searchState.child,
    sub_ar: hlen > 1 ? setArabic(clicked[1].split(" ").join("-")) : "",//searchState.sub_ar && searchState.sub_ar,
    child_ar: hlen > 2 ? setArabic(clicked[2].split(" ").join("-")) : "",//searchState.child_ar && searchState.child_ar,
    page: String(searchState.page),
    price:
      searchState.range &&
      searchState.range["product.price.amount"] &&
      `${searchState.range["product.price.amount"].min || ""}:${searchState.range["product.price.amount"].max || ""
      }`,
    rank:
      searchState.multiRange ?
        searchState.multiRange["product.price.amount"] &&
        `${(searchState.multiRange["product.price.amount"]) || ""}` : searchState.rank,
    sortBy: searchState.sortBy,
    hitsPerPage:
      (searchState.hitsPerPage && String(searchState.hitsPerPage)) || undefined,
  };

  const { protocol, hostname, port = "", pathname, hash } = location;
  const portWithPrefix = port === "" ? "" : `:${port}`;
  const urlParts = location.href.match(/^(.*?)\/category/);
  const baseUrl =
    (urlParts && urlParts[0]) ||
    `${protocol}//${hostname}${portWithPrefix}${pathname}`;

  const categoryPath = routeState.category
    ? `${getCategorySlug(routeState.category, routeState.sub, routeState.child)}`
    : "";

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
  if (
    routeState.sortBy &&
    routeState.sortBy !== routeStateDefaultValues.sortBy
  ) {
    queryParameters.sortBy = routeState.sortBy;
  }
  if (
    routeState.hitsPerPage &&
    routeState.hitsPerPage !== routeStateDefaultValues.hitsPerPage
  ) {
    queryParameters.hitsPerPage = routeState.hitsPerPage;
  }
  const queryString = qs.stringify(queryParameters, {
    addQueryPrefix: true,
    arrayFormat: "indices",
  });

  return `${baseUrl}/${categoryPath}${queryString}${hash}`;
};

const urlToSearchState = (location) => {
  const pathnameMatches = location.pathname.match(/category\/(.*?)\/?$/);
  const category = getCategoryName(
    (pathnameMatches && pathnameMatches[1]) || ""
  );
  let category_ar = null;
  // let sub_ar = null;
  // let child_ar = null;

  const queryParameters = qs.parse(location.search.slice(1));

  const {
    query = "",
    sub = "",
    child = "",
    page = 1,
    price,
    rank,
    hitsPerPage,
    sortBy,
  } = queryParameters;

  // `qs` does not return an array when there's a single value.
  // const allBrands = Array.isArray(brands) ? brands : [brands].filter(Boolean);

  const searchState = { range: {}, rank: "" };

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
      "product.hierarchicalCategories.lvl0.en": category,
    };
    if (category_ar) {
      searchState.hierarchicalMenu = {
        "product.hierarchicalCategories.lvl0.ar_QA": category_ar,
      };
    }
  }


  if (price) {
    const [min, max = undefined] = price.split(":");
    searchState.range["product.price.amount"] = {
      min: min || undefined,
      max: max || undefined,
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
const withURLSync = (CategoryPage) =>
  class WithURLSync extends Component {
    state = {
      searchState: "",
    };

    componentDidMount() {
      this.setState({
        searchState: urlToSearchState(window.location),
      });
      window.addEventListener("popstate", this.onPopState);
    }
    componentWillUnmount() {
      clearTimeout(debouncedSetState);
      window.removeEventListener("popstate", this.onPopState);
    }

    onPopState = ({ state }) => {
      this.setState({
        searchState: state || {},
      });
    }
    onSearchStateChange = (searchState) => {
      clearTimeout(debouncedSetState);
      debouncedSetState = setTimeout(() => {
        window.history.pushState(
          searchState,
          null,
          searchStateToURL(searchState, this.props.lang)
        );
      }, updateAfter);

      this.setState({ searchState });
    };

    render() {
      const { searchState } = this.state;
      if (searchState) {
        return (
          <CategoryPage
            {...this.props}
            searchState={searchState}
            onSearchStateChange={this.onSearchStateChange}
            createURL={searchStateToURL}
          />
        );
      } else {
        return null;
      }
    }
  };

export default withURLSync;
