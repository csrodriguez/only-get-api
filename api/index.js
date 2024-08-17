const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("¡¡¡Buenas!!! Golpeaste al metodo GET. -> CsR <-");
});

app.listen(port, () => {
  console.log(`Listen Port: ${port}`);
});
