"use strict";
const mongoose = require("mongoose");

const SpecialCoupon = new mongoose.Schema(
  {
    coupon_code: { type: String },
    expiresAt: { type: Date },
    amount: { type: Number },
    minMonth: { type: Number },
    users: [
      {
        used: { type: Boolean, default: false },
        email: { type: String, required: true },
        usedAt: { type: Date },
        userLastOrderAt: { type: mongoose.Schema.Types.Mixed },
      },
    ],
  },
  {
    timestamps: true,
  }
);
SpecialCoupon.index({ coupon_code: 1 }, { unique: true });
module.exports = mongoose.model("SpecialCoupon", SpecialCoupon);
