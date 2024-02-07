# Node.js Development Basics

This guide covers the basics of Node.js development, including running JavaScript, utilizing Node.js modules, reading files, accessing command line arguments and the environment, creating HTTP servers, using ES6 with Node.js via Babel-node, and enhancing development workflow with Nodemon.

## Running JavaScript using Node.js

Node.js allows you to execute JavaScript code outside of a web browser. You can run JavaScript files or execute JavaScript commands directly in the Node.js environment using the `node` command followed by the file name or script.

```bash
node script.js
```
## Using Node.js Modules

Node.js modules are reusable pieces of code that encapsulate related functionality. You can import modules using the `require()` function and use their exported functionality within your application.

```javascript
const fs = require('fs');
```

## Reading Files with Node.js

Node.js provides built-in modules like `fs` (File System) for reading and writing files. You can use specific methods from these modules to read files synchronously or asynchronously.

```javascript
const fs = require('fs');

// Asynchronous file read
fs.readFile('file.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});

// Synchronous file read
const data = fs.readFileSync('file.txt', 'utf8');
console.log(data);
```

## Accessing Command Line Arguments and Environment Variables
Node.js provides the `process` global object, which allows access to command line arguments and environment variables.

```javascript
// Command line arguments
const args = process.argv.slice(2);

// Environment variables
const envVar = process.env.NODE_ENV;
```

## Creating a Small HTTP Server using Node.js
Node.js allows you to create HTTP servers easily using the built-in `http` module. You can create a basic HTTP server that listens for incoming requests and responds accordingly.

```javascript
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World\n');
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
```

## Creating a Small HTTP Server using Express.js

Express.js is a minimalist web framework for Node.js that simplifies the process of building web applications and APIs. You can quickly create HTTP servers with advanced routing using Express.js.

```javascript
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
```

## Creating Advanced Routes with Express.js

Express.js allows you to define advanced routes for handling various HTTP requests such as GET, POST, PUT, DELETE, etc.

```javascript
app.post('/users', (req, res) => {
  // Handle POST request to create a new user
});

app.put('/users/:id', (req, res) => {
  // Handle PUT request to update an existing user
});

app.delete('/users/:id', (req, res) => {
  // Handle DELETE request to delete an existing user
});
```

## Using ES6 with Node.js using Babel-node

You can use ES6 features like arrow functions, template literals, destructuring, and more in your Node.js applications with Babel. Babel allows you to transpile modern JavaScript code into a backwards-compatible version that can run in older environments.

```bash
npm install @babel/node @babel/preset-env --save-dev
```
```json
// .babelrc
{
  "presets": ["@babel/preset-env"]
}
```
```bash
babel-node script.js
```

## Using Nodemon to Develop Faster

Nodemon is a tool that automatically restarts the Node.js application when file changes are detected. It enhances the development workflow by eliminating the need to manually stop and restart the server after each code modification.


```bash
npm install nodemon --save-dev
```
```json
// package.json
{
  "scripts": {
    "start": "nodemon script.js"
  }
}
```
```bash
npm start
```

## Conclusion

Node.js provides a powerful platform for building server-side applications and APIs with JavaScript. By leveraging its features and tools like Express.js, Babel, and Nodemon, you can streamline the development process and create robust and efficient applications.
