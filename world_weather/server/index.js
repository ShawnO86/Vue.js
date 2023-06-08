import express from "express";
import cors from 'cors';
import bodyParser from 'body-parser';
import morgan from 'morgan';

const app = express();
app.use(morgan('tiny'));
app.use(cors());
app.use(bodyParser.json());

app.get("/hello", (_req, res) => {
  res.json({ message: "Hello, world!" });
});

const port = process.env.PORT || 8081;

app.listen(port, () => {
  console.log("Server listening on port", port);
});