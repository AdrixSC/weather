let proxy = 'https://cors-anywhere.herokuapp.com/';
let urlDs = "https://api.darksky.net/forecast/0ba973c94674e3dd8956275146060534/37.8267,-122.4233";

const handleResponse = (data) => {
    console.log(data)
}
const handleFailure = () => {
    console.log("volver a intentar")
};

$.ajax({
    url: proxy + urlDs,
}).done(handleResponse).fail(handleFailure)

const imageFlickr = () => {
    let urlFlickr = "https: //api.flickr.com/services/rest/?method=flickr.test.echo&name=value";

    const handleResponse = (data) => {
        console.log(data)
    }
    const handleFailure = () => {
        console.log("volver a intentar")
    };
    $.ajax({
        url: proxy + urlFlickr,
    }).done(handleResponse).fail(handleFailure)


};

imageFlickr();