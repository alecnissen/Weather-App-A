"use strict";
(self["webpackChunkwebpack_template"] = self["webpackChunkwebpack_template"] || []).push([["main"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.scss */ "./src/styles.scss");
// import './styles.scss';




// added photo credit, so next I will update input values to use humidity and wind direction, 

// 

// Ok so gh pages is working, sass is up and running! Hell yes, 

// next I will style with sass, clean up the styling, import some fonts, 

// fix the current temp vs feels like temp change, 

// then call it a day, 

// sass, use fonts, see if you can transfer the css you wrote into sass, use variables, mixins, nesting 

// fonts, weather type font

// in order to use earth background img you must import it and see if you can use it in css 

// but in js, 

// query selector the body, select element, 

// add the img as a background, and set the imported img as the src. 

// why foes f change when I enter it again? Check to make sure you are logging correct days 

// change it to feels like instead of current temp 

// OK so today, I Like the styling for the background, move the the imgs into the src directory, 

// and use gh pages, to see if the images render, 

// also change the current weather, to use current instead of feels like, double check with that, 

// last try to install sass, maybe ask if it is necessary to use two JS files, 

// brush up on the styling too, maybe use DOM styling for the 3 day forecast boxes, once data is entered, then apply the background styles, 

// test gh pages, 

// how can I display all content, webpack issue of gh pages not displaying the content, it only displays the html. 

let searchBox = document.getElementById('search-box');
let searchBtn = document.getElementById('search-btn');

// current weather data stored in here, 
let weatherContainer = document.getElementById('current-weather-container');
let storedWeatherData;
async function fetchData(input) {
  let cityData = input;
  console.log('The data passed in is: ' + cityData);
  const getData = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=45464da38892450d95f10433230506 &q=${cityData}&days=5&aqi=no&alerts=no`);
  const jsonData = await getData.json();
  let currentWeatherData = jsonData;
  console.log(currentWeatherData);
  storedWeatherData = currentWeatherData;
  console.log(currentWeatherData);
  displayCurrentWeather(currentWeatherData);
  addWeatherForecast1(currentWeatherData);
  addWeatherForecast2(currentWeatherData);
  addWeatherForecast3(currentWeatherData);

  //  toggle(currentWeatherData);

  // return jsonData;
}

// how can I store weather data outside of the function? 

// all I can think of is a global variable,c

// fetchData.then(data => console.log(data)); 

// OK I am able to get the weather data, within my event listener function 

//  let weatherContainer = document.getElementById('current-weather-container'); 

async function displayCurrentWeather(weather) {
  let currentWeatherIcon = document.getElementById('current-weather-icon');
  // clear DOM, replaceChildren before appending new

  let currentForecast = await weather;

  // console.log(currentForecast.location) 

  currentWeatherIcon.textContent = '';
  let weatherIcon = new Image();
  weatherIcon.src = currentForecast.current.condition.icon;

  // console.log(currentForecast.current.condition)

  let locationData = currentForecast.location.name;
  let weatherDescriptionData = currentForecast.current.condition.text;
  let currentWeatherNumberData = currentForecast.current.temp_f;
  let windData = currentForecast.current.wind_mph;
  let windDirection = currentForecast.current.wind_dir;
  let rainInches = currentForecast.current.precip_in;
  let humidityLevel = currentForecast.current.humidity;
  let newImg = new Image();
  newImg.src = currentForecast.current.condition.icon;

  //    let currentWeatherIcon = document.getElementById('current-weather-icon'); 

  // dont append use variable and template literals, appending may stop the adding onto to instead of replacing, 

  currentWeatherIcon.appendChild(weatherIcon);
  let currentWeatherLocationText = document.getElementById('current-weather-location-p');
  currentWeatherLocationText.textContent = `Location: ${locationData}`;
  let currentWeatherDescriptionText = document.getElementById('current-weather-description-p');
  currentWeatherDescriptionText.textContent = `Conditions: ${weatherDescriptionData}`;
  let currentWeatherTempData = document.getElementById('current-weather-temp-data');
  currentWeatherTempData.textContent = `Temprature Is: ${currentWeatherNumberData}\u00B0F`;
  let currentWeatherWindData = document.getElementById('current-weather-wind-data');
  currentWeatherWindData.textContent = `Wind Speed: ${windData} mph`;
  let currentWeatherWindDirection = document.getElementById('current-weather-wind-direction-data');
  currentWeatherWindDirection.textContent = `Wind Direction: ${windDirection}`;
  let currentWeatherRain = document.getElementById('current-weather-rain-inches-data');
  currentWeatherRain.textContent = `Rain: ${rainInches} in`;
  let currentHumidityLevel = document.getElementById('current-weather-humidity-data');
  currentHumidityLevel.textContent = `Humidity: ${humidityLevel}%`;
}

// needs to somehow be cleared in the search btn 

searchBtn.addEventListener('click', e => {
  console.log('click');
  let inputValue = searchBox.value;
  fetchData(inputValue);
});

// grab the input fields that have F 

// set variables for current temp in c, high temp in c, low temp in c 

// set those variables, 

// set a variable isC to false, 

// conditional if c is true grab the values, then replace them with c value, 

// if false, switch them back to F, 

// can switch the temp, 

// but how can I toggle back and forth 

// maybe I should make another variable for F 

// let toggleTempratureBtn = document.getElementById('F-C-toggle-btn'); 

// let isCelcius = false; 

// // let isF = true; 

// HERE!

// grab the element, C element 

let celciusBtn = document.getElementById('C-toggle-btn');
celciusBtn.addEventListener('click', e => {
  let currentCelciusTemp = storedWeatherData.current.temp_c;
  let currentWeatherTempData = document.getElementById('current-weather-temp-data');
  currentWeatherTempData.textContent = `Temprature Is: ${currentCelciusTemp}\u00B0C`;
  let day1HighTemp = storedWeatherData.forecast.forecastday[0].day.maxtemp_c;
  let day1LowTemp = storedWeatherData.forecast.forecastday[0].day.mintemp_c;
  let highLowTempData = document.getElementById('input-forecast-day1-high-low');
  highLowTempData.textContent = `High today is: ${day1HighTemp}\u00B0C Low today is: ${day1LowTemp}\u00B0C`;
  let day2HighTemp = storedWeatherData.forecast.forecastday[1].day.maxtemp_c;
  let day2LowTemp = storedWeatherData.forecast.forecastday[1].day.mintemp_c;
  let highLowTempDataDay2 = document.getElementById('input-forecast-day2-high-low');
  highLowTempDataDay2.textContent = `High Today is: ${day2HighTemp}\u00B0C Low today is: ${day2LowTemp}\u00B0C`;

  // 

  let day3HighTemp = storedWeatherData.forecast.forecastday[2].day.maxtemp_c;
  let day3LowTemp = storedWeatherData.forecast.forecastday[2].day.mintemp_c;
  let highLowTempDataDay3 = document.getElementById('input-forecast-day3-high-low');
  highLowTempDataDay3.textContent = `High today is: ${day3HighTemp}\u00B0C Low today is: ${day3LowTemp}\u00B0C`;
});
let fBtn = document.getElementById('F-toggle-btn');
fBtn.addEventListener('click', e => {
  let currentFTemp = storedWeatherData.current.temp_f;
  let currentWeatherTempData = document.getElementById('current-weather-temp-data');
  currentWeatherTempData.textContent = `Temprature Is: ${currentFTemp}\u00B0F`;
  let day1HighTemp = storedWeatherData.forecast.forecastday[0].day.maxtemp_f;
  let day1LowTemp = storedWeatherData.forecast.forecastday[0].day.mintemp_f;
  let highLowTempData = document.getElementById('input-forecast-day1-high-low');
  highLowTempData.textContent = `High today is: ${day1HighTemp}\u00B0F Low today is: ${day1LowTemp}\u00B0F`;
  let day2HighTemp = storedWeatherData.forecast.forecastday[1].day.maxtemp_f;
  let day2LowTemp = storedWeatherData.forecast.forecastday[1].day.mintemp_f;
  let highLowTempDataDay2 = document.getElementById('input-forecast-day2-high-low');
  highLowTempDataDay2.textContent = `High Today is: ${day2HighTemp}\u00B0F Low today is: ${day2LowTemp}\u00B0F`;

  // 

  let day3HighTemp = storedWeatherData.forecast.forecastday[2].day.maxtemp_f;
  let day3LowTemp = storedWeatherData.forecast.forecastday[2].day.mintemp_f;
  let highLowTempDataDay3 = document.getElementById('input-forecast-day3-high-low');
  highLowTempDataDay3.textContent = `High today is: ${day3HighTemp}\u00B0F Low today is: ${day3LowTemp}\u00B0F`;
});

// toggleTempratureBtn.addEventListener('click', (e) => { 
//      isCelcius = true;

//     //  isF = false;

//     let x = searchBox.value; 

//    // set variable for current temp in c

//    // grab the input field for current temp 

//    // should I have two different btns, 

//    // if F clicked append, f values 

//    // if c clicked, append c values, 

//    // how to flip a boolean value based on btn click

//    // I think the best way is to keep a seperate btn, 

//    // ideally I would like to complete this within the function, 

//    // but may be easier to make two btns, hit the c btn display c temp data in all the correct spots 

//    // if f is hit then display F in all the right places, 

//    // I will make two buttons, event listener, if f clicked diplsay f temp data, if c clicked, display c values, grabbing the input fields, and using ${}

//    // to append variables to the DOM. 

//    let currentCelciusTemp = storedWeatherData.current.temp_c; 

//    let currentFTemp = storedWeatherData.current.temp_f; 

//    let currentWeatherTempData = document.getElementById('current-weather-temp-data'); 

//    console.log(currentCelciusTemp); 

//    console.log(currentFTemp); 

//    if (isCelcius) { 
//     currentWeatherTempData.textContent = `${currentCelciusTemp}`;
//     // isCelcius = false;
//    } else if (!isCelcius) { 
//     currentWeatherTempData.textContent = `${currentFTemp}`;
//    }

//    isCelcius = false;

//    console.log(isCelcius);
// //    } else (isF) { 
// //     currentWeatherTempData.textContent = `${currentFTemp}`;
// //    }

//     // console.log(storedWeatherData.current.condition);
// // fetchData.then(data => console.log(data));
// });

async function addWeatherForecast1(weather) {
  let forecastData = await weather;

  // console.log(forecastData.forecast.forecastday[0].day);

  // console.log(forecastData.forecast.forecastday[0].day.condition.icon);

  let inputForImgDay1 = document.getElementById('input-forecast-day1-icon');
  inputForImgDay1.textContent = '';
  let day1Date = forecastData.forecast.forecastday[0].date;
  let day1Icon = new Image();
  let day1HighTemp = forecastData.forecast.forecastday[0].day.maxtemp_f;
  let day1LowTemp = forecastData.forecast.forecastday[0].day.mintemp_f;
  let chanceOfRain = forecastData.forecast.forecastday[0].day.daily_chance_of_rain;
  let uvIndex = forecastData.forecast.forecastday[0].day.uv;
  let humidity = forecastData.forecast.forecastday[0].day.avghumidity;
  let wind = forecastData.forecast.forecastday[0].day.maxwind_mph;
  console.log(wind);

  // day1Icon.style.height = '130px';

  day1Icon.src = forecastData.forecast.forecastday[0].day.condition.icon;

  // let inputForImgDay1 = document.getElementById('input-forecast-day1-icon'); 

  inputForImgDay1.append(day1Icon);
  let dateAndIconData = document.getElementById('input-forecast-day1-data-date');
  dateAndIconData.textContent = `Date today is: ${day1Date}`;
  let highLowTempData = document.getElementById('input-forecast-day1-high-low');
  highLowTempData.textContent = `High today is: ${day1HighTemp}\u00B0F Low today is: ${day1LowTemp}\u00B0F`;
  let chanceOfRainData = document.getElementById('input-forecast-day-1-rain-chance');
  chanceOfRainData.textContent = `Chance of Rain: ${chanceOfRain}%`;
  let uvIndexData = document.getElementById('input-forecast-day-1-uv-index');
  uvIndexData.textContent = `UV Index is: ${uvIndex}`;
  let humidityData = document.getElementById('input-forecast-day-1-humidity');
  humidityData.textContent = `Humidity Levels: ${humidity}%`;
  let windData = document.getElementById('input-forecast-day-1-wind');
  windData.textContent = `Wind Speed: ${wind} mph`;
}
async function addWeatherForecast2(weather) {
  let forecastData2 = await weather;
  console.log(forecastData2);

  // console.log(forecastData2.forecast.forecastday[1].date);

  let iconData = document.getElementById('input-forecast-day2-data-icon');
  iconData.textContent = '';
  let day2Date = forecastData2.forecast.forecastday[1].date;
  let day2IconImg = new Image();
  day2IconImg.src = forecastData2.forecast.forecastday[1].day.condition.icon;
  let day2HighTemp = forecastData2.forecast.forecastday[1].day.maxtemp_f;
  let day2LowTemp = forecastData2.forecast.forecastday[1].day.mintemp_f;
  let day2ChanceOfRain = forecastData2.forecast.forecastday[1].day.daily_chance_of_rain;
  let day2UVIndex = forecastData2.forecast.forecastday[1].day.uv;
  let day2Humidity = forecastData2.forecast.forecastday[1].day.avghumidity;
  let day2WindSpeed = forecastData2.forecast.forecastday[1].day.maxwind_mph;

  // console.log(day2ChanceOfSnow);

  // console.log(day2Icon);

  let dateData = document.getElementById('input-forecast-day2-data-date');
  dateData.textContent = `Date Today is: ${day2Date}`;

  // let iconData = document.getElementById('input-forecast-day2-data-icon');

  iconData.append(day2IconImg);
  let highLowTempData = document.getElementById('input-forecast-day2-high-low');
  highLowTempData.textContent = `High Today is: ${day2HighTemp}\u00B0F Low today is: ${day2LowTemp}\u00B0F`;
  let chanceOfRainData = document.getElementById('input-forecast-day2-rain-chance');
  chanceOfRainData.textContent = `Chance of Rain: ${day2ChanceOfRain}%`;
  let uvIndexData = document.getElementById('input-forecast-day2-uv-index');
  uvIndexData.textContent = `UV Index is: ${day2UVIndex}`;
  let humidityData = document.getElementById('input-forecast-day2-humidity');
  humidityData.textContent = `Humidity Levels: ${day2Humidity}%`;
  let windData = document.getElementById('input-forecast-day-2-wind');
  windData.textContent = `Wind Speed: ${day2WindSpeed} mph`;
}
async function addWeatherForecast3(weather) {
  let forecastData3 = weather;
  let day3Date = forecastData3.forecast.forecastday[2].date;
  let day3ImgIcon = new Image();
  let iconData = document.getElementById('input-forecast-day3-icon');
  iconData.textContent = '';
  day3ImgIcon.src = forecastData3.forecast.forecastday[2].day.condition.icon;
  let day3HighTemp = forecastData3.forecast.forecastday[2].day.maxtemp_f;
  let day3LowTemp = forecastData3.forecast.forecastday[2].day.mintemp_f;
  let day3RainChance = forecastData3.forecast.forecastday[2].day.daily_chance_of_rain;
  let day3UVIndex = forecastData3.forecast.forecastday[2].day.uv;
  let day3Humidity = forecastData3.forecast.forecastday[2].day.avghumidity;
  let day3Wind = forecastData3.forecast.forecastday[2].day.maxwind_mph;
  console.log(day3Wind);
  let dateData = document.getElementById('input-forecast-day3-data-date');
  dateData.textContent = `Date Today is: ${day3Date}`;

  // let iconData = document.getElementById('input-forecast-day3-icon');

  iconData.append(day3ImgIcon);
  let highLowTempData = document.getElementById('input-forecast-day3-high-low');
  highLowTempData.textContent = `High today is: ${day3HighTemp}\u00B0F Low today is: ${day3LowTemp}\u00B0F`;
  let chanceOfRainData = document.getElementById('input-forecast-day3-rain-chance');
  chanceOfRainData.textContent = `Chance of Rain: ${day3RainChance}%`;
  let uvIndexData = document.getElementById('input-forecast-day3-uv-index');
  uvIndexData.textContent = `UV Index is: ${day3UVIndex}`;
  let humidity = document.getElementById('input-forecast-day3-humidity');
  humidity.textContent = `Humidity Levels: ${day3Humidity}%`;
  let wind = document.getElementById('input-forecast-day-3-wind');
  wind.textContent = `Wind Speed: ${day3Wind} mph`;
}

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

// ok we got the markup 

// now I think I Would pass the data to the other function, 

// ok other function can accept the data, 

// add the p elements on each card, and append data along with a message 

// p element and append the date and icon first in the same line 

// make a new function for each forecast day 

// just to modularize things more and to avoid 

// having one function to all the work and that function will 

// be too big, one function for each day, 

// pass the data to those 3 functions, 

// its only 4 calls, one to current 

// one to current, day1 2 3 

// ok now use a function to print the data for day 2 forecast 

// use a different function so it does not get too big 

// another issue is getting the degrees symbol to show, 

// and if the user inputs another search, 

// clear the DOM to make way for the new. 

// change background based on condition text 

// if === sunny 

// append sunny background picture, 

// if === rainy 

// append rainy pic 

// I think everything is going ok, I will make the weather data for the last day of the forecast, commit, then fix the html above to use only the DOM 

// I will fix the html to use DOM Only, 

// then work on clearing the DOM, so values do not add onto 

// HTML Is set, so how do I clear the values from the DOM, 

// add new but replace old, 

// having issue clearing the DOM, 

// I thought clearning it before the function call or inside the functionthat was called 

// where can I clear the DOM, 

// it needs to be in the right spot, 

// clear the DOM once the search btn is pressed, 

// clear old data, add the new, 

// OK I was able to figure out the dom issue, it was more the icons that I had to replace, instead of clearning the dom each time, 

// setting the text Content of the element, to empty will make way for the new value/icon 

// next I need to figure out how to write a function or perform the logic that would allow me to change the f data to c data 

// first locate all values that use f, 

// just change the temp. there is one in current weather and days, each day will need to high and low temp changed, 

// I am confused on how to approach this, 

// a function? 

// once the btn is clicked, grab the values, grab all the inputs/fields, call another function, which will intake the current weather, key into values, 

// then display those values to the DOM?

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.css":
/*!****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.css ***!
  \****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* body { \n    background-color: ;\n} */\n/* * { \n    box-sizing: border-box;\n    padding: 0; \n    margin: 0;\n}  */\n/* body { \n    background-color: lightgrey;;\n    background: url(./earth-background.jpg);\n    background-size: cover;\n} */\n/* .header-container { \n  background-color: black;\n  text-align: center;\n  height: 12vh;\n  gap: 1em; \n\n}  */\n/* .h1-header-styles { \n    color: white; \n    font-size: 2.8rem;\n    font-weight: bold;\n} */\n/* .search-bar-elements-container { \n    display: flex;\n    justify-content: flex-end;\n    gap: 1em; \n\n}  */\n/* .search-bar-elements-container > input { \n    font-size: 1rem;\n} \n\n.search-bar-elements-container > button { \n    font-size: 1rem;\n    background-color: white;\n    color: black; \n    border: 2px solid black;\n    font-weight: bold;\n}  */\n/* #current-weather-data > h3{ \n    font-size: 2rem;\n    text-decoration: underline;\n}   */\n/* #current-weather-data { \n    text-align: center;\n    font-size: 1.2rem;\n    font-weight: bolder;\n    color: white;\n} */\n/* #current-weather-container { \n    display: flex;\n    justify-content: center;\n    height: 40vh;\n    color: white;\n}  */\n/* #forecast-3-day-title { \n    text-align: center;\n    font-size: 1.3rem;\n    font-weight: bold;\n    text-decoration: underline;\n    margin-top: 0.5em;\n    color: white;\n} */\n/* #forecast-day-1-card, \n#forecast-day-2-card, \n#forecast-day-3-card { \n    height: 45vh;\n    width: 25vw;\n    background-color: black;\n    opacity: 0.7;\n    border-radius: 10%;\n    text-align: center;\n    color: white; \n    font-weight: bold;\n}  */\n/* #forecast-days-container { \n    display: flex;\n    justify-content: center;\n    gap: 2em; \n    margin-top: 0.5em;\n    font-size: 1.1rem;\n} */\n/* #forecast-container { \n    text-align: center;\n    font-size: 2rem;\n    font-weight: bold;\n    text-decoration: underline;\n\n} */", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;;GAAA;AAIA;;;;IAAA;AAMA;;;;GAAA;AAMA;;;;;;IAAA;AAQA;;;;GAAA;AAMA;;;;;IAAA;AASA;;;;;;;;;;IAAA;AAYA;;;KAAA;AAKA;;;;;GAAA;AAOA;;;;;IAAA;AAOA;;;;;;;GAAA;AAUA;;;;;;;;;;;IAAA;AAaA;;;;;;GAAA;AASA;;;;;;GAAA","sourcesContent":["/* body { \n    background-color: ;\n} */\n\n/* * { \n    box-sizing: border-box;\n    padding: 0; \n    margin: 0;\n}  */\n\n/* body { \n    background-color: lightgrey;;\n    background: url(./earth-background.jpg);\n    background-size: cover;\n} */\n\n/* .header-container { \n  background-color: black;\n  text-align: center;\n  height: 12vh;\n  gap: 1em; \n\n}  */\n\n/* .h1-header-styles { \n    color: white; \n    font-size: 2.8rem;\n    font-weight: bold;\n} */\n\n/* .search-bar-elements-container { \n    display: flex;\n    justify-content: flex-end;\n    gap: 1em; \n    \n}  */\n\n\n\n/* .search-bar-elements-container > input { \n    font-size: 1rem;\n} \n\n.search-bar-elements-container > button { \n    font-size: 1rem;\n    background-color: white;\n    color: black; \n    border: 2px solid black;\n    font-weight: bold;\n}  */\n\n/* #current-weather-data > h3{ \n    font-size: 2rem;\n    text-decoration: underline;\n}   */\n\n/* #current-weather-data { \n    text-align: center;\n    font-size: 1.2rem;\n    font-weight: bolder;\n    color: white;\n} */\n\n/* #current-weather-container { \n    display: flex;\n    justify-content: center;\n    height: 40vh;\n    color: white;\n}  */\n\n/* #forecast-3-day-title { \n    text-align: center;\n    font-size: 1.3rem;\n    font-weight: bold;\n    text-decoration: underline;\n    margin-top: 0.5em;\n    color: white;\n} */\n\n\n/* #forecast-day-1-card, \n#forecast-day-2-card, \n#forecast-day-3-card { \n    height: 45vh;\n    width: 25vw;\n    background-color: black;\n    opacity: 0.7;\n    border-radius: 10%;\n    text-align: center;\n    color: white; \n    font-weight: bold;\n}  */\n\n/* #forecast-days-container { \n    display: flex;\n    justify-content: center;\n    gap: 2em; \n    margin-top: 0.5em;\n    font-size: 1.1rem;\n} */\n\n\n/* #forecast-container { \n    text-align: center;\n    font-size: 2rem;\n    font-weight: bold;\n    text-decoration: underline;\n\n} */\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss":
/*!******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss ***!
  \******************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./earth-background.jpg */ "./src/earth-background.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./pexels-philippe-donn-1257860.jpg */ "./src/pexels-philippe-donn-1257860.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".h1-header-styles {\n  color: white;\n}\n\n* {\n  font-family: \"Courier New\", Courier, monospace;\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\nbody {\n  background-color: lightgrey;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-size: cover;\n}\n\n.header-container {\n  background-color: black;\n  text-align: center;\n  height: 12vh;\n  gap: 1em;\n}\n\n.h1-header-styles {\n  color: white;\n  font-size: 2.8rem;\n  font-weight: bold;\n}\n\n.search-bar-elements-container {\n  display: flex;\n  justify-content: flex-end;\n  gap: 1em;\n}\n.search-bar-elements-container input {\n  font-size: 1rem;\n}\n.search-bar-elements-container button {\n  font-size: 1rem;\n  background-color: white;\n  color: black;\n  border: 2px solid black;\n  font-weight: bold;\n}\n\n#current-weather-data {\n  text-align: center;\n  font-size: 1.2rem;\n  font-weight: bolder;\n  color: white;\n}\n#current-weather-data h3 {\n  font-size: 2rem;\n  text-decoration: underline;\n}\n\n#current-weather-container {\n  display: flex;\n  justify-content: center;\n  height: 40vh;\n  color: white;\n}\n\n#forecast-3-day-title {\n  text-align: center;\n  font-size: 1.3rem;\n  font-weight: bold;\n  text-decoration: underline;\n  margin-top: 0.5em;\n  color: white;\n}\n\n#forecast-day-1-card,\n#forecast-day-2-card,\n#forecast-day-3-card {\n  height: 45vh;\n  width: 25vw;\n  background-color: black;\n  opacity: 0.7;\n  border-radius: 10%;\n  text-align: center;\n  color: white;\n  font-weight: bold;\n}\n\n#forecast-days-container {\n  display: flex;\n  justify-content: center;\n  gap: 2em;\n  margin-top: 0.5em;\n  font-size: 1.1rem;\n}\n\n@media (max-width: 500px) {\n  body {\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n    background-size: auto;\n  }\n  #forecast-days-container {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n  }\n  #forecast-day-1-card,\n  #forecast-day-2-card,\n  #forecast-day-3-card {\n    height: 40vh;\n    width: 70vw;\n    border: 2px solid white;\n    font-size: 0.9rem;\n  }\n  .search-bar-elements-container > input {\n    width: 150px;\n  }\n}", "",{"version":3,"sources":["webpack://./src/styles.scss"],"names":[],"mappings":"AAuBA;EACE,YAxBW;AAEb;;AAyBA;EACE,8CAAA;EACA,sBAAA;EACA,UAAA;EACA,SAAA;AAtBF;;AAyBA;EACE,2BAAA;EACA,mDAAA;EACA,sBAAA;AAtBF;;AAyBA;EAlCE,uBALY;EAMZ,kBAAA;EACA,YAAA;EACA,QAAA;AAaF;;AAsBA;EACE,YA3Cc;EA4Cd,iBA3CW;EA4CX,iBAAA;AAnBF;;AA6BA;EAEE,aAAA;EACA,yBAAA;EACA,QAAA;AA3BF;AA6BE;EACE,eAAA;AA3BJ;AA8BE;EACE,eAAA;EACA,uBAAA;EACA,YAAA;EACA,uBAAA;EACA,iBAAA;AA5BJ;;AAiCA;EACE,kBAAA;EACA,iBAAA;EACA,mBAAA;EACA,YAAA;AA9BF;AAgCE;EACE,eAAA;EACA,0BAAA;AA9BJ;;AAkCA;EACE,aAAA;EACA,uBAAA;EACA,YAAA;EACA,YAAA;AA/BF;;AAkCA;EACE,kBAAA;EACA,iBAAA;EACA,iBAAA;EACA,0BAAA;EACA,iBAAA;EACA,YAAA;AA/BF;;AAkCA;;;EA5FE,YAAA;EACE,WAAA;EACA,uBAAA;EACA,YAAA;EACA,kBAAA;EACA,kBAAA;EACA,YAAA;EACA,iBAAA;AAgEJ;;AA4BA;EACE,aAAA;EACA,uBAAA;EACA,QAAA;EACA,iBAAA;EACA,iBAAA;AAzBF;;AAoCA;EAEE;IACE,mDAAA;IACA,qBAAA;EAlCF;EAqCA;IACE,aAAA;IACA,sBAAA;IACA,uBAAA;IACA,mBAAA;EAnCF;EAsCF;;;IAGE,YAAA;IACA,WAAA;IACA,uBAAA;IACA,iBAAA;EApCA;EAuCF;IACE,YAAA;EArCA;AACF","sourcesContent":["$titleColor: white; \n$headerColor: black;\n$h1HeaderColor: white;\n$h1FontSize: 2.8rem;\n\n@mixin headerContainerStyles() { \n  background-color: $headerColor;\n  text-align: center;\n  height: 12vh;\n  gap: 1em; \n} \n\n@mixin forecastCards() { \n  height: 45vh;\n    width: 25vw;\n    background-color: black;\n    opacity: 0.7;\n    border-radius: 10%;\n    text-align: center;\n    color: white; \n    font-weight: bold;\n}\n\n.h1-header-styles { \n  color: $titleColor; \n} \n\n* { \n  font-family:'Courier New', Courier, monospace;\n  box-sizing: border-box;\n  padding: 0; \n  margin: 0;\n} \n\nbody { \n  background-color: lightgrey;;\n  background: url(./earth-background.jpg);\n  background-size: cover;\n}  \n\n.header-container { \n  @include headerContainerStyles;\n} \n\n.h1-header-styles { \n  color: $h1HeaderColor; \n  font-size: $h1FontSize;\n  font-weight: bold;\n} \n\n// .search-bar-elements-container { \n//   display: flex;\n//   justify-content: flex-end;\n//   gap: 1em; \n  \n// } \n\n.search-bar-elements-container { \n\n  display: flex;\n  justify-content: flex-end;\n  gap: 1em; \n\n  input { \n    font-size: 1rem;\n  } \n\n  button { \n    font-size: 1rem;\n    background-color: white;\n    color: black; \n    border: 2px solid black;\n    font-weight: bold;\n  }\n\n} \n\n#current-weather-data { \n  text-align: center;\n  font-size: 1.2rem;\n  font-weight: bolder;\n  color: white; \n\n  h3 { \n    font-size: 2rem;\n    text-decoration: underline;\n  }\n}\n\n#current-weather-container { \n  display: flex;\n  justify-content: center;\n  height: 40vh;\n  color: white;\n} \n\n#forecast-3-day-title { \n  text-align: center;\n  font-size: 1.3rem;\n  font-weight: bold;\n  text-decoration: underline;\n  margin-top: 0.5em;\n  color: white;\n}  \n\n#forecast-day-1-card, \n#forecast-day-2-card, \n#forecast-day-3-card { \n  @include forecastCards;\n}  \n\n\n#forecast-days-container { \n  display: flex;\n  justify-content: center;\n  gap: 2em; \n  margin-top: 0.5em;\n  font-size: 1.1rem;\n}\n\n// sass media queries, \n\n// in order to implement a mobile version, get the layout of the page first, \n\n// inspect with dev tools and handle one section at a time, \n\n// try first the 3 day forecast container, \n\n@media (max-width: 500px) { \n\n  body { \n    background: url(./pexels-philippe-donn-1257860.jpg);\n    background-size: auto;\n  }\n\n  #forecast-days-container { \n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n  } \n\n#forecast-day-1-card, \n#forecast-day-2-card, \n#forecast-day-3-card { \n  height: 40vh; \n  width: 70vw;\n  border: 2px solid white; \n  font-size: 0.9rem;\n}\n\n.search-bar-elements-container > input { \n  width: 150px;\n}\n\n} \n\n\n\n// @mixin forecastCards() { \n//   height: 45vh;\n//   width: 25vw;\n//   background-color: black;\n//   opacity: 0.7;\n//   border-radius: 10%;\n//   text-align: center;\n//   color: white; \n//   font-weight: bold;\n// } "],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./styles.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/earth-background.jpg":
/*!**********************************!*\
  !*** ./src/earth-background.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1c9d55fe28c7812c6624.jpg";

/***/ }),

/***/ "./src/pexels-philippe-donn-1257860.jpg":
/*!**********************************************!*\
  !*** ./src/pexels-philippe-donn-1257860.jpg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "952fda9a71ac2c1c6fc5.jpg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvc3R5bGVzLnNjc3MiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvc3R5bGUuY3NzP2VmYmYiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9zdHlsZXMuc2Nzcz9hNjA5Iiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0ICcuL3N0eWxlcy5zY3NzJztcblxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cbmltcG9ydCAnLi9zdHlsZXMuc2Nzcyc7XG5cbi8vIGFkZGVkIHBob3RvIGNyZWRpdCwgc28gbmV4dCBJIHdpbGwgdXBkYXRlIGlucHV0IHZhbHVlcyB0byB1c2UgaHVtaWRpdHkgYW5kIHdpbmQgZGlyZWN0aW9uLCBcblxuLy8gXG5cblxuXG4vLyBPayBzbyBnaCBwYWdlcyBpcyB3b3JraW5nLCBzYXNzIGlzIHVwIGFuZCBydW5uaW5nISBIZWxsIHllcywgXG5cbi8vIG5leHQgSSB3aWxsIHN0eWxlIHdpdGggc2FzcywgY2xlYW4gdXAgdGhlIHN0eWxpbmcsIGltcG9ydCBzb21lIGZvbnRzLCBcblxuLy8gZml4IHRoZSBjdXJyZW50IHRlbXAgdnMgZmVlbHMgbGlrZSB0ZW1wIGNoYW5nZSwgXG5cbi8vIHRoZW4gY2FsbCBpdCBhIGRheSwgXG5cbi8vIHNhc3MsIHVzZSBmb250cywgc2VlIGlmIHlvdSBjYW4gdHJhbnNmZXIgdGhlIGNzcyB5b3Ugd3JvdGUgaW50byBzYXNzLCB1c2UgdmFyaWFibGVzLCBtaXhpbnMsIG5lc3RpbmcgXG5cbi8vIGZvbnRzLCB3ZWF0aGVyIHR5cGUgZm9udFxuXG4vLyBpbiBvcmRlciB0byB1c2UgZWFydGggYmFja2dyb3VuZCBpbWcgeW91IG11c3QgaW1wb3J0IGl0IGFuZCBzZWUgaWYgeW91IGNhbiB1c2UgaXQgaW4gY3NzIFxuXG4vLyBidXQgaW4ganMsIFxuXG4vLyBxdWVyeSBzZWxlY3RvciB0aGUgYm9keSwgc2VsZWN0IGVsZW1lbnQsIFxuXG4vLyBhZGQgdGhlIGltZyBhcyBhIGJhY2tncm91bmQsIGFuZCBzZXQgdGhlIGltcG9ydGVkIGltZyBhcyB0aGUgc3JjLiBcblxuLy8gd2h5IGZvZXMgZiBjaGFuZ2Ugd2hlbiBJIGVudGVyIGl0IGFnYWluPyBDaGVjayB0byBtYWtlIHN1cmUgeW91IGFyZSBsb2dnaW5nIGNvcnJlY3QgZGF5cyBcblxuLy8gY2hhbmdlIGl0IHRvIGZlZWxzIGxpa2UgaW5zdGVhZCBvZiBjdXJyZW50IHRlbXAgXG5cbi8vIE9LIHNvIHRvZGF5LCBJIExpa2UgdGhlIHN0eWxpbmcgZm9yIHRoZSBiYWNrZ3JvdW5kLCBtb3ZlIHRoZSB0aGUgaW1ncyBpbnRvIHRoZSBzcmMgZGlyZWN0b3J5LCBcblxuLy8gYW5kIHVzZSBnaCBwYWdlcywgdG8gc2VlIGlmIHRoZSBpbWFnZXMgcmVuZGVyLCBcblxuLy8gYWxzbyBjaGFuZ2UgdGhlIGN1cnJlbnQgd2VhdGhlciwgdG8gdXNlIGN1cnJlbnQgaW5zdGVhZCBvZiBmZWVscyBsaWtlLCBkb3VibGUgY2hlY2sgd2l0aCB0aGF0LCBcblxuLy8gbGFzdCB0cnkgdG8gaW5zdGFsbCBzYXNzLCBtYXliZSBhc2sgaWYgaXQgaXMgbmVjZXNzYXJ5IHRvIHVzZSB0d28gSlMgZmlsZXMsIFxuXG4vLyBicnVzaCB1cCBvbiB0aGUgc3R5bGluZyB0b28sIG1heWJlIHVzZSBET00gc3R5bGluZyBmb3IgdGhlIDMgZGF5IGZvcmVjYXN0IGJveGVzLCBvbmNlIGRhdGEgaXMgZW50ZXJlZCwgdGhlbiBhcHBseSB0aGUgYmFja2dyb3VuZCBzdHlsZXMsIFxuXG4vLyB0ZXN0IGdoIHBhZ2VzLCBcblxuLy8gaG93IGNhbiBJIGRpc3BsYXkgYWxsIGNvbnRlbnQsIHdlYnBhY2sgaXNzdWUgb2YgZ2ggcGFnZXMgbm90IGRpc3BsYXlpbmcgdGhlIGNvbnRlbnQsIGl0IG9ubHkgZGlzcGxheXMgdGhlIGh0bWwuIFxuXG5sZXQgc2VhcmNoQm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaC1ib3gnKTsgXG5cbmxldCBzZWFyY2hCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoLWJ0bicpOyBcblxuLy8gY3VycmVudCB3ZWF0aGVyIGRhdGEgc3RvcmVkIGluIGhlcmUsIFxubGV0IHdlYXRoZXJDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VycmVudC13ZWF0aGVyLWNvbnRhaW5lcicpOyBcblxubGV0IHN0b3JlZFdlYXRoZXJEYXRhIFxuXG5hc3luYyBmdW5jdGlvbiBmZXRjaERhdGEoaW5wdXQpIHsgXG5cbiAgICBsZXQgY2l0eURhdGEgPSBpbnB1dDsgXG4gICAgXG4gICAgY29uc29sZS5sb2coJ1RoZSBkYXRhIHBhc3NlZCBpbiBpczogJyArIGNpdHlEYXRhKTtcbiAgICBcbiAgICBjb25zdCBnZXREYXRhID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PTQ1NDY0ZGEzODg5MjQ1MGQ5NWYxMDQzMzIzMDUwNiAmcT0ke2NpdHlEYXRhfSZkYXlzPTUmYXFpPW5vJmFsZXJ0cz1ub2ApO1xuXG4gICAgY29uc3QganNvbkRhdGEgPSBhd2FpdCBnZXREYXRhLmpzb24oKTtcbiAgICBcbiAgICBsZXQgY3VycmVudFdlYXRoZXJEYXRhID0ganNvbkRhdGE7XG5cbiAgICBjb25zb2xlLmxvZyhjdXJyZW50V2VhdGhlckRhdGEpO1xuICAgIFxuICAgIHN0b3JlZFdlYXRoZXJEYXRhID0gY3VycmVudFdlYXRoZXJEYXRhOyBcblxuICAgY29uc29sZS5sb2coY3VycmVudFdlYXRoZXJEYXRhKTtcblxuICAgZGlzcGxheUN1cnJlbnRXZWF0aGVyKGN1cnJlbnRXZWF0aGVyRGF0YSk7XG5cbiAgIGFkZFdlYXRoZXJGb3JlY2FzdDEoY3VycmVudFdlYXRoZXJEYXRhKTtcblxuICAgYWRkV2VhdGhlckZvcmVjYXN0MihjdXJyZW50V2VhdGhlckRhdGEpO1xuXG4gICBhZGRXZWF0aGVyRm9yZWNhc3QzKGN1cnJlbnRXZWF0aGVyRGF0YSk7IFxuICAgIFxuICAgIFxuICAvLyAgdG9nZ2xlKGN1cnJlbnRXZWF0aGVyRGF0YSk7XG5cbiAgLy8gcmV0dXJuIGpzb25EYXRhO1xuXG59IFxuXG4vLyBob3cgY2FuIEkgc3RvcmUgd2VhdGhlciBkYXRhIG91dHNpZGUgb2YgdGhlIGZ1bmN0aW9uPyBcblxuLy8gYWxsIEkgY2FuIHRoaW5rIG9mIGlzIGEgZ2xvYmFsIHZhcmlhYmxlLGNcblxuLy8gZmV0Y2hEYXRhLnRoZW4oZGF0YSA9PiBjb25zb2xlLmxvZyhkYXRhKSk7IFxuXG4vLyBPSyBJIGFtIGFibGUgdG8gZ2V0IHRoZSB3ZWF0aGVyIGRhdGEsIHdpdGhpbiBteSBldmVudCBsaXN0ZW5lciBmdW5jdGlvbiBcbiBcblxuLy8gIGxldCB3ZWF0aGVyQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1cnJlbnQtd2VhdGhlci1jb250YWluZXInKTsgXG5cbmFzeW5jIGZ1bmN0aW9uIGRpc3BsYXlDdXJyZW50V2VhdGhlcih3ZWF0aGVyKSB7IFxuXG4gICAgbGV0IGN1cnJlbnRXZWF0aGVySWNvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXJyZW50LXdlYXRoZXItaWNvbicpOyBcbiAgICAvLyBjbGVhciBET00sIHJlcGxhY2VDaGlsZHJlbiBiZWZvcmUgYXBwZW5kaW5nIG5ld1xuXG4gICAgbGV0IGN1cnJlbnRGb3JlY2FzdCA9IGF3YWl0IHdlYXRoZXI7IFxuXG4gICAgLy8gY29uc29sZS5sb2coY3VycmVudEZvcmVjYXN0LmxvY2F0aW9uKSBcblxuICAgIGN1cnJlbnRXZWF0aGVySWNvbi50ZXh0Q29udGVudCA9ICcnOyBcblxuXG5cbiAgICBsZXQgd2VhdGhlckljb24gPSBuZXcgSW1hZ2UoKTsgXG5cbiAgICB3ZWF0aGVySWNvbi5zcmMgPSBjdXJyZW50Rm9yZWNhc3QuY3VycmVudC5jb25kaXRpb24uaWNvbjtcblxuICAgIC8vIGNvbnNvbGUubG9nKGN1cnJlbnRGb3JlY2FzdC5jdXJyZW50LmNvbmRpdGlvbilcblxuICAgIGxldCBsb2NhdGlvbkRhdGEgPSBjdXJyZW50Rm9yZWNhc3QubG9jYXRpb24ubmFtZTtcblxuICAgIGxldCB3ZWF0aGVyRGVzY3JpcHRpb25EYXRhID0gY3VycmVudEZvcmVjYXN0LmN1cnJlbnQuY29uZGl0aW9uLnRleHQ7IFxuXG4gICAgbGV0IGN1cnJlbnRXZWF0aGVyTnVtYmVyRGF0YSA9IGN1cnJlbnRGb3JlY2FzdC5jdXJyZW50LnRlbXBfZjtcblxuICAgIGxldCB3aW5kRGF0YSA9IGN1cnJlbnRGb3JlY2FzdC5jdXJyZW50LndpbmRfbXBoO1xuXG4gICAgbGV0IHdpbmREaXJlY3Rpb24gPSBjdXJyZW50Rm9yZWNhc3QuY3VycmVudC53aW5kX2RpcjtcblxuICAgIGxldCByYWluSW5jaGVzID0gY3VycmVudEZvcmVjYXN0LmN1cnJlbnQucHJlY2lwX2luOyBcblxuICAgIGxldCBodW1pZGl0eUxldmVsID0gY3VycmVudEZvcmVjYXN0LmN1cnJlbnQuaHVtaWRpdHk7XG5cbiAgICBsZXQgbmV3SW1nID0gbmV3IEltYWdlKCk7XG5cbiAgICBuZXdJbWcuc3JjID0gY3VycmVudEZvcmVjYXN0LmN1cnJlbnQuY29uZGl0aW9uLmljb247XG5cbi8vICAgIGxldCBjdXJyZW50V2VhdGhlckljb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VycmVudC13ZWF0aGVyLWljb24nKTsgXG5cbiAgIC8vIGRvbnQgYXBwZW5kIHVzZSB2YXJpYWJsZSBhbmQgdGVtcGxhdGUgbGl0ZXJhbHMsIGFwcGVuZGluZyBtYXkgc3RvcCB0aGUgYWRkaW5nIG9udG8gdG8gaW5zdGVhZCBvZiByZXBsYWNpbmcsIFxuXG4gICBjdXJyZW50V2VhdGhlckljb24uYXBwZW5kQ2hpbGQod2VhdGhlckljb24pO1xuXG4gICBsZXQgY3VycmVudFdlYXRoZXJMb2NhdGlvblRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VycmVudC13ZWF0aGVyLWxvY2F0aW9uLXAnKTsgXG5cbiAgIGN1cnJlbnRXZWF0aGVyTG9jYXRpb25UZXh0LnRleHRDb250ZW50ID0gYExvY2F0aW9uOiAke2xvY2F0aW9uRGF0YX1gO1xuXG4gICBsZXQgY3VycmVudFdlYXRoZXJEZXNjcmlwdGlvblRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VycmVudC13ZWF0aGVyLWRlc2NyaXB0aW9uLXAnKTsgXG5cbiAgIGN1cnJlbnRXZWF0aGVyRGVzY3JpcHRpb25UZXh0LnRleHRDb250ZW50ID0gYENvbmRpdGlvbnM6ICR7d2VhdGhlckRlc2NyaXB0aW9uRGF0YX1gXG5cbiAgIGxldCBjdXJyZW50V2VhdGhlclRlbXBEYXRhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1cnJlbnQtd2VhdGhlci10ZW1wLWRhdGEnKTsgXG5cbiAgIGN1cnJlbnRXZWF0aGVyVGVtcERhdGEudGV4dENvbnRlbnQgPSBgVGVtcHJhdHVyZSBJczogJHtjdXJyZW50V2VhdGhlck51bWJlckRhdGF9XFx1MDBCMEZgO1xuXG4gICBsZXQgY3VycmVudFdlYXRoZXJXaW5kRGF0YSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXJyZW50LXdlYXRoZXItd2luZC1kYXRhJyk7IFxuXG4gICBjdXJyZW50V2VhdGhlcldpbmREYXRhLnRleHRDb250ZW50ID0gYFdpbmQgU3BlZWQ6ICR7d2luZERhdGF9IG1waGA7XG5cbiAgIGxldCBjdXJyZW50V2VhdGhlcldpbmREaXJlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VycmVudC13ZWF0aGVyLXdpbmQtZGlyZWN0aW9uLWRhdGEnKTtcblxuICAgY3VycmVudFdlYXRoZXJXaW5kRGlyZWN0aW9uLnRleHRDb250ZW50ID0gYFdpbmQgRGlyZWN0aW9uOiAke3dpbmREaXJlY3Rpb259YDtcblxuICAgbGV0IGN1cnJlbnRXZWF0aGVyUmFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXJyZW50LXdlYXRoZXItcmFpbi1pbmNoZXMtZGF0YScpO1xuXG4gICBjdXJyZW50V2VhdGhlclJhaW4udGV4dENvbnRlbnQgPSBgUmFpbjogJHtyYWluSW5jaGVzfSBpbmA7XG5cbiAgIGxldCBjdXJyZW50SHVtaWRpdHlMZXZlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXJyZW50LXdlYXRoZXItaHVtaWRpdHktZGF0YScpOyBcblxuICAgY3VycmVudEh1bWlkaXR5TGV2ZWwudGV4dENvbnRlbnQgPSBgSHVtaWRpdHk6ICR7aHVtaWRpdHlMZXZlbH0lYFxuXG59IFxuXG4vLyBuZWVkcyB0byBzb21laG93IGJlIGNsZWFyZWQgaW4gdGhlIHNlYXJjaCBidG4gXG5cbnNlYXJjaEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7IFxuXG4gICAgY29uc29sZS5sb2coJ2NsaWNrJyk7XG5cbiAgICBsZXQgaW5wdXRWYWx1ZSA9IHNlYXJjaEJveC52YWx1ZTtcblxuICAgIGZldGNoRGF0YShpbnB1dFZhbHVlKTtcblxufSk7IFxuXG4vLyBncmFiIHRoZSBpbnB1dCBmaWVsZHMgdGhhdCBoYXZlIEYgXG5cbi8vIHNldCB2YXJpYWJsZXMgZm9yIGN1cnJlbnQgdGVtcCBpbiBjLCBoaWdoIHRlbXAgaW4gYywgbG93IHRlbXAgaW4gYyBcblxuLy8gc2V0IHRob3NlIHZhcmlhYmxlcywgXG5cbi8vIHNldCBhIHZhcmlhYmxlIGlzQyB0byBmYWxzZSwgXG5cbi8vIGNvbmRpdGlvbmFsIGlmIGMgaXMgdHJ1ZSBncmFiIHRoZSB2YWx1ZXMsIHRoZW4gcmVwbGFjZSB0aGVtIHdpdGggYyB2YWx1ZSwgXG5cbi8vIGlmIGZhbHNlLCBzd2l0Y2ggdGhlbSBiYWNrIHRvIEYsIFxuXG4vLyBjYW4gc3dpdGNoIHRoZSB0ZW1wLCBcblxuLy8gYnV0IGhvdyBjYW4gSSB0b2dnbGUgYmFjayBhbmQgZm9ydGggXG5cbi8vIG1heWJlIEkgc2hvdWxkIG1ha2UgYW5vdGhlciB2YXJpYWJsZSBmb3IgRiBcblxuXG4vLyBsZXQgdG9nZ2xlVGVtcHJhdHVyZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdGLUMtdG9nZ2xlLWJ0bicpOyBcblxuLy8gbGV0IGlzQ2VsY2l1cyA9IGZhbHNlOyBcblxuLy8gLy8gbGV0IGlzRiA9IHRydWU7IFxuXG4vLyBIRVJFIVxuXG4vLyBncmFiIHRoZSBlbGVtZW50LCBDIGVsZW1lbnQgXG5cbmxldCBjZWxjaXVzQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0MtdG9nZ2xlLWJ0bicpOyBcblxuY2VsY2l1c0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG5cbiAgICBsZXQgY3VycmVudENlbGNpdXNUZW1wID0gc3RvcmVkV2VhdGhlckRhdGEuY3VycmVudC50ZW1wX2M7IFxuXG4gICAgbGV0IGN1cnJlbnRXZWF0aGVyVGVtcERhdGEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VycmVudC13ZWF0aGVyLXRlbXAtZGF0YScpOyBcblxuICAgIGN1cnJlbnRXZWF0aGVyVGVtcERhdGEudGV4dENvbnRlbnQgPSBgVGVtcHJhdHVyZSBJczogJHtjdXJyZW50Q2VsY2l1c1RlbXB9XFx1MDBCMENgOyBcblxuICAgIGxldCBkYXkxSGlnaFRlbXAgPSBzdG9yZWRXZWF0aGVyRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXkubWF4dGVtcF9jO1xuXG4gICAgbGV0IGRheTFMb3dUZW1wID0gc3RvcmVkV2VhdGhlckRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uZGF5Lm1pbnRlbXBfYztcblxuICAgIGxldCBoaWdoTG93VGVtcERhdGEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXQtZm9yZWNhc3QtZGF5MS1oaWdoLWxvdycpOyBcblxuICAgIGhpZ2hMb3dUZW1wRGF0YS50ZXh0Q29udGVudCA9IGBIaWdoIHRvZGF5IGlzOiAke2RheTFIaWdoVGVtcH1cXHUwMEIwQyBMb3cgdG9kYXkgaXM6ICR7ZGF5MUxvd1RlbXB9XFx1MDBCMENgO1xuXG4gICAgbGV0IGRheTJIaWdoVGVtcCA9IHN0b3JlZFdlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzFdLmRheS5tYXh0ZW1wX2M7XG5cbiAgICBsZXQgZGF5Mkxvd1RlbXAgPSBzdG9yZWRXZWF0aGVyRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsxXS5kYXkubWludGVtcF9jOyBcblxuICAgIGxldCBoaWdoTG93VGVtcERhdGFEYXkyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0LWZvcmVjYXN0LWRheTItaGlnaC1sb3cnKTtcblxuICAgIGhpZ2hMb3dUZW1wRGF0YURheTIudGV4dENvbnRlbnQgPSBgSGlnaCBUb2RheSBpczogJHtkYXkySGlnaFRlbXB9XFx1MDBCMEMgTG93IHRvZGF5IGlzOiAke2RheTJMb3dUZW1wfVxcdTAwQjBDYDsgIFxuXG4gICAgLy8gXG5cbiAgICBsZXQgZGF5M0hpZ2hUZW1wID0gc3RvcmVkV2VhdGhlckRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMl0uZGF5Lm1heHRlbXBfYztcblxuICAgIGxldCBkYXkzTG93VGVtcCA9IHN0b3JlZFdlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzJdLmRheS5taW50ZW1wX2M7XG5cbiAgICBsZXQgaGlnaExvd1RlbXBEYXRhRGF5MyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dC1mb3JlY2FzdC1kYXkzLWhpZ2gtbG93Jyk7XG5cbiAgICBoaWdoTG93VGVtcERhdGFEYXkzLnRleHRDb250ZW50ID0gYEhpZ2ggdG9kYXkgaXM6ICR7ZGF5M0hpZ2hUZW1wfVxcdTAwQjBDIExvdyB0b2RheSBpczogJHtkYXkzTG93VGVtcH1cXHUwMEIwQ2A7XG4gICAgXG59KTsgXG5cbmxldCBmQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0YtdG9nZ2xlLWJ0bicpOyBcblxuZkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG5cbiAgICBsZXQgY3VycmVudEZUZW1wID0gc3RvcmVkV2VhdGhlckRhdGEuY3VycmVudC50ZW1wX2Y7IFxuXG4gICAgbGV0IGN1cnJlbnRXZWF0aGVyVGVtcERhdGEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VycmVudC13ZWF0aGVyLXRlbXAtZGF0YScpO1xuXG4gICAgY3VycmVudFdlYXRoZXJUZW1wRGF0YS50ZXh0Q29udGVudCA9IGBUZW1wcmF0dXJlIElzOiAke2N1cnJlbnRGVGVtcH1cXHUwMEIwRmA7XG5cbiAgICBsZXQgZGF5MUhpZ2hUZW1wID0gc3RvcmVkV2VhdGhlckRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uZGF5Lm1heHRlbXBfZjtcblxuICAgIGxldCBkYXkxTG93VGVtcCA9IHN0b3JlZFdlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRheS5taW50ZW1wX2Y7XG5cbiAgICBsZXQgaGlnaExvd1RlbXBEYXRhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0LWZvcmVjYXN0LWRheTEtaGlnaC1sb3cnKTsgXG5cbiAgICBoaWdoTG93VGVtcERhdGEudGV4dENvbnRlbnQgPSBgSGlnaCB0b2RheSBpczogJHtkYXkxSGlnaFRlbXB9XFx1MDBCMEYgTG93IHRvZGF5IGlzOiAke2RheTFMb3dUZW1wfVxcdTAwQjBGYDsgXG5cbiAgICBsZXQgZGF5MkhpZ2hUZW1wID0gc3RvcmVkV2VhdGhlckRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMV0uZGF5Lm1heHRlbXBfZjtcblxuICAgIGxldCBkYXkyTG93VGVtcCA9IHN0b3JlZFdlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzFdLmRheS5taW50ZW1wX2Y7IFxuXG4gICAgbGV0IGhpZ2hMb3dUZW1wRGF0YURheTIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXQtZm9yZWNhc3QtZGF5Mi1oaWdoLWxvdycpO1xuXG4gICAgaGlnaExvd1RlbXBEYXRhRGF5Mi50ZXh0Q29udGVudCA9IGBIaWdoIFRvZGF5IGlzOiAke2RheTJIaWdoVGVtcH1cXHUwMEIwRiBMb3cgdG9kYXkgaXM6ICR7ZGF5Mkxvd1RlbXB9XFx1MDBCMEZgOyBcblxuICAgIC8vIFxuXG4gICAgbGV0IGRheTNIaWdoVGVtcCA9IHN0b3JlZFdlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzJdLmRheS5tYXh0ZW1wX2Y7XG5cbiAgICBsZXQgZGF5M0xvd1RlbXAgPSBzdG9yZWRXZWF0aGVyRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsyXS5kYXkubWludGVtcF9mO1xuXG4gICAgbGV0IGhpZ2hMb3dUZW1wRGF0YURheTMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXQtZm9yZWNhc3QtZGF5My1oaWdoLWxvdycpO1xuXG4gICAgaGlnaExvd1RlbXBEYXRhRGF5My50ZXh0Q29udGVudCA9IGBIaWdoIHRvZGF5IGlzOiAke2RheTNIaWdoVGVtcH1cXHUwMEIwRiBMb3cgdG9kYXkgaXM6ICR7ZGF5M0xvd1RlbXB9XFx1MDBCMEZgO1xuICAgIFxufSlcblxuXG4vLyB0b2dnbGVUZW1wcmF0dXJlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHsgXG4vLyAgICAgIGlzQ2VsY2l1cyA9IHRydWU7XG5cblxuLy8gICAgIC8vICBpc0YgPSBmYWxzZTtcblxuLy8gICAgIGxldCB4ID0gc2VhcmNoQm94LnZhbHVlOyBcbiAgICBcbi8vICAgIC8vIHNldCB2YXJpYWJsZSBmb3IgY3VycmVudCB0ZW1wIGluIGNcblxuLy8gICAgLy8gZ3JhYiB0aGUgaW5wdXQgZmllbGQgZm9yIGN1cnJlbnQgdGVtcCBcblxuLy8gICAgLy8gc2hvdWxkIEkgaGF2ZSB0d28gZGlmZmVyZW50IGJ0bnMsIFxuXG4vLyAgICAvLyBpZiBGIGNsaWNrZWQgYXBwZW5kLCBmIHZhbHVlcyBcblxuLy8gICAgLy8gaWYgYyBjbGlja2VkLCBhcHBlbmQgYyB2YWx1ZXMsIFxuXG4vLyAgICAvLyBob3cgdG8gZmxpcCBhIGJvb2xlYW4gdmFsdWUgYmFzZWQgb24gYnRuIGNsaWNrXG5cbi8vICAgIC8vIEkgdGhpbmsgdGhlIGJlc3Qgd2F5IGlzIHRvIGtlZXAgYSBzZXBlcmF0ZSBidG4sIFxuXG4vLyAgICAvLyBpZGVhbGx5IEkgd291bGQgbGlrZSB0byBjb21wbGV0ZSB0aGlzIHdpdGhpbiB0aGUgZnVuY3Rpb24sIFxuXG4vLyAgICAvLyBidXQgbWF5IGJlIGVhc2llciB0byBtYWtlIHR3byBidG5zLCBoaXQgdGhlIGMgYnRuIGRpc3BsYXkgYyB0ZW1wIGRhdGEgaW4gYWxsIHRoZSBjb3JyZWN0IHNwb3RzIFxuXG4vLyAgICAvLyBpZiBmIGlzIGhpdCB0aGVuIGRpc3BsYXkgRiBpbiBhbGwgdGhlIHJpZ2h0IHBsYWNlcywgXG5cbi8vICAgIC8vIEkgd2lsbCBtYWtlIHR3byBidXR0b25zLCBldmVudCBsaXN0ZW5lciwgaWYgZiBjbGlja2VkIGRpcGxzYXkgZiB0ZW1wIGRhdGEsIGlmIGMgY2xpY2tlZCwgZGlzcGxheSBjIHZhbHVlcywgZ3JhYmJpbmcgdGhlIGlucHV0IGZpZWxkcywgYW5kIHVzaW5nICR7fVxuXG4vLyAgICAvLyB0byBhcHBlbmQgdmFyaWFibGVzIHRvIHRoZSBET00uIFxuXG4vLyAgICBsZXQgY3VycmVudENlbGNpdXNUZW1wID0gc3RvcmVkV2VhdGhlckRhdGEuY3VycmVudC50ZW1wX2M7IFxuXG4vLyAgICBsZXQgY3VycmVudEZUZW1wID0gc3RvcmVkV2VhdGhlckRhdGEuY3VycmVudC50ZW1wX2Y7IFxuXG4vLyAgICBsZXQgY3VycmVudFdlYXRoZXJUZW1wRGF0YSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXJyZW50LXdlYXRoZXItdGVtcC1kYXRhJyk7IFxuXG4vLyAgICBjb25zb2xlLmxvZyhjdXJyZW50Q2VsY2l1c1RlbXApOyBcblxuLy8gICAgY29uc29sZS5sb2coY3VycmVudEZUZW1wKTsgXG5cbi8vICAgIGlmIChpc0NlbGNpdXMpIHsgXG4vLyAgICAgY3VycmVudFdlYXRoZXJUZW1wRGF0YS50ZXh0Q29udGVudCA9IGAke2N1cnJlbnRDZWxjaXVzVGVtcH1gO1xuLy8gICAgIC8vIGlzQ2VsY2l1cyA9IGZhbHNlO1xuLy8gICAgfSBlbHNlIGlmICghaXNDZWxjaXVzKSB7IFxuLy8gICAgIGN1cnJlbnRXZWF0aGVyVGVtcERhdGEudGV4dENvbnRlbnQgPSBgJHtjdXJyZW50RlRlbXB9YDtcbi8vICAgIH1cblxuLy8gICAgaXNDZWxjaXVzID0gZmFsc2U7XG5cbi8vICAgIGNvbnNvbGUubG9nKGlzQ2VsY2l1cyk7XG4vLyAvLyAgICB9IGVsc2UgKGlzRikgeyBcbi8vIC8vICAgICBjdXJyZW50V2VhdGhlclRlbXBEYXRhLnRleHRDb250ZW50ID0gYCR7Y3VycmVudEZUZW1wfWA7XG4vLyAvLyAgICB9XG4gICAgXG4vLyAgICAgLy8gY29uc29sZS5sb2coc3RvcmVkV2VhdGhlckRhdGEuY3VycmVudC5jb25kaXRpb24pO1xuLy8gLy8gZmV0Y2hEYXRhLnRoZW4oZGF0YSA9PiBjb25zb2xlLmxvZyhkYXRhKSk7XG4vLyB9KTtcblxuYXN5bmMgZnVuY3Rpb24gYWRkV2VhdGhlckZvcmVjYXN0MSh3ZWF0aGVyKSB7IFxuICAgIGxldCBmb3JlY2FzdERhdGEgPSBhd2FpdCB3ZWF0aGVyOyBcblxuICAgICAvLyBjb25zb2xlLmxvZyhmb3JlY2FzdERhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uZGF5KTtcblxuICAgIC8vIGNvbnNvbGUubG9nKGZvcmVjYXN0RGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXkuY29uZGl0aW9uLmljb24pO1xuXG4gICAgbGV0IGlucHV0Rm9ySW1nRGF5MSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dC1mb3JlY2FzdC1kYXkxLWljb24nKTsgXG5cbiAgICBpbnB1dEZvckltZ0RheTEudGV4dENvbnRlbnQgPSAnJztcblxuICAgIGxldCBkYXkxRGF0ZSA9IGZvcmVjYXN0RGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXRlOyBcblxuICAgIGxldCBkYXkxSWNvbiA9IG5ldyBJbWFnZSgpOyBcblxuICAgIGxldCBkYXkxSGlnaFRlbXAgPSBmb3JlY2FzdERhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uZGF5Lm1heHRlbXBfZjtcblxuICAgIGxldCBkYXkxTG93VGVtcCA9IGZvcmVjYXN0RGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXkubWludGVtcF9mO1xuXG4gICAgbGV0IGNoYW5jZU9mUmFpbiA9IGZvcmVjYXN0RGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXkuZGFpbHlfY2hhbmNlX29mX3JhaW47XG5cbiAgICBsZXQgdXZJbmRleCA9IGZvcmVjYXN0RGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXkudXY7XG5cbiAgICBsZXQgaHVtaWRpdHkgPSBmb3JlY2FzdERhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uZGF5LmF2Z2h1bWlkaXR5O1xuXG4gICAgbGV0IHdpbmQgPSBmb3JlY2FzdERhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uZGF5Lm1heHdpbmRfbXBoO1xuXG4gICAgY29uc29sZS5sb2cod2luZCk7XG5cbiAgICAvLyBkYXkxSWNvbi5zdHlsZS5oZWlnaHQgPSAnMTMwcHgnO1xuXG4gICAgZGF5MUljb24uc3JjID0gZm9yZWNhc3REYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRheS5jb25kaXRpb24uaWNvbjsgXG4gICAgXG4gICAgLy8gbGV0IGlucHV0Rm9ySW1nRGF5MSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dC1mb3JlY2FzdC1kYXkxLWljb24nKTsgXG5cbiAgICBpbnB1dEZvckltZ0RheTEuYXBwZW5kKGRheTFJY29uKTtcblxuICAgIGxldCBkYXRlQW5kSWNvbkRhdGEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXQtZm9yZWNhc3QtZGF5MS1kYXRhLWRhdGUnKTsgXG5cbiAgICBkYXRlQW5kSWNvbkRhdGEudGV4dENvbnRlbnQgPSBgRGF0ZSB0b2RheSBpczogJHtkYXkxRGF0ZX1gOyBcblxuICAgIGxldCBoaWdoTG93VGVtcERhdGEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXQtZm9yZWNhc3QtZGF5MS1oaWdoLWxvdycpOyBcblxuICAgIGhpZ2hMb3dUZW1wRGF0YS50ZXh0Q29udGVudCA9IGBIaWdoIHRvZGF5IGlzOiAke2RheTFIaWdoVGVtcH1cXHUwMEIwRiBMb3cgdG9kYXkgaXM6ICR7ZGF5MUxvd1RlbXB9XFx1MDBCMEZgO1xuXG4gICAgbGV0IGNoYW5jZU9mUmFpbkRhdGEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXQtZm9yZWNhc3QtZGF5LTEtcmFpbi1jaGFuY2UnKTtcbiAgICBcbiAgICBjaGFuY2VPZlJhaW5EYXRhLnRleHRDb250ZW50ID0gYENoYW5jZSBvZiBSYWluOiAke2NoYW5jZU9mUmFpbn0lYCBcblxuICAgIGxldCB1dkluZGV4RGF0YSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dC1mb3JlY2FzdC1kYXktMS11di1pbmRleCcpO1xuXG4gICAgdXZJbmRleERhdGEudGV4dENvbnRlbnQgPSBgVVYgSW5kZXggaXM6ICR7dXZJbmRleH1gO1xuXG4gICAgbGV0IGh1bWlkaXR5RGF0YSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dC1mb3JlY2FzdC1kYXktMS1odW1pZGl0eScpOyBcblxuICAgIGh1bWlkaXR5RGF0YS50ZXh0Q29udGVudCA9IGBIdW1pZGl0eSBMZXZlbHM6ICR7aHVtaWRpdHl9JWA7XG5cbiAgICBsZXQgd2luZERhdGEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXQtZm9yZWNhc3QtZGF5LTEtd2luZCcpO1xuXG4gICAgd2luZERhdGEudGV4dENvbnRlbnQgPSBgV2luZCBTcGVlZDogJHt3aW5kfSBtcGhgO1xuXG59IFxuXG5cbmFzeW5jIGZ1bmN0aW9uIGFkZFdlYXRoZXJGb3JlY2FzdDIod2VhdGhlcikgeyBcbiAgICBsZXQgZm9yZWNhc3REYXRhMiA9IGF3YWl0IHdlYXRoZXI7IFxuXG4gICAgY29uc29sZS5sb2coZm9yZWNhc3REYXRhMik7XG5cbiAgICAvLyBjb25zb2xlLmxvZyhmb3JlY2FzdERhdGEyLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzFdLmRhdGUpO1xuXG4gICAgbGV0IGljb25EYXRhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0LWZvcmVjYXN0LWRheTItZGF0YS1pY29uJyk7XG5cbiAgICBpY29uRGF0YS50ZXh0Q29udGVudCA9ICcnO1xuXG4gICAgbGV0IGRheTJEYXRlID0gZm9yZWNhc3REYXRhMi5mb3JlY2FzdC5mb3JlY2FzdGRheVsxXS5kYXRlOyBcblxuICAgIGxldCBkYXkySWNvbkltZyA9IG5ldyBJbWFnZSgpOyBcblxuICAgIGRheTJJY29uSW1nLnNyYyA9IGZvcmVjYXN0RGF0YTIuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMV0uZGF5LmNvbmRpdGlvbi5pY29uO1xuXG4gICAgbGV0IGRheTJIaWdoVGVtcCA9IGZvcmVjYXN0RGF0YTIuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMV0uZGF5Lm1heHRlbXBfZjtcblxuICAgIGxldCBkYXkyTG93VGVtcCA9IGZvcmVjYXN0RGF0YTIuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMV0uZGF5Lm1pbnRlbXBfZjtcblxuICAgIGxldCBkYXkyQ2hhbmNlT2ZSYWluID0gZm9yZWNhc3REYXRhMi5mb3JlY2FzdC5mb3JlY2FzdGRheVsxXS5kYXkuZGFpbHlfY2hhbmNlX29mX3JhaW47XG5cbiAgICBsZXQgZGF5MlVWSW5kZXggPSBmb3JlY2FzdERhdGEyLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzFdLmRheS51djsgXG5cbiAgICBsZXQgZGF5Mkh1bWlkaXR5ID0gZm9yZWNhc3REYXRhMi5mb3JlY2FzdC5mb3JlY2FzdGRheVsxXS5kYXkuYXZnaHVtaWRpdHk7XG5cbiAgICBsZXQgZGF5MldpbmRTcGVlZCA9IGZvcmVjYXN0RGF0YTIuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMV0uZGF5Lm1heHdpbmRfbXBoO1xuXG4gICAgLy8gY29uc29sZS5sb2coZGF5MkNoYW5jZU9mU25vdyk7XG5cbiAgICAvLyBjb25zb2xlLmxvZyhkYXkySWNvbik7XG5cbiAgICBsZXQgZGF0ZURhdGEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXQtZm9yZWNhc3QtZGF5Mi1kYXRhLWRhdGUnKTtcblxuICAgIGRhdGVEYXRhLnRleHRDb250ZW50ID0gYERhdGUgVG9kYXkgaXM6ICR7ZGF5MkRhdGV9YDsgXG5cbiAgICAvLyBsZXQgaWNvbkRhdGEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXQtZm9yZWNhc3QtZGF5Mi1kYXRhLWljb24nKTtcblxuICAgIGljb25EYXRhLmFwcGVuZChkYXkySWNvbkltZyk7IFxuXG4gICAgbGV0IGhpZ2hMb3dUZW1wRGF0YSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dC1mb3JlY2FzdC1kYXkyLWhpZ2gtbG93Jyk7XG5cbiAgICBoaWdoTG93VGVtcERhdGEudGV4dENvbnRlbnQgPSBgSGlnaCBUb2RheSBpczogJHtkYXkySGlnaFRlbXB9XFx1MDBCMEYgTG93IHRvZGF5IGlzOiAke2RheTJMb3dUZW1wfVxcdTAwQjBGYDsgXG5cbiAgICBsZXQgY2hhbmNlT2ZSYWluRGF0YSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dC1mb3JlY2FzdC1kYXkyLXJhaW4tY2hhbmNlJyk7XG5cbiAgICBjaGFuY2VPZlJhaW5EYXRhLnRleHRDb250ZW50ID0gYENoYW5jZSBvZiBSYWluOiAke2RheTJDaGFuY2VPZlJhaW59JWA7IFxuXG4gICAgbGV0IHV2SW5kZXhEYXRhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0LWZvcmVjYXN0LWRheTItdXYtaW5kZXgnKTtcblxuICAgIHV2SW5kZXhEYXRhLnRleHRDb250ZW50ID0gYFVWIEluZGV4IGlzOiAke2RheTJVVkluZGV4fWA7IFxuXG4gICAgbGV0IGh1bWlkaXR5RGF0YSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dC1mb3JlY2FzdC1kYXkyLWh1bWlkaXR5Jyk7XG5cbiAgICBodW1pZGl0eURhdGEudGV4dENvbnRlbnQgPSBgSHVtaWRpdHkgTGV2ZWxzOiAke2RheTJIdW1pZGl0eX0lYDtcblxuICAgIGxldCB3aW5kRGF0YSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dC1mb3JlY2FzdC1kYXktMi13aW5kJyk7IFxuXG4gICAgd2luZERhdGEudGV4dENvbnRlbnQgPSBgV2luZCBTcGVlZDogJHtkYXkyV2luZFNwZWVkfSBtcGhgO1xuXG59IFxuXG5hc3luYyBmdW5jdGlvbiBhZGRXZWF0aGVyRm9yZWNhc3QzKHdlYXRoZXIpIHsgXG4gICAgbGV0IGZvcmVjYXN0RGF0YTMgPSB3ZWF0aGVyOyBcblxuICAgIGxldCBkYXkzRGF0ZSA9IGZvcmVjYXN0RGF0YTMuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMl0uZGF0ZTsgXG5cbiAgICBsZXQgZGF5M0ltZ0ljb24gPSBuZXcgSW1hZ2UoKTsgXG5cbiAgICBsZXQgaWNvbkRhdGEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXQtZm9yZWNhc3QtZGF5My1pY29uJyk7XG5cbiAgICBpY29uRGF0YS50ZXh0Q29udGVudCA9ICcnO1xuXG5cbiAgICBkYXkzSW1nSWNvbi5zcmMgPSBmb3JlY2FzdERhdGEzLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzJdLmRheS5jb25kaXRpb24uaWNvbjtcblxuICAgIGxldCBkYXkzSGlnaFRlbXAgPSBmb3JlY2FzdERhdGEzLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzJdLmRheS5tYXh0ZW1wX2Y7XG5cbiAgICBsZXQgZGF5M0xvd1RlbXAgPSBmb3JlY2FzdERhdGEzLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzJdLmRheS5taW50ZW1wX2Y7XG5cbiAgICBsZXQgZGF5M1JhaW5DaGFuY2UgPSBmb3JlY2FzdERhdGEzLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzJdLmRheS5kYWlseV9jaGFuY2Vfb2ZfcmFpbjtcblxuICAgIGxldCBkYXkzVVZJbmRleCA9IGZvcmVjYXN0RGF0YTMuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMl0uZGF5LnV2O1xuXG4gICAgbGV0IGRheTNIdW1pZGl0eSA9IGZvcmVjYXN0RGF0YTMuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMl0uZGF5LmF2Z2h1bWlkaXR5O1xuXG4gICAgbGV0IGRheTNXaW5kID0gZm9yZWNhc3REYXRhMy5mb3JlY2FzdC5mb3JlY2FzdGRheVsyXS5kYXkubWF4d2luZF9tcGg7XG5cbiAgICBjb25zb2xlLmxvZyhkYXkzV2luZCk7XG5cbiAgICBsZXQgZGF0ZURhdGEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXQtZm9yZWNhc3QtZGF5My1kYXRhLWRhdGUnKTtcblxuICAgIGRhdGVEYXRhLnRleHRDb250ZW50ID0gYERhdGUgVG9kYXkgaXM6ICR7ZGF5M0RhdGV9YDsgXG5cbiAgICAvLyBsZXQgaWNvbkRhdGEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXQtZm9yZWNhc3QtZGF5My1pY29uJyk7XG5cbiAgICBpY29uRGF0YS5hcHBlbmQoZGF5M0ltZ0ljb24pOyBcblxuICAgIGxldCBoaWdoTG93VGVtcERhdGEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXQtZm9yZWNhc3QtZGF5My1oaWdoLWxvdycpO1xuXG4gICAgaGlnaExvd1RlbXBEYXRhLnRleHRDb250ZW50ID0gYEhpZ2ggdG9kYXkgaXM6ICR7ZGF5M0hpZ2hUZW1wfVxcdTAwQjBGIExvdyB0b2RheSBpczogJHtkYXkzTG93VGVtcH1cXHUwMEIwRmA7XG5cbiAgICBsZXQgY2hhbmNlT2ZSYWluRGF0YSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dC1mb3JlY2FzdC1kYXkzLXJhaW4tY2hhbmNlJyk7XG5cbiAgICBjaGFuY2VPZlJhaW5EYXRhLnRleHRDb250ZW50ID0gYENoYW5jZSBvZiBSYWluOiAke2RheTNSYWluQ2hhbmNlfSVgIFxuXG4gICAgbGV0IHV2SW5kZXhEYXRhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0LWZvcmVjYXN0LWRheTMtdXYtaW5kZXgnKTsgXG5cbiAgICB1dkluZGV4RGF0YS50ZXh0Q29udGVudCA9IGBVViBJbmRleCBpczogJHtkYXkzVVZJbmRleH1gOyBcblxuICAgIGxldCBodW1pZGl0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dC1mb3JlY2FzdC1kYXkzLWh1bWlkaXR5Jyk7XG5cbiAgICBodW1pZGl0eS50ZXh0Q29udGVudCA9IGBIdW1pZGl0eSBMZXZlbHM6ICR7ZGF5M0h1bWlkaXR5fSVgO1xuXG4gICAgbGV0IHdpbmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXQtZm9yZWNhc3QtZGF5LTMtd2luZCcpO1xuXG4gICAgd2luZC50ZXh0Q29udGVudCA9IGBXaW5kIFNwZWVkOiAke2RheTNXaW5kfSBtcGhgO1xuXG59XG5cbi8vIFNvIEkgbGlrZSB3YXZlcyBwcm9qZWN0IGxvb2ssIG5leHQgSSBXaWxsIGZpZ3VyZSBvdXQgYSB3YXkgXG5cbi8vIG5leHQgSSB3aWxsIGdldCB0aGUgMyBkYXkgZm9yZWNhc3QsIFxuXG4vLyBJIGFzc3VtZSBpdCB3b3VsZCBiZSB0aGUgc2FtZSBwcm9jZXNzIGZldGNoIHRoZSBkYXRhIFxuXG4vLyBrZXkgaW50byB0aGUgdmFsdWUgdGhlIGN1cnJlbnQgZm9yZWNhc3QgXG5cbi8vIEkgdGhpbmsgSSBhbHNvIG5lZWQgdG8gd3JpdGUgYSBmdW5jdGlvbiwgXG5cbi8vIHRoYXQgd2lsbCBkaXNwbGF5IHRoZSB0aHJlZSBkYXkgZm9yZWNhc3QsIFxuXG4vLyBwYXNzIHRoZSB3ZWF0aGVyIGRhdGEgdG8gdGhhdCB5b3UgZ290IGZyb20gdGhlIGZldGNoIGRhdGEgZnVuY3Rpb24gXG5cbi8vIHRvIHRoZSBvdGhlciBmdW5jdGlvbiB3aGljaCB3aWxsIGp1c3QgZGlzcGxheSBmb3JlY2FzdCB3ZWFodGVyIFxuXG4vLyBmb3IgMyBkYXlzLCBcblxuLy8gcHJvamVjdCwgMyBkYXkgZm9yZWNhc3QsIFxuXG4vLyB0b2dnbGUgY2VsaXVzIGFuZCBmIFxuXG4vLyBmaW5kIHdheSB0byBjbGVhciBET00gYmVmb3JlIGFkZGluZyBuZXcgdmFsdWVzLCBubyBhZGRpbmcgb24gXG5cbi8vIGEgd2F5IHRvIGltcG9ydCBpY29ucyBhbmQgZ2V0IHRoZSBjb3JyZWN0IHBhdGggXG5cbi8vIGljb25zIHNlZW1zIHRvIHdvcmtpbmchISBcblxuLy8gbWFrZSB0aGUgd2VhdGhlciBkZXNjcmlwdGlvbiBlbGVtZW50cyBhcHBlYXIgd2l0aCB0aGUgRE9NLCBcblxuLy8gaW5zdGVhZCBvZiB0aGUgaHRtbCwgXG5cbi8vIGZpbmQgYSB3YXkgbm93IHRvIGtleSBpbnRvIGFuZCBnZXQgZm9yZWNhc3QgXG5cbi8vIG5leHQgc3RlcCBpcyB0byBrZXkgaW50byBkYXRhLCBhbmQgZ2V0IHRoZSBmb3JlY2FzdCBcblxuLy8ga2V5IGludG8gY2VydGFpbiBkYXlzLCBtYWtlIGEgSFRNTCBjYXJkLCBcblxuLy8gYXBwZW5kIHRoZSBkYXRhIHRvIHRoZSBjYXJkLCBhbG9uZyB3aXRoIGxvZ29zIGZvciB0aGUgd2VhdGhlciwgXG5cbi8vIHRoZW4gaW5zdGVhZCBvZiBIVE1MIE1lc3NhZ2VzLCB1c2UgRE9NIHBsdXMgYXBwZW5kIGRhdGEgXG5cbi8vIG9uY2UgY3VycmVudCBhbmQgMyBkYXkgZm9yZWNhc3QgaXMgc2V0LCBcblxuLy8gZmluZCBhIHdheSBvciB3cml0ZSBhIGZ1bmN0aW9uIHRoYXQgY2FuIGNoYW5nZWQgZiBkYXRhIHRvIGMgXG5cbi8vIHN0eWxlIHVwIGFuZCBkb25lLCBcblxuLy8gV2Uga25vdyB3aGF0IHdlIG5lZWQgdG8gZG8sIGZpcnN0IEkgd291bGQgZ2V0IHRoZSBjb3JyZWN0IFxuXG4vLyBmb3JlY2FzdCBkYXRhIGFuZCBhcHBlbmQgaW4gdGhlIGNvcnJlY3Qgc3BvdCwgXG5cbi8vIHRoZW4gZml4IHRoZSBjdXJyZW50IHdlYXRoZXIgdG8gdXNlIERPTSBkaXNwbGF5ZWQgdGV4dCwgXG5cbi8vIGFsb25nIHdpdGggYXR0YWNoaW5nIHRoZSBpY29uLCBcblxuLy8gc3RhcnQgdGhlcmUsIGZpcnN0IGxldHMgZmluZCB0aGUgY29ycmVjdCBmb3JlY2FzdCBmb3IgdGhlIDMgZGF5LCBcblxuLy8gb2sgbGV0cyBmaXJzdCBnbyB0aGUgSFRNTCwgbmFkIG1ha2UgdGhlIG1hcmt1cCwgXG5cbi8vIHdlIHdpbGwgbmVlZCBhIGNvbnRhaW5lciwgXG5cbi8vIHRoYXQgY2FuIGhvbGQgMyBjYXJkcywgZGlzcGxheWVkIGluIGZsZXggc28gdGhleSBhcmUgaW4gYSByb3csIFxuXG4vLyBhcHBlbmQgdGhlIHZhbHVlcyB0byB0aGUgc3BlY2lmaWMgaW5wdXQgZmllbGRzLCBcblxuLy8gb2sgd2UgZ290IHRoZSBtYXJrdXAgXG5cbi8vIG5vdyBJIHRoaW5rIEkgV291bGQgcGFzcyB0aGUgZGF0YSB0byB0aGUgb3RoZXIgZnVuY3Rpb24sIFxuXG4vLyBvayBvdGhlciBmdW5jdGlvbiBjYW4gYWNjZXB0IHRoZSBkYXRhLCBcblxuLy8gYWRkIHRoZSBwIGVsZW1lbnRzIG9uIGVhY2ggY2FyZCwgYW5kIGFwcGVuZCBkYXRhIGFsb25nIHdpdGggYSBtZXNzYWdlIFxuXG4vLyBwIGVsZW1lbnQgYW5kIGFwcGVuZCB0aGUgZGF0ZSBhbmQgaWNvbiBmaXJzdCBpbiB0aGUgc2FtZSBsaW5lIFxuXG4vLyBtYWtlIGEgbmV3IGZ1bmN0aW9uIGZvciBlYWNoIGZvcmVjYXN0IGRheSBcblxuLy8ganVzdCB0byBtb2R1bGFyaXplIHRoaW5ncyBtb3JlIGFuZCB0byBhdm9pZCBcblxuLy8gaGF2aW5nIG9uZSBmdW5jdGlvbiB0byBhbGwgdGhlIHdvcmsgYW5kIHRoYXQgZnVuY3Rpb24gd2lsbCBcblxuLy8gYmUgdG9vIGJpZywgb25lIGZ1bmN0aW9uIGZvciBlYWNoIGRheSwgXG5cbi8vIHBhc3MgdGhlIGRhdGEgdG8gdGhvc2UgMyBmdW5jdGlvbnMsIFxuXG4vLyBpdHMgb25seSA0IGNhbGxzLCBvbmUgdG8gY3VycmVudCBcblxuLy8gb25lIHRvIGN1cnJlbnQsIGRheTEgMiAzIFxuXG4vLyBvayBub3cgdXNlIGEgZnVuY3Rpb24gdG8gcHJpbnQgdGhlIGRhdGEgZm9yIGRheSAyIGZvcmVjYXN0IFxuXG4vLyB1c2UgYSBkaWZmZXJlbnQgZnVuY3Rpb24gc28gaXQgZG9lcyBub3QgZ2V0IHRvbyBiaWcgXG5cbi8vIGFub3RoZXIgaXNzdWUgaXMgZ2V0dGluZyB0aGUgZGVncmVlcyBzeW1ib2wgdG8gc2hvdywgXG5cbi8vIGFuZCBpZiB0aGUgdXNlciBpbnB1dHMgYW5vdGhlciBzZWFyY2gsIFxuXG4vLyBjbGVhciB0aGUgRE9NIHRvIG1ha2Ugd2F5IGZvciB0aGUgbmV3LiBcblxuLy8gY2hhbmdlIGJhY2tncm91bmQgYmFzZWQgb24gY29uZGl0aW9uIHRleHQgXG5cbi8vIGlmID09PSBzdW5ueSBcblxuLy8gYXBwZW5kIHN1bm55IGJhY2tncm91bmQgcGljdHVyZSwgXG5cbi8vIGlmID09PSByYWlueSBcblxuLy8gYXBwZW5kIHJhaW55IHBpYyBcblxuLy8gSSB0aGluayBldmVyeXRoaW5nIGlzIGdvaW5nIG9rLCBJIHdpbGwgbWFrZSB0aGUgd2VhdGhlciBkYXRhIGZvciB0aGUgbGFzdCBkYXkgb2YgdGhlIGZvcmVjYXN0LCBjb21taXQsIHRoZW4gZml4IHRoZSBodG1sIGFib3ZlIHRvIHVzZSBvbmx5IHRoZSBET00gXG5cbi8vIEkgd2lsbCBmaXggdGhlIGh0bWwgdG8gdXNlIERPTSBPbmx5LCBcblxuLy8gdGhlbiB3b3JrIG9uIGNsZWFyaW5nIHRoZSBET00sIHNvIHZhbHVlcyBkbyBub3QgYWRkIG9udG8gXG5cbi8vIEhUTUwgSXMgc2V0LCBzbyBob3cgZG8gSSBjbGVhciB0aGUgdmFsdWVzIGZyb20gdGhlIERPTSwgXG5cbi8vIGFkZCBuZXcgYnV0IHJlcGxhY2Ugb2xkLCBcblxuLy8gaGF2aW5nIGlzc3VlIGNsZWFyaW5nIHRoZSBET00sIFxuXG4vLyBJIHRob3VnaHQgY2xlYXJuaW5nIGl0IGJlZm9yZSB0aGUgZnVuY3Rpb24gY2FsbCBvciBpbnNpZGUgdGhlIGZ1bmN0aW9udGhhdCB3YXMgY2FsbGVkIFxuXG4vLyB3aGVyZSBjYW4gSSBjbGVhciB0aGUgRE9NLCBcblxuLy8gaXQgbmVlZHMgdG8gYmUgaW4gdGhlIHJpZ2h0IHNwb3QsIFxuXG4vLyBjbGVhciB0aGUgRE9NIG9uY2UgdGhlIHNlYXJjaCBidG4gaXMgcHJlc3NlZCwgXG5cbi8vIGNsZWFyIG9sZCBkYXRhLCBhZGQgdGhlIG5ldywgXG5cbi8vIE9LIEkgd2FzIGFibGUgdG8gZmlndXJlIG91dCB0aGUgZG9tIGlzc3VlLCBpdCB3YXMgbW9yZSB0aGUgaWNvbnMgdGhhdCBJIGhhZCB0byByZXBsYWNlLCBpbnN0ZWFkIG9mIGNsZWFybmluZyB0aGUgZG9tIGVhY2ggdGltZSwgXG5cbi8vIHNldHRpbmcgdGhlIHRleHQgQ29udGVudCBvZiB0aGUgZWxlbWVudCwgdG8gZW1wdHkgd2lsbCBtYWtlIHdheSBmb3IgdGhlIG5ldyB2YWx1ZS9pY29uIFxuXG4vLyBuZXh0IEkgbmVlZCB0byBmaWd1cmUgb3V0IGhvdyB0byB3cml0ZSBhIGZ1bmN0aW9uIG9yIHBlcmZvcm0gdGhlIGxvZ2ljIHRoYXQgd291bGQgYWxsb3cgbWUgdG8gY2hhbmdlIHRoZSBmIGRhdGEgdG8gYyBkYXRhIFxuXG4vLyBmaXJzdCBsb2NhdGUgYWxsIHZhbHVlcyB0aGF0IHVzZSBmLCBcblxuLy8ganVzdCBjaGFuZ2UgdGhlIHRlbXAuIHRoZXJlIGlzIG9uZSBpbiBjdXJyZW50IHdlYXRoZXIgYW5kIGRheXMsIGVhY2ggZGF5IHdpbGwgbmVlZCB0byBoaWdoIGFuZCBsb3cgdGVtcCBjaGFuZ2VkLCBcblxuLy8gSSBhbSBjb25mdXNlZCBvbiBob3cgdG8gYXBwcm9hY2ggdGhpcywgXG5cbi8vIGEgZnVuY3Rpb24/IFxuXG4vLyBvbmNlIHRoZSBidG4gaXMgY2xpY2tlZCwgZ3JhYiB0aGUgdmFsdWVzLCBncmFiIGFsbCB0aGUgaW5wdXRzL2ZpZWxkcywgY2FsbCBhbm90aGVyIGZ1bmN0aW9uLCB3aGljaCB3aWxsIGludGFrZSB0aGUgY3VycmVudCB3ZWF0aGVyLCBrZXkgaW50byB2YWx1ZXMsIFxuXG4vLyB0aGVuIGRpc3BsYXkgdGhvc2UgdmFsdWVzIHRvIHRoZSBET00/ICIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogYm9keSB7IFxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiA7XFxufSAqL1xcbi8qICogeyBcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgcGFkZGluZzogMDsgXFxuICAgIG1hcmdpbjogMDtcXG59ICAqL1xcbi8qIGJvZHkgeyBcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5OztcXG4gICAgYmFja2dyb3VuZDogdXJsKC4vZWFydGgtYmFja2dyb3VuZC5qcGcpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbn0gKi9cXG4vKiAuaGVhZGVyLWNvbnRhaW5lciB7IFxcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDEydmg7XFxuICBnYXA6IDFlbTsgXFxuXFxufSAgKi9cXG4vKiAuaDEtaGVhZGVyLXN0eWxlcyB7IFxcbiAgICBjb2xvcjogd2hpdGU7IFxcbiAgICBmb250LXNpemU6IDIuOHJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufSAqL1xcbi8qIC5zZWFyY2gtYmFyLWVsZW1lbnRzLWNvbnRhaW5lciB7IFxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICBnYXA6IDFlbTsgXFxuXFxufSAgKi9cXG4vKiAuc2VhcmNoLWJhci1lbGVtZW50cy1jb250YWluZXIgPiBpbnB1dCB7IFxcbiAgICBmb250LXNpemU6IDFyZW07XFxufSBcXG5cXG4uc2VhcmNoLWJhci1lbGVtZW50cy1jb250YWluZXIgPiBidXR0b24geyBcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgY29sb3I6IGJsYWNrOyBcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn0gICovXFxuLyogI2N1cnJlbnQtd2VhdGhlci1kYXRhID4gaDN7IFxcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn0gICAqL1xcbi8qICNjdXJyZW50LXdlYXRoZXItZGF0YSB7IFxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufSAqL1xcbi8qICNjdXJyZW50LXdlYXRoZXItY29udGFpbmVyIHsgXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDQwdmg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59ICAqL1xcbi8qICNmb3JlY2FzdC0zLWRheS10aXRsZSB7IFxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICAgIG1hcmdpbi10b3A6IDAuNWVtO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufSAqL1xcbi8qICNmb3JlY2FzdC1kYXktMS1jYXJkLCBcXG4jZm9yZWNhc3QtZGF5LTItY2FyZCwgXFxuI2ZvcmVjYXN0LWRheS0zLWNhcmQgeyBcXG4gICAgaGVpZ2h0OiA0NXZoO1xcbiAgICB3aWR0aDogMjV2dztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIG9wYWNpdHk6IDAuNztcXG4gICAgYm9yZGVyLXJhZGl1czogMTAlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGNvbG9yOiB3aGl0ZTsgXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn0gICovXFxuLyogI2ZvcmVjYXN0LWRheXMtY29udGFpbmVyIHsgXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDJlbTsgXFxuICAgIG1hcmdpbi10b3A6IDAuNWVtO1xcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXG59ICovXFxuLyogI2ZvcmVjYXN0LWNvbnRhaW5lciB7IFxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcblxcbn0gKi9cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOztHQUFBO0FBSUE7Ozs7SUFBQTtBQU1BOzs7O0dBQUE7QUFNQTs7Ozs7O0lBQUE7QUFRQTs7OztHQUFBO0FBTUE7Ozs7O0lBQUE7QUFTQTs7Ozs7Ozs7OztJQUFBO0FBWUE7OztLQUFBO0FBS0E7Ozs7O0dBQUE7QUFPQTs7Ozs7SUFBQTtBQU9BOzs7Ozs7O0dBQUE7QUFVQTs7Ozs7Ozs7Ozs7SUFBQTtBQWFBOzs7Ozs7R0FBQTtBQVNBOzs7Ozs7R0FBQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBib2R5IHsgXFxuICAgIGJhY2tncm91bmQtY29sb3I6IDtcXG59ICovXFxuXFxuLyogKiB7IFxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBwYWRkaW5nOiAwOyBcXG4gICAgbWFyZ2luOiAwO1xcbn0gICovXFxuXFxuLyogYm9keSB7IFxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7O1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoLi9lYXJ0aC1iYWNrZ3JvdW5kLmpwZyk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxufSAqL1xcblxcbi8qIC5oZWFkZXItY29udGFpbmVyIHsgXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGhlaWdodDogMTJ2aDtcXG4gIGdhcDogMWVtOyBcXG5cXG59ICAqL1xcblxcbi8qIC5oMS1oZWFkZXItc3R5bGVzIHsgXFxuICAgIGNvbG9yOiB3aGl0ZTsgXFxuICAgIGZvbnQtc2l6ZTogMi44cmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59ICovXFxuXFxuLyogLnNlYXJjaC1iYXItZWxlbWVudHMtY29udGFpbmVyIHsgXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICAgIGdhcDogMWVtOyBcXG4gICAgXFxufSAgKi9cXG5cXG5cXG5cXG4vKiAuc2VhcmNoLWJhci1lbGVtZW50cy1jb250YWluZXIgPiBpbnB1dCB7IFxcbiAgICBmb250LXNpemU6IDFyZW07XFxufSBcXG5cXG4uc2VhcmNoLWJhci1lbGVtZW50cy1jb250YWluZXIgPiBidXR0b24geyBcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgY29sb3I6IGJsYWNrOyBcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn0gICovXFxuXFxuLyogI2N1cnJlbnQtd2VhdGhlci1kYXRhID4gaDN7IFxcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn0gICAqL1xcblxcbi8qICNjdXJyZW50LXdlYXRoZXItZGF0YSB7IFxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufSAqL1xcblxcbi8qICNjdXJyZW50LXdlYXRoZXItY29udGFpbmVyIHsgXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDQwdmg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59ICAqL1xcblxcbi8qICNmb3JlY2FzdC0zLWRheS10aXRsZSB7IFxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICAgIG1hcmdpbi10b3A6IDAuNWVtO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufSAqL1xcblxcblxcbi8qICNmb3JlY2FzdC1kYXktMS1jYXJkLCBcXG4jZm9yZWNhc3QtZGF5LTItY2FyZCwgXFxuI2ZvcmVjYXN0LWRheS0zLWNhcmQgeyBcXG4gICAgaGVpZ2h0OiA0NXZoO1xcbiAgICB3aWR0aDogMjV2dztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIG9wYWNpdHk6IDAuNztcXG4gICAgYm9yZGVyLXJhZGl1czogMTAlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGNvbG9yOiB3aGl0ZTsgXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn0gICovXFxuXFxuLyogI2ZvcmVjYXN0LWRheXMtY29udGFpbmVyIHsgXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDJlbTsgXFxuICAgIG1hcmdpbi10b3A6IDAuNWVtO1xcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXG59ICovXFxuXFxuXFxuLyogI2ZvcmVjYXN0LWNvbnRhaW5lciB7IFxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcblxcbn0gKi9cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vZWFydGgtYmFja2dyb3VuZC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL3BleGVscy1waGlsaXBwZS1kb25uLTEyNTc4NjAuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5oMS1oZWFkZXItc3R5bGVzIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuKiB7XFxuICBmb250LWZhbWlseTogXFxcIkNvdXJpZXIgTmV3XFxcIiwgQ291cmllciwgbW9ub3NwYWNlO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxufVxcblxcbi5oZWFkZXItY29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgaGVpZ2h0OiAxMnZoO1xcbiAgZ2FwOiAxZW07XFxufVxcblxcbi5oMS1oZWFkZXItc3R5bGVzIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMi44cmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5zZWFyY2gtYmFyLWVsZW1lbnRzLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gIGdhcDogMWVtO1xcbn1cXG4uc2VhcmNoLWJhci1lbGVtZW50cy1jb250YWluZXIgaW5wdXQge1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG4uc2VhcmNoLWJhci1lbGVtZW50cy1jb250YWluZXIgYnV0dG9uIHtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuI2N1cnJlbnQtd2VhdGhlci1kYXRhIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuI2N1cnJlbnQtd2VhdGhlci1kYXRhIGgzIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG4jY3VycmVudC13ZWF0aGVyLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBoZWlnaHQ6IDQwdmg7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbiNmb3JlY2FzdC0zLWRheS10aXRsZSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICBtYXJnaW4tdG9wOiAwLjVlbTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuI2ZvcmVjYXN0LWRheS0xLWNhcmQsXFxuI2ZvcmVjYXN0LWRheS0yLWNhcmQsXFxuI2ZvcmVjYXN0LWRheS0zLWNhcmQge1xcbiAgaGVpZ2h0OiA0NXZoO1xcbiAgd2lkdGg6IDI1dnc7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIG9wYWNpdHk6IDAuNztcXG4gIGJvcmRlci1yYWRpdXM6IDEwJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4jZm9yZWNhc3QtZGF5cy1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAyZW07XFxuICBtYXJnaW4tdG9wOiAwLjVlbTtcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcXG4gIGJvZHkge1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGF1dG87XFxuICB9XFxuICAjZm9yZWNhc3QtZGF5cy1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG4gICNmb3JlY2FzdC1kYXktMS1jYXJkLFxcbiAgI2ZvcmVjYXN0LWRheS0yLWNhcmQsXFxuICAjZm9yZWNhc3QtZGF5LTMtY2FyZCB7XFxuICAgIGhlaWdodDogNDB2aDtcXG4gICAgd2lkdGg6IDcwdnc7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xcbiAgICBmb250LXNpemU6IDAuOXJlbTtcXG4gIH1cXG4gIC5zZWFyY2gtYmFyLWVsZW1lbnRzLWNvbnRhaW5lciA+IGlucHV0IHtcXG4gICAgd2lkdGg6IDE1MHB4O1xcbiAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBdUJBO0VBQ0UsWUF4Qlc7QUFFYjs7QUF5QkE7RUFDRSw4Q0FBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUF0QkY7O0FBeUJBO0VBQ0UsMkJBQUE7RUFDQSxtREFBQTtFQUNBLHNCQUFBO0FBdEJGOztBQXlCQTtFQWxDRSx1QkFMWTtFQU1aLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFFBQUE7QUFhRjs7QUFzQkE7RUFDRSxZQTNDYztFQTRDZCxpQkEzQ1c7RUE0Q1gsaUJBQUE7QUFuQkY7O0FBNkJBO0VBRUUsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsUUFBQTtBQTNCRjtBQTZCRTtFQUNFLGVBQUE7QUEzQko7QUE4QkU7RUFDRSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtBQTVCSjs7QUFpQ0E7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBOUJGO0FBZ0NFO0VBQ0UsZUFBQTtFQUNBLDBCQUFBO0FBOUJKOztBQWtDQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBL0JGOztBQWtDQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLDBCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FBL0JGOztBQWtDQTs7O0VBNUZFLFlBQUE7RUFDRSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQWdFSjs7QUE0QkE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxRQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQXpCRjs7QUFvQ0E7RUFFRTtJQUNFLG1EQUFBO0lBQ0EscUJBQUE7RUFsQ0Y7RUFxQ0E7SUFDRSxhQUFBO0lBQ0Esc0JBQUE7SUFDQSx1QkFBQTtJQUNBLG1CQUFBO0VBbkNGO0VBc0NGOzs7SUFHRSxZQUFBO0lBQ0EsV0FBQTtJQUNBLHVCQUFBO0lBQ0EsaUJBQUE7RUFwQ0E7RUF1Q0Y7SUFDRSxZQUFBO0VBckNBO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiJHRpdGxlQ29sb3I6IHdoaXRlOyBcXG4kaGVhZGVyQ29sb3I6IGJsYWNrO1xcbiRoMUhlYWRlckNvbG9yOiB3aGl0ZTtcXG4kaDFGb250U2l6ZTogMi44cmVtO1xcblxcbkBtaXhpbiBoZWFkZXJDb250YWluZXJTdHlsZXMoKSB7IFxcbiAgYmFja2dyb3VuZC1jb2xvcjogJGhlYWRlckNvbG9yO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgaGVpZ2h0OiAxMnZoO1xcbiAgZ2FwOiAxZW07IFxcbn0gXFxuXFxuQG1peGluIGZvcmVjYXN0Q2FyZHMoKSB7IFxcbiAgaGVpZ2h0OiA0NXZoO1xcbiAgICB3aWR0aDogMjV2dztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIG9wYWNpdHk6IDAuNztcXG4gICAgYm9yZGVyLXJhZGl1czogMTAlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGNvbG9yOiB3aGl0ZTsgXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uaDEtaGVhZGVyLXN0eWxlcyB7IFxcbiAgY29sb3I6ICR0aXRsZUNvbG9yOyBcXG59IFxcblxcbiogeyBcXG4gIGZvbnQtZmFtaWx5OidDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBwYWRkaW5nOiAwOyBcXG4gIG1hcmdpbjogMDtcXG59IFxcblxcbmJvZHkgeyBcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTs7XFxuICBiYWNrZ3JvdW5kOiB1cmwoLi9lYXJ0aC1iYWNrZ3JvdW5kLmpwZyk7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbn0gIFxcblxcbi5oZWFkZXItY29udGFpbmVyIHsgXFxuICBAaW5jbHVkZSBoZWFkZXJDb250YWluZXJTdHlsZXM7XFxufSBcXG5cXG4uaDEtaGVhZGVyLXN0eWxlcyB7IFxcbiAgY29sb3I6ICRoMUhlYWRlckNvbG9yOyBcXG4gIGZvbnQtc2l6ZTogJGgxRm9udFNpemU7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59IFxcblxcbi8vIC5zZWFyY2gtYmFyLWVsZW1lbnRzLWNvbnRhaW5lciB7IFxcbi8vICAgZGlzcGxheTogZmxleDtcXG4vLyAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuLy8gICBnYXA6IDFlbTsgXFxuICBcXG4vLyB9IFxcblxcbi5zZWFyY2gtYmFyLWVsZW1lbnRzLWNvbnRhaW5lciB7IFxcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICBnYXA6IDFlbTsgXFxuXFxuICBpbnB1dCB7IFxcbiAgICBmb250LXNpemU6IDFyZW07XFxuICB9IFxcblxcbiAgYnV0dG9uIHsgXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGNvbG9yOiBibGFjazsgXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gIH1cXG5cXG59IFxcblxcbiNjdXJyZW50LXdlYXRoZXItZGF0YSB7IFxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgY29sb3I6IHdoaXRlOyBcXG5cXG4gIGgzIHsgXFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICB9XFxufVxcblxcbiNjdXJyZW50LXdlYXRoZXItY29udGFpbmVyIHsgXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBoZWlnaHQ6IDQwdmg7XFxuICBjb2xvcjogd2hpdGU7XFxufSBcXG5cXG4jZm9yZWNhc3QtMy1kYXktdGl0bGUgeyBcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gIG1hcmdpbi10b3A6IDAuNWVtO1xcbiAgY29sb3I6IHdoaXRlO1xcbn0gIFxcblxcbiNmb3JlY2FzdC1kYXktMS1jYXJkLCBcXG4jZm9yZWNhc3QtZGF5LTItY2FyZCwgXFxuI2ZvcmVjYXN0LWRheS0zLWNhcmQgeyBcXG4gIEBpbmNsdWRlIGZvcmVjYXN0Q2FyZHM7XFxufSAgXFxuXFxuXFxuI2ZvcmVjYXN0LWRheXMtY29udGFpbmVyIHsgXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDJlbTsgXFxuICBtYXJnaW4tdG9wOiAwLjVlbTtcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcbn1cXG5cXG4vLyBzYXNzIG1lZGlhIHF1ZXJpZXMsIFxcblxcbi8vIGluIG9yZGVyIHRvIGltcGxlbWVudCBhIG1vYmlsZSB2ZXJzaW9uLCBnZXQgdGhlIGxheW91dCBvZiB0aGUgcGFnZSBmaXJzdCwgXFxuXFxuLy8gaW5zcGVjdCB3aXRoIGRldiB0b29scyBhbmQgaGFuZGxlIG9uZSBzZWN0aW9uIGF0IGEgdGltZSwgXFxuXFxuLy8gdHJ5IGZpcnN0IHRoZSAzIGRheSBmb3JlY2FzdCBjb250YWluZXIsIFxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkgeyBcXG5cXG4gIGJvZHkgeyBcXG4gICAgYmFja2dyb3VuZDogdXJsKC4vcGV4ZWxzLXBoaWxpcHBlLWRvbm4tMTI1Nzg2MC5qcGcpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGF1dG87XFxuICB9XFxuXFxuICAjZm9yZWNhc3QtZGF5cy1jb250YWluZXIgeyBcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9IFxcblxcbiNmb3JlY2FzdC1kYXktMS1jYXJkLCBcXG4jZm9yZWNhc3QtZGF5LTItY2FyZCwgXFxuI2ZvcmVjYXN0LWRheS0zLWNhcmQgeyBcXG4gIGhlaWdodDogNDB2aDsgXFxuICB3aWR0aDogNzB2dztcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlOyBcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcbn1cXG5cXG4uc2VhcmNoLWJhci1lbGVtZW50cy1jb250YWluZXIgPiBpbnB1dCB7IFxcbiAgd2lkdGg6IDE1MHB4O1xcbn1cXG5cXG59IFxcblxcblxcblxcbi8vIEBtaXhpbiBmb3JlY2FzdENhcmRzKCkgeyBcXG4vLyAgIGhlaWdodDogNDV2aDtcXG4vLyAgIHdpZHRoOiAyNXZ3O1xcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuLy8gICBvcGFjaXR5OiAwLjc7XFxuLy8gICBib3JkZXItcmFkaXVzOiAxMCU7XFxuLy8gICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuLy8gICBjb2xvcjogd2hpdGU7IFxcbi8vICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuLy8gfSBcIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07Il0sIm5hbWVzIjpbInNlYXJjaEJveCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzZWFyY2hCdG4iLCJ3ZWF0aGVyQ29udGFpbmVyIiwic3RvcmVkV2VhdGhlckRhdGEiLCJmZXRjaERhdGEiLCJpbnB1dCIsImNpdHlEYXRhIiwiY29uc29sZSIsImxvZyIsImdldERhdGEiLCJmZXRjaCIsImpzb25EYXRhIiwianNvbiIsImN1cnJlbnRXZWF0aGVyRGF0YSIsImRpc3BsYXlDdXJyZW50V2VhdGhlciIsImFkZFdlYXRoZXJGb3JlY2FzdDEiLCJhZGRXZWF0aGVyRm9yZWNhc3QyIiwiYWRkV2VhdGhlckZvcmVjYXN0MyIsIndlYXRoZXIiLCJjdXJyZW50V2VhdGhlckljb24iLCJjdXJyZW50Rm9yZWNhc3QiLCJ0ZXh0Q29udGVudCIsIndlYXRoZXJJY29uIiwiSW1hZ2UiLCJzcmMiLCJjdXJyZW50IiwiY29uZGl0aW9uIiwiaWNvbiIsImxvY2F0aW9uRGF0YSIsImxvY2F0aW9uIiwibmFtZSIsIndlYXRoZXJEZXNjcmlwdGlvbkRhdGEiLCJ0ZXh0IiwiY3VycmVudFdlYXRoZXJOdW1iZXJEYXRhIiwidGVtcF9mIiwid2luZERhdGEiLCJ3aW5kX21waCIsIndpbmREaXJlY3Rpb24iLCJ3aW5kX2RpciIsInJhaW5JbmNoZXMiLCJwcmVjaXBfaW4iLCJodW1pZGl0eUxldmVsIiwiaHVtaWRpdHkiLCJuZXdJbWciLCJhcHBlbmRDaGlsZCIsImN1cnJlbnRXZWF0aGVyTG9jYXRpb25UZXh0IiwiY3VycmVudFdlYXRoZXJEZXNjcmlwdGlvblRleHQiLCJjdXJyZW50V2VhdGhlclRlbXBEYXRhIiwiY3VycmVudFdlYXRoZXJXaW5kRGF0YSIsImN1cnJlbnRXZWF0aGVyV2luZERpcmVjdGlvbiIsImN1cnJlbnRXZWF0aGVyUmFpbiIsImN1cnJlbnRIdW1pZGl0eUxldmVsIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJpbnB1dFZhbHVlIiwidmFsdWUiLCJjZWxjaXVzQnRuIiwiY3VycmVudENlbGNpdXNUZW1wIiwidGVtcF9jIiwiZGF5MUhpZ2hUZW1wIiwiZm9yZWNhc3QiLCJmb3JlY2FzdGRheSIsImRheSIsIm1heHRlbXBfYyIsImRheTFMb3dUZW1wIiwibWludGVtcF9jIiwiaGlnaExvd1RlbXBEYXRhIiwiZGF5MkhpZ2hUZW1wIiwiZGF5Mkxvd1RlbXAiLCJoaWdoTG93VGVtcERhdGFEYXkyIiwiZGF5M0hpZ2hUZW1wIiwiZGF5M0xvd1RlbXAiLCJoaWdoTG93VGVtcERhdGFEYXkzIiwiZkJ0biIsImN1cnJlbnRGVGVtcCIsIm1heHRlbXBfZiIsIm1pbnRlbXBfZiIsImZvcmVjYXN0RGF0YSIsImlucHV0Rm9ySW1nRGF5MSIsImRheTFEYXRlIiwiZGF0ZSIsImRheTFJY29uIiwiY2hhbmNlT2ZSYWluIiwiZGFpbHlfY2hhbmNlX29mX3JhaW4iLCJ1dkluZGV4IiwidXYiLCJhdmdodW1pZGl0eSIsIndpbmQiLCJtYXh3aW5kX21waCIsImFwcGVuZCIsImRhdGVBbmRJY29uRGF0YSIsImNoYW5jZU9mUmFpbkRhdGEiLCJ1dkluZGV4RGF0YSIsImh1bWlkaXR5RGF0YSIsImZvcmVjYXN0RGF0YTIiLCJpY29uRGF0YSIsImRheTJEYXRlIiwiZGF5Mkljb25JbWciLCJkYXkyQ2hhbmNlT2ZSYWluIiwiZGF5MlVWSW5kZXgiLCJkYXkySHVtaWRpdHkiLCJkYXkyV2luZFNwZWVkIiwiZGF0ZURhdGEiLCJmb3JlY2FzdERhdGEzIiwiZGF5M0RhdGUiLCJkYXkzSW1nSWNvbiIsImRheTNSYWluQ2hhbmNlIiwiZGF5M1VWSW5kZXgiLCJkYXkzSHVtaWRpdHkiLCJkYXkzV2luZCJdLCJzb3VyY2VSb290IjoiIn0=