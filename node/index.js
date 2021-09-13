// //*****Primera manera de hacer uso de node es usar el comando node + el archivo .js
// // console.log(7 + 4);
// // let arr = [1, 2, 3, 4];

// // const red = arr.reduce((acc, crr) => acc + crr);
// // console.log(red);

// //**Segunda manera utilizando el comando en la terminal node  */
// const chalk = require("chalk");
// const chalkAnimation = require("chalk-animation");
// const cows = require("cows");
// const cats = require("cat-ascii-faces");

// // chalkAnimation.rainbow(cows()[69]);
// chalkAnimation.rainbow(cats());
// // console.log(chalk.yellowBright("hola mundo en amarillo"));

// SERVER CON NODE

const http = require("http");
const server = http.createServer((req, res) => {
  console.log(`Alguien pidio esta ruta ${req.url}`);
  //   res.write("Hola desde el server");
  //   res.end();
  switch (req.url) {
    case "/":
      res.write("bienvenido a la page-home");
      res.end();
      break;
    case "/cat":
      res.write("bienvenido a la page-cat");
      res.end();
      break;
    default:
      res.statusCode = 404;
      res.write("404-page");
      res.end();
      break;
  }
});
//127.0.0.1:3000 = localhost:3000
server.listen(3000);
