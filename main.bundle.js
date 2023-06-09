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
  const getData = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=45464da38892450d95f10433230506 &q=${cityData}&days=5&aqi=no&alerts=no`);
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
___CSS_LOADER_EXPORT___.push([module.id, ".h1-header-styles {\n  color: red;\n}", "",{"version":3,"sources":["webpack://./src/styles.scss"],"names":[],"mappings":"AAEA;EACE,UAHW;AAEb","sourcesContent":["$titleColor: red; \n\n.h1-header-styles { \n  color: $titleColor; \n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsaUZBQWlGO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3N0eWxlcy5zY3NzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3N0eWxlLmNzcz9lZmJmIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvc3R5bGVzLnNjc3M/YTYwOSIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCAnLi9zdHlsZXMuc2Nzcyc7XG5cbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG5pbXBvcnQgJy4vc3R5bGVzLnNjc3MnO1xuXG4vLyBpbiBvcmRlciB0byB1c2UgZWFydGggYmFja2dyb3VuZCBpbWcgeW91IG11c3QgaW1wb3J0IGl0IGFuZCBzZWUgaWYgeW91IGNhbiB1c2UgaXQgaW4gY3NzIFxuXG4vLyBidXQgaW4ganMsIFxuXG4vLyBxdWVyeSBzZWxlY3RvciB0aGUgYm9keSwgc2VsZWN0IGVsZW1lbnQsIFxuXG4vLyBhZGQgdGhlIGltZyBhcyBhIGJhY2tncm91bmQsIGFuZCBzZXQgdGhlIGltcG9ydGVkIGltZyBhcyB0aGUgc3JjLiBcblxuLy8gd2h5IGZvZXMgZiBjaGFuZ2Ugd2hlbiBJIGVudGVyIGl0IGFnYWluPyBDaGVjayB0byBtYWtlIHN1cmUgeW91IGFyZSBsb2dnaW5nIGNvcnJlY3QgZGF5cyBcblxuLy8gY2hhbmdlIGl0IHRvIGZlZWxzIGxpa2UgaW5zdGVhZCBvZiBjdXJyZW50IHRlbXAgXG5cbi8vIE9LIHNvIHRvZGF5LCBJIExpa2UgdGhlIHN0eWxpbmcgZm9yIHRoZSBiYWNrZ3JvdW5kLCBtb3ZlIHRoZSB0aGUgaW1ncyBpbnRvIHRoZSBzcmMgZGlyZWN0b3J5LCBcblxuLy8gYW5kIHVzZSBnaCBwYWdlcywgdG8gc2VlIGlmIHRoZSBpbWFnZXMgcmVuZGVyLCBcblxuLy8gYWxzbyBjaGFuZ2UgdGhlIGN1cnJlbnQgd2VhdGhlciwgdG8gdXNlIGN1cnJlbnQgaW5zdGVhZCBvZiBmZWVscyBsaWtlLCBkb3VibGUgY2hlY2sgd2l0aCB0aGF0LCBcblxuLy8gbGFzdCB0cnkgdG8gaW5zdGFsbCBzYXNzLCBtYXliZSBhc2sgaWYgaXQgaXMgbmVjZXNzYXJ5IHRvIHVzZSB0d28gSlMgZmlsZXMsIFxuXG4vLyBicnVzaCB1cCBvbiB0aGUgc3R5bGluZyB0b28sIG1heWJlIHVzZSBET00gc3R5bGluZyBmb3IgdGhlIDMgZGF5IGZvcmVjYXN0IGJveGVzLCBvbmNlIGRhdGEgaXMgZW50ZXJlZCwgdGhlbiBhcHBseSB0aGUgYmFja2dyb3VuZCBzdHlsZXMsIFxuXG4vLyB0ZXN0IGdoIHBhZ2VzLCBcblxuLy8gaG93IGNhbiBJIGRpc3BsYXkgYWxsIGNvbnRlbnQsIHdlYnBhY2sgaXNzdWUgb2YgZ2ggcGFnZXMgbm90IGRpc3BsYXlpbmcgdGhlIGNvbnRlbnQsIGl0IG9ubHkgZGlzcGxheXMgdGhlIGh0bWwuIFxuXG5sZXQgc2VhcmNoQm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaC1ib3gnKTsgXG5cbmxldCBzZWFyY2hCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoLWJ0bicpOyBcblxuLy8gY3VycmVudCB3ZWF0aGVyIGRhdGEgc3RvcmVkIGluIGhlcmUsIFxubGV0IHdlYXRoZXJDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VycmVudC13ZWF0aGVyLWNvbnRhaW5lcicpOyBcblxubGV0IHN0b3JlZFdlYXRoZXJEYXRhIFxuXG5hc3luYyBmdW5jdGlvbiBmZXRjaERhdGEoaW5wdXQpIHsgXG5cbiAgICBsZXQgY2l0eURhdGEgPSBpbnB1dDsgXG4gICAgXG4gICAgY29uc29sZS5sb2coJ1RoZSBkYXRhIHBhc3NlZCBpbiBpczogJyArIGNpdHlEYXRhKTtcbiAgICBcbiAgICBjb25zdCBnZXREYXRhID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9NDU0NjRkYTM4ODkyNDUwZDk1ZjEwNDMzMjMwNTA2ICZxPSR7Y2l0eURhdGF9JmRheXM9NSZhcWk9bm8mYWxlcnRzPW5vYCk7XG5cbiAgICBjb25zdCBqc29uRGF0YSA9IGF3YWl0IGdldERhdGEuanNvbigpO1xuICAgIFxuICAgIGxldCBjdXJyZW50V2VhdGhlckRhdGEgPSBqc29uRGF0YTtcbiAgICBcbiAgICBzdG9yZWRXZWF0aGVyRGF0YSA9IGN1cnJlbnRXZWF0aGVyRGF0YTsgXG5cbiAgIC8vIGNvbnNvbGUubG9nKHN0b3JlZFdlYXRoZXJEYXRhKTtcblxuICAgZGlzcGxheUN1cnJlbnRXZWF0aGVyKGN1cnJlbnRXZWF0aGVyRGF0YSk7XG5cbiAgIGFkZFdlYXRoZXJGb3JlY2FzdDEoY3VycmVudFdlYXRoZXJEYXRhKTtcblxuICAgYWRkV2VhdGhlckZvcmVjYXN0MihjdXJyZW50V2VhdGhlckRhdGEpO1xuXG4gICBhZGRXZWF0aGVyRm9yZWNhc3QzKGN1cnJlbnRXZWF0aGVyRGF0YSk7IFxuXG4gIC8vICB0b2dnbGUoY3VycmVudFdlYXRoZXJEYXRhKTtcblxuICAvLyByZXR1cm4ganNvbkRhdGE7XG5cbn0gXG5cbi8vIGhvdyBjYW4gSSBzdG9yZSB3ZWF0aGVyIGRhdGEgb3V0c2lkZSBvZiB0aGUgZnVuY3Rpb24/IFxuXG4vLyBhbGwgSSBjYW4gdGhpbmsgb2YgaXMgYSBnbG9iYWwgdmFyaWFibGUsY1xuXG4vLyBmZXRjaERhdGEudGhlbihkYXRhID0+IGNvbnNvbGUubG9nKGRhdGEpKTsgXG5cbi8vIE9LIEkgYW0gYWJsZSB0byBnZXQgdGhlIHdlYXRoZXIgZGF0YSwgd2l0aGluIG15IGV2ZW50IGxpc3RlbmVyIGZ1bmN0aW9uIFxuIFxuXG4vLyAgbGV0IHdlYXRoZXJDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VycmVudC13ZWF0aGVyLWNvbnRhaW5lcicpOyBcblxuYXN5bmMgZnVuY3Rpb24gZGlzcGxheUN1cnJlbnRXZWF0aGVyKHdlYXRoZXIpIHsgXG5cbiAgICBsZXQgY3VycmVudFdlYXRoZXJJY29uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1cnJlbnQtd2VhdGhlci1pY29uJyk7IFxuICAgIC8vIGNsZWFyIERPTSwgcmVwbGFjZUNoaWxkcmVuIGJlZm9yZSBhcHBlbmRpbmcgbmV3XG5cbiAgICBsZXQgY3VycmVudEZvcmVjYXN0ID0gYXdhaXQgd2VhdGhlcjsgXG5cbiAgICAvLyBjb25zb2xlLmxvZyhjdXJyZW50Rm9yZWNhc3QubG9jYXRpb24pIFxuXG4gICAgY3VycmVudFdlYXRoZXJJY29uLnRleHRDb250ZW50ID0gJyc7IFxuXG5cblxuICAgIGxldCB3ZWF0aGVySWNvbiA9IG5ldyBJbWFnZSgpOyBcblxuICAgIHdlYXRoZXJJY29uLnNyYyA9IGN1cnJlbnRGb3JlY2FzdC5jdXJyZW50LmNvbmRpdGlvbi5pY29uO1xuXG4gICAgLy8gY29uc29sZS5sb2coY3VycmVudEZvcmVjYXN0LmN1cnJlbnQuY29uZGl0aW9uKVxuXG4gICAgbGV0IGxvY2F0aW9uRGF0YSA9IGN1cnJlbnRGb3JlY2FzdC5sb2NhdGlvbi5uYW1lO1xuXG4gICAgbGV0IHdlYXRoZXJEZXNjcmlwdGlvbkRhdGEgPSBjdXJyZW50Rm9yZWNhc3QuY3VycmVudC5jb25kaXRpb24udGV4dDsgXG5cbiAgICBsZXQgY3VycmVudFdlYXRoZXJOdW1iZXJEYXRhID0gY3VycmVudEZvcmVjYXN0LmN1cnJlbnQuZmVlbHNsaWtlX2Y7XG5cbiAgICBsZXQgd2luZERhdGEgPSBjdXJyZW50Rm9yZWNhc3QuY3VycmVudC53aW5kX21waDtcblxuICAgIGxldCB3aW5kRGlyZWN0aW9uID0gY3VycmVudEZvcmVjYXN0LmN1cnJlbnQud2luZF9kaXI7XG5cbiAgICBsZXQgcmFpbkluY2hlcyA9IGN1cnJlbnRGb3JlY2FzdC5jdXJyZW50LnByZWNpcF9pbjsgXG5cbiAgICBsZXQgaHVtaWRpdHlMZXZlbCA9IGN1cnJlbnRGb3JlY2FzdC5jdXJyZW50Lmh1bWlkaXR5O1xuXG4gICAgbGV0IG5ld0ltZyA9IG5ldyBJbWFnZSgpO1xuXG4gICAgbmV3SW1nLnNyYyA9IGN1cnJlbnRGb3JlY2FzdC5jdXJyZW50LmNvbmRpdGlvbi5pY29uO1xuXG4vLyAgICBsZXQgY3VycmVudFdlYXRoZXJJY29uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1cnJlbnQtd2VhdGhlci1pY29uJyk7IFxuXG4gICAvLyBkb250IGFwcGVuZCB1c2UgdmFyaWFibGUgYW5kIHRlbXBsYXRlIGxpdGVyYWxzLCBhcHBlbmRpbmcgbWF5IHN0b3AgdGhlIGFkZGluZyBvbnRvIHRvIGluc3RlYWQgb2YgcmVwbGFjaW5nLCBcblxuICAgY3VycmVudFdlYXRoZXJJY29uLmFwcGVuZENoaWxkKHdlYXRoZXJJY29uKTtcblxuICAgbGV0IGN1cnJlbnRXZWF0aGVyTG9jYXRpb25UZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1cnJlbnQtd2VhdGhlci1sb2NhdGlvbi1wJyk7IFxuXG4gICBjdXJyZW50V2VhdGhlckxvY2F0aW9uVGV4dC50ZXh0Q29udGVudCA9IGBMb2NhdGlvbjogJHtsb2NhdGlvbkRhdGF9YDtcblxuICAgbGV0IGN1cnJlbnRXZWF0aGVyRGVzY3JpcHRpb25UZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1cnJlbnQtd2VhdGhlci1kZXNjcmlwdGlvbi1wJyk7IFxuXG4gICBjdXJyZW50V2VhdGhlckRlc2NyaXB0aW9uVGV4dC50ZXh0Q29udGVudCA9IGBDb25kaXRpb25zOiAke3dlYXRoZXJEZXNjcmlwdGlvbkRhdGF9YFxuXG4gICBsZXQgY3VycmVudFdlYXRoZXJUZW1wRGF0YSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXJyZW50LXdlYXRoZXItdGVtcC1kYXRhJyk7IFxuXG4gICBjdXJyZW50V2VhdGhlclRlbXBEYXRhLnRleHRDb250ZW50ID0gYFRlbXByYXR1cmUgaXM6ICR7Y3VycmVudFdlYXRoZXJOdW1iZXJEYXRhfSBcXHUwMEIwRmA7XG5cbiAgIGxldCBjdXJyZW50V2VhdGhlcldpbmREYXRhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1cnJlbnQtd2VhdGhlci13aW5kLWRhdGEnKTsgXG5cbiAgIGN1cnJlbnRXZWF0aGVyV2luZERhdGEudGV4dENvbnRlbnQgPSBgV2luZCBTcGVlZDogJHt3aW5kRGF0YX0gbXBoYDtcblxuICAgbGV0IGN1cnJlbnRXZWF0aGVyV2luZERpcmVjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXJyZW50LXdlYXRoZXItd2luZC1kaXJlY3Rpb24tZGF0YScpO1xuXG4gICBjdXJyZW50V2VhdGhlcldpbmREaXJlY3Rpb24udGV4dENvbnRlbnQgPSBgV2luZCBEaXJlY3Rpb246ICR7d2luZERpcmVjdGlvbn1gO1xuXG4gICBsZXQgY3VycmVudFdlYXRoZXJSYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1cnJlbnQtd2VhdGhlci1yYWluLWluY2hlcy1kYXRhJyk7XG5cbiAgIGN1cnJlbnRXZWF0aGVyUmFpbi50ZXh0Q29udGVudCA9IGBSYWluOiAke3JhaW5JbmNoZXN9IGluYDtcblxuICAgbGV0IGN1cnJlbnRIdW1pZGl0eUxldmVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1cnJlbnQtd2VhdGhlci1odW1pZGl0eS1kYXRhJyk7IFxuXG4gICBjdXJyZW50SHVtaWRpdHlMZXZlbC50ZXh0Q29udGVudCA9IGBIdW1pZGl0eTogJHtodW1pZGl0eUxldmVsfSVgXG5cbn0gXG5cbi8vIG5lZWRzIHRvIHNvbWVob3cgYmUgY2xlYXJlZCBpbiB0aGUgc2VhcmNoIGJ0biBcblxuc2VhcmNoQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHsgXG5cbiAgICBjb25zb2xlLmxvZygnY2xpY2snKTtcblxuICAgIGxldCBpbnB1dFZhbHVlID0gc2VhcmNoQm94LnZhbHVlO1xuXG4gICAgZmV0Y2hEYXRhKGlucHV0VmFsdWUpO1xuXG59KTsgXG5cbi8vIGdyYWIgdGhlIGlucHV0IGZpZWxkcyB0aGF0IGhhdmUgRiBcblxuLy8gc2V0IHZhcmlhYmxlcyBmb3IgY3VycmVudCB0ZW1wIGluIGMsIGhpZ2ggdGVtcCBpbiBjLCBsb3cgdGVtcCBpbiBjIFxuXG4vLyBzZXQgdGhvc2UgdmFyaWFibGVzLCBcblxuLy8gc2V0IGEgdmFyaWFibGUgaXNDIHRvIGZhbHNlLCBcblxuLy8gY29uZGl0aW9uYWwgaWYgYyBpcyB0cnVlIGdyYWIgdGhlIHZhbHVlcywgdGhlbiByZXBsYWNlIHRoZW0gd2l0aCBjIHZhbHVlLCBcblxuLy8gaWYgZmFsc2UsIHN3aXRjaCB0aGVtIGJhY2sgdG8gRiwgXG5cbi8vIGNhbiBzd2l0Y2ggdGhlIHRlbXAsIFxuXG4vLyBidXQgaG93IGNhbiBJIHRvZ2dsZSBiYWNrIGFuZCBmb3J0aCBcblxuLy8gbWF5YmUgSSBzaG91bGQgbWFrZSBhbm90aGVyIHZhcmlhYmxlIGZvciBGIFxuXG5cbi8vIGxldCB0b2dnbGVUZW1wcmF0dXJlQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0YtQy10b2dnbGUtYnRuJyk7IFxuXG4vLyBsZXQgaXNDZWxjaXVzID0gZmFsc2U7IFxuXG4vLyAvLyBsZXQgaXNGID0gdHJ1ZTsgXG5cbi8vIEhFUkUhXG5cbi8vIGdyYWIgdGhlIGVsZW1lbnQsIEMgZWxlbWVudCBcblxubGV0IGNlbGNpdXNCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnQy10b2dnbGUtYnRuJyk7IFxuXG5jZWxjaXVzQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcblxuICAgIGxldCBjdXJyZW50Q2VsY2l1c1RlbXAgPSBzdG9yZWRXZWF0aGVyRGF0YS5jdXJyZW50LnRlbXBfYzsgXG5cbiAgICBsZXQgY3VycmVudFdlYXRoZXJUZW1wRGF0YSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXJyZW50LXdlYXRoZXItdGVtcC1kYXRhJyk7IFxuXG4gICAgY3VycmVudFdlYXRoZXJUZW1wRGF0YS50ZXh0Q29udGVudCA9IGBUZW1wcmF0dXJlIElzOiAke2N1cnJlbnRDZWxjaXVzVGVtcH0gQ2A7IFxuXG4gICAgbGV0IGRheTFIaWdoVGVtcCA9IHN0b3JlZFdlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRheS5tYXh0ZW1wX2M7XG5cbiAgICBsZXQgZGF5MUxvd1RlbXAgPSBzdG9yZWRXZWF0aGVyRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXkubWludGVtcF9jO1xuXG4gICAgbGV0IGhpZ2hMb3dUZW1wRGF0YSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dC1mb3JlY2FzdC1kYXkxLWhpZ2gtbG93Jyk7IFxuXG4gICAgaGlnaExvd1RlbXBEYXRhLnRleHRDb250ZW50ID0gYEhpZ2ggdG9kYXkgaXM6ICR7ZGF5MUhpZ2hUZW1wfVxcdTAwQjBDIExvdyB0b2RheSBpczogJHtkYXkxTG93VGVtcH1cXHUwMEIwQ2A7XG5cbiAgICBsZXQgZGF5MkhpZ2hUZW1wID0gc3RvcmVkV2VhdGhlckRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMV0uZGF5Lm1heHRlbXBfYztcblxuICAgIGxldCBkYXkyTG93VGVtcCA9IHN0b3JlZFdlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzFdLmRheS5taW50ZW1wX2M7IFxuXG4gICAgbGV0IGhpZ2hMb3dUZW1wRGF0YURheTIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXQtZm9yZWNhc3QtZGF5Mi1oaWdoLWxvdycpO1xuXG4gICAgaGlnaExvd1RlbXBEYXRhRGF5Mi50ZXh0Q29udGVudCA9IGBIaWdoIFRvZGF5IGlzOiAke2RheTJIaWdoVGVtcH1cXHUwMEIwQyBMb3cgdG9kYXkgaXM6ICR7ZGF5Mkxvd1RlbXB9XFx1MDBCMENgOyAgXG5cbiAgICAvLyBcblxuICAgIGxldCBkYXkzSGlnaFRlbXAgPSBzdG9yZWRXZWF0aGVyRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsyXS5kYXkubWF4dGVtcF9jO1xuXG4gICAgbGV0IGRheTNMb3dUZW1wID0gc3RvcmVkV2VhdGhlckRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMl0uZGF5Lm1pbnRlbXBfYztcblxuICAgIGxldCBoaWdoTG93VGVtcERhdGFEYXkzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0LWZvcmVjYXN0LWRheTMtaGlnaC1sb3cnKTtcblxuICAgIGhpZ2hMb3dUZW1wRGF0YURheTMudGV4dENvbnRlbnQgPSBgSGlnaCB0b2RheSBpczogJHtkYXkzSGlnaFRlbXB9XFx1MDBCMEMgTG93IHRvZGF5IGlzOiAke2RheTNMb3dUZW1wfVxcdTAwQjBDYDtcbiAgICBcbn0pOyBcblxubGV0IGZCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnRi10b2dnbGUtYnRuJyk7IFxuXG5mQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcblxuICAgIGxldCBjdXJyZW50RlRlbXAgPSBzdG9yZWRXZWF0aGVyRGF0YS5jdXJyZW50LnRlbXBfZjsgXG5cbiAgICBsZXQgY3VycmVudFdlYXRoZXJUZW1wRGF0YSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXJyZW50LXdlYXRoZXItdGVtcC1kYXRhJyk7XG5cbiAgICBjdXJyZW50V2VhdGhlclRlbXBEYXRhLnRleHRDb250ZW50ID0gYFRlbXByYXR1cmUgSXM6ICR7Y3VycmVudEZUZW1wfVxcdTAwQjBGYDtcblxuICAgIGxldCBkYXkxSGlnaFRlbXAgPSBzdG9yZWRXZWF0aGVyRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXkubWF4dGVtcF9mO1xuXG4gICAgbGV0IGRheTFMb3dUZW1wID0gc3RvcmVkV2VhdGhlckRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uZGF5Lm1pbnRlbXBfZjtcblxuICAgIGxldCBoaWdoTG93VGVtcERhdGEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXQtZm9yZWNhc3QtZGF5MS1oaWdoLWxvdycpOyBcblxuICAgIGhpZ2hMb3dUZW1wRGF0YS50ZXh0Q29udGVudCA9IGBIaWdoIHRvZGF5IGlzOiAke2RheTFIaWdoVGVtcH1cXHUwMEIwRiBMb3cgdG9kYXkgaXM6ICR7ZGF5MUxvd1RlbXB9XFx1MDBCMEZgOyBcblxuICAgIGxldCBkYXkySGlnaFRlbXAgPSBzdG9yZWRXZWF0aGVyRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsxXS5kYXkubWF4dGVtcF9mO1xuXG4gICAgbGV0IGRheTJMb3dUZW1wID0gc3RvcmVkV2VhdGhlckRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMV0uZGF5Lm1pbnRlbXBfZjsgXG5cbiAgICBsZXQgaGlnaExvd1RlbXBEYXRhRGF5MiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dC1mb3JlY2FzdC1kYXkyLWhpZ2gtbG93Jyk7XG5cbiAgICBoaWdoTG93VGVtcERhdGFEYXkyLnRleHRDb250ZW50ID0gYEhpZ2ggVG9kYXkgaXM6ICR7ZGF5MkhpZ2hUZW1wfVxcdTAwQjBGIExvdyB0b2RheSBpczogJHtkYXkyTG93VGVtcH1cXHUwMEIwRmA7IFxuXG4gICAgLy8gXG5cbiAgICBsZXQgZGF5M0hpZ2hUZW1wID0gc3RvcmVkV2VhdGhlckRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMl0uZGF5Lm1heHRlbXBfZjtcblxuICAgIGxldCBkYXkzTG93VGVtcCA9IHN0b3JlZFdlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzJdLmRheS5taW50ZW1wX2Y7XG5cbiAgICBsZXQgaGlnaExvd1RlbXBEYXRhRGF5MyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dC1mb3JlY2FzdC1kYXkzLWhpZ2gtbG93Jyk7XG5cbiAgICBoaWdoTG93VGVtcERhdGFEYXkzLnRleHRDb250ZW50ID0gYEhpZ2ggdG9kYXkgaXM6ICR7ZGF5M0hpZ2hUZW1wfVxcdTAwQjBGIExvdyB0b2RheSBpczogJHtkYXkzTG93VGVtcH1cXHUwMEIwRmA7XG4gICAgXG59KVxuXG5cbi8vIHRvZ2dsZVRlbXByYXR1cmVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4geyBcbi8vICAgICAgaXNDZWxjaXVzID0gdHJ1ZTtcblxuXG4vLyAgICAgLy8gIGlzRiA9IGZhbHNlO1xuXG4vLyAgICAgbGV0IHggPSBzZWFyY2hCb3gudmFsdWU7IFxuICAgIFxuLy8gICAgLy8gc2V0IHZhcmlhYmxlIGZvciBjdXJyZW50IHRlbXAgaW4gY1xuXG4vLyAgICAvLyBncmFiIHRoZSBpbnB1dCBmaWVsZCBmb3IgY3VycmVudCB0ZW1wIFxuXG4vLyAgICAvLyBzaG91bGQgSSBoYXZlIHR3byBkaWZmZXJlbnQgYnRucywgXG5cbi8vICAgIC8vIGlmIEYgY2xpY2tlZCBhcHBlbmQsIGYgdmFsdWVzIFxuXG4vLyAgICAvLyBpZiBjIGNsaWNrZWQsIGFwcGVuZCBjIHZhbHVlcywgXG5cbi8vICAgIC8vIGhvdyB0byBmbGlwIGEgYm9vbGVhbiB2YWx1ZSBiYXNlZCBvbiBidG4gY2xpY2tcblxuLy8gICAgLy8gSSB0aGluayB0aGUgYmVzdCB3YXkgaXMgdG8ga2VlcCBhIHNlcGVyYXRlIGJ0biwgXG5cbi8vICAgIC8vIGlkZWFsbHkgSSB3b3VsZCBsaWtlIHRvIGNvbXBsZXRlIHRoaXMgd2l0aGluIHRoZSBmdW5jdGlvbiwgXG5cbi8vICAgIC8vIGJ1dCBtYXkgYmUgZWFzaWVyIHRvIG1ha2UgdHdvIGJ0bnMsIGhpdCB0aGUgYyBidG4gZGlzcGxheSBjIHRlbXAgZGF0YSBpbiBhbGwgdGhlIGNvcnJlY3Qgc3BvdHMgXG5cbi8vICAgIC8vIGlmIGYgaXMgaGl0IHRoZW4gZGlzcGxheSBGIGluIGFsbCB0aGUgcmlnaHQgcGxhY2VzLCBcblxuLy8gICAgLy8gSSB3aWxsIG1ha2UgdHdvIGJ1dHRvbnMsIGV2ZW50IGxpc3RlbmVyLCBpZiBmIGNsaWNrZWQgZGlwbHNheSBmIHRlbXAgZGF0YSwgaWYgYyBjbGlja2VkLCBkaXNwbGF5IGMgdmFsdWVzLCBncmFiYmluZyB0aGUgaW5wdXQgZmllbGRzLCBhbmQgdXNpbmcgJHt9XG5cbi8vICAgIC8vIHRvIGFwcGVuZCB2YXJpYWJsZXMgdG8gdGhlIERPTS4gXG5cbi8vICAgIGxldCBjdXJyZW50Q2VsY2l1c1RlbXAgPSBzdG9yZWRXZWF0aGVyRGF0YS5jdXJyZW50LnRlbXBfYzsgXG5cbi8vICAgIGxldCBjdXJyZW50RlRlbXAgPSBzdG9yZWRXZWF0aGVyRGF0YS5jdXJyZW50LnRlbXBfZjsgXG5cbi8vICAgIGxldCBjdXJyZW50V2VhdGhlclRlbXBEYXRhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1cnJlbnQtd2VhdGhlci10ZW1wLWRhdGEnKTsgXG5cbi8vICAgIGNvbnNvbGUubG9nKGN1cnJlbnRDZWxjaXVzVGVtcCk7IFxuXG4vLyAgICBjb25zb2xlLmxvZyhjdXJyZW50RlRlbXApOyBcblxuLy8gICAgaWYgKGlzQ2VsY2l1cykgeyBcbi8vICAgICBjdXJyZW50V2VhdGhlclRlbXBEYXRhLnRleHRDb250ZW50ID0gYCR7Y3VycmVudENlbGNpdXNUZW1wfWA7XG4vLyAgICAgLy8gaXNDZWxjaXVzID0gZmFsc2U7XG4vLyAgICB9IGVsc2UgaWYgKCFpc0NlbGNpdXMpIHsgXG4vLyAgICAgY3VycmVudFdlYXRoZXJUZW1wRGF0YS50ZXh0Q29udGVudCA9IGAke2N1cnJlbnRGVGVtcH1gO1xuLy8gICAgfVxuXG4vLyAgICBpc0NlbGNpdXMgPSBmYWxzZTtcblxuLy8gICAgY29uc29sZS5sb2coaXNDZWxjaXVzKTtcbi8vIC8vICAgIH0gZWxzZSAoaXNGKSB7IFxuLy8gLy8gICAgIGN1cnJlbnRXZWF0aGVyVGVtcERhdGEudGV4dENvbnRlbnQgPSBgJHtjdXJyZW50RlRlbXB9YDtcbi8vIC8vICAgIH1cbiAgICBcbi8vICAgICAvLyBjb25zb2xlLmxvZyhzdG9yZWRXZWF0aGVyRGF0YS5jdXJyZW50LmNvbmRpdGlvbik7XG4vLyAvLyBmZXRjaERhdGEudGhlbihkYXRhID0+IGNvbnNvbGUubG9nKGRhdGEpKTtcbi8vIH0pO1xuXG5hc3luYyBmdW5jdGlvbiBhZGRXZWF0aGVyRm9yZWNhc3QxKHdlYXRoZXIpIHsgXG4gICAgbGV0IGZvcmVjYXN0RGF0YSA9IGF3YWl0IHdlYXRoZXI7IFxuXG4gICAgIC8vIGNvbnNvbGUubG9nKGZvcmVjYXN0RGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXkpO1xuXG4gICAgLy8gY29uc29sZS5sb2coZm9yZWNhc3REYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRheS5jb25kaXRpb24uaWNvbik7XG5cbiAgICBsZXQgaW5wdXRGb3JJbWdEYXkxID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0LWZvcmVjYXN0LWRheTEtaWNvbicpOyBcblxuICAgIGlucHV0Rm9ySW1nRGF5MS50ZXh0Q29udGVudCA9ICcnO1xuXG4gICAgbGV0IGRheTFEYXRlID0gZm9yZWNhc3REYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRhdGU7IFxuXG4gICAgbGV0IGRheTFJY29uID0gbmV3IEltYWdlKCk7IFxuXG4gICAgbGV0IGRheTFIaWdoVGVtcCA9IGZvcmVjYXN0RGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXkubWF4dGVtcF9mO1xuXG4gICAgbGV0IGRheTFMb3dUZW1wID0gZm9yZWNhc3REYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRheS5taW50ZW1wX2Y7XG5cbiAgICBsZXQgY2hhbmNlT2ZSYWluID0gZm9yZWNhc3REYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRheS5kYWlseV9jaGFuY2Vfb2ZfcmFpbjtcblxuICAgIGxldCB1dkluZGV4ID0gZm9yZWNhc3REYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRheS51djtcblxuICAgIGxldCBjaGFuY2VPZlNub3cgPSBmb3JlY2FzdERhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uZGF5LmRhaWx5X2NoYW5jZV9vZl9zbm93O1xuXG4gICAgLy8gZGF5MUljb24uc3R5bGUuaGVpZ2h0ID0gJzEzMHB4JztcblxuICAgIGRheTFJY29uLnNyYyA9IGZvcmVjYXN0RGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXkuY29uZGl0aW9uLmljb247IFxuICAgIFxuICAgIC8vIGxldCBpbnB1dEZvckltZ0RheTEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXQtZm9yZWNhc3QtZGF5MS1pY29uJyk7IFxuXG4gICAgaW5wdXRGb3JJbWdEYXkxLmFwcGVuZChkYXkxSWNvbik7XG5cbiAgICBsZXQgZGF0ZUFuZEljb25EYXRhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0LWZvcmVjYXN0LWRheTEtZGF0YS1kYXRlJyk7IFxuXG4gICAgZGF0ZUFuZEljb25EYXRhLnRleHRDb250ZW50ID0gYERhdGUgdG9kYXkgaXM6ICR7ZGF5MURhdGV9YDsgXG5cbiAgICBsZXQgaGlnaExvd1RlbXBEYXRhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0LWZvcmVjYXN0LWRheTEtaGlnaC1sb3cnKTsgXG5cbiAgICBoaWdoTG93VGVtcERhdGEudGV4dENvbnRlbnQgPSBgSGlnaCB0b2RheSBpczogJHtkYXkxSGlnaFRlbXB9XFx1MDBCMEYgTG93IHRvZGF5IGlzOiAke2RheTFMb3dUZW1wfVxcdTAwQjBGYDtcblxuICAgIGxldCBjaGFuY2VPZlJhaW5EYXRhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0LWZvcmVjYXN0LWRheS0xLXJhaW4tY2hhbmNlJyk7XG4gICAgXG4gICAgY2hhbmNlT2ZSYWluRGF0YS50ZXh0Q29udGVudCA9IGBDaGFuY2Ugb2YgUmFpbjogJHtjaGFuY2VPZlJhaW59JWAgXG5cbiAgICBsZXQgdXZJbmRleERhdGEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXQtZm9yZWNhc3QtZGF5LTEtdXYtaW5kZXgnKTtcblxuICAgIHV2SW5kZXhEYXRhLnRleHRDb250ZW50ID0gYFVWIEluZGV4IGlzOiAke3V2SW5kZXh9YDtcblxuICAgIGxldCBjaGFuY2VPZlNub3dEYXRhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0LWZvcmVjYXN0LWRheS0xLXNub3ctY2hhbmNlJyk7IFxuXG4gICAgY2hhbmNlT2ZTbm93RGF0YS50ZXh0Q29udGVudCA9IGBDaGFuY2Ugb2YgU25vdzogJHtjaGFuY2VPZlNub3d9JWBcblxufSBcblxuXG5hc3luYyBmdW5jdGlvbiBhZGRXZWF0aGVyRm9yZWNhc3QyKHdlYXRoZXIpIHsgXG4gICAgbGV0IGZvcmVjYXN0RGF0YTIgPSBhd2FpdCB3ZWF0aGVyOyBcblxuICAgIGNvbnNvbGUubG9nKGZvcmVjYXN0RGF0YTIpO1xuXG4gICAgLy8gY29uc29sZS5sb2coZm9yZWNhc3REYXRhMi5mb3JlY2FzdC5mb3JlY2FzdGRheVsxXS5kYXRlKTtcblxuICAgIGxldCBpY29uRGF0YSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dC1mb3JlY2FzdC1kYXkyLWRhdGEtaWNvbicpO1xuXG4gICAgaWNvbkRhdGEudGV4dENvbnRlbnQgPSAnJztcblxuICAgIGxldCBkYXkyRGF0ZSA9IGZvcmVjYXN0RGF0YTIuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMV0uZGF0ZTsgXG5cbiAgICBsZXQgZGF5Mkljb25JbWcgPSBuZXcgSW1hZ2UoKTsgXG5cbiAgICBkYXkySWNvbkltZy5zcmMgPSBmb3JlY2FzdERhdGEyLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzFdLmRheS5jb25kaXRpb24uaWNvbjtcblxuICAgIGxldCBkYXkySGlnaFRlbXAgPSBmb3JlY2FzdERhdGEyLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzFdLmRheS5tYXh0ZW1wX2Y7XG5cbiAgICBsZXQgZGF5Mkxvd1RlbXAgPSBmb3JlY2FzdERhdGEyLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzFdLmRheS5taW50ZW1wX2Y7XG5cbiAgICBsZXQgZGF5MkNoYW5jZU9mUmFpbiA9IGZvcmVjYXN0RGF0YTIuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMV0uZGF5LmRhaWx5X2NoYW5jZV9vZl9yYWluO1xuXG4gICAgbGV0IGRheTJVVkluZGV4ID0gZm9yZWNhc3REYXRhMi5mb3JlY2FzdC5mb3JlY2FzdGRheVsxXS5kYXkudXY7IFxuXG4gICAgbGV0IGRheTJDaGFuY2VPZlNub3cgPSBmb3JlY2FzdERhdGEyLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzFdLmRheS5kYWlseV9jaGFuY2Vfb2Zfc25vdztcblxuICAgIC8vIGNvbnNvbGUubG9nKGRheTJDaGFuY2VPZlNub3cpO1xuXG4gICAgLy8gY29uc29sZS5sb2coZGF5Mkljb24pO1xuXG4gICAgbGV0IGRhdGVEYXRhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0LWZvcmVjYXN0LWRheTItZGF0YS1kYXRlJyk7XG5cbiAgICBkYXRlRGF0YS50ZXh0Q29udGVudCA9IGBEYXRlIFRvZGF5IGlzOiAke2RheTJEYXRlfWA7IFxuXG4gICAgLy8gbGV0IGljb25EYXRhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0LWZvcmVjYXN0LWRheTItZGF0YS1pY29uJyk7XG5cbiAgICBpY29uRGF0YS5hcHBlbmQoZGF5Mkljb25JbWcpOyBcblxuICAgIGxldCBoaWdoTG93VGVtcERhdGEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXQtZm9yZWNhc3QtZGF5Mi1oaWdoLWxvdycpO1xuXG4gICAgaGlnaExvd1RlbXBEYXRhLnRleHRDb250ZW50ID0gYEhpZ2ggVG9kYXkgaXM6ICR7ZGF5MkhpZ2hUZW1wfVxcdTAwQjBGIExvdyB0b2RheSBpczogJHtkYXkyTG93VGVtcH1cXHUwMEIwRmA7IFxuXG4gICAgbGV0IGNoYW5jZU9mUmFpbkRhdGEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXQtZm9yZWNhc3QtZGF5Mi1yYWluLWNoYW5jZScpO1xuXG4gICAgY2hhbmNlT2ZSYWluRGF0YS50ZXh0Q29udGVudCA9IGBDaGFuY2Ugb2YgUmFpbjogJHtkYXkyQ2hhbmNlT2ZSYWlufSVgOyBcblxuICAgIGxldCB1dkluZGV4RGF0YSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dC1mb3JlY2FzdC1kYXkyLXV2LWluZGV4Jyk7XG5cbiAgICB1dkluZGV4RGF0YS50ZXh0Q29udGVudCA9IGBVViBJbmRleCBpczogJHtkYXkyVVZJbmRleH1gOyBcblxuICAgIGxldCBjaGFuY2VPZlNub3dEYXRhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0LWZvcmVjYXN0LWRheTItc25vdy1jaGFuY2UnKTtcblxuICAgIGNoYW5jZU9mU25vd0RhdGEudGV4dENvbnRlbnQgPSBgQ2hhbmNlIG9mIFNub3c6ICR7ZGF5MkNoYW5jZU9mU25vd30lYDtcblxufSBcblxuYXN5bmMgZnVuY3Rpb24gYWRkV2VhdGhlckZvcmVjYXN0Myh3ZWF0aGVyKSB7IFxuICAgIGxldCBmb3JlY2FzdERhdGEzID0gd2VhdGhlcjsgXG5cbiAgICBsZXQgZGF5M0RhdGUgPSBmb3JlY2FzdERhdGEzLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzJdLmRhdGU7IFxuXG4gICAgbGV0IGRheTNJbWdJY29uID0gbmV3IEltYWdlKCk7IFxuXG4gICAgbGV0IGljb25EYXRhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0LWZvcmVjYXN0LWRheTMtaWNvbicpO1xuXG4gICAgaWNvbkRhdGEudGV4dENvbnRlbnQgPSAnJztcblxuXG4gICAgZGF5M0ltZ0ljb24uc3JjID0gZm9yZWNhc3REYXRhMy5mb3JlY2FzdC5mb3JlY2FzdGRheVsyXS5kYXkuY29uZGl0aW9uLmljb247XG5cbiAgICBsZXQgZGF5M0hpZ2hUZW1wID0gZm9yZWNhc3REYXRhMy5mb3JlY2FzdC5mb3JlY2FzdGRheVsyXS5kYXkubWF4dGVtcF9mO1xuXG4gICAgbGV0IGRheTNMb3dUZW1wID0gZm9yZWNhc3REYXRhMy5mb3JlY2FzdC5mb3JlY2FzdGRheVsyXS5kYXkubWludGVtcF9mO1xuXG4gICAgbGV0IGRheTNSYWluQ2hhbmNlID0gZm9yZWNhc3REYXRhMy5mb3JlY2FzdC5mb3JlY2FzdGRheVsyXS5kYXkuZGFpbHlfY2hhbmNlX29mX3JhaW47XG5cbiAgICBsZXQgZGF5M1VWSW5kZXggPSBmb3JlY2FzdERhdGEzLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzJdLmRheS51djtcblxuICAgIGxldCBkYXkzQ2hhbmNlT2ZTbm93ID0gZm9yZWNhc3REYXRhMy5mb3JlY2FzdC5mb3JlY2FzdGRheVsyXS5kYXkuZGFpbHlfY2hhbmNlX29mX3Nub3c7XG5cbiAgICBjb25zb2xlLmxvZyhkYXkzQ2hhbmNlT2ZTbm93KTtcblxuICAgIGxldCBkYXRlRGF0YSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dC1mb3JlY2FzdC1kYXkzLWRhdGEtZGF0ZScpO1xuXG4gICAgZGF0ZURhdGEudGV4dENvbnRlbnQgPSBgRGF0ZSBUb2RheSBpczogJHtkYXkzRGF0ZX1gOyBcblxuICAgIC8vIGxldCBpY29uRGF0YSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dC1mb3JlY2FzdC1kYXkzLWljb24nKTtcblxuICAgIGljb25EYXRhLmFwcGVuZChkYXkzSW1nSWNvbik7IFxuXG4gICAgbGV0IGhpZ2hMb3dUZW1wRGF0YSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dC1mb3JlY2FzdC1kYXkzLWhpZ2gtbG93Jyk7XG5cbiAgICBoaWdoTG93VGVtcERhdGEudGV4dENvbnRlbnQgPSBgSGlnaCB0b2RheSBpczogJHtkYXkzSGlnaFRlbXB9XFx1MDBCMEYgTG93IHRvZGF5IGlzOiAke2RheTNMb3dUZW1wfVxcdTAwQjBGYDtcblxuICAgIGxldCBjaGFuY2VPZlJhaW5EYXRhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0LWZvcmVjYXN0LWRheTMtcmFpbi1jaGFuY2UnKTtcblxuICAgIGNoYW5jZU9mUmFpbkRhdGEudGV4dENvbnRlbnQgPSBgQ2hhbmNlIG9mIFJhaW46ICR7ZGF5M1JhaW5DaGFuY2V9JWAgXG5cbiAgICBsZXQgdXZJbmRleERhdGEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXQtZm9yZWNhc3QtZGF5My11di1pbmRleCcpOyBcblxuICAgIHV2SW5kZXhEYXRhLnRleHRDb250ZW50ID0gYFVWIEluZGV4IGlzOiAke2RheTNVVkluZGV4fWA7IFxuXG4gICAgbGV0IGNoYW5jZU9mU25vd0RhdGEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXQtZm9yZWNhc3QtZGF5My1zbm93LWNoYW5jZScpO1xuXG4gICAgY2hhbmNlT2ZTbm93RGF0YS50ZXh0Q29udGVudCA9IGBDaGFuY2Ugb2YgU25vdzogJHtkYXkzQ2hhbmNlT2ZTbm93fSVgO1xuXG59XG5cbi8vIFNvIEkgbGlrZSB3YXZlcyBwcm9qZWN0IGxvb2ssIG5leHQgSSBXaWxsIGZpZ3VyZSBvdXQgYSB3YXkgXG5cbi8vIG5leHQgSSB3aWxsIGdldCB0aGUgMyBkYXkgZm9yZWNhc3QsIFxuXG4vLyBJIGFzc3VtZSBpdCB3b3VsZCBiZSB0aGUgc2FtZSBwcm9jZXNzIGZldGNoIHRoZSBkYXRhIFxuXG4vLyBrZXkgaW50byB0aGUgdmFsdWUgdGhlIGN1cnJlbnQgZm9yZWNhc3QgXG5cbi8vIEkgdGhpbmsgSSBhbHNvIG5lZWQgdG8gd3JpdGUgYSBmdW5jdGlvbiwgXG5cbi8vIHRoYXQgd2lsbCBkaXNwbGF5IHRoZSB0aHJlZSBkYXkgZm9yZWNhc3QsIFxuXG4vLyBwYXNzIHRoZSB3ZWF0aGVyIGRhdGEgdG8gdGhhdCB5b3UgZ290IGZyb20gdGhlIGZldGNoIGRhdGEgZnVuY3Rpb24gXG5cbi8vIHRvIHRoZSBvdGhlciBmdW5jdGlvbiB3aGljaCB3aWxsIGp1c3QgZGlzcGxheSBmb3JlY2FzdCB3ZWFodGVyIFxuXG4vLyBmb3IgMyBkYXlzLCBcblxuLy8gcHJvamVjdCwgMyBkYXkgZm9yZWNhc3QsIFxuXG4vLyB0b2dnbGUgY2VsaXVzIGFuZCBmIFxuXG4vLyBmaW5kIHdheSB0byBjbGVhciBET00gYmVmb3JlIGFkZGluZyBuZXcgdmFsdWVzLCBubyBhZGRpbmcgb24gXG5cbi8vIGEgd2F5IHRvIGltcG9ydCBpY29ucyBhbmQgZ2V0IHRoZSBjb3JyZWN0IHBhdGggXG5cbi8vIGljb25zIHNlZW1zIHRvIHdvcmtpbmchISBcblxuLy8gbWFrZSB0aGUgd2VhdGhlciBkZXNjcmlwdGlvbiBlbGVtZW50cyBhcHBlYXIgd2l0aCB0aGUgRE9NLCBcblxuLy8gaW5zdGVhZCBvZiB0aGUgaHRtbCwgXG5cbi8vIGZpbmQgYSB3YXkgbm93IHRvIGtleSBpbnRvIGFuZCBnZXQgZm9yZWNhc3QgXG5cbi8vIG5leHQgc3RlcCBpcyB0byBrZXkgaW50byBkYXRhLCBhbmQgZ2V0IHRoZSBmb3JlY2FzdCBcblxuLy8ga2V5IGludG8gY2VydGFpbiBkYXlzLCBtYWtlIGEgSFRNTCBjYXJkLCBcblxuLy8gYXBwZW5kIHRoZSBkYXRhIHRvIHRoZSBjYXJkLCBhbG9uZyB3aXRoIGxvZ29zIGZvciB0aGUgd2VhdGhlciwgXG5cbi8vIHRoZW4gaW5zdGVhZCBvZiBIVE1MIE1lc3NhZ2VzLCB1c2UgRE9NIHBsdXMgYXBwZW5kIGRhdGEgXG5cbi8vIG9uY2UgY3VycmVudCBhbmQgMyBkYXkgZm9yZWNhc3QgaXMgc2V0LCBcblxuLy8gZmluZCBhIHdheSBvciB3cml0ZSBhIGZ1bmN0aW9uIHRoYXQgY2FuIGNoYW5nZWQgZiBkYXRhIHRvIGMgXG5cbi8vIHN0eWxlIHVwIGFuZCBkb25lLCBcblxuLy8gV2Uga25vdyB3aGF0IHdlIG5lZWQgdG8gZG8sIGZpcnN0IEkgd291bGQgZ2V0IHRoZSBjb3JyZWN0IFxuXG4vLyBmb3JlY2FzdCBkYXRhIGFuZCBhcHBlbmQgaW4gdGhlIGNvcnJlY3Qgc3BvdCwgXG5cbi8vIHRoZW4gZml4IHRoZSBjdXJyZW50IHdlYXRoZXIgdG8gdXNlIERPTSBkaXNwbGF5ZWQgdGV4dCwgXG5cbi8vIGFsb25nIHdpdGggYXR0YWNoaW5nIHRoZSBpY29uLCBcblxuLy8gc3RhcnQgdGhlcmUsIGZpcnN0IGxldHMgZmluZCB0aGUgY29ycmVjdCBmb3JlY2FzdCBmb3IgdGhlIDMgZGF5LCBcblxuLy8gb2sgbGV0cyBmaXJzdCBnbyB0aGUgSFRNTCwgbmFkIG1ha2UgdGhlIG1hcmt1cCwgXG5cbi8vIHdlIHdpbGwgbmVlZCBhIGNvbnRhaW5lciwgXG5cbi8vIHRoYXQgY2FuIGhvbGQgMyBjYXJkcywgZGlzcGxheWVkIGluIGZsZXggc28gdGhleSBhcmUgaW4gYSByb3csIFxuXG4vLyBhcHBlbmQgdGhlIHZhbHVlcyB0byB0aGUgc3BlY2lmaWMgaW5wdXQgZmllbGRzLCBcblxuLy8gb2sgd2UgZ290IHRoZSBtYXJrdXAgXG5cbi8vIG5vdyBJIHRoaW5rIEkgV291bGQgcGFzcyB0aGUgZGF0YSB0byB0aGUgb3RoZXIgZnVuY3Rpb24sIFxuXG4vLyBvayBvdGhlciBmdW5jdGlvbiBjYW4gYWNjZXB0IHRoZSBkYXRhLCBcblxuLy8gYWRkIHRoZSBwIGVsZW1lbnRzIG9uIGVhY2ggY2FyZCwgYW5kIGFwcGVuZCBkYXRhIGFsb25nIHdpdGggYSBtZXNzYWdlIFxuXG4vLyBwIGVsZW1lbnQgYW5kIGFwcGVuZCB0aGUgZGF0ZSBhbmQgaWNvbiBmaXJzdCBpbiB0aGUgc2FtZSBsaW5lIFxuXG4vLyBtYWtlIGEgbmV3IGZ1bmN0aW9uIGZvciBlYWNoIGZvcmVjYXN0IGRheSBcblxuLy8ganVzdCB0byBtb2R1bGFyaXplIHRoaW5ncyBtb3JlIGFuZCB0byBhdm9pZCBcblxuLy8gaGF2aW5nIG9uZSBmdW5jdGlvbiB0byBhbGwgdGhlIHdvcmsgYW5kIHRoYXQgZnVuY3Rpb24gd2lsbCBcblxuLy8gYmUgdG9vIGJpZywgb25lIGZ1bmN0aW9uIGZvciBlYWNoIGRheSwgXG5cbi8vIHBhc3MgdGhlIGRhdGEgdG8gdGhvc2UgMyBmdW5jdGlvbnMsIFxuXG4vLyBpdHMgb25seSA0IGNhbGxzLCBvbmUgdG8gY3VycmVudCBcblxuLy8gb25lIHRvIGN1cnJlbnQsIGRheTEgMiAzIFxuXG4vLyBvayBub3cgdXNlIGEgZnVuY3Rpb24gdG8gcHJpbnQgdGhlIGRhdGEgZm9yIGRheSAyIGZvcmVjYXN0IFxuXG4vLyB1c2UgYSBkaWZmZXJlbnQgZnVuY3Rpb24gc28gaXQgZG9lcyBub3QgZ2V0IHRvbyBiaWcgXG5cbi8vIGFub3RoZXIgaXNzdWUgaXMgZ2V0dGluZyB0aGUgZGVncmVlcyBzeW1ib2wgdG8gc2hvdywgXG5cbi8vIGFuZCBpZiB0aGUgdXNlciBpbnB1dHMgYW5vdGhlciBzZWFyY2gsIFxuXG4vLyBjbGVhciB0aGUgRE9NIHRvIG1ha2Ugd2F5IGZvciB0aGUgbmV3LiBcblxuLy8gY2hhbmdlIGJhY2tncm91bmQgYmFzZWQgb24gY29uZGl0aW9uIHRleHQgXG5cbi8vIGlmID09PSBzdW5ueSBcblxuLy8gYXBwZW5kIHN1bm55IGJhY2tncm91bmQgcGljdHVyZSwgXG5cbi8vIGlmID09PSByYWlueSBcblxuLy8gYXBwZW5kIHJhaW55IHBpYyBcblxuLy8gSSB0aGluayBldmVyeXRoaW5nIGlzIGdvaW5nIG9rLCBJIHdpbGwgbWFrZSB0aGUgd2VhdGhlciBkYXRhIGZvciB0aGUgbGFzdCBkYXkgb2YgdGhlIGZvcmVjYXN0LCBjb21taXQsIHRoZW4gZml4IHRoZSBodG1sIGFib3ZlIHRvIHVzZSBvbmx5IHRoZSBET00gXG5cbi8vIEkgd2lsbCBmaXggdGhlIGh0bWwgdG8gdXNlIERPTSBPbmx5LCBcblxuLy8gdGhlbiB3b3JrIG9uIGNsZWFyaW5nIHRoZSBET00sIHNvIHZhbHVlcyBkbyBub3QgYWRkIG9udG8gXG5cbi8vIEhUTUwgSXMgc2V0LCBzbyBob3cgZG8gSSBjbGVhciB0aGUgdmFsdWVzIGZyb20gdGhlIERPTSwgXG5cbi8vIGFkZCBuZXcgYnV0IHJlcGxhY2Ugb2xkLCBcblxuLy8gaGF2aW5nIGlzc3VlIGNsZWFyaW5nIHRoZSBET00sIFxuXG4vLyBJIHRob3VnaHQgY2xlYXJuaW5nIGl0IGJlZm9yZSB0aGUgZnVuY3Rpb24gY2FsbCBvciBpbnNpZGUgdGhlIGZ1bmN0aW9udGhhdCB3YXMgY2FsbGVkIFxuXG4vLyB3aGVyZSBjYW4gSSBjbGVhciB0aGUgRE9NLCBcblxuLy8gaXQgbmVlZHMgdG8gYmUgaW4gdGhlIHJpZ2h0IHNwb3QsIFxuXG4vLyBjbGVhciB0aGUgRE9NIG9uY2UgdGhlIHNlYXJjaCBidG4gaXMgcHJlc3NlZCwgXG5cbi8vIGNsZWFyIG9sZCBkYXRhLCBhZGQgdGhlIG5ldywgXG5cbi8vIE9LIEkgd2FzIGFibGUgdG8gZmlndXJlIG91dCB0aGUgZG9tIGlzc3VlLCBpdCB3YXMgbW9yZSB0aGUgaWNvbnMgdGhhdCBJIGhhZCB0byByZXBsYWNlLCBpbnN0ZWFkIG9mIGNsZWFybmluZyB0aGUgZG9tIGVhY2ggdGltZSwgXG5cbi8vIHNldHRpbmcgdGhlIHRleHQgQ29udGVudCBvZiB0aGUgZWxlbWVudCwgdG8gZW1wdHkgd2lsbCBtYWtlIHdheSBmb3IgdGhlIG5ldyB2YWx1ZS9pY29uIFxuXG4vLyBuZXh0IEkgbmVlZCB0byBmaWd1cmUgb3V0IGhvdyB0byB3cml0ZSBhIGZ1bmN0aW9uIG9yIHBlcmZvcm0gdGhlIGxvZ2ljIHRoYXQgd291bGQgYWxsb3cgbWUgdG8gY2hhbmdlIHRoZSBmIGRhdGEgdG8gYyBkYXRhIFxuXG4vLyBmaXJzdCBsb2NhdGUgYWxsIHZhbHVlcyB0aGF0IHVzZSBmLCBcblxuLy8ganVzdCBjaGFuZ2UgdGhlIHRlbXAuIHRoZXJlIGlzIG9uZSBpbiBjdXJyZW50IHdlYXRoZXIgYW5kIGRheXMsIGVhY2ggZGF5IHdpbGwgbmVlZCB0byBoaWdoIGFuZCBsb3cgdGVtcCBjaGFuZ2VkLCBcblxuLy8gSSBhbSBjb25mdXNlZCBvbiBob3cgdG8gYXBwcm9hY2ggdGhpcywgXG5cbi8vIGEgZnVuY3Rpb24/IFxuXG4vLyBvbmNlIHRoZSBidG4gaXMgY2xpY2tlZCwgZ3JhYiB0aGUgdmFsdWVzLCBncmFiIGFsbCB0aGUgaW5wdXRzL2ZpZWxkcywgY2FsbCBhbm90aGVyIGZ1bmN0aW9uLCB3aGljaCB3aWxsIGludGFrZSB0aGUgY3VycmVudCB3ZWF0aGVyLCBrZXkgaW50byB2YWx1ZXMsIFxuXG4vLyB0aGVuIGRpc3BsYXkgdGhvc2UgdmFsdWVzIHRvIHRoZSBET00/ICIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2VhcnRoLWJhY2tncm91bmQuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogYm9keSB7IFxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiA7XFxufSAqL1xcbioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbmJvZHkge1xcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3NywgMTcyLCAxNzIpOyAqL1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxufVxcblxcbi5oZWFkZXItY29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgaGVpZ2h0OiAxMnZoO1xcbiAgZ2FwOiAxZW07XFxufVxcblxcbi5oMS1oZWFkZXItc3R5bGVzIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMi44cmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5zZWFyY2gtYmFyLWVsZW1lbnRzLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gIGdhcDogMWVtO1xcbn1cXG5cXG4uc2VhcmNoLWJhci1lbGVtZW50cy1jb250YWluZXIgPiBpbnB1dCB7XFxuICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbi5zZWFyY2gtYmFyLWVsZW1lbnRzLWNvbnRhaW5lciA+IGJ1dHRvbiB7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbiNjdXJyZW50LXdlYXRoZXItZGF0YSA+IGgzIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG4jY3VycmVudC13ZWF0aGVyLWRhdGEge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4jY3VycmVudC13ZWF0aGVyLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBoZWlnaHQ6IDQwdmg7XFxuICAvKiBtYXJnaW4tdG9wOiAyZW07ICovXFxuICBjb2xvcjogd2hpdGU7XFxuICAvKiBoZWlnaHQ6IDI4NXB4O1xcbiAgd2lkdGg6IDI4NXB4OyAqL1xcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3NywgMTcyLCAxNzIpOyAqL1xcbn1cXG5cXG4jZm9yZWNhc3QtMy1kYXktdGl0bGUge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgbWFyZ2luLXRvcDogMC41ZW07XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbiNmb3JlY2FzdC1kYXktMS1jYXJkLFxcbiNmb3JlY2FzdC1kYXktMi1jYXJkLFxcbiNmb3JlY2FzdC1kYXktMy1jYXJkIHtcXG4gIC8qIHdpZHRoOiAyNTBweDsgXFxuICBoZWlnaHQ6IDI1MHB4OyAqL1xcbiAgaGVpZ2h0OiA0NXZoO1xcbiAgd2lkdGg6IDI1dnc7XFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTc3LCAxNzIsIDE3Mik7ICovXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIG9wYWNpdHk6IDAuNztcXG4gIGJvcmRlci1yYWRpdXM6IDEwJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4jZm9yZWNhc3QtZGF5cy1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAyZW07XFxuICBtYXJnaW4tdG9wOiAwLjVlbTtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG4vKiAjZm9yZWNhc3QtY29udGFpbmVyIHsgXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuXFxufSAqL1wiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7O0dBQUE7QUFJQTtFQUNJLHNCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUFBSjs7QUFHQTtFQUNJLDBDQUFBO0VBQ0EsMkJBQUE7RUFDQSxtREFBQTtFQUNBLHNCQUFBO0FBQUo7O0FBR0E7RUFDRSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFFBQUE7QUFBRjs7QUFJQTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FBREo7O0FBSUE7RUFDSSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxRQUFBO0FBREo7O0FBS0E7RUFDSSxlQUFBO0FBRko7O0FBS0E7RUFDSSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtBQUZKOztBQUtBO0VBQ0ksZUFBQTtFQUNBLDBCQUFBO0FBRko7O0FBS0E7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBRko7O0FBS0E7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0E7aUJBQUE7RUFFQSwwQ0FBQTtBQUZKOztBQUtBO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUFGSjs7QUFNQTs7O0VBR0k7a0JBQUE7RUFFQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLDBDQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQUhKOztBQU1BO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsUUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUFISjs7QUFPQTs7Ozs7O0dBQUFcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogYm9keSB7IFxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiA7XFxufSAqL1xcblxcbiogeyBcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgcGFkZGluZzogMDsgXFxuICAgIG1hcmdpbjogMDtcXG59IFxcblxcbmJvZHkgeyBcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3NywgMTcyLCAxNzIpOyAqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7O1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoLi9lYXJ0aC1iYWNrZ3JvdW5kLmpwZyk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxufVxcblxcbi5oZWFkZXItY29udGFpbmVyIHsgXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGhlaWdodDogMTJ2aDtcXG4gIGdhcDogMWVtOyBcXG5cXG59IFxcblxcbi5oMS1oZWFkZXItc3R5bGVzIHsgXFxuICAgIGNvbG9yOiB3aGl0ZTsgXFxuICAgIGZvbnQtc2l6ZTogMi44cmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLnNlYXJjaC1iYXItZWxlbWVudHMtY29udGFpbmVyIHsgXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICAgIGdhcDogMWVtOyBcXG4gICAgXFxufSBcXG5cXG4uc2VhcmNoLWJhci1lbGVtZW50cy1jb250YWluZXIgPiBpbnB1dCB7IFxcbiAgICBmb250LXNpemU6IDFyZW07XFxufSBcXG5cXG4uc2VhcmNoLWJhci1lbGVtZW50cy1jb250YWluZXIgPiBidXR0b24geyBcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgY29sb3I6IGJsYWNrOyBcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn0gXFxuXFxuI2N1cnJlbnQtd2VhdGhlci1kYXRhID4gaDN7IFxcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn0gIFxcblxcbiNjdXJyZW50LXdlYXRoZXItZGF0YSB7IFxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbiNjdXJyZW50LXdlYXRoZXItY29udGFpbmVyIHsgXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDQwdmg7XFxuICAgIC8qIG1hcmdpbi10b3A6IDJlbTsgKi9cXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICAvKiBoZWlnaHQ6IDI4NXB4O1xcbiAgICB3aWR0aDogMjg1cHg7ICovXFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYigxNzcsIDE3MiwgMTcyKTsgKi9cXG59IFxcblxcbiNmb3JlY2FzdC0zLWRheS10aXRsZSB7IFxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICAgIG1hcmdpbi10b3A6IDAuNWVtO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcblxcbiNmb3JlY2FzdC1kYXktMS1jYXJkLCBcXG4jZm9yZWNhc3QtZGF5LTItY2FyZCwgXFxuI2ZvcmVjYXN0LWRheS0zLWNhcmQgeyBcXG4gICAgLyogd2lkdGg6IDI1MHB4OyBcXG4gICAgaGVpZ2h0OiAyNTBweDsgKi9cXG4gICAgaGVpZ2h0OiA0NXZoO1xcbiAgICB3aWR0aDogMjV2dztcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3NywgMTcyLCAxNzIpOyAqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgb3BhY2l0eTogMC43O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMCU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgY29sb3I6IHdoaXRlOyBcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufSBcXG5cXG4jZm9yZWNhc3QtZGF5cy1jb250YWluZXIgeyBcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMmVtOyBcXG4gICAgbWFyZ2luLXRvcDogMC41ZW07XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG5cXG4vKiAjZm9yZWNhc3QtY29udGFpbmVyIHsgXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuXFxufSAqL1xcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5oMS1oZWFkZXItc3R5bGVzIHtcXG4gIGNvbG9yOiByZWQ7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLFVBSFc7QUFFYlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIkdGl0bGVDb2xvcjogcmVkOyBcXG5cXG4uaDEtaGVhZGVyLXN0eWxlcyB7IFxcbiAgY29sb3I6ICR0aXRsZUNvbG9yOyBcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyJdLCJuYW1lcyI6WyJzZWFyY2hCb3giLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic2VhcmNoQnRuIiwid2VhdGhlckNvbnRhaW5lciIsInN0b3JlZFdlYXRoZXJEYXRhIiwiZmV0Y2hEYXRhIiwiaW5wdXQiLCJjaXR5RGF0YSIsImNvbnNvbGUiLCJsb2ciLCJnZXREYXRhIiwiZmV0Y2giLCJqc29uRGF0YSIsImpzb24iLCJjdXJyZW50V2VhdGhlckRhdGEiLCJkaXNwbGF5Q3VycmVudFdlYXRoZXIiLCJhZGRXZWF0aGVyRm9yZWNhc3QxIiwiYWRkV2VhdGhlckZvcmVjYXN0MiIsImFkZFdlYXRoZXJGb3JlY2FzdDMiLCJ3ZWF0aGVyIiwiY3VycmVudFdlYXRoZXJJY29uIiwiY3VycmVudEZvcmVjYXN0IiwidGV4dENvbnRlbnQiLCJ3ZWF0aGVySWNvbiIsIkltYWdlIiwic3JjIiwiY3VycmVudCIsImNvbmRpdGlvbiIsImljb24iLCJsb2NhdGlvbkRhdGEiLCJsb2NhdGlvbiIsIm5hbWUiLCJ3ZWF0aGVyRGVzY3JpcHRpb25EYXRhIiwidGV4dCIsImN1cnJlbnRXZWF0aGVyTnVtYmVyRGF0YSIsImZlZWxzbGlrZV9mIiwid2luZERhdGEiLCJ3aW5kX21waCIsIndpbmREaXJlY3Rpb24iLCJ3aW5kX2RpciIsInJhaW5JbmNoZXMiLCJwcmVjaXBfaW4iLCJodW1pZGl0eUxldmVsIiwiaHVtaWRpdHkiLCJuZXdJbWciLCJhcHBlbmRDaGlsZCIsImN1cnJlbnRXZWF0aGVyTG9jYXRpb25UZXh0IiwiY3VycmVudFdlYXRoZXJEZXNjcmlwdGlvblRleHQiLCJjdXJyZW50V2VhdGhlclRlbXBEYXRhIiwiY3VycmVudFdlYXRoZXJXaW5kRGF0YSIsImN1cnJlbnRXZWF0aGVyV2luZERpcmVjdGlvbiIsImN1cnJlbnRXZWF0aGVyUmFpbiIsImN1cnJlbnRIdW1pZGl0eUxldmVsIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJpbnB1dFZhbHVlIiwidmFsdWUiLCJjZWxjaXVzQnRuIiwiY3VycmVudENlbGNpdXNUZW1wIiwidGVtcF9jIiwiZGF5MUhpZ2hUZW1wIiwiZm9yZWNhc3QiLCJmb3JlY2FzdGRheSIsImRheSIsIm1heHRlbXBfYyIsImRheTFMb3dUZW1wIiwibWludGVtcF9jIiwiaGlnaExvd1RlbXBEYXRhIiwiZGF5MkhpZ2hUZW1wIiwiZGF5Mkxvd1RlbXAiLCJoaWdoTG93VGVtcERhdGFEYXkyIiwiZGF5M0hpZ2hUZW1wIiwiZGF5M0xvd1RlbXAiLCJoaWdoTG93VGVtcERhdGFEYXkzIiwiZkJ0biIsImN1cnJlbnRGVGVtcCIsInRlbXBfZiIsIm1heHRlbXBfZiIsIm1pbnRlbXBfZiIsImZvcmVjYXN0RGF0YSIsImlucHV0Rm9ySW1nRGF5MSIsImRheTFEYXRlIiwiZGF0ZSIsImRheTFJY29uIiwiY2hhbmNlT2ZSYWluIiwiZGFpbHlfY2hhbmNlX29mX3JhaW4iLCJ1dkluZGV4IiwidXYiLCJjaGFuY2VPZlNub3ciLCJkYWlseV9jaGFuY2Vfb2Zfc25vdyIsImFwcGVuZCIsImRhdGVBbmRJY29uRGF0YSIsImNoYW5jZU9mUmFpbkRhdGEiLCJ1dkluZGV4RGF0YSIsImNoYW5jZU9mU25vd0RhdGEiLCJmb3JlY2FzdERhdGEyIiwiaWNvbkRhdGEiLCJkYXkyRGF0ZSIsImRheTJJY29uSW1nIiwiZGF5MkNoYW5jZU9mUmFpbiIsImRheTJVVkluZGV4IiwiZGF5MkNoYW5jZU9mU25vdyIsImRhdGVEYXRhIiwiZm9yZWNhc3REYXRhMyIsImRheTNEYXRlIiwiZGF5M0ltZ0ljb24iLCJkYXkzUmFpbkNoYW5jZSIsImRheTNVVkluZGV4IiwiZGF5M0NoYW5jZU9mU25vdyJdLCJzb3VyY2VSb290IjoiIn0=