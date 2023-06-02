// the basic 
const User = {
    name: 'caothang',
    email: 'caothang@gmail.com',
    isAvtive: true
}

function createUser({ name: string, isPaid: boolean }) { }

let newUser = { name: 'caothang', isPaid: false }

createUser(newUser)

function createCourse(): { name: string, price: number } {
    return { name: 'react-native', price: 7777 }
}

// Type Aliases
type Account = {
    name: string,
    email: string,
    isAvtive: boolean
}

function createAccount(user: Account): Account {
    return { name: '', email: '', isAvtive: true }
}

createAccount({ name: '', email: '', isAvtive: true })

// example 3
type User = {
    readonly _id: string,
    name: string,
    email: string,
    isAvtive: boolean,
    credcardDetails?: number
}

let myUser: User = {
    _id: '123',
    name: 'caothang',
    email: 'ct@gmail.com',
    isAvtive: false,
}

myUser.email = 'caothang@gmail.com'

// example 4
type cardNumber = {
    cardnumber: string
}

type cardDate = {
    cardDate: string
}

type cardDetails = cardNumber & cardDate & {
    cvv: number
}

export { }