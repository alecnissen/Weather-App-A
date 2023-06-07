// console.log('TEE');
// console.log("asdfsdf"); 
// console.log("TESTING!");
// console.log("using template repo"); 


// write a function that can return weather data for that location 

// I got an API key from the website, now I need to use the key to get the data 

// I got the API key and website that I want to use for this project 

// I wrote a small function, async function 

// that makes URL, and I get data back from the API request, 

// What I believe I need to do next, is find a project and browse thru 

// the projects to get an idea of how I really want everything to look, 

// user will search for city data, and it should return that data and display to the dom 

// right now look at projects, and think about making a search box, 

// Look at projects, get more inspiration, 

// you got data from an API request, 

// now when user enters, a city name, and presses submit, 

// return that data, 



// Write the functions that hit the API. You’re going to want functions that can take a location and return the weather data for that location. 

// For now, just console.log() the information. 

// write a basic header, with a title and a search bar 

// then once made, have the logic that takes in an input from the field, 

// and make that a variable, put it into the URL, to fetch specific data from a city location, 

// make header first. and  test css 

// ok header will be styled using flexbox, 

// weather app text, then search bar, search btn(submit btn)

// last, button or div to toggle between F and C

// have all the elements, header, search bar, search btn, f and c toggle btn, 

// organize them with flex so they are in a row with space between them 

// have the header container, display flex, but apply another container around the right elements 

// OK we have the basic header markup and styling, 

// now step 2, write a function which takez location and returns the weather info 

// use variable, return weather for specific location, 

// Write the functions that hit the API. You’re going to want functions that can take a location and return the weather data for that location. 

// made a variable search box, 

// what I want is to get city specific weather data, based on input data, and when the presses submit/search, 

// make an event listener, 

// call a callback function which fetches data based on location/variable, 

// const getData = await fetch('http://api.weatherapi.com/v1/forecast.json?key=45464da38892450d95f10433230506 &q=philadelphia&days=5&aqi=no&alerts=no');

// I am able to get weather data back, my function 

// processes the JSON data as well 

// I am able to key into the current weather, 

// commit changes, add a little css for current weather, 

// and see if you can append the JSON data, and the right info to the DOM 

// try to make another function which will key into data 

// and just display current forcast, 

// confirm on discord that my approach so far is ok, 

// async function which fetches specific city data, turns into jSON, 

// then passes that JSON data to a function which will print the weather to the DOM. 

// currently is my approach ok, next I was just going to make locations in the body 

// where I can append the data, then style. 

// next I made a section/card that I start appending the current weather data to 

// append the current weather data, 

// see if you can fetch the img/icon, 

// icon first, then weather description, 

// all in a column, 

// ok not sure how to import imgs, 

// lets try to fetch and display all other data to the DOM, 

// import '../src/styles.scss'; 

let searchBox = document.getElementById('search-box'); 

let searchBtn = document.getElementById('search-btn'); 

console.log(searchBtn);

console.log(searchBox);

async function fetchData(input) { 
    let cityData = input; 
    console.log('The data passed in is: ' + cityData);
    const getData = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=45464da38892450d95f10433230506 &q=${cityData}&days=5&aqi=no&alerts=no`);
    const jsonData = await getData.json();
    // console.log(jsonData); 
    // let currentWeatherData = jsonData.current.condition.text; 
    let currentWeatherData = jsonData;
    // console.log(currentWeatherData);
   displayCurrentWeather(currentWeatherData);

} 

// get city name, temp, feels like, humidity, wind speed
// key into each variable then append. 

// let weatherContainer = document.getElementById('current-weather-container');

async function displayCurrentWeather(weather) { 
    // clear DOM, replaceChildren before appending new
    

    let currentForecast = await weather; 

    // console.log(currentForecast.location) 

    let locationData = currentForecast.location.name;

    let weatherDescriptionData = currentForecast.current.condition.text; 

    let currentWeatherNumberData = currentForecast.current.feelslike_f;

    let windData = currentForecast.current.wind_mph;

    let windDirection = currentForecast.current.wind_dir;

    let rainInches = currentForecast.current.precip_in; 

    let humidityLevel = currentForecast.current.humidity;

    let x = currentForecast.forecast.forecastday[0].day; 

    console.log(x); 

    // get what data and find what data you need forthe 

    // 3 day forecast, including icon 

    // date 

    // high low temp 

    // chance of rain, chance of snow, UV Index 

    let newImg = new Image();

    newImg.src = currentForecast.current.condition.icon;

    document.body.append(newImg);

    // console.log(humidityLevel);

   //  console.log(locationData);

   //  document.body.append(currentForecast);

   let currentWeatherLocationText = document.getElementById('current-weather-location-p'); 

   // currentWeatherLocationText.replaceChildren();

   currentWeatherLocationText.append(locationData);

   let currentWeatherDescriptionText = document.getElementById('current-weather-description-p'); 

   currentWeatherDescriptionText.append(weatherDescriptionData); 

   let currentWeatherTempData = document.getElementById('current-weather-temp-data'); 

   currentWeatherTempData.append(currentWeatherNumberData);

   let currentWeatherWindData = document.getElementById('current-weather-wind-data'); 

   currentWeatherWindData.append(windData);

   let currentWeatherWindDirection = document.getElementById('current-weather-wind-direction-data');

   currentWeatherWindDirection.append(windDirection);

   let currentWeatherRain = document.getElementById('current-weather-rain-inches-data');

   currentWeatherRain.append(rainInches);

   let currentHumidityLevel = document.getElementById('current-weather-humidity-data'); 

   currentHumidityLevel.append(humidityLevel);

}

searchBtn.addEventListener('click', (e) => { 
    // console.log(searchBox.value); 
    let inputValue = searchBox.value;

    console.log(inputValue);

    fetchData(inputValue);
});


// So I like waves project look, next I Will figure out a way 

// next I will get the 3 day forecast, 

// I assume it would be the same process fetch the data 

// key into the value the current forecast 

// I think I also need to write a function, 

// that will display the three day forecast, 

// pass the weather data to that you got from the fetch data function 

// to the other function which will just display forecast weahter 

// for 3 days, 

// project, 3 day forecast, 

// toggle celius and f 

// find way to clear DOM before adding new values, no adding on 

// a way to import icons and get the correct path 

// icons seems to working!! 

// make the weather description elements appear with the DOM, 

// instead of the html, 

// find a way now to key into and get forecast 

// next step is to key into data, and get the forecast 

// key into certain days, make a HTML card, 

// append the data to the card, along with logos for the weather, 

// then instead of HTML Messages, use DOM plus append data 

// once current and 3 day forecast is set, 

// find a way or write a function that can changed f data to c 

// style up and done, 

// We know what we need to do, first I would get the correct 

// forecast data and append in the correct spot, 

// then fix the current weather to use DOM displayed text, 

// along with attaching the icon, 

// start there, first lets find the correct forecast for the 3 day, 

// ok lets first go the HTML, nad make the markup, 

// we will need a container, 

// that can hold 3 cards, displayed in flex so they are in a row, 

// append the values to the specific input fields, 

// 