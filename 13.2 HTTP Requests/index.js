import express from "express";
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Server is listening on port ${port}. Ready to accept requests!`);
});

app.get("/", (req, res) => {
  res.send("<h1> Hello World! </h1>");
});

app.get("/about", (req, res)=>{
     res.send("<h1>About me</h2>");
});

app.get("/contact", (req, res)=>{
     res.send("<h1>Contact me</h2>");
});