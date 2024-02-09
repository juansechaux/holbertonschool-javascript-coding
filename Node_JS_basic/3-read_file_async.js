const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        const lines = data.trim().split('\n'); // trim() elimina las lineas en blanco al final
        console.log(`Number of students: ${lines.length - 1}`);
        const studentsByField = {};
        for (let i = 1; i < lines.length; i += 1) {
          const [firstname, lastname, age, field] = lines[i].split(',');

          if (!studentsByField[field]) {
            studentsByField[field] = [];
          }
          // no tengo presente las lineas que no cumple con la estructura
          if (firstname && lastname && age && field) {
            studentsByField[field].push(firstname);
          }
        }
        // eslint-disable-next-line
        for (const field in studentsByField) {
          console.log(`Number of students in ${field}: ${studentsByField[field].length}. List: ${studentsByField[field].join(', ')}`);
        }
        resolve();
      }
    });
  });
}

module.exports = countStudents;
