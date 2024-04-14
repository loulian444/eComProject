const router = require(`express`).Router();

router.get(`/`, (req, res) => {
  res.send(`welcome to category router`);
});

module.exports = router;
