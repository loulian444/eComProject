const express = require(`express`);
const app = express();
const bodyParser = require(`body-parser`);
const cors = require(`cors`);
const PORT = 4444;
const path = require(`path`)
require(`dotenv`).config();
const mongoose = require(`mongoose`);

mongoose.connect(
  `mongodb+srv://3lliu444:loulian444@mycluster.fvlcvle.mongodb.net/eComProject?retryWrites=true&w=majority&appName=MyCluster`
);

app.use(bodyParser.json());
app.use(cors());

app.use(express.static(path.join(__dirname, "..", "client")))

app.get(`/`, (req, res) => {
  res.sendFile(path.join(__dirname, "..", "client/index.html"));
});


app.use(`/api`, require(`./api`));
app.use(`/auth`, require(`./auth`));

app.get(`*`, (req, res) => {
  res.status(404).write(`<a href="http://localhost:4444">Click here to redirect</a>`);
})
app.listen(PORT, (error) => {
  if (!error) {
    console.log(`Server is running and listenting on port ${PORT}`);
  } else {
    console.log(`Sum Ting Wong`);
  }
});
