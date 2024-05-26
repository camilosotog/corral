const request = require('supertest');
const express = require('express');
const bodyParser = require('body-parser');
const animalRoutes = require('../../../routes/animalRoute');
const configureMocks = require('./mocks');

const app = express();
app.use(bodyParser.json());
app.use('/animals', animalRoutes);

jest.mock('../../../models', () => {
  return {
    Animal: {
      findAll: jest.fn(),
      create: jest.fn()
    }
  };
});

/**
 * @description se define una sola Suite de pruebas que será la encargada de cubrir los test
 * de la funcion CREATE de animales
 * @note Se usa jest.mock() que es una función de jest que permite crear simulaciones
 * de modulos y/o formatos que sirvan para usarse en la prueba ya sea para comparar respuestas
 * o para enviar parametros a la función de prueba
 */

describe('CREATE (post) /animals', () => {
    it('Debería crear un nuevo animal correctamente', async () => {
        configureMocks('mockCreateAnimal');
        const response = await request(app)
          .post('/animals')
          .send({});
        expect(response.status).toBe(201);
        expect(response.body).toEqual(expect.objectContaining({ id: 32, name: 'Loro', age: 2, dangerous: false }));
    });

    it('Debería devolver un error si los datos son incompletos', async () => {
        configureMocks('mockCreateAnimal');
        const response = await request(app)
          .post('/animals')
          .send({ name: 'Loro' });
        expect(response.status).toBe(400);
        expect(response.body).toEqual(expect.objectContaining({
          error: expect.any(String)
        }));
    });

    it('No debería permitir crear un animal con un ID duplicado', async () => {
        configureMocks('mockDuplicateIdError');
        const response = await request(app)
          .post('/animals')
          .send({ id: 1, name: 'Perro', age: 5, dangerous: false });
        expect(response.status).toBe(400);
        expect(response.body).toEqual({ error: 'Duplicate ID error' });
    });

    it('Debería manejar errores correctamente', async () => {
        configureMocks('mockManagmentError');
        const response = await request(app)
          .post('/animals')
          .send({ name: 'Loro', age: 2, dangerous: false });
        expect(response.status).toBe(400);
        expect(response.body).toEqual({ error: 'Error al crear animal' });
    });

    it('Debería devolver un error si el campo dangerous no es un booleano', async () => {
        const response = await request(app)
            .post('/animals')
            .send({ name: 'Tigre', age: 5, dangerous: 'truesss' });
        expect(response.status).toBe(400);
        expect(response.body).toEqual({ error: 'Error al crear animal' });
    });
    
    it('La respuesta se produce dentro de un tiempo aceptable', async () => {
        configureMocks('mockCreateAnimal');
        const startTime = Date.now();
        await request(app).post('/animals');
        const endTime = Date.now();  
        const duration = endTime - startTime;
      
        // Verifica que la duración de la solicitud sea aceptable en este caso 300ms
        console.log(duration);
        expect(duration).toBeLessThan(300);
      });  
});
