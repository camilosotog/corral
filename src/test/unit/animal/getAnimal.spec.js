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

describe('GET /animals', () => {
  // it('Debería devolver todos los animales', async () => {
  //   configureMocks('mockAnimals');
  //   const response = await request(app).get('/animals');
  //   expect(Animal.findAll).toHaveBeenCalledTimes(1);
  //   expect(response.status).toBe(200);
  //   expect(response.body).toEqual(expect.arrayContaining([
  //     expect.objectContaining({ id: 1, name: 'Perro', age: 5, dangerous: false }),
  //     expect.objectContaining({ id: 2, name: 'Gato', age: 3, dangerous: false })
  //   ]));
  // });

  // it('Debería manejar errores correctamente', async () => {
  //   configureMocks('mockError');
  //   const response = await request(app).get('/animals');
  //   expect(response.body).toEqual({ error: 'Error al obtener animales' });
  // });

  // it('La respuesta devuelve el formato JSON esperado, valida que sea tipo de dato definido en el modelo', async () => {
  //   configureMocks('mockAnimals');
  //   const response = await request(app).get('/animals');
  //   expect(Array.isArray(response.body)).toBe(true);
  //   response.body.forEach((animal) => {
  //     expect(animal).toHaveProperty('id');
  //     expect(typeof animal.id).toBe('number');
  //     expect(animal).toHaveProperty('name');
  //     expect(typeof animal.name).toBe('string');
  //     expect(animal).toHaveProperty('age');
  //     expect(typeof animal.age).toBe('number');
  //     expect(animal).toHaveProperty('dangerous');
  //     expect(typeof animal.dangerous).toBe('boolean');
  //   });
  // });

  // it('Debería retornar como respuesta el código de estado HTTP correcto', async () => {
  //   configureMocks('mockAnimals');
  //     const response = await request(app).get('/animals');
  //     expect(response.status).toBe(200);
  // });
  
  // it('Valida si la rrespuesta se produce dentro de un tiempo aceptable (300ms)', async () => {
  //   configureMocks('mockAnimals');
  //   const startTime = Date.now();
  //   await request(app).get('/animals');
  //   const endTime = Date.now();  
  //   const duration = endTime - startTime;
  //   console.log(duration);
  //   expect(duration).toBeLessThan(300);
  // });  
});
