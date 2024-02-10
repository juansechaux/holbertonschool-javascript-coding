// Importar Express
const express = require('express');

// Crear una instancia de Express
const app = express();

// Definir la ruta para el endpoint '/'
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Configurar el servidor para que escuche en el puerto 1245
const server = app.listen(1245, () => {
  console.log('Server listening on port 1245');
});

// Exportar el servidor
module.exports = server;
