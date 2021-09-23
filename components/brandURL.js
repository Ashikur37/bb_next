import React, { Component } from "react";
import qs from "qs";

const updateAfter = 100;

const routeStateDefaultValues = {
  query: "",
  page: "1",
  category: undefined,
  // brands: undefined,
  // price: '',
  rank: "",
  sortBy: "products",
  hitsPerPage: "12",
};

const encodedCategories = {
  Cameras: "Cameras & Camcorders",
  Cars: "Car Electronics & GPS",
  Phones: "Cell Phones",
  TV: "TV & Home Theater",
};

const decodedCategories = Object.keys(encodedCategories).reduce((acc, key) => {
  const newKey = encodedCategories[key];
  const newValue = key;

  return {
    ...acc,
    [newKey]: newValue,
  };
}, {});
// Returns a slug from the category name.
// Spaces are replaced by "-" to make
// the URL easier to read and other
// characters are encoded.
function getCategorySlug(name) {
  const encodedName = decodedCategories[name] || name;
  return encodedName[0].split(" ").map(encodeURIComponent).join("-");
}

// Returns a name from the category slug.
// The "-" are replaced by spaces and other
// characters are decoded.
function getCategoryName(slug) {
  const decodedSlug = encodedCategories[slug] || slug;

  return decodedSlug
    .split("-")
    .map(decodeURIComponent)
    .join(" ")
    .replace(/\//g, " > ");
}
const searchStateToURL = (searchState) => {
  const routeState = {
    query: searchState.query,
    page: String(searchState.page),
    category:
      searchState.refinementList &&
      searchState.refinementList["product.categories.name"],
    // brands: searchState.refinementList && searchState.refinementList['product.attributes.Brand'],
    // price:
    //   searchState.range &&
    //   searchState.range['product.price.amount'] &&
    //   `${searchState.range['product.price.amount'].min || ''}:${searchState.range['product.price.amount'].max ||
    //     ''}`,
    rank:
      searchState.multiRange &&
      searchState.multiRange["product.price.amount"] &&
      `${searchState.multiRange["product.price.amount"] || ""}`,
    sortBy: searchState.sortBy,
    hitsPerPage:
      (searchState.hitsPerPage && String(searchState.hitsPerPage)) || undefined,
  };

  const { protocol, hostname, port = "", pathname, hash } = location;
  const portWithPrefix = port === "" ? "" : `:${port}`;
  const urlParts = location.href.match(/^(.*?)\/brand/);
  // (urlParts && urlParts[0]) ||
  const baseUrl = `${protocol}//${hostname}${portWithPrefix}${pathname}`;
  // const categoryPath = routeState.brands
  // ? `${getCategorySlug(routeState.brands)}/`
  // : '';

  const queryParameters = {};

  if (routeState.query && routeState.query !== routeStateDefaultValues.query) {
    queryParameters.query = encodeURIComponent(routeState.query);
  }
  if (routeState.page && routeState.page !== routeStateDefaultValues.page) {
    queryParameters.page = routeState.page;
  }
  if (
    routeState.category &&
    routeState.category !== routeStateDefaultValues.category
  ) {
    queryParameters.category = routeState.category.map(decodeURIComponent);
  }
  // if (
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
    arrayFormat: "repeat",
  });

  return `${baseUrl}${queryString}${hash}`;
};

const urlToSearchState = (location) => {
  const pathnameMatches = location.pathname.match(/brand\/(.*?)\/?$/);
  // const brands = getCategoryName(
  //   (pathnameMatches && pathnameMatches[1]) || ''
  // );
  const queryParameters = qs.parse(
    location.search.slice(1)
  );
  const {
    query = "",
    page = 1,
    // brands = [],
    category = [],
    // price,
    rank,
    hitsPerPage,
    sortBy,
  } = queryParameters;

  // `qs` does not return an array when there's a single value.
  // const allBrands = Array.isArray(brands) ? brands : [brands].filter(Boolean);
  const allCategories = Array.isArray(category)
    ? category
    : [category].filter(Boolean);

  const searchState = { refinementList: [] };

  if (query) {
    searchState.query = decodeURIComponent(query);
  }
  if (page) {
    searchState.page = page;
  }
  if (allCategories.length) {
    searchState.refinementList = {
      "product.categories.name": allCategories.map(decodeURIComponent),
    };
  }

  if (rank) {
    searchState.multiRange = { "product.price.amount": rank };
  }
  if (sortBy) {
    searchState.sortBy = sortBy;
  }

  if (hitsPerPage) {
    searchState.hitsPerPage = hitsPerPage;
  }

  return searchState;
};

const brandURL = (BrandPage) =>
  class brandURL extends Component {
    constructor(props) {
      super(props);
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

    onPopState = ({ state }) =>
      this.setState({
        searchState: state || {},
      });

    onSearchStateChange = (searchState) => {
      clearTimeout(this.debouncedSetState);

      this.debouncedSetState = setTimeout(() => {
        window.history.pushState(
          searchState,
          null,
          searchStateToURL(searchState)
        );
      }, updateAfter);

      this.setState({ searchState });
    };

    render() {
      const { searchState, params } = this.state;
      if(searchState){
        return (
          <BrandPage
            {...this.props}
            searchState={searchState}
            params = {params}
            onSearchStateChange={this.onSearchStateChange}
            createURL={searchStateToURL}
          />
        );
      }else{
        return null;
      }
    }
  };

export default brandURL;
