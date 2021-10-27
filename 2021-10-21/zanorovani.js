/*let osoby = [
    {
        jmeno: "Nataša",
        prijmeni: "Zelená",
        vek: 23,
        oblibenaJidla: ['zelný salát', 'brokolicová polévka']
    }, {
        jmeno: "Renata",
        prijmeni: "Volfová",
        vek: 19,
        oblibenaJidla: ['řízek', 'svíčková']
    }, {
        jmeno: "Božena",
        prijmeni: "Němcová",
        vek: 37,
        oblibenaJidla: []
    },
]

for (let i = 0; i < osoby.length; i++) {
    console.log('Oblíbená jídla osoby ' + osoby[i].prijmeni + ':');
    for (let j = 0; j < osoby[i].oblibenaJidla.length; j++)  {
        let oblibeneJidlo = osoby[i].oblibenaJidla[j]
        console.log('- ' + oblibeneJidlo)      
    }
}

Čitelnější verze toho stejnýho:*/
let osoby = [
    {
        jmeno: "Nataša",
        prijmeni: "Zelená",
        vek: 23,
        oblibenaJidla: ['zelný salát', 'brokolicová polévka']
    }, {
        jmeno: "Renata",
        prijmeni: "Volfová",
        vek: 19,
        oblibenaJidla: ['řízek', 'svíčková']
    }, {
        jmeno: "Božena",
        prijmeni: "Němcová",
        vek: 37,
        oblibenaJidla: []
    },
]

for (let i = 0; i < osoby.length; i++) {
    let osoba = osoby[i]
    console.log('Oblíbená jídla osoby ' + osoba.prijmeni + ':');
    for (let j = 0; j < osoba.oblibenaJidla.length; j++)  {
        let oblibeneJidlo = osoba.oblibenaJidla[j]
        console.log('- ' + oblibeneJidlo)      
    }
}