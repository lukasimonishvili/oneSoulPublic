const express = require("express");
const app = express();
const port = process.env.PORT || "3000";
const path = require("path");
const http = require("http");

app.use(express.static(path.join(__dirname, "dist/oneSoulPublic")));

app.all("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist/oneSoulPublic/index.html"));
});

app.set("port", port);
const server = http.createServer(app);

server.listen(port, () => {
  console.log(`server running on port:${port}`);
});
