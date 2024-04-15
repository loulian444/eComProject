const Product = require("../../database/models/productModel");

const router = require(`express`).Router();

router.get(`/`, async (req, res) => {
  try {
    const allProducts = await Product.find();

    res.status(200).send(allProducts);
  } catch (error) {
    res.status(500).send({ error });
  }
});

module.exports = router;
