let osoba = {
    jmeno: 'Jana',
    prijmeni: 'Novotná',
    vek: 20,
    'cele jmeno': 'Jana Novotná'
}

osoba.jmeno = 'Petra'
osoba.rodnePrimeni = 'Červená'

let promenna = 'jmeno'

console.log(osoba.jmeno)
console.log(osoba['jmeno'])
console.log(osoba['jme' + 'no'])
//console.log(osoba.cele jmeno) x nefunguje
console.log(osoba['cee jmeno'])
console.log(osoba[promenna])

console.log(osoba)