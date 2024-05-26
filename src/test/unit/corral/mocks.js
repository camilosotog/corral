const { Corral } = require('../../../models');

const configureMocks = (nameMock) => {
    const mockCorrals = [
        { id: 1, name: 'Corral 1', capacity: 5 },
        { id: 2, name: 'Corral 2', capacity: 3 }
    ];

    const mockCreate = { id: 32, name: 'Corral 3', capacity: 2 };

    const mockUpdatedCorral = { id: 1, name: 'Corral 4', capacity: 6 };

    switch (nameMock) {
        case 'mockCorrals':
            Corral.findAll.mockResolvedValue(mockCorrals);
            break;
        case 'mockError':
            Corral.findAll.mockRejectedValue(new Error('Error al obtener Corrales'));
            break;
        case 'mockCreateCorral':
            Corral.create.mockResolvedValue(mockCreate);
            break;
        case 'mockDuplicateIdError':
            Corral.create.mockImplementation((corral) => {
                if (mockCorrals.some(a => a.id === corral.id)) {
                  return Promise.reject(new Error('Duplicate ID error'));
                }
                mockCorrals.push(corral);
                return Promise.resolve(corral);
            });
            break;
        case 'mockManagmentError':
            Corral.create.mockRejectedValue(new Error('Error al crear corral'));
            break;
        case 'mockUpdatedCorral':
            Corral.update.mockResolvedValue(mockUpdatedCorral);
            break;
        case 'mockNotFound':
            Corral.update.mockResolvedValue([0]);
            break;
        default:
            Corral.findAll.mockResolvedValue(mockCorrals);
    }
};

module.exports = configureMocks;
