import express from "express";
import fs from "fs";
import {
  addItem,
  deleteItem,
  getItems,
  getRootItems,
} from "../controller/menu-items.js";

const router = express.Router();

router.post("/", addItem);

router.get("/:id", getItems);

router.get("/", getRootItems);

router.put("/", (req, res, next) => {
  fs.readFile("data/menu-items.json", "utf8", (err, data) => {
    const menuItems = JSON.parse(data);
  });
  res.send({ message: "Menu items" });
});

router.delete("/", deleteItem);
export default router;
