const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.trim().split('\n'); // trim() elimina las lineas en blanco al final
    console.log(`Number of students: ${lines.length - 1}`);
    const studentsByField = {};
    for (let i = 1; i < lines.length; i++) {
      const [firstname, lastname, age, field] = lines[i].split(',');

      if (!studentsByField[field]) {
        studentsByField[field] = [];
      }

      if (firstname && lastname && age && field) { // no tengo presente las lineas que no cumple con la estructura
        studentsByField[field].push(firstname);
      }
    }
    for (const field in studentsByField) {
      console.log(`Number of students in ${field}: ${studentsByField[field].length}. List: ${studentsByField[field].join(', ')}`);
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
