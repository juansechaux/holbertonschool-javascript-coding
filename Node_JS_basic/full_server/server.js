import express from 'express';
// eslint-disable-next-line
import routes from './routes/index.js';

const app = express();
const PORT = 1245;

app.use('/', routes);
// eslint-disable-next-line
const server = app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

export default app;
