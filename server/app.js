import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import menuItems from "./routes/menu-items.js";
dotenv.config();

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/menu-items", menuItems);

app.use((req, res, next) => {
  res.status(404).send("<h1>Page not found</h1>");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
