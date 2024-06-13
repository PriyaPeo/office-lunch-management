const db = require("./queries");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// COMMON APIS
app.post("/signup", db.signup);
app.post("/login", db.login);

//ADMIN APIS
app.post("/admin/add-menu", db.addMenu);
app.get("/admin/orders", db.getOrders);

// EMPLOYEE APIS
app.post("/employee/add-order", db.addOrder);
app.get("/employee/menus", db.getMenus);

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
