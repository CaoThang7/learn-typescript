"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// a combination more types of data that you can include into a variable or an array
// situation 1
var score = 33;
score = 44;
score = '55';
var ct = { id: 1, name: "caothang" };
ct = { id: 2, username: "admin" };
// situation 3
function getDbId(id) {
    //making some API calls
    console.log("DB id is: ".concat(id));
}
getDbId(3);
getDbId("3");
// situation with array
var data = [1, 2, 3];
var data2 = ["1", "2", "3"];
var data3 = [1, "2", 3];
