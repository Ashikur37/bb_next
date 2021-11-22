import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { i18n, withTranslation } from "../../../i18n";
import Link from "next/link";
import { connect } from "react-redux";
const Header = dynamic(() =>
  import("../../../components/layout/partials/Header")
);
import ProgressBar from "../../atom/ProgressBar";
import { useForm } from "react-hook-form";
import { cities, states2, states_all } from "../static";
import Autosuggest from "react-autosuggest";
import PhoneInput from "react-phone-number-input";
import { parsePhoneNumber, isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { calculateSubTotal, priceWithoutDiscount } from "../../utils/helper";

function StepOne(props) {
  const { t, styles } = props;
  const {
    register,
    formState: { errors },
    watch,
    handleSubmit,
    getValues,
  } = useForm();
  const [suggestions, setSuggestions] = useState({ suggestions: [] });
  const [suggestionsCity, setSuggestionsCity] = useState({ suggestions: [] });
  const [value, setValue] = useState(props.val.billing_state);
  const [city, setCity] = useState(props.val.billing_city);
  const [states, setStates] = useState(null);
  const [orderSource, setOrderSource] = useState("");
  const [sourceDetails, setSourceDetails] = useState("");
  const [email, setEmail] = useState(props.val.customer_email);
  // const [sourceEmail, setSourceEmail] = useState("noemail@beautybooth.com");
  const [customOrder, setCustomOrder] = useState(false);
  const [customOrderCreator, setCustomOrderCreator] = useState(null);

  const [phoneNumber, setPhoneNumber] = useState(
    props.val.country_code + props.val.customer_phone
  );
  const phoneNumberHandler = (value) => {
    setPhoneNumber(value);
  };
  const submitHandler = (data) => {
    if (isValidPhoneNumber(phoneNumber) && value && city) {
      let phone = parsePhoneNumber(phoneNumber);
      data.country_code = "+" + phone.countryCallingCode;
      data.customer_phone = phone.nationalNumber;
      data.billing_state = value;
      data.billing_city = city;
      data.source_name = orderSource;
      data.source_details = sourceDetails;
      data.customer_email = email;
      data.custom_order = customOrder;
      data.custom_order_creator = customOrderCreator;
      props.changeStep(data);
    }
  };
  const radioHandler = (e) => {
    let value = e.target.value;
    props.radioHandler(value);
  };
  useEffect(() => {
    props.val.state = value;
  });
  useEffect(() => {
    if (cities.includes(city)) {
      setStates(states2[city]);
    }
  }, [city]);
  useEffect(() => {
    setStates(states_all);
  }, [states_all]);

  useEffect(() => {
    setCustomOrder(
      window.localStorage.getItem("auth_token") &&
        !JSON.parse(window.localStorage.getItem("user")).isCustomer
    );
    setCustomOrderCreator(
      window.localStorage.getItem("auth_token") &&
        JSON.parse(window.localStorage.getItem("user")).id
    );
    window.scrollTo(0, 0);
  }, []);

  // const getSuggestions = () => {
  //   const inputValue = value.trim().toLowerCase();
  //   const inputLength = inputValue.length;

  //   return inputLength === 0 ? [] : states.filter(item =>{
  //     // lang.toLowerCase().slice(0, inputLength) === inputValue
  //      return item.toLowerCase().indexOf(inputValue) > -1;
  //     }
  //   );
  // };
  // function escapeRegexCharacters(str) {
  //   return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  // }

  function getSuggestions(param, text) {
    const inputValue = param.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0
      ? []
      : text.filter((item) => {
          // lang.toLowerCase().slice(0, inputLength) === inputValue
          return item.toLowerCase().indexOf(inputValue) > -1;
        });
  }

  function getSuggestionValue(suggestion) {
    return suggestion;
  }
  function getCitySuggestionValue(suggestion) {
    return suggestion;
  }

  const onSuggestionsFetchRequested = () => {
    setSuggestions({
      suggestions: getSuggestions(value, states),
    });
  };
  const onSuggestionsFetchRequestedCity = () => {
    setSuggestionsCity({
      suggestions: getSuggestions(city, cities),
    });
  };

  // Autosuggest will call this function every time you need to clear suggestions.
  const onSuggestionsClearRequested = () => {
    setSuggestions({
      suggestions: [],
    });
  };
  // Autosuggest will call this function every time you need to clear suggestions.
  const onSuggestionsClearRequestedCity = () => {
    setSuggestionsCity({
      suggestions: [],
    });
  };

  function renderSuggestion(suggestion) {
    return suggestion;
  }
  function renderSuggestionCity(suggestion) {
    return suggestion;
  }
  function customDiscountHandler() {
    let discountvalue = props.cartItems.reduce(
      (acc, item) =>
        item.bulk_id && !props.val.coupon
          ? (acc +=
              item.qnt * item.price.amount -
              (item.qnt * item.price.amount * item.parcent) / 100)
          : (acc += item.qnt * item.price.amount),
      0
    );
    let value = props.cartItems.reduce(
      (acc, item) => (acc += item.qnt * item.price.amount),
      0
    );
    return value - discountvalue;
  }
  function grandTotal() {
    return props.cartItems.reduce(
      (acc, item) =>
        item.bulk_id && !props.val.coupon
          ? (acc +=
              item.qnt * item.price.amount -
              (item.qnt * item.price.amount * item.parcent) / 100)
          : (acc += item.qnt * item.price.amount),
      0
    );
  }
  return (
    <div className={styles.step_one}>
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            {/* <HeaderComponent  /> */}
            <div className="text-center">
              <Header h="h2" text={t("address")} Link={Link}></Header>
            </div>
            <ProgressBar styles={styles} active={1} />
            <div className={styles.delivery_form}>
              <div className={styles.form_title}>
                {t("Fill-up your delivery form")}
              </div>
              <form autoComplete="off" onSubmit={handleSubmit(submitHandler)}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="input_label">{t("Full Name")}*</label>
                      <input
                        name="customer_first_name"
                        type="text"
                        defaultValue={
                          customOrder ? "" : props.val.customer_first_name
                        }
                        className={
                          errors?.customer_first_name
                            ? "form-control  is-invalid"
                            : "form-control "
                        }
                        {...register("customer_first_name", { required: true })}
                        // ref={register({ required: true })}
                      />
                      {errors?.customer_first_name && (
                        <div className="invalid-feedback">
                          Full Name Required.
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="col-md-6">
                    {window && window.localStorage.getItem("auth_token") ? (
                      <div className="form-group">
                        <label className="input_label">{t("Phone")}*</label>
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
                        {isValidPhoneNumber(phoneNumber) ? null : (
                          <div className="ml-4 text-danger">
                            Valid phone number required
                          </div>
                        )}
                        <input
                          hidden
                          name="customer_email"
                          defaultValue={props.val.customer_email}
                          autoComplete="nope"
                        />
                      </div>
                    ) : (
                      <div className="form-group">
                        <label className="input_label">Email address*</label>
                        <input
                          type="email"
                          autoComplete="nope"
                          name="customer_email"
                          defaultValue={props.val.customer_email}
                          onChange={(e) => {
                            setEmail(e.currentTarget.value);
                          }}
                          className="form-control"
                          required
                          // className={
                          //   errors?.customer_email
                          //     ? "form-control is-invalid"
                          //     : "form-control "
                          // }
                          // {...register("customer_email",{required:true,pattern:/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/})}
                        />
                        {/* {errors?.customer_email &&
                          errors?.customer_email.type === "required" && (
                            <div className="invalid-feedback">
                              Email Address Required.
                            </div>
                          )}
                        {errors?.customer_email &&
                          errors?.customer_email.type === "pattern" && (
                            <div className="invalid-feedback">
                              Not a Valid Email.
                            </div>
                          )} */}
                      </div>
                    )}
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label className="checkbox_label">
                        <input
                          onChange={() => props.checkBoxHandler()}
                          checked={props.val.active}
                          type="checkbox"
                        />
                        <span></span>
                        {t("I know My BluePlates")}
                      </label>
                    </div>
                  </div>
                  {props.val.active ? (
                    <div className="col-lg-4">
                      <div className="form-group">
                        <label className="input_label">Street*</label>
                        <input
                          name="street"
                          type="text"
                          defaultValue={props.val.street}
                          className={
                            errors?.street
                              ? "form-control  is-invalid"
                              : "form-control "
                          }
                          {...register("street", { required: true })}
                          // ref={register({ required: true })}
                        />
                        {errors?.street && (
                          <div className="invalid-feedback">
                            Street Required.
                          </div>
                        )}
                      </div>
                    </div>
                  ) : null}
                  {props.val.active ? (
                    <div className="col-lg-4">
                      <div className="form-group">
                        <label className="input_label">Zone*</label>
                        <input
                          name="zone"
                          type="text"
                          defaultValue={props.val.zone}
                          className={
                            errors?.street
                              ? "form-control  is-invalid"
                              : "form-control "
                          }
                          {...register("zone",{required:true})}

                          // ref={register({ required: true })}
                        />
                        {errors?.zone && (
                          <div className="invalid-feedback">Zone Required.</div>
                        )}
                      </div>
                    </div>
                  ) : null}
                  {props.val.active ? (
                    <div className="col-lg-4">
                      <div className="form-group">
                        <label className="input_label">Building*</label>
                        <input
                          name="building"
                          type="text"
                          defaultValue={props.val.building}
                          className={
                            errors?.building
                              ? "form-control  is-invalid"
                              : "form-control "
                          }
                          {...register("building",{required:true})}

                          // ref={register({ required: true })}
                        />
                        {errors?.building && (
                          <div className="invalid-feedback">
                            Building Required.
                          </div>
                        )}
                      </div>
                    </div>
                  ) : null}
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="input_label">
                        {t("Full Address")}*
                      </label>
                      <input
                        autoComplete="nope"
                        defaultValue={props.val.billing_address_1}
                        name="billing_address_1"
                        type="text"
                        className={
                          errors?.billing_address_1
                            ? "form-control  is-invalid"
                            : "form-control "
                        }
                        {...register("billing_address_1", { required: true })}
                        // ref={register({ required: true })}
                      />
                      {errors?.billing_address_1 && (
                        <div className="invalid-feedback">
                          Full Address Required.
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="input_label">
                        {t("Apartment/Suit/Unit (optional)")}
                      </label>
                      <input
                        name="billing_address_2"
                        autoComplete="none"
                        defaultValue={props.val.billing_address_2}
                        type="text"
                        className="form-control "
                        {...register("billing_address_2")}
                        // ref={register}
                      />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="input_label">{t("City")}*</label>
                      <Autosuggest
                        id="city"
                        suggestions={suggestionsCity.suggestions}
                        onSuggestionsFetchRequested={
                          onSuggestionsFetchRequestedCity
                        }
                        onSuggestionsClearRequested={
                          onSuggestionsClearRequestedCity
                        }
                        getSuggestionValue={getCitySuggestionValue}
                        renderSuggestion={renderSuggestionCity}
                        inputProps={{
                          className: "form-control",
                          autoComplete: "none",
                          placeholder: "Your City name",
                          value: city,
                          onChange: (e, { newValue }) => setCity(newValue),
                        }}
                      />
                      {/* <input
                        type="text"
                        name="billing_city"
                        defaultValue={props.val.billing_city}
                        ref={register({
                          required: true,
                        })}
                        className={
                          errors?.billing_city
                            ? "form-control input_box is-invalid"
                            : "form-control input_box"
                        }
                      /> */}
                      {!city && (
                        <div className="text-danger">City Required.</div>
                      )}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="input_label">{t("Area")}*</label>
                      {/* <input
                        type="text"
                        name="billing_state"
                        defaultValue={props.val.billing_state}
                        className={
                          errors?.billing_state
                            ? "form-control input_box is-invalid"
                            : "form-control input_box"
                        }
                        ref={register({ required: true })}
                      /> */}

                      <Autosuggest
                        id="states"
                        suggestions={suggestions.suggestions}
                        onSuggestionsFetchRequested={
                          onSuggestionsFetchRequested
                        }
                        onSuggestionsClearRequested={
                          onSuggestionsClearRequested
                        }
                        getSuggestionValue={getSuggestionValue}
                        renderSuggestion={renderSuggestion}
                        inputProps={{
                          autoComplete: "none",
                          placeholder: "Your state name",
                          value,
                          className: "form-control",
                          onChange: (e, { newValue }) => (
                            setValue(newValue), (props.val.state = newValue)
                          ),
                        }}
                      />
                      {!value && (
                        <div className="text-danger">State Required.</div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div onChange={radioHandler} className="col-lg-6 ">
                    <div className="form-group">
                      <label className="input_label">
                        {t("Delivery Time")}*
                      </label>

                      <div className={styles.deleviry_schedule}>
                        <div
                          className={`form-group ${styles.info_wrap} ${styles.form_group}`}
                        >
                          <span className={styles.info}>9AM - 1PM </span>
                          <label
                            htmlFor="morning"
                            className={`input_label ${styles.info_wrapper}`}
                          >
                            {t("Morning")}
                          </label>
                          <input
                            defaultChecked={
                              props.val.order_schedule == "morning"
                                ? true
                                : false
                            }
                            id="morning"
                            type="radio"
                            name="order_schedule"
                            defaultValue="morning"
                            className="form-control "
                          />
                        </div>
                        <div
                          className={`${styles.info_wrap} form-group ${styles.form_group}`}
                        >
                          <span className={styles.info}>4PM - 7PM </span>
                          <label htmlFor="afternoon" className="input_label">
                            {t("Afternoon")}
                          </label>
                          <input
                            id="afternoon"
                            type="radio"
                            name="order_schedule"
                            defaultValue="afternoon"
                            defaultChecked={
                              props.val.order_schedule == "afternoon"
                                ? true
                                : false
                            }
                            className="form-control "
                          />
                        </div>
                        <div
                          className={`form-group ${styles.info_wrap} ${styles.form_group}`}
                        >
                          <span className={styles.info}>7PM - 10PM </span>
                          <label htmlFor="evening" className="input_label">
                            {t("Evening")}
                          </label>
                          <input
                            id="evening"
                            type="radio"
                            name="order_schedule"
                            defaultValue="evening"
                            defaultChecked={
                              props.val.order_schedule == "evening"
                                ? true
                                : false
                            }
                            className="form-control "
                          />
                        </div>
                        <div
                          className={`form-group ${styles.info_wrap} ${styles.form_group}`}
                        >
                          {/* <span className={styles.info}>7PM - 10PM </span> */}
                          <label htmlFor="anytime" className="input_label">
                            {t("Any Time")}
                          </label>
                          <input
                            id="anytime"
                            type="radio"
                            name="order_schedule"
                            defaultValue="anytime"
                            defaultChecked={
                              props.val.order_schedule == "anytime"
                                ? true
                                : false
                            }
                            className="form-control "
                          />
                        </div>

                        <input
                          id="shipping_cost"
                          type="text"
                          name="shipping_cost"
                          // ref={register}
                          defaultValue={props.shipping}
                          // value={props.shipping}
                          hidden
                        />
                        <input
                          id="shipping_method"
                          type="text"
                          name="shipping_method"
                          defaultValue={
                            props.shipping === 0 ? "free_shipping" : "flat_rate"
                          }
                          // ref={register}
                          hidden
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label className="input_label">
                        {t("Note(optional)")}:
                      </label>
                      <textarea
                        value={props.val.order_note}
                        rows="2"
                        name="order_note"
                        className="form-control "
                        onChange={(e) => props.testAreaHandler(e.target.value)}
                      ></textarea>
                    </div>
                  </div>
                </div>

                <div className={styles.submit_container}>
                  <input
                    className={styles.proceed}
                    type="submit"
                    value={t("PROCEED TO PAYMENT")}
                  />
                </div>
              </form>
            </div>
          </div>
          <div className="col-md-4">
            {customOrder ? (
              <div className="order_source">
                <h5>Order Source</h5>
                <div className="form-group">
                  <label className="input_label">Email address*</label>
                  <input
                    type="email"
                    name="customer_email"
                    defaultValue={props.val.customer_email}
                    onChange={(e) => setEmail(e.currentTarget.value)}
                    required
                    className="form-control"
                    // className={
                    //   errors?.customer_email
                    //     ? "form-control is-invalid"
                    //     : "form-control"
                    // }
                    // {...register("customer_email",{required:true,pattern:/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/})}
                    // ref={register({
                    //   required: true,
                    //   pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                    // })}
                  />
                  {errors?.customer_email &&
                          errors?.customer_email.type === "required" && (
                            <div className="invalid-feedback">
                              Email Address Required.
                            </div>
                          )}
                        {errors?.customer_email &&
                          errors?.customer_email.type === "pattern" && (
                            <div className="invalid-feedback">
                              Not a Valid Email.
                            </div>
                          )}
                </div>
                <select
                  name="order_source"
                  value={orderSource}
                  onChange={(e) => setOrderSource(e.currentTarget.value)}
                  className={
                    errors?.order_source
                      ? "custom-select is-invalid"
                      : "custom-select"
                  }
                  // ref={register({ required: true })}
                >
                  <option value="" hidden="">
                    Select one
                  </option>
                  <option value="facebook">Facebook</option>
                  <option value="instagram">Instagram</option>
                  <option value="phone-call">Phone Call</option>
                  <option value="whatsapp">WhatsApp</option>
                </select>
                {orderSource !== "" ? (
                  <div className="form-group ">
                    <label htmlFor="order_source">
                      Source<span>*</span>
                    </label>
                    <input
                      name="source_details"
                      value={sourceDetails}
                      onChange={(e) => setSourceDetails(e.currentTarget.value)}
                      type="text"
                      className={
                        errors?.source_details
                          ? "form-control is-invalid"
                          : "form-control"
                      }
                      // ref={register({ required: true })}
                      placeholder="Enter Facebook/Instagram/WhatsApp"
                    />
                  </div>
                ) : (
                  ""
                )}
                <hr />
              </div>
            ) : (
              ""
            )}
            <div className={styles.cart_list}>
              <div className={styles.item_title}>{t("Product Check")}</div>
              <div className={styles.cart_items}>
                {props.cartItems.map((cartItem, index) => (
                  <div className={styles.cart_item} key={index}>
                    <div className={styles.details}>
                      <div className={styles.img_wrap}>
                        <img src={cartItem.thumb} alt="" />
                      </div>
                      <div className={styles.detail}>
                        <span className={styles.name}>{cartItem.name}</span>
                        <span className={styles.option_value}>
                          {cartItem.option_value}
                        </span>
                        <div className={styles.qnt}>
                          {" "}
                          {cartItem.qnt} * {cartItem.price.formatted}
                        </div>
                        {/* <span className="price_tag">Price {</span> */}
                      </div>
                    </div>

                    {/* <div className="quantity">
                      <div className="button_group">
                        <span>-</span>
                        <span>1</span>
                        <span>+</span>
                      </div>
                    </div> */}
                  </div>
                ))}
              </div>
            </div>
            <div className={`${styles.summery} mb-2`}>
              <div className={styles.item_title}>{t("ORDER SUMMARY")}</div>
              <div className={styles.summery_items}>
                <div className={styles.summery_item}>
                  <span className={styles.sub}>{t("ORDER SUB-TOTAL")}</span>
                  <span className={styles.amount}>
                    QAR {priceWithoutDiscount(props.cartItems)}
                  </span>
                </div>
                <div className={styles.summery_item}>
                  <span className={styles.sub}>{t("DISCOUNT")}</span>
                  <span className={styles.amount}>
                    {" "}
                    &#8722; QAR{" "}
                    {props.val.coupon
                      ? props.val.discount
                      : priceWithoutDiscount(props.cartItems) -
                        calculateSubTotal(props.cartItems)}
                  </span>
                </div>
                <div className={styles.summery_item}>
                  <span className={styles.sub}>{t("SHIPPING")}*</span>
                  <span className={styles.amount}>QAR {props.shipping}.00</span>
                </div>
                <div className={`${styles.summery_item} ${styles.total}`}>
                  <span className={styles.sub}>{t("GRAND TOTAL")}</span>
                  <span className={styles.amount}>
                    QAR{" "}
                    {(
                      calculateSubTotal(props.cartItems, props.val.coupon) +
                      props.shipping -
                      props.val.discount
                    ).toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => ({
  cartItems: state.cart.cartItem,
  auth: state.auth,
});
export default connect(mapStateToProps)(withTranslation("common")(StepOne));
