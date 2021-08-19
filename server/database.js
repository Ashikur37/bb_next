
const mongoose = require("mongoose");
// Connection URL
const url = process.env.NODE_ENV == "development" ? process.env.DB_STRING_DEV : process.env.DB_STRING_PROD;
if(process.env.NODE_ENV == "local"){
  console.log("Environment LOCAL");
  mongoose.connect(process.env.DB_STRING_HOME, { useNewUrlParser: true, useUnifiedTopology: true });
}else{
  console.log("Environment CLOUD-"+process.env.NODE_ENV);
  mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
}
mongoose.connection
  .once("open", () => {
    console.log("Conncted");
  })
  .on("error", (error) => {
    console.log(error);
  });