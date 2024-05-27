// const { Corral, Animal } = require('../../../models');
// const { getAverageAgeInCorral } = require('../../../controllers/corralController');

// jest.mock('../../../models', () => {
//   return {
//     Corral: {
//       findByPk: jest.fn()
//     },
//     Animal: {
//       findAll: jest.fn()
//     }
//   };
// });

// describe('getAverageAgeInCorral (GET) / corrals', () => {
//   beforeEach(() => {
//     jest.clearAllMocks();
//   });

//   it('Debería retornar "Corral no encontrado" si el corral no existe', async () => {
//     Corral.findByPk.mockResolvedValue(null)
//     const result = await getAverageAgeInCorral(1);
//     expect(result).toBe('Corral no encontrado');
//   });

//   it('Debería retornar "No hay animales en este corral" si no hay animales en el corral', async () => {
//     Corral.findByPk.mockResolvedValue({ id: 1, name: 'Corral 1' });
//     Animal.findAll.mockResolvedValue([]);
//     const result = await getAverageAgeInCorral(1);
//     expect(result).toBe('No hay animales en este corral');
//   });

//   it('Debería retornar el promedio de edad de los animales en el corral ( Promedio de (5 + 7 + 3) / 3 = 5)', async () => {
//     Corral.findByPk.mockResolvedValue({ id: 1, name: 'Corral 1' });
//     Animal.findAll.mockResolvedValue([
//       { id: 1, age: 5, CorralId: 1 },
//       { id: 2, age: 7, CorralId: 1 },
//       { id: 3, age: 3, CorralId: 1 }
//     ]);
//     const result = await getAverageAgeInCorral(1);
//     expect(result).toBeCloseTo(5);
//   });

//   it('Debería retornar "Error interno del servidor" si ocurre un error', async () => {
//     Corral.findByPk.mockRejectedValue(new Error('Error'));
//     const result = await getAverageAgeInCorral(1);
//     expect(result).toBe('Error interno del servidor');
//   });
// });
