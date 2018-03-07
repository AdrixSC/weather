//manipulando la data de darksky de la que obtuvimos respuesta
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

//funcion para pintar imagen que obtuvimos de la api
const paintImage = (image) => {
    let containerImage = document.getElementById("image");
    containerImage.setAttribute = ("src", imageUnSplash);
}

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

//peticion para api unsplash
fetch('https://source.unsplash.com/1600x900/?day').then(function(response){
    //console.log(response);
    let imageUnSplash = response.url;
    console.log(response.url);
    return imageUnSplash;
}).then(function paintImage(imageUnSplash){
    //paintImage(imageUnSplash)
    console.log("si entra")
}).catch(function(){
    console.log("no responde")
})

//peticion para api darksky
let proxy = 'https://cors-anywhere.herokuapp.com/'; //obteniendo el proxy
let urlDs = "https://api.darksky.net/forecast/0ba973c94674e3dd8956275146060534/37.8267,-122.4233"; //url de la api

$.ajax({
    url: proxy + urlDs,
}).done(handleResponse).fail(handleFailure);
