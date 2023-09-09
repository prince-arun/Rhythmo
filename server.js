const express = require("express");
const app = express();
require("dotenv").config();
const dbConfig = require("./config/dbConfig");
const PORT = 5000;

app.listen(PORT, () => console.log(`server started at port  ${PORT}`));
