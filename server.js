const express = require("express");
const app = express();
require("dotenv").config();
const dbConfig = require("./config/dbConfig");
app.use(express.json());
const userRoute = require("./routes/userRoute");
const PORT = 5000;

app.use("/api/users", userRoute);

app.listen(PORT, () => console.log(`server started at port  ${PORT}`));
