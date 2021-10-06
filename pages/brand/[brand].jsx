import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Head from "next/head";
import Header from "../../components/layout/partials/Header";
import algoliasearch from "algoliasearch/lite";
import Media from "react-media";
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
import brandURL from "../../components/brandURL";
// const brandURL = dynamic(() => import("../../components/brandURL"));

// import Footer from "../layout/Footer";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "../../redux/actions/axios";
import { withRouter } from "next/dist/client/router";

const SingleProduct = dynamic(() =>
  import("../../components/atom/SingleProduct")
);
const CustomRangeSlider = dynamic(() =>
  import("../../components/atom/CustomRangeSlider")
);
const Loader = dynamic(() => import("../../components/atom/Loader"));

function BrandPage(props) {
  const [defaultNumber, setDefaultNumber] = useState(1);
  const [locale, setLocale] = useState("en");
  const [brandName, setBrandName] = useState("");
  const [mFilter, setMfilter] = useState(false);

  const searchClient = algoliasearch(
    process.env.algolia.appId,
    process.env.algolia.appKey
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    let name = props.name;
    setBrandName(name.split("-").join(" "));
    setLocale(props.lang == "ar" ? "ar_QA" : "en");

    let searchState = props.searchState;
    searchState.refinementList = {
      "product.categories.name":
        props.searchState.refinementList["product.categories.name"] || [],
    };
    searchState.page = props.params.page || 1;
    // searchState.multiRange="";
    searchState.sortBy = props.params.sortBy || "products";
    props.onSearchStateChange(searchState);
  }, [props.name, props.lang]);

  const Hit = ({ hit }) => (
    <div className="product_wrapper">
      <SingleProduct product={hit.product} locale={locale} />
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
      props.attributeDetails[0].image &&
      props.attributeDetails[0].translations[0].description &&
      props.attributeDetails[0].image.featured_image
    ) {
      return (
        <div className="row">
          <div className="col-md-5">
            <div className="brnad_image_container">
              <img
                src={
                  props.attributeDetails
                    ? props.attributeDetails[0].image.featured_image
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
                  props.attributeDetails[0].translations[0].description
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
    console.log(number);
    setDefaultNumber(number);
  };
  const initialState = {
    device: "mobile", // this is a config for SSR, which helps to set the initial device props
  };

  //
  return (
    <>
      <Head>
        <title>{props.name} | BeautyBooth</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Media
        queries={{ medium: "(max-width: 991px)" }}
        defaultMatches={{ medium: initialState.device === "mobile" }}
        render={() => (
          <>
            <div className="category_page">
              {props.attributeDetails ? (
                <div className="container">
                  <Header text={brandName} />
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
                            <div
                              onClick={() => setMfilter(false)}
                              className="filter__left"
                            ></div>
                            <div className="filterInner">
                              <CustomClearRefinements
                                transformItems={(items) =>
                                  items.filter(
                                    ({ attribute }) =>
                                      attribute !== "product.attributes.Brand"
                                  )
                                }
                              />
                              {/* <span className="mb_refinment_title">Price</span> */}
                              {/* <CustomRangeSlider  attribute="product.price.amount" /> */}
                              <span className="mb_refinment_title">Brand</span>
                              <RefinementList
                                attribute="product.attributes.Brand"
                                defaultRefinement={[brandName]}
                                showMore
                              />
                              <span className="mb_refinment_title">
                                Category
                              </span>
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
                              defaultRefinement={16}
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
          </>
        )}
      />
      <Media
        queries={{ medium: "(min-width: 992px)" }}
        defaultMatches={{ medium: initialState.device !== "mobile" }}
        render={() => (
          <>
            <div className="brand_page">
              {props.attributeDetails ? (
                <div className="container">
                  <div className="text-center mt-2">
                    <Header text={brandName} />
                  </div>

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
                        {/* <span className="refinment_title">Price</span> */}
                        {/* <CustomRangeSlider attribute="product.price.amount" /> */}
                        <NumericMenu
                          attribute="product.price.amount"
                          items={[
                            { label: " <= QAR 99", end: 99 },
                            {
                              label: " QAR 100 - QAR 250",
                              start: 100,
                              end: 250,
                            },
                            {
                              label: " QAR 251 - QAR 500",
                              start: 251,
                              end: 500,
                            },
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
                        {/* <SearchBox /> */}
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
                              defaultRefinement={18}
                              items={[
                                { value: 12, label: "Show 12 Products" },
                                { value: 15, label: "Show 15 Products" },
                                { value: 18, label: "Show 18 Products" },
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
          </>
        )}
      />
    </>
  );
  //
}

// This gets called on every request
export async function getServerSideProps(context) {
  // Fetch data from external API
  let name = context.params.brand;
  let language = context.req.language || "en";
  let attributeDetails = await axios
    .get(language + "/getdata/attribute", {
      params: {
        name,
      },
    })
    .then((res) => {
      return res.data;
    });
  // Pass data to the page via props
  return { props: { attributeDetails, name, context: context.query } };
}

export default brandURL(withRouter(BrandPage));
