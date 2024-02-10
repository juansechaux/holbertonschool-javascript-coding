const express = require('express');
const fs = require('fs');

const app = express();

// Ruta para el endpoint '/'
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Ruta para el endpoint '/students'
app.get('/students', (req, res) => {
  const dbName = req.query.dbName || 'database.csv'; // Obtener el nombre de la base de datos desde la consulta

  fs.readFile(dbName, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error reading student data');
      return;
    }

    const lines = data.trim().split('\n');
    let response = 'This is the list of our students\n';
    response += `Number of students: ${lines.length - 1}\n`;

    const studentsByField = {};
    for (let i = 1; i < lines.length; i += 1) {
      const [firstname, lastname, age, field] = lines[i].split(',');
      if (!studentsByField[field]) {
        studentsByField[field] = [];
      }
      if (firstname && lastname && age && field) {
        studentsByField[field].push(firstname);
      }
    }
    // eslint-disable-next-line
    for (const field in studentsByField) {
      response += `Number of students in ${field}: ${studentsByField[field].length}. List: ${studentsByField[field].join(', ')}\n`;
    }
    response = response.slice(0, -1);
    res.send(response);
  });
});

// Configurar el servidor para que escuche en el puerto 1245
const server = app.listen(1245, () => {
  console.log('Server listening on port 1245');
});

// Exportar el servidor
module.exports = server;
