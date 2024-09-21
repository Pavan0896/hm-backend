const express = require("express");
const auth = require("../middlewares/auth.middleware");
const { postPurchase } = require("../controllers/product.controller");

const purchaseRouter = express.Router();

purchaseRouter.post("/purchased", auth, postPurchase);

module.exports = purchaseRouter;
