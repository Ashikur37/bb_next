import React, { useState } from "react";
import Link from "next/link";
import Head from "next/head";
import dynamic from "next/dynamic";
import { withTranslation } from "../../i18n";
import axios from "../../redux/actions/axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";
const FreeGiftList = dynamic(() =>
  import("../../components/campaign/FreeGiftList")
);
const DumpStockItems = dynamic(() =>
  import("../../components/campaign/DumpStockList")
);

const Others = (props) => {
  const t = props.t;
  const [mFilter, setMFilter] = useState(false);
  return (
    <div className="container my-2">
      <Head>
        <title>Other Campaigns | Beautyboothqa</title>
      </Head>
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
                    {props.offers &&
                      props.offers.map((offer, index) => (
                        <li key={index}>
                          <Link href={`/campaigns?id=${offer.id}`}>
                            <a onClick={() => setMFilter(false)}>
                              {offer.name}
                            </a>
                          </Link>
                        </li>
                      ))}
                    <li>
                      <Link href="/campaigns/other">
                        <a className="active">Others</a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-3">
          <div className="sidebar">
            <div className="sidebarHeader">
              <span className="headerTitle">Refine</span>
            </div>
            <div className="sidebarContent">
              <ul>
                {props.offers &&
                  props.offers.map((offer, index) => (
                    <li key={index}>
                      <Link href={`/campaigns?id=${offer.id}`}>
                        <a>{offer.name}</a>
                      </Link>
                    </li>
                  ))}
                <li>
                  <Link href="/campaigns/other">
                    <a className="active">Others</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-9">
          <FreeGiftList products={props.freeGift} t={t}></FreeGiftList>
          <DumpStockItems axios={axios} lang={props.lang} t={t} />
        </div>
      </div>
    </div>
  );
};
export async function getServerSideProps(context) {
  let language = context.req.language || "en";
  const data = await axios
    .get(language + "/getdata/campaign_offers")
    .then((res) => {
      return res.data;
    })
    .catch();
  const offers = data && data.categories;
  const freeGift = data && data.freeGift;
  return {
    props: {
      offers,
      freeGift,
      language,
    },
  };
}
export default withTranslation("common")(Others);
