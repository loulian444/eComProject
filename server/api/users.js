const router = require(`express`).Router();
const User = require("../../database/models/userModel");
const { requireAdmin } = require("./utils");

router.get(`/`, requireAdmin, async (req, res) => {
  try {
    const allUsers = await User.find();

    res.status(200).send(allUsers);
  } catch (error) {
    res.status(500).send({ error });
  }
});

router.put(`/`, async (req, res) => {
  try {
    const { userId, productId } = req.body;
    const user = await User.findOne({ _id: userId });
    if (user.favorites.includes(productId)) {
      res.send({ message: `already favorited` });
    } else {
      user.favorites = [...user.favorites, productId];
      await user.save();
    }
    res.send(user);
  } catch (error) {
    res.status(500).send({ error });
  }
});

module.exports = router;
