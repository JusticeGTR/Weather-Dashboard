//http://api.openweathermap.org

// "http://api.openweathermap.org/data/2.5/weather?q={city name}&units=imperial&appid={API key}"


var searchList = $("#searchList")
var userImput = $("#userImput")
var mainCardCity = $(".mainCardCity")
var cardTemp = $(".cardTemp")
var cardHumid = $(".cardHumid")
var cardWind = $(".cardWind")
var cardUV = $(".cardUV")
var uvIndex = $("#uvIndex")

$(document).on('click', '#userInputCityButton', function(){
  var userInputCityEl = document.getElementById('userInputCity').value;
  console.log('userInputCityEl');
  getApi(userInputCityEl)

$(document).ready(function(){
    $("#searchButton").click(function(){
        ;
    });
});





// var kelvinTemp = data.main.temp
// var fTemp = ((kelvinTemp - 273.15) * 1.8 + 32).toFixed(1)
// var mph = (data.wind.speed * 2.24).toFixed(1)

// function getUvAnd5Day(cityName) {
//     fetch(
//       `https://google-maps-geocoding.p.rapidapi.com/geocode/json?address=${cityName}&language=en`,
//       {
//         method: 'GET',
//         headers: {
//           'x-rapidapi-key': '39525a19f1msh8bd69ea75c04185p1e6577jsn06c9ca822fcc',
//           'x-rapidapi-host': 'google-maps-geocoding.p.rapidapi.com'
//         }
//       }
//     )
//       .then((response) => response.json())
//       .then((data) => {
//         var latitude = data.results[0].geometry.location.lat
//         var longitude = data.results[0].geometry.location.lng
//         return { latitude: latitude, longitude: longitude }
//       })
//       .then((coordinates) => {
//         var lat = coordinates.latitude
//         var lng = coordinates.longitude
//         fetch(
//           `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&appid=b47cbc5dede4579f5550da5d2bb84dc3`
//         )
//           .then((response) => response.json())
//           .then((data) => {
//               console.log(data);