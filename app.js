const express = require("express");
const app = express();
const port = 3000 || process.env.PORT;
const router = require("./router/router.js");
app.use(router);
app.use(express.json());
app.listen(port, () => {
  console.log("Servidor aberto");
});
