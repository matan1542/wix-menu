import express from "express";
import {
  addItem,
  deleteItem,
  getItems,
  getRootItems,
  updateItem,
} from "../controller/menu-items.js";

const router = express.Router();

router.post("/", addItem);

router.get("/:id", getItems);

router.get("/", getRootItems);

router.put("/", updateItem);

router.delete("/", deleteItem);

export default router;
