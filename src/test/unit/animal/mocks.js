const { Animal } = require('../../../models');

const configureMocks = (nameMock) => {
    const mockAnimals = [
        { id: 1, name: 'Perro', age: 5, dangerous: false },
        { id: 2, name: 'Gato', age: 3, dangerous: false }
    ];

    const mockCreate = { id: 32, name: 'Loro', age: 2, dangerous: false };

    const mockUpdatedAnimal = { id: 1, name: 'Perro', age: 6, dangerous: true };

    switch (nameMock) {
        case 'mockAnimals':
            Animal.findAll.mockResolvedValue(mockAnimals);
            break;
        case 'mockError':
            Animal.findAll.mockRejectedValue(new Error('Error al obtener animales'));
            break;
        case 'mockCreateAnimal':
            Animal.create.mockResolvedValue(mockCreate);
            break;
        case 'mockDuplicateIdError':
            Animal.create.mockImplementation((animal) => {
                if (mockAnimals.some(a => a.id === animal.id)) {
                  return Promise.reject(new Error('Duplicate ID error'));
                }
                mockAnimals.push(animal);
                return Promise.resolve(animal);
            });
            break;
        case 'mockManagmentError':
            Animal.create.mockRejectedValue(new Error('Error al crear animal'));
            break;
        case 'mockUpdatedAnimal':
            Animal.update.mockResolvedValue(mockUpdatedAnimal);
            break;
        case 'mockNotFound':
            Animal.update.mockResolvedValue([0]);
            break;
        default:
            Animal.findAll.mockResolvedValue(mockAnimals);
    }
};

module.exports = configureMocks;
