const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.json({
    saludo: "¡¡¡Buenas!!!",
    mensaje: "Golpeaste al metodo GET.",
    autor: "- CsR -",
  });
});

app.listen(port, () => {
  console.log(`Listen Port: ${port}`);
});
