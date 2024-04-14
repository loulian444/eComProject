const router = require(`express`).Router();

router.get(`/`, (req, res) => {
  res.send(`welcome to product router`);
});

module.exports = router;
