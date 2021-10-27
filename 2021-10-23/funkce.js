/* function secti(a, b) {
    //let soucet = a + b
    //return soucet
    return a + b
}

let pocetJablek = secti(2, 3)

console.log(`Děti mají ${pocetJablek} jablek.`)
console.log("Děti mají " + pocetJablek + " jablek.") */

/* function deleni (a, b) {
    if (b === 0) {
        return "Dělení nulou, to nemyslíš vážně!"
    }
    console.log("Můžeme pokračovat v dělení, parametry jsou OK.")
    return a / b
}

console.log(deleni(8, 4))
console.log(deleni(8, 0)) */

function deleni(a, b) {
    if (b === 0) {
        return
    }
    console.log('Můžeme pokračovat v dělení, parametry jsou OK.')
    return a / b
}

let vysledekDeleni = deleni(8, 0)

if (vysledekDeleni !== undefined) {
    console.log(vysledekDeleni)
}

//console.log(deleni(8, 4))
console.log(deleni(8, 0))
