// Geolocalización automatica con html5
$(document).ready(function() {
    getLocation()
});

// funcion de localizacion html5
function getLocation() {
    if (navigator.geolocation) {
        // console.log(navigator)
        // depende de la respuesta del usuario
        navigator.geolocation.getCurrentPosition(showPosition, showError);

    } else {
        console.log('Geolocation is not suported by this browser')
    }
};

function showPosition(position) {
    console.log(position)
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    // console.log(longitude) 
    handleResponse(latitude, longitude)
}

function showError() {
    alert('algo salio mal')
}


//manipulando la data de darksky de la que obtuvimos respuesta
const handleResponse = (data) => {
    //console.log(data)
    let wind = data.currently.windGust;
    //console.log(wind);
    let humidity = data.currently.humidity
        //console.log(humidity);
    let uvIndex = data.currently.uvIndex;
    //console.log(uvIndex);
    let pressure = data.currently.pressure;
    //console.log(pressure);
    let dataWeek = data.daily.data;
    //console.log(dataWeek);
    dataWeek.map(function(day) {
        //console.log(day);
        let icon = day.icon;
        let minHeigh = day.temperatureMin;
        console.log(minHeigh);
        let maxHeigh = day.temperatureMax;
        console.log(maxHeigh);

        //(icon, minHeigh, maxHeigh)
        //traer elementos
        // let monday = document.getElementById("monday");
        // let tuesday = document.getElementById("tuesday");
        // let wednesday = document.getElementById("wednesday");
        // let thursday = document.getElementById("thursday");
        // let friday = document.getElementById("friday");
        // let saturday = document.getElementById("saturday");
        // let sunday = document.getElementById("sunday");

        // monday.innerHTML = "min:" + minHeigh[0] + " " + "max:" + maxHeigh[0]
        // tuesday.innerHTML = "min:" + minHeigh[1] + " " + "max:" + maxHeigh[1]

        paintPredictionsWeek(icon, minHeigh, maxHeigh)

    })

    paintData(wind, humidity, uvIndex, pressure);
};

const handleFailure = () => {
    console.log("volver a intentar")
};

//funcion para pintar los datos que obtuvimos de darksky
const paintData = (wind, humidity, uvIndex, pressure) => {
    //traer elementos
    let windElement = document.getElementById("data-wind");
    let humidityElement = document.getElementById("data-humidity");
    let uvIndexElement = document.getElementById("data-uv");
    let pressureElement = document.getElementById("data-pressure");

    //agregarles valores a los elementos
    windElement.innerHTML = wind;
    humidityElement.innerHTML = humidity;
    uvIndexElement.innerHTML = uvIndex;
    pressureElement.innerHTML = pressure;

};

let sectionLocation = document.getElementById("section-location");
let sectionPredictions = document.getElementById("section-predictions");

const predictionsOfTheWeek = (e) => {
    sectionLocation.classList.remove("show")
    sectionLocation.classList.add("hide")
    sectionPredictions.classList.remove("hide")
    sectionPredictions.classList.add("show")
}

var btnPrediction = document.getElementById("predictions");
btnPrediction.addEventListener("click", predictionsOfTheWeek);

const weather = (e) => {
    sectionLocation.classList.remove("hide")
    sectionLocation.classList.add("show")
    sectionPredictions.classList.remove("show")
    sectionPredictions.classList.add("hide")
}

var btnPrediction = document.getElementById("regresar");
btnPrediction.addEventListener("click", weather);

const paintPredictionsWeek = (icon, minHeigh, maxHeigh) => {
    //traer elementos
    let monday = document.getElementById("monday");
    let tuesday = document.getElementById("tuesday");
    let wednesday = document.getElementById("wednesday");
    let thursday = document.getElementById("thursday");
    let friday = document.getElementById("friday");
    let saturday = document.getElementById("saturday");
    let sunday = document.getElementById("sunday");

    monday.innerHTML = "min:" + minHeigh + " " + "max:" + maxHeigh
    tuesday.innerHTML = "min:" + minHeigh + " " + "max:" + maxHeigh

}


//peticion para api unsplash
fetch('https://source.unsplash.com/random').then(function(response1) {
    //console.log(response);
    let imageUnSplash = response1.url;
    //console.log(response.url);
    return imageUnSplash;
}).then(function paintImage(imageUnSplash) {
    paintImage(imageUnSplash)
    let containerImage = document.getElementById("image");
    containerImage.src = imageUnSplash;
    //console.log("si entra")
}).catch(function() {
    console.log("no responde la api")
})

//peticion para api darksky
let proxy = 'https://cors-anywhere.herokuapp.com/'; //obteniendo el proxy
let urlDs = "https://api.darksky.net/forecast/0ba973c94674e3dd8956275146060534/37.8267,-122.4233"; //url de la api

$.ajax({
    url: proxy + urlDs,
}).done(handleResponse).fail(handleFailure);