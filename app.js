var btn = document.getElementById('boton')

btn.addEventListener('click', function(e) {
    e.preventDefault()
    callAPI()
})

function callAPI() {
    var form = document.getElementById('form')
    var formData = new FormData(form)
    var data = {}
    for(var key of formData.keys()) {
        data[key] = formData.get(key)
    }

    var request = ''
    var latLot = `${data.lat},${data.lon}`
    console.log(latLot);
    switch(data.archivo) {
        case '1':
            request = `http://api.weatherapi.com/v1/current.json?key=d655185fb8434fcebcb160306232903&q=${(data.city != '' ? data.city : latLot)}&dt=${data.date}`
            break
        case '2':
            request = `http://api.weatherapi.com/v1/forecast.json?key=d655185fb8434fcebcb160306232903&q=${(data.city != '' ? data.city : latLot)}&dt=${data.date}`
            break
        case '3':
            request = `http://api.weatherapi.com/v1/search.json?key=d655185fb8434fcebcb160306232903&q=${(data.city != '' ? data.city : latLot)}&dt=${data.date}`
            break
        case '4':
            request = `http://api.weatherapi.com/v1/history.json?key=d655185fb8434fcebcb160306232903&q=${(data.city != '' ? data.city : latLot)}&dt=${data.date}`
            break
        case '5':
            request = `http://api.weatherapi.com/v1/marine.json?key=d655185fb8434fcebcb160306232903&q=${(data.city != '' ? data.city : latLot)}&dt=${data.date}`
            break
        case '6':
            request = `http://api.weatherapi.com/v1/future.json?key=d655185fb8434fcebcb160306232903&q=${(data.city != '' ? data.city : latLot)}&dt=${data.date}`
            break
        case '7':
            request = `http://api.weatherapi.com/v1/timezone.json?key=d655185fb8434fcebcb160306232903&q=${(data.city != '' ? data.city : latLot)}&dt=${data.date}`
            break
        case '8':
            request = `http://api.weatherapi.com/v1/sports.json?key=d655185fb8434fcebcb160306232903&q=${(data.city != '' ? data.city : latLot)}&dt=${data.date}`
            break
        case '9':
            request = `http://api.weatherapi.com/v1/astronomy.json?key=d655185fb8434fcebcb160306232903&q=${(data.city != '' ? data.city : latLot)}&dt=${data.date}`
            break
        case '10':
            request = `http://api.weatherapi.com/v1/ip.json?key=d655185fb8434fcebcb160306232903&q=${(data.city != '' ? data.city : latLot)}&dt=${data.date}`
            break
    }

    console.log(request);
    fetch(request)
    .then(function(response) {
        return response.json()
    })
    .then(function(data) {
        saveResults(JSON.stringify(data))
    })
}

function saveResults(content) {
    var blob = new Blob([content],
        { type: "text/plain;charset=utf-8" });
    saveAs(blob, "Resultados.txt");
}