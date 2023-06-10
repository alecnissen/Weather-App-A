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
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./earth-background.jpg */ "./src/earth-background.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* body { \n    background-color: ;\n} */\n* {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\nbody {\n  /* background-color: rgb(177, 172, 172); */\n  background-color: lightgrey;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-size: cover;\n}\n\n.header-container {\n  background-color: black;\n  text-align: center;\n  height: 12vh;\n  gap: 1em;\n}\n\n.h1-header-styles {\n  color: white;\n  font-size: 2.8rem;\n  font-weight: bold;\n}\n\n.search-bar-elements-container {\n  display: flex;\n  justify-content: flex-end;\n  gap: 1em;\n}\n\n.search-bar-elements-container > input {\n  font-size: 1rem;\n}\n\n.search-bar-elements-container > button {\n  font-size: 1rem;\n  background-color: white;\n  color: black;\n  border: 2px solid black;\n  font-weight: bold;\n}\n\n#current-weather-data > h3 {\n  font-size: 2rem;\n  text-decoration: underline;\n}\n\n#current-weather-data {\n  text-align: center;\n  font-size: 1.2rem;\n  font-weight: bolder;\n  color: white;\n}\n\n#current-weather-container {\n  display: flex;\n  justify-content: center;\n  height: 40vh;\n  /* margin-top: 2em; */\n  color: white;\n  /* height: 285px;\n  width: 285px; */\n  /* background-color: rgb(177, 172, 172); */\n}\n\n#forecast-3-day-title {\n  text-align: center;\n  font-size: 1.3rem;\n  font-weight: bold;\n  text-decoration: underline;\n  margin-top: 0.5em;\n  color: white;\n}\n\n#forecast-day-1-card,\n#forecast-day-2-card,\n#forecast-day-3-card {\n  /* width: 250px; \n  height: 250px; */\n  height: 45vh;\n  width: 25vw;\n  /* background-color: rgb(177, 172, 172); */\n  background-color: black;\n  opacity: 0.7;\n  border-radius: 10%;\n  text-align: center;\n  color: white;\n  font-weight: bold;\n}\n\n#forecast-days-container {\n  display: flex;\n  justify-content: center;\n  gap: 2em;\n  margin-top: 0.5em;\n  font-size: 1.1rem;\n}\n\n/* #forecast-container { \n    text-align: center;\n    font-size: 2rem;\n    font-weight: bold;\n    text-decoration: underline;\n\n} */", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;;GAAA;AAIA;EACI,sBAAA;EACA,UAAA;EACA,SAAA;AAAJ;;AAGA;EACI,0CAAA;EACA,2BAAA;EACA,mDAAA;EACA,sBAAA;AAAJ;;AAGA;EACE,uBAAA;EACA,kBAAA;EACA,YAAA;EACA,QAAA;AAAF;;AAIA;EACI,YAAA;EACA,iBAAA;EACA,iBAAA;AADJ;;AAIA;EACI,aAAA;EACA,yBAAA;EACA,QAAA;AADJ;;AAKA;EACI,eAAA;AAFJ;;AAKA;EACI,eAAA;EACA,uBAAA;EACA,YAAA;EACA,uBAAA;EACA,iBAAA;AAFJ;;AAKA;EACI,eAAA;EACA,0BAAA;AAFJ;;AAKA;EACI,kBAAA;EACA,iBAAA;EACA,mBAAA;EACA,YAAA;AAFJ;;AAKA;EACI,aAAA;EACA,uBAAA;EACA,YAAA;EACA,qBAAA;EACA,YAAA;EACA;iBAAA;EAEA,0CAAA;AAFJ;;AAKA;EACI,kBAAA;EACA,iBAAA;EACA,iBAAA;EACA,0BAAA;EACA,iBAAA;EACA,YAAA;AAFJ;;AAMA;;;EAGI;kBAAA;EAEA,YAAA;EACA,WAAA;EACA,0CAAA;EACA,uBAAA;EACA,YAAA;EACA,kBAAA;EACA,kBAAA;EACA,YAAA;EACA,iBAAA;AAHJ;;AAMA;EACI,aAAA;EACA,uBAAA;EACA,QAAA;EACA,iBAAA;EACA,iBAAA;AAHJ;;AAOA;;;;;;GAAA","sourcesContent":["/* body { \n    background-color: ;\n} */\n\n* { \n    box-sizing: border-box;\n    padding: 0; \n    margin: 0;\n} \n\nbody { \n    /* background-color: rgb(177, 172, 172); */\n    background-color: lightgrey;;\n    background: url(./earth-background.jpg);\n    background-size: cover;\n}\n\n.header-container { \n  background-color: black;\n  text-align: center;\n  height: 12vh;\n  gap: 1em; \n\n} \n\n.h1-header-styles { \n    color: white; \n    font-size: 2.8rem;\n    font-weight: bold;\n}\n\n.search-bar-elements-container { \n    display: flex;\n    justify-content: flex-end;\n    gap: 1em; \n    \n} \n\n.search-bar-elements-container > input { \n    font-size: 1rem;\n} \n\n.search-bar-elements-container > button { \n    font-size: 1rem;\n    background-color: white;\n    color: black; \n    border: 2px solid black;\n    font-weight: bold;\n} \n\n#current-weather-data > h3{ \n    font-size: 2rem;\n    text-decoration: underline;\n}  \n\n#current-weather-data { \n    text-align: center;\n    font-size: 1.2rem;\n    font-weight: bolder;\n    color: white;\n}\n\n#current-weather-container { \n    display: flex;\n    justify-content: center;\n    height: 40vh;\n    /* margin-top: 2em; */\n    color: white;\n    /* height: 285px;\n    width: 285px; */\n    /* background-color: rgb(177, 172, 172); */\n} \n\n#forecast-3-day-title { \n    text-align: center;\n    font-size: 1.3rem;\n    font-weight: bold;\n    text-decoration: underline;\n    margin-top: 0.5em;\n    color: white;\n}\n\n\n#forecast-day-1-card, \n#forecast-day-2-card, \n#forecast-day-3-card { \n    /* width: 250px; \n    height: 250px; */\n    height: 45vh;\n    width: 25vw;\n    /* background-color: rgb(177, 172, 172); */\n    background-color: black;\n    opacity: 0.7;\n    border-radius: 10%;\n    text-align: center;\n    color: white; \n    font-weight: bold;\n} \n\n#forecast-days-container { \n    display: flex;\n    justify-content: center;\n    gap: 2em; \n    margin-top: 0.5em;\n    font-size: 1.1rem;\n}\n\n\n/* #forecast-container { \n    text-align: center;\n    font-size: 2rem;\n    font-weight: bold;\n    text-decoration: underline;\n\n} */\n\n"],"sourceRoot":""}]);
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
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".h1-header-styles {\n  color: white;\n}\n\n* {\n  font-family: \"Courier New\", Courier, monospace;\n}", "",{"version":3,"sources":["webpack://./src/styles.scss"],"names":[],"mappings":"AAEA;EACE,YAHW;AAEb;;AAIA;EACE,8CAAA;AADF","sourcesContent":["$titleColor: white; \n\n.h1-header-styles { \n  color: $titleColor; \n} \n\n* { \n  font-family:'Courier New', Courier, monospace\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBLGlGQUFpRjtBQUNqRjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9zdHlsZXMuc2NzcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9zdHlsZS5jc3M/ZWZiZiIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3N0eWxlcy5zY3NzP2E2MDkiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgJy4vc3R5bGVzLnNjc3MnO1xuXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcblxuaW1wb3J0ICcuL3N0eWxlcy5zY3NzJztcblxuLy8gYWRkZWQgcGhvdG8gY3JlZGl0LCBzbyBuZXh0IEkgd2lsbCB1cGRhdGUgaW5wdXQgdmFsdWVzIHRvIHVzZSBodW1pZGl0eSBhbmQgd2luZCBkaXJlY3Rpb24sIFxuXG4vLyBcblxuXG5cbi8vIE9rIHNvIGdoIHBhZ2VzIGlzIHdvcmtpbmcsIHNhc3MgaXMgdXAgYW5kIHJ1bm5pbmchIEhlbGwgeWVzLCBcblxuLy8gbmV4dCBJIHdpbGwgc3R5bGUgd2l0aCBzYXNzLCBjbGVhbiB1cCB0aGUgc3R5bGluZywgaW1wb3J0IHNvbWUgZm9udHMsIFxuXG4vLyBmaXggdGhlIGN1cnJlbnQgdGVtcCB2cyBmZWVscyBsaWtlIHRlbXAgY2hhbmdlLCBcblxuLy8gdGhlbiBjYWxsIGl0IGEgZGF5LCBcblxuLy8gc2FzcywgdXNlIGZvbnRzLCBzZWUgaWYgeW91IGNhbiB0cmFuc2ZlciB0aGUgY3NzIHlvdSB3cm90ZSBpbnRvIHNhc3MsIHVzZSB2YXJpYWJsZXMsIG1peGlucywgbmVzdGluZyBcblxuLy8gZm9udHMsIHdlYXRoZXIgdHlwZSBmb250XG5cbi8vIGluIG9yZGVyIHRvIHVzZSBlYXJ0aCBiYWNrZ3JvdW5kIGltZyB5b3UgbXVzdCBpbXBvcnQgaXQgYW5kIHNlZSBpZiB5b3UgY2FuIHVzZSBpdCBpbiBjc3MgXG5cbi8vIGJ1dCBpbiBqcywgXG5cbi8vIHF1ZXJ5IHNlbGVjdG9yIHRoZSBib2R5LCBzZWxlY3QgZWxlbWVudCwgXG5cbi8vIGFkZCB0aGUgaW1nIGFzIGEgYmFja2dyb3VuZCwgYW5kIHNldCB0aGUgaW1wb3J0ZWQgaW1nIGFzIHRoZSBzcmMuIFxuXG4vLyB3aHkgZm9lcyBmIGNoYW5nZSB3aGVuIEkgZW50ZXIgaXQgYWdhaW4/IENoZWNrIHRvIG1ha2Ugc3VyZSB5b3UgYXJlIGxvZ2dpbmcgY29ycmVjdCBkYXlzIFxuXG4vLyBjaGFuZ2UgaXQgdG8gZmVlbHMgbGlrZSBpbnN0ZWFkIG9mIGN1cnJlbnQgdGVtcCBcblxuLy8gT0sgc28gdG9kYXksIEkgTGlrZSB0aGUgc3R5bGluZyBmb3IgdGhlIGJhY2tncm91bmQsIG1vdmUgdGhlIHRoZSBpbWdzIGludG8gdGhlIHNyYyBkaXJlY3RvcnksIFxuXG4vLyBhbmQgdXNlIGdoIHBhZ2VzLCB0byBzZWUgaWYgdGhlIGltYWdlcyByZW5kZXIsIFxuXG4vLyBhbHNvIGNoYW5nZSB0aGUgY3VycmVudCB3ZWF0aGVyLCB0byB1c2UgY3VycmVudCBpbnN0ZWFkIG9mIGZlZWxzIGxpa2UsIGRvdWJsZSBjaGVjayB3aXRoIHRoYXQsIFxuXG4vLyBsYXN0IHRyeSB0byBpbnN0YWxsIHNhc3MsIG1heWJlIGFzayBpZiBpdCBpcyBuZWNlc3NhcnkgdG8gdXNlIHR3byBKUyBmaWxlcywgXG5cbi8vIGJydXNoIHVwIG9uIHRoZSBzdHlsaW5nIHRvbywgbWF5YmUgdXNlIERPTSBzdHlsaW5nIGZvciB0aGUgMyBkYXkgZm9yZWNhc3QgYm94ZXMsIG9uY2UgZGF0YSBpcyBlbnRlcmVkLCB0aGVuIGFwcGx5IHRoZSBiYWNrZ3JvdW5kIHN0eWxlcywgXG5cbi8vIHRlc3QgZ2ggcGFnZXMsIFxuXG4vLyBob3cgY2FuIEkgZGlzcGxheSBhbGwgY29udGVudCwgd2VicGFjayBpc3N1ZSBvZiBnaCBwYWdlcyBub3QgZGlzcGxheWluZyB0aGUgY29udGVudCwgaXQgb25seSBkaXNwbGF5cyB0aGUgaHRtbC4gXG5cbmxldCBzZWFyY2hCb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoLWJveCcpOyBcblxubGV0IHNlYXJjaEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gtYnRuJyk7IFxuXG4vLyBjdXJyZW50IHdlYXRoZXIgZGF0YSBzdG9yZWQgaW4gaGVyZSwgXG5sZXQgd2VhdGhlckNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXJyZW50LXdlYXRoZXItY29udGFpbmVyJyk7IFxuXG5sZXQgc3RvcmVkV2VhdGhlckRhdGEgXG5cbmFzeW5jIGZ1bmN0aW9uIGZldGNoRGF0YShpbnB1dCkgeyBcblxuXG4gICAgbGV0IGNpdHlEYXRhID0gaW5wdXQ7IFxuICAgIFxuICAgIGNvbnNvbGUubG9nKCdUaGUgZGF0YSBwYXNzZWQgaW4gaXM6ICcgKyBjaXR5RGF0YSk7XG4gICAgXG4gICAgY29uc3QgZ2V0RGF0YSA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT00NTQ2NGRhMzg4OTI0NTBkOTVmMTA0MzMyMzA1MDYgJnE9JHtjaXR5RGF0YX0mZGF5cz01JmFxaT1ubyZhbGVydHM9bm9gKTtcblxuICAgIGNvbnN0IGpzb25EYXRhID0gYXdhaXQgZ2V0RGF0YS5qc29uKCk7XG4gICAgXG4gICAgbGV0IGN1cnJlbnRXZWF0aGVyRGF0YSA9IGpzb25EYXRhO1xuICAgIFxuICAgIHN0b3JlZFdlYXRoZXJEYXRhID0gY3VycmVudFdlYXRoZXJEYXRhOyBcblxuICAgY29uc29sZS5sb2coY3VycmVudFdlYXRoZXJEYXRhKTtcblxuICAgZGlzcGxheUN1cnJlbnRXZWF0aGVyKGN1cnJlbnRXZWF0aGVyRGF0YSk7XG5cbiAgIGFkZFdlYXRoZXJGb3JlY2FzdDEoY3VycmVudFdlYXRoZXJEYXRhKTtcblxuICAgYWRkV2VhdGhlckZvcmVjYXN0MihjdXJyZW50V2VhdGhlckRhdGEpO1xuXG4gICBhZGRXZWF0aGVyRm9yZWNhc3QzKGN1cnJlbnRXZWF0aGVyRGF0YSk7IFxuICAgIFxuICAgIFxuICAvLyAgdG9nZ2xlKGN1cnJlbnRXZWF0aGVyRGF0YSk7XG5cbiAgLy8gcmV0dXJuIGpzb25EYXRhO1xuXG59IFxuXG4vLyBob3cgY2FuIEkgc3RvcmUgd2VhdGhlciBkYXRhIG91dHNpZGUgb2YgdGhlIGZ1bmN0aW9uPyBcblxuLy8gYWxsIEkgY2FuIHRoaW5rIG9mIGlzIGEgZ2xvYmFsIHZhcmlhYmxlLGNcblxuLy8gZmV0Y2hEYXRhLnRoZW4oZGF0YSA9PiBjb25zb2xlLmxvZyhkYXRhKSk7IFxuXG4vLyBPSyBJIGFtIGFibGUgdG8gZ2V0IHRoZSB3ZWF0aGVyIGRhdGEsIHdpdGhpbiBteSBldmVudCBsaXN0ZW5lciBmdW5jdGlvbiBcbiBcblxuLy8gIGxldCB3ZWF0aGVyQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1cnJlbnQtd2VhdGhlci1jb250YWluZXInKTsgXG5cbmFzeW5jIGZ1bmN0aW9uIGRpc3BsYXlDdXJyZW50V2VhdGhlcih3ZWF0aGVyKSB7IFxuXG4gICAgbGV0IGN1cnJlbnRXZWF0aGVySWNvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXJyZW50LXdlYXRoZXItaWNvbicpOyBcbiAgICAvLyBjbGVhciBET00sIHJlcGxhY2VDaGlsZHJlbiBiZWZvcmUgYXBwZW5kaW5nIG5ld1xuXG4gICAgbGV0IGN1cnJlbnRGb3JlY2FzdCA9IGF3YWl0IHdlYXRoZXI7IFxuXG4gICAgLy8gY29uc29sZS5sb2coY3VycmVudEZvcmVjYXN0LmxvY2F0aW9uKSBcblxuICAgIGN1cnJlbnRXZWF0aGVySWNvbi50ZXh0Q29udGVudCA9ICcnOyBcblxuXG5cbiAgICBsZXQgd2VhdGhlckljb24gPSBuZXcgSW1hZ2UoKTsgXG5cbiAgICB3ZWF0aGVySWNvbi5zcmMgPSBjdXJyZW50Rm9yZWNhc3QuY3VycmVudC5jb25kaXRpb24uaWNvbjtcblxuICAgIC8vIGNvbnNvbGUubG9nKGN1cnJlbnRGb3JlY2FzdC5jdXJyZW50LmNvbmRpdGlvbilcblxuICAgIGxldCBsb2NhdGlvbkRhdGEgPSBjdXJyZW50Rm9yZWNhc3QubG9jYXRpb24ubmFtZTtcblxuICAgIGxldCB3ZWF0aGVyRGVzY3JpcHRpb25EYXRhID0gY3VycmVudEZvcmVjYXN0LmN1cnJlbnQuY29uZGl0aW9uLnRleHQ7IFxuXG4gICAgbGV0IGN1cnJlbnRXZWF0aGVyTnVtYmVyRGF0YSA9IGN1cnJlbnRGb3JlY2FzdC5jdXJyZW50LnRlbXBfZjtcblxuICAgIGxldCB3aW5kRGF0YSA9IGN1cnJlbnRGb3JlY2FzdC5jdXJyZW50LndpbmRfbXBoO1xuXG4gICAgbGV0IHdpbmREaXJlY3Rpb24gPSBjdXJyZW50Rm9yZWNhc3QuY3VycmVudC53aW5kX2RpcjtcblxuICAgIGxldCByYWluSW5jaGVzID0gY3VycmVudEZvcmVjYXN0LmN1cnJlbnQucHJlY2lwX2luOyBcblxuICAgIGxldCBodW1pZGl0eUxldmVsID0gY3VycmVudEZvcmVjYXN0LmN1cnJlbnQuaHVtaWRpdHk7XG5cbiAgICBsZXQgbmV3SW1nID0gbmV3IEltYWdlKCk7XG5cbiAgICBuZXdJbWcuc3JjID0gY3VycmVudEZvcmVjYXN0LmN1cnJlbnQuY29uZGl0aW9uLmljb247XG5cbi8vICAgIGxldCBjdXJyZW50V2VhdGhlckljb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VycmVudC13ZWF0aGVyLWljb24nKTsgXG5cbiAgIC8vIGRvbnQgYXBwZW5kIHVzZSB2YXJpYWJsZSBhbmQgdGVtcGxhdGUgbGl0ZXJhbHMsIGFwcGVuZGluZyBtYXkgc3RvcCB0aGUgYWRkaW5nIG9udG8gdG8gaW5zdGVhZCBvZiByZXBsYWNpbmcsIFxuXG4gICBjdXJyZW50V2VhdGhlckljb24uYXBwZW5kQ2hpbGQod2VhdGhlckljb24pO1xuXG4gICBsZXQgY3VycmVudFdlYXRoZXJMb2NhdGlvblRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VycmVudC13ZWF0aGVyLWxvY2F0aW9uLXAnKTsgXG5cbiAgIGN1cnJlbnRXZWF0aGVyTG9jYXRpb25UZXh0LnRleHRDb250ZW50ID0gYExvY2F0aW9uOiAke2xvY2F0aW9uRGF0YX1gO1xuXG4gICBsZXQgY3VycmVudFdlYXRoZXJEZXNjcmlwdGlvblRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VycmVudC13ZWF0aGVyLWRlc2NyaXB0aW9uLXAnKTsgXG5cbiAgIGN1cnJlbnRXZWF0aGVyRGVzY3JpcHRpb25UZXh0LnRleHRDb250ZW50ID0gYENvbmRpdGlvbnM6ICR7d2VhdGhlckRlc2NyaXB0aW9uRGF0YX1gXG5cbiAgIGxldCBjdXJyZW50V2VhdGhlclRlbXBEYXRhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1cnJlbnQtd2VhdGhlci10ZW1wLWRhdGEnKTsgXG5cbiAgIGN1cnJlbnRXZWF0aGVyVGVtcERhdGEudGV4dENvbnRlbnQgPSBgVGVtcHJhdHVyZSBJczogJHtjdXJyZW50V2VhdGhlck51bWJlckRhdGF9XFx1MDBCMEZgO1xuXG4gICBsZXQgY3VycmVudFdlYXRoZXJXaW5kRGF0YSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXJyZW50LXdlYXRoZXItd2luZC1kYXRhJyk7IFxuXG4gICBjdXJyZW50V2VhdGhlcldpbmREYXRhLnRleHRDb250ZW50ID0gYFdpbmQgU3BlZWQ6ICR7d2luZERhdGF9IG1waGA7XG5cbiAgIGxldCBjdXJyZW50V2VhdGhlcldpbmREaXJlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VycmVudC13ZWF0aGVyLXdpbmQtZGlyZWN0aW9uLWRhdGEnKTtcblxuICAgY3VycmVudFdlYXRoZXJXaW5kRGlyZWN0aW9uLnRleHRDb250ZW50ID0gYFdpbmQgRGlyZWN0aW9uOiAke3dpbmREaXJlY3Rpb259YDtcblxuICAgbGV0IGN1cnJlbnRXZWF0aGVyUmFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXJyZW50LXdlYXRoZXItcmFpbi1pbmNoZXMtZGF0YScpO1xuXG4gICBjdXJyZW50V2VhdGhlclJhaW4udGV4dENvbnRlbnQgPSBgUmFpbjogJHtyYWluSW5jaGVzfSBpbmA7XG5cbiAgIGxldCBjdXJyZW50SHVtaWRpdHlMZXZlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXJyZW50LXdlYXRoZXItaHVtaWRpdHktZGF0YScpOyBcblxuICAgY3VycmVudEh1bWlkaXR5TGV2ZWwudGV4dENvbnRlbnQgPSBgSHVtaWRpdHk6ICR7aHVtaWRpdHlMZXZlbH0lYFxuXG59IFxuXG4vLyBuZWVkcyB0byBzb21laG93IGJlIGNsZWFyZWQgaW4gdGhlIHNlYXJjaCBidG4gXG5cbnNlYXJjaEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7IFxuXG4gICAgY29uc29sZS5sb2coJ2NsaWNrJyk7XG5cbiAgICBsZXQgaW5wdXRWYWx1ZSA9IHNlYXJjaEJveC52YWx1ZTtcblxuICAgIGZldGNoRGF0YShpbnB1dFZhbHVlKTtcblxufSk7IFxuXG4vLyBncmFiIHRoZSBpbnB1dCBmaWVsZHMgdGhhdCBoYXZlIEYgXG5cbi8vIHNldCB2YXJpYWJsZXMgZm9yIGN1cnJlbnQgdGVtcCBpbiBjLCBoaWdoIHRlbXAgaW4gYywgbG93IHRlbXAgaW4gYyBcblxuLy8gc2V0IHRob3NlIHZhcmlhYmxlcywgXG5cbi8vIHNldCBhIHZhcmlhYmxlIGlzQyB0byBmYWxzZSwgXG5cbi8vIGNvbmRpdGlvbmFsIGlmIGMgaXMgdHJ1ZSBncmFiIHRoZSB2YWx1ZXMsIHRoZW4gcmVwbGFjZSB0aGVtIHdpdGggYyB2YWx1ZSwgXG5cbi8vIGlmIGZhbHNlLCBzd2l0Y2ggdGhlbSBiYWNrIHRvIEYsIFxuXG4vLyBjYW4gc3dpdGNoIHRoZSB0ZW1wLCBcblxuLy8gYnV0IGhvdyBjYW4gSSB0b2dnbGUgYmFjayBhbmQgZm9ydGggXG5cbi8vIG1heWJlIEkgc2hvdWxkIG1ha2UgYW5vdGhlciB2YXJpYWJsZSBmb3IgRiBcblxuXG4vLyBsZXQgdG9nZ2xlVGVtcHJhdHVyZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdGLUMtdG9nZ2xlLWJ0bicpOyBcblxuLy8gbGV0IGlzQ2VsY2l1cyA9IGZhbHNlOyBcblxuLy8gLy8gbGV0IGlzRiA9IHRydWU7IFxuXG4vLyBIRVJFIVxuXG4vLyBncmFiIHRoZSBlbGVtZW50LCBDIGVsZW1lbnQgXG5cbmxldCBjZWxjaXVzQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0MtdG9nZ2xlLWJ0bicpOyBcblxuY2VsY2l1c0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG5cbiAgICBsZXQgY3VycmVudENlbGNpdXNUZW1wID0gc3RvcmVkV2VhdGhlckRhdGEuY3VycmVudC50ZW1wX2M7IFxuXG4gICAgbGV0IGN1cnJlbnRXZWF0aGVyVGVtcERhdGEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VycmVudC13ZWF0aGVyLXRlbXAtZGF0YScpOyBcblxuICAgIGN1cnJlbnRXZWF0aGVyVGVtcERhdGEudGV4dENvbnRlbnQgPSBgVGVtcHJhdHVyZSBJczogJHtjdXJyZW50Q2VsY2l1c1RlbXB9XFx1MDBCMENgOyBcblxuICAgIGxldCBkYXkxSGlnaFRlbXAgPSBzdG9yZWRXZWF0aGVyRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXkubWF4dGVtcF9jO1xuXG4gICAgbGV0IGRheTFMb3dUZW1wID0gc3RvcmVkV2VhdGhlckRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uZGF5Lm1pbnRlbXBfYztcblxuICAgIGxldCBoaWdoTG93VGVtcERhdGEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXQtZm9yZWNhc3QtZGF5MS1oaWdoLWxvdycpOyBcblxuICAgIGhpZ2hMb3dUZW1wRGF0YS50ZXh0Q29udGVudCA9IGBIaWdoIHRvZGF5IGlzOiAke2RheTFIaWdoVGVtcH1cXHUwMEIwQyBMb3cgdG9kYXkgaXM6ICR7ZGF5MUxvd1RlbXB9XFx1MDBCMENgO1xuXG4gICAgbGV0IGRheTJIaWdoVGVtcCA9IHN0b3JlZFdlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzFdLmRheS5tYXh0ZW1wX2M7XG5cbiAgICBsZXQgZGF5Mkxvd1RlbXAgPSBzdG9yZWRXZWF0aGVyRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsxXS5kYXkubWludGVtcF9jOyBcblxuICAgIGxldCBoaWdoTG93VGVtcERhdGFEYXkyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0LWZvcmVjYXN0LWRheTItaGlnaC1sb3cnKTtcblxuICAgIGhpZ2hMb3dUZW1wRGF0YURheTIudGV4dENvbnRlbnQgPSBgSGlnaCBUb2RheSBpczogJHtkYXkySGlnaFRlbXB9XFx1MDBCMEMgTG93IHRvZGF5IGlzOiAke2RheTJMb3dUZW1wfVxcdTAwQjBDYDsgIFxuXG4gICAgLy8gXG5cbiAgICBsZXQgZGF5M0hpZ2hUZW1wID0gc3RvcmVkV2VhdGhlckRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMl0uZGF5Lm1heHRlbXBfYztcblxuICAgIGxldCBkYXkzTG93VGVtcCA9IHN0b3JlZFdlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzJdLmRheS5taW50ZW1wX2M7XG5cbiAgICBsZXQgaGlnaExvd1RlbXBEYXRhRGF5MyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dC1mb3JlY2FzdC1kYXkzLWhpZ2gtbG93Jyk7XG5cbiAgICBoaWdoTG93VGVtcERhdGFEYXkzLnRleHRDb250ZW50ID0gYEhpZ2ggdG9kYXkgaXM6ICR7ZGF5M0hpZ2hUZW1wfVxcdTAwQjBDIExvdyB0b2RheSBpczogJHtkYXkzTG93VGVtcH1cXHUwMEIwQ2A7XG4gICAgXG59KTsgXG5cbmxldCBmQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0YtdG9nZ2xlLWJ0bicpOyBcblxuZkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG5cbiAgICBsZXQgY3VycmVudEZUZW1wID0gc3RvcmVkV2VhdGhlckRhdGEuY3VycmVudC50ZW1wX2Y7IFxuXG4gICAgbGV0IGN1cnJlbnRXZWF0aGVyVGVtcERhdGEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VycmVudC13ZWF0aGVyLXRlbXAtZGF0YScpO1xuXG4gICAgY3VycmVudFdlYXRoZXJUZW1wRGF0YS50ZXh0Q29udGVudCA9IGBUZW1wcmF0dXJlIElzOiAke2N1cnJlbnRGVGVtcH1cXHUwMEIwRmA7XG5cbiAgICBsZXQgZGF5MUhpZ2hUZW1wID0gc3RvcmVkV2VhdGhlckRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uZGF5Lm1heHRlbXBfZjtcblxuICAgIGxldCBkYXkxTG93VGVtcCA9IHN0b3JlZFdlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRheS5taW50ZW1wX2Y7XG5cbiAgICBsZXQgaGlnaExvd1RlbXBEYXRhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0LWZvcmVjYXN0LWRheTEtaGlnaC1sb3cnKTsgXG5cbiAgICBoaWdoTG93VGVtcERhdGEudGV4dENvbnRlbnQgPSBgSGlnaCB0b2RheSBpczogJHtkYXkxSGlnaFRlbXB9XFx1MDBCMEYgTG93IHRvZGF5IGlzOiAke2RheTFMb3dUZW1wfVxcdTAwQjBGYDsgXG5cbiAgICBsZXQgZGF5MkhpZ2hUZW1wID0gc3RvcmVkV2VhdGhlckRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMV0uZGF5Lm1heHRlbXBfZjtcblxuICAgIGxldCBkYXkyTG93VGVtcCA9IHN0b3JlZFdlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzFdLmRheS5taW50ZW1wX2Y7IFxuXG4gICAgbGV0IGhpZ2hMb3dUZW1wRGF0YURheTIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXQtZm9yZWNhc3QtZGF5Mi1oaWdoLWxvdycpO1xuXG4gICAgaGlnaExvd1RlbXBEYXRhRGF5Mi50ZXh0Q29udGVudCA9IGBIaWdoIFRvZGF5IGlzOiAke2RheTJIaWdoVGVtcH1cXHUwMEIwRiBMb3cgdG9kYXkgaXM6ICR7ZGF5Mkxvd1RlbXB9XFx1MDBCMEZgOyBcblxuICAgIC8vIFxuXG4gICAgbGV0IGRheTNIaWdoVGVtcCA9IHN0b3JlZFdlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzJdLmRheS5tYXh0ZW1wX2Y7XG5cbiAgICBsZXQgZGF5M0xvd1RlbXAgPSBzdG9yZWRXZWF0aGVyRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsyXS5kYXkubWludGVtcF9mO1xuXG4gICAgbGV0IGhpZ2hMb3dUZW1wRGF0YURheTMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXQtZm9yZWNhc3QtZGF5My1oaWdoLWxvdycpO1xuXG4gICAgaGlnaExvd1RlbXBEYXRhRGF5My50ZXh0Q29udGVudCA9IGBIaWdoIHRvZGF5IGlzOiAke2RheTNIaWdoVGVtcH1cXHUwMEIwRiBMb3cgdG9kYXkgaXM6ICR7ZGF5M0xvd1RlbXB9XFx1MDBCMEZgO1xuICAgIFxufSlcblxuXG4vLyB0b2dnbGVUZW1wcmF0dXJlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHsgXG4vLyAgICAgIGlzQ2VsY2l1cyA9IHRydWU7XG5cblxuLy8gICAgIC8vICBpc0YgPSBmYWxzZTtcblxuLy8gICAgIGxldCB4ID0gc2VhcmNoQm94LnZhbHVlOyBcbiAgICBcbi8vICAgIC8vIHNldCB2YXJpYWJsZSBmb3IgY3VycmVudCB0ZW1wIGluIGNcblxuLy8gICAgLy8gZ3JhYiB0aGUgaW5wdXQgZmllbGQgZm9yIGN1cnJlbnQgdGVtcCBcblxuLy8gICAgLy8gc2hvdWxkIEkgaGF2ZSB0d28gZGlmZmVyZW50IGJ0bnMsIFxuXG4vLyAgICAvLyBpZiBGIGNsaWNrZWQgYXBwZW5kLCBmIHZhbHVlcyBcblxuLy8gICAgLy8gaWYgYyBjbGlja2VkLCBhcHBlbmQgYyB2YWx1ZXMsIFxuXG4vLyAgICAvLyBob3cgdG8gZmxpcCBhIGJvb2xlYW4gdmFsdWUgYmFzZWQgb24gYnRuIGNsaWNrXG5cbi8vICAgIC8vIEkgdGhpbmsgdGhlIGJlc3Qgd2F5IGlzIHRvIGtlZXAgYSBzZXBlcmF0ZSBidG4sIFxuXG4vLyAgICAvLyBpZGVhbGx5IEkgd291bGQgbGlrZSB0byBjb21wbGV0ZSB0aGlzIHdpdGhpbiB0aGUgZnVuY3Rpb24sIFxuXG4vLyAgICAvLyBidXQgbWF5IGJlIGVhc2llciB0byBtYWtlIHR3byBidG5zLCBoaXQgdGhlIGMgYnRuIGRpc3BsYXkgYyB0ZW1wIGRhdGEgaW4gYWxsIHRoZSBjb3JyZWN0IHNwb3RzIFxuXG4vLyAgICAvLyBpZiBmIGlzIGhpdCB0aGVuIGRpc3BsYXkgRiBpbiBhbGwgdGhlIHJpZ2h0IHBsYWNlcywgXG5cbi8vICAgIC8vIEkgd2lsbCBtYWtlIHR3byBidXR0b25zLCBldmVudCBsaXN0ZW5lciwgaWYgZiBjbGlja2VkIGRpcGxzYXkgZiB0ZW1wIGRhdGEsIGlmIGMgY2xpY2tlZCwgZGlzcGxheSBjIHZhbHVlcywgZ3JhYmJpbmcgdGhlIGlucHV0IGZpZWxkcywgYW5kIHVzaW5nICR7fVxuXG4vLyAgICAvLyB0byBhcHBlbmQgdmFyaWFibGVzIHRvIHRoZSBET00uIFxuXG4vLyAgICBsZXQgY3VycmVudENlbGNpdXNUZW1wID0gc3RvcmVkV2VhdGhlckRhdGEuY3VycmVudC50ZW1wX2M7IFxuXG4vLyAgICBsZXQgY3VycmVudEZUZW1wID0gc3RvcmVkV2VhdGhlckRhdGEuY3VycmVudC50ZW1wX2Y7IFxuXG4vLyAgICBsZXQgY3VycmVudFdlYXRoZXJUZW1wRGF0YSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXJyZW50LXdlYXRoZXItdGVtcC1kYXRhJyk7IFxuXG4vLyAgICBjb25zb2xlLmxvZyhjdXJyZW50Q2VsY2l1c1RlbXApOyBcblxuLy8gICAgY29uc29sZS5sb2coY3VycmVudEZUZW1wKTsgXG5cbi8vICAgIGlmIChpc0NlbGNpdXMpIHsgXG4vLyAgICAgY3VycmVudFdlYXRoZXJUZW1wRGF0YS50ZXh0Q29udGVudCA9IGAke2N1cnJlbnRDZWxjaXVzVGVtcH1gO1xuLy8gICAgIC8vIGlzQ2VsY2l1cyA9IGZhbHNlO1xuLy8gICAgfSBlbHNlIGlmICghaXNDZWxjaXVzKSB7IFxuLy8gICAgIGN1cnJlbnRXZWF0aGVyVGVtcERhdGEudGV4dENvbnRlbnQgPSBgJHtjdXJyZW50RlRlbXB9YDtcbi8vICAgIH1cblxuLy8gICAgaXNDZWxjaXVzID0gZmFsc2U7XG5cbi8vICAgIGNvbnNvbGUubG9nKGlzQ2VsY2l1cyk7XG4vLyAvLyAgICB9IGVsc2UgKGlzRikgeyBcbi8vIC8vICAgICBjdXJyZW50V2VhdGhlclRlbXBEYXRhLnRleHRDb250ZW50ID0gYCR7Y3VycmVudEZUZW1wfWA7XG4vLyAvLyAgICB9XG4gICAgXG4vLyAgICAgLy8gY29uc29sZS5sb2coc3RvcmVkV2VhdGhlckRhdGEuY3VycmVudC5jb25kaXRpb24pO1xuLy8gLy8gZmV0Y2hEYXRhLnRoZW4oZGF0YSA9PiBjb25zb2xlLmxvZyhkYXRhKSk7XG4vLyB9KTtcblxuYXN5bmMgZnVuY3Rpb24gYWRkV2VhdGhlckZvcmVjYXN0MSh3ZWF0aGVyKSB7IFxuICAgIGxldCBmb3JlY2FzdERhdGEgPSBhd2FpdCB3ZWF0aGVyOyBcblxuICAgICAvLyBjb25zb2xlLmxvZyhmb3JlY2FzdERhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uZGF5KTtcblxuICAgIC8vIGNvbnNvbGUubG9nKGZvcmVjYXN0RGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXkuY29uZGl0aW9uLmljb24pO1xuXG4gICAgbGV0IGlucHV0Rm9ySW1nRGF5MSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dC1mb3JlY2FzdC1kYXkxLWljb24nKTsgXG5cbiAgICBpbnB1dEZvckltZ0RheTEudGV4dENvbnRlbnQgPSAnJztcblxuICAgIGxldCBkYXkxRGF0ZSA9IGZvcmVjYXN0RGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXRlOyBcblxuICAgIGxldCBkYXkxSWNvbiA9IG5ldyBJbWFnZSgpOyBcblxuICAgIGxldCBkYXkxSGlnaFRlbXAgPSBmb3JlY2FzdERhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uZGF5Lm1heHRlbXBfZjtcblxuICAgIGxldCBkYXkxTG93VGVtcCA9IGZvcmVjYXN0RGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXkubWludGVtcF9mO1xuXG4gICAgbGV0IGNoYW5jZU9mUmFpbiA9IGZvcmVjYXN0RGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXkuZGFpbHlfY2hhbmNlX29mX3JhaW47XG5cbiAgICBsZXQgdXZJbmRleCA9IGZvcmVjYXN0RGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXkudXY7XG5cbiAgICBsZXQgaHVtaWRpdHkgPSBmb3JlY2FzdERhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uZGF5LmF2Z2h1bWlkaXR5O1xuXG4gICAgbGV0IHdpbmQgPSBmb3JlY2FzdERhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uZGF5Lm1heHdpbmRfbXBoO1xuXG4gICAgY29uc29sZS5sb2cod2luZCk7XG5cbiAgICAvLyBkYXkxSWNvbi5zdHlsZS5oZWlnaHQgPSAnMTMwcHgnO1xuXG4gICAgZGF5MUljb24uc3JjID0gZm9yZWNhc3REYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRheS5jb25kaXRpb24uaWNvbjsgXG4gICAgXG4gICAgLy8gbGV0IGlucHV0Rm9ySW1nRGF5MSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dC1mb3JlY2FzdC1kYXkxLWljb24nKTsgXG5cbiAgICBpbnB1dEZvckltZ0RheTEuYXBwZW5kKGRheTFJY29uKTtcblxuICAgIGxldCBkYXRlQW5kSWNvbkRhdGEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXQtZm9yZWNhc3QtZGF5MS1kYXRhLWRhdGUnKTsgXG5cbiAgICBkYXRlQW5kSWNvbkRhdGEudGV4dENvbnRlbnQgPSBgRGF0ZSB0b2RheSBpczogJHtkYXkxRGF0ZX1gOyBcblxuICAgIGxldCBoaWdoTG93VGVtcERhdGEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXQtZm9yZWNhc3QtZGF5MS1oaWdoLWxvdycpOyBcblxuICAgIGhpZ2hMb3dUZW1wRGF0YS50ZXh0Q29udGVudCA9IGBIaWdoIHRvZGF5IGlzOiAke2RheTFIaWdoVGVtcH1cXHUwMEIwRiBMb3cgdG9kYXkgaXM6ICR7ZGF5MUxvd1RlbXB9XFx1MDBCMEZgO1xuXG4gICAgbGV0IGNoYW5jZU9mUmFpbkRhdGEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXQtZm9yZWNhc3QtZGF5LTEtcmFpbi1jaGFuY2UnKTtcbiAgICBcbiAgICBjaGFuY2VPZlJhaW5EYXRhLnRleHRDb250ZW50ID0gYENoYW5jZSBvZiBSYWluOiAke2NoYW5jZU9mUmFpbn0lYCBcblxuICAgIGxldCB1dkluZGV4RGF0YSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dC1mb3JlY2FzdC1kYXktMS11di1pbmRleCcpO1xuXG4gICAgdXZJbmRleERhdGEudGV4dENvbnRlbnQgPSBgVVYgSW5kZXggaXM6ICR7dXZJbmRleH1gO1xuXG4gICAgbGV0IGh1bWlkaXR5RGF0YSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dC1mb3JlY2FzdC1kYXktMS1odW1pZGl0eScpOyBcblxuICAgIGh1bWlkaXR5RGF0YS50ZXh0Q29udGVudCA9IGBIdW1pZGl0eSBMZXZlbHM6ICR7aHVtaWRpdHl9JWA7XG5cbiAgICBsZXQgd2luZERhdGEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXQtZm9yZWNhc3QtZGF5LTEtd2luZCcpO1xuXG4gICAgd2luZERhdGEudGV4dENvbnRlbnQgPSBgV2luZCBTcGVlZDogJHt3aW5kfSBtcGhgO1xuXG59IFxuXG5cbmFzeW5jIGZ1bmN0aW9uIGFkZFdlYXRoZXJGb3JlY2FzdDIod2VhdGhlcikgeyBcbiAgICBsZXQgZm9yZWNhc3REYXRhMiA9IGF3YWl0IHdlYXRoZXI7IFxuXG4gICAgY29uc29sZS5sb2coZm9yZWNhc3REYXRhMik7XG5cbiAgICAvLyBjb25zb2xlLmxvZyhmb3JlY2FzdERhdGEyLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzFdLmRhdGUpO1xuXG4gICAgbGV0IGljb25EYXRhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0LWZvcmVjYXN0LWRheTItZGF0YS1pY29uJyk7XG5cbiAgICBpY29uRGF0YS50ZXh0Q29udGVudCA9ICcnO1xuXG4gICAgbGV0IGRheTJEYXRlID0gZm9yZWNhc3REYXRhMi5mb3JlY2FzdC5mb3JlY2FzdGRheVsxXS5kYXRlOyBcblxuICAgIGxldCBkYXkySWNvbkltZyA9IG5ldyBJbWFnZSgpOyBcblxuICAgIGRheTJJY29uSW1nLnNyYyA9IGZvcmVjYXN0RGF0YTIuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMV0uZGF5LmNvbmRpdGlvbi5pY29uO1xuXG4gICAgbGV0IGRheTJIaWdoVGVtcCA9IGZvcmVjYXN0RGF0YTIuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMV0uZGF5Lm1heHRlbXBfZjtcblxuICAgIGxldCBkYXkyTG93VGVtcCA9IGZvcmVjYXN0RGF0YTIuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMV0uZGF5Lm1pbnRlbXBfZjtcblxuICAgIGxldCBkYXkyQ2hhbmNlT2ZSYWluID0gZm9yZWNhc3REYXRhMi5mb3JlY2FzdC5mb3JlY2FzdGRheVsxXS5kYXkuZGFpbHlfY2hhbmNlX29mX3JhaW47XG5cbiAgICBsZXQgZGF5MlVWSW5kZXggPSBmb3JlY2FzdERhdGEyLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzFdLmRheS51djsgXG5cbiAgICBsZXQgZGF5Mkh1bWlkaXR5ID0gZm9yZWNhc3REYXRhMi5mb3JlY2FzdC5mb3JlY2FzdGRheVsxXS5kYXkuYXZnaHVtaWRpdHk7XG5cbiAgICBsZXQgZGF5MldpbmRTcGVlZCA9IGZvcmVjYXN0RGF0YTIuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMV0uZGF5Lm1heHdpbmRfbXBoO1xuXG4gICAgLy8gY29uc29sZS5sb2coZGF5MkNoYW5jZU9mU25vdyk7XG5cbiAgICAvLyBjb25zb2xlLmxvZyhkYXkySWNvbik7XG5cbiAgICBsZXQgZGF0ZURhdGEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXQtZm9yZWNhc3QtZGF5Mi1kYXRhLWRhdGUnKTtcblxuICAgIGRhdGVEYXRhLnRleHRDb250ZW50ID0gYERhdGUgVG9kYXkgaXM6ICR7ZGF5MkRhdGV9YDsgXG5cbiAgICAvLyBsZXQgaWNvbkRhdGEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXQtZm9yZWNhc3QtZGF5Mi1kYXRhLWljb24nKTtcblxuICAgIGljb25EYXRhLmFwcGVuZChkYXkySWNvbkltZyk7IFxuXG4gICAgbGV0IGhpZ2hMb3dUZW1wRGF0YSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dC1mb3JlY2FzdC1kYXkyLWhpZ2gtbG93Jyk7XG5cbiAgICBoaWdoTG93VGVtcERhdGEudGV4dENvbnRlbnQgPSBgSGlnaCBUb2RheSBpczogJHtkYXkySGlnaFRlbXB9XFx1MDBCMEYgTG93IHRvZGF5IGlzOiAke2RheTJMb3dUZW1wfVxcdTAwQjBGYDsgXG5cbiAgICBsZXQgY2hhbmNlT2ZSYWluRGF0YSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dC1mb3JlY2FzdC1kYXkyLXJhaW4tY2hhbmNlJyk7XG5cbiAgICBjaGFuY2VPZlJhaW5EYXRhLnRleHRDb250ZW50ID0gYENoYW5jZSBvZiBSYWluOiAke2RheTJDaGFuY2VPZlJhaW59JWA7IFxuXG4gICAgbGV0IHV2SW5kZXhEYXRhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0LWZvcmVjYXN0LWRheTItdXYtaW5kZXgnKTtcblxuICAgIHV2SW5kZXhEYXRhLnRleHRDb250ZW50ID0gYFVWIEluZGV4IGlzOiAke2RheTJVVkluZGV4fWA7IFxuXG4gICAgbGV0IGh1bWlkaXR5RGF0YSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dC1mb3JlY2FzdC1kYXkyLWh1bWlkaXR5Jyk7XG5cbiAgICBodW1pZGl0eURhdGEudGV4dENvbnRlbnQgPSBgSHVtaWRpdHkgTGV2ZWxzOiAke2RheTJIdW1pZGl0eX0lYDtcblxuICAgIGxldCB3aW5kRGF0YSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dC1mb3JlY2FzdC1kYXktMi13aW5kJyk7IFxuXG4gICAgd2luZERhdGEudGV4dENvbnRlbnQgPSBgV2luZCBTcGVlZDogJHtkYXkyV2luZFNwZWVkfSBtcGhgO1xuXG59IFxuXG5hc3luYyBmdW5jdGlvbiBhZGRXZWF0aGVyRm9yZWNhc3QzKHdlYXRoZXIpIHsgXG4gICAgbGV0IGZvcmVjYXN0RGF0YTMgPSB3ZWF0aGVyOyBcblxuICAgIGxldCBkYXkzRGF0ZSA9IGZvcmVjYXN0RGF0YTMuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMl0uZGF0ZTsgXG5cbiAgICBsZXQgZGF5M0ltZ0ljb24gPSBuZXcgSW1hZ2UoKTsgXG5cbiAgICBsZXQgaWNvbkRhdGEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXQtZm9yZWNhc3QtZGF5My1pY29uJyk7XG5cbiAgICBpY29uRGF0YS50ZXh0Q29udGVudCA9ICcnO1xuXG5cbiAgICBkYXkzSW1nSWNvbi5zcmMgPSBmb3JlY2FzdERhdGEzLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzJdLmRheS5jb25kaXRpb24uaWNvbjtcblxuICAgIGxldCBkYXkzSGlnaFRlbXAgPSBmb3JlY2FzdERhdGEzLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzJdLmRheS5tYXh0ZW1wX2Y7XG5cbiAgICBsZXQgZGF5M0xvd1RlbXAgPSBmb3JlY2FzdERhdGEzLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzJdLmRheS5taW50ZW1wX2Y7XG5cbiAgICBsZXQgZGF5M1JhaW5DaGFuY2UgPSBmb3JlY2FzdERhdGEzLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzJdLmRheS5kYWlseV9jaGFuY2Vfb2ZfcmFpbjtcblxuICAgIGxldCBkYXkzVVZJbmRleCA9IGZvcmVjYXN0RGF0YTMuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMl0uZGF5LnV2O1xuXG4gICAgbGV0IGRheTNIdW1pZGl0eSA9IGZvcmVjYXN0RGF0YTMuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMl0uZGF5LmF2Z2h1bWlkaXR5O1xuXG4gICAgbGV0IGRheTNXaW5kID0gZm9yZWNhc3REYXRhMy5mb3JlY2FzdC5mb3JlY2FzdGRheVsyXS5kYXkubWF4d2luZF9tcGg7XG5cbiAgICBjb25zb2xlLmxvZyhkYXkzV2luZCk7XG5cbiAgICBsZXQgZGF0ZURhdGEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXQtZm9yZWNhc3QtZGF5My1kYXRhLWRhdGUnKTtcblxuICAgIGRhdGVEYXRhLnRleHRDb250ZW50ID0gYERhdGUgVG9kYXkgaXM6ICR7ZGF5M0RhdGV9YDsgXG5cbiAgICAvLyBsZXQgaWNvbkRhdGEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXQtZm9yZWNhc3QtZGF5My1pY29uJyk7XG5cbiAgICBpY29uRGF0YS5hcHBlbmQoZGF5M0ltZ0ljb24pOyBcblxuICAgIGxldCBoaWdoTG93VGVtcERhdGEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXQtZm9yZWNhc3QtZGF5My1oaWdoLWxvdycpO1xuXG4gICAgaGlnaExvd1RlbXBEYXRhLnRleHRDb250ZW50ID0gYEhpZ2ggdG9kYXkgaXM6ICR7ZGF5M0hpZ2hUZW1wfVxcdTAwQjBGIExvdyB0b2RheSBpczogJHtkYXkzTG93VGVtcH1cXHUwMEIwRmA7XG5cbiAgICBsZXQgY2hhbmNlT2ZSYWluRGF0YSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dC1mb3JlY2FzdC1kYXkzLXJhaW4tY2hhbmNlJyk7XG5cbiAgICBjaGFuY2VPZlJhaW5EYXRhLnRleHRDb250ZW50ID0gYENoYW5jZSBvZiBSYWluOiAke2RheTNSYWluQ2hhbmNlfSVgIFxuXG4gICAgbGV0IHV2SW5kZXhEYXRhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0LWZvcmVjYXN0LWRheTMtdXYtaW5kZXgnKTsgXG5cbiAgICB1dkluZGV4RGF0YS50ZXh0Q29udGVudCA9IGBVViBJbmRleCBpczogJHtkYXkzVVZJbmRleH1gOyBcblxuICAgIGxldCBodW1pZGl0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dC1mb3JlY2FzdC1kYXkzLWh1bWlkaXR5Jyk7XG5cbiAgICBodW1pZGl0eS50ZXh0Q29udGVudCA9IGBIdW1pZGl0eSBMZXZlbHM6ICR7ZGF5M0h1bWlkaXR5fSVgO1xuXG4gICAgbGV0IHdpbmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXQtZm9yZWNhc3QtZGF5LTMtd2luZCcpO1xuXG4gICAgd2luZC50ZXh0Q29udGVudCA9IGBXaW5kIFNwZWVkOiAke2RheTNXaW5kfSBtcGhgO1xuXG59XG5cbi8vIFNvIEkgbGlrZSB3YXZlcyBwcm9qZWN0IGxvb2ssIG5leHQgSSBXaWxsIGZpZ3VyZSBvdXQgYSB3YXkgXG5cbi8vIG5leHQgSSB3aWxsIGdldCB0aGUgMyBkYXkgZm9yZWNhc3QsIFxuXG4vLyBJIGFzc3VtZSBpdCB3b3VsZCBiZSB0aGUgc2FtZSBwcm9jZXNzIGZldGNoIHRoZSBkYXRhIFxuXG4vLyBrZXkgaW50byB0aGUgdmFsdWUgdGhlIGN1cnJlbnQgZm9yZWNhc3QgXG5cbi8vIEkgdGhpbmsgSSBhbHNvIG5lZWQgdG8gd3JpdGUgYSBmdW5jdGlvbiwgXG5cbi8vIHRoYXQgd2lsbCBkaXNwbGF5IHRoZSB0aHJlZSBkYXkgZm9yZWNhc3QsIFxuXG4vLyBwYXNzIHRoZSB3ZWF0aGVyIGRhdGEgdG8gdGhhdCB5b3UgZ290IGZyb20gdGhlIGZldGNoIGRhdGEgZnVuY3Rpb24gXG5cbi8vIHRvIHRoZSBvdGhlciBmdW5jdGlvbiB3aGljaCB3aWxsIGp1c3QgZGlzcGxheSBmb3JlY2FzdCB3ZWFodGVyIFxuXG4vLyBmb3IgMyBkYXlzLCBcblxuLy8gcHJvamVjdCwgMyBkYXkgZm9yZWNhc3QsIFxuXG4vLyB0b2dnbGUgY2VsaXVzIGFuZCBmIFxuXG4vLyBmaW5kIHdheSB0byBjbGVhciBET00gYmVmb3JlIGFkZGluZyBuZXcgdmFsdWVzLCBubyBhZGRpbmcgb24gXG5cbi8vIGEgd2F5IHRvIGltcG9ydCBpY29ucyBhbmQgZ2V0IHRoZSBjb3JyZWN0IHBhdGggXG5cbi8vIGljb25zIHNlZW1zIHRvIHdvcmtpbmchISBcblxuLy8gbWFrZSB0aGUgd2VhdGhlciBkZXNjcmlwdGlvbiBlbGVtZW50cyBhcHBlYXIgd2l0aCB0aGUgRE9NLCBcblxuLy8gaW5zdGVhZCBvZiB0aGUgaHRtbCwgXG5cbi8vIGZpbmQgYSB3YXkgbm93IHRvIGtleSBpbnRvIGFuZCBnZXQgZm9yZWNhc3QgXG5cbi8vIG5leHQgc3RlcCBpcyB0byBrZXkgaW50byBkYXRhLCBhbmQgZ2V0IHRoZSBmb3JlY2FzdCBcblxuLy8ga2V5IGludG8gY2VydGFpbiBkYXlzLCBtYWtlIGEgSFRNTCBjYXJkLCBcblxuLy8gYXBwZW5kIHRoZSBkYXRhIHRvIHRoZSBjYXJkLCBhbG9uZyB3aXRoIGxvZ29zIGZvciB0aGUgd2VhdGhlciwgXG5cbi8vIHRoZW4gaW5zdGVhZCBvZiBIVE1MIE1lc3NhZ2VzLCB1c2UgRE9NIHBsdXMgYXBwZW5kIGRhdGEgXG5cbi8vIG9uY2UgY3VycmVudCBhbmQgMyBkYXkgZm9yZWNhc3QgaXMgc2V0LCBcblxuLy8gZmluZCBhIHdheSBvciB3cml0ZSBhIGZ1bmN0aW9uIHRoYXQgY2FuIGNoYW5nZWQgZiBkYXRhIHRvIGMgXG5cbi8vIHN0eWxlIHVwIGFuZCBkb25lLCBcblxuLy8gV2Uga25vdyB3aGF0IHdlIG5lZWQgdG8gZG8sIGZpcnN0IEkgd291bGQgZ2V0IHRoZSBjb3JyZWN0IFxuXG4vLyBmb3JlY2FzdCBkYXRhIGFuZCBhcHBlbmQgaW4gdGhlIGNvcnJlY3Qgc3BvdCwgXG5cbi8vIHRoZW4gZml4IHRoZSBjdXJyZW50IHdlYXRoZXIgdG8gdXNlIERPTSBkaXNwbGF5ZWQgdGV4dCwgXG5cbi8vIGFsb25nIHdpdGggYXR0YWNoaW5nIHRoZSBpY29uLCBcblxuLy8gc3RhcnQgdGhlcmUsIGZpcnN0IGxldHMgZmluZCB0aGUgY29ycmVjdCBmb3JlY2FzdCBmb3IgdGhlIDMgZGF5LCBcblxuLy8gb2sgbGV0cyBmaXJzdCBnbyB0aGUgSFRNTCwgbmFkIG1ha2UgdGhlIG1hcmt1cCwgXG5cbi8vIHdlIHdpbGwgbmVlZCBhIGNvbnRhaW5lciwgXG5cbi8vIHRoYXQgY2FuIGhvbGQgMyBjYXJkcywgZGlzcGxheWVkIGluIGZsZXggc28gdGhleSBhcmUgaW4gYSByb3csIFxuXG4vLyBhcHBlbmQgdGhlIHZhbHVlcyB0byB0aGUgc3BlY2lmaWMgaW5wdXQgZmllbGRzLCBcblxuLy8gb2sgd2UgZ290IHRoZSBtYXJrdXAgXG5cbi8vIG5vdyBJIHRoaW5rIEkgV291bGQgcGFzcyB0aGUgZGF0YSB0byB0aGUgb3RoZXIgZnVuY3Rpb24sIFxuXG4vLyBvayBvdGhlciBmdW5jdGlvbiBjYW4gYWNjZXB0IHRoZSBkYXRhLCBcblxuLy8gYWRkIHRoZSBwIGVsZW1lbnRzIG9uIGVhY2ggY2FyZCwgYW5kIGFwcGVuZCBkYXRhIGFsb25nIHdpdGggYSBtZXNzYWdlIFxuXG4vLyBwIGVsZW1lbnQgYW5kIGFwcGVuZCB0aGUgZGF0ZSBhbmQgaWNvbiBmaXJzdCBpbiB0aGUgc2FtZSBsaW5lIFxuXG4vLyBtYWtlIGEgbmV3IGZ1bmN0aW9uIGZvciBlYWNoIGZvcmVjYXN0IGRheSBcblxuLy8ganVzdCB0byBtb2R1bGFyaXplIHRoaW5ncyBtb3JlIGFuZCB0byBhdm9pZCBcblxuLy8gaGF2aW5nIG9uZSBmdW5jdGlvbiB0byBhbGwgdGhlIHdvcmsgYW5kIHRoYXQgZnVuY3Rpb24gd2lsbCBcblxuLy8gYmUgdG9vIGJpZywgb25lIGZ1bmN0aW9uIGZvciBlYWNoIGRheSwgXG5cbi8vIHBhc3MgdGhlIGRhdGEgdG8gdGhvc2UgMyBmdW5jdGlvbnMsIFxuXG4vLyBpdHMgb25seSA0IGNhbGxzLCBvbmUgdG8gY3VycmVudCBcblxuLy8gb25lIHRvIGN1cnJlbnQsIGRheTEgMiAzIFxuXG4vLyBvayBub3cgdXNlIGEgZnVuY3Rpb24gdG8gcHJpbnQgdGhlIGRhdGEgZm9yIGRheSAyIGZvcmVjYXN0IFxuXG4vLyB1c2UgYSBkaWZmZXJlbnQgZnVuY3Rpb24gc28gaXQgZG9lcyBub3QgZ2V0IHRvbyBiaWcgXG5cbi8vIGFub3RoZXIgaXNzdWUgaXMgZ2V0dGluZyB0aGUgZGVncmVlcyBzeW1ib2wgdG8gc2hvdywgXG5cbi8vIGFuZCBpZiB0aGUgdXNlciBpbnB1dHMgYW5vdGhlciBzZWFyY2gsIFxuXG4vLyBjbGVhciB0aGUgRE9NIHRvIG1ha2Ugd2F5IGZvciB0aGUgbmV3LiBcblxuLy8gY2hhbmdlIGJhY2tncm91bmQgYmFzZWQgb24gY29uZGl0aW9uIHRleHQgXG5cbi8vIGlmID09PSBzdW5ueSBcblxuLy8gYXBwZW5kIHN1bm55IGJhY2tncm91bmQgcGljdHVyZSwgXG5cbi8vIGlmID09PSByYWlueSBcblxuLy8gYXBwZW5kIHJhaW55IHBpYyBcblxuLy8gSSB0aGluayBldmVyeXRoaW5nIGlzIGdvaW5nIG9rLCBJIHdpbGwgbWFrZSB0aGUgd2VhdGhlciBkYXRhIGZvciB0aGUgbGFzdCBkYXkgb2YgdGhlIGZvcmVjYXN0LCBjb21taXQsIHRoZW4gZml4IHRoZSBodG1sIGFib3ZlIHRvIHVzZSBvbmx5IHRoZSBET00gXG5cbi8vIEkgd2lsbCBmaXggdGhlIGh0bWwgdG8gdXNlIERPTSBPbmx5LCBcblxuLy8gdGhlbiB3b3JrIG9uIGNsZWFyaW5nIHRoZSBET00sIHNvIHZhbHVlcyBkbyBub3QgYWRkIG9udG8gXG5cbi8vIEhUTUwgSXMgc2V0LCBzbyBob3cgZG8gSSBjbGVhciB0aGUgdmFsdWVzIGZyb20gdGhlIERPTSwgXG5cbi8vIGFkZCBuZXcgYnV0IHJlcGxhY2Ugb2xkLCBcblxuLy8gaGF2aW5nIGlzc3VlIGNsZWFyaW5nIHRoZSBET00sIFxuXG4vLyBJIHRob3VnaHQgY2xlYXJuaW5nIGl0IGJlZm9yZSB0aGUgZnVuY3Rpb24gY2FsbCBvciBpbnNpZGUgdGhlIGZ1bmN0aW9udGhhdCB3YXMgY2FsbGVkIFxuXG4vLyB3aGVyZSBjYW4gSSBjbGVhciB0aGUgRE9NLCBcblxuLy8gaXQgbmVlZHMgdG8gYmUgaW4gdGhlIHJpZ2h0IHNwb3QsIFxuXG4vLyBjbGVhciB0aGUgRE9NIG9uY2UgdGhlIHNlYXJjaCBidG4gaXMgcHJlc3NlZCwgXG5cbi8vIGNsZWFyIG9sZCBkYXRhLCBhZGQgdGhlIG5ldywgXG5cbi8vIE9LIEkgd2FzIGFibGUgdG8gZmlndXJlIG91dCB0aGUgZG9tIGlzc3VlLCBpdCB3YXMgbW9yZSB0aGUgaWNvbnMgdGhhdCBJIGhhZCB0byByZXBsYWNlLCBpbnN0ZWFkIG9mIGNsZWFybmluZyB0aGUgZG9tIGVhY2ggdGltZSwgXG5cbi8vIHNldHRpbmcgdGhlIHRleHQgQ29udGVudCBvZiB0aGUgZWxlbWVudCwgdG8gZW1wdHkgd2lsbCBtYWtlIHdheSBmb3IgdGhlIG5ldyB2YWx1ZS9pY29uIFxuXG4vLyBuZXh0IEkgbmVlZCB0byBmaWd1cmUgb3V0IGhvdyB0byB3cml0ZSBhIGZ1bmN0aW9uIG9yIHBlcmZvcm0gdGhlIGxvZ2ljIHRoYXQgd291bGQgYWxsb3cgbWUgdG8gY2hhbmdlIHRoZSBmIGRhdGEgdG8gYyBkYXRhIFxuXG4vLyBmaXJzdCBsb2NhdGUgYWxsIHZhbHVlcyB0aGF0IHVzZSBmLCBcblxuLy8ganVzdCBjaGFuZ2UgdGhlIHRlbXAuIHRoZXJlIGlzIG9uZSBpbiBjdXJyZW50IHdlYXRoZXIgYW5kIGRheXMsIGVhY2ggZGF5IHdpbGwgbmVlZCB0byBoaWdoIGFuZCBsb3cgdGVtcCBjaGFuZ2VkLCBcblxuLy8gSSBhbSBjb25mdXNlZCBvbiBob3cgdG8gYXBwcm9hY2ggdGhpcywgXG5cbi8vIGEgZnVuY3Rpb24/IFxuXG4vLyBvbmNlIHRoZSBidG4gaXMgY2xpY2tlZCwgZ3JhYiB0aGUgdmFsdWVzLCBncmFiIGFsbCB0aGUgaW5wdXRzL2ZpZWxkcywgY2FsbCBhbm90aGVyIGZ1bmN0aW9uLCB3aGljaCB3aWxsIGludGFrZSB0aGUgY3VycmVudCB3ZWF0aGVyLCBrZXkgaW50byB2YWx1ZXMsIFxuXG4vLyB0aGVuIGRpc3BsYXkgdGhvc2UgdmFsdWVzIHRvIHRoZSBET00/ICIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2VhcnRoLWJhY2tncm91bmQuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogYm9keSB7IFxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiA7XFxufSAqL1xcbioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbmJvZHkge1xcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3NywgMTcyLCAxNzIpOyAqL1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxufVxcblxcbi5oZWFkZXItY29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgaGVpZ2h0OiAxMnZoO1xcbiAgZ2FwOiAxZW07XFxufVxcblxcbi5oMS1oZWFkZXItc3R5bGVzIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMi44cmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5zZWFyY2gtYmFyLWVsZW1lbnRzLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gIGdhcDogMWVtO1xcbn1cXG5cXG4uc2VhcmNoLWJhci1lbGVtZW50cy1jb250YWluZXIgPiBpbnB1dCB7XFxuICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbi5zZWFyY2gtYmFyLWVsZW1lbnRzLWNvbnRhaW5lciA+IGJ1dHRvbiB7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbiNjdXJyZW50LXdlYXRoZXItZGF0YSA+IGgzIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG4jY3VycmVudC13ZWF0aGVyLWRhdGEge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4jY3VycmVudC13ZWF0aGVyLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBoZWlnaHQ6IDQwdmg7XFxuICAvKiBtYXJnaW4tdG9wOiAyZW07ICovXFxuICBjb2xvcjogd2hpdGU7XFxuICAvKiBoZWlnaHQ6IDI4NXB4O1xcbiAgd2lkdGg6IDI4NXB4OyAqL1xcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3NywgMTcyLCAxNzIpOyAqL1xcbn1cXG5cXG4jZm9yZWNhc3QtMy1kYXktdGl0bGUge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgbWFyZ2luLXRvcDogMC41ZW07XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbiNmb3JlY2FzdC1kYXktMS1jYXJkLFxcbiNmb3JlY2FzdC1kYXktMi1jYXJkLFxcbiNmb3JlY2FzdC1kYXktMy1jYXJkIHtcXG4gIC8qIHdpZHRoOiAyNTBweDsgXFxuICBoZWlnaHQ6IDI1MHB4OyAqL1xcbiAgaGVpZ2h0OiA0NXZoO1xcbiAgd2lkdGg6IDI1dnc7XFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTc3LCAxNzIsIDE3Mik7ICovXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIG9wYWNpdHk6IDAuNztcXG4gIGJvcmRlci1yYWRpdXM6IDEwJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4jZm9yZWNhc3QtZGF5cy1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAyZW07XFxuICBtYXJnaW4tdG9wOiAwLjVlbTtcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcbn1cXG5cXG4vKiAjZm9yZWNhc3QtY29udGFpbmVyIHsgXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuXFxufSAqL1wiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7O0dBQUE7QUFJQTtFQUNJLHNCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUFBSjs7QUFHQTtFQUNJLDBDQUFBO0VBQ0EsMkJBQUE7RUFDQSxtREFBQTtFQUNBLHNCQUFBO0FBQUo7O0FBR0E7RUFDRSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFFBQUE7QUFBRjs7QUFJQTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FBREo7O0FBSUE7RUFDSSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxRQUFBO0FBREo7O0FBS0E7RUFDSSxlQUFBO0FBRko7O0FBS0E7RUFDSSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtBQUZKOztBQUtBO0VBQ0ksZUFBQTtFQUNBLDBCQUFBO0FBRko7O0FBS0E7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBRko7O0FBS0E7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0E7aUJBQUE7RUFFQSwwQ0FBQTtBQUZKOztBQUtBO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUFGSjs7QUFNQTs7O0VBR0k7a0JBQUE7RUFFQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLDBDQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQUhKOztBQU1BO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsUUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUFISjs7QUFPQTs7Ozs7O0dBQUFcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogYm9keSB7IFxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiA7XFxufSAqL1xcblxcbiogeyBcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgcGFkZGluZzogMDsgXFxuICAgIG1hcmdpbjogMDtcXG59IFxcblxcbmJvZHkgeyBcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3NywgMTcyLCAxNzIpOyAqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7O1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoLi9lYXJ0aC1iYWNrZ3JvdW5kLmpwZyk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxufVxcblxcbi5oZWFkZXItY29udGFpbmVyIHsgXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGhlaWdodDogMTJ2aDtcXG4gIGdhcDogMWVtOyBcXG5cXG59IFxcblxcbi5oMS1oZWFkZXItc3R5bGVzIHsgXFxuICAgIGNvbG9yOiB3aGl0ZTsgXFxuICAgIGZvbnQtc2l6ZTogMi44cmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLnNlYXJjaC1iYXItZWxlbWVudHMtY29udGFpbmVyIHsgXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICAgIGdhcDogMWVtOyBcXG4gICAgXFxufSBcXG5cXG4uc2VhcmNoLWJhci1lbGVtZW50cy1jb250YWluZXIgPiBpbnB1dCB7IFxcbiAgICBmb250LXNpemU6IDFyZW07XFxufSBcXG5cXG4uc2VhcmNoLWJhci1lbGVtZW50cy1jb250YWluZXIgPiBidXR0b24geyBcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgY29sb3I6IGJsYWNrOyBcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn0gXFxuXFxuI2N1cnJlbnQtd2VhdGhlci1kYXRhID4gaDN7IFxcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn0gIFxcblxcbiNjdXJyZW50LXdlYXRoZXItZGF0YSB7IFxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbiNjdXJyZW50LXdlYXRoZXItY29udGFpbmVyIHsgXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDQwdmg7XFxuICAgIC8qIG1hcmdpbi10b3A6IDJlbTsgKi9cXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICAvKiBoZWlnaHQ6IDI4NXB4O1xcbiAgICB3aWR0aDogMjg1cHg7ICovXFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYigxNzcsIDE3MiwgMTcyKTsgKi9cXG59IFxcblxcbiNmb3JlY2FzdC0zLWRheS10aXRsZSB7IFxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICAgIG1hcmdpbi10b3A6IDAuNWVtO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcblxcbiNmb3JlY2FzdC1kYXktMS1jYXJkLCBcXG4jZm9yZWNhc3QtZGF5LTItY2FyZCwgXFxuI2ZvcmVjYXN0LWRheS0zLWNhcmQgeyBcXG4gICAgLyogd2lkdGg6IDI1MHB4OyBcXG4gICAgaGVpZ2h0OiAyNTBweDsgKi9cXG4gICAgaGVpZ2h0OiA0NXZoO1xcbiAgICB3aWR0aDogMjV2dztcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3NywgMTcyLCAxNzIpOyAqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgb3BhY2l0eTogMC43O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMCU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgY29sb3I6IHdoaXRlOyBcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufSBcXG5cXG4jZm9yZWNhc3QtZGF5cy1jb250YWluZXIgeyBcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMmVtOyBcXG4gICAgbWFyZ2luLXRvcDogMC41ZW07XFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcbn1cXG5cXG5cXG4vKiAjZm9yZWNhc3QtY29udGFpbmVyIHsgXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuXFxufSAqL1xcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5oMS1oZWFkZXItc3R5bGVzIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuKiB7XFxuICBmb250LWZhbWlseTogXFxcIkNvdXJpZXIgTmV3XFxcIiwgQ291cmllciwgbW9ub3NwYWNlO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSxZQUhXO0FBRWI7O0FBSUE7RUFDRSw4Q0FBQTtBQURGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiR0aXRsZUNvbG9yOiB3aGl0ZTsgXFxuXFxuLmgxLWhlYWRlci1zdHlsZXMgeyBcXG4gIGNvbG9yOiAkdGl0bGVDb2xvcjsgXFxufSBcXG5cXG4qIHsgXFxuICBmb250LWZhbWlseTonQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2VcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyJdLCJuYW1lcyI6WyJzZWFyY2hCb3giLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic2VhcmNoQnRuIiwid2VhdGhlckNvbnRhaW5lciIsInN0b3JlZFdlYXRoZXJEYXRhIiwiZmV0Y2hEYXRhIiwiaW5wdXQiLCJjaXR5RGF0YSIsImNvbnNvbGUiLCJsb2ciLCJnZXREYXRhIiwiZmV0Y2giLCJqc29uRGF0YSIsImpzb24iLCJjdXJyZW50V2VhdGhlckRhdGEiLCJkaXNwbGF5Q3VycmVudFdlYXRoZXIiLCJhZGRXZWF0aGVyRm9yZWNhc3QxIiwiYWRkV2VhdGhlckZvcmVjYXN0MiIsImFkZFdlYXRoZXJGb3JlY2FzdDMiLCJ3ZWF0aGVyIiwiY3VycmVudFdlYXRoZXJJY29uIiwiY3VycmVudEZvcmVjYXN0IiwidGV4dENvbnRlbnQiLCJ3ZWF0aGVySWNvbiIsIkltYWdlIiwic3JjIiwiY3VycmVudCIsImNvbmRpdGlvbiIsImljb24iLCJsb2NhdGlvbkRhdGEiLCJsb2NhdGlvbiIsIm5hbWUiLCJ3ZWF0aGVyRGVzY3JpcHRpb25EYXRhIiwidGV4dCIsImN1cnJlbnRXZWF0aGVyTnVtYmVyRGF0YSIsInRlbXBfZiIsIndpbmREYXRhIiwid2luZF9tcGgiLCJ3aW5kRGlyZWN0aW9uIiwid2luZF9kaXIiLCJyYWluSW5jaGVzIiwicHJlY2lwX2luIiwiaHVtaWRpdHlMZXZlbCIsImh1bWlkaXR5IiwibmV3SW1nIiwiYXBwZW5kQ2hpbGQiLCJjdXJyZW50V2VhdGhlckxvY2F0aW9uVGV4dCIsImN1cnJlbnRXZWF0aGVyRGVzY3JpcHRpb25UZXh0IiwiY3VycmVudFdlYXRoZXJUZW1wRGF0YSIsImN1cnJlbnRXZWF0aGVyV2luZERhdGEiLCJjdXJyZW50V2VhdGhlcldpbmREaXJlY3Rpb24iLCJjdXJyZW50V2VhdGhlclJhaW4iLCJjdXJyZW50SHVtaWRpdHlMZXZlbCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwiaW5wdXRWYWx1ZSIsInZhbHVlIiwiY2VsY2l1c0J0biIsImN1cnJlbnRDZWxjaXVzVGVtcCIsInRlbXBfYyIsImRheTFIaWdoVGVtcCIsImZvcmVjYXN0IiwiZm9yZWNhc3RkYXkiLCJkYXkiLCJtYXh0ZW1wX2MiLCJkYXkxTG93VGVtcCIsIm1pbnRlbXBfYyIsImhpZ2hMb3dUZW1wRGF0YSIsImRheTJIaWdoVGVtcCIsImRheTJMb3dUZW1wIiwiaGlnaExvd1RlbXBEYXRhRGF5MiIsImRheTNIaWdoVGVtcCIsImRheTNMb3dUZW1wIiwiaGlnaExvd1RlbXBEYXRhRGF5MyIsImZCdG4iLCJjdXJyZW50RlRlbXAiLCJtYXh0ZW1wX2YiLCJtaW50ZW1wX2YiLCJmb3JlY2FzdERhdGEiLCJpbnB1dEZvckltZ0RheTEiLCJkYXkxRGF0ZSIsImRhdGUiLCJkYXkxSWNvbiIsImNoYW5jZU9mUmFpbiIsImRhaWx5X2NoYW5jZV9vZl9yYWluIiwidXZJbmRleCIsInV2IiwiYXZnaHVtaWRpdHkiLCJ3aW5kIiwibWF4d2luZF9tcGgiLCJhcHBlbmQiLCJkYXRlQW5kSWNvbkRhdGEiLCJjaGFuY2VPZlJhaW5EYXRhIiwidXZJbmRleERhdGEiLCJodW1pZGl0eURhdGEiLCJmb3JlY2FzdERhdGEyIiwiaWNvbkRhdGEiLCJkYXkyRGF0ZSIsImRheTJJY29uSW1nIiwiZGF5MkNoYW5jZU9mUmFpbiIsImRheTJVVkluZGV4IiwiZGF5Mkh1bWlkaXR5IiwiZGF5MldpbmRTcGVlZCIsImRhdGVEYXRhIiwiZm9yZWNhc3REYXRhMyIsImRheTNEYXRlIiwiZGF5M0ltZ0ljb24iLCJkYXkzUmFpbkNoYW5jZSIsImRheTNVVkluZGV4IiwiZGF5M0h1bWlkaXR5IiwiZGF5M1dpbmQiXSwic291cmNlUm9vdCI6IiJ9