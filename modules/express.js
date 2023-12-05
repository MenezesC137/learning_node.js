const express = require("express");

const app = express();

app.get("/home", (req, res) => {
  res.contentType("application/html");
  res.status(200).send("<h1>Hello mundo!</h1>");
});

app.get("/users", (req, res) => {
  const users = [
    { name: "Menezes", email: "menezes@gmail.com" },
    { name: "carlos", email: "carlos@gmail.com" },
  ];
  res.status(200).json(users);
});

const port = 8080;

app.listen(port, () => console.log(`rodando com express na porta: ${port}`));
