const express = require("express");
const router = express.Router();
const {
  addProducts,
  getProducts,
  getSingleProduct,
  updateSingleProduct,
  deleteSingleProduct,
} = require("../controllers/product.controller");

router.post("/", addProducts);
router.get("/", getProducts);
router.get("/:id", getSingleProduct);
router.put("/:id", updateSingleProduct);
router.delete("/:id", deleteSingleProduct);

module.exports = router;
