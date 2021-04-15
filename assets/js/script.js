//API key: 782e9a0040f4b5e0f593a6853da91e39
//http://api.openweathermap.org

api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

$(document).ready(function(){
    $("#searchButton").click(function(){
        console.log("Hello World!");
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