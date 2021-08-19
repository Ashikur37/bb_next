"use strict";
const mongoose = require("mongoose");

const Upload = new mongoose.Schema(
  {
    fileName: { type: String, required: true },
    // results: { type: mongoose.Schema.Types.Mixed },
    results: [
      {
        "ID": { type: String },
        "Ref ID": { type: String },
        "Merchant": { type: String },
        "Assigned To": { type: String },
        "Contact Name": { type: String },
        "Contact Mobile": { type: String },
        "Contact Address": { type: String },
        "Area": { type: String },
        "Product": { type: String },
        "Amount (QR)": { type: String },
        "Collected (QR)": { type: String },
        "Service Charge (QR)": { type: String },
        "Status": { type: String },
        "isChecked": { type: Boolean },
      }
    ],
    resultCount: { type: Number, default: 5000 },
    createdAt: { type: Date, default: Date.now },
  }
);

module.exports = mongoose.model("Upload", Upload);