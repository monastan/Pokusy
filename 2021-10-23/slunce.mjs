/* import fetch from "node-fetch"

function poStazeniDat() {
    console.log("Data stažena")
}

const fetchResult = fetch("https://api.sunrise-sunset.org/json?lat=50.0833250&lng=14.4252008")
fetchResult.then(poStazeniDat)

import fetch from "node-fetch" */

/* function poStazeniDat() {
    console.log("Data stažena")
}

const vysledekStazeni = fetch("https://api.sunrise-sunset.org/json?lat=50.0833250&lng=14.4252008")
vysledekStazeni.then(poStazeniDat) */

/* import fetch from "node-fetch"

function poStazeniDat(vysledekVolani) {
    console.log("Data stažena: ", vysledekVolani.status, vysledekVolani.statusText)
}

const vysledekStazeni = fetch("https://api.sunrise-sunset.org/json?lat=50.0833250&lng=14.4252008")
vysledekStazeni.then(poStazeniDat) */

/* import fetch from 'node-fetch'

const url = 'https://api.sunrise-sunset.org/json?lat=50.0833250&lng=14.4252008'

function poStazeniDat(vysledekVolani) {
    console.log("Data stažena: ", vysledekVolani.status, vysledekVolani.statusText)
    return vysledekVolani.text()
}

function poZpracovaniDat(vychodyZapadySlunce) {
    console.log("Hurá, data jsou zde: ", vychodyZapadySlunce)
}

fetch(url)
    .then(poStazeniDat)
    .then(poZpracovaniDat) */

/* import fetch from 'node-fetch'

const url = 'https://api.sunrise-sunset.org/json?lat=50.0833250&lng=14.4252008'

function poStazeniDat(vysledekVolani) {
    console.log("Data stažena: ", vysledekVolani.status, vysledekVolani.statusText)
    return vysledekVolani.text()
}

function poZpracovaniDat(vychodyZapadySlunce) {
    console.log("Hurá, data jsou zde: ", vychodyZapadySlunce)
}

const vysledekFetch = fetch(url)

vysledekFetch.then(poStazeniDat)
    .then(poZpracovaniDat) */

import fetch from 'node-fetch'

const url = 'https://api.sunrise-sunset.org/json?lat=50.0833250&lng=14.4252008'

function zpracujData(data) {
    console.log("Hurá, moje data: ", data)
    console.log("Východ Slunce v Praze:", data.results.sunrise)
    console.log("Západ Slunce v Praze:", data.results.sunset)
}

fetch(url)
    .then(resp => resp.json())
    .then(json => zpracujData(json))