import React from "react";
import HeaderComponent from "../atom/HeaderComponent";
import StarRatings from "react-star-ratings";
import { withTranslation } from "../../i18n";

function Reviews(props) {
    const { t } = props;
const total = props.reviews.length;
    return (
        <div className="previous_review_container">
            {/* <HeaderComponent text={`${total} ${t('CUSTOMER REVIEWS')}`} /> */}
            <HeaderComponent text={ total+" " + t('CUSTOMER REVIEWS')} />
            <div className="row">
                {props.reviews.map((elem,index)=>
                    (<div className="col-md-4" key={index}>
                        <div className="previous_review">
                            <div className="customer_name">
                                <span>{elem.reviewer_name}</span>
                            </div>
                            <StarRatings
                                rating={elem.rating}
                                starRatedColor="#ec198e"
                                numberOfStars={5}
                                name="rating"
                            />
                            <div className="date">{elem.created_at.split(" ")[0]}</div>
                            <p className="details">
                                {elem.comment}
                            </p>
                        </div>
                    </div>)
                )}
                {/* <div className="col-md-4">
                    <div className="previous_review">
                        <div className="customer_name">
                            <span>Customer Name</span>
                        </div>
                        <StarRatings
                            rating={5}
                            starRatedColor="#ec198e"
                            numberOfStars={5}
                            name="rating"
                        />
                        <div className="date">20/02/2020</div>
                        <p className="details">
                            It is a long established fact that a reader will be
                            distracted by the readable content of a page when
                            looking at its layout. It is a long established fact
                            that a reader will be distracted by the readable content
                            of a page when looking at its layout.
                      </p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="previous_review">
                        <div className="customer_name">
                            <span>Customer Name</span>
                        </div>
                        <StarRatings
                            rating={3}
                            starRatedColor="#ec198e"
                            numberOfStars={5}
                            name="rating"
                        />
                        <div className="date">20/02/2020</div>
                        <p className="details">
                            It is a long established fact that a reader will be
                            distracted by the readable content of a page when
                            looking at its layout. It is a long established fact
                            that a reader will be distracted by the readable content
                            of a page when looking at its layout.
                      </p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="previous_review">
                        <div className="customer_name">
                            <span>Customer Name</span>
                        </div>
                        <StarRatings
                            rating={4}
                            starRatedColor="#ec198e"
                            numberOfStars={5}
                            name="rating"
                        />
                        <div className="date">20/02/2020</div>
                        <p className="details">
                            It is a long established fact that a reader will be
                            distracted by the readable content of a page when
                            looking at its layout. It is a long established fact
                            that a reader will be distracted by the readable content
                            of a page when looking at its layout.
                      </p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="previous_review">
                        <div className="customer_name">
                            <span>Customer Name</span>
                        </div>
                        <StarRatings
                            rating={2}
                            starRatedColor="#ec198e"
                            numberOfStars={5}
                            name="rating"
                        />
                        <div className="date">20/02/2020</div>
                        <p className="details">
                            It is a long established fact that a reader will be
                            distracted by the readable content of a page when
                            looking at its layout. It is a long established fact
                            that a reader will be distracted by the readable content
                            of a page when looking at its layout.
                      </p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="previous_review">
                        <div className="customer_name">
                            <span>Customer Name</span>
                        </div>
                        <StarRatings
                            rating={4}
                            starRatedColor="#ec198e"
                            numberOfStars={5}
                            name="rating"
                        />
                        <div className="date">20/02/2020</div>
                        <p className="details">
                            It is a long established fact that a reader will be
                            distracted by the readable content of a page when
                            looking at its layout. It is a long established fact
                            that a reader will be distracted by the readable content
                            of a page when looking at its layout.
                      </p>
                    </div>
                </div> */}
            </div>
        </div>
    );
}

export default withTranslation('product')(Reviews);