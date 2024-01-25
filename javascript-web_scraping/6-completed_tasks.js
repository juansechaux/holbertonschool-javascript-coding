#!/usr/bin/node
const request = require('request');

const args = process.argv;
request(args[2], (error, response) => {
  if (error) {
    console.log(error);
  } else {
    const data = JSON.parse(response.body);
    const users = {};
    for (let userID = 1; userID <= 10; userID++) {
      let taskComplete = 0;
      for (const x in data) {
        if (data[x].userId === userID) {
          if (data[x].completed) {
            taskComplete += 1;
          }
        }
      }
      users[userID] = taskComplete;
    }
    console.log(users);
  }
});
