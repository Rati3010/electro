const cors = require("cors");
const express = require("express");
const brandRouter = require("./routes/Brand.js");
const productRouter = require("./routes/Product.js");
const categoryRouter = require("./routes/Category.js");
const { createProduct } = require("./controller/Product.js");
const { connection } = require("./config/db.js");

const app = express();
app.use(express.json());
app.use(
  cors({
    exposedHeaders: ["X-Total-Count"],
  })
);
app.use("/products", productRouter.router);
app.use("/categories", categoryRouter.router);
app.use("/brands", brandRouter.router);

app.get("/", (req, res) => {
  res.json({ status: "success" });
});

app.listen(process.env.port,async () => {
  try {
    await connection;
    console.log("Connected to DB successfully port: "+ process.env.port);
  } catch (error) {
    console.log(error);
  }
});
