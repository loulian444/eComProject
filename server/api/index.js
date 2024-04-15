const router = require(`express`).Router();

router.get(`/`, (req, res) => {
  res.send(`welcome to api router`);
});

router.use(`/users`, require(`./users`));
router.use(`/products`, require(`./products`));
router.use(`/brands`, require(`./brands`));
router.use(`/categories`, require(`./categories`));

module.exports = router;
