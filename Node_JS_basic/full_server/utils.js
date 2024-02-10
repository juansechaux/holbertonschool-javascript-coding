import fs from 'fs';

// eslint-disable-next-line
export function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        const studentsByField = {};
        const lines = data.trim().split('\n').slice(1);
        for (const line of lines) {
          const [, , , field] = line.split(',');
          if (field) {
            if (!studentsByField[field]) {
              studentsByField[field] = [];
            }
            studentsByField[field].push(line.split(',')[0]);
          }
        }
        resolve(studentsByField);
      }
    });
  });
}
