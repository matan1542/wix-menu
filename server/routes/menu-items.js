import express from "express";

const router = express.Router();

router.get("/", (req, res, next) => {
  res.send({ message: "Menu items" });
});

export default router;
