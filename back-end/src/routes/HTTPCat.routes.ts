import { Router } from 'express';
import HTTPCat from '../controllers/HTTPCat';

const router = Router();

router.get('/:code', (request, response) => {
  HTTPCat.get
    .handle(request, response)
    .catch((e) => {
      console.log(e)
      return response.status(500).send({ message: 'Erro inesperado. Tente novamente mais tarde' })
    });
});

const httpCat_router = {
  path: '/http-cat',
  router,
};

export default httpCat_router;