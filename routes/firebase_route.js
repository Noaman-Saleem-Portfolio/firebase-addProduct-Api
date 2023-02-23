const express = require("express");
const router = express.Router();

const FIREBASE_API = require("../helper/firebase_api");

//API to add new product
router.post("/api/create-document", async (req, res) => {
  console.log(req.body);
  let data = req.body;

  let result = await FIREBASE_API.createProduct(data);

  res.send(result);
});

module.exports = router;
