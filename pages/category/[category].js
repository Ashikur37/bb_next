import React, { useState, useEffect } from "react";
import { withTranslation } from "../../i18n"
import { useRouter } from "next/router";
import HeaderComponent from "../../components/layout/partials/Header";
import Media from "react-media";
import Head from "next/head";
import algoliasearch from "algoliasearch/lite";
import {
  InstantSearch,
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
// import RheostatRangeSlider from "../../components/atom/RheostatRangeSlider";
import arabic from "../../public/static/category";
import withURLSync from "../../components/URLSync";

import SingleProduct from "../../components/atom/SingleProduct";
// import CustomRangeSlider from "../../components/atom/CustomRangeSlider";

import { faWindowClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const searchClient = algoliasearch(
  process.env.algolia.appId,
  process.env.algolia.appKey
);

const initialState = {
  device: "mobile", // this is a config for SSR, which helps to set the initial device props
};

const CategoryPage = (props) => {
  const { t } = props;
  const router = useRouter();
  const [categoryName, setCategoryName] = useState("");
  const [subCategoryName, setSubCategoryName] = useState("");
  const [subCategoryChild, setSubCategoryChild] = useState("");
  const [selected, setSelected] = useState(null);
  const [locale, setLocale] = useState("en");

  const [mFilter, setMfilter] = useState(false);

  useEffect(() => {
    setCategoryName(props.context.category?.split("-").join(" "));
    window.scrollTo(0, 0);
    router.push(router.asPath, undefined, { shallow: true });
  }, []);
  useEffect(() => {
    setLocale(props.lang == 'ar' ? 'ar_QA' : 'en');
  }, [props.lang]);


  useEffect(() => {
    setSubCategoryName(
      router.query.sub
        ? decodeURIComponent(
          router.asPath
            .split("=")[1]
            .replace(/\&child/s, "")
            .replace(/\?page.*/s, "&page")
            .replace(/\&page.*/s, "")
        )
          .replace(/\?rank.*/s, "&rank")
          .replace(/\&rank.*/s, "")
          .replace(/\?price.*/s, "")
          .replace(/\&price.*/s, "")
          .replace(/\?query.*/s, "")
        : ""
    );
    setSubCategoryChild(
      router.query.child
        ? decodeURIComponent(
          router.asPath
            .split("=")[2]
            .replace(/\?page.*/s, "")
            .replace(/\&page.*/s, "&page")
        )
          .replace(/\?rank.*/s, "&rank")
          .replace(/\&rank.*/s, "")
          .replace(/\?price.*/s, "")
          .replace(/\&price.*/s, "")
          .replace(/\?query.*/s, "")
        : ""
    );
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

  }, [props.searchState, props.context, selected]);

  useEffect(() => {
    let searchState = props.searchState;
    if (subCategoryName !== "" && subCategoryChild === "") {
      searchState.hierarchicalMenu[
        "product.hierarchicalCategories.lvl0.en"
      ] = `${router.query.category
        .split("-")
        .join(" ")} > ${subCategoryName.split("-").join(" ")}`;
      setSelected(subCategoryName.split("-").join(" "));

      if (props.i18n.language == "ar_QA") {
        searchState.hierarchicalMenu["product.hierarchicalCategories.lvl0.ar_QA"] =
          searchState.category_ar + " > " + arabic[subCategoryName];
      }
    }
    if (subCategoryChild !== "" && subCategoryName !== "") {
      searchState.hierarchicalMenu[
        "product.hierarchicalCategories.lvl0.en"
      ] = `${router.query.category
        .split("-")
        .join(" ")} > ${subCategoryName
          .split("-")
          .join(" ")} > ${subCategoryChild.split("-").join(" ")}`;
      if (props.i18n.language == "ar_QA") {
        searchState.hierarchicalMenu["product.hierarchicalCategories.lvl0.ar_QA"] = searchState.category_ar + " > " + searchState.sub_ar + " > " + searchState.child_ar;
      }
      setSelected(subCategoryChild.split("-").join(" "));
    }

    if (subCategoryChild === "" && subCategoryName === "") {
      searchState.hierarchicalMenu[
        "product.hierarchicalCategories.lvl0.en"
      ] = `${router.query.category.split("-").join(" ")}`;

      if (props.i18n.language == "ar_QA") {
        searchState.hierarchicalMenu["product.hierarchicalCategories.lvl0.ar_QA"] = searchState.category_ar;
      }

      setSelected(categoryName.split("-").join(" "));
    }

    setCategoryName(props.context.category.split("-").join(" "));

    searchState.sub = subCategoryName;
    searchState.child = subCategoryChild;
    searchState.category = categoryName;
    searchState.category_ar = arabic[categoryName];
    searchState.sub_ar = arabic[subCategoryName];
    searchState.child_ar = arabic[subCategoryChild];
    searchState.locale = props.i18n.language;

  }, [props.context, subCategoryName, subCategoryChild, selected, router]);

  const Hit = ({ hit }) => (
    <div className="product_wrapper">
      <SingleProduct product={hit.product} locale={locale} />
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

  return (
    <>
      <Head>
        <title>{categoryName} | BeautyBooth</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Media
        queries={{ medium: "(max-width: 991px)" }}
        defaultMatches={{ medium: initialState.device === "mobile" }}
        render={() => (
          <>
            <div className="category_page">
              <div className="container">
                <HeaderComponent text={t(selected)} />
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
                                    attribute !== "product.categories.name"
                                )
                              }
                            />
                            <span className="mb_refinment_title">Price</span>
                            {/* <CustomRangeSlider attribute="product.price.amount" /> */}


                            {/*  custom accordion */}
                            <div className="custom__accordion">
                              <div className="single__accordion">
                                <input
                                  type="checkbox"
                                  name="new_acc"
                                  id="cat"
                                  className="accordion__input"
                                />
                                <label
                                  className="accordion__label"
                                  htmlFor="cat"
                                >
                                  <span className="refinment_title">
                                    Category
                                  </span>
                                </label>
                                <div className="accordion__content mt-3">
                                  <HierarchicalMenu
                                    attributes={[
                                      "product.hierarchicalCategories.lvl0." + props.i18n.language,
                                      "product.hierarchicalCategories.lvl1." + props.i18n.language,
                                      "product.hierarchicalCategories.lvl2." + props.i18n.language,
                                    ]}
                                    limit={15}
                                    showMoreLimit={15}
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
                                <label
                                  className="accordion__label"
                                  htmlFor="brand"
                                >
                                  <span className="refinment_title">Brand</span>
                                </label>
                                <div className="accordion__content mt-3">
                                  <RefinementList
                                    attribute="product.attributes.Brand"
                                    showMore
                                  />
                                </div>
                              </div>
                              <div className="single__accordion">
                                <input
                                  type="checkbox"
                                  name="new_acc"
                                  id="concern"
                                  className="accordion__input"
                                />
                                <label
                                  className="accordion__label"
                                  htmlFor="concern"
                                >
                                  <span className="refinment_title">
                                    Concern
                                  </span>
                                </label>
                                <div className="accordion__content mt-3">
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

                            {/* end custom accordion  */}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      {/* <SearchBox /> */}
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
            </div>
          </>
        )}
      />
      <Media
        queries={{ medium: "(min-width: 992px)" }}
        defaultMatches={{ medium: initialState.device === "mobile" }}
        render={() => (
          <>
            <div className="category_page mt-4">
              <div className="container">
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
                              attribute !==
                              "product.hierarchicalCategories.lvl0." + props.i18n.language
                          )
                        }
                      />
                      <span className="refinment_title">Price</span>
                      {/* <CustomRangeSlider attribute="product.price.amount" /> */}
                      {/* <RheostatRangeSlider attribute="product.price.amount" direction="LTR"/> */}
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

                      <HierarchicalMenu
                        attributes={[
                          "product.hierarchicalCategories.lvl0." + props.i18n.language,
                          "product.hierarchicalCategories.lvl1." + props.i18n.language,
                          "product.hierarchicalCategories.lvl2." + props.i18n.language,
                        ]}
                        limit={15}
                        showMoreLimit={15}
                      />
                      <span className="refinment_title">Brand</span>
                      <RefinementList
                        attribute="product.attributes.Brand"
                        showMore
                        searchable
                      />
                      <span className="refinment_title">Trending</span>
                      <RefinementList
                        attribute="product.attributes.Trending"
                        showMore
                      />
                    </div>
                    <div className="col-md-9">

                      <HeaderComponent text={t(selected)}/>
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
                            defaultRefinement={21}
                            items={[
                              { value: 12, label: "Show 12 Products" },
                              { value: 15, label: "Show 15 Products" },
                              { value: 18, label: "Show 18 Products" },
                              { value: 21, label: "Show 21 Products" },
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
            </div>
          </>
        )}
      />
    </>
  );
};

// This gets called on every request
export async function getServerSideProps(context) {
  // Pass data to the page via props

  return { props: { context: context.query } };
}

export default withTranslation("menu")(withURLSync(CategoryPage));
