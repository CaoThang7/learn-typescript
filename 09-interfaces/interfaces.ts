interface User {
    readonly dbId: number
    email: string,
    userId: number,
    googleId?: string
    // startTrail: () => string
    startTrail(): string
    getCoupon(couponname: string, value: number): number
}

interface User {
    githubToken: string
}

interface Admin extends User {
    role: "admin" | "ta" | "learner"
}

const ct: Admin = {
    dbId: 22, email: "caothang@gmail.com", userId: 2211,
    role: "admin",
    githubToken: "github",
    startTrail: () => {
        return "trail started"
    },
    getCoupon: (name: "caothang", off: 10) => {
        return 10
    }
}
ct.email = "caothang@gmail.com"

export { }