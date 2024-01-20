const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');

const routes = require("./Routes/useRoutes.js");

const app = express();

app.use(cors())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("hello world again!");
});

app.use("/api", routes);

const PORT = process.env.PORT || 8000

app.listen(PORT, function () {
  console.log(`Server started on port ${PORT}`);
});
