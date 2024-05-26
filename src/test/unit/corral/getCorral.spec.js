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
      findAll: jest.fn()
    }
  };
});

/**
 * @description se define una sola Suite de pruebas que será la encargada de cubrir los test
 * de la funcion GET de corrales que trae todos los registros de corrales
 * @note Se usa jest.mock() que es una función de jest que permite crear simulaciones
 * de modulos y/o formatos que sirvan para usarse en la prueba ya sea para comparar respuestas
 * o para enviar parametros a la función de prueba
 */

describe('GET /corrals', () => {
  it('Debería devolver todos los corrales', async () => {
    configureMocks('mockCorrals');
    const response = await request(app).get('/corrals');
    expect(Corral.findAll).toHaveBeenCalledTimes(1);
    expect(response.status).toBe(200);
    expect(response.body).toEqual(expect.arrayContaining([
      expect.objectContaining({ id: 1, name: 'Corral 1', capacity: 5 }),
      expect.objectContaining({ id: 2, name: 'Corral 2', capacity: 3 })
    ]));
  });

  it('Debería manejar errores correctamente', async () => {
    configureMocks('mockError');
    const response = await request(app).get('/corrals');
    expect(response.body).toEqual({ error: 'Error al obtener Corrales' });
  });

  it('La respuesta devuelve el formato JSON esperado, valida que sea tipo de dato definido en el modelo', async () => {
    configureMocks('mockCorrals');
    const response = await request(app).get('/corrals');
    expect(Array.isArray(response.body)).toBe(true);
    response.body.forEach((corral) => {
      expect(corral).toHaveProperty('id');
      expect(typeof corral.id).toBe('number');
      expect(corral).toHaveProperty('name');
      expect(typeof corral.name).toBe('string');
      expect(corral).toHaveProperty('capacity');
      expect(typeof corral.capacity).toBe('number');
    });
  });

  it('La respuesta devuelve el código de estado HTTP correcto', async () => {
    configureMocks('mockCorrals');
      const response = await request(app).get('/corrals');
      expect(response.status).toBe(200);
  });
  
  it('La respuesta se produce dentro de un tiempo aceptable', async () => {
    configureMocks('mockCorrals');
    const startTime = Date.now();
    await request(app).get('/corrals');
    const endTime = Date.now();  
    const duration = endTime - startTime;
  
    // Verifica que la duración de la solicitud sea aceptable en este caso 300ms
    console.log(duration);
    expect(duration).toBeLessThan(300);
  });  
});
