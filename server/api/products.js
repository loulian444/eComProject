const Product = require("../../database/models/productModel");

const router = require(`express`).Router();

router.get(`/`, async (req, res) => {
  try {
    const { page } = req.query;
    const products = [];
    const allProducts = await Product.find();
    for (let i = 9 * page - 9; i < 9 * page; i++) {
      if (allProducts[i]) products.push(allProducts[i]);
    }
    const result = { products };

    const maxPage = Math.ceil(allProducts.length / 9);
    if (page == maxPage) result.lastPage = true;

    res.status(200).send(result);
  } catch (error) {
    res.status(500).send({ error });
  }
});

module.exports = router;
