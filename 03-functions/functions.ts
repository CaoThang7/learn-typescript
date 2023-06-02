function addTwo(num: number) {
    return num + 2
}

function getUpper(val: string) {
    return val.toUpperCase()
}

function signUpUser(name: string, email: string, isPaid: boolean) {

}

let loginUser = (email: string, isPaid: boolean = false) => { }

const getHello = (s: string): string => {
    return ""
}

const heros = ["thor", "spiderman", "ironman"]

heros.map((hero): string => {
    return `hero is ${hero}`
})

function consoleError(errmsg: string): void {
    console.log(errmsg)
}

function handleError(errmsg: string): never {
    throw new Error(errmsg);
}

addTwo(5)
getUpper("lycaothang")
signUpUser("caothang", "caothang@gmail.com", false)
loginUser('caothang@gmail.com')
getHello("hello")

export { }