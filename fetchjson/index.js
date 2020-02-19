"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var url = 'http://jsonplaceholder.typicode.com/todos/1';
axios_1["default"].get(url).then(function (response) {
    var todo = response.data;
    console.log("\n    Todo has an ID: " + todo.id + "\n    Has a title of: " + todo.title + "\n    Status is: " + todo.completed + "\n  ");
});
