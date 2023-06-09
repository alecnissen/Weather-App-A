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

  // console.log(storedWeatherData);

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
  let currentWeatherNumberData = currentForecast.current.feelslike_f;
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
  currentWeatherTempData.textContent = `Temprature is: ${currentWeatherNumberData} \u00B0F`;
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
  currentWeatherTempData.textContent = `Temprature Is: ${currentCelciusTemp} C`;
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
  let chanceOfSnow = forecastData.forecast.forecastday[0].day.daily_chance_of_snow;

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
  let chanceOfSnowData = document.getElementById('input-forecast-day-1-snow-chance');
  chanceOfSnowData.textContent = `Chance of Snow: ${chanceOfSnow}%`;
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
  let day2ChanceOfSnow = forecastData2.forecast.forecastday[1].day.daily_chance_of_snow;

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
  let chanceOfSnowData = document.getElementById('input-forecast-day2-snow-chance');
  chanceOfSnowData.textContent = `Chance of Snow: ${day2ChanceOfSnow}%`;
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
  let day3ChanceOfSnow = forecastData3.forecast.forecastday[2].day.daily_chance_of_snow;
  console.log(day3ChanceOfSnow);
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
  let chanceOfSnowData = document.getElementById('input-forecast-day3-snow-chance');
  chanceOfSnowData.textContent = `Chance of Snow: ${day3ChanceOfSnow}%`;
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
___CSS_LOADER_EXPORT___.push([module.id, "/* body { \n    background-color: ;\n} */\n* {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\nbody {\n  /* background-color: rgb(177, 172, 172); */\n  background-color: lightgrey;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-size: cover;\n}\n\n.header-container {\n  background-color: black;\n  text-align: center;\n  height: 12vh;\n  gap: 1em;\n}\n\n.h1-header-styles {\n  color: white;\n  font-size: 2.8rem;\n  font-weight: bold;\n}\n\n.search-bar-elements-container {\n  display: flex;\n  justify-content: flex-end;\n  gap: 1em;\n}\n\n.search-bar-elements-container > input {\n  font-size: 1rem;\n}\n\n.search-bar-elements-container > button {\n  font-size: 1rem;\n  background-color: white;\n  color: black;\n  border: 2px solid black;\n  font-weight: bold;\n}\n\n#current-weather-data > h3 {\n  font-size: 2rem;\n  text-decoration: underline;\n}\n\n#current-weather-data {\n  text-align: center;\n  font-size: 1.2rem;\n  font-weight: bolder;\n  color: white;\n}\n\n#current-weather-container {\n  display: flex;\n  justify-content: center;\n  height: 40vh;\n  /* margin-top: 2em; */\n  color: white;\n  /* height: 285px;\n  width: 285px; */\n  /* background-color: rgb(177, 172, 172); */\n}\n\n#forecast-3-day-title {\n  text-align: center;\n  font-size: 1.3rem;\n  font-weight: bold;\n  text-decoration: underline;\n  margin-top: 0.5em;\n  color: white;\n}\n\n#forecast-day-1-card,\n#forecast-day-2-card,\n#forecast-day-3-card {\n  /* width: 250px; \n  height: 250px; */\n  height: 45vh;\n  width: 25vw;\n  /* background-color: rgb(177, 172, 172); */\n  background-color: black;\n  opacity: 0.7;\n  border-radius: 10%;\n  text-align: center;\n  color: white;\n  font-weight: bold;\n}\n\n#forecast-days-container {\n  display: flex;\n  justify-content: center;\n  gap: 2em;\n  margin-top: 0.5em;\n  font-size: 1.2rem;\n}\n\n/* #forecast-container { \n    text-align: center;\n    font-size: 2rem;\n    font-weight: bold;\n    text-decoration: underline;\n\n} */", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;;GAAA;AAIA;EACI,sBAAA;EACA,UAAA;EACA,SAAA;AAAJ;;AAGA;EACI,0CAAA;EACA,2BAAA;EACA,mDAAA;EACA,sBAAA;AAAJ;;AAGA;EACE,uBAAA;EACA,kBAAA;EACA,YAAA;EACA,QAAA;AAAF;;AAIA;EACI,YAAA;EACA,iBAAA;EACA,iBAAA;AADJ;;AAIA;EACI,aAAA;EACA,yBAAA;EACA,QAAA;AADJ;;AAKA;EACI,eAAA;AAFJ;;AAKA;EACI,eAAA;EACA,uBAAA;EACA,YAAA;EACA,uBAAA;EACA,iBAAA;AAFJ;;AAKA;EACI,eAAA;EACA,0BAAA;AAFJ;;AAKA;EACI,kBAAA;EACA,iBAAA;EACA,mBAAA;EACA,YAAA;AAFJ;;AAKA;EACI,aAAA;EACA,uBAAA;EACA,YAAA;EACA,qBAAA;EACA,YAAA;EACA;iBAAA;EAEA,0CAAA;AAFJ;;AAKA;EACI,kBAAA;EACA,iBAAA;EACA,iBAAA;EACA,0BAAA;EACA,iBAAA;EACA,YAAA;AAFJ;;AAMA;;;EAGI;kBAAA;EAEA,YAAA;EACA,WAAA;EACA,0CAAA;EACA,uBAAA;EACA,YAAA;EACA,kBAAA;EACA,kBAAA;EACA,YAAA;EACA,iBAAA;AAHJ;;AAMA;EACI,aAAA;EACA,uBAAA;EACA,QAAA;EACA,iBAAA;EACA,iBAAA;AAHJ;;AAOA;;;;;;GAAA","sourcesContent":["/* body { \n    background-color: ;\n} */\n\n* { \n    box-sizing: border-box;\n    padding: 0; \n    margin: 0;\n} \n\nbody { \n    /* background-color: rgb(177, 172, 172); */\n    background-color: lightgrey;;\n    background: url(./earth-background.jpg);\n    background-size: cover;\n}\n\n.header-container { \n  background-color: black;\n  text-align: center;\n  height: 12vh;\n  gap: 1em; \n\n} \n\n.h1-header-styles { \n    color: white; \n    font-size: 2.8rem;\n    font-weight: bold;\n}\n\n.search-bar-elements-container { \n    display: flex;\n    justify-content: flex-end;\n    gap: 1em; \n    \n} \n\n.search-bar-elements-container > input { \n    font-size: 1rem;\n} \n\n.search-bar-elements-container > button { \n    font-size: 1rem;\n    background-color: white;\n    color: black; \n    border: 2px solid black;\n    font-weight: bold;\n} \n\n#current-weather-data > h3{ \n    font-size: 2rem;\n    text-decoration: underline;\n}  \n\n#current-weather-data { \n    text-align: center;\n    font-size: 1.2rem;\n    font-weight: bolder;\n    color: white;\n}\n\n#current-weather-container { \n    display: flex;\n    justify-content: center;\n    height: 40vh;\n    /* margin-top: 2em; */\n    color: white;\n    /* height: 285px;\n    width: 285px; */\n    /* background-color: rgb(177, 172, 172); */\n} \n\n#forecast-3-day-title { \n    text-align: center;\n    font-size: 1.3rem;\n    font-weight: bold;\n    text-decoration: underline;\n    margin-top: 0.5em;\n    color: white;\n}\n\n\n#forecast-day-1-card, \n#forecast-day-2-card, \n#forecast-day-3-card { \n    /* width: 250px; \n    height: 250px; */\n    height: 45vh;\n    width: 25vw;\n    /* background-color: rgb(177, 172, 172); */\n    background-color: black;\n    opacity: 0.7;\n    border-radius: 10%;\n    text-align: center;\n    color: white; \n    font-weight: bold;\n} \n\n#forecast-days-container { \n    display: flex;\n    justify-content: center;\n    gap: 2em; \n    margin-top: 0.5em;\n    font-size: 1.2rem;\n}\n\n\n/* #forecast-container { \n    text-align: center;\n    font-size: 2rem;\n    font-weight: bold;\n    text-decoration: underline;\n\n} */\n\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, ".h1-header-styles {\n  color: white;\n}", "",{"version":3,"sources":["webpack://./src/styles.scss"],"names":[],"mappings":"AAEA;EACE,YAHW;AAEb","sourcesContent":["$titleColor: white; \n\n.h1-header-styles { \n  color: $titleColor; \n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQSxpRkFBaUY7QUFDakY7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvc3R5bGVzLnNjc3MiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvc3R5bGUuY3NzP2VmYmYiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9zdHlsZXMuc2Nzcz9hNjA5Iiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0ICcuL3N0eWxlcy5zY3NzJztcblxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cbmltcG9ydCAnLi9zdHlsZXMuc2Nzcyc7XG5cbi8vIGluIG9yZGVyIHRvIHVzZSBlYXJ0aCBiYWNrZ3JvdW5kIGltZyB5b3UgbXVzdCBpbXBvcnQgaXQgYW5kIHNlZSBpZiB5b3UgY2FuIHVzZSBpdCBpbiBjc3MgXG5cbi8vIGJ1dCBpbiBqcywgXG5cbi8vIHF1ZXJ5IHNlbGVjdG9yIHRoZSBib2R5LCBzZWxlY3QgZWxlbWVudCwgXG5cbi8vIGFkZCB0aGUgaW1nIGFzIGEgYmFja2dyb3VuZCwgYW5kIHNldCB0aGUgaW1wb3J0ZWQgaW1nIGFzIHRoZSBzcmMuIFxuXG4vLyB3aHkgZm9lcyBmIGNoYW5nZSB3aGVuIEkgZW50ZXIgaXQgYWdhaW4/IENoZWNrIHRvIG1ha2Ugc3VyZSB5b3UgYXJlIGxvZ2dpbmcgY29ycmVjdCBkYXlzIFxuXG4vLyBjaGFuZ2UgaXQgdG8gZmVlbHMgbGlrZSBpbnN0ZWFkIG9mIGN1cnJlbnQgdGVtcCBcblxuLy8gT0sgc28gdG9kYXksIEkgTGlrZSB0aGUgc3R5bGluZyBmb3IgdGhlIGJhY2tncm91bmQsIG1vdmUgdGhlIHRoZSBpbWdzIGludG8gdGhlIHNyYyBkaXJlY3RvcnksIFxuXG4vLyBhbmQgdXNlIGdoIHBhZ2VzLCB0byBzZWUgaWYgdGhlIGltYWdlcyByZW5kZXIsIFxuXG4vLyBhbHNvIGNoYW5nZSB0aGUgY3VycmVudCB3ZWF0aGVyLCB0byB1c2UgY3VycmVudCBpbnN0ZWFkIG9mIGZlZWxzIGxpa2UsIGRvdWJsZSBjaGVjayB3aXRoIHRoYXQsIFxuXG4vLyBsYXN0IHRyeSB0byBpbnN0YWxsIHNhc3MsIG1heWJlIGFzayBpZiBpdCBpcyBuZWNlc3NhcnkgdG8gdXNlIHR3byBKUyBmaWxlcywgXG5cbi8vIGJydXNoIHVwIG9uIHRoZSBzdHlsaW5nIHRvbywgbWF5YmUgdXNlIERPTSBzdHlsaW5nIGZvciB0aGUgMyBkYXkgZm9yZWNhc3QgYm94ZXMsIG9uY2UgZGF0YSBpcyBlbnRlcmVkLCB0aGVuIGFwcGx5IHRoZSBiYWNrZ3JvdW5kIHN0eWxlcywgXG5cbi8vIHRlc3QgZ2ggcGFnZXMsIFxuXG4vLyBob3cgY2FuIEkgZGlzcGxheSBhbGwgY29udGVudCwgd2VicGFjayBpc3N1ZSBvZiBnaCBwYWdlcyBub3QgZGlzcGxheWluZyB0aGUgY29udGVudCwgaXQgb25seSBkaXNwbGF5cyB0aGUgaHRtbC4gXG5cbmxldCBzZWFyY2hCb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoLWJveCcpOyBcblxubGV0IHNlYXJjaEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gtYnRuJyk7IFxuXG4vLyBjdXJyZW50IHdlYXRoZXIgZGF0YSBzdG9yZWQgaW4gaGVyZSwgXG5sZXQgd2VhdGhlckNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXJyZW50LXdlYXRoZXItY29udGFpbmVyJyk7IFxuXG5sZXQgc3RvcmVkV2VhdGhlckRhdGEgXG5cbmFzeW5jIGZ1bmN0aW9uIGZldGNoRGF0YShpbnB1dCkgeyBcblxuXG4gICAgbGV0IGNpdHlEYXRhID0gaW5wdXQ7IFxuICAgIFxuICAgIGNvbnNvbGUubG9nKCdUaGUgZGF0YSBwYXNzZWQgaW4gaXM6ICcgKyBjaXR5RGF0YSk7XG4gICAgXG4gICAgY29uc3QgZ2V0RGF0YSA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT00NTQ2NGRhMzg4OTI0NTBkOTVmMTA0MzMyMzA1MDYgJnE9JHtjaXR5RGF0YX0mZGF5cz01JmFxaT1ubyZhbGVydHM9bm9gKTtcblxuICAgIGNvbnN0IGpzb25EYXRhID0gYXdhaXQgZ2V0RGF0YS5qc29uKCk7XG4gICAgXG4gICAgbGV0IGN1cnJlbnRXZWF0aGVyRGF0YSA9IGpzb25EYXRhO1xuICAgIFxuICAgIHN0b3JlZFdlYXRoZXJEYXRhID0gY3VycmVudFdlYXRoZXJEYXRhOyBcblxuICAgLy8gY29uc29sZS5sb2coc3RvcmVkV2VhdGhlckRhdGEpO1xuXG4gICBkaXNwbGF5Q3VycmVudFdlYXRoZXIoY3VycmVudFdlYXRoZXJEYXRhKTtcblxuICAgYWRkV2VhdGhlckZvcmVjYXN0MShjdXJyZW50V2VhdGhlckRhdGEpO1xuXG4gICBhZGRXZWF0aGVyRm9yZWNhc3QyKGN1cnJlbnRXZWF0aGVyRGF0YSk7XG5cbiAgIGFkZFdlYXRoZXJGb3JlY2FzdDMoY3VycmVudFdlYXRoZXJEYXRhKTsgXG4gICAgXG4gICAgXG4gIC8vICB0b2dnbGUoY3VycmVudFdlYXRoZXJEYXRhKTtcblxuICAvLyByZXR1cm4ganNvbkRhdGE7XG5cbn0gXG5cbi8vIGhvdyBjYW4gSSBzdG9yZSB3ZWF0aGVyIGRhdGEgb3V0c2lkZSBvZiB0aGUgZnVuY3Rpb24/IFxuXG4vLyBhbGwgSSBjYW4gdGhpbmsgb2YgaXMgYSBnbG9iYWwgdmFyaWFibGUsY1xuXG4vLyBmZXRjaERhdGEudGhlbihkYXRhID0+IGNvbnNvbGUubG9nKGRhdGEpKTsgXG5cbi8vIE9LIEkgYW0gYWJsZSB0byBnZXQgdGhlIHdlYXRoZXIgZGF0YSwgd2l0aGluIG15IGV2ZW50IGxpc3RlbmVyIGZ1bmN0aW9uIFxuIFxuXG4vLyAgbGV0IHdlYXRoZXJDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VycmVudC13ZWF0aGVyLWNvbnRhaW5lcicpOyBcblxuYXN5bmMgZnVuY3Rpb24gZGlzcGxheUN1cnJlbnRXZWF0aGVyKHdlYXRoZXIpIHsgXG5cbiAgICBsZXQgY3VycmVudFdlYXRoZXJJY29uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1cnJlbnQtd2VhdGhlci1pY29uJyk7IFxuICAgIC8vIGNsZWFyIERPTSwgcmVwbGFjZUNoaWxkcmVuIGJlZm9yZSBhcHBlbmRpbmcgbmV3XG5cbiAgICBsZXQgY3VycmVudEZvcmVjYXN0ID0gYXdhaXQgd2VhdGhlcjsgXG5cbiAgICAvLyBjb25zb2xlLmxvZyhjdXJyZW50Rm9yZWNhc3QubG9jYXRpb24pIFxuXG4gICAgY3VycmVudFdlYXRoZXJJY29uLnRleHRDb250ZW50ID0gJyc7IFxuXG5cblxuICAgIGxldCB3ZWF0aGVySWNvbiA9IG5ldyBJbWFnZSgpOyBcblxuICAgIHdlYXRoZXJJY29uLnNyYyA9IGN1cnJlbnRGb3JlY2FzdC5jdXJyZW50LmNvbmRpdGlvbi5pY29uO1xuXG4gICAgLy8gY29uc29sZS5sb2coY3VycmVudEZvcmVjYXN0LmN1cnJlbnQuY29uZGl0aW9uKVxuXG4gICAgbGV0IGxvY2F0aW9uRGF0YSA9IGN1cnJlbnRGb3JlY2FzdC5sb2NhdGlvbi5uYW1lO1xuXG4gICAgbGV0IHdlYXRoZXJEZXNjcmlwdGlvbkRhdGEgPSBjdXJyZW50Rm9yZWNhc3QuY3VycmVudC5jb25kaXRpb24udGV4dDsgXG5cbiAgICBsZXQgY3VycmVudFdlYXRoZXJOdW1iZXJEYXRhID0gY3VycmVudEZvcmVjYXN0LmN1cnJlbnQuZmVlbHNsaWtlX2Y7XG5cbiAgICBsZXQgd2luZERhdGEgPSBjdXJyZW50Rm9yZWNhc3QuY3VycmVudC53aW5kX21waDtcblxuICAgIGxldCB3aW5kRGlyZWN0aW9uID0gY3VycmVudEZvcmVjYXN0LmN1cnJlbnQud2luZF9kaXI7XG5cbiAgICBsZXQgcmFpbkluY2hlcyA9IGN1cnJlbnRGb3JlY2FzdC5jdXJyZW50LnByZWNpcF9pbjsgXG5cbiAgICBsZXQgaHVtaWRpdHlMZXZlbCA9IGN1cnJlbnRGb3JlY2FzdC5jdXJyZW50Lmh1bWlkaXR5O1xuXG4gICAgbGV0IG5ld0ltZyA9IG5ldyBJbWFnZSgpO1xuXG4gICAgbmV3SW1nLnNyYyA9IGN1cnJlbnRGb3JlY2FzdC5jdXJyZW50LmNvbmRpdGlvbi5pY29uO1xuXG4vLyAgICBsZXQgY3VycmVudFdlYXRoZXJJY29uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1cnJlbnQtd2VhdGhlci1pY29uJyk7IFxuXG4gICAvLyBkb250IGFwcGVuZCB1c2UgdmFyaWFibGUgYW5kIHRlbXBsYXRlIGxpdGVyYWxzLCBhcHBlbmRpbmcgbWF5IHN0b3AgdGhlIGFkZGluZyBvbnRvIHRvIGluc3RlYWQgb2YgcmVwbGFjaW5nLCBcblxuICAgY3VycmVudFdlYXRoZXJJY29uLmFwcGVuZENoaWxkKHdlYXRoZXJJY29uKTtcblxuICAgbGV0IGN1cnJlbnRXZWF0aGVyTG9jYXRpb25UZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1cnJlbnQtd2VhdGhlci1sb2NhdGlvbi1wJyk7IFxuXG4gICBjdXJyZW50V2VhdGhlckxvY2F0aW9uVGV4dC50ZXh0Q29udGVudCA9IGBMb2NhdGlvbjogJHtsb2NhdGlvbkRhdGF9YDtcblxuICAgbGV0IGN1cnJlbnRXZWF0aGVyRGVzY3JpcHRpb25UZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1cnJlbnQtd2VhdGhlci1kZXNjcmlwdGlvbi1wJyk7IFxuXG4gICBjdXJyZW50V2VhdGhlckRlc2NyaXB0aW9uVGV4dC50ZXh0Q29udGVudCA9IGBDb25kaXRpb25zOiAke3dlYXRoZXJEZXNjcmlwdGlvbkRhdGF9YFxuXG4gICBsZXQgY3VycmVudFdlYXRoZXJUZW1wRGF0YSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXJyZW50LXdlYXRoZXItdGVtcC1kYXRhJyk7IFxuXG4gICBjdXJyZW50V2VhdGhlclRlbXBEYXRhLnRleHRDb250ZW50ID0gYFRlbXByYXR1cmUgaXM6ICR7Y3VycmVudFdlYXRoZXJOdW1iZXJEYXRhfSBcXHUwMEIwRmA7XG5cbiAgIGxldCBjdXJyZW50V2VhdGhlcldpbmREYXRhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1cnJlbnQtd2VhdGhlci13aW5kLWRhdGEnKTsgXG5cbiAgIGN1cnJlbnRXZWF0aGVyV2luZERhdGEudGV4dENvbnRlbnQgPSBgV2luZCBTcGVlZDogJHt3aW5kRGF0YX0gbXBoYDtcblxuICAgbGV0IGN1cnJlbnRXZWF0aGVyV2luZERpcmVjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXJyZW50LXdlYXRoZXItd2luZC1kaXJlY3Rpb24tZGF0YScpO1xuXG4gICBjdXJyZW50V2VhdGhlcldpbmREaXJlY3Rpb24udGV4dENvbnRlbnQgPSBgV2luZCBEaXJlY3Rpb246ICR7d2luZERpcmVjdGlvbn1gO1xuXG4gICBsZXQgY3VycmVudFdlYXRoZXJSYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1cnJlbnQtd2VhdGhlci1yYWluLWluY2hlcy1kYXRhJyk7XG5cbiAgIGN1cnJlbnRXZWF0aGVyUmFpbi50ZXh0Q29udGVudCA9IGBSYWluOiAke3JhaW5JbmNoZXN9IGluYDtcblxuICAgbGV0IGN1cnJlbnRIdW1pZGl0eUxldmVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1cnJlbnQtd2VhdGhlci1odW1pZGl0eS1kYXRhJyk7IFxuXG4gICBjdXJyZW50SHVtaWRpdHlMZXZlbC50ZXh0Q29udGVudCA9IGBIdW1pZGl0eTogJHtodW1pZGl0eUxldmVsfSVgXG5cbn0gXG5cbi8vIG5lZWRzIHRvIHNvbWVob3cgYmUgY2xlYXJlZCBpbiB0aGUgc2VhcmNoIGJ0biBcblxuc2VhcmNoQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHsgXG5cbiAgICBjb25zb2xlLmxvZygnY2xpY2snKTtcblxuICAgIGxldCBpbnB1dFZhbHVlID0gc2VhcmNoQm94LnZhbHVlO1xuXG4gICAgZmV0Y2hEYXRhKGlucHV0VmFsdWUpO1xuXG59KTsgXG5cbi8vIGdyYWIgdGhlIGlucHV0IGZpZWxkcyB0aGF0IGhhdmUgRiBcblxuLy8gc2V0IHZhcmlhYmxlcyBmb3IgY3VycmVudCB0ZW1wIGluIGMsIGhpZ2ggdGVtcCBpbiBjLCBsb3cgdGVtcCBpbiBjIFxuXG4vLyBzZXQgdGhvc2UgdmFyaWFibGVzLCBcblxuLy8gc2V0IGEgdmFyaWFibGUgaXNDIHRvIGZhbHNlLCBcblxuLy8gY29uZGl0aW9uYWwgaWYgYyBpcyB0cnVlIGdyYWIgdGhlIHZhbHVlcywgdGhlbiByZXBsYWNlIHRoZW0gd2l0aCBjIHZhbHVlLCBcblxuLy8gaWYgZmFsc2UsIHN3aXRjaCB0aGVtIGJhY2sgdG8gRiwgXG5cbi8vIGNhbiBzd2l0Y2ggdGhlIHRlbXAsIFxuXG4vLyBidXQgaG93IGNhbiBJIHRvZ2dsZSBiYWNrIGFuZCBmb3J0aCBcblxuLy8gbWF5YmUgSSBzaG91bGQgbWFrZSBhbm90aGVyIHZhcmlhYmxlIGZvciBGIFxuXG5cbi8vIGxldCB0b2dnbGVUZW1wcmF0dXJlQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0YtQy10b2dnbGUtYnRuJyk7IFxuXG4vLyBsZXQgaXNDZWxjaXVzID0gZmFsc2U7IFxuXG4vLyAvLyBsZXQgaXNGID0gdHJ1ZTsgXG5cbi8vIEhFUkUhXG5cbi8vIGdyYWIgdGhlIGVsZW1lbnQsIEMgZWxlbWVudCBcblxubGV0IGNlbGNpdXNCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnQy10b2dnbGUtYnRuJyk7IFxuXG5jZWxjaXVzQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcblxuICAgIGxldCBjdXJyZW50Q2VsY2l1c1RlbXAgPSBzdG9yZWRXZWF0aGVyRGF0YS5jdXJyZW50LnRlbXBfYzsgXG5cbiAgICBsZXQgY3VycmVudFdlYXRoZXJUZW1wRGF0YSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXJyZW50LXdlYXRoZXItdGVtcC1kYXRhJyk7IFxuXG4gICAgY3VycmVudFdlYXRoZXJUZW1wRGF0YS50ZXh0Q29udGVudCA9IGBUZW1wcmF0dXJlIElzOiAke2N1cnJlbnRDZWxjaXVzVGVtcH0gQ2A7IFxuXG4gICAgbGV0IGRheTFIaWdoVGVtcCA9IHN0b3JlZFdlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRheS5tYXh0ZW1wX2M7XG5cbiAgICBsZXQgZGF5MUxvd1RlbXAgPSBzdG9yZWRXZWF0aGVyRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXkubWludGVtcF9jO1xuXG4gICAgbGV0IGhpZ2hMb3dUZW1wRGF0YSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dC1mb3JlY2FzdC1kYXkxLWhpZ2gtbG93Jyk7IFxuXG4gICAgaGlnaExvd1RlbXBEYXRhLnRleHRDb250ZW50ID0gYEhpZ2ggdG9kYXkgaXM6ICR7ZGF5MUhpZ2hUZW1wfVxcdTAwQjBDIExvdyB0b2RheSBpczogJHtkYXkxTG93VGVtcH1cXHUwMEIwQ2A7XG5cbiAgICBsZXQgZGF5MkhpZ2hUZW1wID0gc3RvcmVkV2VhdGhlckRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMV0uZGF5Lm1heHRlbXBfYztcblxuICAgIGxldCBkYXkyTG93VGVtcCA9IHN0b3JlZFdlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzFdLmRheS5taW50ZW1wX2M7IFxuXG4gICAgbGV0IGhpZ2hMb3dUZW1wRGF0YURheTIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXQtZm9yZWNhc3QtZGF5Mi1oaWdoLWxvdycpO1xuXG4gICAgaGlnaExvd1RlbXBEYXRhRGF5Mi50ZXh0Q29udGVudCA9IGBIaWdoIFRvZGF5IGlzOiAke2RheTJIaWdoVGVtcH1cXHUwMEIwQyBMb3cgdG9kYXkgaXM6ICR7ZGF5Mkxvd1RlbXB9XFx1MDBCMENgOyAgXG5cbiAgICAvLyBcblxuICAgIGxldCBkYXkzSGlnaFRlbXAgPSBzdG9yZWRXZWF0aGVyRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsyXS5kYXkubWF4dGVtcF9jO1xuXG4gICAgbGV0IGRheTNMb3dUZW1wID0gc3RvcmVkV2VhdGhlckRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMl0uZGF5Lm1pbnRlbXBfYztcblxuICAgIGxldCBoaWdoTG93VGVtcERhdGFEYXkzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0LWZvcmVjYXN0LWRheTMtaGlnaC1sb3cnKTtcblxuICAgIGhpZ2hMb3dUZW1wRGF0YURheTMudGV4dENvbnRlbnQgPSBgSGlnaCB0b2RheSBpczogJHtkYXkzSGlnaFRlbXB9XFx1MDBCMEMgTG93IHRvZGF5IGlzOiAke2RheTNMb3dUZW1wfVxcdTAwQjBDYDtcbiAgICBcbn0pOyBcblxubGV0IGZCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnRi10b2dnbGUtYnRuJyk7IFxuXG5mQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcblxuICAgIGxldCBjdXJyZW50RlRlbXAgPSBzdG9yZWRXZWF0aGVyRGF0YS5jdXJyZW50LnRlbXBfZjsgXG5cbiAgICBsZXQgY3VycmVudFdlYXRoZXJUZW1wRGF0YSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXJyZW50LXdlYXRoZXItdGVtcC1kYXRhJyk7XG5cbiAgICBjdXJyZW50V2VhdGhlclRlbXBEYXRhLnRleHRDb250ZW50ID0gYFRlbXByYXR1cmUgSXM6ICR7Y3VycmVudEZUZW1wfVxcdTAwQjBGYDtcblxuICAgIGxldCBkYXkxSGlnaFRlbXAgPSBzdG9yZWRXZWF0aGVyRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXkubWF4dGVtcF9mO1xuXG4gICAgbGV0IGRheTFMb3dUZW1wID0gc3RvcmVkV2VhdGhlckRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uZGF5Lm1pbnRlbXBfZjtcblxuICAgIGxldCBoaWdoTG93VGVtcERhdGEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXQtZm9yZWNhc3QtZGF5MS1oaWdoLWxvdycpOyBcblxuICAgIGhpZ2hMb3dUZW1wRGF0YS50ZXh0Q29udGVudCA9IGBIaWdoIHRvZGF5IGlzOiAke2RheTFIaWdoVGVtcH1cXHUwMEIwRiBMb3cgdG9kYXkgaXM6ICR7ZGF5MUxvd1RlbXB9XFx1MDBCMEZgOyBcblxuICAgIGxldCBkYXkySGlnaFRlbXAgPSBzdG9yZWRXZWF0aGVyRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsxXS5kYXkubWF4dGVtcF9mO1xuXG4gICAgbGV0IGRheTJMb3dUZW1wID0gc3RvcmVkV2VhdGhlckRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMV0uZGF5Lm1pbnRlbXBfZjsgXG5cbiAgICBsZXQgaGlnaExvd1RlbXBEYXRhRGF5MiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dC1mb3JlY2FzdC1kYXkyLWhpZ2gtbG93Jyk7XG5cbiAgICBoaWdoTG93VGVtcERhdGFEYXkyLnRleHRDb250ZW50ID0gYEhpZ2ggVG9kYXkgaXM6ICR7ZGF5MkhpZ2hUZW1wfVxcdTAwQjBGIExvdyB0b2RheSBpczogJHtkYXkyTG93VGVtcH1cXHUwMEIwRmA7IFxuXG4gICAgLy8gXG5cbiAgICBsZXQgZGF5M0hpZ2hUZW1wID0gc3RvcmVkV2VhdGhlckRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMl0uZGF5Lm1heHRlbXBfZjtcblxuICAgIGxldCBkYXkzTG93VGVtcCA9IHN0b3JlZFdlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzJdLmRheS5taW50ZW1wX2Y7XG5cbiAgICBsZXQgaGlnaExvd1RlbXBEYXRhRGF5MyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dC1mb3JlY2FzdC1kYXkzLWhpZ2gtbG93Jyk7XG5cbiAgICBoaWdoTG93VGVtcERhdGFEYXkzLnRleHRDb250ZW50ID0gYEhpZ2ggdG9kYXkgaXM6ICR7ZGF5M0hpZ2hUZW1wfVxcdTAwQjBGIExvdyB0b2RheSBpczogJHtkYXkzTG93VGVtcH1cXHUwMEIwRmA7XG4gICAgXG59KVxuXG5cbi8vIHRvZ2dsZVRlbXByYXR1cmVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4geyBcbi8vICAgICAgaXNDZWxjaXVzID0gdHJ1ZTtcblxuXG4vLyAgICAgLy8gIGlzRiA9IGZhbHNlO1xuXG4vLyAgICAgbGV0IHggPSBzZWFyY2hCb3gudmFsdWU7IFxuICAgIFxuLy8gICAgLy8gc2V0IHZhcmlhYmxlIGZvciBjdXJyZW50IHRlbXAgaW4gY1xuXG4vLyAgICAvLyBncmFiIHRoZSBpbnB1dCBmaWVsZCBmb3IgY3VycmVudCB0ZW1wIFxuXG4vLyAgICAvLyBzaG91bGQgSSBoYXZlIHR3byBkaWZmZXJlbnQgYnRucywgXG5cbi8vICAgIC8vIGlmIEYgY2xpY2tlZCBhcHBlbmQsIGYgdmFsdWVzIFxuXG4vLyAgICAvLyBpZiBjIGNsaWNrZWQsIGFwcGVuZCBjIHZhbHVlcywgXG5cbi8vICAgIC8vIGhvdyB0byBmbGlwIGEgYm9vbGVhbiB2YWx1ZSBiYXNlZCBvbiBidG4gY2xpY2tcblxuLy8gICAgLy8gSSB0aGluayB0aGUgYmVzdCB3YXkgaXMgdG8ga2VlcCBhIHNlcGVyYXRlIGJ0biwgXG5cbi8vICAgIC8vIGlkZWFsbHkgSSB3b3VsZCBsaWtlIHRvIGNvbXBsZXRlIHRoaXMgd2l0aGluIHRoZSBmdW5jdGlvbiwgXG5cbi8vICAgIC8vIGJ1dCBtYXkgYmUgZWFzaWVyIHRvIG1ha2UgdHdvIGJ0bnMsIGhpdCB0aGUgYyBidG4gZGlzcGxheSBjIHRlbXAgZGF0YSBpbiBhbGwgdGhlIGNvcnJlY3Qgc3BvdHMgXG5cbi8vICAgIC8vIGlmIGYgaXMgaGl0IHRoZW4gZGlzcGxheSBGIGluIGFsbCB0aGUgcmlnaHQgcGxhY2VzLCBcblxuLy8gICAgLy8gSSB3aWxsIG1ha2UgdHdvIGJ1dHRvbnMsIGV2ZW50IGxpc3RlbmVyLCBpZiBmIGNsaWNrZWQgZGlwbHNheSBmIHRlbXAgZGF0YSwgaWYgYyBjbGlja2VkLCBkaXNwbGF5IGMgdmFsdWVzLCBncmFiYmluZyB0aGUgaW5wdXQgZmllbGRzLCBhbmQgdXNpbmcgJHt9XG5cbi8vICAgIC8vIHRvIGFwcGVuZCB2YXJpYWJsZXMgdG8gdGhlIERPTS4gXG5cbi8vICAgIGxldCBjdXJyZW50Q2VsY2l1c1RlbXAgPSBzdG9yZWRXZWF0aGVyRGF0YS5jdXJyZW50LnRlbXBfYzsgXG5cbi8vICAgIGxldCBjdXJyZW50RlRlbXAgPSBzdG9yZWRXZWF0aGVyRGF0YS5jdXJyZW50LnRlbXBfZjsgXG5cbi8vICAgIGxldCBjdXJyZW50V2VhdGhlclRlbXBEYXRhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1cnJlbnQtd2VhdGhlci10ZW1wLWRhdGEnKTsgXG5cbi8vICAgIGNvbnNvbGUubG9nKGN1cnJlbnRDZWxjaXVzVGVtcCk7IFxuXG4vLyAgICBjb25zb2xlLmxvZyhjdXJyZW50RlRlbXApOyBcblxuLy8gICAgaWYgKGlzQ2VsY2l1cykgeyBcbi8vICAgICBjdXJyZW50V2VhdGhlclRlbXBEYXRhLnRleHRDb250ZW50ID0gYCR7Y3VycmVudENlbGNpdXNUZW1wfWA7XG4vLyAgICAgLy8gaXNDZWxjaXVzID0gZmFsc2U7XG4vLyAgICB9IGVsc2UgaWYgKCFpc0NlbGNpdXMpIHsgXG4vLyAgICAgY3VycmVudFdlYXRoZXJUZW1wRGF0YS50ZXh0Q29udGVudCA9IGAke2N1cnJlbnRGVGVtcH1gO1xuLy8gICAgfVxuXG4vLyAgICBpc0NlbGNpdXMgPSBmYWxzZTtcblxuLy8gICAgY29uc29sZS5sb2coaXNDZWxjaXVzKTtcbi8vIC8vICAgIH0gZWxzZSAoaXNGKSB7IFxuLy8gLy8gICAgIGN1cnJlbnRXZWF0aGVyVGVtcERhdGEudGV4dENvbnRlbnQgPSBgJHtjdXJyZW50RlRlbXB9YDtcbi8vIC8vICAgIH1cbiAgICBcbi8vICAgICAvLyBjb25zb2xlLmxvZyhzdG9yZWRXZWF0aGVyRGF0YS5jdXJyZW50LmNvbmRpdGlvbik7XG4vLyAvLyBmZXRjaERhdGEudGhlbihkYXRhID0+IGNvbnNvbGUubG9nKGRhdGEpKTtcbi8vIH0pO1xuXG5hc3luYyBmdW5jdGlvbiBhZGRXZWF0aGVyRm9yZWNhc3QxKHdlYXRoZXIpIHsgXG4gICAgbGV0IGZvcmVjYXN0RGF0YSA9IGF3YWl0IHdlYXRoZXI7IFxuXG4gICAgIC8vIGNvbnNvbGUubG9nKGZvcmVjYXN0RGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXkpO1xuXG4gICAgLy8gY29uc29sZS5sb2coZm9yZWNhc3REYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRheS5jb25kaXRpb24uaWNvbik7XG5cbiAgICBsZXQgaW5wdXRGb3JJbWdEYXkxID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0LWZvcmVjYXN0LWRheTEtaWNvbicpOyBcblxuICAgIGlucHV0Rm9ySW1nRGF5MS50ZXh0Q29udGVudCA9ICcnO1xuXG4gICAgbGV0IGRheTFEYXRlID0gZm9yZWNhc3REYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRhdGU7IFxuXG4gICAgbGV0IGRheTFJY29uID0gbmV3IEltYWdlKCk7IFxuXG4gICAgbGV0IGRheTFIaWdoVGVtcCA9IGZvcmVjYXN0RGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXkubWF4dGVtcF9mO1xuXG4gICAgbGV0IGRheTFMb3dUZW1wID0gZm9yZWNhc3REYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRheS5taW50ZW1wX2Y7XG5cbiAgICBsZXQgY2hhbmNlT2ZSYWluID0gZm9yZWNhc3REYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRheS5kYWlseV9jaGFuY2Vfb2ZfcmFpbjtcblxuICAgIGxldCB1dkluZGV4ID0gZm9yZWNhc3REYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRheS51djtcblxuICAgIGxldCBjaGFuY2VPZlNub3cgPSBmb3JlY2FzdERhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uZGF5LmRhaWx5X2NoYW5jZV9vZl9zbm93O1xuXG4gICAgLy8gZGF5MUljb24uc3R5bGUuaGVpZ2h0ID0gJzEzMHB4JztcblxuICAgIGRheTFJY29uLnNyYyA9IGZvcmVjYXN0RGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXkuY29uZGl0aW9uLmljb247IFxuICAgIFxuICAgIC8vIGxldCBpbnB1dEZvckltZ0RheTEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXQtZm9yZWNhc3QtZGF5MS1pY29uJyk7IFxuXG4gICAgaW5wdXRGb3JJbWdEYXkxLmFwcGVuZChkYXkxSWNvbik7XG5cbiAgICBsZXQgZGF0ZUFuZEljb25EYXRhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0LWZvcmVjYXN0LWRheTEtZGF0YS1kYXRlJyk7IFxuXG4gICAgZGF0ZUFuZEljb25EYXRhLnRleHRDb250ZW50ID0gYERhdGUgdG9kYXkgaXM6ICR7ZGF5MURhdGV9YDsgXG5cbiAgICBsZXQgaGlnaExvd1RlbXBEYXRhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0LWZvcmVjYXN0LWRheTEtaGlnaC1sb3cnKTsgXG5cbiAgICBoaWdoTG93VGVtcERhdGEudGV4dENvbnRlbnQgPSBgSGlnaCB0b2RheSBpczogJHtkYXkxSGlnaFRlbXB9XFx1MDBCMEYgTG93IHRvZGF5IGlzOiAke2RheTFMb3dUZW1wfVxcdTAwQjBGYDtcblxuICAgIGxldCBjaGFuY2VPZlJhaW5EYXRhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0LWZvcmVjYXN0LWRheS0xLXJhaW4tY2hhbmNlJyk7XG4gICAgXG4gICAgY2hhbmNlT2ZSYWluRGF0YS50ZXh0Q29udGVudCA9IGBDaGFuY2Ugb2YgUmFpbjogJHtjaGFuY2VPZlJhaW59JWAgXG5cbiAgICBsZXQgdXZJbmRleERhdGEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXQtZm9yZWNhc3QtZGF5LTEtdXYtaW5kZXgnKTtcblxuICAgIHV2SW5kZXhEYXRhLnRleHRDb250ZW50ID0gYFVWIEluZGV4IGlzOiAke3V2SW5kZXh9YDtcblxuICAgIGxldCBjaGFuY2VPZlNub3dEYXRhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0LWZvcmVjYXN0LWRheS0xLXNub3ctY2hhbmNlJyk7IFxuXG4gICAgY2hhbmNlT2ZTbm93RGF0YS50ZXh0Q29udGVudCA9IGBDaGFuY2Ugb2YgU25vdzogJHtjaGFuY2VPZlNub3d9JWBcblxufSBcblxuXG5hc3luYyBmdW5jdGlvbiBhZGRXZWF0aGVyRm9yZWNhc3QyKHdlYXRoZXIpIHsgXG4gICAgbGV0IGZvcmVjYXN0RGF0YTIgPSBhd2FpdCB3ZWF0aGVyOyBcblxuICAgIGNvbnNvbGUubG9nKGZvcmVjYXN0RGF0YTIpO1xuXG4gICAgLy8gY29uc29sZS5sb2coZm9yZWNhc3REYXRhMi5mb3JlY2FzdC5mb3JlY2FzdGRheVsxXS5kYXRlKTtcblxuICAgIGxldCBpY29uRGF0YSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dC1mb3JlY2FzdC1kYXkyLWRhdGEtaWNvbicpO1xuXG4gICAgaWNvbkRhdGEudGV4dENvbnRlbnQgPSAnJztcblxuICAgIGxldCBkYXkyRGF0ZSA9IGZvcmVjYXN0RGF0YTIuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMV0uZGF0ZTsgXG5cbiAgICBsZXQgZGF5Mkljb25JbWcgPSBuZXcgSW1hZ2UoKTsgXG5cbiAgICBkYXkySWNvbkltZy5zcmMgPSBmb3JlY2FzdERhdGEyLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzFdLmRheS5jb25kaXRpb24uaWNvbjtcblxuICAgIGxldCBkYXkySGlnaFRlbXAgPSBmb3JlY2FzdERhdGEyLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzFdLmRheS5tYXh0ZW1wX2Y7XG5cbiAgICBsZXQgZGF5Mkxvd1RlbXAgPSBmb3JlY2FzdERhdGEyLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzFdLmRheS5taW50ZW1wX2Y7XG5cbiAgICBsZXQgZGF5MkNoYW5jZU9mUmFpbiA9IGZvcmVjYXN0RGF0YTIuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMV0uZGF5LmRhaWx5X2NoYW5jZV9vZl9yYWluO1xuXG4gICAgbGV0IGRheTJVVkluZGV4ID0gZm9yZWNhc3REYXRhMi5mb3JlY2FzdC5mb3JlY2FzdGRheVsxXS5kYXkudXY7IFxuXG4gICAgbGV0IGRheTJDaGFuY2VPZlNub3cgPSBmb3JlY2FzdERhdGEyLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzFdLmRheS5kYWlseV9jaGFuY2Vfb2Zfc25vdztcblxuICAgIC8vIGNvbnNvbGUubG9nKGRheTJDaGFuY2VPZlNub3cpO1xuXG4gICAgLy8gY29uc29sZS5sb2coZGF5Mkljb24pO1xuXG4gICAgbGV0IGRhdGVEYXRhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0LWZvcmVjYXN0LWRheTItZGF0YS1kYXRlJyk7XG5cbiAgICBkYXRlRGF0YS50ZXh0Q29udGVudCA9IGBEYXRlIFRvZGF5IGlzOiAke2RheTJEYXRlfWA7IFxuXG4gICAgLy8gbGV0IGljb25EYXRhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0LWZvcmVjYXN0LWRheTItZGF0YS1pY29uJyk7XG5cbiAgICBpY29uRGF0YS5hcHBlbmQoZGF5Mkljb25JbWcpOyBcblxuICAgIGxldCBoaWdoTG93VGVtcERhdGEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXQtZm9yZWNhc3QtZGF5Mi1oaWdoLWxvdycpO1xuXG4gICAgaGlnaExvd1RlbXBEYXRhLnRleHRDb250ZW50ID0gYEhpZ2ggVG9kYXkgaXM6ICR7ZGF5MkhpZ2hUZW1wfVxcdTAwQjBGIExvdyB0b2RheSBpczogJHtkYXkyTG93VGVtcH1cXHUwMEIwRmA7IFxuXG4gICAgbGV0IGNoYW5jZU9mUmFpbkRhdGEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXQtZm9yZWNhc3QtZGF5Mi1yYWluLWNoYW5jZScpO1xuXG4gICAgY2hhbmNlT2ZSYWluRGF0YS50ZXh0Q29udGVudCA9IGBDaGFuY2Ugb2YgUmFpbjogJHtkYXkyQ2hhbmNlT2ZSYWlufSVgOyBcblxuICAgIGxldCB1dkluZGV4RGF0YSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dC1mb3JlY2FzdC1kYXkyLXV2LWluZGV4Jyk7XG5cbiAgICB1dkluZGV4RGF0YS50ZXh0Q29udGVudCA9IGBVViBJbmRleCBpczogJHtkYXkyVVZJbmRleH1gOyBcblxuICAgIGxldCBjaGFuY2VPZlNub3dEYXRhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0LWZvcmVjYXN0LWRheTItc25vdy1jaGFuY2UnKTtcblxuICAgIGNoYW5jZU9mU25vd0RhdGEudGV4dENvbnRlbnQgPSBgQ2hhbmNlIG9mIFNub3c6ICR7ZGF5MkNoYW5jZU9mU25vd30lYDtcblxufSBcblxuYXN5bmMgZnVuY3Rpb24gYWRkV2VhdGhlckZvcmVjYXN0Myh3ZWF0aGVyKSB7IFxuICAgIGxldCBmb3JlY2FzdERhdGEzID0gd2VhdGhlcjsgXG5cbiAgICBsZXQgZGF5M0RhdGUgPSBmb3JlY2FzdERhdGEzLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzJdLmRhdGU7IFxuXG4gICAgbGV0IGRheTNJbWdJY29uID0gbmV3IEltYWdlKCk7IFxuXG4gICAgbGV0IGljb25EYXRhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0LWZvcmVjYXN0LWRheTMtaWNvbicpO1xuXG4gICAgaWNvbkRhdGEudGV4dENvbnRlbnQgPSAnJztcblxuXG4gICAgZGF5M0ltZ0ljb24uc3JjID0gZm9yZWNhc3REYXRhMy5mb3JlY2FzdC5mb3JlY2FzdGRheVsyXS5kYXkuY29uZGl0aW9uLmljb247XG5cbiAgICBsZXQgZGF5M0hpZ2hUZW1wID0gZm9yZWNhc3REYXRhMy5mb3JlY2FzdC5mb3JlY2FzdGRheVsyXS5kYXkubWF4dGVtcF9mO1xuXG4gICAgbGV0IGRheTNMb3dUZW1wID0gZm9yZWNhc3REYXRhMy5mb3JlY2FzdC5mb3JlY2FzdGRheVsyXS5kYXkubWludGVtcF9mO1xuXG4gICAgbGV0IGRheTNSYWluQ2hhbmNlID0gZm9yZWNhc3REYXRhMy5mb3JlY2FzdC5mb3JlY2FzdGRheVsyXS5kYXkuZGFpbHlfY2hhbmNlX29mX3JhaW47XG5cbiAgICBsZXQgZGF5M1VWSW5kZXggPSBmb3JlY2FzdERhdGEzLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzJdLmRheS51djtcblxuICAgIGxldCBkYXkzQ2hhbmNlT2ZTbm93ID0gZm9yZWNhc3REYXRhMy5mb3JlY2FzdC5mb3JlY2FzdGRheVsyXS5kYXkuZGFpbHlfY2hhbmNlX29mX3Nub3c7XG5cbiAgICBjb25zb2xlLmxvZyhkYXkzQ2hhbmNlT2ZTbm93KTtcblxuICAgIGxldCBkYXRlRGF0YSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dC1mb3JlY2FzdC1kYXkzLWRhdGEtZGF0ZScpO1xuXG4gICAgZGF0ZURhdGEudGV4dENvbnRlbnQgPSBgRGF0ZSBUb2RheSBpczogJHtkYXkzRGF0ZX1gOyBcblxuICAgIC8vIGxldCBpY29uRGF0YSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dC1mb3JlY2FzdC1kYXkzLWljb24nKTtcblxuICAgIGljb25EYXRhLmFwcGVuZChkYXkzSW1nSWNvbik7IFxuXG4gICAgbGV0IGhpZ2hMb3dUZW1wRGF0YSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dC1mb3JlY2FzdC1kYXkzLWhpZ2gtbG93Jyk7XG5cbiAgICBoaWdoTG93VGVtcERhdGEudGV4dENvbnRlbnQgPSBgSGlnaCB0b2RheSBpczogJHtkYXkzSGlnaFRlbXB9XFx1MDBCMEYgTG93IHRvZGF5IGlzOiAke2RheTNMb3dUZW1wfVxcdTAwQjBGYDtcblxuICAgIGxldCBjaGFuY2VPZlJhaW5EYXRhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0LWZvcmVjYXN0LWRheTMtcmFpbi1jaGFuY2UnKTtcblxuICAgIGNoYW5jZU9mUmFpbkRhdGEudGV4dENvbnRlbnQgPSBgQ2hhbmNlIG9mIFJhaW46ICR7ZGF5M1JhaW5DaGFuY2V9JWAgXG5cbiAgICBsZXQgdXZJbmRleERhdGEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXQtZm9yZWNhc3QtZGF5My11di1pbmRleCcpOyBcblxuICAgIHV2SW5kZXhEYXRhLnRleHRDb250ZW50ID0gYFVWIEluZGV4IGlzOiAke2RheTNVVkluZGV4fWA7IFxuXG4gICAgbGV0IGNoYW5jZU9mU25vd0RhdGEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXQtZm9yZWNhc3QtZGF5My1zbm93LWNoYW5jZScpO1xuXG4gICAgY2hhbmNlT2ZTbm93RGF0YS50ZXh0Q29udGVudCA9IGBDaGFuY2Ugb2YgU25vdzogJHtkYXkzQ2hhbmNlT2ZTbm93fSVgO1xuXG59XG5cbi8vIFNvIEkgbGlrZSB3YXZlcyBwcm9qZWN0IGxvb2ssIG5leHQgSSBXaWxsIGZpZ3VyZSBvdXQgYSB3YXkgXG5cbi8vIG5leHQgSSB3aWxsIGdldCB0aGUgMyBkYXkgZm9yZWNhc3QsIFxuXG4vLyBJIGFzc3VtZSBpdCB3b3VsZCBiZSB0aGUgc2FtZSBwcm9jZXNzIGZldGNoIHRoZSBkYXRhIFxuXG4vLyBrZXkgaW50byB0aGUgdmFsdWUgdGhlIGN1cnJlbnQgZm9yZWNhc3QgXG5cbi8vIEkgdGhpbmsgSSBhbHNvIG5lZWQgdG8gd3JpdGUgYSBmdW5jdGlvbiwgXG5cbi8vIHRoYXQgd2lsbCBkaXNwbGF5IHRoZSB0aHJlZSBkYXkgZm9yZWNhc3QsIFxuXG4vLyBwYXNzIHRoZSB3ZWF0aGVyIGRhdGEgdG8gdGhhdCB5b3UgZ290IGZyb20gdGhlIGZldGNoIGRhdGEgZnVuY3Rpb24gXG5cbi8vIHRvIHRoZSBvdGhlciBmdW5jdGlvbiB3aGljaCB3aWxsIGp1c3QgZGlzcGxheSBmb3JlY2FzdCB3ZWFodGVyIFxuXG4vLyBmb3IgMyBkYXlzLCBcblxuLy8gcHJvamVjdCwgMyBkYXkgZm9yZWNhc3QsIFxuXG4vLyB0b2dnbGUgY2VsaXVzIGFuZCBmIFxuXG4vLyBmaW5kIHdheSB0byBjbGVhciBET00gYmVmb3JlIGFkZGluZyBuZXcgdmFsdWVzLCBubyBhZGRpbmcgb24gXG5cbi8vIGEgd2F5IHRvIGltcG9ydCBpY29ucyBhbmQgZ2V0IHRoZSBjb3JyZWN0IHBhdGggXG5cbi8vIGljb25zIHNlZW1zIHRvIHdvcmtpbmchISBcblxuLy8gbWFrZSB0aGUgd2VhdGhlciBkZXNjcmlwdGlvbiBlbGVtZW50cyBhcHBlYXIgd2l0aCB0aGUgRE9NLCBcblxuLy8gaW5zdGVhZCBvZiB0aGUgaHRtbCwgXG5cbi8vIGZpbmQgYSB3YXkgbm93IHRvIGtleSBpbnRvIGFuZCBnZXQgZm9yZWNhc3QgXG5cbi8vIG5leHQgc3RlcCBpcyB0byBrZXkgaW50byBkYXRhLCBhbmQgZ2V0IHRoZSBmb3JlY2FzdCBcblxuLy8ga2V5IGludG8gY2VydGFpbiBkYXlzLCBtYWtlIGEgSFRNTCBjYXJkLCBcblxuLy8gYXBwZW5kIHRoZSBkYXRhIHRvIHRoZSBjYXJkLCBhbG9uZyB3aXRoIGxvZ29zIGZvciB0aGUgd2VhdGhlciwgXG5cbi8vIHRoZW4gaW5zdGVhZCBvZiBIVE1MIE1lc3NhZ2VzLCB1c2UgRE9NIHBsdXMgYXBwZW5kIGRhdGEgXG5cbi8vIG9uY2UgY3VycmVudCBhbmQgMyBkYXkgZm9yZWNhc3QgaXMgc2V0LCBcblxuLy8gZmluZCBhIHdheSBvciB3cml0ZSBhIGZ1bmN0aW9uIHRoYXQgY2FuIGNoYW5nZWQgZiBkYXRhIHRvIGMgXG5cbi8vIHN0eWxlIHVwIGFuZCBkb25lLCBcblxuLy8gV2Uga25vdyB3aGF0IHdlIG5lZWQgdG8gZG8sIGZpcnN0IEkgd291bGQgZ2V0IHRoZSBjb3JyZWN0IFxuXG4vLyBmb3JlY2FzdCBkYXRhIGFuZCBhcHBlbmQgaW4gdGhlIGNvcnJlY3Qgc3BvdCwgXG5cbi8vIHRoZW4gZml4IHRoZSBjdXJyZW50IHdlYXRoZXIgdG8gdXNlIERPTSBkaXNwbGF5ZWQgdGV4dCwgXG5cbi8vIGFsb25nIHdpdGggYXR0YWNoaW5nIHRoZSBpY29uLCBcblxuLy8gc3RhcnQgdGhlcmUsIGZpcnN0IGxldHMgZmluZCB0aGUgY29ycmVjdCBmb3JlY2FzdCBmb3IgdGhlIDMgZGF5LCBcblxuLy8gb2sgbGV0cyBmaXJzdCBnbyB0aGUgSFRNTCwgbmFkIG1ha2UgdGhlIG1hcmt1cCwgXG5cbi8vIHdlIHdpbGwgbmVlZCBhIGNvbnRhaW5lciwgXG5cbi8vIHRoYXQgY2FuIGhvbGQgMyBjYXJkcywgZGlzcGxheWVkIGluIGZsZXggc28gdGhleSBhcmUgaW4gYSByb3csIFxuXG4vLyBhcHBlbmQgdGhlIHZhbHVlcyB0byB0aGUgc3BlY2lmaWMgaW5wdXQgZmllbGRzLCBcblxuLy8gb2sgd2UgZ290IHRoZSBtYXJrdXAgXG5cbi8vIG5vdyBJIHRoaW5rIEkgV291bGQgcGFzcyB0aGUgZGF0YSB0byB0aGUgb3RoZXIgZnVuY3Rpb24sIFxuXG4vLyBvayBvdGhlciBmdW5jdGlvbiBjYW4gYWNjZXB0IHRoZSBkYXRhLCBcblxuLy8gYWRkIHRoZSBwIGVsZW1lbnRzIG9uIGVhY2ggY2FyZCwgYW5kIGFwcGVuZCBkYXRhIGFsb25nIHdpdGggYSBtZXNzYWdlIFxuXG4vLyBwIGVsZW1lbnQgYW5kIGFwcGVuZCB0aGUgZGF0ZSBhbmQgaWNvbiBmaXJzdCBpbiB0aGUgc2FtZSBsaW5lIFxuXG4vLyBtYWtlIGEgbmV3IGZ1bmN0aW9uIGZvciBlYWNoIGZvcmVjYXN0IGRheSBcblxuLy8ganVzdCB0byBtb2R1bGFyaXplIHRoaW5ncyBtb3JlIGFuZCB0byBhdm9pZCBcblxuLy8gaGF2aW5nIG9uZSBmdW5jdGlvbiB0byBhbGwgdGhlIHdvcmsgYW5kIHRoYXQgZnVuY3Rpb24gd2lsbCBcblxuLy8gYmUgdG9vIGJpZywgb25lIGZ1bmN0aW9uIGZvciBlYWNoIGRheSwgXG5cbi8vIHBhc3MgdGhlIGRhdGEgdG8gdGhvc2UgMyBmdW5jdGlvbnMsIFxuXG4vLyBpdHMgb25seSA0IGNhbGxzLCBvbmUgdG8gY3VycmVudCBcblxuLy8gb25lIHRvIGN1cnJlbnQsIGRheTEgMiAzIFxuXG4vLyBvayBub3cgdXNlIGEgZnVuY3Rpb24gdG8gcHJpbnQgdGhlIGRhdGEgZm9yIGRheSAyIGZvcmVjYXN0IFxuXG4vLyB1c2UgYSBkaWZmZXJlbnQgZnVuY3Rpb24gc28gaXQgZG9lcyBub3QgZ2V0IHRvbyBiaWcgXG5cbi8vIGFub3RoZXIgaXNzdWUgaXMgZ2V0dGluZyB0aGUgZGVncmVlcyBzeW1ib2wgdG8gc2hvdywgXG5cbi8vIGFuZCBpZiB0aGUgdXNlciBpbnB1dHMgYW5vdGhlciBzZWFyY2gsIFxuXG4vLyBjbGVhciB0aGUgRE9NIHRvIG1ha2Ugd2F5IGZvciB0aGUgbmV3LiBcblxuLy8gY2hhbmdlIGJhY2tncm91bmQgYmFzZWQgb24gY29uZGl0aW9uIHRleHQgXG5cbi8vIGlmID09PSBzdW5ueSBcblxuLy8gYXBwZW5kIHN1bm55IGJhY2tncm91bmQgcGljdHVyZSwgXG5cbi8vIGlmID09PSByYWlueSBcblxuLy8gYXBwZW5kIHJhaW55IHBpYyBcblxuLy8gSSB0aGluayBldmVyeXRoaW5nIGlzIGdvaW5nIG9rLCBJIHdpbGwgbWFrZSB0aGUgd2VhdGhlciBkYXRhIGZvciB0aGUgbGFzdCBkYXkgb2YgdGhlIGZvcmVjYXN0LCBjb21taXQsIHRoZW4gZml4IHRoZSBodG1sIGFib3ZlIHRvIHVzZSBvbmx5IHRoZSBET00gXG5cbi8vIEkgd2lsbCBmaXggdGhlIGh0bWwgdG8gdXNlIERPTSBPbmx5LCBcblxuLy8gdGhlbiB3b3JrIG9uIGNsZWFyaW5nIHRoZSBET00sIHNvIHZhbHVlcyBkbyBub3QgYWRkIG9udG8gXG5cbi8vIEhUTUwgSXMgc2V0LCBzbyBob3cgZG8gSSBjbGVhciB0aGUgdmFsdWVzIGZyb20gdGhlIERPTSwgXG5cbi8vIGFkZCBuZXcgYnV0IHJlcGxhY2Ugb2xkLCBcblxuLy8gaGF2aW5nIGlzc3VlIGNsZWFyaW5nIHRoZSBET00sIFxuXG4vLyBJIHRob3VnaHQgY2xlYXJuaW5nIGl0IGJlZm9yZSB0aGUgZnVuY3Rpb24gY2FsbCBvciBpbnNpZGUgdGhlIGZ1bmN0aW9udGhhdCB3YXMgY2FsbGVkIFxuXG4vLyB3aGVyZSBjYW4gSSBjbGVhciB0aGUgRE9NLCBcblxuLy8gaXQgbmVlZHMgdG8gYmUgaW4gdGhlIHJpZ2h0IHNwb3QsIFxuXG4vLyBjbGVhciB0aGUgRE9NIG9uY2UgdGhlIHNlYXJjaCBidG4gaXMgcHJlc3NlZCwgXG5cbi8vIGNsZWFyIG9sZCBkYXRhLCBhZGQgdGhlIG5ldywgXG5cbi8vIE9LIEkgd2FzIGFibGUgdG8gZmlndXJlIG91dCB0aGUgZG9tIGlzc3VlLCBpdCB3YXMgbW9yZSB0aGUgaWNvbnMgdGhhdCBJIGhhZCB0byByZXBsYWNlLCBpbnN0ZWFkIG9mIGNsZWFybmluZyB0aGUgZG9tIGVhY2ggdGltZSwgXG5cbi8vIHNldHRpbmcgdGhlIHRleHQgQ29udGVudCBvZiB0aGUgZWxlbWVudCwgdG8gZW1wdHkgd2lsbCBtYWtlIHdheSBmb3IgdGhlIG5ldyB2YWx1ZS9pY29uIFxuXG4vLyBuZXh0IEkgbmVlZCB0byBmaWd1cmUgb3V0IGhvdyB0byB3cml0ZSBhIGZ1bmN0aW9uIG9yIHBlcmZvcm0gdGhlIGxvZ2ljIHRoYXQgd291bGQgYWxsb3cgbWUgdG8gY2hhbmdlIHRoZSBmIGRhdGEgdG8gYyBkYXRhIFxuXG4vLyBmaXJzdCBsb2NhdGUgYWxsIHZhbHVlcyB0aGF0IHVzZSBmLCBcblxuLy8ganVzdCBjaGFuZ2UgdGhlIHRlbXAuIHRoZXJlIGlzIG9uZSBpbiBjdXJyZW50IHdlYXRoZXIgYW5kIGRheXMsIGVhY2ggZGF5IHdpbGwgbmVlZCB0byBoaWdoIGFuZCBsb3cgdGVtcCBjaGFuZ2VkLCBcblxuLy8gSSBhbSBjb25mdXNlZCBvbiBob3cgdG8gYXBwcm9hY2ggdGhpcywgXG5cbi8vIGEgZnVuY3Rpb24/IFxuXG4vLyBvbmNlIHRoZSBidG4gaXMgY2xpY2tlZCwgZ3JhYiB0aGUgdmFsdWVzLCBncmFiIGFsbCB0aGUgaW5wdXRzL2ZpZWxkcywgY2FsbCBhbm90aGVyIGZ1bmN0aW9uLCB3aGljaCB3aWxsIGludGFrZSB0aGUgY3VycmVudCB3ZWF0aGVyLCBrZXkgaW50byB2YWx1ZXMsIFxuXG4vLyB0aGVuIGRpc3BsYXkgdGhvc2UgdmFsdWVzIHRvIHRoZSBET00/ICIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2VhcnRoLWJhY2tncm91bmQuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogYm9keSB7IFxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiA7XFxufSAqL1xcbioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbmJvZHkge1xcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3NywgMTcyLCAxNzIpOyAqL1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxufVxcblxcbi5oZWFkZXItY29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgaGVpZ2h0OiAxMnZoO1xcbiAgZ2FwOiAxZW07XFxufVxcblxcbi5oMS1oZWFkZXItc3R5bGVzIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMi44cmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5zZWFyY2gtYmFyLWVsZW1lbnRzLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gIGdhcDogMWVtO1xcbn1cXG5cXG4uc2VhcmNoLWJhci1lbGVtZW50cy1jb250YWluZXIgPiBpbnB1dCB7XFxuICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbi5zZWFyY2gtYmFyLWVsZW1lbnRzLWNvbnRhaW5lciA+IGJ1dHRvbiB7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbiNjdXJyZW50LXdlYXRoZXItZGF0YSA+IGgzIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG4jY3VycmVudC13ZWF0aGVyLWRhdGEge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4jY3VycmVudC13ZWF0aGVyLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBoZWlnaHQ6IDQwdmg7XFxuICAvKiBtYXJnaW4tdG9wOiAyZW07ICovXFxuICBjb2xvcjogd2hpdGU7XFxuICAvKiBoZWlnaHQ6IDI4NXB4O1xcbiAgd2lkdGg6IDI4NXB4OyAqL1xcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3NywgMTcyLCAxNzIpOyAqL1xcbn1cXG5cXG4jZm9yZWNhc3QtMy1kYXktdGl0bGUge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgbWFyZ2luLXRvcDogMC41ZW07XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbiNmb3JlY2FzdC1kYXktMS1jYXJkLFxcbiNmb3JlY2FzdC1kYXktMi1jYXJkLFxcbiNmb3JlY2FzdC1kYXktMy1jYXJkIHtcXG4gIC8qIHdpZHRoOiAyNTBweDsgXFxuICBoZWlnaHQ6IDI1MHB4OyAqL1xcbiAgaGVpZ2h0OiA0NXZoO1xcbiAgd2lkdGg6IDI1dnc7XFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTc3LCAxNzIsIDE3Mik7ICovXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIG9wYWNpdHk6IDAuNztcXG4gIGJvcmRlci1yYWRpdXM6IDEwJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4jZm9yZWNhc3QtZGF5cy1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAyZW07XFxuICBtYXJnaW4tdG9wOiAwLjVlbTtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG4vKiAjZm9yZWNhc3QtY29udGFpbmVyIHsgXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuXFxufSAqL1wiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7O0dBQUE7QUFJQTtFQUNJLHNCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUFBSjs7QUFHQTtFQUNJLDBDQUFBO0VBQ0EsMkJBQUE7RUFDQSxtREFBQTtFQUNBLHNCQUFBO0FBQUo7O0FBR0E7RUFDRSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFFBQUE7QUFBRjs7QUFJQTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FBREo7O0FBSUE7RUFDSSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxRQUFBO0FBREo7O0FBS0E7RUFDSSxlQUFBO0FBRko7O0FBS0E7RUFDSSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtBQUZKOztBQUtBO0VBQ0ksZUFBQTtFQUNBLDBCQUFBO0FBRko7O0FBS0E7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBRko7O0FBS0E7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0E7aUJBQUE7RUFFQSwwQ0FBQTtBQUZKOztBQUtBO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUFGSjs7QUFNQTs7O0VBR0k7a0JBQUE7RUFFQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLDBDQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQUhKOztBQU1BO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsUUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUFISjs7QUFPQTs7Ozs7O0dBQUFcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogYm9keSB7IFxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiA7XFxufSAqL1xcblxcbiogeyBcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgcGFkZGluZzogMDsgXFxuICAgIG1hcmdpbjogMDtcXG59IFxcblxcbmJvZHkgeyBcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3NywgMTcyLCAxNzIpOyAqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7O1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoLi9lYXJ0aC1iYWNrZ3JvdW5kLmpwZyk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxufVxcblxcbi5oZWFkZXItY29udGFpbmVyIHsgXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGhlaWdodDogMTJ2aDtcXG4gIGdhcDogMWVtOyBcXG5cXG59IFxcblxcbi5oMS1oZWFkZXItc3R5bGVzIHsgXFxuICAgIGNvbG9yOiB3aGl0ZTsgXFxuICAgIGZvbnQtc2l6ZTogMi44cmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLnNlYXJjaC1iYXItZWxlbWVudHMtY29udGFpbmVyIHsgXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICAgIGdhcDogMWVtOyBcXG4gICAgXFxufSBcXG5cXG4uc2VhcmNoLWJhci1lbGVtZW50cy1jb250YWluZXIgPiBpbnB1dCB7IFxcbiAgICBmb250LXNpemU6IDFyZW07XFxufSBcXG5cXG4uc2VhcmNoLWJhci1lbGVtZW50cy1jb250YWluZXIgPiBidXR0b24geyBcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgY29sb3I6IGJsYWNrOyBcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn0gXFxuXFxuI2N1cnJlbnQtd2VhdGhlci1kYXRhID4gaDN7IFxcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn0gIFxcblxcbiNjdXJyZW50LXdlYXRoZXItZGF0YSB7IFxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbiNjdXJyZW50LXdlYXRoZXItY29udGFpbmVyIHsgXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDQwdmg7XFxuICAgIC8qIG1hcmdpbi10b3A6IDJlbTsgKi9cXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICAvKiBoZWlnaHQ6IDI4NXB4O1xcbiAgICB3aWR0aDogMjg1cHg7ICovXFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYigxNzcsIDE3MiwgMTcyKTsgKi9cXG59IFxcblxcbiNmb3JlY2FzdC0zLWRheS10aXRsZSB7IFxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICAgIG1hcmdpbi10b3A6IDAuNWVtO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcblxcbiNmb3JlY2FzdC1kYXktMS1jYXJkLCBcXG4jZm9yZWNhc3QtZGF5LTItY2FyZCwgXFxuI2ZvcmVjYXN0LWRheS0zLWNhcmQgeyBcXG4gICAgLyogd2lkdGg6IDI1MHB4OyBcXG4gICAgaGVpZ2h0OiAyNTBweDsgKi9cXG4gICAgaGVpZ2h0OiA0NXZoO1xcbiAgICB3aWR0aDogMjV2dztcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3NywgMTcyLCAxNzIpOyAqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgb3BhY2l0eTogMC43O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMCU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgY29sb3I6IHdoaXRlOyBcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufSBcXG5cXG4jZm9yZWNhc3QtZGF5cy1jb250YWluZXIgeyBcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMmVtOyBcXG4gICAgbWFyZ2luLXRvcDogMC41ZW07XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG5cXG4vKiAjZm9yZWNhc3QtY29udGFpbmVyIHsgXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuXFxufSAqL1xcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5oMS1oZWFkZXItc3R5bGVzIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0UsWUFIVztBQUViXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiR0aXRsZUNvbG9yOiB3aGl0ZTsgXFxuXFxuLmgxLWhlYWRlci1zdHlsZXMgeyBcXG4gIGNvbG9yOiAkdGl0bGVDb2xvcjsgXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiXSwibmFtZXMiOlsic2VhcmNoQm94IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInNlYXJjaEJ0biIsIndlYXRoZXJDb250YWluZXIiLCJzdG9yZWRXZWF0aGVyRGF0YSIsImZldGNoRGF0YSIsImlucHV0IiwiY2l0eURhdGEiLCJjb25zb2xlIiwibG9nIiwiZ2V0RGF0YSIsImZldGNoIiwianNvbkRhdGEiLCJqc29uIiwiY3VycmVudFdlYXRoZXJEYXRhIiwiZGlzcGxheUN1cnJlbnRXZWF0aGVyIiwiYWRkV2VhdGhlckZvcmVjYXN0MSIsImFkZFdlYXRoZXJGb3JlY2FzdDIiLCJhZGRXZWF0aGVyRm9yZWNhc3QzIiwid2VhdGhlciIsImN1cnJlbnRXZWF0aGVySWNvbiIsImN1cnJlbnRGb3JlY2FzdCIsInRleHRDb250ZW50Iiwid2VhdGhlckljb24iLCJJbWFnZSIsInNyYyIsImN1cnJlbnQiLCJjb25kaXRpb24iLCJpY29uIiwibG9jYXRpb25EYXRhIiwibG9jYXRpb24iLCJuYW1lIiwid2VhdGhlckRlc2NyaXB0aW9uRGF0YSIsInRleHQiLCJjdXJyZW50V2VhdGhlck51bWJlckRhdGEiLCJmZWVsc2xpa2VfZiIsIndpbmREYXRhIiwid2luZF9tcGgiLCJ3aW5kRGlyZWN0aW9uIiwid2luZF9kaXIiLCJyYWluSW5jaGVzIiwicHJlY2lwX2luIiwiaHVtaWRpdHlMZXZlbCIsImh1bWlkaXR5IiwibmV3SW1nIiwiYXBwZW5kQ2hpbGQiLCJjdXJyZW50V2VhdGhlckxvY2F0aW9uVGV4dCIsImN1cnJlbnRXZWF0aGVyRGVzY3JpcHRpb25UZXh0IiwiY3VycmVudFdlYXRoZXJUZW1wRGF0YSIsImN1cnJlbnRXZWF0aGVyV2luZERhdGEiLCJjdXJyZW50V2VhdGhlcldpbmREaXJlY3Rpb24iLCJjdXJyZW50V2VhdGhlclJhaW4iLCJjdXJyZW50SHVtaWRpdHlMZXZlbCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwiaW5wdXRWYWx1ZSIsInZhbHVlIiwiY2VsY2l1c0J0biIsImN1cnJlbnRDZWxjaXVzVGVtcCIsInRlbXBfYyIsImRheTFIaWdoVGVtcCIsImZvcmVjYXN0IiwiZm9yZWNhc3RkYXkiLCJkYXkiLCJtYXh0ZW1wX2MiLCJkYXkxTG93VGVtcCIsIm1pbnRlbXBfYyIsImhpZ2hMb3dUZW1wRGF0YSIsImRheTJIaWdoVGVtcCIsImRheTJMb3dUZW1wIiwiaGlnaExvd1RlbXBEYXRhRGF5MiIsImRheTNIaWdoVGVtcCIsImRheTNMb3dUZW1wIiwiaGlnaExvd1RlbXBEYXRhRGF5MyIsImZCdG4iLCJjdXJyZW50RlRlbXAiLCJ0ZW1wX2YiLCJtYXh0ZW1wX2YiLCJtaW50ZW1wX2YiLCJmb3JlY2FzdERhdGEiLCJpbnB1dEZvckltZ0RheTEiLCJkYXkxRGF0ZSIsImRhdGUiLCJkYXkxSWNvbiIsImNoYW5jZU9mUmFpbiIsImRhaWx5X2NoYW5jZV9vZl9yYWluIiwidXZJbmRleCIsInV2IiwiY2hhbmNlT2ZTbm93IiwiZGFpbHlfY2hhbmNlX29mX3Nub3ciLCJhcHBlbmQiLCJkYXRlQW5kSWNvbkRhdGEiLCJjaGFuY2VPZlJhaW5EYXRhIiwidXZJbmRleERhdGEiLCJjaGFuY2VPZlNub3dEYXRhIiwiZm9yZWNhc3REYXRhMiIsImljb25EYXRhIiwiZGF5MkRhdGUiLCJkYXkySWNvbkltZyIsImRheTJDaGFuY2VPZlJhaW4iLCJkYXkyVVZJbmRleCIsImRheTJDaGFuY2VPZlNub3ciLCJkYXRlRGF0YSIsImZvcmVjYXN0RGF0YTMiLCJkYXkzRGF0ZSIsImRheTNJbWdJY29uIiwiZGF5M1JhaW5DaGFuY2UiLCJkYXkzVVZJbmRleCIsImRheTNDaGFuY2VPZlNub3ciXSwic291cmNlUm9vdCI6IiJ9