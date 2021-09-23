import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { isMobile } from "react-device-detect";
import { getAttributeInfo } from "../../redux/actions/brandsActions";
import HeaderComponent from "../atom/HeaderComponent";
import algoliasearch from "algoliasearch/lite";
import {
  InstantSearch,
  SearchBox,
  Hits,
  HitsPerPage,
  Stats,
  Pagination,
  RefinementList,
  SortBy,
  ScrollTo,
  NumericMenu,
  connectCurrentRefinements,
} from "react-instantsearch-dom";
import brandURL from "../../brandURL";
import SingleProduct from "../atom/SingleProduct";
import CustomRangeSlider from "../atom/CustomRangeSlider";
import Loader from "../atom/Loader";
import { Helmet } from "react-helmet";
import Footer from "../layout/Footer";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function BrandPage(props) {
  const [defaultNumber, setDefaultNumber] = useState(1);
  const [brandName, setBrandName] = useState("");
  const [mFilter, setMfilter] = useState(false);
  // const searchClient = algoliasearch(
  //   "4F2AV10UAX",
  //   "b7e52f6f6ad165b30cfdc3d0e2e3e67d"
  // );
  const searchClient = algoliasearch(
    "HPKCKDRHRT",
    "eec40e4466e90ed437e1c7639aa54feb"
  );
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    let name = props.match.params.brand;
    setBrandName(name.split("-").join(" "));
    props.getAttributeInfo(props.match.params.brand);
    let searchState = props.searchState;
    searchState.refinementList = {
      "product.categories.name":
        props.searchState.refinementList["product.categories.name"] || [],
    };
    searchState.page = 1;
    // searchState.multiRange="";
    searchState.sortBy = "products";
    props.onSearchStateChange(searchState);
  }, [props.match.params.brand]);
  const Hit = ({ hit }) => (
    <div className="product_wrapper">
      <SingleProduct product={hit.product} />
    </div>
  );
  const createMarkup = (data) => {
    return {
      __html: data,
    };
  };
  const BrandDetails = () => {
    if (
      props.attributeDetails &&
      props.attributeDetails.image &&
      props.attributeDetails.translations[0].description &&
      props.attributeDetails.image.featured_image
    ) {
      return (
        <div className="row">
          <div className="col-md-5">
            <div className="brnad_image_container">
              <img
                src={
                  props.attributeDetails
                    ? props.attributeDetails.image.featured_image
                    : null
                }
                alt="Brand Image"
              />
            </div>
          </div>
          <div className="col-md-7">
            <div className="brand_details_container">
              <p
                dangerouslySetInnerHTML={createMarkup(
                  props.attributeDetails.translations[0].description
                )}
              ></p>
            </div>
          </div>
        </div>
      );
    }
    return null;
  };

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
  const paginateHandl = (number) => {
    setDefaultNumber(number);
  };

  if (isMobile) {
    return (
      <>
        <div className="category_page">
          {props.attributeDetails ? (
            <div className="container">
              <HeaderComponent text={brandName} />
              <BrandDetails />
              <InstantSearch
                searchClient={searchClient}
                indexName="products"
                searchState={props.searchState}
                createURL={props.createURL}
                onSearchStateChange={props.onSearchStateChange}
              >
                <div className="row">
                  <div className="col">
                    <div className="filterContainer">
                      <div className="sortItem">
                        {/* <button>Default Sorting</button> */}
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
                                  attribute !== "product.attributes.Brand"
                              )
                            }
                          />
                          <span className="mb_refinment_title">Price</span>
                          <CustomRangeSlider attribute="product.price.amount" />
                          <span className="mb_refinment_title">Brand</span>
                          <RefinementList
                            attribute="product.attributes.Brand"
                            defaultRefinement={[brandName]}
                            showMore
                          />
                          <span className="mb_refinment_title">Category</span>
                          <RefinementList
                            attribute="product.categories.name"
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
        <Footer />
      </>
    );
  }
  return (
    <>
      <div className="brand_page">
        <Helmet>
          <title>{`${brandName} - Beauty Booth`}</title>
        </Helmet>
        {props.attributeDetails ? (
          <div className="container">
            <HeaderComponent text={brandName} />
            <BrandDetails />
            <div className="row">
              <InstantSearch
                searchClient={searchClient}
                indexName="products"
                searchState={props.searchState}
                createURL={props.createURL}
                onSearchStateChange={props.onSearchStateChange}
              >
                <div className="col-md-3">
                  <CustomClearRefinements
                    transformItems={(items) =>
                      items.filter(
                        ({ attribute }) =>
                          attribute !== "product.attributes.Brand"
                      )
                    }
                  />
                  <span className="refinment_title">Price</span>
                  <CustomRangeSlider attribute="product.price.amount" />
                  <NumericMenu
                    attribute="product.price.amount"
                    items={[
                      { label: " <= QAR 99", end: 99 },
                      { label: " QAR 100 - QAR 250", start: 100, end: 250 },
                      { label: " QAR 251 - QAR 500", start: 251, end: 500 },
                      { label: " >= QAR 500", start: 500 },
                    ]}
                  />
                  <span className="refinment_title">Brand</span>
                  <RefinementList
                    attribute="product.attributes.Brand"
                    defaultRefinement={[brandName]}
                    showMore
                    searchable
                  />
                  <span className="refinment_title">Category</span>
                  <RefinementList
                    attribute="product.categories.name"
                    showMore
                    transformItems={(items) =>
                      items.map((item) => ({
                        ...item,
                        label: item.label.split("-").join(" "),
                      }))
                    }
                  />
                  <span className="refinment_title">Concern</span>
                  <RefinementList
                    attribute="product.attributes.Concern"
                    showMore
                    searchable
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
                        defaultRefinement={12}
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
                    <Pagination
                      showLast
                      padding={3}
                      onClick={(e) => {
                        console.log("jhdjdfjdf");
                      }}
                    />
                  </div>
                </div>
              </InstantSearch>
            </div>
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
}

// export default BrandPage;

const mapStateToProps = (state) => ({
  attributeDetails: state.brands.attributeDetails,
});
const mapDispatchToProps = (dispatch) => {
  return {
    getAttributeInfo: (name) => getAttributeInfo(dispatch, name),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(brandURL(BrandPage)));
