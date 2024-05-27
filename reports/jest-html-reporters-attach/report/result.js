window.jest_html_reporters_callback__({"numFailedTestSuites":4,"numFailedTests":4,"numPassedTestSuites":5,"numPassedTests":31,"numPendingTestSuites":0,"numPendingTests":0,"numRuntimeErrorTestSuites":0,"numTodoTests":0,"numTotalTestSuites":9,"numTotalTests":35,"startTime":1716790166473,"success":false,"testResults":[{"numFailingTests":1,"numPassingTests":3,"numPendingTests":0,"numTodoTests":0,"perfStats":{"end":1716790169072,"runtime":2057,"slow":false,"start":1716790167015},"testFilePath":"C:\\Users\\DESARROLLADOR-PC3\\Documents\\Camilo\\proyectOnCredit\\back\\src\\test\\unit\\corral\\reasignCorral.spec.js","failureMessage":"\u001b[1m\u001b[31m  \u001b[1m● \u001b[22m\u001b[1mReassignCorral (POST) /corrals › Debería retornar \"Reorganización de animales completada\" si la reasignación es exitosa\u001b[39m\u001b[22m\n\n    \u001b[2mexpect(\u001b[22m\u001b[31mjest.fn()\u001b[39m\u001b[2m).\u001b[22mtoHaveBeenCalledWith\u001b[2m(\u001b[22m\u001b[32m...expected\u001b[39m\u001b[2m)\u001b[22m\n\n    \u001b[32m- Expected\u001b[39m\n    \u001b[31m+ Received\u001b[39m\n\n    \u001b[2m  Object {\u001b[22m\n    \u001b[32m-   \"CorralId\": 1,\u001b[39m\n    \u001b[31m+   \"CorralId\": 2,\u001b[39m\n    \u001b[2m  }\u001b[22m,\n\n    Number of calls: \u001b[31m1\u001b[39m\n\u001b[2m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 46 |\u001b[39m     expect(result)\u001b[33m.\u001b[39mtoBe(\u001b[32m'Reorganización de animales completada'\u001b[39m)\u001b[33m;\u001b[39m\u001b[22m\n\u001b[2m     \u001b[90m 47 |\u001b[39m     expect(mockAnimals[\u001b[35m0\u001b[39m]\u001b[33m.\u001b[39mupdate)\u001b[33m.\u001b[39mtoHaveBeenCalledTimes(\u001b[35m1\u001b[39m)\u001b[33m;\u001b[39m\u001b[22m\n\u001b[2m    \u001b[31m\u001b[1m>\u001b[22m\u001b[2m\u001b[39m\u001b[90m 48 |\u001b[39m     expect(mockAnimals[\u001b[35m0\u001b[39m]\u001b[33m.\u001b[39mupdate)\u001b[33m.\u001b[39mtoHaveBeenCalledWith({ \u001b[33mCorralId\u001b[39m\u001b[33m:\u001b[39m \u001b[35m1\u001b[39m })\u001b[33m;\u001b[39m\u001b[22m\n\u001b[2m     \u001b[90m    |\u001b[39m                                   \u001b[31m\u001b[1m^\u001b[22m\u001b[2m\u001b[39m\u001b[22m\n\u001b[2m     \u001b[90m 49 |\u001b[39m   })\u001b[33m;\u001b[39m\u001b[22m\n\u001b[2m     \u001b[90m 50 |\u001b[39m\u001b[22m\n\u001b[2m     \u001b[90m 51 |\u001b[39m   it(\u001b[32m'Debería retornar \"Error interno del servidor\" si ocurre un error'\u001b[39m\u001b[33m,\u001b[39m \u001b[36masync\u001b[39m () \u001b[33m=>\u001b[39m {\u001b[0m\u001b[22m\n\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat Object.toHaveBeenCalledWith (\u001b[22m\u001b[2m\u001b[0m\u001b[36msrc/test/unit/corral/reasignCorral.spec.js\u001b[39m\u001b[0m\u001b[2m:48:35)\u001b[22m\u001b[2m\u001b[22m\n","testResults":[{"ancestorTitles":["ReassignCorral (POST) /corrals"],"duration":20,"failureMessages":[],"fullName":"ReassignCorral (POST) /corrals Debería retornar \"No hay corrales o animales disponibles para reorganizar\" si no hay corrales o animales","status":"passed","title":"Debería retornar \"No hay corrales o animales disponibles para reorganizar\" si no hay corrales o animales"},{"ancestorTitles":["ReassignCorral (POST) /corrals"],"duration":1,"failureMessages":[],"fullName":"ReassignCorral (POST) /corrals Debería retornar \"No hay corrales vacíos o animales no peligrosos disponibles\" si no hay corrales vacíos o animales no peligrosos","status":"passed","title":"Debería retornar \"No hay corrales vacíos o animales no peligrosos disponibles\" si no hay corrales vacíos o animales no peligrosos"},{"ancestorTitles":["ReassignCorral (POST) /corrals"],"duration":13,"failureMessages":["Error: \u001b[2mexpect(\u001b[22m\u001b[31mjest.fn()\u001b[39m\u001b[2m).\u001b[22mtoHaveBeenCalledWith\u001b[2m(\u001b[22m\u001b[32m...expected\u001b[39m\u001b[2m)\u001b[22m\n\n\u001b[32m- Expected\u001b[39m\n\u001b[31m+ Received\u001b[39m\n\n\u001b[2m  Object {\u001b[22m\n\u001b[32m-   \"CorralId\": 1,\u001b[39m\n\u001b[31m+   \"CorralId\": 2,\u001b[39m\n\u001b[2m  }\u001b[22m,\n\nNumber of calls: \u001b[31m1\u001b[39m\n    at Object.toHaveBeenCalledWith (C:\\Users\\DESARROLLADOR-PC3\\Documents\\Camilo\\proyectOnCredit\\back\\src\\test\\unit\\corral\\reasignCorral.spec.js:48:35)\n    at processTicksAndRejections (node:internal/process/task_queues:96:5)"],"fullName":"ReassignCorral (POST) /corrals Debería retornar \"Reorganización de animales completada\" si la reasignación es exitosa","status":"failed","title":"Debería retornar \"Reorganización de animales completada\" si la reasignación es exitosa"},{"ancestorTitles":["ReassignCorral (POST) /corrals"],"duration":2,"failureMessages":[],"fullName":"ReassignCorral (POST) /corrals Debería retornar \"Error interno del servidor\" si ocurre un error","status":"passed","title":"Debería retornar \"Error interno del servidor\" si ocurre un error"}]},{"numFailingTests":0,"numPassingTests":2,"numPendingTests":0,"numTodoTests":0,"perfStats":{"end":1716790169918,"runtime":2846,"slow":false,"start":1716790167072},"testFilePath":"C:\\Users\\DESARROLLADOR-PC3\\Documents\\Camilo\\proyectOnCredit\\back\\src\\test\\unit\\animal\\updateAnimal.spec.js","failureMessage":null,"testResults":[{"ancestorTitles":["UPDATE (post) /animals"],"duration":104,"failureMessages":[],"fullName":"UPDATE (post) /animals Debería retornar un error 404 si el animal no existe","status":"passed","title":"Debería retornar un error 404 si el animal no existe"},{"ancestorTitles":["UPDATE (post) /animals"],"duration":13,"failureMessages":[],"fullName":"UPDATE (post) /animals Debería retornar un error 400 si se proporcionan datos de entrada inválidos","status":"passed","title":"Debería retornar un error 400 si se proporcionan datos de entrada inválidos"}]},{"numFailingTests":1,"numPassingTests":0,"numPendingTests":0,"numTodoTests":0,"perfStats":{"end":1716790169942,"runtime":2928,"slow":false,"start":1716790167014},"testFilePath":"C:\\Users\\DESARROLLADOR-PC3\\Documents\\Camilo\\proyectOnCredit\\back\\src\\test\\unit\\animal\\getAnimalByCorral.spec.js","failureMessage":"\u001b[1m\u001b[31m  \u001b[1m● \u001b[22m\u001b[1mGET /animalsByCorral › Debería retornar todos los animales en un corral dado el id de un corral\u001b[39m\u001b[22m\n\n    \u001b[2mexpect(\u001b[22m\u001b[31mreceived\u001b[39m\u001b[2m).\u001b[22mtoEqual\u001b[2m(\u001b[22m\u001b[32mexpected\u001b[39m\u001b[2m) // deep equality\u001b[22m\n\n    Expected: \u001b[32mArrayContaining [ObjectContaining {\"CorralId\": 1, \"age\": 5, \"dangerous\": true, \"id\": 1, \"name\": \"Leon\"}, ObjectContaining {\"CorralId\": 1, \"age\": 2, \"dangerous\": true, \"id\": 2, \"name\": \"Tigre\"}, ObjectContaining {\"CorralId\": 1, \"age\": 1, \"dangerous\": false, \"id\": 4, \"name\": \"Caballo\"}]\u001b[39m\n    Received: \u001b[31m[{\"CorralId\": 1, \"age\": 5, \"dangerous\": true, \"id\": 1, \"name\": \"Leon\"}, {\"CorralId\": 1, \"age\": 2, \"dangerous\": true, \"id\": 2, \"name\": \"Tigre\"}, {\"CorralId\": 2, \"age\": 1, \"dangerous\": false, \"id\": 3, \"name\": \"Pajarito\"}, {\"CorralId\": 1, \"age\": 11, \"dangerous\": false, \"id\": 4, \"name\": \"Caballo\"}]\u001b[39m\n\u001b[2m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 32 |\u001b[39m     expect(\u001b[33mAnimal\u001b[39m\u001b[33m.\u001b[39mfindAll)\u001b[33m.\u001b[39mtoHaveBeenCalledTimes(\u001b[35m1\u001b[39m)\u001b[33m;\u001b[39m\u001b[22m\n\u001b[2m     \u001b[90m 33 |\u001b[39m     expect(response\u001b[33m.\u001b[39mstatus)\u001b[33m.\u001b[39mtoBe(\u001b[35m200\u001b[39m)\u001b[33m;\u001b[39m\u001b[22m\n\u001b[2m    \u001b[31m\u001b[1m>\u001b[22m\u001b[2m\u001b[39m\u001b[90m 34 |\u001b[39m     expect(response\u001b[33m.\u001b[39mbody)\u001b[33m.\u001b[39mtoEqual(expect\u001b[33m.\u001b[39marrayContaining([\u001b[22m\n\u001b[2m     \u001b[90m    |\u001b[39m                           \u001b[31m\u001b[1m^\u001b[22m\u001b[2m\u001b[39m\u001b[22m\n\u001b[2m     \u001b[90m 35 |\u001b[39m       expect\u001b[33m.\u001b[39mobjectContaining({id\u001b[33m:\u001b[39m \u001b[35m1\u001b[39m\u001b[33m,\u001b[39m name\u001b[33m:\u001b[39m \u001b[32m'Leon'\u001b[39m\u001b[33m,\u001b[39m age\u001b[33m:\u001b[39m \u001b[35m5\u001b[39m\u001b[33m,\u001b[39m dangerous\u001b[33m:\u001b[39m \u001b[36mtrue\u001b[39m\u001b[33m,\u001b[39m \u001b[33mCorralId\u001b[39m\u001b[33m:\u001b[39m \u001b[35m1\u001b[39m})\u001b[33m,\u001b[39m\u001b[22m\n\u001b[2m     \u001b[90m 36 |\u001b[39m       expect\u001b[33m.\u001b[39mobjectContaining({id\u001b[33m:\u001b[39m \u001b[35m2\u001b[39m\u001b[33m,\u001b[39m name\u001b[33m:\u001b[39m \u001b[32m'Tigre'\u001b[39m\u001b[33m,\u001b[39m age\u001b[33m:\u001b[39m \u001b[35m2\u001b[39m\u001b[33m,\u001b[39m dangerous\u001b[33m:\u001b[39m \u001b[36mtrue\u001b[39m\u001b[33m,\u001b[39m \u001b[33mCorralId\u001b[39m\u001b[33m:\u001b[39m \u001b[35m1\u001b[39m})\u001b[33m,\u001b[39m\u001b[22m\n\u001b[2m     \u001b[90m 37 |\u001b[39m       expect\u001b[33m.\u001b[39mobjectContaining({id\u001b[33m:\u001b[39m \u001b[35m4\u001b[39m\u001b[33m,\u001b[39m name\u001b[33m:\u001b[39m \u001b[32m'Caballo'\u001b[39m\u001b[33m,\u001b[39m age\u001b[33m:\u001b[39m \u001b[35m1\u001b[39m\u001b[33m,\u001b[39m dangerous\u001b[33m:\u001b[39m \u001b[36mfalse\u001b[39m\u001b[33m,\u001b[39m \u001b[33mCorralId\u001b[39m\u001b[33m:\u001b[39m \u001b[35m1\u001b[39m})\u001b[0m\u001b[22m\n\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat Object.toEqual (\u001b[22m\u001b[2m\u001b[0m\u001b[36msrc/test/unit/animal/getAnimalByCorral.spec.js\u001b[39m\u001b[0m\u001b[2m:34:27)\u001b[22m\u001b[2m\u001b[22m\n","testResults":[{"ancestorTitles":["GET /animalsByCorral"],"duration":111,"failureMessages":["Error: \u001b[2mexpect(\u001b[22m\u001b[31mreceived\u001b[39m\u001b[2m).\u001b[22mtoEqual\u001b[2m(\u001b[22m\u001b[32mexpected\u001b[39m\u001b[2m) // deep equality\u001b[22m\n\nExpected: \u001b[32mArrayContaining [ObjectContaining {\"CorralId\": 1, \"age\": 5, \"dangerous\": true, \"id\": 1, \"name\": \"Leon\"}, ObjectContaining {\"CorralId\": 1, \"age\": 2, \"dangerous\": true, \"id\": 2, \"name\": \"Tigre\"}, ObjectContaining {\"CorralId\": 1, \"age\": 1, \"dangerous\": false, \"id\": 4, \"name\": \"Caballo\"}]\u001b[39m\nReceived: \u001b[31m[{\"CorralId\": 1, \"age\": 5, \"dangerous\": true, \"id\": 1, \"name\": \"Leon\"}, {\"CorralId\": 1, \"age\": 2, \"dangerous\": true, \"id\": 2, \"name\": \"Tigre\"}, {\"CorralId\": 2, \"age\": 1, \"dangerous\": false, \"id\": 3, \"name\": \"Pajarito\"}, {\"CorralId\": 1, \"age\": 11, \"dangerous\": false, \"id\": 4, \"name\": \"Caballo\"}]\u001b[39m\n    at Object.toEqual (C:\\Users\\DESARROLLADOR-PC3\\Documents\\Camilo\\proyectOnCredit\\back\\src\\test\\unit\\animal\\getAnimalByCorral.spec.js:34:27)\n    at processTicksAndRejections (node:internal/process/task_queues:96:5)"],"fullName":"GET /animalsByCorral Debería retornar todos los animales en un corral dado el id de un corral","status":"failed","title":"Debería retornar todos los animales en un corral dado el id de un corral"}]},{"numFailingTests":1,"numPassingTests":5,"numPendingTests":0,"numTodoTests":0,"perfStats":{"end":1716790170087,"runtime":3087,"slow":false,"start":1716790167000},"testFilePath":"C:\\Users\\DESARROLLADOR-PC3\\Documents\\Camilo\\proyectOnCredit\\back\\src\\test\\unit\\animal\\createAnimal.spec.js","failureMessage":"\u001b[1m\u001b[31m  \u001b[1m● \u001b[22m\u001b[1mCREATE (post) /animals › Debería retornar un error si los datos son incompletos\u001b[39m\u001b[22m\n\n    \u001b[2mexpect(\u001b[22m\u001b[31mreceived\u001b[39m\u001b[2m).\u001b[22mtoBe\u001b[2m(\u001b[22m\u001b[32mexpected\u001b[39m\u001b[2m) // Object.is equality\u001b[22m\n\n    Expected: \u001b[32m400\u001b[39m\n    Received: \u001b[31m201\u001b[39m\n\u001b[2m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 41 |\u001b[39m           \u001b[33m.\u001b[39mpost(\u001b[32m'/animals'\u001b[39m)\u001b[22m\n\u001b[2m     \u001b[90m 42 |\u001b[39m           \u001b[33m.\u001b[39msend({ name\u001b[33m:\u001b[39m \u001b[32m'Loro'\u001b[39m })\u001b[33m;\u001b[39m\u001b[22m\n\u001b[2m    \u001b[31m\u001b[1m>\u001b[22m\u001b[2m\u001b[39m\u001b[90m 43 |\u001b[39m         expect(response\u001b[33m.\u001b[39mstatus)\u001b[33m.\u001b[39mtoBe(\u001b[35m400\u001b[39m)\u001b[33m;\u001b[39m\u001b[22m\n\u001b[2m     \u001b[90m    |\u001b[39m                                 \u001b[31m\u001b[1m^\u001b[22m\u001b[2m\u001b[39m\u001b[22m\n\u001b[2m     \u001b[90m 44 |\u001b[39m         expect(response\u001b[33m.\u001b[39mbody)\u001b[33m.\u001b[39mtoEqual(expect\u001b[33m.\u001b[39mobjectContaining({\u001b[22m\n\u001b[2m     \u001b[90m 45 |\u001b[39m           error\u001b[33m:\u001b[39m expect\u001b[33m.\u001b[39many(\u001b[33mString\u001b[39m)\u001b[22m\n\u001b[2m     \u001b[90m 46 |\u001b[39m         }))\u001b[33m;\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat Object.toBe (\u001b[22m\u001b[2m\u001b[0m\u001b[36msrc/test/unit/animal/createAnimal.spec.js\u001b[39m\u001b[0m\u001b[2m:43:33)\u001b[22m\u001b[2m\u001b[22m\n","testResults":[{"ancestorTitles":["CREATE (post) /animals"],"duration":103,"failureMessages":[],"fullName":"CREATE (post) /animals Debería crear un nuevo animal correctamente","status":"passed","title":"Debería crear un nuevo animal correctamente"},{"ancestorTitles":["CREATE (post) /animals"],"duration":22,"failureMessages":["Error: \u001b[2mexpect(\u001b[22m\u001b[31mreceived\u001b[39m\u001b[2m).\u001b[22mtoBe\u001b[2m(\u001b[22m\u001b[32mexpected\u001b[39m\u001b[2m) // Object.is equality\u001b[22m\n\nExpected: \u001b[32m400\u001b[39m\nReceived: \u001b[31m201\u001b[39m\n    at Object.toBe (C:\\Users\\DESARROLLADOR-PC3\\Documents\\Camilo\\proyectOnCredit\\back\\src\\test\\unit\\animal\\createAnimal.spec.js:43:33)\n    at processTicksAndRejections (node:internal/process/task_queues:96:5)"],"fullName":"CREATE (post) /animals Debería retornar un error si los datos son incompletos","status":"failed","title":"Debería retornar un error si los datos son incompletos"},{"ancestorTitles":["CREATE (post) /animals"],"duration":35,"failureMessages":[],"fullName":"CREATE (post) /animals No debería permitir crear un animal con un ID duplicado","status":"passed","title":"No debería permitir crear un animal con un ID duplicado"},{"ancestorTitles":["CREATE (post) /animals"],"duration":19,"failureMessages":[],"fullName":"CREATE (post) /animals Debería manejar errores correctamente","status":"passed","title":"Debería manejar errores correctamente"},{"ancestorTitles":["CREATE (post) /animals"],"duration":22,"failureMessages":[],"fullName":"CREATE (post) /animals Debería retornar un error si el campo dangerous no es un booleano","status":"passed","title":"Debería retornar un error si el campo dangerous no es un booleano"},{"ancestorTitles":["CREATE (post) /animals"],"duration":26,"failureMessages":[],"fullName":"CREATE (post) /animals La respuesta se produce dentro de un tiempo aceptable (300)","status":"passed","title":"La respuesta se produce dentro de un tiempo aceptable (300)"}]},{"numFailingTests":0,"numPassingTests":2,"numPendingTests":0,"numTodoTests":0,"perfStats":{"end":1716790170118,"runtime":3056,"slow":false,"start":1716790167062},"testFilePath":"C:\\Users\\DESARROLLADOR-PC3\\Documents\\Camilo\\proyectOnCredit\\back\\src\\test\\unit\\corral\\updateCorral.spec.js","failureMessage":null,"testResults":[{"ancestorTitles":["UPDATE (post) /corrals"],"duration":130,"failureMessages":[],"fullName":"UPDATE (post) /corrals Debería retornar un error 404 si el corral no existe","status":"passed","title":"Debería retornar un error 404 si el corral no existe"},{"ancestorTitles":["UPDATE (post) /corrals"],"duration":20,"failureMessages":[],"fullName":"UPDATE (post) /corrals Debería retornar un error 400 si se proporcionan datos de entrada inválidos","status":"passed","title":"Debería retornar un error 400 si se proporcionan datos de entrada inválidos"}]},{"numFailingTests":0,"numPassingTests":5,"numPendingTests":0,"numTodoTests":0,"perfStats":{"end":1716790170131,"runtime":3104,"slow":false,"start":1716790167027},"testFilePath":"C:\\Users\\DESARROLLADOR-PC3\\Documents\\Camilo\\proyectOnCredit\\back\\src\\test\\unit\\corral\\getCorral.spec.js","failureMessage":null,"testResults":[{"ancestorTitles":["GET /corrals"],"duration":91,"failureMessages":[],"fullName":"GET /corrals Debería devolver todos los corrales","status":"passed","title":"Debería devolver todos los corrales"},{"ancestorTitles":["GET /corrals"],"duration":17,"failureMessages":[],"fullName":"GET /corrals Debería manejar errores correctamente","status":"passed","title":"Debería manejar errores correctamente"},{"ancestorTitles":["GET /corrals"],"duration":16,"failureMessages":[],"fullName":"GET /corrals La respuesta devuelve el formato JSON esperado, valida que sea tipo de dato definido en el modelo","status":"passed","title":"La respuesta devuelve el formato JSON esperado, valida que sea tipo de dato definido en el modelo"},{"ancestorTitles":["GET /corrals"],"duration":11,"failureMessages":[],"fullName":"GET /corrals Valida si l¿ respuesta retorna el código de estado HTTP correcto","status":"passed","title":"Valida si l¿ respuesta retorna el código de estado HTTP correcto"},{"ancestorTitles":["GET /corrals"],"duration":21,"failureMessages":[],"fullName":"GET /corrals Valida si la respuesta se produce dentro de un tiempo aceptable (300ms)","status":"passed","title":"Valida si la respuesta se produce dentro de un tiempo aceptable (300ms)"}]},{"numFailingTests":1,"numPassingTests":5,"numPendingTests":0,"numTodoTests":0,"perfStats":{"end":1716790170188,"runtime":3199,"slow":false,"start":1716790166989},"testFilePath":"C:\\Users\\DESARROLLADOR-PC3\\Documents\\Camilo\\proyectOnCredit\\back\\src\\test\\unit\\corral\\createCorral.spec.js","failureMessage":"\u001b[1m\u001b[31m  \u001b[1m● \u001b[22m\u001b[1mCREATE (post) /corrals › Debería retornar un error si los datos son incompletos\u001b[39m\u001b[22m\n\n    \u001b[2mexpect(\u001b[22m\u001b[31mreceived\u001b[39m\u001b[2m).\u001b[22mtoBe\u001b[2m(\u001b[22m\u001b[32mexpected\u001b[39m\u001b[2m) // Object.is equality\u001b[22m\n\n    Expected: \u001b[32m400\u001b[39m\n    Received: \u001b[31m201\u001b[39m\n\u001b[2m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 41 |\u001b[39m           \u001b[33m.\u001b[39mpost(\u001b[32m'/corrals'\u001b[39m)\u001b[22m\n\u001b[2m     \u001b[90m 42 |\u001b[39m           \u001b[33m.\u001b[39msend({ name\u001b[33m:\u001b[39m \u001b[32m'Loro'\u001b[39m })\u001b[33m;\u001b[39m\u001b[22m\n\u001b[2m    \u001b[31m\u001b[1m>\u001b[22m\u001b[2m\u001b[39m\u001b[90m 43 |\u001b[39m         expect(response\u001b[33m.\u001b[39mstatus)\u001b[33m.\u001b[39mtoBe(\u001b[35m400\u001b[39m)\u001b[33m;\u001b[39m\u001b[22m\n\u001b[2m     \u001b[90m    |\u001b[39m                                 \u001b[31m\u001b[1m^\u001b[22m\u001b[2m\u001b[39m\u001b[22m\n\u001b[2m     \u001b[90m 44 |\u001b[39m         expect(response\u001b[33m.\u001b[39mbody)\u001b[33m.\u001b[39mtoEqual(expect\u001b[33m.\u001b[39mobjectContaining({\u001b[22m\n\u001b[2m     \u001b[90m 45 |\u001b[39m           error\u001b[33m:\u001b[39m expect\u001b[33m.\u001b[39many(\u001b[33mString\u001b[39m)\u001b[22m\n\u001b[2m     \u001b[90m 46 |\u001b[39m         }))\u001b[33m;\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat Object.toBe (\u001b[22m\u001b[2m\u001b[0m\u001b[36msrc/test/unit/corral/createCorral.spec.js\u001b[39m\u001b[0m\u001b[2m:43:33)\u001b[22m\u001b[2m\u001b[22m\n","testResults":[{"ancestorTitles":["CREATE (post) /corrals"],"duration":117,"failureMessages":[],"fullName":"CREATE (post) /corrals Debería crear un nuevo corral correctamente","status":"passed","title":"Debería crear un nuevo corral correctamente"},{"ancestorTitles":["CREATE (post) /corrals"],"duration":25,"failureMessages":["Error: \u001b[2mexpect(\u001b[22m\u001b[31mreceived\u001b[39m\u001b[2m).\u001b[22mtoBe\u001b[2m(\u001b[22m\u001b[32mexpected\u001b[39m\u001b[2m) // Object.is equality\u001b[22m\n\nExpected: \u001b[32m400\u001b[39m\nReceived: \u001b[31m201\u001b[39m\n    at Object.toBe (C:\\Users\\DESARROLLADOR-PC3\\Documents\\Camilo\\proyectOnCredit\\back\\src\\test\\unit\\corral\\createCorral.spec.js:43:33)\n    at processTicksAndRejections (node:internal/process/task_queues:96:5)"],"fullName":"CREATE (post) /corrals Debería retornar un error si los datos son incompletos","status":"failed","title":"Debería retornar un error si los datos son incompletos"},{"ancestorTitles":["CREATE (post) /corrals"],"duration":21,"failureMessages":[],"fullName":"CREATE (post) /corrals No debería permitir crear un corral con un ID duplicado","status":"passed","title":"No debería permitir crear un corral con un ID duplicado"},{"ancestorTitles":["CREATE (post) /corrals"],"duration":12,"failureMessages":[],"fullName":"CREATE (post) /corrals Debería manejar errores correctamente","status":"passed","title":"Debería manejar errores correctamente"},{"ancestorTitles":["CREATE (post) /corrals"],"duration":12,"failureMessages":[],"fullName":"CREATE (post) /corrals Debería retornar un error si el campo dangerous no es un booleano","status":"passed","title":"Debería retornar un error si el campo dangerous no es un booleano"},{"ancestorTitles":["CREATE (post) /corrals"],"duration":16,"failureMessages":[],"fullName":"CREATE (post) /corrals Valida si la respuesta se produce dentro de un tiempo aceptable (300)","status":"passed","title":"Valida si la respuesta se produce dentro de un tiempo aceptable (300)"}]},{"numFailingTests":0,"numPassingTests":4,"numPendingTests":0,"numTodoTests":0,"perfStats":{"end":1716790170316,"runtime":356,"slow":false,"start":1716790169960},"testFilePath":"C:\\Users\\DESARROLLADOR-PC3\\Documents\\Camilo\\proyectOnCredit\\back\\src\\test\\unit\\corral\\getAverageAgeInCorral.spec.js","failureMessage":null,"testResults":[{"ancestorTitles":["getAverageAgeInCorral (GET) / corrals"],"duration":5,"failureMessages":[],"fullName":"getAverageAgeInCorral (GET) / corrals Debería retornar \"Corral no encontrado\" si el corral no existe","status":"passed","title":"Debería retornar \"Corral no encontrado\" si el corral no existe"},{"ancestorTitles":["getAverageAgeInCorral (GET) / corrals"],"duration":2,"failureMessages":[],"fullName":"getAverageAgeInCorral (GET) / corrals Debería retornar \"No hay animales en este corral\" si no hay animales en el corral","status":"passed","title":"Debería retornar \"No hay animales en este corral\" si no hay animales en el corral"},{"ancestorTitles":["getAverageAgeInCorral (GET) / corrals"],"duration":1,"failureMessages":[],"fullName":"getAverageAgeInCorral (GET) / corrals Debería retornar el promedio de edad de los animales en el corral ( Promedio de (5 + 7 + 3) / 3 = 5)","status":"passed","title":"Debería retornar el promedio de edad de los animales en el corral ( Promedio de (5 + 7 + 3) / 3 = 5)"},{"ancestorTitles":["getAverageAgeInCorral (GET) / corrals"],"duration":16,"failureMessages":[],"fullName":"getAverageAgeInCorral (GET) / corrals Debería retornar \"Error interno del servidor\" si ocurre un error","status":"passed","title":"Debería retornar \"Error interno del servidor\" si ocurre un error"}]},{"numFailingTests":0,"numPassingTests":5,"numPendingTests":0,"numTodoTests":0,"perfStats":{"end":1716790170344,"runtime":1219,"slow":false,"start":1716790169125},"testFilePath":"C:\\Users\\DESARROLLADOR-PC3\\Documents\\Camilo\\proyectOnCredit\\back\\src\\test\\unit\\animal\\getAnimal.spec.js","failureMessage":null,"testResults":[{"ancestorTitles":["GET /animals"],"duration":40,"failureMessages":[],"fullName":"GET /animals Debería devolver todos los animales","status":"passed","title":"Debería devolver todos los animales"},{"ancestorTitles":["GET /animals"],"duration":6,"failureMessages":[],"fullName":"GET /animals Debería manejar errores correctamente","status":"passed","title":"Debería manejar errores correctamente"},{"ancestorTitles":["GET /animals"],"duration":7,"failureMessages":[],"fullName":"GET /animals La respuesta devuelve el formato JSON esperado, valida que sea tipo de dato definido en el modelo","status":"passed","title":"La respuesta devuelve el formato JSON esperado, valida que sea tipo de dato definido en el modelo"},{"ancestorTitles":["GET /animals"],"duration":3,"failureMessages":[],"fullName":"GET /animals Debería retornar como respuesta el código de estado HTTP correcto","status":"passed","title":"Debería retornar como respuesta el código de estado HTTP correcto"},{"ancestorTitles":["GET /animals"],"duration":7,"failureMessages":[],"fullName":"GET /animals Valida si la rrespuesta se produce dentro de un tiempo aceptable (300ms)","status":"passed","title":"Valida si la rrespuesta se produce dentro de un tiempo aceptable (300ms)"}]}],"config":{"bail":0,"changedFilesWithAncestor":false,"ci":false,"collectCoverage":false,"collectCoverageFrom":[],"coverageDirectory":"C:\\Users\\DESARROLLADOR-PC3\\Documents\\Camilo\\proyectOnCredit\\back\\coverage","coverageProvider":"babel","coverageReporters":["json","text","lcov","clover"],"detectLeaks":false,"detectOpenHandles":false,"errorOnDeprecated":false,"expand":false,"findRelatedTests":false,"forceExit":false,"json":false,"lastCommit":false,"listTests":false,"logHeapUsage":false,"maxConcurrency":5,"maxWorkers":7,"noStackTrace":false,"nonFlagArgs":[],"notify":false,"notifyMode":"failure-change","onlyChanged":false,"onlyFailures":false,"openHandlesTimeout":1000,"passWithNoTests":false,"projects":[],"reporters":[["default",{}],["C:\\Users\\DESARROLLADOR-PC3\\Documents\\Camilo\\proyectOnCredit\\back\\node_modules\\jest-html-reporters\\index.js",{"publicPath":"./reports","filename":"report.html","expand":true}]],"rootDir":"C:\\Users\\DESARROLLADOR-PC3\\Documents\\Camilo\\proyectOnCredit\\back","runTestsByPath":false,"seed":-577156881,"skipFilter":false,"snapshotFormat":{"escapeString":false,"printBasicPrototype":false},"testFailureExitCode":1,"testPathPattern":"","testSequencer":"C:\\Users\\DESARROLLADOR-PC3\\Documents\\Camilo\\proyectOnCredit\\back\\node_modules\\@jest\\test-sequencer\\build\\index.js","updateSnapshot":"new","useStderr":false,"watch":false,"watchAll":false,"watchman":true,"workerThreads":false},"endTime":1716790170397,"_reporterOptions":{"publicPath":"./reports","filename":"report.html","expand":true,"pageTitle":"","hideIcon":false,"testCommand":"","openReport":false,"failureMessageOnly":0,"enableMergeData":false,"dataMergeLevel":1,"inlineSource":false,"urlForTestFiles":"","darkTheme":false,"includeConsoleLog":false,"stripSkippedTest":false},"logInfoMapping":{},"attachInfos":{}})