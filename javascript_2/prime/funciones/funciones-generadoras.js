// funciones generadoras

function* generate() {
    let id = 0
    while (true) {
        id++
        yield id
        if (id > 10) {
            return
        }
    }
}

const gen = generate()

console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)

console.log(5=="5")