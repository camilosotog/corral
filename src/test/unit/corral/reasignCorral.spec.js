const { reasignCorral } = require('../../../controllers/corralController');
const { Corral, Animal } = require('../../../models');

jest.mock('../../../models', () => {
  return {
    Corral: {
      findAll: jest.fn()
    },
    Animal: {
      findAll: jest.fn()
    }
  };
});

describe('ReassignCorral /corrals', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('Debería retornar "No hay corrales o animales disponibles para reorganizar" si no hay corrales o animales', async () => {
    Corral.findAll.mockResolvedValue([]);
    Animal.findAll.mockResolvedValue([]);

    const result = await reasignCorral();

    expect(result).toBe('No hay corrales o animales disponibles para reorganizar');
  });

  it('Debería retornar "No hay corrales vacíos o animales no peligrosos disponibles" si no hay corrales vacíos o animales no peligrosos', async () => {
    Corral.findAll.mockResolvedValue([{ id: 1, name: 'Corral 1' }]);
    Animal.findAll.mockResolvedValue([{ id: 1, name: 'Animal 1', dangerous: true, CorralId: 1 }]);

    const result = await reasignCorral();

    expect(result).toBe('No hay corrales vacíos o animales no peligrosos disponibles');
  });

  it('Debería retornar "Reorganización de animales completada" si la reasignación es exitosa', async () => {
    const mockEmptyCorrals = [{ id: 1, name: 'Corral 1' }, { id: 2, name: 'Corral 2' }];
    const mockAnimals = [{ id: 1, name: 'Animal 1', dangerous: false, CorralId: null, update: jest.fn() }];
    Corral.findAll.mockResolvedValue(mockEmptyCorrals);
    Animal.findAll.mockResolvedValue(mockAnimals);

    const result = await reasignCorral();

    expect(result).toBe('Reorganización de animales completada');
    expect(mockAnimals[0].update).toHaveBeenCalledTimes(1);
    expect(mockAnimals[0].update).toHaveBeenCalledWith({ CorralId: 1 });
  });

  it('Debería retornar "Error interno del servidor" si ocurre un error', async () => {
    Corral.findAll.mockRejectedValue(new Error('Error'));
    Animal.findAll.mockRejectedValue(new Error('Error'));

    const result = await reasignCorral();

    expect(result).toBe('Error interno del servidor');
  });
});
