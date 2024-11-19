

const fun = val => {
    if (typeof val === "number") {
        return 2 * val
    }
    throw new Error("el valor debe ser de tipo numero")
}

// const doble=fun("ala")
let n = 8

try {

    console.log("todo bien")
    console.log(fun(n))

} catch (error) {
    console.error(error)
    console.log("Error")
}