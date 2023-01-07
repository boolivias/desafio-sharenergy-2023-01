import { Router } from 'express';
import Customer from '../controllers/Customer';
import middleware from '../middleware';

const router = Router();

router.post('/', (req, res, next) => middleware.admin.handle(req, res, next), (request, response) => {
  Customer.create
    .handle(request, response)
    .catch((e) => {
      console.log(e)
      return response.status(500).send({ message: 'Erro inesperado. Tente novamente mais tarde' })
    });
});

router.patch('/:id', (req, res, next) => middleware.admin.handle(req, res, next), (request, response) => {
  Customer.update
    .handle(request, response)
    .catch((e) => {
      console.log(e)
      return response.status(500).send({ message: 'Erro inesperado. Tente novamente mais tarde' })
    });
});

router.delete('/:id', (req, res, next) => middleware.admin.handle(req, res, next), (request, response) => {
  Customer.delete
    .handle(request, response)
    .catch((e) => {
      console.log(e)
      return response.status(500).send({ message: 'Erro inesperado. Tente novamente mais tarde' })
    });
});

router.get('/:id', (req, res, next) => middleware.admin.handle(req, res, next), (request, response) => {
  Customer.getById
    .handle(request, response)
    .catch((e) => {
      console.log(e)
      return response.status(500).send({ message: 'Erro inesperado. Tente novamente mais tarde' })
    });
});

const customer_router = {
  path: '/customer',
  router,
};

export default customer_router;