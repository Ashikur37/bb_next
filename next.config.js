const { nextI18NextRewrites } = require("next-i18next/rewrites");
const path = require("path");
const localeSubpaths = {};
module.exports = {
  images: {
    domains: ['*.beautyboothqa.com','beautyboothqa.sgp1.digitaloceanspaces.com'],
  },
  localePath: path.resolve("./public/locales"),
  env: {
    mongodburl: "mongodb+srv://beautybooth:mwu6V4HwAVo7ISmS@cluster0.uzdrs.mongodb.net/bbqa?retryWrites=true&w=majority",
    // mongodburl:
    //   "mongodb+srv://beautybooth:mwu6V4HwAVo7ISmS@cluster0.uzdrs.mongodb.net/bbqa?retryWrites=true&w=majority",

    // test
    // algolia: {
    //   appId: "HPKCKDRHRT",
    //   appKey: "eec40e4466e90ed437e1c7639aa54feb",
    // },
    // production
    algolia: {
      appId: "4F2AV10UAX",
      appKey: "b7e52f6f6ad165b30cfdc3d0e2e3e67d",
    },
    pgw:{
      development:"https://apitest.myfatoorah.com/",
      production:"https://api.myfatoorah.com/"
    }
  },
  // images: {
  //   loader: 'imgix',
  //   domains: ['admin.beautyboothqa.com','beautyboothqa.sgp1.digitaloceanspaces.com'],
  // },
  distDir: "build",
  reactStrictMode: true,
  rewrites: async () => nextI18NextRewrites(localeSubpaths),
  publicRuntimeConfig: {
    localeSubpaths,
  },
};
