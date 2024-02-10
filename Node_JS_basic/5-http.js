const url = require('url');
const http = require('http');
const fs = require('fs');

const app = http.createServer((req, res) => {
  // eslint-disable-next-line
  const { pathname, searchParams } = url.parse(req.url, true);

  if (pathname === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (pathname === '/students') {
    const dbName = process.argv[2] || 'database.csv';
    // let dbName;
    // if (searchParams && searchParams.get('dbName')) {
    //   dbName = searchParams.get('dbName');
    // } else {
    //   dbName = 'database.csv';
    // }

    fs.readFile(dbName, 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Cannot load the database');
      } else {
        const lines = data.trim().split('\n');
        let response = `This is the list of our students\nNumber of students: ${lines.length - 1}\n`;
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
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(response);
      }
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Unknown path!');
  }
});

app.listen(1245, () => console.log('Server listening on port 1245'));

module.exports = app;
