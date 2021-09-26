import React from "react";
import Swiper from "react-id-swiper";
const params = {
  loop: true,
  autoplay: true,
  speed: 400,
  slidesPerView: 1,
  observer: true,
  observeParents: true,
};
function CampaignBanner({ campaigns }) {
  return (
    <div className="row">
      <div className="col">
        <div className="campaign__banner__slide">
          {campaigns && (
            <Swiper {...params} shouldSwiperUpdate>
              {campaigns.map((c, index) => (
                <div key={index}>
                  <img src={c.banner} alt={c.slug} />
                </div>
              ))}
            </Swiper>
          )}
        </div>
      </div>
    </div>
  );
}

export default CampaignBanner;
