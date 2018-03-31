// Geolocalización automatica con html5
$(document).ready(function() {
    getLocation()
        //getPhoto()
});

// funcion de localizacion
function getLocation() {
    if (navigator.geolocation) {
        console.log(navigator.geolocation)
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
    console.log(latitude, longitude)
    handleResponse(data)
}

function showError() {
    alert('algo salio mal')
}

const handleResponse = (data) => {
    console.log(data)
    let longitud = data.longitude;
    let latitude = data.latitude;
    let wind = data.currently.windGust;
    let humidity = data.currently.humidity
    let uvIndex = data.currently.uvIndex;
    let pressure = data.currently.pressure;

    paintData(wind, humidity, uvIndex, pressure);
};

const handleFailure = () => {
    console.log("volver a intentar")
};

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

//peticion de API Darksky
let proxy = 'https://cors-anywhere.herokuapp.com/';
let urlDs = "https://api.darksky.net/forecast/0ba973c94674e3dd8956275146060534/37.8267,-122.4233";
$.ajax({
    url: proxy + urlDs,
}).done(handleResponse).fail(handleFailure);

//funcion para crear las peticiones
function getImages() {
    const flickRequest = new XMLHttpRequest(); //crear objeto
    articleRequest.open("GET", `https://api.flickr.com/services/rest/?method=flickr.test.echo&name=value${searchedForText}&api-key=062d5b87868abb3d685ba16acd774cf7`); //metodo open para iniciar request
    articleRequest.onload = addImages; // funcion ejecutada abajo en la que funciona la peticion
    articleRequest.onerror = handleError; //funcion ejecutada abajo para mostrar en consola mensaje de error
    articleRequest.send(); //envia peticion al servidor
};

function handleError() {
    console.log("se ha producido un error");
};

//funcion para agregar noticias al html dependiendo del filtro de busqueda

function addImages() {
    const data = JSON.parse(this.responseText); //objeto de la data
    console.log(data);
};