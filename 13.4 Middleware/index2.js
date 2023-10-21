import express from "express";
import morgan from "morgan";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));


const app = express();
const port = 3000;


app.use(morgan("tiny"));

app.post("/submit", (req, res) => {
 console.log(req.body);
  res.send("Creating a user");
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
  });

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
