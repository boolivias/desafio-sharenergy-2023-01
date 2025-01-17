import { Router } from 'express';
import User from '../controllers/User';

const router = Router();

router.post('/auth', (request, response) => {
  User.auth
    .handle(request, response)
    .catch((e) => {
      console.log(e)
      return response.status(500).send({ message: 'Erro inesperado. Tente novamente mais tarde' })
    });
});

router.post('/refresh-token', (request, response) => {
  User.refreshToken
    .handle(request, response)
    .catch((e) => {
      console.log(e)
      return response.status(500).send({ message: 'Erro inesperado. Tente novamente mais tarde' })
    });
});

router.delete('/logout', (request, response) => {
  User.logout
    .handle(request, response)
    .catch((e) => {
      console.log(e)
      return response.status(500).send({ message: 'Erro inesperado. Tente novamente mais tarde' })
    });
});

const user_router = {
  path: '/user',
  router,
};

export default user_router;