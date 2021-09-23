import React, { useState, useEffect } from "react";
import { isMobile } from "react-device-detect";
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
  connectSortBy,
  ScrollTo,
  connectCurrentRefinements,
} from "react-instantsearch-dom";
import SingleProduct from "../atom/SingleProduct";
import CustomRangeSlider from "../atom/CustomRangeSlider";
import { withRouter } from "react-router-dom";
import Footer from "../layout/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";

function SearchPage(props) {
  const [query, setQuery] = useState("");
  const [mFilter, setMfilter] = useState(false);
  const [sortIndexName, setSortIndexName] = useState("products");
  const searchClient = algoliasearch(
  "HPKCKDRHRT",
  "eec40e4466e90ed437e1c7639aa54feb"
);
// const searchClient = algoliasearch(
//   "4F2AV10UAX",
//   "b7e52f6f6ad165b30cfdc3d0e2e3e67d"
// );
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    let query = props.match.params.query;
    setQuery(query);
  }, [props.match.params.query]);

  const SortBy = ({ items }) => (
    <select
      value={sortIndexName}
      className="ais-SortBy-select"
      onChange={(e) => {
        setSortIndexName(e.currentTarget.value);
      }}
    >
      {items.map((item) => (
        <option
          className="ais-SortBy-option"
          value={item.indexName}
          key={item.value}
        >
          {item.label}
        </option>
      ))}
    </select>
  );

  const CustomSortBy = connectSortBy(SortBy);
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
  const Hit = ({ hit }) => (
    <div className="product_wrapper">
      <SingleProduct product={hit.product} />
    </div>
  );
  if (isMobile) {
    return (
      <>
        <div className="category_page">
          <div className="container">
            <HeaderComponent
              text={`Search Result For : ` + query.split("-").join(" ")}
            />
            <InstantSearch searchClient={searchClient} indexName="products">
              <div className="row">
                <div className="col-md-3">
                  <SearchBox defaultRefinement={query} />
                  <div className="filterContainer">
                    <div className="sortItem">
                      {/* <button>Default Sorting</button> */}
                      <CustomSortBy
                        defaultRefinement={sortIndexName}
                        items={[
                          {
                            value: "",
                            label: "Price Low to High",
                            indexName: "products",
                          },
                          {
                            value: "product.selling_price.amount",
                            label: "Price High to Low",
                            indexName: "instant_search",
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
                        <span className="mb_refinment_title">Brand</span>
                        <RefinementList
                          attribute="product.attributes.Brand"
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

                        <span className="mb_refinment_title">Trending</span>
                        <RefinementList
                          attribute="product.attributes.Trending"
                          showMore
                          transformItems={(items) =>
                            items.map((item) => ({
                              ...item,
                              label: item.label.split("-").join(" "),
                            }))
                          }
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
                <div className="col-md-9">
                  <div className="categories">
                    <div className="hit_result_info">
                      <HitsPerPage
                        defaultRefinement={12}
                        items={[
                          { value: 8, label: "Show 8 Products" },
                          { value: 12, label: "Show 12 Products" },
                          { value: 16, label: "Show 16 Products" },
                          { value: 20, label: "Show 20 Products" },
                          { value: 24, label: "Show 24 Products" },
                        ]}
                      />
                      <Stats />
                    </div>
                    <ScrollTo>
                      <Hits hitComponent={Hit} />
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
        <div className="container">
          <HeaderComponent
            text={`Search Result For : ` + query.split("-").join(" ")}
          />
          <InstantSearch searchClient={searchClient} indexName="products">
            <div className="row">
              <div className="col-md-3">
                <span className="refinment_title">Price</span>
                <CustomRangeSlider attribute="product.price.amount" />
                <span className="refinment_title">Category</span>
                <RefinementList
                  attribute="product.categories.name"
                  // defaultRefinement={[]}
                  transformItems={(items) =>
                    items.map((item) => ({
                      ...item,
                      label: item.label.split("-").join(" "),
                    }))
                  }
                />

                <span className="refinment_title">Brand</span>
                <RefinementList attribute="product.attributes.Brand" />
                <span className="refinment_title">Trending</span>
                <RefinementList attribute="product.attributes.Trending" />
              </div>
              <div className="col-md-9">
                <SearchBox defaultRefinement={query} />
                <div className="categories">
                  <div className="hit_result_info">
                    <HitsPerPage
                      defaultRefinement={12}
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

                  <Pagination showLast />
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

export default withRouter(SearchPage);
