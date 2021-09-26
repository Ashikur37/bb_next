import React, { lazy, Suspense, useEffect, useState } from "react";
import axios from "../../../redux/actions/axios";
// import CampaignTabs from "./CampaignTabs";
const CampaignBanner = lazy(() => import("./CampaignBanner"));
const OfferByBrands = lazy(() => import("./OfferByBrands"));
const OfferByCategories = lazy(() => import("./OfferByCategories"));
const OfferList = lazy(() => import("./OfferList"));
const Footer = lazy(() => import("../../layout/Footer"));
function CampaignPage() {
  const [campaigns, setCampaigns] = useState(null);
  useEffect(() => {
    axios.get('/getdata/campaign_offers').then(res => {
      setCampaigns(res.data)
    });
  }, []);
  return (
    <Suspense fallback={null}>
      {campaigns &&
        (
          <>
            <div className="compaign__page container">
              <CampaignBanner campaigns={campaigns.campaigns} />
              <OfferList campaigns={campaigns.campaigns} />
              <OfferByBrands brands={campaigns.brands} />
              <OfferByCategories categories={campaigns.categories} />
            </div>
            <Footer />
          </>
        )}
    </Suspense>
  );
}

export default CampaignPage;
