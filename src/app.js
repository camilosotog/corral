require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const { sequelize } = require('./models');
const animalRoutes = require('./routes/animalRoute');
const corralRoutes = require('./routes/corralRoute');
const animalrestrictionRoute = require('./routes/animalrestrictionRoute');
const cors = require('cors');

const app = express();
app.use(cors());
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use('/animals', animalRoutes);
app.use('/corrals', corralRoutes);
app.use('/animalrestrictions', animalrestrictionRoute);

sequelize.authenticate().then(() => {
  console.log('Connection has been established successfully.');
}).catch(err => {
  console.error('Unable to connect to the database:', err);
});

// Sincronizar los modelos con la base de datos
sequelize.sync({ force: false }).then(() => {
  console.log('Database & tables created!');
  // Iniciar el servidor
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}).catch((error) => {
  console.error('Unable to sync database:', error);
});
