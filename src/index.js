const express = require('express');
const app = express();
const cors = require("cors");
const { alumno } = require("./alumno/alumon.module");
const { queja } = require("./queja/queja.module");





app

  .use(cors())
  .use(express.json())
  .use("/alumno", alumno)
  .use("/queja", queja)



  app.listen(3000)