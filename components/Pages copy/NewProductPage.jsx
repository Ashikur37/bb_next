import React, { useState, useEffect } from "react";
import HeaderComponent from "../atom/HeaderComponent";
import algoliasearch from "algoliasearch/lite";
import { isMobile } from "react-device-detect";
import {
  InstantSearch,
  SearchBox,
  Hits,
  HitsPerPage,
  Stats,
  Pagination,
  RefinementList,
  NumericMenu,
  SortBy,
  ScrollTo,
  connectCurrentRefinements,
} from "react-instantsearch-dom";
import newURL from '../../newURL';
import SingleProduct from "../atom/SingleProduct";
import CustomRangeSlider from "../atom/CustomRangeSlider";
import { Helmet } from "react-helmet";
import Footer from "../layout/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";

// const searchClient = algoliasearch(
//   "4F2AV10UAX",
//   "b7e52f6f6ad165b30cfdc3d0e2e3e67d"
// );
const searchClient = algoliasearch(
  "HPKCKDRHRT",
  "eec40e4466e90ed437e1c7639aa54feb"
);

const NewProductPage = (props) => {
  const [mFilter, setMfilter] = useState(false);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [props.searchState]);
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
  if (isMobile) {
    return (
      <>
        <div className="category_page">
          <div className="container">
            <HeaderComponent text="New Products" />
            <InstantSearch searchClient={searchClient} indexName="products">
              <div className="row">
                <div className="col-12">
                  <div className="filterContainer">
                    <span style={{ display: "none" }}>
                      <RefinementList
                        attribute="product.is_new"
                        defaultRefinement={[true]}
                      />
                    </span>
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
                                attribute !== "product.attributes.Trending"
                            )
                          }
                        />
                        <span className="mb_refinment_title">Price</span>
                        <CustomRangeSlider attribute="product.price.amount" />
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
                        <span className="mb_refinment_title">Brand</span>
                        <RefinementList
                          attribute="product.attributes.Brand"
                          showMore
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
        </div>
        <Footer />{" "}
      </>
    );
  }

  return (
    <>
      <div className="category_page">
        <Helmet>
          <title>New @ Beauty Booth</title>
        </Helmet>
        <div className="container">
          <HeaderComponent text="New Products" />
          <InstantSearch
            searchClient={searchClient}
            indexName="products"
            searchState={props.searchState}
            onSearchStateChange={props.onSearchStateChange}
            createURL={props.createURL}
          >
            <div className="row">
              <div className="col-md-3">
                <span style={{ display: "none" }}>
                  <RefinementList
                    attribute="product.is_new"
                    defaultRefinement={["true"]}
                  />
                </span>
                <span className="refinment_title">Price</span>
                <CustomRangeSlider attribute="product.price.amount" />
                <NumericMenu
                  attribute="product.price.amount"
                  items={[
                    { label: "0 - 50 QAR", end: 50 },
                    { label: "50 - 100 QAR ", start: 50, end: 100 },
                    { label: "100 - 200 QAR", start: 100, end: 200 },
                    { label: "200 - 400 QAR", start: 200, end: 400 },
                    { label: "400+ QAR", start: 400 },
                  ]}
                />
                <div className="new">
                  <div className="custom__accordion">
                    <div className="single__accordion">
                      <input
                        type="checkbox"
                        name="new_acc"
                        id="cat"
                        className="accordion__input"
                      />
                      <label className="accordion__label" htmlFor="cat">
                        <span className="refinment_title">Category</span>
                      </label>
                      <div className="accordion__content">
                        <RefinementList
                          attribute="product.categories.name"
                          limit={10}
                          showMoreLimit={10}
                        />
                      </div>
                    </div>
                    <div className="single__accordion">
                      <input
                        type="checkbox"
                        name="new_acc"
                        id="brand"
                        className="accordion__input"
                      />
                      <label className="accordion__label" htmlFor="brand">
                        <span className="refinment_title">Brand</span>
                      </label>
                      <div className="accordion__content">
                        <RefinementList
                          attribute="product.attributes.Brand"
                          limit={10}
                          showMoreLimit={10}
                        />
                      </div>
                    </div>
                  </div>
                </div>
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
                  <Pagination showLast padding={3} />
                </div>
              </div>
            </div>
          </InstantSearch>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default newURL(NewProductPage);
