import React, { useState, useEffect } from "react";
import Link from "next/link";
import Axios from "axios";
import { useRouter } from 'next/router'
import styles from "../../styles/UserProfilePage.module.scss"
import { withTranslation } from "../../i18n";

function AddressBook({ Auth, language, data,t }) {
  const router = useRouter()
  const [defaultAddress] = useState(data.filter((a) => a.isDefault));
  const [additionalAddress] = useState(
    data.filter((a) => a.isDefault == false)
  );
  useEffect(() => {
    if (!Auth) {
      window.location.href = "/login";
    }
  }, [Auth, language]);
  const deleteAddress = (id) => {
      Axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem("auth_token") || ""}`;
      Axios.get(`/api/deleteAddress?id=${id}`).then(res=>{
          if(res.data.error){
             window.alert(res.data.error);
          }else{
            router.reload();
          }
      })
  };
  return (
    <div className={styles.addressbook}>
      {defaultAddress && <div className={styles.addressbook_title}>{t("Default Addresses")}</div>}
      <div className="row mb-3">
        {defaultAddress &&
          defaultAddress.map((address) => (
            <div className="col-md-6" key={address.fname + address.phoneNumber}>
              <div className={styles.address_info}>
                <div className={styles.address_title}>
                  {address.addressType == "shipping"
                    ? t("Shipping Address")
                    : t("Billing Address")}
                </div>

                <ul className={`${styles.address_list} mb-2`}>
                  <li>{`${address.fname} ${address.lname}`}</li>
                  <li>{`${address.address}`}</li>
                  <li>{`${address.city}`}</li>
                  <li>{`${address.postCode}`}</li>
                  <li>{`${address.country}`}</li>
                  <li>T: {`${address.phoneNumber}`}</li>
                </ul>
                <br />
                <Link href={`/profile/address/edit/${address._id}`}>
                  <a
                    style={{
                      textDecoration: "",
                      color: "black",
                    }}
                    className="btn btn-outline-warning btn-sm"
                  >
                    Edit
                  </a>
                </Link>
                <a
                  onClick={() => deleteAddress(address._id)}
                  className="btn btn-outline-danger btn-sm ml-3"
                >
                  Delete
                </a>
              </div>
            </div>
          ))}
      </div>
      {additionalAddress && <div className={styles.addressbook_title}>{t("Additional Addresses")}</div>}
      <div className="row">
        {additionalAddress &&
          additionalAddress.map((address) => (
            <div className="col-md-6" key={address.fname + address.phoneNumber}>
              <div className={styles.address_info}>
                <div className={styles.address_title}>
                  {address.addressType == "shipping"
                    ? t("Shipping Address")
                    : t("Billing Address")}
                </div>

                <ul className={styles.address_list}>
                  <li>{`${address.fname} ${address.lname}`}</li>
                  <li>{`${address.address}`}</li>
                  <li>{`${address.city}`}</li>
                  <li>{`${address.postCode}`}</li>
                  <li>{`${address.country}`}</li>
                  <li>T: {`${address.phoneNumber}`}</li>
                </ul>
                <br />
                <Link href={`/profile/address/edit/${address._id}`}>
                  <a
                    style={{
                      textDecoration: "",
                      color: "black",
                    }}
                    className="btn btn-outline-warning btn-sm"
                  >
                    Edit
                  </a>
                </Link>
                <a
                  onClick={() => deleteAddress(address._id)}
                  className="btn btn-outline-danger btn-sm ml-3"
                >
                  Delete
                </a>
              </div>
            </div>
          ))}
      </div>
      <div className={`${styles.add_new } mt-3`}>
        <Link href="/profile/address/new">
          <a className="btn btn-lg">{t('ADD NEW')}</a>
        </Link>
      </div>
    </div>
  );
}

export default withTranslation("common")(AddressBook);
