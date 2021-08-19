"use strict";
const mongoosePaginate = require('mongoose-paginate');
const mongoose = require("mongoose");

const Waitlist = new mongoose.Schema({
  product_id: { type: Number, required: true, index: { unique: true } },
  product: { type: mongoose.Schema.Types.Mixed, required: true },
  emails: [
    {
      email: { type: String },
      count: { type: Number },
      isEmailSend: {
        type: Boolean,
      },
      isDeleted: {
        type: Boolean,
        default: false
      }
    },
  ],
  createdAt: { type: Date },
  isDeleted: {
    type: Boolean,
    default: false
  }
});

Waitlist.plugin(mongoosePaginate);
module.exports = mongoose.model("Waitlist", Waitlist);
