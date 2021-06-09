var key = '782e9a0040f4b5e0f593a6853da91e39';

function getCity() {
  var userInput = document.getElementById('userInput').value;
  var currentUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${userInput}&units=imperial&appid=${key}`;

  fetch(currentUrl)
    .then(function (rawData) {
      return rawData.json();
    }
    )
    .then(function (data) {
      console.log(data)
      var openUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${data.city.coord.lat}&lon=${data.city.coord.lon}&units=imperial&appid=${key}`;

      fetch(openUrl)
        .then(function (weatherData) {
          return weatherData.json();
        }
        )
        .then(function (allWeatherData) {
          var mainCity = document.createElement('h2');
          var weatherImg = document.createElement('img');
          var mainIcon = `http://openweathermap.org/img/wn/${allWeatherData.daily[0].weather[0].icon}@2x.png`;
          var temp = document.createElement('h5');
          var humid = document.createElement('h5');
          var wind = document.createElement('h5');
          var uv = document.createElement('h5');
          uv.id = 'uvColor';
          mainCity.textContent = data.city.name;
          weatherImg.src = mainIcon;
          temp.textContent = 'Temperature: ' + allWeatherData.daily[0].temp.day;
          humid.textContent = 'Humidity: ' + allWeatherData.daily[0].humidity;
          wind.textContent = 'Wind Speed: ' + allWeatherData.daily[0].wind_speed;
          uv.textContent = 'UV Index: ' + allWeatherData.daily[0].uvi;
          if (allWeatherData.daily[0].uvi <= 2) {
            uv.style.backgroundColor = 'green';
          } else if (allWeatherData.daily[0].uvi >= 2 && allWeatherData.daily[0].uvi <= 5) {
            uv.style.backgroundColor = 'yellow';
          } else if (allWeatherData.daily[0].uvi >= 5 && allWeatherData.daily[0].uvi <= 7) {
            uv.style.backgroundColor = 'orange';
          } else if (allWeatherData.daily[0].uvi >= 7 && allWeatherData.daily[0].uvi <= 10) {
            uv.style.backgroundColor = 'red';
          } else {
            uv.style.backgroundColor = 'purple';
          }   //clear children
          while ($("#mainCard").firstChild) {
            $("#mainCard").removeChild($("#mainCard").firstChild)
          };
          while ($("#mainCardIcon").firstChild) {
            $("#mainCardIcon").removeChild($("#mainCardIcon").firstChild)
          };
          while ($("#mainCardTemp").firstChild) {
            $("#mainCardTemp").removeChild($("#mainCardTemp").firstChild)
          };
          while ($("#mainCardHumid").firstChild) {
            $("#mainCardHumid").removeChild($("#mainCardHumid").firstChild)
          };
          while ($("#mainCardWind").firstChild) {
            $("#mainCardWind").removeChild($("#mainCardWind").firstChild)
          };
          while ($("#uvIndex").firstChild) {
            $("#uvIndex").removeChild($("#uvIndex").firstChild);
          }


          //append each child to index
          $("#mainCard").append(mainCity);
          $("#mainCardIcon").append(weatherImg);
          $("#mainCardTemp").append(temp);
          $("#mainCardHumid").append(humid);
          $("#mainCardWind").append(wind);
          $("#uvIndex").append(uv);

          //loops for five day
          var i;
          var fiveDayForcast = document.getElementById('fiveDayForcast');
          while (fiveDayForcast.firstChild) {
            fiveDayForcast.removeChild(fiveDayForcast.firstChild)
          };
          for (i = 0; i < 5; i++) {
            var colContainer = document.createElement("div");
            var cardContainerOne = document.createElement("div");
            var cardContainerTwo = document.createElement("div");
            var humidity = document.createElement("p");
            var icon = document.createElement("img");
            var temp = document.createElement("p");
            var date = document.createElement("h6");
            var weatherIcon = `http://openweathermap.org/img/wn/${allWeatherData.daily[i].weather[0].icon}@2x.png`;
            var dateStamp = new Date(allWeatherData.daily[i].dt * 1000).toLocaleDateString('en-US', {
              day: 'numeric',
              month: 'short',
              year: 'numeric',
            });
            console.log(dateStamp)

            date.textContent = dateStamp;
            temp.textContent = "Temperature: " + allWeatherData.daily[i].temp.day;
            humidity.textContent = "Humidity: " + allWeatherData.daily[i].humidity;

            icon.setAttribute('src', weatherIcon);
            colContainer.classList.add("col-sm-2.5", "fiveDayCard");
            cardContainerOne.classList.add("card", "h-100");
            cardContainerTwo.classList.add("card-body", "text-white", "bg-primary");

            colContainer.append(cardContainerOne)
            cardContainerOne.append(cardContainerTwo)
            cardContainerTwo.append(date, icon, humidity, temp);
            fiveDayForcast.append(colContainer);
          }
        }
        )
    }
    )
  save();
};

var previousCities = [];

function save() {
  var input = document.getElementById('userInput').value;
  console.log(input)
  previousCities.push(input);
  localStorage.setItem('cityValue', JSON.stringify(previousCities));
};

var searchButton = document.getElementById('searchButton')

searchButton.addEventListener('click', getCity);

previousCities = JSON.parse(localStorage.getItem('cityValue'));

if (previousCities !== null) {
  var cityList = document.createElement('ul');
  var previousCities = $('#searchList');
  previousCities.append(cityList);


  var i;
  for (i = 0; i < previousCities.length; i++) {
    // loop to add previous city array to list
    var storedCity = document.createElement('a');
    var listStored = document.createElement('li');
    listStored.append(storedCity);
    cityList.append(listStored);
    storedCity.textContent = previousCities[i];

    storedCity.addEventListener('click', function (e) {
      var input = document.getElementById('userInput');
      e = e || window.event;
      var target = e.target;
      input.value = target.textContent || target.innerText;
    });

  }
} else {
  previousCities = [];
};

function savedCity() {
  //pull item from local storage
  localStorage.getItem('cityValue');
}