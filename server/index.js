const express = require(`express`);
const app = express();
const bodyParser = require(`body-parser`);
const cors = require(`cors`);
const PORT = 4444;
require(`dotenv`).config();
const mongoose = require(`mongoose`);

mongoose.connect(
  `mongodb+srv://3lliu444:loulian444@mycluster.fvlcvle.mongodb.net/eComProject?retryWrites=true&w=majority&appName=MyCluster`
);

app.use(bodyParser.json());
app.use(cors());

app.get(`/`, (req, res) => {
  res.send(`duh herro`);
});

app.use(`/api`, require(`./api`));
app.use(`/auth`, require(`./auth`));

app.listen(PORT, (error) => {
  if (!error) {
    console.log(`Server is running and listenting on port ${PORT}`);
  } else {
    console.log(`Sum Ting Wong`);
  }
});
