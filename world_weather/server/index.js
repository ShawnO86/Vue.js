import express from "express";

const port = process.env.PORT || 8081;

const app = express();

app.get("/hello", (_req, res) => {
  res.json({ message: "Hello, world!" });
});

app.listen(port, () => {
  console.log("Server listening on port", port);
});