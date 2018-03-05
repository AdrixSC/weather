let proxy = 'https://cors-anywhere.herokuapp.com/';
let urlDs = "https://api.darksky.net/forecast/0ba973c94674e3dd8956275146060534/37.8267,-122.4233";

const handleResponse = (data) => {
    console.log(data)
    let wind = data.currently.windGust;
    console.log(wind);
    let humidity = data.currently.humidity
    console.log(humidity);
    let uvIndex = data.currently.uvIndex;
    console.log(uvIndex);
    let pressure = data.currently.pressure
    console.log(pressure);

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


// const dataWeather = (data) => {
//     //let humidity = data.currently.humidity
//     console.log(data.currently.humidity, "si entra")

//     handleResponse(data)
// }

// dataWeather(data);

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