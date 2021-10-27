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
    console.log('Oblíbená jídla osoby ' + osoby[i].prijmeni + ':');
    vypisOblibenychJidel(osoby[i])
}

console.log("Oblíbená jídla Nataši:")
vypisOblibenychJidel(osoby[0])

function vypisOblibenychJidel(person) {
    for (let j = 0; j < person.oblibenaJidla.length; j++)  {
        let oblibeneJidlo = person.oblibenaJidla[j]
        console.log('- ' + oblibeneJidlo)  
    } 
}
 