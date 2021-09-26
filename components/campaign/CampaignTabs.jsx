import React from "react";
import Link from 'next/link'
function CampaignTabs() {
  return (
    <div className="row">
      <div className="col">
        <div className="campaign__tabs">
          <ul className="campaign__tabs__ul">
            <li>
              <Link href="/">Toay&lsquo;s Deal</Link>{" "}
            </li>
            <li>
              <Link href="/">Cmapaign</Link>{" "}
            </li>
            <li>
              <Link href="/">Offer by brands</Link>{" "}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CampaignTabs;
