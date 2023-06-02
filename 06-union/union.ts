// a combination more types of data that you can include into a variable or an array
// situation 1
let score: number | string = 33

score = 44
score = '55'

// situation 2
type User = {
    id: number,
    name: string
}

type Admin = {
    id: number,
    username: string
}

let ct: User | Admin = { id: 1, name: "caothang" }

ct = { id: 2, username: "admin" }

// situation 3
function getDbId(id: number | string) {
    //making some API calls
    console.log(`DB id is: ${id}`)
}

getDbId(3)
getDbId("3")

// situation with array
const data: number[] = [1, 2, 3]
const data2: string[] = ["1", "2", "3"]
const data3: (number | string)[] = [1, "2", 3]

export { }



