import express from "express";
const app = express();

const PORT = 8080;

app.get("/", function (req, res) {
  res.send("Service GR says hello!");
});

app.get("/chain", function (req, res) {
  console.log("/chain request");
  res.send(`Service GR says hello from ${process.env.OKTETO_NAMESPACE}!`);
});

app.listen(PORT, function () {
  console.log("Started service-gr server on %d", PORT);
});