//API key: 782e9a0040f4b5e0f593a6853da91e39

var searchList = $("#searchList")
var mainCardCity = $(".mainCardCity")
var cardTemp = $(".cardTemp")
var cardHumid = $(".cardHumid")
var cardWind = $(".cardWind")
var cardUV = $(".cardUV")
var uvIndex = $("#uvIndex")
var weatherIcon =$("cardIcon")


  

//http://api.openweathermap.org/data/2.5/forecast?q={city name}&units={api key}'
function getApi(userInput){
  var requestUrl = 'http://api.openweathermap.org/data/2.5/forecast?q=' + userInput + '&units=imperial&appid=782e9a0040f4b5e0f593a6853da91e39';
  console.log(requestUrl)

  fetch(requestUrl)
  .then(function (response) {
    return response.json();
      })
      .then(function (data) {
          console.log(data);


        // NOTE:
        /*
          Use document.createElement to create all of the hard coded HTML elements for our five-eday forecast
          Add information to API for these cards like temp and humidity
          Append inner elements to out elements and append card to five day forecast element

        */



          
          // concatenate the image file name with the url for image thumbnails
          var weatherIconImage = "http://openweathermap.org/img/w/" + data.list[0].weather[0].icon + ".png";

          // create a table row to display elements
          var tableRow = document.createElement('tr');
          
          // call the getUV function by passing in city lat/long
          // getUV(data.city.coord.lat, data.city.coord.lon);

          // display remaining data
          // tableRow.innerHTML = `<td> ${data.city.name} </td>
          // <td>${data.list[0].dt_txt}</td>
          // <td><img src="${weatherIconImage}" alt="Weather Icon"></img></td>
          // <td> ${data.list[0].main.temp} </td>
          // <td>${data.list[0].main.humidity}</td>
          // <td>${data.list[0].wind.speed}</td>
          // <td id="uvIndexTableElement"></td>`;
          console.log(`data temp: ${data.list[0].main.temp}`);
          cardTemp.text(data.list[0].main.temp);
          // append it to the html
          // weatherDetailsTable.append(tableRow);

          // call the display function to show multiple days of weather
          displayFiveDayWeather(data.list);
      })    
}

function displayFiveDayWeather(dataListItems){

  console.log(dataListItems);

  // create an array to hold days for weather
  var cleanFiveDays = [];

  // for loop that takes the weather only at 0 hours, so that it returns only for days not every 3 hours
  for(var i=0; i<dataListItems.length; i++){
      if(dataListItems[i].dt_txt.split(" ")[1]==="00:00:00"){
          cleanFiveDays.push(dataListItems[i]);
      }
  }

  // console log just to see whats happening
  console.log(cleanFiveDays);

  // for the for loop before, try passing in this for the date instead and figure out formatting
  // ${new Date(dataListItems[i].dt)}

  // grabs what city the user input
}
$(document).ready(function(){
  $("#searchButton").click(function(){
    var userInput = $("#userInput").val()
    console.log(userInput)
    getApi(userInput)
  });
});

  
// this function takes a latitude and longitude and puts it into an API URL in order to obtain the UV index
// original API URL: http://api.openweathermap.org/data/2.5/uvi?lat={lat}&lon={lon}&appid={API key}
function getUV(lat, lon){
  var requestUrl = 'http://api.openweathermap.org/data/2.5/uvi?lat=' + lat + '&lon=' + lon + '&appid=952a31c8c46b04b367ae5571aed08c79';
  fetch(requestUrl)
      .then(function (response) {
          return response.json();
      })
      .then(function (data) {
          console.log(data);

          // var tableColumn = document.getElementById('uvIndexTableElement');

          // tableColumn.innerHTML = `${data.value}`;
      })    
}



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