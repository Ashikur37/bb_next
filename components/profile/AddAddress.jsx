import React, { useState, useEffect } from "react";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import axios from "axios";
import { useRouter } from "next/router";
import styles from "../../styles/UserProfilePage.module.scss";

function AddAddress({ lang, auth }) {
  const router = useRouter();
  useEffect(() => {
    if (!auth.isAuthenticated || !localStorage.getItem("auth_token")) {
      router.push("/login");
    }
    if (auth.isAuthenticated) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${
        localStorage.getItem("auth_token") || ""
      }`;
    }
  }, [auth, lang]);

  const [phoneNumber, setPhoneNumber] = useState();
  const [fname, setFname] = useState();
  const [lname, setLname] = useState();
  const [country, setCountry] = useState("Qatar");
  const [address, setAddress] = useState();
  const [city, setCity] = useState();
  const [postCode, setPostCode] = useState();
  const [dbilling, setDBilling] = useState(false);
  const [dshipping, setDShipping] = useState(false);
  const phoneNumberHandler = (value) => {
    setPhoneNumber(value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (!isValidPhoneNumber(phoneNumber)) {
      return;
    }
    let billing = {
      fname,
      lname,
      phoneNumber,
      country,
      address,
      city,
      postCode,
      addressType: "billing",
      isDefault: dbilling,
    };
    let shipping = {
      fname,
      lname,
      phoneNumber,
      country,
      address,
      city,
      postCode,
      addressType: "shipping",
      isDefault: dshipping,
    };

    let host = `http://localhost:${process.env.PORT}`;
    axios
      .post(host + "/api/account/address", { billing, shipping })
      .then((res) => {
        if (res.data.ok == 1) {
          setPhoneNumber();
          setFname();
          setLname();
          setCountry("Qatar");
          setAddress();
          setCity();
          setPostCode();
          setDBilling(false);
          setDShipping(false);
          router.push("/profile/addressbook");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className={styles.new_address}>
      <div className={`${styles.sectionHeader} mb-3`}>New Address</div>
      <div className={styles.newAddress_form}>
        <form onSubmit={submitHandler}>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="fname">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="fname"
                  required
                  name="fname"
                  placeholder="first name..."
                  value={fname}
                  onChange={(e) => setFname(e.target.value)}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="lname">Last Name</label>
                <input
                  type="text"
                  required
                  className="form-control"
                  id="lname"
                  name="lname"
                  placeholder="Last name..."
                  value={lname}
                  onChange={(e) => setLname(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="telephone">Telephone</label>
                <PhoneInput
                  international
                  defaultCountry="QA"
                  value={phoneNumber}
                  onChange={phoneNumberHandler}
                  autoComplete="none"
                  error={
                    phoneNumber
                      ? isValidPhoneNumber(phoneNumber)
                        ? undefined
                        : "Invalid phone number"
                      : "Phone number required"
                  }
                />
                {phoneNumber && isValidPhoneNumber(phoneNumber) ? null : (
                  <div className="ml-4 text-danger">
                    Valid phone number required
                  </div>
                )}
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label>Country</label>
                <select
                  value={country}
                  name="country"
                  className="form-control"
                  onChange={(e) => setCountry(e.target.value)}
                >
                  <option value="Qatar">Qatar</option>
                  {/* <option value="BD">BD</option> */}
                </select>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="address1">Address</label>
                <input
                  type="text"
                  required
                  className="form-control"
                  id="address"
                  placeholder="Address line one..."
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="city">City</label>
                <input
                  type="text"
                  required
                  className="form-control"
                  id="city"
                  placeholder="city..."
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="postcode">Post Code/Zip</label>
                <input
                  required
                  type="text"
                  className="form-control"
                  id="postcode"
                  placeholder="Post Code/Zip"
                  value={postCode}
                  onChange={(e) => setPostCode(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <div className="custom-control custom-checkbox mr-sm-2">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="dbilling"
                    name="dbilling"
                    checked={dbilling}
                    onChange={(e) => setDBilling(!dbilling)}
                  />
                  <label className="custom-control-label" htmlFor="dbilling">
                    Use as my default billing address
                  </label>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <div className="custom-control custom-checkbox mr-sm-2">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="dshipping"
                    name="dshipping"
                    checked={dshipping}
                    onChange={(e) => setDShipping(!dshipping)}
                  />
                  <label className="custom-control-label" htmlFor="dshipping">
                    Use as my default shipping address
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <input
                type="submit"
                className={styles.saveBtn}
                value="Save New Address"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddAddress;
