#!/usr/bin/node
const request = require('request');

const args = process.argv;
request(args[2], (error, response) => {
  if (error) {
    console.log(error);
  } else {
    const data = JSON.parse(response.body);
    const users = {};
    const ListUser = [];
    for (const i in data) {
      if (!(data[i].userId in ListUser)) {
        ListUser.push(data[i].userId);
      }
    }
    for (const userID in ListUser) {
      let taskComplete = 0;
      for (const x in data) {
        if (data[x].userId === ListUser[userID]) {
          if (data[x].completed) {
            taskComplete += 1;
          }
        }
      }
      if (taskComplete !== 0) {
        users[ListUser[userID]] = taskComplete;
      }
    }
    console.log(users);
  }
});
