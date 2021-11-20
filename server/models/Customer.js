"use strict";
const mongoose = require("mongoose");
const mongoosePaginate = require('mongoose-paginate');
const CustomerSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  first_name: { type: String, required: true },
  last_name: { type: String },
  email: { type: String, required: true,lowercase: true },
  password: { type: String, required: true },
  api_token: { type: String },
  permissions: { type: Array },
  isCustomer: { type: Boolean, default: true },
  last_login: { type: Date },
  profile: {
    type: mongoose.Schema.Types.Mixed,
    phone_no: {
      type: String,
    },
    apartment: { type: String },
    address: { type: String },
    address: { type: String },
    city: { type: String },
    country: { type: String },
    others: {
      type: mongoose.Schema.Types.Mixed,
      profession: { type: String },
      dob: { type: String },
    },
    profile_image: { type: String },
    profile_completion: { type: String },
    my_coupons: { type: mongoose.Schema.Types.Mixed },
    user_code: { type: String },
    wallet: { type: mongoose.Schema.Types.Mixed },
  },
  addresses: [
    {
      fname: { type: String },
      lname: { type: String },
      phoneNumber: { type: String },
      country: { type: String },
      address: { type: String },
      city: { type: String },
      postCode: { type: String },
      isDefault: { type: Boolean, default: false },
      addressType: { type: String, default: "shipping" },
    }
  ],
  orders: { type: mongoose.Schema.Types.Mixed },
  referrals: { type: mongoose.Schema.Types.Mixed },
  reward_value: { type: mongoose.Schema.Types.Mixed },
  reward_redeem: { type: mongoose.Schema.Types.Mixed }
},
  {
    timestamps: true
  }
);

CustomerSchema.statics.login = function(id, callback){  
  return this.findById(id).then(res=>{
    res.last_login = Date.now();
    res.save(callback);
  });
}

CustomerSchema.plugin(mongoosePaginate);
module.exports = mongoose.model("Customers", CustomerSchema);
