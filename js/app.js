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
    dataWeek.forEach(function(day){
        //console.log(day);
        let icon = day.icon;
        console.log(icon);
        let minHeigh = day.temperatureMin;
        console.log(minHeigh);
        let maxHeigh = day.temperatureMax;
        console.log(maxHeigh);
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

const predictionsOfTheWeek = () => {
let sectionLocation = document.getElementsByClassName("show");
let sectionPredictions = document.getElementsByClassName("hide");
console.log(sectionLocation)

let arraySectionLocation = Array.from(sectionLocation);
console.log(arraySectionLocation)
arraySectionLocation.forEach(function(index){
    let remove = index.classList.remove("show")
    console.log(remove)
})

}

var btnPrediction = document.getElementById("predictions");
btnPrediction.addEventListener("click", predictionsOfTheWeek);


//peticion para api unsplash
fetch('https://source.unsplash.com/1600x900/?day').then(function(response){
    //console.log(response);
    let imageUnSplash = response.url;
    //console.log(response.url);
    return imageUnSplash;
}).then(function paintImage(imageUnSplash){
    //paintImage(imageUnSplash)
    let containerImage = document.getElementById("image");
    containerImage.src = imageUnSplash;
    //console.log("si entra")
}).catch(function(){
    console.log("no responde la api")
})

//peticion para api darksky
let proxy = 'https://cors-anywhere.herokuapp.com/'; //obteniendo el proxy
let urlDs = "https://api.darksky.net/forecast/0ba973c94674e3dd8956275146060534/37.8267,-122.4233"; //url de la api

$.ajax({
    url: proxy + urlDs,
}).done(handleResponse).fail(handleFailure);
