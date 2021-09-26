import Link from "next/link";
import React, { useState, useEffect } from "react";
import Product from "../../../components/atom/Product";
import HeaderComponent from "../../../components/atom/HeaderComponent";
import axios from "../../../redux/actions/axios";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";
import InfiniteScroll from "react-infinite-scroll-component";
function Index(props) {
  const router = useRouter();
  const [offers, setOffers] = useState();
  const [products, setProducts] = useState();
  const [categoryParams, setCategoryParams] = useState(props.id);
  const [categoryName, setCategoryName] = useState();
  const [mFilter, setMFilter] = useState(false);
  const [empty, setEmpty] = useState(false);
  const [items, setItems] = useState();
  const [hasMore, setHasMore] = useState(true);
  const [nextPage, setNextPage] = useState();
  const [notFound,setNotFound] = useState(false);
  useEffect(() => {
    setCategoryParams(props.id);
  }, [props.id]);

  useEffect(() => {
    axios
      .get("en/getdata/campaign_offers")
      .then((res) => {
        setOffers(res.data.categories);
      })
      .catch();
  }, []);
  useEffect(() => {
    
      let locale = props?.lang === "en" ? "en" : "ar_QA" || "en";
      axios
        .get(`${locale}/getdata/offer?type=category&id=${categoryParams}`)
        .then((res) => {
          // let filteredProducts = res.data.products?.data.filter((product) => {
          //   if (product.hasCampaign == true || product.has_offer == true) {
          //     return product;
          //   }
          // });
          // if (filteredProducts.length === 0) {
          //   setEmpty(true);
          // }
          setHasMore(res.data.products.next_page_url !== null);
          setNextPage(2);
          // setLastPage(res.data.products.last_page);
          setProducts(res.data.products.data);

          setItems(res.data.products.data);
          setCategoryName(categoryParams?res.data.category.name:null);
          setNotFound(false);
        }).catch(err=>{
          setNotFound(true);
          
        });
    
  }, [categoryParams]);
  const fetchMoreData = () => {
    axios
      .get(
        `en/getdata/offer?type=category&id=${categoryParams}&page=${nextPage}`
      )
      .then((res) => {
        let newItems = products.concat(res.data.products.data);
        setHasMore(res.data.products.next_page_url !== null);
        setProducts(newItems);
        setItems(newItems);
        setNextPage(nextPage + 1);
      });
  };
  return (
    <div className="container my-2">
     {!notFound && categoryParams && <HeaderComponent text={`Sale On ${categoryName}`} /> }
     {notFound &&  <HeaderComponent text='No Data Found'/> }
      <div className="row">
        <div className="col">
          <div className="mbRefine">
            <div className="mbbuttonWrap text-right mr-2">
              <button onClick={() => setMFilter(!mFilter)} className="mbButton">
                Refine
              </button>
            </div>
            <div
              className={
                mFilter ? "filterItemContainer active" : "filterItemContainer"
              }
            >
              <span onClick={() => setMFilter(false)} className="cancleBtn">
                <FontAwesomeIcon icon={faWindowClose} size="3x" />
              </span>
              <div className="filterInner">
                <div className="sidebarHeader">
                  <span className="headerTitle">Refine</span>
                </div>
                <div className="sidebarContent">
                  <ul>
                    {offers &&
                      offers.map((offer) => (
                        <li key={offer.id}>
                          <Link href={`/campaigns/sale?id=${offer.id}`}>
                            <a
                              onClick={() => setMFilter(false)}
                              className={
                                categoryParams == offer.id ? "active" : ""
                              }
                            >
                              {offer.name}
                            </a>
                          </Link>
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-3">
          <div className="sidebar">
            <div className="sidebarHeader">
              <span className="headerTitle">Refine</span>
            </div>
            <div className="sidebarContent">
              <ul>
                {offers &&
                  offers.map((offer) => (
                    <li key={offer.id}>
                      <Link href={`/campaigns/sale?id=${offer.id}`}>
                        <a
                          className={categoryParams == offer.id ? "active" : ""}
                        >
                          {offer.name}
                        </a>
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-9">
          <div className="saleProducts">
            {/* {products &&
              products.map((product) => (
                <Product product={product} key={product.id} />
              ))} */}
            {empty && (
              <h5 className="alert alert-info">
                No products for now. Please come back again
              </h5>
            )}

            {items && (
              <InfiniteScroll
                dataLength={items.length}
                next={fetchMoreData}
                hasMore={hasMore}
                loader={<h2 style={{ textAlign: "center" }}>Loading...</h2>}
                endMessage={
                  <p style={{ textAlign: "center" }}>
                    <b>Yay! You have seen it all</b>
                  </p>
                }
              >
                <>
                  <div className="best_selling_page">
                    
                    {items.map((product) => (
                        // <h2>{product.name}</h2>
                      <Product product={product} key={product.id} />
                    ))}
                  </div>
                </>
              </InfiniteScroll>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export async function getServerSideProps(context) {

  // console.log(context.query.id)

  return {
    props: {
      id:context.query.id ?context.query.id:'' 
    }
  };
}
export default Index;
