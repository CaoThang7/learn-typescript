"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
}
function getUpper(val) {
    return val.toUpperCase();
}
function signUpUser(name, email, isPaid) {
}
var loginUser = function (email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
var getHello = function (s) {
    return "";
};
var heros = ["thor", "spiderman", "ironman"];
heros.map(function (hero) {
    return "hero is ".concat(hero);
});
function consoleError(errmsg) {
    console.log(errmsg);
}
function handleError(errmsg) {
    throw new Error(errmsg);
}
addTwo(5);
getUpper("lycaothang");
signUpUser("caothang", "caothang@gmail.com", false);
loginUser('caothang@gmail.com');
getHello("hello");
