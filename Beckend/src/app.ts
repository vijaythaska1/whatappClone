import express from 'express';
const app = express();
const port = 3000;

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK' });
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});

export { app };






