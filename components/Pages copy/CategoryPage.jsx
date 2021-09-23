import React, { useState, useEffect, lazy, Suspense } from "react";
import { withRouter } from "react-router-dom";
import HeaderComponent from "../atom/HeaderComponent";
import { isMobile } from "react-device-detect";
import algoliasearch from "algoliasearch/lite";
import {
  InstantSearch,
  SearchBox,
  Hits,
  HitsPerPage,
  Stats,
  Pagination,
  RefinementList,
  HierarchicalMenu,
  NumericMenu,
  SortBy,
  ScrollTo,
  connectCurrentRefinements,
} from "react-instantsearch-dom";
import withURLSync from "../../URLSync";

import SingleProduct from "../atom/SingleProduct";
import CustomRangeSlider from "../atom/CustomRangeSlider";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import Loader from "../atom/Loader";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Footer = lazy(() => import("../layout/Footer"));

// const searchClient = algoliasearch(
//   "4F2AV10UAX",
//   "b7e52f6f6ad165b30cfdc3d0e2e3e67d"
// );
const searchClient = algoliasearch(
  "HPKCKDRHRT",
  "eec40e4466e90ed437e1c7639aa54feb"
);

const CategoryPage = (props) => {
  const [isSearchStalled, setIsSearchStalled] = useState(true);
  const [categoryName, setCategoryName] = useState("");
  const [selected, setSelected] = useState(null);

  const [mFilter, setMfilter] = useState(false);

  function findTheCategory(category, slug) {
    category.forEach((element) => {
      if (element.slug === slug) {
        setSelected(element.name);
        return element.name;
      } else if (element.hasItems) {
        findTheCategory(element.items, slug);
      }
    });
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // useEffect(() => {
  //   if (isMobile) {
  //     if (typeof props.location.state == "undefined") {
  //       if (props.menu && props.match.params.category) {
  //         findTheCategory(
  //           props.menu.filter((data) => data.isCategory),
  //           props.match.params.category
  //         );
  //       }
  //     } else {
  //       setSelected(props.location.state.category.split("-").join(" "));
  //     }
  //     setTimeout(() => {
  //       setIsSearchStalled(false);
  //     }, 500);

  //     setCategoryName(selected);
  //   }
  // }, [
  //   isMobile,
  //   selected,
  //   findTheCategory,
  //   props.match.params.category,
  //   props.menu,
  //   props.location,
  //   props.searchState
  // ]);
  useEffect(() => {
    if (props.searchState.hierarchicalMenu) {
      let main = props.searchState.hierarchicalMenu[
        "product.hierarchicalCategories.lvl0"
      ].split(" > ");
      let len = main.length - 1;
      setSelected(
        props.searchState.hierarchicalMenu[
          "product.hierarchicalCategories.lvl0"
        ]
      );
      setCategoryName(main[len]);
    } else {
      props.history.goBack();
    }
  }, [props.searchState]);

  useEffect(() => {
    let searchState = props.searchState;
    searchState.hierarchicalMenu[
      "product.hierarchicalCategories.lvl0"
    ] = decodeURIComponent(props.match.params.category.split("-").join(" "))
      .split("/")
      .join(" > ");
    let main = searchState.hierarchicalMenu[
      "product.hierarchicalCategories.lvl0"
    ].split(" > ");
    let len = main.length - 1;
    setSelected(
      searchState.hierarchicalMenu["product.hierarchicalCategories.lvl0"]
    );
    setCategoryName(main[len]);
    props.onSearchStateChange(searchState);
    setTimeout(() => {
      setIsSearchStalled(false);
    }, 500);
  }, [props.match.params.category]);

  const Hit = ({ hit }) => (
    <div className="product_wrapper">
      <SingleProduct product={hit.product} />
    </div>
  );
  const ClearRefinements = ({ items, refine }) => {
    return (
      <button
        onClick={() => refine(items)}
        className={
          !items.length
            ? "ais-ClearRefinements-button ais-ClearRefinements-button--disabled"
            : "ais-ClearRefinements-button"
        }
        disabled={!items.length}
      >
        Clear all filters
      </button>
    );
  };
  const CustomClearRefinements = connectCurrentRefinements(ClearRefinements);
  // const CSortBy = ({ items }) => (
  //   <select
  //     value={sortIndexName}
  //     className="ais-SortBy-select"
  //     onChange={(e) => {
  //       setSortIndexName(e.currentTarget.value);
  //     }}
  //   >
  //     {items.map((item) => (
  //       <option
  //         className="ais-SortBy-option"
  //         value={item.indexName}
  //         key={item.value}
  //       >
  //         {item.label}
  //       </option>
  //     ))}
  //   </select>
  // );

  // const CustomSortBy = connectSortBy(CSortBy);

  if (isMobile) {
    return (
      <>
        <div className="category_page">
          {props.menu && !isSearchStalled ? (
            <div className="container">
              <HeaderComponent text={categoryName} />
              <InstantSearch
                searchClient={searchClient}
                indexName="products"
                searchState={props.searchState}
                createURL={props.createURL}
                onSearchStateChange={props.onSearchStateChange}
              >
                <div className="row">
                  <div className="col-12">
                    <div className="filterContainer">
                      <div className="sortItem">
                        <SortBy
                          defaultRefinement="products"
                          items={[
                            {
                              value: "products",
                              label: "Price High to Low",
                            },
                            {
                              value: "instant_search",
                              label: "Price Low to High",
                            },
                          ]}
                        />
                      </div>
                      <div className="filterItem">
                        <button onClick={() => setMfilter(!mFilter)}>
                          Filter By
                        </button>
                      </div>
                      <div
                        className={
                          mFilter
                            ? "filterItemContainer active"
                            : "filterItemContainer"
                        }
                      >
                        {" "}
                        <span
                          onClick={() => setMfilter(false)}
                          className="cancleBtn"
                        >
                          <FontAwesomeIcon icon={faWindowClose} size="3x" />
                        </span>
                        <div className="filterInner">
                          <CustomClearRefinements
                            transformItems={(items) =>
                              items.filter(
                                ({ attribute }) =>
                                  attribute !== "product.categories.name"
                              )
                            }
                          />
                          <span className="mb_refinment_title">Price</span>
                          <CustomRangeSlider attribute="product.price.amount" />
                          <span className="mb_refinment_title">Category</span>
                          {/* <RefinementList
                            attribute="product.categories.name"
                            defaultRefinement={[categoryName]}
                            showMore
                            transformItems={(items) =>
                              items.map((item) => ({
                                ...item,
                                label: item.label.split("-").join(" "),
                              }))
                            }
                          /> */}
                          <HierarchicalMenu
                            attributes={[
                              "product.hierarchicalCategories.lvl0",
                              "product.hierarchicalCategories.lvl1",
                              "product.hierarchicalCategories.lvl2",
                            ]}
                            limit={15}
                            showMoreLimit={15}
                          />
                          <span className="mb_refinment_title">Brand</span>
                          <RefinementList
                            attribute="product.attributes.Brand"
                            showMore
                          />
                          <span className="mb_refinment_title">Concern</span>
                          <RefinementList
                            attribute="product.attributes.Concern"
                            showMore
                            transformItems={(items) =>
                              items.map((item) => ({
                                ...item,
                                label: item.label.split("-").join(" "),
                              }))
                            }
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    {/* <SearchBox /> */}
                    <div className="categories">
                      <div className="hit_result_info">
                        <HitsPerPage
                          defaultRefinement={12}
                          items={[
                            { value: 8, label: "Show 8 Products" },
                            { value: 12, label: "Show 12 Products" },
                            { value: 16, label: "Show 16 Products" },
                          ]}
                        />
                        <Stats />
                      </div>
                      <ScrollTo>
                        <Hits hitComponent={Hit} />{" "}
                      </ScrollTo>

                      <Pagination padding={1} showLast />
                    </div>
                  </div>
                </div>
              </InstantSearch>
            </div>
          ) : (
            <div className="loader">
              <Loader />
            </div>
          )}
        </div>
        {props.menu && !isSearchStalled ? (
          <Suspense fallback="null">
            <Footer />
          </Suspense>
        ) : null}
      </>
    );
  }
  return (
    <>
      <div className="category_page">
        <Helmet>
          <title>{`${categoryName} - Beauty Booth`}</title>
        </Helmet>
        {props.menu ? (
          <div className="container">
            <HeaderComponent text={categoryName} />
            <InstantSearch
              searchClient={searchClient}
              indexName="products"
              searchState={props.searchState}
              createURL={props.createURL}
              onSearchStateChange={props.onSearchStateChange}
            >
              <div className="row">
                <div className="col-md-3">
                  <CustomClearRefinements
                    clearsQuery
                    transformItems={(items) =>
                      items.filter(
                        ({ attribute }) =>
                          attribute !== "product.hierarchicalCategories.lvl0"
                      )
                    }
                  />
                  <span className="refinment_title">Price</span>
                  <CustomRangeSlider attribute="product.price.amount" />
                  <NumericMenu
                    attribute="product.price.amount"
                    defaultRefinement={props.searchState.rank}
                    items={[
                      { label: "0 - 50 QAR", end: 50 },
                      { label: "50 - 100 QAR ", start: 50, end: 100 },
                      { label: "100 - 200 QAR", start: 100, end: 200 },
                      { label: "200 - 400 QAR", start: 200, end: 400 },
                      { label: "400+ QAR", start: 400 },
                    ]}
                  />
                  <span className="refinment_title">Category</span>

                  {/* <RefinementList
                    attribute="product.categories.name"
                    defaultRefinement={[categoryName]}
                    showMore
                    transformItems={(items) =>
                      items.map((item) => ({
                        ...item,
                        label: item.label.split("-").join(" "),
                      }))
                    }
                  /> */}

                  <HierarchicalMenu
                    attributes={[
                      "product.hierarchicalCategories.lvl0",
                      "product.hierarchicalCategories.lvl1",
                      "product.hierarchicalCategories.lvl2",
                    ]}
                    // rootPath={selected}
                    limit={15}
                    showMoreLimit={15}
                    // transformItems={(items) =>
                    //   items.map((item) => ({
                    //     ...item,
                    //     label: item.label.split("-").join(" "),
                    //   }))
                    // }
                  />
                  <span className="refinment_title">Brand</span>
                  <RefinementList
                    attribute="product.attributes.Brand"
                    showMore
                    searchable
                  />
                  <span className="refinment_title">Concern</span>
                  <RefinementList
                    attribute="product.attributes.Concern"
                    showMore
                  />
                </div>
                <div className="col-md-9">
                  <SearchBox />
                  <div className="categories">
                    <div className="hit_result_info">
                      <SortBy
                        defaultRefinement="products"
                        items={[
                          {
                            value: "products",
                            label: "Price High to Low",
                          },
                          {
                            value: "instant_search",
                            label: "Price Low to High",
                          },
                        ]}
                      />
                      <HitsPerPage
                        defaultRefinement={15}
                        items={[
                          { value: 6, label: "Show 6 Products" },
                          { value: 12, label: "Show 12 Products" },
                          { value: 15, label: "Show 15 Products" },
                        ]}
                      />
                      <Stats />
                    </div>
                    <ScrollTo>
                      <Hits hitComponent={Hit} />{" "}
                    </ScrollTo>

                    <Pagination padding={3} showLast />
                  </div>
                </div>
              </div>
            </InstantSearch>
          </div>
        ) : (
          <div className="loader">
            <Loader />
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};
const mapStateToProps = (state) => ({
  menu: state.layout.menu,
});

export default connect(
  mapStateToProps,
  null
)(withRouter(withURLSync(CategoryPage)));
