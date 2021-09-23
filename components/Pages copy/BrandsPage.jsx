import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getAllBrands } from "../../redux/actions/brandsActions";
import { Link } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";

import "../../assets/sass/brandspage.scss";
import Footer from "../layout/Footer";

function BrandsPage(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
    if (props.allBrands.length === 0) {
      props.getAllBrands();
    }
  }, []);
  let Alphabate = [
    "0-9",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const refs = Alphabate.reduce((acc, value) => {
    acc[value.toLowerCase()] = React.createRef();
    return acc;
  }, {});
  
  const handleClick = (id) => {
    let y = refs[id].current.offsetTop - 250;
    window.scrollTo(0, y);
  };
  // refs[id].current.scrollIntoView({
  //   behavior: "smooth",
  //   block: "center",
  //   inline: "nearest",
  // });
  return (
    <>
      <div className="brands_page">
        <HelmetProvider>
          <Helmet>
            <title>Brands - Beauty Booth</title>
          </Helmet>
        </HelmetProvider>
        <div className="container">
          {/* <HeaderComponent text="Brands" /> */}
          <div className="row">
            <div className="brands_navigations">
              <div className="title">
                <span>Beauty Booth Brands</span>
              </div>
              <div className="navigation_div">
                <div className="title_div">
                  <span>GOTO:</span>
                </div>
                <ul>
                  {Object.keys(props.allBrands).map((alp) => (
                    <li key={alp}>
                      <a onClick={() => handleClick(alp.toLowerCase())}>
                        {alp}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="brand_list_details">
              <ul className="brand_lists">
                {Object.keys(props.allBrands).map((letter) => (
                  <li
                    ref={refs[letter.toLowerCase()]}
                    className="brandlist_group"
                    key={letter}
                  >
                    <div className="letter">
                      <div className="letter_wrapper">
                        <span>{letter.toUpperCase()}</span>
                      </div>
                    </div>
                    <div className="lists">
                      <ul>
                        {props.allBrands[`${letter}`].map((lt, index) => (
                          <li key={index}>
                            <Link to={`/brand/${lt.name.split(" ").join("-")}`}>
                              {lt.name}
                            </Link>
                          </li>
                        ))}

                        {/* <li>
                        <a href="#">Brand Name</a>
                      </li>
                      <li>
                        <a href="#">Brand Name</a>
                      </li> */}
                      </ul>
                    </div>
                    {/* <div className="letter">
                    <div className="letter_wrapper">
                      <span>{letter}</span>
                    </div>
                  </div> */}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
const mapStateToProps = (state) => ({
  allBrands: state.brands.allBrands,
});
const mapDispatchToProps = (dispatch) => {
  return {
    getAllBrands: () => getAllBrands(dispatch),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(BrandsPage);
