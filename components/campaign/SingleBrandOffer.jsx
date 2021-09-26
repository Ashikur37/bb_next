import React, { useState } from "react";
import Link from "next/link";
// import Countdown from "react-countdown";

// const renderer = ({ hours, minutes, seconds, completed }) => {
//   if (completed) {
//     // Render a completed state
//     return "Already end";
//   } else {
//     // Render a countdown
//     return (
//       <span>
//         {hours}h:{minutes}m:{seconds}s
//       </span>
//     );
//   }
// };

function SingleBrandOffer({ url, img, ends, name, parcent, total }) {
  const [disable, setDisable] = useState(false);
  const completeHandler = () => {
    setDisable(true);
  };
  return (
    <div className="col-lg-3">
      <div className="brand__offer__card mb-5 px-2">
        <img src={img} alt="" />
        <div className="brand__name">{name}</div>
        {/* <div className="offer__percentage">Discount : {parcent}%</div>
        <div className="total__product">Total Products : {total}</div>
        <div className="offer__countdown">
          Ends in :{" "}
          {disable ? (
            "Already expired"
          ) : (
            <Countdown
              date={Date.now() + ends}
              renderer={renderer}
              onComplete={completeHandler}
            />
          )}
        </div> */}
        <Link href={url}>
          <a className="btn claims__button btn-block"> Claim this offer</a>
        </Link>
      </div>
    </div>
  );
}

export default SingleBrandOffer;
