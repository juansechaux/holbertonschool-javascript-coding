const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        console.log('Number of students:', data.trim().split('\n').length - 1);
        const setFields = new Set();
        const arrayLines = data.split('\n');
        for (const i in arrayLines) {
          if (Number(i) !== 0) {
            const line = arrayLines[i].split(',');
            setFields.add(line[3]);
          }
        }
        for (const field of setFields) {
          const studInField = [];
          for (const line of arrayLines) {
            const lineSplid = line.split(',');
            if (field === lineSplid[3]) {
              studInField.push(lineSplid[0]);
            }
          }
          if (studInField.length !== 0) {
            console.log(`Number of students in ${field}: ${studInField.length}. List: ${studInField.join(', ')}`);
          }
        }
        resolve();
      }
    });
  });
}

module.exports = countStudents;
