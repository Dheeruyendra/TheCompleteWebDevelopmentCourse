import express from 'express';
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Server is listening on port ${3000}. Ready to accept requests!`);
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});