const http = require('http');
const fs = require('fs');

const app = http.createServer((req, res) => {
  const { url } = req;

  if (url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!\n');
  } else if (url === '/students') {
    const dbPath = process.argv[2]; // Obtener la ruta del archivo de la base de datos del argumento de la línea de comandos
    if (!dbPath) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Database file path not provided');
      return;
    }
    countStudents(dbPath)
      .then(() => {
        fs.readFile(dbPath, 'utf8', (err, data) => {
          if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Internal Server Error');
          } else {
            const studentsData = data.trim().split('\n');
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end(studentsData.join('\n'));
          }
        });
      })
      .catch((error) => {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end(error.message);
      });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found\n');
  }
});

app.listen(1245);

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        const lines = data.trim().split('\n');
        console.log(`Number of students: ${lines.length - 1}`);
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
        for (const field in studentsByField) {
          console.log(`Number of students in ${field}: ${studentsByField[field].length}. List: ${studentsByField[field].join(', ')}`);
        }
        resolve();
      }
    });
  });
}
