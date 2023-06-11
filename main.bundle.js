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
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".h1-header-styles {\n  color: white;\n}\n\n* {\n  font-family: \"Courier New\", Courier, monospace;\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\nbody {\n  background-color: lightgrey;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-size: cover;\n}\n\n.header-container {\n  background-color: black;\n  text-align: center;\n  height: 12vh;\n  gap: 1em;\n}\n\n.h1-header-styles {\n  color: white;\n  font-size: 2.8rem;\n  font-weight: bold;\n}\n\n.search-bar-elements-container {\n  display: flex;\n  justify-content: flex-end;\n  gap: 1em;\n}\n.search-bar-elements-container input {\n  font-size: 1rem;\n}\n.search-bar-elements-container button {\n  font-size: 1rem;\n  background-color: white;\n  color: black;\n  border: 2px solid black;\n  font-weight: bold;\n}\n\n#current-weather-data {\n  text-align: center;\n  font-size: 1.2rem;\n  font-weight: bolder;\n  color: white;\n}\n#current-weather-data h3 {\n  font-size: 2rem;\n  text-decoration: underline;\n}\n\n#current-weather-container {\n  display: flex;\n  justify-content: center;\n  height: 40vh;\n  color: white;\n}\n\n#forecast-3-day-title {\n  text-align: center;\n  font-size: 1.3rem;\n  font-weight: bold;\n  text-decoration: underline;\n  margin-top: 0.5em;\n  color: white;\n}\n\n#forecast-day-1-card,\n#forecast-day-2-card,\n#forecast-day-3-card {\n  height: 45vh;\n  width: 25vw;\n  background-color: black;\n  opacity: 0.7;\n  border-radius: 10%;\n  text-align: center;\n  color: white;\n  font-weight: bold;\n}\n\n#forecast-days-container {\n  display: flex;\n  justify-content: center;\n  gap: 2em;\n  margin-top: 0.5em;\n  font-size: 1.1rem;\n}", "",{"version":3,"sources":["webpack://./src/styles.scss"],"names":[],"mappings":"AAuBA;EACE,YAxBW;AAEb;;AAyBA;EACE,8CAAA;EACA,sBAAA;EACA,UAAA;EACA,SAAA;AAtBF;;AAyBA;EACE,2BAAA;EACA,mDAAA;EACA,sBAAA;AAtBF;;AAyBA;EAlCE,uBALY;EAMZ,kBAAA;EACA,YAAA;EACA,QAAA;AAaF;;AAsBA;EACE,YA3Cc;EA4Cd,iBA3CW;EA4CX,iBAAA;AAnBF;;AA6BA;EAEE,aAAA;EACA,yBAAA;EACA,QAAA;AA3BF;AA6BE;EACE,eAAA;AA3BJ;AA8BE;EACE,eAAA;EACA,uBAAA;EACA,YAAA;EACA,uBAAA;EACA,iBAAA;AA5BJ;;AAiCA;EACE,kBAAA;EACA,iBAAA;EACA,mBAAA;EACA,YAAA;AA9BF;AAgCE;EACE,eAAA;EACA,0BAAA;AA9BJ;;AAkCA;EACE,aAAA;EACA,uBAAA;EACA,YAAA;EACA,YAAA;AA/BF;;AAkCA;EACE,kBAAA;EACA,iBAAA;EACA,iBAAA;EACA,0BAAA;EACA,iBAAA;EACA,YAAA;AA/BF;;AAkCA;;;EA5FE,YAAA;EACE,WAAA;EACA,uBAAA;EACA,YAAA;EACA,kBAAA;EACA,kBAAA;EACA,YAAA;EACA,iBAAA;AAgEJ;;AA4BA;EACE,aAAA;EACA,uBAAA;EACA,QAAA;EACA,iBAAA;EACA,iBAAA;AAzBF","sourcesContent":["$titleColor: white; \n$headerColor: black;\n$h1HeaderColor: white;\n$h1FontSize: 2.8rem;\n\n@mixin headerContainerStyles() { \n  background-color: $headerColor;\n  text-align: center;\n  height: 12vh;\n  gap: 1em; \n} \n\n@mixin forecastCards() { \n  height: 45vh;\n    width: 25vw;\n    background-color: black;\n    opacity: 0.7;\n    border-radius: 10%;\n    text-align: center;\n    color: white; \n    font-weight: bold;\n}\n\n.h1-header-styles { \n  color: $titleColor; \n} \n\n* { \n  font-family:'Courier New', Courier, monospace;\n  box-sizing: border-box;\n  padding: 0; \n  margin: 0;\n} \n\nbody { \n  background-color: lightgrey;;\n  background: url(./earth-background.jpg);\n  background-size: cover;\n}  \n\n.header-container { \n  @include headerContainerStyles;\n} \n\n.h1-header-styles { \n  color: $h1HeaderColor; \n  font-size: $h1FontSize;\n  font-weight: bold;\n} \n\n// .search-bar-elements-container { \n//   display: flex;\n//   justify-content: flex-end;\n//   gap: 1em; \n  \n// } \n\n.search-bar-elements-container { \n\n  display: flex;\n  justify-content: flex-end;\n  gap: 1em; \n\n  input { \n    font-size: 1rem;\n  } \n\n  button { \n    font-size: 1rem;\n    background-color: white;\n    color: black; \n    border: 2px solid black;\n    font-weight: bold;\n  }\n\n} \n\n#current-weather-data { \n  text-align: center;\n  font-size: 1.2rem;\n  font-weight: bolder;\n  color: white; \n\n  h3 { \n    font-size: 2rem;\n    text-decoration: underline;\n  }\n}\n\n#current-weather-container { \n  display: flex;\n  justify-content: center;\n  height: 40vh;\n  color: white;\n} \n\n#forecast-3-day-title { \n  text-align: center;\n  font-size: 1.3rem;\n  font-weight: bold;\n  text-decoration: underline;\n  margin-top: 0.5em;\n  color: white;\n}  \n\n#forecast-day-1-card, \n#forecast-day-2-card, \n#forecast-day-3-card { \n  @include forecastCards;\n}  \n\n\n#forecast-days-container { \n  display: flex;\n  justify-content: center;\n  gap: 2em; \n  margin-top: 0.5em;\n  font-size: 1.1rem;\n}\n\n"],"sourceRoot":""}]);
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

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Y0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsaUZBQWlGO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3N0eWxlcy5zY3NzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3N0eWxlLmNzcz9lZmJmIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvc3R5bGVzLnNjc3M/YTYwOSIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCAnLi9zdHlsZXMuc2Nzcyc7XG5cbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG5pbXBvcnQgJy4vc3R5bGVzLnNjc3MnO1xuXG4vLyBhZGRlZCBwaG90byBjcmVkaXQsIHNvIG5leHQgSSB3aWxsIHVwZGF0ZSBpbnB1dCB2YWx1ZXMgdG8gdXNlIGh1bWlkaXR5IGFuZCB3aW5kIGRpcmVjdGlvbiwgXG5cbi8vIFxuXG5cblxuLy8gT2sgc28gZ2ggcGFnZXMgaXMgd29ya2luZywgc2FzcyBpcyB1cCBhbmQgcnVubmluZyEgSGVsbCB5ZXMsIFxuXG4vLyBuZXh0IEkgd2lsbCBzdHlsZSB3aXRoIHNhc3MsIGNsZWFuIHVwIHRoZSBzdHlsaW5nLCBpbXBvcnQgc29tZSBmb250cywgXG5cbi8vIGZpeCB0aGUgY3VycmVudCB0ZW1wIHZzIGZlZWxzIGxpa2UgdGVtcCBjaGFuZ2UsIFxuXG4vLyB0aGVuIGNhbGwgaXQgYSBkYXksIFxuXG4vLyBzYXNzLCB1c2UgZm9udHMsIHNlZSBpZiB5b3UgY2FuIHRyYW5zZmVyIHRoZSBjc3MgeW91IHdyb3RlIGludG8gc2FzcywgdXNlIHZhcmlhYmxlcywgbWl4aW5zLCBuZXN0aW5nIFxuXG4vLyBmb250cywgd2VhdGhlciB0eXBlIGZvbnRcblxuLy8gaW4gb3JkZXIgdG8gdXNlIGVhcnRoIGJhY2tncm91bmQgaW1nIHlvdSBtdXN0IGltcG9ydCBpdCBhbmQgc2VlIGlmIHlvdSBjYW4gdXNlIGl0IGluIGNzcyBcblxuLy8gYnV0IGluIGpzLCBcblxuLy8gcXVlcnkgc2VsZWN0b3IgdGhlIGJvZHksIHNlbGVjdCBlbGVtZW50LCBcblxuLy8gYWRkIHRoZSBpbWcgYXMgYSBiYWNrZ3JvdW5kLCBhbmQgc2V0IHRoZSBpbXBvcnRlZCBpbWcgYXMgdGhlIHNyYy4gXG5cbi8vIHdoeSBmb2VzIGYgY2hhbmdlIHdoZW4gSSBlbnRlciBpdCBhZ2Fpbj8gQ2hlY2sgdG8gbWFrZSBzdXJlIHlvdSBhcmUgbG9nZ2luZyBjb3JyZWN0IGRheXMgXG5cbi8vIGNoYW5nZSBpdCB0byBmZWVscyBsaWtlIGluc3RlYWQgb2YgY3VycmVudCB0ZW1wIFxuXG4vLyBPSyBzbyB0b2RheSwgSSBMaWtlIHRoZSBzdHlsaW5nIGZvciB0aGUgYmFja2dyb3VuZCwgbW92ZSB0aGUgdGhlIGltZ3MgaW50byB0aGUgc3JjIGRpcmVjdG9yeSwgXG5cbi8vIGFuZCB1c2UgZ2ggcGFnZXMsIHRvIHNlZSBpZiB0aGUgaW1hZ2VzIHJlbmRlciwgXG5cbi8vIGFsc28gY2hhbmdlIHRoZSBjdXJyZW50IHdlYXRoZXIsIHRvIHVzZSBjdXJyZW50IGluc3RlYWQgb2YgZmVlbHMgbGlrZSwgZG91YmxlIGNoZWNrIHdpdGggdGhhdCwgXG5cbi8vIGxhc3QgdHJ5IHRvIGluc3RhbGwgc2FzcywgbWF5YmUgYXNrIGlmIGl0IGlzIG5lY2Vzc2FyeSB0byB1c2UgdHdvIEpTIGZpbGVzLCBcblxuLy8gYnJ1c2ggdXAgb24gdGhlIHN0eWxpbmcgdG9vLCBtYXliZSB1c2UgRE9NIHN0eWxpbmcgZm9yIHRoZSAzIGRheSBmb3JlY2FzdCBib3hlcywgb25jZSBkYXRhIGlzIGVudGVyZWQsIHRoZW4gYXBwbHkgdGhlIGJhY2tncm91bmQgc3R5bGVzLCBcblxuLy8gdGVzdCBnaCBwYWdlcywgXG5cbi8vIGhvdyBjYW4gSSBkaXNwbGF5IGFsbCBjb250ZW50LCB3ZWJwYWNrIGlzc3VlIG9mIGdoIHBhZ2VzIG5vdCBkaXNwbGF5aW5nIHRoZSBjb250ZW50LCBpdCBvbmx5IGRpc3BsYXlzIHRoZSBodG1sLiBcblxubGV0IHNlYXJjaEJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gtYm94Jyk7IFxuXG5sZXQgc2VhcmNoQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaC1idG4nKTsgXG5cbi8vIGN1cnJlbnQgd2VhdGhlciBkYXRhIHN0b3JlZCBpbiBoZXJlLCBcbmxldCB3ZWF0aGVyQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1cnJlbnQtd2VhdGhlci1jb250YWluZXInKTsgXG5cbmxldCBzdG9yZWRXZWF0aGVyRGF0YSBcblxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hEYXRhKGlucHV0KSB7IFxuXG5cbiAgICBsZXQgY2l0eURhdGEgPSBpbnB1dDsgXG4gICAgXG4gICAgY29uc29sZS5sb2coJ1RoZSBkYXRhIHBhc3NlZCBpbiBpczogJyArIGNpdHlEYXRhKTtcbiAgICBcbiAgICBjb25zdCBnZXREYXRhID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PTQ1NDY0ZGEzODg5MjQ1MGQ5NWYxMDQzMzIzMDUwNiAmcT0ke2NpdHlEYXRhfSZkYXlzPTUmYXFpPW5vJmFsZXJ0cz1ub2ApO1xuXG4gICAgY29uc3QganNvbkRhdGEgPSBhd2FpdCBnZXREYXRhLmpzb24oKTtcbiAgICBcbiAgICBsZXQgY3VycmVudFdlYXRoZXJEYXRhID0ganNvbkRhdGE7XG4gICAgXG4gICAgc3RvcmVkV2VhdGhlckRhdGEgPSBjdXJyZW50V2VhdGhlckRhdGE7IFxuXG4gICBjb25zb2xlLmxvZyhjdXJyZW50V2VhdGhlckRhdGEpO1xuXG4gICBkaXNwbGF5Q3VycmVudFdlYXRoZXIoY3VycmVudFdlYXRoZXJEYXRhKTtcblxuICAgYWRkV2VhdGhlckZvcmVjYXN0MShjdXJyZW50V2VhdGhlckRhdGEpO1xuXG4gICBhZGRXZWF0aGVyRm9yZWNhc3QyKGN1cnJlbnRXZWF0aGVyRGF0YSk7XG5cbiAgIGFkZFdlYXRoZXJGb3JlY2FzdDMoY3VycmVudFdlYXRoZXJEYXRhKTsgXG4gICAgXG4gICAgXG4gIC8vICB0b2dnbGUoY3VycmVudFdlYXRoZXJEYXRhKTtcblxuICAvLyByZXR1cm4ganNvbkRhdGE7XG5cbn0gXG5cbi8vIGhvdyBjYW4gSSBzdG9yZSB3ZWF0aGVyIGRhdGEgb3V0c2lkZSBvZiB0aGUgZnVuY3Rpb24/IFxuXG4vLyBhbGwgSSBjYW4gdGhpbmsgb2YgaXMgYSBnbG9iYWwgdmFyaWFibGUsY1xuXG4vLyBmZXRjaERhdGEudGhlbihkYXRhID0+IGNvbnNvbGUubG9nKGRhdGEpKTsgXG5cbi8vIE9LIEkgYW0gYWJsZSB0byBnZXQgdGhlIHdlYXRoZXIgZGF0YSwgd2l0aGluIG15IGV2ZW50IGxpc3RlbmVyIGZ1bmN0aW9uIFxuIFxuXG4vLyAgbGV0IHdlYXRoZXJDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VycmVudC13ZWF0aGVyLWNvbnRhaW5lcicpOyBcblxuYXN5bmMgZnVuY3Rpb24gZGlzcGxheUN1cnJlbnRXZWF0aGVyKHdlYXRoZXIpIHsgXG5cbiAgICBsZXQgY3VycmVudFdlYXRoZXJJY29uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1cnJlbnQtd2VhdGhlci1pY29uJyk7IFxuICAgIC8vIGNsZWFyIERPTSwgcmVwbGFjZUNoaWxkcmVuIGJlZm9yZSBhcHBlbmRpbmcgbmV3XG5cbiAgICBsZXQgY3VycmVudEZvcmVjYXN0ID0gYXdhaXQgd2VhdGhlcjsgXG5cbiAgICAvLyBjb25zb2xlLmxvZyhjdXJyZW50Rm9yZWNhc3QubG9jYXRpb24pIFxuXG4gICAgY3VycmVudFdlYXRoZXJJY29uLnRleHRDb250ZW50ID0gJyc7IFxuXG5cblxuICAgIGxldCB3ZWF0aGVySWNvbiA9IG5ldyBJbWFnZSgpOyBcblxuICAgIHdlYXRoZXJJY29uLnNyYyA9IGN1cnJlbnRGb3JlY2FzdC5jdXJyZW50LmNvbmRpdGlvbi5pY29uO1xuXG4gICAgLy8gY29uc29sZS5sb2coY3VycmVudEZvcmVjYXN0LmN1cnJlbnQuY29uZGl0aW9uKVxuXG4gICAgbGV0IGxvY2F0aW9uRGF0YSA9IGN1cnJlbnRGb3JlY2FzdC5sb2NhdGlvbi5uYW1lO1xuXG4gICAgbGV0IHdlYXRoZXJEZXNjcmlwdGlvbkRhdGEgPSBjdXJyZW50Rm9yZWNhc3QuY3VycmVudC5jb25kaXRpb24udGV4dDsgXG5cbiAgICBsZXQgY3VycmVudFdlYXRoZXJOdW1iZXJEYXRhID0gY3VycmVudEZvcmVjYXN0LmN1cnJlbnQudGVtcF9mO1xuXG4gICAgbGV0IHdpbmREYXRhID0gY3VycmVudEZvcmVjYXN0LmN1cnJlbnQud2luZF9tcGg7XG5cbiAgICBsZXQgd2luZERpcmVjdGlvbiA9IGN1cnJlbnRGb3JlY2FzdC5jdXJyZW50LndpbmRfZGlyO1xuXG4gICAgbGV0IHJhaW5JbmNoZXMgPSBjdXJyZW50Rm9yZWNhc3QuY3VycmVudC5wcmVjaXBfaW47IFxuXG4gICAgbGV0IGh1bWlkaXR5TGV2ZWwgPSBjdXJyZW50Rm9yZWNhc3QuY3VycmVudC5odW1pZGl0eTtcblxuICAgIGxldCBuZXdJbWcgPSBuZXcgSW1hZ2UoKTtcblxuICAgIG5ld0ltZy5zcmMgPSBjdXJyZW50Rm9yZWNhc3QuY3VycmVudC5jb25kaXRpb24uaWNvbjtcblxuLy8gICAgbGV0IGN1cnJlbnRXZWF0aGVySWNvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXJyZW50LXdlYXRoZXItaWNvbicpOyBcblxuICAgLy8gZG9udCBhcHBlbmQgdXNlIHZhcmlhYmxlIGFuZCB0ZW1wbGF0ZSBsaXRlcmFscywgYXBwZW5kaW5nIG1heSBzdG9wIHRoZSBhZGRpbmcgb250byB0byBpbnN0ZWFkIG9mIHJlcGxhY2luZywgXG5cbiAgIGN1cnJlbnRXZWF0aGVySWNvbi5hcHBlbmRDaGlsZCh3ZWF0aGVySWNvbik7XG5cbiAgIGxldCBjdXJyZW50V2VhdGhlckxvY2F0aW9uVGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXJyZW50LXdlYXRoZXItbG9jYXRpb24tcCcpOyBcblxuICAgY3VycmVudFdlYXRoZXJMb2NhdGlvblRleHQudGV4dENvbnRlbnQgPSBgTG9jYXRpb246ICR7bG9jYXRpb25EYXRhfWA7XG5cbiAgIGxldCBjdXJyZW50V2VhdGhlckRlc2NyaXB0aW9uVGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXJyZW50LXdlYXRoZXItZGVzY3JpcHRpb24tcCcpOyBcblxuICAgY3VycmVudFdlYXRoZXJEZXNjcmlwdGlvblRleHQudGV4dENvbnRlbnQgPSBgQ29uZGl0aW9uczogJHt3ZWF0aGVyRGVzY3JpcHRpb25EYXRhfWBcblxuICAgbGV0IGN1cnJlbnRXZWF0aGVyVGVtcERhdGEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VycmVudC13ZWF0aGVyLXRlbXAtZGF0YScpOyBcblxuICAgY3VycmVudFdlYXRoZXJUZW1wRGF0YS50ZXh0Q29udGVudCA9IGBUZW1wcmF0dXJlIElzOiAke2N1cnJlbnRXZWF0aGVyTnVtYmVyRGF0YX1cXHUwMEIwRmA7XG5cbiAgIGxldCBjdXJyZW50V2VhdGhlcldpbmREYXRhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1cnJlbnQtd2VhdGhlci13aW5kLWRhdGEnKTsgXG5cbiAgIGN1cnJlbnRXZWF0aGVyV2luZERhdGEudGV4dENvbnRlbnQgPSBgV2luZCBTcGVlZDogJHt3aW5kRGF0YX0gbXBoYDtcblxuICAgbGV0IGN1cnJlbnRXZWF0aGVyV2luZERpcmVjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXJyZW50LXdlYXRoZXItd2luZC1kaXJlY3Rpb24tZGF0YScpO1xuXG4gICBjdXJyZW50V2VhdGhlcldpbmREaXJlY3Rpb24udGV4dENvbnRlbnQgPSBgV2luZCBEaXJlY3Rpb246ICR7d2luZERpcmVjdGlvbn1gO1xuXG4gICBsZXQgY3VycmVudFdlYXRoZXJSYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1cnJlbnQtd2VhdGhlci1yYWluLWluY2hlcy1kYXRhJyk7XG5cbiAgIGN1cnJlbnRXZWF0aGVyUmFpbi50ZXh0Q29udGVudCA9IGBSYWluOiAke3JhaW5JbmNoZXN9IGluYDtcblxuICAgbGV0IGN1cnJlbnRIdW1pZGl0eUxldmVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1cnJlbnQtd2VhdGhlci1odW1pZGl0eS1kYXRhJyk7IFxuXG4gICBjdXJyZW50SHVtaWRpdHlMZXZlbC50ZXh0Q29udGVudCA9IGBIdW1pZGl0eTogJHtodW1pZGl0eUxldmVsfSVgXG5cbn0gXG5cbi8vIG5lZWRzIHRvIHNvbWVob3cgYmUgY2xlYXJlZCBpbiB0aGUgc2VhcmNoIGJ0biBcblxuc2VhcmNoQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHsgXG5cbiAgICBjb25zb2xlLmxvZygnY2xpY2snKTtcblxuICAgIGxldCBpbnB1dFZhbHVlID0gc2VhcmNoQm94LnZhbHVlO1xuXG4gICAgZmV0Y2hEYXRhKGlucHV0VmFsdWUpO1xuXG59KTsgXG5cbi8vIGdyYWIgdGhlIGlucHV0IGZpZWxkcyB0aGF0IGhhdmUgRiBcblxuLy8gc2V0IHZhcmlhYmxlcyBmb3IgY3VycmVudCB0ZW1wIGluIGMsIGhpZ2ggdGVtcCBpbiBjLCBsb3cgdGVtcCBpbiBjIFxuXG4vLyBzZXQgdGhvc2UgdmFyaWFibGVzLCBcblxuLy8gc2V0IGEgdmFyaWFibGUgaXNDIHRvIGZhbHNlLCBcblxuLy8gY29uZGl0aW9uYWwgaWYgYyBpcyB0cnVlIGdyYWIgdGhlIHZhbHVlcywgdGhlbiByZXBsYWNlIHRoZW0gd2l0aCBjIHZhbHVlLCBcblxuLy8gaWYgZmFsc2UsIHN3aXRjaCB0aGVtIGJhY2sgdG8gRiwgXG5cbi8vIGNhbiBzd2l0Y2ggdGhlIHRlbXAsIFxuXG4vLyBidXQgaG93IGNhbiBJIHRvZ2dsZSBiYWNrIGFuZCBmb3J0aCBcblxuLy8gbWF5YmUgSSBzaG91bGQgbWFrZSBhbm90aGVyIHZhcmlhYmxlIGZvciBGIFxuXG5cbi8vIGxldCB0b2dnbGVUZW1wcmF0dXJlQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0YtQy10b2dnbGUtYnRuJyk7IFxuXG4vLyBsZXQgaXNDZWxjaXVzID0gZmFsc2U7IFxuXG4vLyAvLyBsZXQgaXNGID0gdHJ1ZTsgXG5cbi8vIEhFUkUhXG5cbi8vIGdyYWIgdGhlIGVsZW1lbnQsIEMgZWxlbWVudCBcblxubGV0IGNlbGNpdXNCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnQy10b2dnbGUtYnRuJyk7IFxuXG5jZWxjaXVzQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcblxuICAgIGxldCBjdXJyZW50Q2VsY2l1c1RlbXAgPSBzdG9yZWRXZWF0aGVyRGF0YS5jdXJyZW50LnRlbXBfYzsgXG5cbiAgICBsZXQgY3VycmVudFdlYXRoZXJUZW1wRGF0YSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXJyZW50LXdlYXRoZXItdGVtcC1kYXRhJyk7IFxuXG4gICAgY3VycmVudFdlYXRoZXJUZW1wRGF0YS50ZXh0Q29udGVudCA9IGBUZW1wcmF0dXJlIElzOiAke2N1cnJlbnRDZWxjaXVzVGVtcH1cXHUwMEIwQ2A7IFxuXG4gICAgbGV0IGRheTFIaWdoVGVtcCA9IHN0b3JlZFdlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRheS5tYXh0ZW1wX2M7XG5cbiAgICBsZXQgZGF5MUxvd1RlbXAgPSBzdG9yZWRXZWF0aGVyRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXkubWludGVtcF9jO1xuXG4gICAgbGV0IGhpZ2hMb3dUZW1wRGF0YSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dC1mb3JlY2FzdC1kYXkxLWhpZ2gtbG93Jyk7IFxuXG4gICAgaGlnaExvd1RlbXBEYXRhLnRleHRDb250ZW50ID0gYEhpZ2ggdG9kYXkgaXM6ICR7ZGF5MUhpZ2hUZW1wfVxcdTAwQjBDIExvdyB0b2RheSBpczogJHtkYXkxTG93VGVtcH1cXHUwMEIwQ2A7XG5cbiAgICBsZXQgZGF5MkhpZ2hUZW1wID0gc3RvcmVkV2VhdGhlckRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMV0uZGF5Lm1heHRlbXBfYztcblxuICAgIGxldCBkYXkyTG93VGVtcCA9IHN0b3JlZFdlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzFdLmRheS5taW50ZW1wX2M7IFxuXG4gICAgbGV0IGhpZ2hMb3dUZW1wRGF0YURheTIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXQtZm9yZWNhc3QtZGF5Mi1oaWdoLWxvdycpO1xuXG4gICAgaGlnaExvd1RlbXBEYXRhRGF5Mi50ZXh0Q29udGVudCA9IGBIaWdoIFRvZGF5IGlzOiAke2RheTJIaWdoVGVtcH1cXHUwMEIwQyBMb3cgdG9kYXkgaXM6ICR7ZGF5Mkxvd1RlbXB9XFx1MDBCMENgOyAgXG5cbiAgICAvLyBcblxuICAgIGxldCBkYXkzSGlnaFRlbXAgPSBzdG9yZWRXZWF0aGVyRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsyXS5kYXkubWF4dGVtcF9jO1xuXG4gICAgbGV0IGRheTNMb3dUZW1wID0gc3RvcmVkV2VhdGhlckRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMl0uZGF5Lm1pbnRlbXBfYztcblxuICAgIGxldCBoaWdoTG93VGVtcERhdGFEYXkzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0LWZvcmVjYXN0LWRheTMtaGlnaC1sb3cnKTtcblxuICAgIGhpZ2hMb3dUZW1wRGF0YURheTMudGV4dENvbnRlbnQgPSBgSGlnaCB0b2RheSBpczogJHtkYXkzSGlnaFRlbXB9XFx1MDBCMEMgTG93IHRvZGF5IGlzOiAke2RheTNMb3dUZW1wfVxcdTAwQjBDYDtcbiAgICBcbn0pOyBcblxubGV0IGZCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnRi10b2dnbGUtYnRuJyk7IFxuXG5mQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcblxuICAgIGxldCBjdXJyZW50RlRlbXAgPSBzdG9yZWRXZWF0aGVyRGF0YS5jdXJyZW50LnRlbXBfZjsgXG5cbiAgICBsZXQgY3VycmVudFdlYXRoZXJUZW1wRGF0YSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXJyZW50LXdlYXRoZXItdGVtcC1kYXRhJyk7XG5cbiAgICBjdXJyZW50V2VhdGhlclRlbXBEYXRhLnRleHRDb250ZW50ID0gYFRlbXByYXR1cmUgSXM6ICR7Y3VycmVudEZUZW1wfVxcdTAwQjBGYDtcblxuICAgIGxldCBkYXkxSGlnaFRlbXAgPSBzdG9yZWRXZWF0aGVyRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXkubWF4dGVtcF9mO1xuXG4gICAgbGV0IGRheTFMb3dUZW1wID0gc3RvcmVkV2VhdGhlckRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uZGF5Lm1pbnRlbXBfZjtcblxuICAgIGxldCBoaWdoTG93VGVtcERhdGEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXQtZm9yZWNhc3QtZGF5MS1oaWdoLWxvdycpOyBcblxuICAgIGhpZ2hMb3dUZW1wRGF0YS50ZXh0Q29udGVudCA9IGBIaWdoIHRvZGF5IGlzOiAke2RheTFIaWdoVGVtcH1cXHUwMEIwRiBMb3cgdG9kYXkgaXM6ICR7ZGF5MUxvd1RlbXB9XFx1MDBCMEZgOyBcblxuICAgIGxldCBkYXkySGlnaFRlbXAgPSBzdG9yZWRXZWF0aGVyRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsxXS5kYXkubWF4dGVtcF9mO1xuXG4gICAgbGV0IGRheTJMb3dUZW1wID0gc3RvcmVkV2VhdGhlckRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMV0uZGF5Lm1pbnRlbXBfZjsgXG5cbiAgICBsZXQgaGlnaExvd1RlbXBEYXRhRGF5MiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dC1mb3JlY2FzdC1kYXkyLWhpZ2gtbG93Jyk7XG5cbiAgICBoaWdoTG93VGVtcERhdGFEYXkyLnRleHRDb250ZW50ID0gYEhpZ2ggVG9kYXkgaXM6ICR7ZGF5MkhpZ2hUZW1wfVxcdTAwQjBGIExvdyB0b2RheSBpczogJHtkYXkyTG93VGVtcH1cXHUwMEIwRmA7IFxuXG4gICAgLy8gXG5cbiAgICBsZXQgZGF5M0hpZ2hUZW1wID0gc3RvcmVkV2VhdGhlckRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMl0uZGF5Lm1heHRlbXBfZjtcblxuICAgIGxldCBkYXkzTG93VGVtcCA9IHN0b3JlZFdlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzJdLmRheS5taW50ZW1wX2Y7XG5cbiAgICBsZXQgaGlnaExvd1RlbXBEYXRhRGF5MyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dC1mb3JlY2FzdC1kYXkzLWhpZ2gtbG93Jyk7XG5cbiAgICBoaWdoTG93VGVtcERhdGFEYXkzLnRleHRDb250ZW50ID0gYEhpZ2ggdG9kYXkgaXM6ICR7ZGF5M0hpZ2hUZW1wfVxcdTAwQjBGIExvdyB0b2RheSBpczogJHtkYXkzTG93VGVtcH1cXHUwMEIwRmA7XG4gICAgXG59KVxuXG5cbi8vIHRvZ2dsZVRlbXByYXR1cmVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4geyBcbi8vICAgICAgaXNDZWxjaXVzID0gdHJ1ZTtcblxuXG4vLyAgICAgLy8gIGlzRiA9IGZhbHNlO1xuXG4vLyAgICAgbGV0IHggPSBzZWFyY2hCb3gudmFsdWU7IFxuICAgIFxuLy8gICAgLy8gc2V0IHZhcmlhYmxlIGZvciBjdXJyZW50IHRlbXAgaW4gY1xuXG4vLyAgICAvLyBncmFiIHRoZSBpbnB1dCBmaWVsZCBmb3IgY3VycmVudCB0ZW1wIFxuXG4vLyAgICAvLyBzaG91bGQgSSBoYXZlIHR3byBkaWZmZXJlbnQgYnRucywgXG5cbi8vICAgIC8vIGlmIEYgY2xpY2tlZCBhcHBlbmQsIGYgdmFsdWVzIFxuXG4vLyAgICAvLyBpZiBjIGNsaWNrZWQsIGFwcGVuZCBjIHZhbHVlcywgXG5cbi8vICAgIC8vIGhvdyB0byBmbGlwIGEgYm9vbGVhbiB2YWx1ZSBiYXNlZCBvbiBidG4gY2xpY2tcblxuLy8gICAgLy8gSSB0aGluayB0aGUgYmVzdCB3YXkgaXMgdG8ga2VlcCBhIHNlcGVyYXRlIGJ0biwgXG5cbi8vICAgIC8vIGlkZWFsbHkgSSB3b3VsZCBsaWtlIHRvIGNvbXBsZXRlIHRoaXMgd2l0aGluIHRoZSBmdW5jdGlvbiwgXG5cbi8vICAgIC8vIGJ1dCBtYXkgYmUgZWFzaWVyIHRvIG1ha2UgdHdvIGJ0bnMsIGhpdCB0aGUgYyBidG4gZGlzcGxheSBjIHRlbXAgZGF0YSBpbiBhbGwgdGhlIGNvcnJlY3Qgc3BvdHMgXG5cbi8vICAgIC8vIGlmIGYgaXMgaGl0IHRoZW4gZGlzcGxheSBGIGluIGFsbCB0aGUgcmlnaHQgcGxhY2VzLCBcblxuLy8gICAgLy8gSSB3aWxsIG1ha2UgdHdvIGJ1dHRvbnMsIGV2ZW50IGxpc3RlbmVyLCBpZiBmIGNsaWNrZWQgZGlwbHNheSBmIHRlbXAgZGF0YSwgaWYgYyBjbGlja2VkLCBkaXNwbGF5IGMgdmFsdWVzLCBncmFiYmluZyB0aGUgaW5wdXQgZmllbGRzLCBhbmQgdXNpbmcgJHt9XG5cbi8vICAgIC8vIHRvIGFwcGVuZCB2YXJpYWJsZXMgdG8gdGhlIERPTS4gXG5cbi8vICAgIGxldCBjdXJyZW50Q2VsY2l1c1RlbXAgPSBzdG9yZWRXZWF0aGVyRGF0YS5jdXJyZW50LnRlbXBfYzsgXG5cbi8vICAgIGxldCBjdXJyZW50RlRlbXAgPSBzdG9yZWRXZWF0aGVyRGF0YS5jdXJyZW50LnRlbXBfZjsgXG5cbi8vICAgIGxldCBjdXJyZW50V2VhdGhlclRlbXBEYXRhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1cnJlbnQtd2VhdGhlci10ZW1wLWRhdGEnKTsgXG5cbi8vICAgIGNvbnNvbGUubG9nKGN1cnJlbnRDZWxjaXVzVGVtcCk7IFxuXG4vLyAgICBjb25zb2xlLmxvZyhjdXJyZW50RlRlbXApOyBcblxuLy8gICAgaWYgKGlzQ2VsY2l1cykgeyBcbi8vICAgICBjdXJyZW50V2VhdGhlclRlbXBEYXRhLnRleHRDb250ZW50ID0gYCR7Y3VycmVudENlbGNpdXNUZW1wfWA7XG4vLyAgICAgLy8gaXNDZWxjaXVzID0gZmFsc2U7XG4vLyAgICB9IGVsc2UgaWYgKCFpc0NlbGNpdXMpIHsgXG4vLyAgICAgY3VycmVudFdlYXRoZXJUZW1wRGF0YS50ZXh0Q29udGVudCA9IGAke2N1cnJlbnRGVGVtcH1gO1xuLy8gICAgfVxuXG4vLyAgICBpc0NlbGNpdXMgPSBmYWxzZTtcblxuLy8gICAgY29uc29sZS5sb2coaXNDZWxjaXVzKTtcbi8vIC8vICAgIH0gZWxzZSAoaXNGKSB7IFxuLy8gLy8gICAgIGN1cnJlbnRXZWF0aGVyVGVtcERhdGEudGV4dENvbnRlbnQgPSBgJHtjdXJyZW50RlRlbXB9YDtcbi8vIC8vICAgIH1cbiAgICBcbi8vICAgICAvLyBjb25zb2xlLmxvZyhzdG9yZWRXZWF0aGVyRGF0YS5jdXJyZW50LmNvbmRpdGlvbik7XG4vLyAvLyBmZXRjaERhdGEudGhlbihkYXRhID0+IGNvbnNvbGUubG9nKGRhdGEpKTtcbi8vIH0pO1xuXG5hc3luYyBmdW5jdGlvbiBhZGRXZWF0aGVyRm9yZWNhc3QxKHdlYXRoZXIpIHsgXG4gICAgbGV0IGZvcmVjYXN0RGF0YSA9IGF3YWl0IHdlYXRoZXI7IFxuXG4gICAgIC8vIGNvbnNvbGUubG9nKGZvcmVjYXN0RGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXkpO1xuXG4gICAgLy8gY29uc29sZS5sb2coZm9yZWNhc3REYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRheS5jb25kaXRpb24uaWNvbik7XG5cbiAgICBsZXQgaW5wdXRGb3JJbWdEYXkxID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0LWZvcmVjYXN0LWRheTEtaWNvbicpOyBcblxuICAgIGlucHV0Rm9ySW1nRGF5MS50ZXh0Q29udGVudCA9ICcnO1xuXG4gICAgbGV0IGRheTFEYXRlID0gZm9yZWNhc3REYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRhdGU7IFxuXG4gICAgbGV0IGRheTFJY29uID0gbmV3IEltYWdlKCk7IFxuXG4gICAgbGV0IGRheTFIaWdoVGVtcCA9IGZvcmVjYXN0RGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXkubWF4dGVtcF9mO1xuXG4gICAgbGV0IGRheTFMb3dUZW1wID0gZm9yZWNhc3REYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRheS5taW50ZW1wX2Y7XG5cbiAgICBsZXQgY2hhbmNlT2ZSYWluID0gZm9yZWNhc3REYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRheS5kYWlseV9jaGFuY2Vfb2ZfcmFpbjtcblxuICAgIGxldCB1dkluZGV4ID0gZm9yZWNhc3REYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRheS51djtcblxuICAgIGxldCBodW1pZGl0eSA9IGZvcmVjYXN0RGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXkuYXZnaHVtaWRpdHk7XG5cbiAgICBsZXQgd2luZCA9IGZvcmVjYXN0RGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXkubWF4d2luZF9tcGg7XG5cbiAgICBjb25zb2xlLmxvZyh3aW5kKTtcblxuICAgIC8vIGRheTFJY29uLnN0eWxlLmhlaWdodCA9ICcxMzBweCc7XG5cbiAgICBkYXkxSWNvbi5zcmMgPSBmb3JlY2FzdERhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uZGF5LmNvbmRpdGlvbi5pY29uOyBcbiAgICBcbiAgICAvLyBsZXQgaW5wdXRGb3JJbWdEYXkxID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0LWZvcmVjYXN0LWRheTEtaWNvbicpOyBcblxuICAgIGlucHV0Rm9ySW1nRGF5MS5hcHBlbmQoZGF5MUljb24pO1xuXG4gICAgbGV0IGRhdGVBbmRJY29uRGF0YSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dC1mb3JlY2FzdC1kYXkxLWRhdGEtZGF0ZScpOyBcblxuICAgIGRhdGVBbmRJY29uRGF0YS50ZXh0Q29udGVudCA9IGBEYXRlIHRvZGF5IGlzOiAke2RheTFEYXRlfWA7IFxuXG4gICAgbGV0IGhpZ2hMb3dUZW1wRGF0YSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dC1mb3JlY2FzdC1kYXkxLWhpZ2gtbG93Jyk7IFxuXG4gICAgaGlnaExvd1RlbXBEYXRhLnRleHRDb250ZW50ID0gYEhpZ2ggdG9kYXkgaXM6ICR7ZGF5MUhpZ2hUZW1wfVxcdTAwQjBGIExvdyB0b2RheSBpczogJHtkYXkxTG93VGVtcH1cXHUwMEIwRmA7XG5cbiAgICBsZXQgY2hhbmNlT2ZSYWluRGF0YSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dC1mb3JlY2FzdC1kYXktMS1yYWluLWNoYW5jZScpO1xuICAgIFxuICAgIGNoYW5jZU9mUmFpbkRhdGEudGV4dENvbnRlbnQgPSBgQ2hhbmNlIG9mIFJhaW46ICR7Y2hhbmNlT2ZSYWlufSVgIFxuXG4gICAgbGV0IHV2SW5kZXhEYXRhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0LWZvcmVjYXN0LWRheS0xLXV2LWluZGV4Jyk7XG5cbiAgICB1dkluZGV4RGF0YS50ZXh0Q29udGVudCA9IGBVViBJbmRleCBpczogJHt1dkluZGV4fWA7XG5cbiAgICBsZXQgaHVtaWRpdHlEYXRhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0LWZvcmVjYXN0LWRheS0xLWh1bWlkaXR5Jyk7IFxuXG4gICAgaHVtaWRpdHlEYXRhLnRleHRDb250ZW50ID0gYEh1bWlkaXR5IExldmVsczogJHtodW1pZGl0eX0lYDtcblxuICAgIGxldCB3aW5kRGF0YSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dC1mb3JlY2FzdC1kYXktMS13aW5kJyk7XG5cbiAgICB3aW5kRGF0YS50ZXh0Q29udGVudCA9IGBXaW5kIFNwZWVkOiAke3dpbmR9IG1waGA7XG5cbn0gXG5cblxuYXN5bmMgZnVuY3Rpb24gYWRkV2VhdGhlckZvcmVjYXN0Mih3ZWF0aGVyKSB7IFxuICAgIGxldCBmb3JlY2FzdERhdGEyID0gYXdhaXQgd2VhdGhlcjsgXG5cbiAgICBjb25zb2xlLmxvZyhmb3JlY2FzdERhdGEyKTtcblxuICAgIC8vIGNvbnNvbGUubG9nKGZvcmVjYXN0RGF0YTIuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMV0uZGF0ZSk7XG5cbiAgICBsZXQgaWNvbkRhdGEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXQtZm9yZWNhc3QtZGF5Mi1kYXRhLWljb24nKTtcblxuICAgIGljb25EYXRhLnRleHRDb250ZW50ID0gJyc7XG5cbiAgICBsZXQgZGF5MkRhdGUgPSBmb3JlY2FzdERhdGEyLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzFdLmRhdGU7IFxuXG4gICAgbGV0IGRheTJJY29uSW1nID0gbmV3IEltYWdlKCk7IFxuXG4gICAgZGF5Mkljb25JbWcuc3JjID0gZm9yZWNhc3REYXRhMi5mb3JlY2FzdC5mb3JlY2FzdGRheVsxXS5kYXkuY29uZGl0aW9uLmljb247XG5cbiAgICBsZXQgZGF5MkhpZ2hUZW1wID0gZm9yZWNhc3REYXRhMi5mb3JlY2FzdC5mb3JlY2FzdGRheVsxXS5kYXkubWF4dGVtcF9mO1xuXG4gICAgbGV0IGRheTJMb3dUZW1wID0gZm9yZWNhc3REYXRhMi5mb3JlY2FzdC5mb3JlY2FzdGRheVsxXS5kYXkubWludGVtcF9mO1xuXG4gICAgbGV0IGRheTJDaGFuY2VPZlJhaW4gPSBmb3JlY2FzdERhdGEyLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzFdLmRheS5kYWlseV9jaGFuY2Vfb2ZfcmFpbjtcblxuICAgIGxldCBkYXkyVVZJbmRleCA9IGZvcmVjYXN0RGF0YTIuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMV0uZGF5LnV2OyBcblxuICAgIGxldCBkYXkySHVtaWRpdHkgPSBmb3JlY2FzdERhdGEyLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzFdLmRheS5hdmdodW1pZGl0eTtcblxuICAgIGxldCBkYXkyV2luZFNwZWVkID0gZm9yZWNhc3REYXRhMi5mb3JlY2FzdC5mb3JlY2FzdGRheVsxXS5kYXkubWF4d2luZF9tcGg7XG5cbiAgICAvLyBjb25zb2xlLmxvZyhkYXkyQ2hhbmNlT2ZTbm93KTtcblxuICAgIC8vIGNvbnNvbGUubG9nKGRheTJJY29uKTtcblxuICAgIGxldCBkYXRlRGF0YSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dC1mb3JlY2FzdC1kYXkyLWRhdGEtZGF0ZScpO1xuXG4gICAgZGF0ZURhdGEudGV4dENvbnRlbnQgPSBgRGF0ZSBUb2RheSBpczogJHtkYXkyRGF0ZX1gOyBcblxuICAgIC8vIGxldCBpY29uRGF0YSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dC1mb3JlY2FzdC1kYXkyLWRhdGEtaWNvbicpO1xuXG4gICAgaWNvbkRhdGEuYXBwZW5kKGRheTJJY29uSW1nKTsgXG5cbiAgICBsZXQgaGlnaExvd1RlbXBEYXRhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0LWZvcmVjYXN0LWRheTItaGlnaC1sb3cnKTtcblxuICAgIGhpZ2hMb3dUZW1wRGF0YS50ZXh0Q29udGVudCA9IGBIaWdoIFRvZGF5IGlzOiAke2RheTJIaWdoVGVtcH1cXHUwMEIwRiBMb3cgdG9kYXkgaXM6ICR7ZGF5Mkxvd1RlbXB9XFx1MDBCMEZgOyBcblxuICAgIGxldCBjaGFuY2VPZlJhaW5EYXRhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0LWZvcmVjYXN0LWRheTItcmFpbi1jaGFuY2UnKTtcblxuICAgIGNoYW5jZU9mUmFpbkRhdGEudGV4dENvbnRlbnQgPSBgQ2hhbmNlIG9mIFJhaW46ICR7ZGF5MkNoYW5jZU9mUmFpbn0lYDsgXG5cbiAgICBsZXQgdXZJbmRleERhdGEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXQtZm9yZWNhc3QtZGF5Mi11di1pbmRleCcpO1xuXG4gICAgdXZJbmRleERhdGEudGV4dENvbnRlbnQgPSBgVVYgSW5kZXggaXM6ICR7ZGF5MlVWSW5kZXh9YDsgXG5cbiAgICBsZXQgaHVtaWRpdHlEYXRhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0LWZvcmVjYXN0LWRheTItaHVtaWRpdHknKTtcblxuICAgIGh1bWlkaXR5RGF0YS50ZXh0Q29udGVudCA9IGBIdW1pZGl0eSBMZXZlbHM6ICR7ZGF5Mkh1bWlkaXR5fSVgO1xuXG4gICAgbGV0IHdpbmREYXRhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0LWZvcmVjYXN0LWRheS0yLXdpbmQnKTsgXG5cbiAgICB3aW5kRGF0YS50ZXh0Q29udGVudCA9IGBXaW5kIFNwZWVkOiAke2RheTJXaW5kU3BlZWR9IG1waGA7XG5cbn0gXG5cbmFzeW5jIGZ1bmN0aW9uIGFkZFdlYXRoZXJGb3JlY2FzdDMod2VhdGhlcikgeyBcbiAgICBsZXQgZm9yZWNhc3REYXRhMyA9IHdlYXRoZXI7IFxuXG4gICAgbGV0IGRheTNEYXRlID0gZm9yZWNhc3REYXRhMy5mb3JlY2FzdC5mb3JlY2FzdGRheVsyXS5kYXRlOyBcblxuICAgIGxldCBkYXkzSW1nSWNvbiA9IG5ldyBJbWFnZSgpOyBcblxuICAgIGxldCBpY29uRGF0YSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dC1mb3JlY2FzdC1kYXkzLWljb24nKTtcblxuICAgIGljb25EYXRhLnRleHRDb250ZW50ID0gJyc7XG5cblxuICAgIGRheTNJbWdJY29uLnNyYyA9IGZvcmVjYXN0RGF0YTMuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMl0uZGF5LmNvbmRpdGlvbi5pY29uO1xuXG4gICAgbGV0IGRheTNIaWdoVGVtcCA9IGZvcmVjYXN0RGF0YTMuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMl0uZGF5Lm1heHRlbXBfZjtcblxuICAgIGxldCBkYXkzTG93VGVtcCA9IGZvcmVjYXN0RGF0YTMuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMl0uZGF5Lm1pbnRlbXBfZjtcblxuICAgIGxldCBkYXkzUmFpbkNoYW5jZSA9IGZvcmVjYXN0RGF0YTMuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMl0uZGF5LmRhaWx5X2NoYW5jZV9vZl9yYWluO1xuXG4gICAgbGV0IGRheTNVVkluZGV4ID0gZm9yZWNhc3REYXRhMy5mb3JlY2FzdC5mb3JlY2FzdGRheVsyXS5kYXkudXY7XG5cbiAgICBsZXQgZGF5M0h1bWlkaXR5ID0gZm9yZWNhc3REYXRhMy5mb3JlY2FzdC5mb3JlY2FzdGRheVsyXS5kYXkuYXZnaHVtaWRpdHk7XG5cbiAgICBsZXQgZGF5M1dpbmQgPSBmb3JlY2FzdERhdGEzLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzJdLmRheS5tYXh3aW5kX21waDtcblxuICAgIGNvbnNvbGUubG9nKGRheTNXaW5kKTtcblxuICAgIGxldCBkYXRlRGF0YSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dC1mb3JlY2FzdC1kYXkzLWRhdGEtZGF0ZScpO1xuXG4gICAgZGF0ZURhdGEudGV4dENvbnRlbnQgPSBgRGF0ZSBUb2RheSBpczogJHtkYXkzRGF0ZX1gOyBcblxuICAgIC8vIGxldCBpY29uRGF0YSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dC1mb3JlY2FzdC1kYXkzLWljb24nKTtcblxuICAgIGljb25EYXRhLmFwcGVuZChkYXkzSW1nSWNvbik7IFxuXG4gICAgbGV0IGhpZ2hMb3dUZW1wRGF0YSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dC1mb3JlY2FzdC1kYXkzLWhpZ2gtbG93Jyk7XG5cbiAgICBoaWdoTG93VGVtcERhdGEudGV4dENvbnRlbnQgPSBgSGlnaCB0b2RheSBpczogJHtkYXkzSGlnaFRlbXB9XFx1MDBCMEYgTG93IHRvZGF5IGlzOiAke2RheTNMb3dUZW1wfVxcdTAwQjBGYDtcblxuICAgIGxldCBjaGFuY2VPZlJhaW5EYXRhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0LWZvcmVjYXN0LWRheTMtcmFpbi1jaGFuY2UnKTtcblxuICAgIGNoYW5jZU9mUmFpbkRhdGEudGV4dENvbnRlbnQgPSBgQ2hhbmNlIG9mIFJhaW46ICR7ZGF5M1JhaW5DaGFuY2V9JWAgXG5cbiAgICBsZXQgdXZJbmRleERhdGEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXQtZm9yZWNhc3QtZGF5My11di1pbmRleCcpOyBcblxuICAgIHV2SW5kZXhEYXRhLnRleHRDb250ZW50ID0gYFVWIEluZGV4IGlzOiAke2RheTNVVkluZGV4fWA7IFxuXG4gICAgbGV0IGh1bWlkaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0LWZvcmVjYXN0LWRheTMtaHVtaWRpdHknKTtcblxuICAgIGh1bWlkaXR5LnRleHRDb250ZW50ID0gYEh1bWlkaXR5IExldmVsczogJHtkYXkzSHVtaWRpdHl9JWA7XG5cbiAgICBsZXQgd2luZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dC1mb3JlY2FzdC1kYXktMy13aW5kJyk7XG5cbiAgICB3aW5kLnRleHRDb250ZW50ID0gYFdpbmQgU3BlZWQ6ICR7ZGF5M1dpbmR9IG1waGA7XG5cbn1cblxuLy8gU28gSSBsaWtlIHdhdmVzIHByb2plY3QgbG9vaywgbmV4dCBJIFdpbGwgZmlndXJlIG91dCBhIHdheSBcblxuLy8gbmV4dCBJIHdpbGwgZ2V0IHRoZSAzIGRheSBmb3JlY2FzdCwgXG5cbi8vIEkgYXNzdW1lIGl0IHdvdWxkIGJlIHRoZSBzYW1lIHByb2Nlc3MgZmV0Y2ggdGhlIGRhdGEgXG5cbi8vIGtleSBpbnRvIHRoZSB2YWx1ZSB0aGUgY3VycmVudCBmb3JlY2FzdCBcblxuLy8gSSB0aGluayBJIGFsc28gbmVlZCB0byB3cml0ZSBhIGZ1bmN0aW9uLCBcblxuLy8gdGhhdCB3aWxsIGRpc3BsYXkgdGhlIHRocmVlIGRheSBmb3JlY2FzdCwgXG5cbi8vIHBhc3MgdGhlIHdlYXRoZXIgZGF0YSB0byB0aGF0IHlvdSBnb3QgZnJvbSB0aGUgZmV0Y2ggZGF0YSBmdW5jdGlvbiBcblxuLy8gdG8gdGhlIG90aGVyIGZ1bmN0aW9uIHdoaWNoIHdpbGwganVzdCBkaXNwbGF5IGZvcmVjYXN0IHdlYWh0ZXIgXG5cbi8vIGZvciAzIGRheXMsIFxuXG4vLyBwcm9qZWN0LCAzIGRheSBmb3JlY2FzdCwgXG5cbi8vIHRvZ2dsZSBjZWxpdXMgYW5kIGYgXG5cbi8vIGZpbmQgd2F5IHRvIGNsZWFyIERPTSBiZWZvcmUgYWRkaW5nIG5ldyB2YWx1ZXMsIG5vIGFkZGluZyBvbiBcblxuLy8gYSB3YXkgdG8gaW1wb3J0IGljb25zIGFuZCBnZXQgdGhlIGNvcnJlY3QgcGF0aCBcblxuLy8gaWNvbnMgc2VlbXMgdG8gd29ya2luZyEhIFxuXG4vLyBtYWtlIHRoZSB3ZWF0aGVyIGRlc2NyaXB0aW9uIGVsZW1lbnRzIGFwcGVhciB3aXRoIHRoZSBET00sIFxuXG4vLyBpbnN0ZWFkIG9mIHRoZSBodG1sLCBcblxuLy8gZmluZCBhIHdheSBub3cgdG8ga2V5IGludG8gYW5kIGdldCBmb3JlY2FzdCBcblxuLy8gbmV4dCBzdGVwIGlzIHRvIGtleSBpbnRvIGRhdGEsIGFuZCBnZXQgdGhlIGZvcmVjYXN0IFxuXG4vLyBrZXkgaW50byBjZXJ0YWluIGRheXMsIG1ha2UgYSBIVE1MIGNhcmQsIFxuXG4vLyBhcHBlbmQgdGhlIGRhdGEgdG8gdGhlIGNhcmQsIGFsb25nIHdpdGggbG9nb3MgZm9yIHRoZSB3ZWF0aGVyLCBcblxuLy8gdGhlbiBpbnN0ZWFkIG9mIEhUTUwgTWVzc2FnZXMsIHVzZSBET00gcGx1cyBhcHBlbmQgZGF0YSBcblxuLy8gb25jZSBjdXJyZW50IGFuZCAzIGRheSBmb3JlY2FzdCBpcyBzZXQsIFxuXG4vLyBmaW5kIGEgd2F5IG9yIHdyaXRlIGEgZnVuY3Rpb24gdGhhdCBjYW4gY2hhbmdlZCBmIGRhdGEgdG8gYyBcblxuLy8gc3R5bGUgdXAgYW5kIGRvbmUsIFxuXG4vLyBXZSBrbm93IHdoYXQgd2UgbmVlZCB0byBkbywgZmlyc3QgSSB3b3VsZCBnZXQgdGhlIGNvcnJlY3QgXG5cbi8vIGZvcmVjYXN0IGRhdGEgYW5kIGFwcGVuZCBpbiB0aGUgY29ycmVjdCBzcG90LCBcblxuLy8gdGhlbiBmaXggdGhlIGN1cnJlbnQgd2VhdGhlciB0byB1c2UgRE9NIGRpc3BsYXllZCB0ZXh0LCBcblxuLy8gYWxvbmcgd2l0aCBhdHRhY2hpbmcgdGhlIGljb24sIFxuXG4vLyBzdGFydCB0aGVyZSwgZmlyc3QgbGV0cyBmaW5kIHRoZSBjb3JyZWN0IGZvcmVjYXN0IGZvciB0aGUgMyBkYXksIFxuXG4vLyBvayBsZXRzIGZpcnN0IGdvIHRoZSBIVE1MLCBuYWQgbWFrZSB0aGUgbWFya3VwLCBcblxuLy8gd2Ugd2lsbCBuZWVkIGEgY29udGFpbmVyLCBcblxuLy8gdGhhdCBjYW4gaG9sZCAzIGNhcmRzLCBkaXNwbGF5ZWQgaW4gZmxleCBzbyB0aGV5IGFyZSBpbiBhIHJvdywgXG5cbi8vIGFwcGVuZCB0aGUgdmFsdWVzIHRvIHRoZSBzcGVjaWZpYyBpbnB1dCBmaWVsZHMsIFxuXG4vLyBvayB3ZSBnb3QgdGhlIG1hcmt1cCBcblxuLy8gbm93IEkgdGhpbmsgSSBXb3VsZCBwYXNzIHRoZSBkYXRhIHRvIHRoZSBvdGhlciBmdW5jdGlvbiwgXG5cbi8vIG9rIG90aGVyIGZ1bmN0aW9uIGNhbiBhY2NlcHQgdGhlIGRhdGEsIFxuXG4vLyBhZGQgdGhlIHAgZWxlbWVudHMgb24gZWFjaCBjYXJkLCBhbmQgYXBwZW5kIGRhdGEgYWxvbmcgd2l0aCBhIG1lc3NhZ2UgXG5cbi8vIHAgZWxlbWVudCBhbmQgYXBwZW5kIHRoZSBkYXRlIGFuZCBpY29uIGZpcnN0IGluIHRoZSBzYW1lIGxpbmUgXG5cbi8vIG1ha2UgYSBuZXcgZnVuY3Rpb24gZm9yIGVhY2ggZm9yZWNhc3QgZGF5IFxuXG4vLyBqdXN0IHRvIG1vZHVsYXJpemUgdGhpbmdzIG1vcmUgYW5kIHRvIGF2b2lkIFxuXG4vLyBoYXZpbmcgb25lIGZ1bmN0aW9uIHRvIGFsbCB0aGUgd29yayBhbmQgdGhhdCBmdW5jdGlvbiB3aWxsIFxuXG4vLyBiZSB0b28gYmlnLCBvbmUgZnVuY3Rpb24gZm9yIGVhY2ggZGF5LCBcblxuLy8gcGFzcyB0aGUgZGF0YSB0byB0aG9zZSAzIGZ1bmN0aW9ucywgXG5cbi8vIGl0cyBvbmx5IDQgY2FsbHMsIG9uZSB0byBjdXJyZW50IFxuXG4vLyBvbmUgdG8gY3VycmVudCwgZGF5MSAyIDMgXG5cbi8vIG9rIG5vdyB1c2UgYSBmdW5jdGlvbiB0byBwcmludCB0aGUgZGF0YSBmb3IgZGF5IDIgZm9yZWNhc3QgXG5cbi8vIHVzZSBhIGRpZmZlcmVudCBmdW5jdGlvbiBzbyBpdCBkb2VzIG5vdCBnZXQgdG9vIGJpZyBcblxuLy8gYW5vdGhlciBpc3N1ZSBpcyBnZXR0aW5nIHRoZSBkZWdyZWVzIHN5bWJvbCB0byBzaG93LCBcblxuLy8gYW5kIGlmIHRoZSB1c2VyIGlucHV0cyBhbm90aGVyIHNlYXJjaCwgXG5cbi8vIGNsZWFyIHRoZSBET00gdG8gbWFrZSB3YXkgZm9yIHRoZSBuZXcuIFxuXG4vLyBjaGFuZ2UgYmFja2dyb3VuZCBiYXNlZCBvbiBjb25kaXRpb24gdGV4dCBcblxuLy8gaWYgPT09IHN1bm55IFxuXG4vLyBhcHBlbmQgc3VubnkgYmFja2dyb3VuZCBwaWN0dXJlLCBcblxuLy8gaWYgPT09IHJhaW55IFxuXG4vLyBhcHBlbmQgcmFpbnkgcGljIFxuXG4vLyBJIHRoaW5rIGV2ZXJ5dGhpbmcgaXMgZ29pbmcgb2ssIEkgd2lsbCBtYWtlIHRoZSB3ZWF0aGVyIGRhdGEgZm9yIHRoZSBsYXN0IGRheSBvZiB0aGUgZm9yZWNhc3QsIGNvbW1pdCwgdGhlbiBmaXggdGhlIGh0bWwgYWJvdmUgdG8gdXNlIG9ubHkgdGhlIERPTSBcblxuLy8gSSB3aWxsIGZpeCB0aGUgaHRtbCB0byB1c2UgRE9NIE9ubHksIFxuXG4vLyB0aGVuIHdvcmsgb24gY2xlYXJpbmcgdGhlIERPTSwgc28gdmFsdWVzIGRvIG5vdCBhZGQgb250byBcblxuLy8gSFRNTCBJcyBzZXQsIHNvIGhvdyBkbyBJIGNsZWFyIHRoZSB2YWx1ZXMgZnJvbSB0aGUgRE9NLCBcblxuLy8gYWRkIG5ldyBidXQgcmVwbGFjZSBvbGQsIFxuXG4vLyBoYXZpbmcgaXNzdWUgY2xlYXJpbmcgdGhlIERPTSwgXG5cbi8vIEkgdGhvdWdodCBjbGVhcm5pbmcgaXQgYmVmb3JlIHRoZSBmdW5jdGlvbiBjYWxsIG9yIGluc2lkZSB0aGUgZnVuY3Rpb250aGF0IHdhcyBjYWxsZWQgXG5cbi8vIHdoZXJlIGNhbiBJIGNsZWFyIHRoZSBET00sIFxuXG4vLyBpdCBuZWVkcyB0byBiZSBpbiB0aGUgcmlnaHQgc3BvdCwgXG5cbi8vIGNsZWFyIHRoZSBET00gb25jZSB0aGUgc2VhcmNoIGJ0biBpcyBwcmVzc2VkLCBcblxuLy8gY2xlYXIgb2xkIGRhdGEsIGFkZCB0aGUgbmV3LCBcblxuLy8gT0sgSSB3YXMgYWJsZSB0byBmaWd1cmUgb3V0IHRoZSBkb20gaXNzdWUsIGl0IHdhcyBtb3JlIHRoZSBpY29ucyB0aGF0IEkgaGFkIHRvIHJlcGxhY2UsIGluc3RlYWQgb2YgY2xlYXJuaW5nIHRoZSBkb20gZWFjaCB0aW1lLCBcblxuLy8gc2V0dGluZyB0aGUgdGV4dCBDb250ZW50IG9mIHRoZSBlbGVtZW50LCB0byBlbXB0eSB3aWxsIG1ha2Ugd2F5IGZvciB0aGUgbmV3IHZhbHVlL2ljb24gXG5cbi8vIG5leHQgSSBuZWVkIHRvIGZpZ3VyZSBvdXQgaG93IHRvIHdyaXRlIGEgZnVuY3Rpb24gb3IgcGVyZm9ybSB0aGUgbG9naWMgdGhhdCB3b3VsZCBhbGxvdyBtZSB0byBjaGFuZ2UgdGhlIGYgZGF0YSB0byBjIGRhdGEgXG5cbi8vIGZpcnN0IGxvY2F0ZSBhbGwgdmFsdWVzIHRoYXQgdXNlIGYsIFxuXG4vLyBqdXN0IGNoYW5nZSB0aGUgdGVtcC4gdGhlcmUgaXMgb25lIGluIGN1cnJlbnQgd2VhdGhlciBhbmQgZGF5cywgZWFjaCBkYXkgd2lsbCBuZWVkIHRvIGhpZ2ggYW5kIGxvdyB0ZW1wIGNoYW5nZWQsIFxuXG4vLyBJIGFtIGNvbmZ1c2VkIG9uIGhvdyB0byBhcHByb2FjaCB0aGlzLCBcblxuLy8gYSBmdW5jdGlvbj8gXG5cbi8vIG9uY2UgdGhlIGJ0biBpcyBjbGlja2VkLCBncmFiIHRoZSB2YWx1ZXMsIGdyYWIgYWxsIHRoZSBpbnB1dHMvZmllbGRzLCBjYWxsIGFub3RoZXIgZnVuY3Rpb24sIHdoaWNoIHdpbGwgaW50YWtlIHRoZSBjdXJyZW50IHdlYXRoZXIsIGtleSBpbnRvIHZhbHVlcywgXG5cbi8vIHRoZW4gZGlzcGxheSB0aG9zZSB2YWx1ZXMgdG8gdGhlIERPTT8gIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBib2R5IHsgXFxuICAgIGJhY2tncm91bmQtY29sb3I6IDtcXG59ICovXFxuLyogKiB7IFxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBwYWRkaW5nOiAwOyBcXG4gICAgbWFyZ2luOiAwO1xcbn0gICovXFxuLyogYm9keSB7IFxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7O1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoLi9lYXJ0aC1iYWNrZ3JvdW5kLmpwZyk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxufSAqL1xcbi8qIC5oZWFkZXItY29udGFpbmVyIHsgXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGhlaWdodDogMTJ2aDtcXG4gIGdhcDogMWVtOyBcXG5cXG59ICAqL1xcbi8qIC5oMS1oZWFkZXItc3R5bGVzIHsgXFxuICAgIGNvbG9yOiB3aGl0ZTsgXFxuICAgIGZvbnQtc2l6ZTogMi44cmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59ICovXFxuLyogLnNlYXJjaC1iYXItZWxlbWVudHMtY29udGFpbmVyIHsgXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICAgIGdhcDogMWVtOyBcXG5cXG59ICAqL1xcbi8qIC5zZWFyY2gtYmFyLWVsZW1lbnRzLWNvbnRhaW5lciA+IGlucHV0IHsgXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG59IFxcblxcbi5zZWFyY2gtYmFyLWVsZW1lbnRzLWNvbnRhaW5lciA+IGJ1dHRvbiB7IFxcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBjb2xvcjogYmxhY2s7IFxcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufSAgKi9cXG4vKiAjY3VycmVudC13ZWF0aGVyLWRhdGEgPiBoM3sgXFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufSAgICovXFxuLyogI2N1cnJlbnQtd2VhdGhlci1kYXRhIHsgXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59ICovXFxuLyogI2N1cnJlbnQtd2VhdGhlci1jb250YWluZXIgeyBcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGhlaWdodDogNDB2aDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn0gICovXFxuLyogI2ZvcmVjYXN0LTMtZGF5LXRpdGxlIHsgXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gICAgbWFyZ2luLXRvcDogMC41ZW07XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59ICovXFxuLyogI2ZvcmVjYXN0LWRheS0xLWNhcmQsIFxcbiNmb3JlY2FzdC1kYXktMi1jYXJkLCBcXG4jZm9yZWNhc3QtZGF5LTMtY2FyZCB7IFxcbiAgICBoZWlnaHQ6IDQ1dmg7XFxuICAgIHdpZHRoOiAyNXZ3O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgb3BhY2l0eTogMC43O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMCU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgY29sb3I6IHdoaXRlOyBcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufSAgKi9cXG4vKiAjZm9yZWNhc3QtZGF5cy1jb250YWluZXIgeyBcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMmVtOyBcXG4gICAgbWFyZ2luLXRvcDogMC41ZW07XFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcbn0gKi9cXG4vKiAjZm9yZWNhc3QtY29udGFpbmVyIHsgXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuXFxufSAqL1wiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7O0dBQUE7QUFJQTs7OztJQUFBO0FBTUE7Ozs7R0FBQTtBQU1BOzs7Ozs7SUFBQTtBQVFBOzs7O0dBQUE7QUFNQTs7Ozs7SUFBQTtBQVNBOzs7Ozs7Ozs7O0lBQUE7QUFZQTs7O0tBQUE7QUFLQTs7Ozs7R0FBQTtBQU9BOzs7OztJQUFBO0FBT0E7Ozs7Ozs7R0FBQTtBQVVBOzs7Ozs7Ozs7OztJQUFBO0FBYUE7Ozs7OztHQUFBO0FBU0E7Ozs7OztHQUFBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIGJvZHkgeyBcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogO1xcbn0gKi9cXG5cXG4vKiAqIHsgXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHBhZGRpbmc6IDA7IFxcbiAgICBtYXJnaW46IDA7XFxufSAgKi9cXG5cXG4vKiBib2R5IHsgXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTs7XFxuICAgIGJhY2tncm91bmQ6IHVybCguL2VhcnRoLWJhY2tncm91bmQuanBnKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG59ICovXFxuXFxuLyogLmhlYWRlci1jb250YWluZXIgeyBcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgaGVpZ2h0OiAxMnZoO1xcbiAgZ2FwOiAxZW07IFxcblxcbn0gICovXFxuXFxuLyogLmgxLWhlYWRlci1zdHlsZXMgeyBcXG4gICAgY29sb3I6IHdoaXRlOyBcXG4gICAgZm9udC1zaXplOiAyLjhyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn0gKi9cXG5cXG4vKiAuc2VhcmNoLWJhci1lbGVtZW50cy1jb250YWluZXIgeyBcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgZ2FwOiAxZW07IFxcbiAgICBcXG59ICAqL1xcblxcblxcblxcbi8qIC5zZWFyY2gtYmFyLWVsZW1lbnRzLWNvbnRhaW5lciA+IGlucHV0IHsgXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG59IFxcblxcbi5zZWFyY2gtYmFyLWVsZW1lbnRzLWNvbnRhaW5lciA+IGJ1dHRvbiB7IFxcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBjb2xvcjogYmxhY2s7IFxcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufSAgKi9cXG5cXG4vKiAjY3VycmVudC13ZWF0aGVyLWRhdGEgPiBoM3sgXFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufSAgICovXFxuXFxuLyogI2N1cnJlbnQtd2VhdGhlci1kYXRhIHsgXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59ICovXFxuXFxuLyogI2N1cnJlbnQtd2VhdGhlci1jb250YWluZXIgeyBcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGhlaWdodDogNDB2aDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn0gICovXFxuXFxuLyogI2ZvcmVjYXN0LTMtZGF5LXRpdGxlIHsgXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gICAgbWFyZ2luLXRvcDogMC41ZW07XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59ICovXFxuXFxuXFxuLyogI2ZvcmVjYXN0LWRheS0xLWNhcmQsIFxcbiNmb3JlY2FzdC1kYXktMi1jYXJkLCBcXG4jZm9yZWNhc3QtZGF5LTMtY2FyZCB7IFxcbiAgICBoZWlnaHQ6IDQ1dmg7XFxuICAgIHdpZHRoOiAyNXZ3O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgb3BhY2l0eTogMC43O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMCU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgY29sb3I6IHdoaXRlOyBcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufSAgKi9cXG5cXG4vKiAjZm9yZWNhc3QtZGF5cy1jb250YWluZXIgeyBcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMmVtOyBcXG4gICAgbWFyZ2luLXRvcDogMC41ZW07XFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcbn0gKi9cXG5cXG5cXG4vKiAjZm9yZWNhc3QtY29udGFpbmVyIHsgXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuXFxufSAqL1xcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9lYXJ0aC1iYWNrZ3JvdW5kLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5oMS1oZWFkZXItc3R5bGVzIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuKiB7XFxuICBmb250LWZhbWlseTogXFxcIkNvdXJpZXIgTmV3XFxcIiwgQ291cmllciwgbW9ub3NwYWNlO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxufVxcblxcbi5oZWFkZXItY29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgaGVpZ2h0OiAxMnZoO1xcbiAgZ2FwOiAxZW07XFxufVxcblxcbi5oMS1oZWFkZXItc3R5bGVzIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMi44cmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5zZWFyY2gtYmFyLWVsZW1lbnRzLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gIGdhcDogMWVtO1xcbn1cXG4uc2VhcmNoLWJhci1lbGVtZW50cy1jb250YWluZXIgaW5wdXQge1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG4uc2VhcmNoLWJhci1lbGVtZW50cy1jb250YWluZXIgYnV0dG9uIHtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuI2N1cnJlbnQtd2VhdGhlci1kYXRhIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuI2N1cnJlbnQtd2VhdGhlci1kYXRhIGgzIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG4jY3VycmVudC13ZWF0aGVyLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBoZWlnaHQ6IDQwdmg7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbiNmb3JlY2FzdC0zLWRheS10aXRsZSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICBtYXJnaW4tdG9wOiAwLjVlbTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuI2ZvcmVjYXN0LWRheS0xLWNhcmQsXFxuI2ZvcmVjYXN0LWRheS0yLWNhcmQsXFxuI2ZvcmVjYXN0LWRheS0zLWNhcmQge1xcbiAgaGVpZ2h0OiA0NXZoO1xcbiAgd2lkdGg6IDI1dnc7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIG9wYWNpdHk6IDAuNztcXG4gIGJvcmRlci1yYWRpdXM6IDEwJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4jZm9yZWNhc3QtZGF5cy1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAyZW07XFxuICBtYXJnaW4tdG9wOiAwLjVlbTtcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBdUJBO0VBQ0UsWUF4Qlc7QUFFYjs7QUF5QkE7RUFDRSw4Q0FBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUF0QkY7O0FBeUJBO0VBQ0UsMkJBQUE7RUFDQSxtREFBQTtFQUNBLHNCQUFBO0FBdEJGOztBQXlCQTtFQWxDRSx1QkFMWTtFQU1aLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFFBQUE7QUFhRjs7QUFzQkE7RUFDRSxZQTNDYztFQTRDZCxpQkEzQ1c7RUE0Q1gsaUJBQUE7QUFuQkY7O0FBNkJBO0VBRUUsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsUUFBQTtBQTNCRjtBQTZCRTtFQUNFLGVBQUE7QUEzQko7QUE4QkU7RUFDRSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtBQTVCSjs7QUFpQ0E7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBOUJGO0FBZ0NFO0VBQ0UsZUFBQTtFQUNBLDBCQUFBO0FBOUJKOztBQWtDQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBL0JGOztBQWtDQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLDBCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FBL0JGOztBQWtDQTs7O0VBNUZFLFlBQUE7RUFDRSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQWdFSjs7QUE0QkE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxRQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQXpCRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIkdGl0bGVDb2xvcjogd2hpdGU7IFxcbiRoZWFkZXJDb2xvcjogYmxhY2s7XFxuJGgxSGVhZGVyQ29sb3I6IHdoaXRlO1xcbiRoMUZvbnRTaXplOiAyLjhyZW07XFxuXFxuQG1peGluIGhlYWRlckNvbnRhaW5lclN0eWxlcygpIHsgXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkaGVhZGVyQ29sb3I7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDEydmg7XFxuICBnYXA6IDFlbTsgXFxufSBcXG5cXG5AbWl4aW4gZm9yZWNhc3RDYXJkcygpIHsgXFxuICBoZWlnaHQ6IDQ1dmg7XFxuICAgIHdpZHRoOiAyNXZ3O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgb3BhY2l0eTogMC43O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMCU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgY29sb3I6IHdoaXRlOyBcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5oMS1oZWFkZXItc3R5bGVzIHsgXFxuICBjb2xvcjogJHRpdGxlQ29sb3I7IFxcbn0gXFxuXFxuKiB7IFxcbiAgZm9udC1mYW1pbHk6J0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHBhZGRpbmc6IDA7IFxcbiAgbWFyZ2luOiAwO1xcbn0gXFxuXFxuYm9keSB7IFxcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5OztcXG4gIGJhY2tncm91bmQ6IHVybCguL2VhcnRoLWJhY2tncm91bmQuanBnKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxufSAgXFxuXFxuLmhlYWRlci1jb250YWluZXIgeyBcXG4gIEBpbmNsdWRlIGhlYWRlckNvbnRhaW5lclN0eWxlcztcXG59IFxcblxcbi5oMS1oZWFkZXItc3R5bGVzIHsgXFxuICBjb2xvcjogJGgxSGVhZGVyQ29sb3I7IFxcbiAgZm9udC1zaXplOiAkaDFGb250U2l6ZTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn0gXFxuXFxuLy8gLnNlYXJjaC1iYXItZWxlbWVudHMtY29udGFpbmVyIHsgXFxuLy8gICBkaXNwbGF5OiBmbGV4O1xcbi8vICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4vLyAgIGdhcDogMWVtOyBcXG4gIFxcbi8vIH0gXFxuXFxuLnNlYXJjaC1iYXItZWxlbWVudHMtY29udGFpbmVyIHsgXFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gIGdhcDogMWVtOyBcXG5cXG4gIGlucHV0IHsgXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gIH0gXFxuXFxuICBidXR0b24geyBcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgY29sb3I6IGJsYWNrOyBcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgfVxcblxcbn0gXFxuXFxuI2N1cnJlbnQtd2VhdGhlci1kYXRhIHsgXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICBjb2xvcjogd2hpdGU7IFxcblxcbiAgaDMgeyBcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gIH1cXG59XFxuXFxuI2N1cnJlbnQtd2VhdGhlci1jb250YWluZXIgeyBcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGhlaWdodDogNDB2aDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59IFxcblxcbiNmb3JlY2FzdC0zLWRheS10aXRsZSB7IFxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgbWFyZ2luLXRvcDogMC41ZW07XFxuICBjb2xvcjogd2hpdGU7XFxufSAgXFxuXFxuI2ZvcmVjYXN0LWRheS0xLWNhcmQsIFxcbiNmb3JlY2FzdC1kYXktMi1jYXJkLCBcXG4jZm9yZWNhc3QtZGF5LTMtY2FyZCB7IFxcbiAgQGluY2x1ZGUgZm9yZWNhc3RDYXJkcztcXG59ICBcXG5cXG5cXG4jZm9yZWNhc3QtZGF5cy1jb250YWluZXIgeyBcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMmVtOyBcXG4gIG1hcmdpbi10b3A6IDAuNWVtO1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxufVxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiXSwibmFtZXMiOlsic2VhcmNoQm94IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInNlYXJjaEJ0biIsIndlYXRoZXJDb250YWluZXIiLCJzdG9yZWRXZWF0aGVyRGF0YSIsImZldGNoRGF0YSIsImlucHV0IiwiY2l0eURhdGEiLCJjb25zb2xlIiwibG9nIiwiZ2V0RGF0YSIsImZldGNoIiwianNvbkRhdGEiLCJqc29uIiwiY3VycmVudFdlYXRoZXJEYXRhIiwiZGlzcGxheUN1cnJlbnRXZWF0aGVyIiwiYWRkV2VhdGhlckZvcmVjYXN0MSIsImFkZFdlYXRoZXJGb3JlY2FzdDIiLCJhZGRXZWF0aGVyRm9yZWNhc3QzIiwid2VhdGhlciIsImN1cnJlbnRXZWF0aGVySWNvbiIsImN1cnJlbnRGb3JlY2FzdCIsInRleHRDb250ZW50Iiwid2VhdGhlckljb24iLCJJbWFnZSIsInNyYyIsImN1cnJlbnQiLCJjb25kaXRpb24iLCJpY29uIiwibG9jYXRpb25EYXRhIiwibG9jYXRpb24iLCJuYW1lIiwid2VhdGhlckRlc2NyaXB0aW9uRGF0YSIsInRleHQiLCJjdXJyZW50V2VhdGhlck51bWJlckRhdGEiLCJ0ZW1wX2YiLCJ3aW5kRGF0YSIsIndpbmRfbXBoIiwid2luZERpcmVjdGlvbiIsIndpbmRfZGlyIiwicmFpbkluY2hlcyIsInByZWNpcF9pbiIsImh1bWlkaXR5TGV2ZWwiLCJodW1pZGl0eSIsIm5ld0ltZyIsImFwcGVuZENoaWxkIiwiY3VycmVudFdlYXRoZXJMb2NhdGlvblRleHQiLCJjdXJyZW50V2VhdGhlckRlc2NyaXB0aW9uVGV4dCIsImN1cnJlbnRXZWF0aGVyVGVtcERhdGEiLCJjdXJyZW50V2VhdGhlcldpbmREYXRhIiwiY3VycmVudFdlYXRoZXJXaW5kRGlyZWN0aW9uIiwiY3VycmVudFdlYXRoZXJSYWluIiwiY3VycmVudEh1bWlkaXR5TGV2ZWwiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImlucHV0VmFsdWUiLCJ2YWx1ZSIsImNlbGNpdXNCdG4iLCJjdXJyZW50Q2VsY2l1c1RlbXAiLCJ0ZW1wX2MiLCJkYXkxSGlnaFRlbXAiLCJmb3JlY2FzdCIsImZvcmVjYXN0ZGF5IiwiZGF5IiwibWF4dGVtcF9jIiwiZGF5MUxvd1RlbXAiLCJtaW50ZW1wX2MiLCJoaWdoTG93VGVtcERhdGEiLCJkYXkySGlnaFRlbXAiLCJkYXkyTG93VGVtcCIsImhpZ2hMb3dUZW1wRGF0YURheTIiLCJkYXkzSGlnaFRlbXAiLCJkYXkzTG93VGVtcCIsImhpZ2hMb3dUZW1wRGF0YURheTMiLCJmQnRuIiwiY3VycmVudEZUZW1wIiwibWF4dGVtcF9mIiwibWludGVtcF9mIiwiZm9yZWNhc3REYXRhIiwiaW5wdXRGb3JJbWdEYXkxIiwiZGF5MURhdGUiLCJkYXRlIiwiZGF5MUljb24iLCJjaGFuY2VPZlJhaW4iLCJkYWlseV9jaGFuY2Vfb2ZfcmFpbiIsInV2SW5kZXgiLCJ1diIsImF2Z2h1bWlkaXR5Iiwid2luZCIsIm1heHdpbmRfbXBoIiwiYXBwZW5kIiwiZGF0ZUFuZEljb25EYXRhIiwiY2hhbmNlT2ZSYWluRGF0YSIsInV2SW5kZXhEYXRhIiwiaHVtaWRpdHlEYXRhIiwiZm9yZWNhc3REYXRhMiIsImljb25EYXRhIiwiZGF5MkRhdGUiLCJkYXkySWNvbkltZyIsImRheTJDaGFuY2VPZlJhaW4iLCJkYXkyVVZJbmRleCIsImRheTJIdW1pZGl0eSIsImRheTJXaW5kU3BlZWQiLCJkYXRlRGF0YSIsImZvcmVjYXN0RGF0YTMiLCJkYXkzRGF0ZSIsImRheTNJbWdJY29uIiwiZGF5M1JhaW5DaGFuY2UiLCJkYXkzVVZJbmRleCIsImRheTNIdW1pZGl0eSIsImRheTNXaW5kIl0sInNvdXJjZVJvb3QiOiIifQ==