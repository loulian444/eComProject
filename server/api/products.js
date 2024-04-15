const Product = require("../../database/models/productModel");

const router = require(`express`).Router();

router.get(`/`, async (req, res) => {
  try {
    const { page, brand, category } = req.query;
    const products = [];
    const allProducts = await Product.find();
    let productList = allProducts;
    if (brand || category) {
      const newProductList = allProducts.filter(
        (product) => product.brand === brand || product.category === category
      );
      productList = newProductList;
    }
    for (let i = 9 * page - 9; i < 9 * page; i++) {
      if (productList[i]) products.push(productList[i]);
    }
    const result = { products };

    const maxPage = Math.ceil(productList.length / 9);
    if (page == maxPage) result.lastPage = true;

    res.status(200).send(result);
  } catch (error) {
    res.status(500).send({ error });
  }
});

module.exports = router;
