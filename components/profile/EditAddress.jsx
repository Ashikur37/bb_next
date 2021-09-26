import React, { useState, useEffect } from 'react';
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import axios from 'axios';
import { useRouter } from "next/router";

const EditAddress = ({ old_address, token = null }) => {
    const router = useRouter();
    useEffect(() => {
        if (!token) {
            router.push("/login");
        } else {
            axios.defaults.headers.common["Authorization"] = `Bearer ${token || ""}`;
        }
    }, []);

    const [fname, setFname] = useState(old_address.fname);
    const [lname, setLname] = useState(old_address.lname);
    const [country, setCountry] = useState(old_address.country);
    const [address, setAddress] = useState(old_address.address);
    const [city, setCity] = useState(old_address.city);
    const [postCode, setPostCode] = useState(old_address.postCode);
    const [isDefault, setIsDefault] = useState(old_address.isDefault);
    const [phoneNumber, setPhoneNumber] = useState(old_address.phoneNumber);
    const phoneNumberHandler = (value) => {
        setPhoneNumber(value);
    };
    const submitHandler = (e) => {
        e.preventDefault();
        if (!isValidPhoneNumber(phoneNumber)) {
            return;
        }

        axios.post(`/api/account/setAddress?id=${old_address._id}`, {
            fname,
            lname,
            country,
            address,
            city,
            postCode,
            isDefault,
            phoneNumber,
            addressType: old_address.addressType
        })
            .then(res => {
                if (res.data == "success") {
                    router.push("/profile/addressbook");
                }
            })
            .catch(err => {
                console.log(err);
            })

    }
    return (
        <>
            <h2>Edit Address</h2><hr />
            {
                old_address && (
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
                                    {isValidPhoneNumber(phoneNumber) ? null : (
                                        <div className="ml-4 text-danger">
                                            Valid phone number required
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label >Country</label>
                                    <select value={country} name="country" className="form-control" onChange={(e) => setCountry(e.target.value)} >
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
                                            checked={isDefault}
                                            onChange={(e) => setIsDefault(e.currentTarget.checked)}
                                        />
                                        <label className="custom-control-label" htmlFor="dbilling">
                                            Use as my default {old_address.addressType} address
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <input type='submit' className="saveBtn" value='Save New Address' />
                            </div>
                        </div>
                    </form>
                )
            }

        </>
    )
}

export default EditAddress