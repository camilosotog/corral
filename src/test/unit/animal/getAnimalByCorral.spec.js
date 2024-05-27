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
      findAll: jest.fn()
    }
  };
});

/**
 * @description se define una sola Suite de pruebas que será la encargada de cubrir los test
 * de la funcion GET de animales que trae todos los registros de animales
 * @note Se usa jest.mock() que es una función de jest que permite crear simulaciones
 * de modulos y/o formatos que sirvan para usarse en la prueba ya sea para comparar respuestas
 * o para enviar parametros a la función de prueba
 */

describe('GET /animalsByCorral', () => {
  it('Debería retornar todos los animales en un corral dado el id de un corral', async () => {
    configureMocks('mockAnimalByCorral');
    const response = await request(app).get('/animals/animal/1');
    expect(Animal.findAll).toHaveBeenCalledTimes(1);
    expect(response.status).toBe(200);
    expect(response.body).toEqual(expect.arrayContaining([
      expect.objectContaining({id: 1, name: 'Leon', age: 5, dangerous: true, CorralId: 1}),
      expect.objectContaining({id: 2, name: 'Tigre', age: 2, dangerous: true, CorralId: 1}),
      expect.objectContaining({id: 4, name: 'Caballo', age: 1, dangerous: false, CorralId: 1})
    ]));
  });
});
