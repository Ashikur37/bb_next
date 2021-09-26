import React, { useState } from "react";
import Link from "next/link";
import Countdown from "react-countdown";

const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return "Already ended";
  } else {
    // Render a countdown
    return (
      <span>
        {days}d: {hours}h:{minutes}m:{seconds}s
      </span>
    );
  }
};

function SingleOffer({ name, ends, url, img, start, active, endsDate }) {
  const [disable, setDisable] = useState(false);
  const completeHandler = () => {
    setDisable(true);
  };
  return (
    <div className="single__offer">
      <img src={img} alt={name} />
      <div className="single__offer__desc px-2">
        <div className="offer__name">{name}</div>
        <div className="expire__time">Ends: {endsDate}</div>
        {/* <div className="offer__countdown my-2">
          {active ? (
            <span>
              {" "}
              Ends in:
              {disable ? (
                "Already ended"
              ) : (
                <Countdown
                  date={Date.now() + ends}
                  renderer={renderer}
                  onComplete={completeHandler}
                />
              )}
            </span>
          ) : (
            <span>Starts in: {start}</span>
          )}
        </div>
        <Link href={url}>
          <a
            className={
              disable || !active
                ? "btn claims__button btn-block disabled"
                : "btn claims__button btn-block"
            }
          >
            {" "}
            Claim this offer
          </a>
        </Link> */}
        <Link href={url}>
          <a className="btn btn-block claims__button mt-2">Claim This Offer</a>
        </Link>
      </div>
    </div>
  );
}

export default SingleOffer;
