const request = require('supertest');
const express = require('express');
const bodyParser = require('body-parser');
const corralRoutes = require('../../../routes/corralRoute');
const configureMocks = require('./mocks');

const app = express();
app.use(bodyParser.json());
app.use('/corrals', corralRoutes);

jest.mock('../../../models', () => {
  return {
    Corral: {
      findAll: jest.fn(),
      create: jest.fn()
    }
  };
});

/**
 * @description se define una sola Suite de pruebas que será la encargada de cubrir los test
 * de la funcion CREATE de corrales
 * @note Se usa jest.mock() que es una función de jest que permite crear simulaciones
 * de modulos y/o formatos que sirvan para usarse en la prueba ya sea para comparar respuestas
 * o para enviar parametros a la función de prueba
 */

describe('CREATE (post) /corrals', () => {
    it('Debería crear un nuevo corral correctamente', async () => {
        configureMocks('mockCreateCorral');
        const response = await request(app)
          .post('/corrals')
          .send({});
        expect(response.status).toBe(201);
        expect(response.body).toEqual(expect.objectContaining({ id: 32, name: 'Corral 3', capacity: 2 }));
    });

    it('Debería devolver un error si los datos son incompletos', async () => {
        configureMocks('mockCreateCorral');
        const response = await request(app)
          .post('/corrals')
          .send({ name: 'Loro' });
        expect(response.status).toBe(400);
        expect(response.body).toEqual(expect.objectContaining({
          error: expect.any(String)
        }));
    });

    it('No debería permitir crear un corral con un ID duplicado', async () => {
        configureMocks('mockDuplicateIdError');
        const response = await request(app)
          .post('/corrals')
          .send({ id: 1, name: 'Perro', age: 5, dangerous: false });
        expect(response.status).toBe(400);
        expect(response.body).toEqual({ error: 'Duplicate ID error' });
    });

    it('Debería manejar errores correctamente', async () => {
        configureMocks('mockManagmentError');
        const response = await request(app)
          .post('/corrals')
          .send({ name: 'Loro', age: 2, dangerous: false });
        expect(response.status).toBe(400);
        expect(response.body).toEqual({ error: 'Error al crear corral' });
    });

    it('Debería devolver un error si el campo dangerous no es un booleano', async () => {
        const response = await request(app)
            .post('/corrals')
            .send({ name: 'Tigre', age: 5, dangerous: 'truesss' });
        expect(response.status).toBe(400);
        expect(response.body).toEqual({ error: 'Error al crear corral' });
    });
    
    it('La respuesta se produce dentro de un tiempo aceptable', async () => {
        configureMocks('mockCreateCorral');
        const startTime = Date.now();
        await request(app).post('/corrals');
        const endTime = Date.now();  
        const duration = endTime - startTime;
      
        // Verifica que la duración de la solicitud sea aceptable en este caso 300ms
        console.log(duration);
        expect(duration).toBeLessThan(300);
      });  
});
