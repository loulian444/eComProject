const router = require(`express`).Router();
const bcrypt = require(`bcrypt`);
const jwt = require(`jsonwebtoken`);
const User = require("../database/models/userModel");

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
    console.log(error.keyPattern)
    res.status(500).send({ error });
  }
});

module.exports = router;
