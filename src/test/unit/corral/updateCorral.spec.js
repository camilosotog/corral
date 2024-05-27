const request = require('supertest');
const express = require('express');
const bodyParser = require('body-parser');
const { Corral } = require('../../../models');
const corralRoutes = require('../../../routes/corralRoute');
const configureMocks = require('./mocks');

const app = express();
app.use(bodyParser.json());
app.use('/corrals', corralRoutes);

jest.mock('../../../models', () => {
  return {
    Corral: {
      findAll: jest.fn(),
      update: jest.fn()
    }
  };
});

describe('UPDATE (post) /corrals', () => {
  // it('Debería retornar un error 404 si el corral no existe', async () => {
  //   configureMocks('mockNotFound');
  //   const response = await request(app)
  //     .put('/corrals/999')
  //     .send({ name: 'Perro', age: 6, dangerous: true });
  //   expect(response.status).toBe(404);
  //   expect(response.body).toEqual({ error: 'Corral not found' });
  // });

  // it('Debería retornar un error 400 si se proporcionan datos de entrada inválidos', async () => {
  //   configureMocks('mockUpdatedCorral');
  //   const response = await request(app)
  //     .put('/corrals/1')
  //     .send({ name: 'Perro', age: 'six', dangerous: true });
  //   expect(response.status).toBe(400);
  // });
});
