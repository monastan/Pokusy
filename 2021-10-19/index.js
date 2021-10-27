/* for (let index = 0; index < 10; index++) {
    console.log(index)
}

let index = 0
for (; index < 10; index++) {
    console.log(index)
} */

let mojeOblibenaCisla = [
    42,
    423,
    39,
    42,
    123,
]

console.log("42 je zde: " + mojeOblibenaCisla.indexOf(39))
console.log("999 je zde: " + mojeOblibenaCisla.indexOf(999))
console.log("827 v poli je: " +
    (mojeOblibenaCisla.indexOf(827) >= 0)
)

let indexCislaKOdstraneni = mojeOblibenaCisla.indexOf(39)
if (indexCislaKOdstraneni >= 0) {
    mojeOblibenaCisla.splice(indexCislaKOdstraneni, 1)
} else {
    console.log("Číslo 39 nikdy tvé oblíbené číslo nebylo.")
}