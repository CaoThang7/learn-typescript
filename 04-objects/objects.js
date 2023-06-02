"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// the basic 
var User = {
    name: 'caothang',
    email: 'caothang@gmail.com',
    isAvtive: true
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
var newUser = { name: 'caothang', isPaid: false };
createUser(newUser);
function createCourse() {
    return { name: 'react-native', price: 7777 };
}
function createAccount(user) {
    return { name: '', email: '', isAvtive: true };
}
createAccount({ name: '', email: '', isAvtive: true });
var myUser = {
    _id: '123',
    name: 'caothang',
    email: 'ct@gmail.com',
    isAvtive: false,
};
myUser.email = 'caothang@gmail.com';
