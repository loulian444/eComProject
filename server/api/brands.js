const router = require(`express`).Router();

router.get(`/`, (req, res) => {
  res.send(`welcome to brand router`);
});

module.exports = router;
