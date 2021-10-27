const elementZobrazit = document.querySelector('#zobrazit')
elementZobrazit.addEventListener('click', clickHandler)

function clickHandler() {
    const elementLng = document.querySelector('#lng')
    const elementLat = document.querySelector('#lat')
    nacistVychodZapad(elementLat.value, elementLng.value)
}

function nacistVychodZapad(lat, lng) {
    console.log('Zjišťuji data pro souřadnice:', lat, lng)
    const url = `https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}&formatted=0`
    fetch(url)
        .then(resp => resp.json())
        .then(json => dataNactena(json))       
}

function dataNactena(data) {
    console.log(data)
    const elementVychod = document.querySelector('#vychod')
    elementVychod.textContent = dayjs(data.results.sunrise).format("H:mm")
    const elementZapad = document.querySelector('#zapad')
    elementZapad.textContent = dayjs(data.results.sunset).format("H:mm")
}