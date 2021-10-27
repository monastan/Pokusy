const jmena = ["Lucie", "Petra", "Dana", "Marie"]

/* for (let i = 0; i < jmena.length; i++) {
    const jmeno = jmena[i];
    console.log(jmeno)
}  */

jmena
    .filter(jmeno => jmeno.length === 5) //["Lucie", "Petra", "Marie"]
    // .filter(jmeno => jmeno.startsWith("L"))
    .map(jmeno => jmeno.substring(0, 3)) //["Luc", "Pet", "Mar"]
    .forEach(jmeno => console.log(jmeno)) 