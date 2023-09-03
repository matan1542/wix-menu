import express from "express";
import fs from "fs";
import { changeIds } from "../service/update.items.js";

const router = express.Router();

router.post("/", (req, res, next) => {
  fs.readFile("data/menu-items.json", "utf8", (err, data) => {
    const menuItems = JSON.parse(data);
    // console.log(menuItemsWithIds);
  });
  res.send({ message: "Menu items" });
});

router.get("/:parentId", (req, res, next) => {
  fs.readFile("data/menu-items.json", "utf8", (err, data) => {
    const menuItems = JSON.parse(data);
    console.log('req.params.parentId', req.params.parentId);
    // console.log(menuItemsWithIds);
  });
  res.send({ message: "Menu items" });
});

router.get("/", (req, res, next) => {
  fs.readFile("data/menu-items.json", "utf8", (err, data) => {
    const menuItems = JSON.parse(data);
    console.log("req with query", req.query);


    res.send(menuItems);
    // console.log(menuItemsWithIds);
  });
});

router.put("/", (req, res, next) => {
  fs.readFile("data/menu-items.json", "utf8", (err, data) => {
    const menuItems = JSON.parse(data);
    // console.log(menuItemsWithIds);
  });
  res.send({ message: "Menu items" });
});

router.delete("/", (req, res, next) => {
  fs.readFile("data/menu-items.json", "utf8", (err, data) => {
    const menuItems = JSON.parse(data);
    // console.log(menuItemsWithIds);
  });
  res.send({ message: "Menu items" });
});
export default router;
