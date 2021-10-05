"use strict";
require("dotenv").config();
require("./server/database");

//axios for laraver server
const axios = require("./components/utils/axios");
//axios for next server
const Axios = require("axios");
const path = require("path");
const express = require("express");
const next = require("next");

const cors = require("cors");
const cacheableResponse = require("cacheable-response");
const cookiesMiddleware = require("universal-cookie-express");
const bodyParser = require("body-parser");

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev, dir: "./" });
const handle = app.getRequestHandler();

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const Customer = require("./server/models/Customer");
const WaitList = require("./server/models/waitlist");
const SettingData = require("./server/models/SettingData");
const SpecialCoupon = require("./server/models/SpecialCoupon");

/**
 * Facebook conversion API
 */
 const bizSdk = require('facebook-nodejs-business-sdk');
 const Content = bizSdk.Content;
 const CustomData = bizSdk.CustomData;
 const EventRequest = bizSdk.EventRequest;
 const UserData = bizSdk.UserData;
 const ServerEvent = bizSdk.ServerEvent;
 
 const access_token = 'EAA5FTj0T4eMBAGpuoMsiBnJlibZA6SrF26O01ZBk6X7xCxZAyDaZCU8ThfYkMd7tZAkGZADdLjuxoKVH7c3ascDitViwmZB8YkJQpYqACpFiZBgM21RQsefHeDdRzY1MfWwW7oZAZCkJbqU9zZAKZAPLUcdc1WqPGHwNncrquqzjUPT1BheKIaQkmzZAXpIhZCtGrvb9cZD';
 const pixel_id = '322308451837265';

 const pixel_id2 = '695709117502971';
 const access_token2 = 'EAAFSvOhzKhgBADgrmIj233ZBCmi7Yv51LHeK36n25s0JbfdEz2qBH17kRbJZBp8oZBTpLC84i3ZAHEtluxXHBipCTBELyF396ZCyux1ZCxrhhJ4JQPeK380iJ62e7jVlvFtVnFP8zjWaNPnQMiccEDCmSysuInwLTqRF7vwtXL4hNhrL14aVvC';
 
 const api = bizSdk.FacebookAdsApi.init(access_token);
 const api2 = bizSdk.FacebookAdsApi.init(access_token2);
 

//passport config
require("./server/middleware/passport")(passport);
const uri =
  process.env.NODE_ENV == "development"
    ? process.env.API_DEVELOPMENT
    : process.env.API_PRODUCTION;
    
const ssrCache = cacheableResponse({
  ttl: 1000 * 60 * 60, // 1hour
  get: async ({ req, res, pagePath, queryParams }) => {
    try {
      return { data: await app.renderToHTML(req, res, pagePath, queryParams), ttl: 1000 * 60 * 60 };
    } catch (e) {
      return { data: "error: " + e };
    }
  },
  send: ({ data, res }) => res.send(data),
  compress: true,
});
// app.use(express.static(path.join(__dirname, './public/')));
let options = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Request-Methods": "GET,PUT,POST,DELETE,OPTIONS",
  "X-Requested-With": "XMLHttpRequest",
  "X-Frame-Options": "SAMEORIGIN",
  "Access-Control-Allow-Headers":
    "Content-Type, Authorization, Content-Length, X-Requested-With, X-Frame-Options",
};

app
  .prepare()
  .then(() => {
    const server = express();

    //middleware
    server.use(bodyParser.json());
    server.use(bodyParser.urlencoded({ extended: false }));
    server.use(passport.initialize());
    server.use(passport.session());
    server.use(cookiesMiddleware());
    server.use(cors(options));

    server.post('/event/checkout-success', async (req,res) => {
      const {em,ph,product, total, eventName, eventNameSource, order_id, fbp, fbc} = req.body;
      let current_timestamp = Math.floor(new Date() / 1000);
      
      const userData = (new UserData())
        .setEmails([em])
        .setPhones([ph])
        // It is recommended to send Client IP and User Agent for Conversions API Events.
        .setClientIpAddress(req.connection.remoteAddress)
        .setClientUserAgent(req.headers['user-agent'])
        .setFbp(fbp)
        .setFbc(fbc);
        
      const content = product.map(p=>{
        return (new Content())
        .setId(p.product_id)
        .setTitle(p.name)
        .setItemPrice(parseInt(p.price))
        .setQuantity(p.qty);
      });
      const customData = (new CustomData())
        .setContents(content)
        .setCurrency('USD')
        .setValue(total)
        .setOrderId(order_id);

      const serverEvent = (new ServerEvent())
        .setEventName(eventName)
        .setEventTime(current_timestamp)
        .setUserData(userData)
        .setCustomData(customData)
        .setEventSourceUrl(eventNameSource)
        .setActionSource('website');
      
      const eventsData = [serverEvent];
      const eventRequest = (new EventRequest(access_token, pixel_id))
        .setEvents(eventsData);
      const eventRequest2 = (new EventRequest(access_token2, pixel_id2))
        .setEvents(eventsData);
        
        if(process.env.APP_DOMAIN == "beautyboothqa.com"){
        
      try{
        eventRequest2.execute().then(
          response => {
            // console.log('Response: ', response);
            res.json(response);
          },
          err => {
            console.error('Error: ', err);
          }
        );
        return eventRequest.execute().then(
          response => {
            // console.log('Response: ', response);
            res.json(response);
          },
          err => {
            console.error('Error: ', err);
          }
        );
      }
      catch(err){
        console.log(err);
      }
      }else{
        return res.json({"message":"Not supported in Dev Mode"});
      }

    });
    server.post('/event/addToBag', async (req, res) => {
      const {em,product_id,name, eventName, eventNameSource, fbp, fbc} = req.body;

      let current_timestamp = Math.floor(new Date() / 1000);
      
      const userData = (new UserData())
        .setEmails([em])
        // It is recommended to send Client IP and User Agent for Conversions API Events.
        .setClientIpAddress(req.connection.remoteAddress)
        .setClientUserAgent(req.headers['user-agent'])
        .setFbp(fbp)
        .setFbc(fbc);
        
      const content =(new Content())
        .setId(product_id)
        .setTitle(name);

      const customData = (new CustomData())
        .setContents(content);

      const serverEvent = (new ServerEvent())
        .setEventName(eventName)
        .setEventTime(current_timestamp)
        .setUserData(userData)
        .setCustomData(customData)
        .setEventSourceUrl(eventNameSource)
        .setActionSource('website');
      
      const eventsData = [serverEvent];
      const eventRequest = (new EventRequest(access_token, pixel_id))
        .setEvents(eventsData);
      const eventRequest2 = (new EventRequest(access_token2, pixel_id2))
        .setEvents(eventsData);
        
        if(process.env.APP_DOMAIN == "beautyboothqa.com"){
        
      try{
        eventRequest2.execute().then(
          response => {
            // console.log('Response: ', response);
            res.json(response);
          },
          err => {
            console.error('Error: ', err);
          }
        );
        return eventRequest.execute().then(
          response => {
            // console.log('Response: ', response);
            res.json(response);
          },
          err => {
            console.error('Error: ', err);
          }
        );
      }
      catch(err){
        console.log(err);
      }
    }
      else{
        return res.json({"message":"Not supported in Dev Mode"});
      }
    });
    server.post('/event/viewProduct', async (req, res) => {

      const {em,product_id,name, eventName, eventNameSource, fbp, fbc} = req.body;

      let current_timestamp = Math.floor(new Date() / 1000);
      
      const userData = (new UserData())
        .setEmails([em])
        // It is recommended to send Client IP and User Agent for Conversions API Events.
        .setClientIpAddress(req.connection.remoteAddress)
        .setClientUserAgent(req.headers['user-agent'])
        .setFbp(fbp)
        .setFbc(fbc);
        
      const content =(new Content())
        .setId(product_id)
        .setTitle(name);

      const customData = (new CustomData())
        .setContents(content);

      const serverEvent = (new ServerEvent())
        .setEventName(eventName)
        .setEventTime(current_timestamp)
        .setUserData(userData)
        .setCustomData(customData)
        .setEventSourceUrl(eventNameSource)
        .setActionSource('website');
      
      const eventsData = [serverEvent];
      const eventRequest = (new EventRequest(access_token, pixel_id))
        .setEvents(eventsData);
      const eventRequest2 = (new EventRequest(access_token2, pixel_id2))
        .setEvents(eventsData);
        
        
        if(process.env.APP_DOMAIN == "beautyboothqa.com"){
        
      try{
        eventRequest2.execute().then(
          response => {
            // console.log('Response: ', response);
            res.json(response);
          },
          err => {
            console.error('Error: ', err);
          }
        );
        return eventRequest.execute().then(
          response => {
            // console.log('Response: ', response);
            res.json(response);
          },
          err => {
            console.error('Error: ', err);
          }
        );
      }
      catch(err){
        console.log(err);
      }
    }
      else{
        return res.json({"message":"Not supported in Dev Mode"});
      }
    });

    server.get("/api/menu", async (req, res) => {
      const { locale } = req.query;
      return SettingData.find({
        $and:[
          {
            locale:locale
          },
          {
            name: 'menu'
          }
        ]
      }).then(async (menu)=>{
        if(menu.length == 0){
          const dt = await axios
          .get(`/${locale}/getdata/layout`)
          .then((res) => res.data)
          .catch((err) => {
            console.log(JSON.stringify(err));
          });
            const newMenu = new SettingData({
              locale:locale,
              name:'menu',
              details:dt
            });
            newMenu.save();
            res.statusCode = 200;
            return res.json(dt);          
        }else{
          /**
           * update every 48hours
           */
        const today = new Date();
        if (
         parseInt(
            (today.getTime() - menu[0].updatedAt.getTime())) > 172800000
        ) {
          await axios
          .get(`/${locale}/getdata/layout`)
          .then((res) => {
            menu[0].details = res.data;
            menu[0].updatedAt = today;
            
            menu[0].save();
          })
          .catch((err) => {
            console.log(JSON.stringify(err));
          });
        }
          return res.json(menu[0].details);
        }
      }).catch(err=>{
        console.log(JSON.stringify(err));
      });
    });
    server.get("/api/homePageData", async (req, res) => {
      const { locale, type } = req.query;
      return SettingData.find({
        $and:[
          {
            locale:locale
          },
          {
            name: type
          }
        ]
      }).then(async (data)=>{
        if(data.length == 0){
          const dt = await axios
          .get(`/${locale}/getdata/products/${type}`)
          .then((res) => res.data)
          .catch((err) => {
            console.log(JSON.stringify(err));
          });
            const newMenu = new SettingData({
              locale:locale,
              name:type,
              details:dt
            });
            newMenu.save();
            res.statusCode = 200;
            return res.json(dt);          
        }else{
          /**
           * update every 48hours
           */
        const today = new Date();
        if ( parseInt(
          (today.getTime() - data[0].updatedAt.getTime())) > 172800000) {
          await axios
          .get(`/${locale}/getdata/products/${type}`)
          .then((res) => {
            data[0].details = res.data;
            data[0].updatedAt = today;
            
            data[0].save();
          })
          .catch((err) => {
            console.log(err);
          });
        }
          return res.json(data[0].details);
        }
      }).catch(err=>{
        console.log(err);
      });
    });


    // add to wait list
    server.post("/api/waitlist", async (req, res) => {
      const { product, email } = req.body;
      const product_id = product.id;
      if (product.qty > 0) {
        return res.status(400).json({
          message: "Product is in stock contact with seller",
        });
      }
      await WaitList.findOne({ product_id }).then((prdct) => {
        if (prdct == null) {
          const waitlist = new WaitList({
            product_id,
            product: {
              id: product.id,
              name: product.name,
              qty: product.qty,
              slug: product.slug,
              price: product.price,
              selling_price: product.selling_price,
              image: product.files[0].path,
            },
            product_in_stock: false,
            emails: [
              {
                email,
                count: 0,
                isEmailSend: false,
              },
            ],
            createdAt: new Date(),
          });
          waitlist.save((err) => {
            if (err) {
              res.statusCode = 400;
              if (err.code == 11000) {
                return res.json({
                  message: "Already in the list",
                });
              } else {
                return res.json({
                  message: "Oops! something bad happened",
                });
              }
            }

            return res.status(201).json({
              message: "Added to waitlist",
            });
          });
        } else {
          if (prdct.emails.findIndex((dt) => dt.email == email) != -1) {
            res.statusCode = 400;
            return res.json({
              message: "Already in the list",
            });
          }
          prdct.emails = [
            ...prdct.emails,
            {
              email: email,
              count: 0,
              isEmailSend: false,
            },
          ];
          prdct.save().then((pr) => {
            return res.status(201).json({
              message: "Added to waitlist",
            });
          });
        }
      });
    });
    // login
    server.post("/api/login", async (req, res) => {
      const { email, password } = req.body;

      Customer.findOne({ email })
        .then((user) => {
          if (!user) {
            let url =
              process.env.NODE_ENV == "development"
                ? process.env.MAIN_SERVER_DEV
                : process.env.MAIN_SERVER_PROD;
            if (process.env.NODE_ENV == "local") {
              url = process.env.MAIN_SERVER_HOME;
            }
            
            axios
              .post(`${url}/en/getdata/user_info_by_email`, { email })
              .then((res) => {
                if (res.data.user) {
                  new Customer({
                    id: res.data.user.id,
                    email: res.data.user.email,
                    first_name: res.data.user.first_name,
                    last_name: res.data.user.last_name,
                    password: res.data.user.password,
                  })
                    .save()
                    .then((u) => {
                      if (u) {
                        //check passpord
                        bcrypt
                          .compare(password, u.password)
                          .then((isMatch) => {
                            if (isMatch) {
                              // user matched
                              const {
                                id,
                                first_name,
                                last_name,
                                email,
                                isCustomer,
                                last_login,
                              } = u;

                              const payload = { id: u._id }; // create jwt payload
                              //sign token
                              jwt.sign(
                                payload,
                                "BBsecret",
                                { expiresIn: 172800 },
                                (err, token) => {
                                  if (err) {
                                    console.log(err.response.data);
                                  }
                                  return res.json({
                                    success: true,
                                    token: { access_token: token },
                                    user: {
                                      id,
                                      first_name,
                                      last_name,
                                      email,
                                      isCustomer,
                                      last_login,
                                    },
                                  });
                                }
                              );
                            } else {                              
                              let errors = {message:"Password Incorrect!"};
                              res.statusCode = 422;
                              return res.json(errors);
                            }
                          })
                          .catch((err) =>
                            res.status(500).json({ message: err.response.data })
                          );
                      }
                    });
                }
              })
              .catch((err) => {
                console.log(err.response.data);
              });
            return res.status(422).json({ message: "User Not Found!" });
          }

          bcrypt
            .compare(password, user.password)
            .then((isMatch) => {
              if (isMatch) {
                // user matched
                const {
                  id,
                  first_name,
                  last_name,
                  email,
                  isCustomer,
                  last_login,
                } = user;
                const payload = { id: user._id }; // create jwt payload
                Customer.login(user._id, null);
                //sign token
                jwt.sign(
                  payload,
                  "BBsecret",
                  { expiresIn: 172800 },
                  (err, token) => {
                    if (err) {
                      console.log(err);
                    }
                    return res.json({
                      success: true,
                      token: { access_token: token },
                      user: {
                        id,
                        first_name,
                        last_name,
                        email,
                        isCustomer,
                        last_login,
                      },
                    });
                  }
                );
              } else {
                let errors = {message:"Password Incorrect!"};
                res.statusCode = 422;
                return res.json(errors);
              }
            })
            .catch((err) => {
              console.log(err);
              res.status(500).json({ message: err.response.data });
            });
        })
        .catch((err) => {
          console.log(err);
          res.json({ message: "email not found" });
        });
    });


    server.get("/api/profile", passport.authenticate("jwt", { session: false }), async (req, res) => {
      
      if (req.user) {
        const today = new Date();
        let uri = process.env.MAIN_SERVER_PROD;
        if (process.env.NODE_ENV == "development") {
          uri = process.env.MAIN_SERVER_DEV;
        }
        
        if (process.env.NODE_ENV == "local") {
          uri = process.env.MAIN_SERVER_HOME;
        }
        
        if (req.query && req.query.query == "order_only") {
          await axios
            .get(
              `${uri}/${req.query.locale}/getdata/order_only/${req.user.id}?query=order_only`
            )
            .then((res) => {
              if (res.data) {
                const data = res.data;
                if (req.query.refresh && req.query.refresh == "now") {
                  req.user.orders = data.orders;
                  req.user.reward_value = data.rewards;
                  req.user.reward_redeem = data.redeems;
                  req.user.save();
                }
                if (!req.user.updatedAt) {
                  req.user.orders = data.orders;
                  req.user.reward_value = data.rewards;
                  req.user.reward_redeem = data.redeems;
                  req.user.save();
                } else if (
                  parseInt(
                    (today.getTime() - req.user.updatedAt.getTime()) /
                    (1000 * 3600)
                  ) > 23
                ) {
                  req.user.orders = data.orders;
                  req.user.reward_value = data.rewards;
                  req.user.reward_redeem = data.redeems;
                  req.user.save();
                }
              }
            })
            .catch((err) => {
              console.log(err.errno);
            });
          return res.json({
            rewards: req.user.reward_value,
            redeems: req.user.reward_redeem,
            orders: req.user.orders,
          });
        } else {
          await axios
            .get(`${uri}/${req.query.locale}/getdata/order_only/${req.user.id}`)
            .then((res) => {
              if (res.data) {
                const data = res.data;
               
                if (!req.user.updatedAt) {
                  req.user.orders = data.order;
                  req.user.reward_value = data.rewards;
                  req.user.reward_redeem = data.user.reward_redeem;
                  req.user.referrals = data.user.referrals;
                  req.user.isCustomer = data.user.isCustomer;
                  req.user.save();
                } else if (
                  parseInt(
                    (today.getTime() - req.user.updatedAt.getTime()) /
                    (1000 * 3600)
                  ) > 23
                ) {
                  req.user.orders = data.order;
                  req.user.reward_value = data.rewards;
                  req.user.reward_redeem = data.user.reward_redeem;
                  req.user.referrals = data.user.referrals;
                  req.user.isCustomer = data.user.isCustomer;
                  req.user.save();
                }
                if (!req.user.profile) {
                  req.user.profile = data.user.profile;
                  req.user.save();
                }
              }
            })
            .catch((err) => {
              console.log(err.errno);
            });
        }
        res.json({
          user: req.user,
          profile: req.user.profile,
          order: req.user.orders,
        });
      }
      // Axios.defaults.headers.common["Authorization"] =
      //   req.headers.authorization;
      // const data = await Axios.get(
      //   `${uri}/customers/profile?locale=${req.query.locale}&query=${req.query.query}&refresh=${req.query.refresh}`
      // )
      //   .then((res) => {
      //     res.statusCode = 200;
      //     return res.data;
      //   })
      //   .catch((err) => {
      //     res.statusCode = 401;
      //     return err.response.data;
      //   });
      // return res.json(data);
    });

    server.get(
      "/api/address",
      passport.authenticate("jwt", { session: false }),
      async (req, res) => {
        let data = req.user.addresses.sort();
        if (req.query.id) {
          data = req.user.addresses.filter((addr) => addr._id == req.query.id);
          if (data.length == 1) {
            data = data[0];
          }
        }
        return res.json(data);
      }
    );
    server.get(
      "/api/getwaitlist",
      passport.authenticate("jwt", { session: false }),
      async (req, res) => {
        if (req.user) {
          const { _id } = req.user;
          WaitList.find({}).then((list) => {
            let filter = list.filter((item) => {
              if (item.emails.findIndex((dt) => dt.email == req.user.email) != -1) {
                return true;
              }
            });
    
           return res.status(200).json(filter);
          });
        }
      }
    );

    server.post("/api/account/address", 
    passport.authenticate("jwt", { session: false }),async (req, res) => {
      let data = req.body;
    let combined = [];
    if (req.user.addresses.length == 0) {
      data.billing.isDefault = true;
      data.shipping.isDefault = true;
    } else {
      combined = req.user.addresses.map((address) => {
        if (data.billing.isDefault && address.addressType == "billing") {
          address.isDefault = false;
        }
        if (data.shipping.isDefault && address.addressType == "shipping") {
          address.isDefault = false;
        }
        return address;
      });
    }

    combined = [...combined, data.billing, data.shipping];
    req.user.update(
      {
        $set: {
          addresses: combined,
        },
      },
      function (err, data) {
        if (err) {
          console.log(err);
        }
        return res.json(data);
      }
    );
    });

    server.get("/api/account/getAddress", passport.authenticate("jwt", { session: false }),
    async (req, res) => {
      let data = req.user.addresses.sort();
      if (req.query.id) {
        data = req.user.addresses.filter((addr) => addr._id == req.query.id);
        if (data.length == 1) {
          data = data[0];
        }
      }
      res.json(data);
    }
  );
    server.post("/api/account/setAddress",
    passport.authenticate("jwt", { session: false }),
     async (req, res) => {
       const data = req.body;
      const index = req.user.addresses.findIndex(
        (addr) => addr._id == req.query.id
      );
      
      if (index == -1) {
        res.statusCode = 404;
        res.json("Address Not Found");
      } else {
        if (data.isDefault) {
          const index2 = req.user.addresses.findIndex(
            (addr) =>
              addr.addressType == data.addressType && addr.isDefault == true
          );
          if (index2 != -1) {
            req.user.addresses[index2].isDefault = false;
          }
        }
        req.user.addresses[index] = data;
        req.user.save();
      }
  
      res.json("success");
    });

    server.post('/api/coupon/mark_used', passport.authenticate("jwt", { session: false }),
    async (req, res) => {
      const { id, email } = req.body;
      if(req.user.customer_email != email){
        res.statusCode = 403;
        res.json("Not Valid User");
      }
      return SpecialCoupon.findById(id)
      .then(coupon=>{
        if(coupon){
          let index = coupon.users.findIndex(d=>d.email==email);
          if(index == -1){
            res.json("Invalid Email");
          }
          coupon.users[index].used = true;
          coupon.save();
          res.json(1);
        }
      }).catch(err =>{
        console.log(err);
      })
    }
  );
    // server.post("/api/profiles/:action", async function (req, res) {
    //   const { action } = req.params;
    //   axios.defaults.headers.common["Authorization"] =
    //     req.headers.authorization;
    //   const data = await axios
    //     .post(`${uri}/customers/${action}`, req.body)
    //     .then((res) => {
    //       res.statusCode = 200;
    //       return res.data;
    //     })
    //     .catch((err) => {
    //       res.statusCode = 401;
    //       return err.response.data;
    //     });
    //   return res.json(data);
    // });

    server.get("/api/deleteAddress", passport.authenticate("jwt", { session: false }),
    async (req, res) => {
      Customer.findById(req.user._id).then((customer) => {
        let address = customer.addresses.find((ad) => ad._id == req.query.id);
        if (address.isDefault) {
          return res
            .status(400)
            .json({ error: "you can't delete default address" });
        } else {
          let filteredAddress = customer.addresses.filter(
            (ad) => ad._id != req.query.id
          );
          customer.addresses = filteredAddress;
          customer.save();
          return res.status(200).json(filteredAddress);
        }
      });
    }
  );


server.post(
  "/api/profiles/change-password",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const { old__pass, new__pass, confirm__pass } = req.body;
    Customer.findById(req.user._id)
      .then((user) => {
        bcrypt.compare(old__pass, user.password).then((isMatch) => {
          if (!isMatch) {
            return res.status(400).json(" Old password Not Matched");
          } else if (new__pass !== confirm__pass) {
            return res.status(400).json("password not Matched!");
          } else {
            bcrypt.genSalt(10, (err, salt) => {
              bcrypt.hash(new__pass, salt, (err, hash) => {
                if (err) throw err;
                user.password = hash;
                user
                  .save()
                  .then((user) => {
                    res.status(200).json("password updated!");
                  })
                  .catch((err) => console.log(err));
              });
            });
          }
        });
      })
      .catch((err) => res.json("no user found"));
  }
);

server.post(
  "/api/profiles/update-profile",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    let { first_name, profile, others } = req.body;

    Customer.findById({ _id: req.user._id }).then((customer) => {
      customer.first_name = first_name;
      customer.profile = { ...customer.profile, ...profile, others };

      customer
        .save()
        .then((user) => {
          res.status(200).json("Profile updated!");
        })
        .catch((err) => console.log(err.response));
      // res.json({ msg: "successfully" }, 200);
    });
  }
);

server.post(
  "/api/profiles/point-to-wallet",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    if (req.user) {
      res.statusCode = 201;
      let uri = process.env.MAIN_SERVER_PROD;
      if (process.env.NODE_ENV == "development") {
        uri = process.env.MAIN_SERVER_DEV;
      }
      if (process.env.NODE_ENV == "local") {
        uri = process.env.MAIN_SERVER_HOME;
      }
      const data = await axios
        .post(
          `${uri}/${req.body.locale}/getdata/pointsToWallet/${req.user.id}`,
          req.body
        )
        .then((res) => res.data)
        .catch((err) => {
          res.statusCode = err.response.status || 400;
          return err.response.data;
        });
      return res.json(data);
    } else {
      return res.json("Login required");
    }
  }
);

/**
 * check coupons
 */
 server.get("/coupons/check", async (req, res) => {
  const { coupon, email } = req.query;
  let row = await SpecialCoupon.findOne({ coupon_code: coupon });

  if (!row) {
    // coupon not found
    res.status(404).json({ msg: "Coupon Not Found" });
  } else {
    //coupon found
    //let check user is available or not
    let userInfo = await row.users.filter(
      (user) => user.email == email && user.used == false
    );
    if (userInfo.length > 0) {
      res.status(200).json(row);
    } else {
      res.status(400).json({ msg: "This coupon is not valid for this user" });
    }
  }
});

    server.use(express.static(path.join(__dirname, "./public/")));
    server.get("/_next/*", (req, res) => {
      handle(req, res);
    });
    server.get("*", (req, res) => {
      // try {
        if (dev || req.query.noCache) {
          res.setHeader("X-Cache-Status", "DISABLED");
          handle(req, res);
        } else {
          res.setHeader(
            'Cache-Control',
            'public, s-maxage=3600, stale-while-revalidate=59'
          );
          handle(req,res);
          // ssrCache({ req, res, pagePath: req.path, queryParams: req.query });
        }        
      // } catch (error) {
      //   console.log(error);
      // }
    });
    // server.get('/', (req, res) => ssrCache({ req, res, pagePath: req.path, queryParams: req.query }))

    // server.get('/product/:slug', (req, res) => {
    //   return ssrCache({ req, res })
    // })
    // server.get('https://new.beautybooth.shop/en/getdata/product/:slug', (req, res) => {
    //   return ssrCache({ req, res })
    // })
    // server.get('https://new.beautybooth.shop/en/getdata/layout', (req, res) => {
    //   return ssrCache({ req, res })
    // })

    // server.get('*', (req, res) => handle(req, res))

    server.listen(port, (err) => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${port}`);
    });
  })
  .catch((ex) => {
    process.exit(1);
  });

  /* 
    login route
    add waitlist
      
  */
