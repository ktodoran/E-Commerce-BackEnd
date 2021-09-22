const express = require('express');
const routes = require('./routes');
// import sequelize connection
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

//Commenting this out to code sequelize models and turn on server
// sync sequelize models to the database, then turn on the server
// app.listen(PORT, () => {
//   console.log(`App listening on port ${PORT}!`);
// });

//Syncing Sequelize Models to the DB and turning on Server
sequelize.sync({ force:false }).then(() => {
  app.listen(PORT, () => console.log(`We're listening to Port ${PORT}!`));
});

