//Importaciones
console.log(__dirname);

const express = require("express");
//para hacer uso de todos sus metodos y generar nuestro server

const app = express();

//Con esta linea le decimos a express que sirva de manera publica los archivos de /public
app.use(express.static("public"));

//Rutas:
app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/views/home-page.html`);
});

app.get("/cat", (req, res) => {
  res.sendFile(`${__dirname}/views/cat-page.html`);
});

app.listen(3000, () => {
  console.log("http://localhost:3000");
});

//instalar de manera global en nuestra computadora
//npm i -g nodemon
