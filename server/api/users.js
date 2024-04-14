const router = require(`express`).Router();
const mongoose = require(`mongoose`);
const User = require("../database/models/userModel");

mongoose.connect(
  `mongodb+srv://3lliu444:loulian444@mycluster.fvlcvle.mongodb.net/eComProject?retryWrites=true&w=majority&appName=MyCluster`
);

router.get(`/`, async (req, res) => {
  try {
    const allUsers = await User.find();

    res.status(200).send(allUsers)
  } catch (error) {
    res.status(500).send({ error });
  }
});

module.exports = router;
