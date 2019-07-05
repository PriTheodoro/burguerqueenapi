const express = require("express");
const app = express();
const db = require("./models/index");
const bp = require("body-parser");

app.listen(4012, console.log("servidor rodando"));

app.use(express.json());
app.use("/user", require("./routes/user"));
app.use("/products", require("./routes/products"));
app.use("/orders", require("./routes/orders"));


db.sequelize.sync();