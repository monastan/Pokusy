/* let cislo = 1
while (cislo <= 100) {
    console.log(cislo)
    cislo += 1
} */

let cisloNaKostce = 0
let pocetHodu = 0

while (cisloNaKostce !== 6 && pocetHodu++ < 10) {
    cisloNaKostce = Math.floor(Math.random() * 6) + 1
    console.log("Hodila jsi číslo: " + cisloNaKostce)
    if (pocetHodu === 5 && cisloNaKostce !== 6){
        console.log("Vydrž, Prťka, vydrž!")
    }
}
console.log("Hurá, můžeš si nasadit figurku!")