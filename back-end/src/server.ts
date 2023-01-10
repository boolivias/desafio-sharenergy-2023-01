import cors from 'cors';
import express from 'express';
import routes from './routes';

const app = express();

const options: cors.CorsOptions = {
  allowedHeaders: [
    'Origin',
    'X-Requested-With',
    'Content-Type',
    'Accept',
    'X-Access-Token',
    'Authorization',
  ],
  methods: 'GET,PUT,POST,DELETE,PATCH',
  origin: '*',
};

app.use(cors(options));
app.use(express.json());
routes.map((item) => app.use(item.path, item.router));

const port = process.env.PORT || 3333
app.listen(port, () => {
  console.log(`Servidor iniciado na porta: ${port}`)
})