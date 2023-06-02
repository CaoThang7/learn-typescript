/*Tuple in Typescript allows us to represent the information of an Array with 
known data types, we will put the desired data types in the indexes of the array 
and when using it we will have to manipulate Order of data types in array. */
let tUser: [string, number, boolean]

tUser = ["hc", 131, true]

let rgb: [number, number, number] = [255, 123, 112]

type User = [number, string]

const newUser: User = [112, "example@google.com"]

newUser[1] = "hc.com"

export { }
