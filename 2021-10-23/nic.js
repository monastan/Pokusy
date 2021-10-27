/* let osoba = {}
//let osoba = {jmeno: 'Františka'}

if (osoba && osoba.jmeno != null) {
    console.log('Jméno existuje, možná je prázdný string.')
}

if (osoba && !osoba.jmeno) {
    if (alert) {
        alert('Je nutné zadat jméno osoby!')
    } else if (console && console.log) {
        console.log('Je nutné zadat jméno osoby!')
    } else {
        //teď už nevím, jak to mám říct uživateli
    }
    
} */

let osoba = {}
//let osoba = {jmeno: 'Františka'}

if (osoba && osoba.jmeno != null) {
    console.log('Jméno existuje, možná je prázdný string.')
}

if (osoba && !osoba.jmeno) {
    /*
    if (typeof window !== 'undefined' && window.alert) {
        alert('Je nutné zadat jméno osoby!')
    } else
    */
    if (console && console.log) {
        console.log('Je nutné zadat jméno osoby!')
    } else {
        //teď už nevím, jak to mám říct uživateli
    }
    
}