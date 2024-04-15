const router = require(`express`).Router();
const bcrypt = require(`bcrypt`);
const jwt = require(`jsonwebtoken`);
const User = require("../../database/models/userModel");
const Product = require("../../database/models/productModel");

router.get(`/`, (req, res) => {
  console.log(process.env);
  res.send(`welcome to auth router`);
});

router.post(`/register`, async (req, res) => {
  try {
    const user = req.body;
    user.password = await bcrypt.hash(user.password, Number(process.env.SALT));

    const result = await User.create({
      ...req.body,
      favorites: [],
      isAdmin: false,
    });

    if (result) {
      const token = jwt.sign(
        { id: result.id, username: result.username },
        process.env.JWT,
        { expiresIn: `1h` }
      );

      res.status(201).send({ token });
    }
  } catch (error) {
    console.log(error.keyPattern);
    res.status(500).send({ error });
  }
});

router.post(`/login`, async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (user) {
      const passwordMatch = await bcrypt.compare(password, user.password);
      if (passwordMatch) {
        const token = jwt.sign(
          { id: user.id, username: username },
          process.env.JWT,
          { expiresIn: `1h` }
        );

        res.status(200).send({ token });
      } else {
        res.status(401).send({ message: `Invalid Login` });
      }
    } else {
      res.status(401).send({ message: `Invalid Login` });
    }
  } catch (error) {
    res.status(500).send({ error });
  }
});

router.get(`/me`, async (req, res) => {
  try {
    const { id } = req.query;
    const user = await User.findOne({ _id: id });
    const favProducts = [];
    for (let i = 0; i < user.favorites.length; i++) {
      const product = await Product.findOne({ _id: user.favorites[i] });
      favProducts.push(product);
    }

    const newUser = { ...user._doc, favProducts };

    res.send(newUser);
  } catch (error) {
    res.status(500).send({ error });
  }
});

module.exports = router;
