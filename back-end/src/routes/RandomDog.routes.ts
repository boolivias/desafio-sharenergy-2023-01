import { Router } from 'express';
import RandomDog from '../controllers/RandomDog';

const router = Router();

router.get('/', (request, response) => {
  RandomDog.get
    .handle(request, response)
    .catch((e) => {
      console.log(e)
      return response.status(500).send({ message: 'Erro inesperado. Tente novamente mais tarde' })
    });
});

const randomDog_router = {
  path: '/random-dog',
  router,
};

export default randomDog_router;