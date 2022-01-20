const axios = require("axios");
const url = "https://admin.beautyboothqa.com/";
// const url = "http://localhost:8000/";
// const url = "https://new.beautybooth.shop/";
const Axios = axios.create({
  baseURL: url,
  responseType: "json",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("auth_token") || ""}`,
  },
});
module.exports = Axios;
/* Please add bearer token first while live for production */
