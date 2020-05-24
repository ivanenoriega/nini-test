const express = require("express");
const PORT = process.env.PORT || 5000;

express()
  .get("/ping", (req, res) => res.send("pong!"))
  .listen(PORT, () => console.log(`Listening on ${PORT}`));
