const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const { PORT, MONGODB_URL, NODE_ENV } = require("./config");
const { DBConnection } = require("./config/db");
const StudentRoutes = require("./routes/student");
const app = express();

let StartServer = async () => {
  /*---------------database connection ---------------------*/
  DBConnection();
  /*---------------end database connection ------------------*/

  /*------------------Middleware section start here --------------*/
  if (NODE_ENV === "development") {
    app.use(morgan("dev"));
  }
  app.use(express.json());
  app.use(cors());
  /*------------------Middleware section end here --------------*/

  /*-----------load routes--------------------*/
  app.use("/api/students/", StudentRoutes);
  /*-----------load routes ended--------------------*/
  /*-------------listen port ------------------------------*/
  app.listen(PORT, err => {
    if (err) throw err;
    console.log("server is running on port number 5000");
  });
  /*-------------listen port ended here ------------------------------*/
};

StartServer();
// let data=window.fetch()
