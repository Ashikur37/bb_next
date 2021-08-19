"use strict";
const mongoose = require("mongoose");

const SettingData = new mongoose.Schema(
    {
        name: { type: String},
        details: { type: mongoose.Schema.Types.Mixed },
        locale: { type: String, default: "en" }
    },
    {
        timestamps: true
    }
);
SettingData.index({ name: 1, locale: 1 }, { unique: true });
module.exports = mongoose.model("SettingData", SettingData);