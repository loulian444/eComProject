const express = require(`express`);
const app = express();
const bodyParser = require(`body-parser`);
const PORT = 4444;
require(`dotenv`).config();

app.use(bodyParser.json());

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
