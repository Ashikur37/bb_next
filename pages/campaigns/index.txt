import React, { useEffect, useState, lazy, Suspense } from "react";
import axios from "../../redux/actions/axios";
// import CampaignBanner from "../../components/campaign/CampaignBanner";
import OfferList from "../../components/campaign/OfferList";
// import OfferByBrands from "../../components/campaign/OfferByBrands";
import OfferByCategories from "../../components/campaign/OfferByCategories";
import Head from "next/head";
import FreeGiftList from "../../components/campaign/FreeGiftList";
const DumpStockItems = lazy(() => import("../../components/campaign/DumpStockList"));
function index({lang}) {
  const [campaigns, setCampaigns] = useState(null);
  useEffect(() => {
    let locale = lang == "en" ?"en":"ar_QA";
    axios.get(`${locale}/getdata/campaign_offers`).then((res) => {
      setCampaigns(res.data);
    });
  }, [lang]);
  return (
    <div style={{ minHeight: 550 }}>
      {campaigns && (
        <>
          <Head>
            <title>Campaigns | Beautyboothqqa</title>
          </Head>
          <div className="compaign__page container">
            {/* <CampaignBanner campaigns={campaigns.campaigns} /> */}
            <OfferList campaigns={campaigns.campaigns} />
            <OfferByCategories categories={campaigns.categories} />
            {/* <OfferByBrands brands={campaigns.brands} /> */}
            <FreeGiftList products={campaigns.freeGift} />
            <Suspense fallback={null}>
              <DumpStockItems axios={axios} lang={lang}/>
            </Suspense>
          </div>
        </>
      )}
    </div>
  );
}

export default index;
