const request = require('supertest');
const express = require('express');
const bodyParser = require('body-parser');
const { Animal } = require('../../../models');
const animalRoutes = require('../../../routes/animalRoute');
const configureMocks = require('./mocks');

const app = express();
app.use(bodyParser.json());
app.use('/animals', animalRoutes);

jest.mock('../../../models', () => {
  return {
    Animal: {
      findAll: jest.fn(),
      update: jest.fn()
    }
  };
});

describe('UPDATE (post) /animals', () => {
    it('Debería devolver un error 404 si el animal no existe', async () => {
        configureMocks('mockNotFound');
        const response = await request(app)
          .put('/animals/999')
          .send({ name: 'Perro', age: 6, dangerous: true });
        expect(response.status).toBe(404);
        expect(response.body).toEqual({ error: 'Animal not found' });
    });

    it('Debería devolver un error 400 si se proporcionan datos de entrada inválidos', async () => {
        configureMocks('mockUpdatedAnimal');
        const response = await request(app)
          .put('/animals/1')
          .send({ name: 'Perro', age: 'six', dangerous: true });
        expect(response.status).toBe(400);
      });
});
