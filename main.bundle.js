(self["webpackChunkwebpack_template"] = self["webpackChunkwebpack_template"] || []).push([["main"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

// import './styles.scss';

console.log('\u00B0');

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

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCAnLi9zdHlsZXMuc2Nzcyc7XG5cbmNvbnNvbGUubG9nKCdcXHUwMEIwJyk7XG5cbi8vIGluIG9yZGVyIHRvIHVzZSBlYXJ0aCBiYWNrZ3JvdW5kIGltZyB5b3UgbXVzdCBpbXBvcnQgaXQgYW5kIHNlZSBpZiB5b3UgY2FuIHVzZSBpdCBpbiBjc3MgXG5cbi8vIGJ1dCBpbiBqcywgXG5cbi8vIHF1ZXJ5IHNlbGVjdG9yIHRoZSBib2R5LCBzZWxlY3QgZWxlbWVudCwgXG5cbi8vIGFkZCB0aGUgaW1nIGFzIGEgYmFja2dyb3VuZCwgYW5kIHNldCB0aGUgaW1wb3J0ZWQgaW1nIGFzIHRoZSBzcmMuIFxuXG4vLyB3aHkgZm9lcyBmIGNoYW5nZSB3aGVuIEkgZW50ZXIgaXQgYWdhaW4/IENoZWNrIHRvIG1ha2Ugc3VyZSB5b3UgYXJlIGxvZ2dpbmcgY29ycmVjdCBkYXlzIFxuXG4vLyBjaGFuZ2UgaXQgdG8gZmVlbHMgbGlrZSBpbnN0ZWFkIG9mIGN1cnJlbnQgdGVtcCBcblxuLy8gT0sgc28gdG9kYXksIEkgTGlrZSB0aGUgc3R5bGluZyBmb3IgdGhlIGJhY2tncm91bmQsIG1vdmUgdGhlIHRoZSBpbWdzIGludG8gdGhlIHNyYyBkaXJlY3RvcnksIFxuXG4vLyBhbmQgdXNlIGdoIHBhZ2VzLCB0byBzZWUgaWYgdGhlIGltYWdlcyByZW5kZXIsIFxuXG4vLyBhbHNvIGNoYW5nZSB0aGUgY3VycmVudCB3ZWF0aGVyLCB0byB1c2UgY3VycmVudCBpbnN0ZWFkIG9mIGZlZWxzIGxpa2UsIGRvdWJsZSBjaGVjayB3aXRoIHRoYXQsIFxuXG4vLyBsYXN0IHRyeSB0byBpbnN0YWxsIHNhc3MsIG1heWJlIGFzayBpZiBpdCBpcyBuZWNlc3NhcnkgdG8gdXNlIHR3byBKUyBmaWxlcywgXG5cbi8vIGJydXNoIHVwIG9uIHRoZSBzdHlsaW5nIHRvbywgbWF5YmUgdXNlIERPTSBzdHlsaW5nIGZvciB0aGUgMyBkYXkgZm9yZWNhc3QgYm94ZXMsIG9uY2UgZGF0YSBpcyBlbnRlcmVkLCB0aGVuIGFwcGx5IHRoZSBiYWNrZ3JvdW5kIHN0eWxlcywgXG5cbi8vIHRlc3QgZ2ggcGFnZXMsIFxuXG5sZXQgc2VhcmNoQm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaC1ib3gnKTsgXG5cbmxldCBzZWFyY2hCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoLWJ0bicpOyBcblxuLy8gY3VycmVudCB3ZWF0aGVyIGRhdGEgc3RvcmVkIGluIGhlcmUsIFxubGV0IHdlYXRoZXJDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VycmVudC13ZWF0aGVyLWNvbnRhaW5lcicpOyBcblxubGV0IHN0b3JlZFdlYXRoZXJEYXRhIFxuXG5hc3luYyBmdW5jdGlvbiBmZXRjaERhdGEoaW5wdXQpIHsgXG5cbiAgICBsZXQgY2l0eURhdGEgPSBpbnB1dDsgXG4gICAgXG4gICAgY29uc29sZS5sb2coJ1RoZSBkYXRhIHBhc3NlZCBpbiBpczogJyArIGNpdHlEYXRhKTtcbiAgICBcbiAgICBjb25zdCBnZXREYXRhID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9NDU0NjRkYTM4ODkyNDUwZDk1ZjEwNDMzMjMwNTA2ICZxPSR7Y2l0eURhdGF9JmRheXM9NSZhcWk9bm8mYWxlcnRzPW5vYCk7XG5cbiAgICBjb25zdCBqc29uRGF0YSA9IGF3YWl0IGdldERhdGEuanNvbigpO1xuICAgIFxuICAgIGxldCBjdXJyZW50V2VhdGhlckRhdGEgPSBqc29uRGF0YTtcbiAgICBcbiAgICBzdG9yZWRXZWF0aGVyRGF0YSA9IGN1cnJlbnRXZWF0aGVyRGF0YTsgXG5cbiAgIC8vIGNvbnNvbGUubG9nKHN0b3JlZFdlYXRoZXJEYXRhKTtcblxuICAgZGlzcGxheUN1cnJlbnRXZWF0aGVyKGN1cnJlbnRXZWF0aGVyRGF0YSk7XG5cbiAgIGFkZFdlYXRoZXJGb3JlY2FzdDEoY3VycmVudFdlYXRoZXJEYXRhKTtcblxuICAgYWRkV2VhdGhlckZvcmVjYXN0MihjdXJyZW50V2VhdGhlckRhdGEpO1xuXG4gICBhZGRXZWF0aGVyRm9yZWNhc3QzKGN1cnJlbnRXZWF0aGVyRGF0YSk7IFxuXG4gIC8vICB0b2dnbGUoY3VycmVudFdlYXRoZXJEYXRhKTtcblxuICAvLyByZXR1cm4ganNvbkRhdGE7XG5cbn0gXG5cbi8vIGhvdyBjYW4gSSBzdG9yZSB3ZWF0aGVyIGRhdGEgb3V0c2lkZSBvZiB0aGUgZnVuY3Rpb24/IFxuXG4vLyBhbGwgSSBjYW4gdGhpbmsgb2YgaXMgYSBnbG9iYWwgdmFyaWFibGUsY1xuXG4vLyBmZXRjaERhdGEudGhlbihkYXRhID0+IGNvbnNvbGUubG9nKGRhdGEpKTsgXG5cbi8vIE9LIEkgYW0gYWJsZSB0byBnZXQgdGhlIHdlYXRoZXIgZGF0YSwgd2l0aGluIG15IGV2ZW50IGxpc3RlbmVyIGZ1bmN0aW9uIFxuIFxuXG4vLyAgbGV0IHdlYXRoZXJDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VycmVudC13ZWF0aGVyLWNvbnRhaW5lcicpOyBcblxuYXN5bmMgZnVuY3Rpb24gZGlzcGxheUN1cnJlbnRXZWF0aGVyKHdlYXRoZXIpIHsgXG5cbiAgICBsZXQgY3VycmVudFdlYXRoZXJJY29uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1cnJlbnQtd2VhdGhlci1pY29uJyk7IFxuICAgIC8vIGNsZWFyIERPTSwgcmVwbGFjZUNoaWxkcmVuIGJlZm9yZSBhcHBlbmRpbmcgbmV3XG5cbiAgICBsZXQgY3VycmVudEZvcmVjYXN0ID0gYXdhaXQgd2VhdGhlcjsgXG5cbiAgICAvLyBjb25zb2xlLmxvZyhjdXJyZW50Rm9yZWNhc3QubG9jYXRpb24pIFxuXG4gICAgY3VycmVudFdlYXRoZXJJY29uLnRleHRDb250ZW50ID0gJyc7IFxuXG5cblxuICAgIGxldCB3ZWF0aGVySWNvbiA9IG5ldyBJbWFnZSgpOyBcblxuICAgIHdlYXRoZXJJY29uLnNyYyA9IGN1cnJlbnRGb3JlY2FzdC5jdXJyZW50LmNvbmRpdGlvbi5pY29uO1xuXG4gICAgLy8gY29uc29sZS5sb2coY3VycmVudEZvcmVjYXN0LmN1cnJlbnQuY29uZGl0aW9uKVxuXG4gICAgbGV0IGxvY2F0aW9uRGF0YSA9IGN1cnJlbnRGb3JlY2FzdC5sb2NhdGlvbi5uYW1lO1xuXG4gICAgbGV0IHdlYXRoZXJEZXNjcmlwdGlvbkRhdGEgPSBjdXJyZW50Rm9yZWNhc3QuY3VycmVudC5jb25kaXRpb24udGV4dDsgXG5cbiAgICBsZXQgY3VycmVudFdlYXRoZXJOdW1iZXJEYXRhID0gY3VycmVudEZvcmVjYXN0LmN1cnJlbnQuZmVlbHNsaWtlX2Y7XG5cbiAgICBsZXQgd2luZERhdGEgPSBjdXJyZW50Rm9yZWNhc3QuY3VycmVudC53aW5kX21waDtcblxuICAgIGxldCB3aW5kRGlyZWN0aW9uID0gY3VycmVudEZvcmVjYXN0LmN1cnJlbnQud2luZF9kaXI7XG5cbiAgICBsZXQgcmFpbkluY2hlcyA9IGN1cnJlbnRGb3JlY2FzdC5jdXJyZW50LnByZWNpcF9pbjsgXG5cbiAgICBsZXQgaHVtaWRpdHlMZXZlbCA9IGN1cnJlbnRGb3JlY2FzdC5jdXJyZW50Lmh1bWlkaXR5O1xuXG4gICAgbGV0IG5ld0ltZyA9IG5ldyBJbWFnZSgpO1xuXG4gICAgbmV3SW1nLnNyYyA9IGN1cnJlbnRGb3JlY2FzdC5jdXJyZW50LmNvbmRpdGlvbi5pY29uO1xuXG4vLyAgICBsZXQgY3VycmVudFdlYXRoZXJJY29uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1cnJlbnQtd2VhdGhlci1pY29uJyk7IFxuXG4gICAvLyBkb250IGFwcGVuZCB1c2UgdmFyaWFibGUgYW5kIHRlbXBsYXRlIGxpdGVyYWxzLCBhcHBlbmRpbmcgbWF5IHN0b3AgdGhlIGFkZGluZyBvbnRvIHRvIGluc3RlYWQgb2YgcmVwbGFjaW5nLCBcblxuICAgY3VycmVudFdlYXRoZXJJY29uLmFwcGVuZENoaWxkKHdlYXRoZXJJY29uKTtcblxuICAgbGV0IGN1cnJlbnRXZWF0aGVyTG9jYXRpb25UZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1cnJlbnQtd2VhdGhlci1sb2NhdGlvbi1wJyk7IFxuXG4gICBjdXJyZW50V2VhdGhlckxvY2F0aW9uVGV4dC50ZXh0Q29udGVudCA9IGBMb2NhdGlvbjogJHtsb2NhdGlvbkRhdGF9YDtcblxuICAgbGV0IGN1cnJlbnRXZWF0aGVyRGVzY3JpcHRpb25UZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1cnJlbnQtd2VhdGhlci1kZXNjcmlwdGlvbi1wJyk7IFxuXG4gICBjdXJyZW50V2VhdGhlckRlc2NyaXB0aW9uVGV4dC50ZXh0Q29udGVudCA9IGBDb25kaXRpb25zOiAke3dlYXRoZXJEZXNjcmlwdGlvbkRhdGF9YFxuXG4gICBsZXQgY3VycmVudFdlYXRoZXJUZW1wRGF0YSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXJyZW50LXdlYXRoZXItdGVtcC1kYXRhJyk7IFxuXG4gICBjdXJyZW50V2VhdGhlclRlbXBEYXRhLnRleHRDb250ZW50ID0gYFRlbXByYXR1cmUgaXM6ICR7Y3VycmVudFdlYXRoZXJOdW1iZXJEYXRhfSBcXHUwMEIwRmA7XG5cbiAgIGxldCBjdXJyZW50V2VhdGhlcldpbmREYXRhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1cnJlbnQtd2VhdGhlci13aW5kLWRhdGEnKTsgXG5cbiAgIGN1cnJlbnRXZWF0aGVyV2luZERhdGEudGV4dENvbnRlbnQgPSBgV2luZCBTcGVlZDogJHt3aW5kRGF0YX0gbXBoYDtcblxuICAgbGV0IGN1cnJlbnRXZWF0aGVyV2luZERpcmVjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXJyZW50LXdlYXRoZXItd2luZC1kaXJlY3Rpb24tZGF0YScpO1xuXG4gICBjdXJyZW50V2VhdGhlcldpbmREaXJlY3Rpb24udGV4dENvbnRlbnQgPSBgV2luZCBEaXJlY3Rpb246ICR7d2luZERpcmVjdGlvbn1gO1xuXG4gICBsZXQgY3VycmVudFdlYXRoZXJSYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1cnJlbnQtd2VhdGhlci1yYWluLWluY2hlcy1kYXRhJyk7XG5cbiAgIGN1cnJlbnRXZWF0aGVyUmFpbi50ZXh0Q29udGVudCA9IGBSYWluOiAke3JhaW5JbmNoZXN9IGluYDtcblxuICAgbGV0IGN1cnJlbnRIdW1pZGl0eUxldmVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1cnJlbnQtd2VhdGhlci1odW1pZGl0eS1kYXRhJyk7IFxuXG4gICBjdXJyZW50SHVtaWRpdHlMZXZlbC50ZXh0Q29udGVudCA9IGBIdW1pZGl0eTogJHtodW1pZGl0eUxldmVsfSVgXG5cbn0gXG5cbi8vIG5lZWRzIHRvIHNvbWVob3cgYmUgY2xlYXJlZCBpbiB0aGUgc2VhcmNoIGJ0biBcblxuc2VhcmNoQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHsgXG5cbiAgICBjb25zb2xlLmxvZygnY2xpY2snKTtcblxuICAgIGxldCBpbnB1dFZhbHVlID0gc2VhcmNoQm94LnZhbHVlO1xuXG4gICAgZmV0Y2hEYXRhKGlucHV0VmFsdWUpO1xuXG59KTsgXG5cbi8vIGdyYWIgdGhlIGlucHV0IGZpZWxkcyB0aGF0IGhhdmUgRiBcblxuLy8gc2V0IHZhcmlhYmxlcyBmb3IgY3VycmVudCB0ZW1wIGluIGMsIGhpZ2ggdGVtcCBpbiBjLCBsb3cgdGVtcCBpbiBjIFxuXG4vLyBzZXQgdGhvc2UgdmFyaWFibGVzLCBcblxuLy8gc2V0IGEgdmFyaWFibGUgaXNDIHRvIGZhbHNlLCBcblxuLy8gY29uZGl0aW9uYWwgaWYgYyBpcyB0cnVlIGdyYWIgdGhlIHZhbHVlcywgdGhlbiByZXBsYWNlIHRoZW0gd2l0aCBjIHZhbHVlLCBcblxuLy8gaWYgZmFsc2UsIHN3aXRjaCB0aGVtIGJhY2sgdG8gRiwgXG5cbi8vIGNhbiBzd2l0Y2ggdGhlIHRlbXAsIFxuXG4vLyBidXQgaG93IGNhbiBJIHRvZ2dsZSBiYWNrIGFuZCBmb3J0aCBcblxuLy8gbWF5YmUgSSBzaG91bGQgbWFrZSBhbm90aGVyIHZhcmlhYmxlIGZvciBGIFxuXG5cbi8vIGxldCB0b2dnbGVUZW1wcmF0dXJlQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0YtQy10b2dnbGUtYnRuJyk7IFxuXG4vLyBsZXQgaXNDZWxjaXVzID0gZmFsc2U7IFxuXG4vLyAvLyBsZXQgaXNGID0gdHJ1ZTsgXG5cbi8vIEhFUkUhXG5cbi8vIGdyYWIgdGhlIGVsZW1lbnQsIEMgZWxlbWVudCBcblxubGV0IGNlbGNpdXNCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnQy10b2dnbGUtYnRuJyk7IFxuXG5jZWxjaXVzQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcblxuICAgIGxldCBjdXJyZW50Q2VsY2l1c1RlbXAgPSBzdG9yZWRXZWF0aGVyRGF0YS5jdXJyZW50LnRlbXBfYzsgXG5cbiAgICBsZXQgY3VycmVudFdlYXRoZXJUZW1wRGF0YSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXJyZW50LXdlYXRoZXItdGVtcC1kYXRhJyk7IFxuXG4gICAgY3VycmVudFdlYXRoZXJUZW1wRGF0YS50ZXh0Q29udGVudCA9IGBUZW1wcmF0dXJlIElzOiAke2N1cnJlbnRDZWxjaXVzVGVtcH0gQ2A7IFxuXG4gICAgbGV0IGRheTFIaWdoVGVtcCA9IHN0b3JlZFdlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRheS5tYXh0ZW1wX2M7XG5cbiAgICBsZXQgZGF5MUxvd1RlbXAgPSBzdG9yZWRXZWF0aGVyRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXkubWludGVtcF9jO1xuXG4gICAgbGV0IGhpZ2hMb3dUZW1wRGF0YSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dC1mb3JlY2FzdC1kYXkxLWhpZ2gtbG93Jyk7IFxuXG4gICAgaGlnaExvd1RlbXBEYXRhLnRleHRDb250ZW50ID0gYEhpZ2ggdG9kYXkgaXM6ICR7ZGF5MUhpZ2hUZW1wfVxcdTAwQjBDIExvdyB0b2RheSBpczogJHtkYXkxTG93VGVtcH1cXHUwMEIwQ2A7XG5cbiAgICBsZXQgZGF5MkhpZ2hUZW1wID0gc3RvcmVkV2VhdGhlckRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMV0uZGF5Lm1heHRlbXBfYztcblxuICAgIGxldCBkYXkyTG93VGVtcCA9IHN0b3JlZFdlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzFdLmRheS5taW50ZW1wX2M7IFxuXG4gICAgbGV0IGhpZ2hMb3dUZW1wRGF0YURheTIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXQtZm9yZWNhc3QtZGF5Mi1oaWdoLWxvdycpO1xuXG4gICAgaGlnaExvd1RlbXBEYXRhRGF5Mi50ZXh0Q29udGVudCA9IGBIaWdoIFRvZGF5IGlzOiAke2RheTJIaWdoVGVtcH1cXHUwMEIwQyBMb3cgdG9kYXkgaXM6ICR7ZGF5Mkxvd1RlbXB9XFx1MDBCMENgOyAgXG5cbiAgICAvLyBcblxuICAgIGxldCBkYXkzSGlnaFRlbXAgPSBzdG9yZWRXZWF0aGVyRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsyXS5kYXkubWF4dGVtcF9jO1xuXG4gICAgbGV0IGRheTNMb3dUZW1wID0gc3RvcmVkV2VhdGhlckRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMl0uZGF5Lm1pbnRlbXBfYztcblxuICAgIGxldCBoaWdoTG93VGVtcERhdGFEYXkzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0LWZvcmVjYXN0LWRheTMtaGlnaC1sb3cnKTtcblxuICAgIGhpZ2hMb3dUZW1wRGF0YURheTMudGV4dENvbnRlbnQgPSBgSGlnaCB0b2RheSBpczogJHtkYXkzSGlnaFRlbXB9XFx1MDBCMEMgTG93IHRvZGF5IGlzOiAke2RheTNMb3dUZW1wfVxcdTAwQjBDYDtcbiAgICBcbn0pOyBcblxubGV0IGZCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnRi10b2dnbGUtYnRuJyk7IFxuXG5mQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcblxuICAgIGxldCBjdXJyZW50RlRlbXAgPSBzdG9yZWRXZWF0aGVyRGF0YS5jdXJyZW50LnRlbXBfZjsgXG5cbiAgICBsZXQgY3VycmVudFdlYXRoZXJUZW1wRGF0YSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXJyZW50LXdlYXRoZXItdGVtcC1kYXRhJyk7XG5cbiAgICBjdXJyZW50V2VhdGhlclRlbXBEYXRhLnRleHRDb250ZW50ID0gYFRlbXByYXR1cmUgSXM6ICR7Y3VycmVudEZUZW1wfVxcdTAwQjBGYDtcblxuICAgIGxldCBkYXkxSGlnaFRlbXAgPSBzdG9yZWRXZWF0aGVyRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXkubWF4dGVtcF9mO1xuXG4gICAgbGV0IGRheTFMb3dUZW1wID0gc3RvcmVkV2VhdGhlckRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uZGF5Lm1pbnRlbXBfZjtcblxuICAgIGxldCBoaWdoTG93VGVtcERhdGEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXQtZm9yZWNhc3QtZGF5MS1oaWdoLWxvdycpOyBcblxuICAgIGhpZ2hMb3dUZW1wRGF0YS50ZXh0Q29udGVudCA9IGBIaWdoIHRvZGF5IGlzOiAke2RheTFIaWdoVGVtcH1cXHUwMEIwRiBMb3cgdG9kYXkgaXM6ICR7ZGF5MUxvd1RlbXB9XFx1MDBCMEZgOyBcblxuICAgIGxldCBkYXkySGlnaFRlbXAgPSBzdG9yZWRXZWF0aGVyRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsxXS5kYXkubWF4dGVtcF9mO1xuXG4gICAgbGV0IGRheTJMb3dUZW1wID0gc3RvcmVkV2VhdGhlckRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMV0uZGF5Lm1pbnRlbXBfZjsgXG5cbiAgICBsZXQgaGlnaExvd1RlbXBEYXRhRGF5MiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dC1mb3JlY2FzdC1kYXkyLWhpZ2gtbG93Jyk7XG5cbiAgICBoaWdoTG93VGVtcERhdGFEYXkyLnRleHRDb250ZW50ID0gYEhpZ2ggVG9kYXkgaXM6ICR7ZGF5MkhpZ2hUZW1wfVxcdTAwQjBGIExvdyB0b2RheSBpczogJHtkYXkyTG93VGVtcH1cXHUwMEIwRmA7IFxuXG4gICAgLy8gXG5cbiAgICBsZXQgZGF5M0hpZ2hUZW1wID0gc3RvcmVkV2VhdGhlckRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMl0uZGF5Lm1heHRlbXBfZjtcblxuICAgIGxldCBkYXkzTG93VGVtcCA9IHN0b3JlZFdlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzJdLmRheS5taW50ZW1wX2Y7XG5cbiAgICBsZXQgaGlnaExvd1RlbXBEYXRhRGF5MyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dC1mb3JlY2FzdC1kYXkzLWhpZ2gtbG93Jyk7XG5cbiAgICBoaWdoTG93VGVtcERhdGFEYXkzLnRleHRDb250ZW50ID0gYEhpZ2ggdG9kYXkgaXM6ICR7ZGF5M0hpZ2hUZW1wfVxcdTAwQjBGIExvdyB0b2RheSBpczogJHtkYXkzTG93VGVtcH1cXHUwMEIwRmA7XG4gICAgXG59KVxuXG5cbi8vIHRvZ2dsZVRlbXByYXR1cmVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4geyBcbi8vICAgICAgaXNDZWxjaXVzID0gdHJ1ZTtcblxuXG4vLyAgICAgLy8gIGlzRiA9IGZhbHNlO1xuXG4vLyAgICAgbGV0IHggPSBzZWFyY2hCb3gudmFsdWU7IFxuICAgIFxuLy8gICAgLy8gc2V0IHZhcmlhYmxlIGZvciBjdXJyZW50IHRlbXAgaW4gY1xuXG4vLyAgICAvLyBncmFiIHRoZSBpbnB1dCBmaWVsZCBmb3IgY3VycmVudCB0ZW1wIFxuXG4vLyAgICAvLyBzaG91bGQgSSBoYXZlIHR3byBkaWZmZXJlbnQgYnRucywgXG5cbi8vICAgIC8vIGlmIEYgY2xpY2tlZCBhcHBlbmQsIGYgdmFsdWVzIFxuXG4vLyAgICAvLyBpZiBjIGNsaWNrZWQsIGFwcGVuZCBjIHZhbHVlcywgXG5cbi8vICAgIC8vIGhvdyB0byBmbGlwIGEgYm9vbGVhbiB2YWx1ZSBiYXNlZCBvbiBidG4gY2xpY2tcblxuLy8gICAgLy8gSSB0aGluayB0aGUgYmVzdCB3YXkgaXMgdG8ga2VlcCBhIHNlcGVyYXRlIGJ0biwgXG5cbi8vICAgIC8vIGlkZWFsbHkgSSB3b3VsZCBsaWtlIHRvIGNvbXBsZXRlIHRoaXMgd2l0aGluIHRoZSBmdW5jdGlvbiwgXG5cbi8vICAgIC8vIGJ1dCBtYXkgYmUgZWFzaWVyIHRvIG1ha2UgdHdvIGJ0bnMsIGhpdCB0aGUgYyBidG4gZGlzcGxheSBjIHRlbXAgZGF0YSBpbiBhbGwgdGhlIGNvcnJlY3Qgc3BvdHMgXG5cbi8vICAgIC8vIGlmIGYgaXMgaGl0IHRoZW4gZGlzcGxheSBGIGluIGFsbCB0aGUgcmlnaHQgcGxhY2VzLCBcblxuLy8gICAgLy8gSSB3aWxsIG1ha2UgdHdvIGJ1dHRvbnMsIGV2ZW50IGxpc3RlbmVyLCBpZiBmIGNsaWNrZWQgZGlwbHNheSBmIHRlbXAgZGF0YSwgaWYgYyBjbGlja2VkLCBkaXNwbGF5IGMgdmFsdWVzLCBncmFiYmluZyB0aGUgaW5wdXQgZmllbGRzLCBhbmQgdXNpbmcgJHt9XG5cbi8vICAgIC8vIHRvIGFwcGVuZCB2YXJpYWJsZXMgdG8gdGhlIERPTS4gXG5cbi8vICAgIGxldCBjdXJyZW50Q2VsY2l1c1RlbXAgPSBzdG9yZWRXZWF0aGVyRGF0YS5jdXJyZW50LnRlbXBfYzsgXG5cbi8vICAgIGxldCBjdXJyZW50RlRlbXAgPSBzdG9yZWRXZWF0aGVyRGF0YS5jdXJyZW50LnRlbXBfZjsgXG5cbi8vICAgIGxldCBjdXJyZW50V2VhdGhlclRlbXBEYXRhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1cnJlbnQtd2VhdGhlci10ZW1wLWRhdGEnKTsgXG5cbi8vICAgIGNvbnNvbGUubG9nKGN1cnJlbnRDZWxjaXVzVGVtcCk7IFxuXG4vLyAgICBjb25zb2xlLmxvZyhjdXJyZW50RlRlbXApOyBcblxuLy8gICAgaWYgKGlzQ2VsY2l1cykgeyBcbi8vICAgICBjdXJyZW50V2VhdGhlclRlbXBEYXRhLnRleHRDb250ZW50ID0gYCR7Y3VycmVudENlbGNpdXNUZW1wfWA7XG4vLyAgICAgLy8gaXNDZWxjaXVzID0gZmFsc2U7XG4vLyAgICB9IGVsc2UgaWYgKCFpc0NlbGNpdXMpIHsgXG4vLyAgICAgY3VycmVudFdlYXRoZXJUZW1wRGF0YS50ZXh0Q29udGVudCA9IGAke2N1cnJlbnRGVGVtcH1gO1xuLy8gICAgfVxuXG4vLyAgICBpc0NlbGNpdXMgPSBmYWxzZTtcblxuLy8gICAgY29uc29sZS5sb2coaXNDZWxjaXVzKTtcbi8vIC8vICAgIH0gZWxzZSAoaXNGKSB7IFxuLy8gLy8gICAgIGN1cnJlbnRXZWF0aGVyVGVtcERhdGEudGV4dENvbnRlbnQgPSBgJHtjdXJyZW50RlRlbXB9YDtcbi8vIC8vICAgIH1cbiAgICBcbi8vICAgICAvLyBjb25zb2xlLmxvZyhzdG9yZWRXZWF0aGVyRGF0YS5jdXJyZW50LmNvbmRpdGlvbik7XG4vLyAvLyBmZXRjaERhdGEudGhlbihkYXRhID0+IGNvbnNvbGUubG9nKGRhdGEpKTtcbi8vIH0pO1xuXG5hc3luYyBmdW5jdGlvbiBhZGRXZWF0aGVyRm9yZWNhc3QxKHdlYXRoZXIpIHsgXG4gICAgbGV0IGZvcmVjYXN0RGF0YSA9IGF3YWl0IHdlYXRoZXI7IFxuXG4gICAgIC8vIGNvbnNvbGUubG9nKGZvcmVjYXN0RGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXkpO1xuXG4gICAgLy8gY29uc29sZS5sb2coZm9yZWNhc3REYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRheS5jb25kaXRpb24uaWNvbik7XG5cbiAgICBsZXQgaW5wdXRGb3JJbWdEYXkxID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0LWZvcmVjYXN0LWRheTEtaWNvbicpOyBcblxuICAgIGlucHV0Rm9ySW1nRGF5MS50ZXh0Q29udGVudCA9ICcnO1xuXG4gICAgbGV0IGRheTFEYXRlID0gZm9yZWNhc3REYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRhdGU7IFxuXG4gICAgbGV0IGRheTFJY29uID0gbmV3IEltYWdlKCk7IFxuXG4gICAgbGV0IGRheTFIaWdoVGVtcCA9IGZvcmVjYXN0RGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXkubWF4dGVtcF9mO1xuXG4gICAgbGV0IGRheTFMb3dUZW1wID0gZm9yZWNhc3REYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRheS5taW50ZW1wX2Y7XG5cbiAgICBsZXQgY2hhbmNlT2ZSYWluID0gZm9yZWNhc3REYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRheS5kYWlseV9jaGFuY2Vfb2ZfcmFpbjtcblxuICAgIGxldCB1dkluZGV4ID0gZm9yZWNhc3REYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRheS51djtcblxuICAgIGxldCBjaGFuY2VPZlNub3cgPSBmb3JlY2FzdERhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uZGF5LmRhaWx5X2NoYW5jZV9vZl9zbm93O1xuXG4gICAgLy8gZGF5MUljb24uc3R5bGUuaGVpZ2h0ID0gJzEzMHB4JztcblxuICAgIGRheTFJY29uLnNyYyA9IGZvcmVjYXN0RGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXkuY29uZGl0aW9uLmljb247IFxuICAgIFxuICAgIC8vIGxldCBpbnB1dEZvckltZ0RheTEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXQtZm9yZWNhc3QtZGF5MS1pY29uJyk7IFxuXG4gICAgaW5wdXRGb3JJbWdEYXkxLmFwcGVuZChkYXkxSWNvbik7XG5cbiAgICBsZXQgZGF0ZUFuZEljb25EYXRhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0LWZvcmVjYXN0LWRheTEtZGF0YS1kYXRlJyk7IFxuXG4gICAgZGF0ZUFuZEljb25EYXRhLnRleHRDb250ZW50ID0gYERhdGUgdG9kYXkgaXM6ICR7ZGF5MURhdGV9YDsgXG5cbiAgICBsZXQgaGlnaExvd1RlbXBEYXRhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0LWZvcmVjYXN0LWRheTEtaGlnaC1sb3cnKTsgXG5cbiAgICBoaWdoTG93VGVtcERhdGEudGV4dENvbnRlbnQgPSBgSGlnaCB0b2RheSBpczogJHtkYXkxSGlnaFRlbXB9XFx1MDBCMEYgTG93IHRvZGF5IGlzOiAke2RheTFMb3dUZW1wfVxcdTAwQjBGYDtcblxuICAgIGxldCBjaGFuY2VPZlJhaW5EYXRhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0LWZvcmVjYXN0LWRheS0xLXJhaW4tY2hhbmNlJyk7XG4gICAgXG4gICAgY2hhbmNlT2ZSYWluRGF0YS50ZXh0Q29udGVudCA9IGBDaGFuY2Ugb2YgUmFpbjogJHtjaGFuY2VPZlJhaW59JWAgXG5cbiAgICBsZXQgdXZJbmRleERhdGEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXQtZm9yZWNhc3QtZGF5LTEtdXYtaW5kZXgnKTtcblxuICAgIHV2SW5kZXhEYXRhLnRleHRDb250ZW50ID0gYFVWIEluZGV4IGlzOiAke3V2SW5kZXh9YDtcblxuICAgIGxldCBjaGFuY2VPZlNub3dEYXRhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0LWZvcmVjYXN0LWRheS0xLXNub3ctY2hhbmNlJyk7IFxuXG4gICAgY2hhbmNlT2ZTbm93RGF0YS50ZXh0Q29udGVudCA9IGBDaGFuY2Ugb2YgU25vdzogJHtjaGFuY2VPZlNub3d9JWBcblxufSBcblxuXG5hc3luYyBmdW5jdGlvbiBhZGRXZWF0aGVyRm9yZWNhc3QyKHdlYXRoZXIpIHsgXG4gICAgbGV0IGZvcmVjYXN0RGF0YTIgPSBhd2FpdCB3ZWF0aGVyOyBcblxuICAgIGNvbnNvbGUubG9nKGZvcmVjYXN0RGF0YTIpO1xuXG4gICAgLy8gY29uc29sZS5sb2coZm9yZWNhc3REYXRhMi5mb3JlY2FzdC5mb3JlY2FzdGRheVsxXS5kYXRlKTtcblxuICAgIGxldCBpY29uRGF0YSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dC1mb3JlY2FzdC1kYXkyLWRhdGEtaWNvbicpO1xuXG4gICAgaWNvbkRhdGEudGV4dENvbnRlbnQgPSAnJztcblxuICAgIGxldCBkYXkyRGF0ZSA9IGZvcmVjYXN0RGF0YTIuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMV0uZGF0ZTsgXG5cbiAgICBsZXQgZGF5Mkljb25JbWcgPSBuZXcgSW1hZ2UoKTsgXG5cbiAgICBkYXkySWNvbkltZy5zcmMgPSBmb3JlY2FzdERhdGEyLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzFdLmRheS5jb25kaXRpb24uaWNvbjtcblxuICAgIGxldCBkYXkySGlnaFRlbXAgPSBmb3JlY2FzdERhdGEyLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzFdLmRheS5tYXh0ZW1wX2Y7XG5cbiAgICBsZXQgZGF5Mkxvd1RlbXAgPSBmb3JlY2FzdERhdGEyLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzFdLmRheS5taW50ZW1wX2Y7XG5cbiAgICBsZXQgZGF5MkNoYW5jZU9mUmFpbiA9IGZvcmVjYXN0RGF0YTIuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMV0uZGF5LmRhaWx5X2NoYW5jZV9vZl9yYWluO1xuXG4gICAgbGV0IGRheTJVVkluZGV4ID0gZm9yZWNhc3REYXRhMi5mb3JlY2FzdC5mb3JlY2FzdGRheVsxXS5kYXkudXY7IFxuXG4gICAgbGV0IGRheTJDaGFuY2VPZlNub3cgPSBmb3JlY2FzdERhdGEyLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzFdLmRheS5kYWlseV9jaGFuY2Vfb2Zfc25vdztcblxuICAgIC8vIGNvbnNvbGUubG9nKGRheTJDaGFuY2VPZlNub3cpO1xuXG4gICAgLy8gY29uc29sZS5sb2coZGF5Mkljb24pO1xuXG4gICAgbGV0IGRhdGVEYXRhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0LWZvcmVjYXN0LWRheTItZGF0YS1kYXRlJyk7XG5cbiAgICBkYXRlRGF0YS50ZXh0Q29udGVudCA9IGBEYXRlIFRvZGF5IGlzOiAke2RheTJEYXRlfWA7IFxuXG4gICAgLy8gbGV0IGljb25EYXRhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0LWZvcmVjYXN0LWRheTItZGF0YS1pY29uJyk7XG5cbiAgICBpY29uRGF0YS5hcHBlbmQoZGF5Mkljb25JbWcpOyBcblxuICAgIGxldCBoaWdoTG93VGVtcERhdGEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXQtZm9yZWNhc3QtZGF5Mi1oaWdoLWxvdycpO1xuXG4gICAgaGlnaExvd1RlbXBEYXRhLnRleHRDb250ZW50ID0gYEhpZ2ggVG9kYXkgaXM6ICR7ZGF5MkhpZ2hUZW1wfVxcdTAwQjBGIExvdyB0b2RheSBpczogJHtkYXkyTG93VGVtcH1cXHUwMEIwRmA7IFxuXG4gICAgbGV0IGNoYW5jZU9mUmFpbkRhdGEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXQtZm9yZWNhc3QtZGF5Mi1yYWluLWNoYW5jZScpO1xuXG4gICAgY2hhbmNlT2ZSYWluRGF0YS50ZXh0Q29udGVudCA9IGBDaGFuY2Ugb2YgUmFpbjogJHtkYXkyQ2hhbmNlT2ZSYWlufSVgOyBcblxuICAgIGxldCB1dkluZGV4RGF0YSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dC1mb3JlY2FzdC1kYXkyLXV2LWluZGV4Jyk7XG5cbiAgICB1dkluZGV4RGF0YS50ZXh0Q29udGVudCA9IGBVViBJbmRleCBpczogJHtkYXkyVVZJbmRleH1gOyBcblxuICAgIGxldCBjaGFuY2VPZlNub3dEYXRhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0LWZvcmVjYXN0LWRheTItc25vdy1jaGFuY2UnKTtcblxuICAgIGNoYW5jZU9mU25vd0RhdGEudGV4dENvbnRlbnQgPSBgQ2hhbmNlIG9mIFNub3c6ICR7ZGF5MkNoYW5jZU9mU25vd30lYDtcblxufSBcblxuYXN5bmMgZnVuY3Rpb24gYWRkV2VhdGhlckZvcmVjYXN0Myh3ZWF0aGVyKSB7IFxuICAgIGxldCBmb3JlY2FzdERhdGEzID0gd2VhdGhlcjsgXG5cbiAgICBsZXQgZGF5M0RhdGUgPSBmb3JlY2FzdERhdGEzLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzJdLmRhdGU7IFxuXG4gICAgbGV0IGRheTNJbWdJY29uID0gbmV3IEltYWdlKCk7IFxuXG4gICAgbGV0IGljb25EYXRhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0LWZvcmVjYXN0LWRheTMtaWNvbicpO1xuXG4gICAgaWNvbkRhdGEudGV4dENvbnRlbnQgPSAnJztcblxuXG4gICAgZGF5M0ltZ0ljb24uc3JjID0gZm9yZWNhc3REYXRhMy5mb3JlY2FzdC5mb3JlY2FzdGRheVsyXS5kYXkuY29uZGl0aW9uLmljb247XG5cbiAgICBsZXQgZGF5M0hpZ2hUZW1wID0gZm9yZWNhc3REYXRhMy5mb3JlY2FzdC5mb3JlY2FzdGRheVsyXS5kYXkubWF4dGVtcF9mO1xuXG4gICAgbGV0IGRheTNMb3dUZW1wID0gZm9yZWNhc3REYXRhMy5mb3JlY2FzdC5mb3JlY2FzdGRheVsyXS5kYXkubWludGVtcF9mO1xuXG4gICAgbGV0IGRheTNSYWluQ2hhbmNlID0gZm9yZWNhc3REYXRhMy5mb3JlY2FzdC5mb3JlY2FzdGRheVsyXS5kYXkuZGFpbHlfY2hhbmNlX29mX3JhaW47XG5cbiAgICBsZXQgZGF5M1VWSW5kZXggPSBmb3JlY2FzdERhdGEzLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzJdLmRheS51djtcblxuICAgIGxldCBkYXkzQ2hhbmNlT2ZTbm93ID0gZm9yZWNhc3REYXRhMy5mb3JlY2FzdC5mb3JlY2FzdGRheVsyXS5kYXkuZGFpbHlfY2hhbmNlX29mX3Nub3c7XG5cbiAgICBjb25zb2xlLmxvZyhkYXkzQ2hhbmNlT2ZTbm93KTtcblxuICAgIGxldCBkYXRlRGF0YSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dC1mb3JlY2FzdC1kYXkzLWRhdGEtZGF0ZScpO1xuXG4gICAgZGF0ZURhdGEudGV4dENvbnRlbnQgPSBgRGF0ZSBUb2RheSBpczogJHtkYXkzRGF0ZX1gOyBcblxuICAgIC8vIGxldCBpY29uRGF0YSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dC1mb3JlY2FzdC1kYXkzLWljb24nKTtcblxuICAgIGljb25EYXRhLmFwcGVuZChkYXkzSW1nSWNvbik7IFxuXG4gICAgbGV0IGhpZ2hMb3dUZW1wRGF0YSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dC1mb3JlY2FzdC1kYXkzLWhpZ2gtbG93Jyk7XG5cbiAgICBoaWdoTG93VGVtcERhdGEudGV4dENvbnRlbnQgPSBgSGlnaCB0b2RheSBpczogJHtkYXkzSGlnaFRlbXB9XFx1MDBCMEYgTG93IHRvZGF5IGlzOiAke2RheTNMb3dUZW1wfVxcdTAwQjBGYDtcblxuICAgIGxldCBjaGFuY2VPZlJhaW5EYXRhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0LWZvcmVjYXN0LWRheTMtcmFpbi1jaGFuY2UnKTtcblxuICAgIGNoYW5jZU9mUmFpbkRhdGEudGV4dENvbnRlbnQgPSBgQ2hhbmNlIG9mIFJhaW46ICR7ZGF5M1JhaW5DaGFuY2V9JWAgXG5cbiAgICBsZXQgdXZJbmRleERhdGEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXQtZm9yZWNhc3QtZGF5My11di1pbmRleCcpOyBcblxuICAgIHV2SW5kZXhEYXRhLnRleHRDb250ZW50ID0gYFVWIEluZGV4IGlzOiAke2RheTNVVkluZGV4fWA7IFxuXG4gICAgbGV0IGNoYW5jZU9mU25vd0RhdGEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXQtZm9yZWNhc3QtZGF5My1zbm93LWNoYW5jZScpO1xuXG4gICAgY2hhbmNlT2ZTbm93RGF0YS50ZXh0Q29udGVudCA9IGBDaGFuY2Ugb2YgU25vdzogJHtkYXkzQ2hhbmNlT2ZTbm93fSVgO1xuXG59XG5cbi8vIFNvIEkgbGlrZSB3YXZlcyBwcm9qZWN0IGxvb2ssIG5leHQgSSBXaWxsIGZpZ3VyZSBvdXQgYSB3YXkgXG5cbi8vIG5leHQgSSB3aWxsIGdldCB0aGUgMyBkYXkgZm9yZWNhc3QsIFxuXG4vLyBJIGFzc3VtZSBpdCB3b3VsZCBiZSB0aGUgc2FtZSBwcm9jZXNzIGZldGNoIHRoZSBkYXRhIFxuXG4vLyBrZXkgaW50byB0aGUgdmFsdWUgdGhlIGN1cnJlbnQgZm9yZWNhc3QgXG5cbi8vIEkgdGhpbmsgSSBhbHNvIG5lZWQgdG8gd3JpdGUgYSBmdW5jdGlvbiwgXG5cbi8vIHRoYXQgd2lsbCBkaXNwbGF5IHRoZSB0aHJlZSBkYXkgZm9yZWNhc3QsIFxuXG4vLyBwYXNzIHRoZSB3ZWF0aGVyIGRhdGEgdG8gdGhhdCB5b3UgZ290IGZyb20gdGhlIGZldGNoIGRhdGEgZnVuY3Rpb24gXG5cbi8vIHRvIHRoZSBvdGhlciBmdW5jdGlvbiB3aGljaCB3aWxsIGp1c3QgZGlzcGxheSBmb3JlY2FzdCB3ZWFodGVyIFxuXG4vLyBmb3IgMyBkYXlzLCBcblxuLy8gcHJvamVjdCwgMyBkYXkgZm9yZWNhc3QsIFxuXG4vLyB0b2dnbGUgY2VsaXVzIGFuZCBmIFxuXG4vLyBmaW5kIHdheSB0byBjbGVhciBET00gYmVmb3JlIGFkZGluZyBuZXcgdmFsdWVzLCBubyBhZGRpbmcgb24gXG5cbi8vIGEgd2F5IHRvIGltcG9ydCBpY29ucyBhbmQgZ2V0IHRoZSBjb3JyZWN0IHBhdGggXG5cbi8vIGljb25zIHNlZW1zIHRvIHdvcmtpbmchISBcblxuLy8gbWFrZSB0aGUgd2VhdGhlciBkZXNjcmlwdGlvbiBlbGVtZW50cyBhcHBlYXIgd2l0aCB0aGUgRE9NLCBcblxuLy8gaW5zdGVhZCBvZiB0aGUgaHRtbCwgXG5cbi8vIGZpbmQgYSB3YXkgbm93IHRvIGtleSBpbnRvIGFuZCBnZXQgZm9yZWNhc3QgXG5cbi8vIG5leHQgc3RlcCBpcyB0byBrZXkgaW50byBkYXRhLCBhbmQgZ2V0IHRoZSBmb3JlY2FzdCBcblxuLy8ga2V5IGludG8gY2VydGFpbiBkYXlzLCBtYWtlIGEgSFRNTCBjYXJkLCBcblxuLy8gYXBwZW5kIHRoZSBkYXRhIHRvIHRoZSBjYXJkLCBhbG9uZyB3aXRoIGxvZ29zIGZvciB0aGUgd2VhdGhlciwgXG5cbi8vIHRoZW4gaW5zdGVhZCBvZiBIVE1MIE1lc3NhZ2VzLCB1c2UgRE9NIHBsdXMgYXBwZW5kIGRhdGEgXG5cbi8vIG9uY2UgY3VycmVudCBhbmQgMyBkYXkgZm9yZWNhc3QgaXMgc2V0LCBcblxuLy8gZmluZCBhIHdheSBvciB3cml0ZSBhIGZ1bmN0aW9uIHRoYXQgY2FuIGNoYW5nZWQgZiBkYXRhIHRvIGMgXG5cbi8vIHN0eWxlIHVwIGFuZCBkb25lLCBcblxuLy8gV2Uga25vdyB3aGF0IHdlIG5lZWQgdG8gZG8sIGZpcnN0IEkgd291bGQgZ2V0IHRoZSBjb3JyZWN0IFxuXG4vLyBmb3JlY2FzdCBkYXRhIGFuZCBhcHBlbmQgaW4gdGhlIGNvcnJlY3Qgc3BvdCwgXG5cbi8vIHRoZW4gZml4IHRoZSBjdXJyZW50IHdlYXRoZXIgdG8gdXNlIERPTSBkaXNwbGF5ZWQgdGV4dCwgXG5cbi8vIGFsb25nIHdpdGggYXR0YWNoaW5nIHRoZSBpY29uLCBcblxuLy8gc3RhcnQgdGhlcmUsIGZpcnN0IGxldHMgZmluZCB0aGUgY29ycmVjdCBmb3JlY2FzdCBmb3IgdGhlIDMgZGF5LCBcblxuLy8gb2sgbGV0cyBmaXJzdCBnbyB0aGUgSFRNTCwgbmFkIG1ha2UgdGhlIG1hcmt1cCwgXG5cbi8vIHdlIHdpbGwgbmVlZCBhIGNvbnRhaW5lciwgXG5cbi8vIHRoYXQgY2FuIGhvbGQgMyBjYXJkcywgZGlzcGxheWVkIGluIGZsZXggc28gdGhleSBhcmUgaW4gYSByb3csIFxuXG4vLyBhcHBlbmQgdGhlIHZhbHVlcyB0byB0aGUgc3BlY2lmaWMgaW5wdXQgZmllbGRzLCBcblxuLy8gb2sgd2UgZ290IHRoZSBtYXJrdXAgXG5cbi8vIG5vdyBJIHRoaW5rIEkgV291bGQgcGFzcyB0aGUgZGF0YSB0byB0aGUgb3RoZXIgZnVuY3Rpb24sIFxuXG4vLyBvayBvdGhlciBmdW5jdGlvbiBjYW4gYWNjZXB0IHRoZSBkYXRhLCBcblxuLy8gYWRkIHRoZSBwIGVsZW1lbnRzIG9uIGVhY2ggY2FyZCwgYW5kIGFwcGVuZCBkYXRhIGFsb25nIHdpdGggYSBtZXNzYWdlIFxuXG4vLyBwIGVsZW1lbnQgYW5kIGFwcGVuZCB0aGUgZGF0ZSBhbmQgaWNvbiBmaXJzdCBpbiB0aGUgc2FtZSBsaW5lIFxuXG4vLyBtYWtlIGEgbmV3IGZ1bmN0aW9uIGZvciBlYWNoIGZvcmVjYXN0IGRheSBcblxuLy8ganVzdCB0byBtb2R1bGFyaXplIHRoaW5ncyBtb3JlIGFuZCB0byBhdm9pZCBcblxuLy8gaGF2aW5nIG9uZSBmdW5jdGlvbiB0byBhbGwgdGhlIHdvcmsgYW5kIHRoYXQgZnVuY3Rpb24gd2lsbCBcblxuLy8gYmUgdG9vIGJpZywgb25lIGZ1bmN0aW9uIGZvciBlYWNoIGRheSwgXG5cbi8vIHBhc3MgdGhlIGRhdGEgdG8gdGhvc2UgMyBmdW5jdGlvbnMsIFxuXG4vLyBpdHMgb25seSA0IGNhbGxzLCBvbmUgdG8gY3VycmVudCBcblxuLy8gb25lIHRvIGN1cnJlbnQsIGRheTEgMiAzIFxuXG4vLyBvayBub3cgdXNlIGEgZnVuY3Rpb24gdG8gcHJpbnQgdGhlIGRhdGEgZm9yIGRheSAyIGZvcmVjYXN0IFxuXG4vLyB1c2UgYSBkaWZmZXJlbnQgZnVuY3Rpb24gc28gaXQgZG9lcyBub3QgZ2V0IHRvbyBiaWcgXG5cbi8vIGFub3RoZXIgaXNzdWUgaXMgZ2V0dGluZyB0aGUgZGVncmVlcyBzeW1ib2wgdG8gc2hvdywgXG5cbi8vIGFuZCBpZiB0aGUgdXNlciBpbnB1dHMgYW5vdGhlciBzZWFyY2gsIFxuXG4vLyBjbGVhciB0aGUgRE9NIHRvIG1ha2Ugd2F5IGZvciB0aGUgbmV3LiBcblxuLy8gY2hhbmdlIGJhY2tncm91bmQgYmFzZWQgb24gY29uZGl0aW9uIHRleHQgXG5cbi8vIGlmID09PSBzdW5ueSBcblxuLy8gYXBwZW5kIHN1bm55IGJhY2tncm91bmQgcGljdHVyZSwgXG5cbi8vIGlmID09PSByYWlueSBcblxuLy8gYXBwZW5kIHJhaW55IHBpYyBcblxuLy8gSSB0aGluayBldmVyeXRoaW5nIGlzIGdvaW5nIG9rLCBJIHdpbGwgbWFrZSB0aGUgd2VhdGhlciBkYXRhIGZvciB0aGUgbGFzdCBkYXkgb2YgdGhlIGZvcmVjYXN0LCBjb21taXQsIHRoZW4gZml4IHRoZSBodG1sIGFib3ZlIHRvIHVzZSBvbmx5IHRoZSBET00gXG5cbi8vIEkgd2lsbCBmaXggdGhlIGh0bWwgdG8gdXNlIERPTSBPbmx5LCBcblxuLy8gdGhlbiB3b3JrIG9uIGNsZWFyaW5nIHRoZSBET00sIHNvIHZhbHVlcyBkbyBub3QgYWRkIG9udG8gXG5cbi8vIEhUTUwgSXMgc2V0LCBzbyBob3cgZG8gSSBjbGVhciB0aGUgdmFsdWVzIGZyb20gdGhlIERPTSwgXG5cbi8vIGFkZCBuZXcgYnV0IHJlcGxhY2Ugb2xkLCBcblxuLy8gaGF2aW5nIGlzc3VlIGNsZWFyaW5nIHRoZSBET00sIFxuXG4vLyBJIHRob3VnaHQgY2xlYXJuaW5nIGl0IGJlZm9yZSB0aGUgZnVuY3Rpb24gY2FsbCBvciBpbnNpZGUgdGhlIGZ1bmN0aW9udGhhdCB3YXMgY2FsbGVkIFxuXG4vLyB3aGVyZSBjYW4gSSBjbGVhciB0aGUgRE9NLCBcblxuLy8gaXQgbmVlZHMgdG8gYmUgaW4gdGhlIHJpZ2h0IHNwb3QsIFxuXG4vLyBjbGVhciB0aGUgRE9NIG9uY2UgdGhlIHNlYXJjaCBidG4gaXMgcHJlc3NlZCwgXG5cbi8vIGNsZWFyIG9sZCBkYXRhLCBhZGQgdGhlIG5ldywgXG5cbi8vIE9LIEkgd2FzIGFibGUgdG8gZmlndXJlIG91dCB0aGUgZG9tIGlzc3VlLCBpdCB3YXMgbW9yZSB0aGUgaWNvbnMgdGhhdCBJIGhhZCB0byByZXBsYWNlLCBpbnN0ZWFkIG9mIGNsZWFybmluZyB0aGUgZG9tIGVhY2ggdGltZSwgXG5cbi8vIHNldHRpbmcgdGhlIHRleHQgQ29udGVudCBvZiB0aGUgZWxlbWVudCwgdG8gZW1wdHkgd2lsbCBtYWtlIHdheSBmb3IgdGhlIG5ldyB2YWx1ZS9pY29uIFxuXG4vLyBuZXh0IEkgbmVlZCB0byBmaWd1cmUgb3V0IGhvdyB0byB3cml0ZSBhIGZ1bmN0aW9uIG9yIHBlcmZvcm0gdGhlIGxvZ2ljIHRoYXQgd291bGQgYWxsb3cgbWUgdG8gY2hhbmdlIHRoZSBmIGRhdGEgdG8gYyBkYXRhIFxuXG4vLyBmaXJzdCBsb2NhdGUgYWxsIHZhbHVlcyB0aGF0IHVzZSBmLCBcblxuLy8ganVzdCBjaGFuZ2UgdGhlIHRlbXAuIHRoZXJlIGlzIG9uZSBpbiBjdXJyZW50IHdlYXRoZXIgYW5kIGRheXMsIGVhY2ggZGF5IHdpbGwgbmVlZCB0byBoaWdoIGFuZCBsb3cgdGVtcCBjaGFuZ2VkLCBcblxuLy8gSSBhbSBjb25mdXNlZCBvbiBob3cgdG8gYXBwcm9hY2ggdGhpcywgXG5cbi8vIGEgZnVuY3Rpb24/IFxuXG4vLyBvbmNlIHRoZSBidG4gaXMgY2xpY2tlZCwgZ3JhYiB0aGUgdmFsdWVzLCBncmFiIGFsbCB0aGUgaW5wdXRzL2ZpZWxkcywgY2FsbCBhbm90aGVyIGZ1bmN0aW9uLCB3aGljaCB3aWxsIGludGFrZSB0aGUgY3VycmVudCB3ZWF0aGVyLCBrZXkgaW50byB2YWx1ZXMsIFxuXG4vLyB0aGVuIGRpc3BsYXkgdGhvc2UgdmFsdWVzIHRvIHRoZSBET00/ICJdLCJuYW1lcyI6WyJjb25zb2xlIiwibG9nIiwic2VhcmNoQm94IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInNlYXJjaEJ0biIsIndlYXRoZXJDb250YWluZXIiLCJzdG9yZWRXZWF0aGVyRGF0YSIsImZldGNoRGF0YSIsImlucHV0IiwiY2l0eURhdGEiLCJnZXREYXRhIiwiZmV0Y2giLCJqc29uRGF0YSIsImpzb24iLCJjdXJyZW50V2VhdGhlckRhdGEiLCJkaXNwbGF5Q3VycmVudFdlYXRoZXIiLCJhZGRXZWF0aGVyRm9yZWNhc3QxIiwiYWRkV2VhdGhlckZvcmVjYXN0MiIsImFkZFdlYXRoZXJGb3JlY2FzdDMiLCJ3ZWF0aGVyIiwiY3VycmVudFdlYXRoZXJJY29uIiwiY3VycmVudEZvcmVjYXN0IiwidGV4dENvbnRlbnQiLCJ3ZWF0aGVySWNvbiIsIkltYWdlIiwic3JjIiwiY3VycmVudCIsImNvbmRpdGlvbiIsImljb24iLCJsb2NhdGlvbkRhdGEiLCJsb2NhdGlvbiIsIm5hbWUiLCJ3ZWF0aGVyRGVzY3JpcHRpb25EYXRhIiwidGV4dCIsImN1cnJlbnRXZWF0aGVyTnVtYmVyRGF0YSIsImZlZWxzbGlrZV9mIiwid2luZERhdGEiLCJ3aW5kX21waCIsIndpbmREaXJlY3Rpb24iLCJ3aW5kX2RpciIsInJhaW5JbmNoZXMiLCJwcmVjaXBfaW4iLCJodW1pZGl0eUxldmVsIiwiaHVtaWRpdHkiLCJuZXdJbWciLCJhcHBlbmRDaGlsZCIsImN1cnJlbnRXZWF0aGVyTG9jYXRpb25UZXh0IiwiY3VycmVudFdlYXRoZXJEZXNjcmlwdGlvblRleHQiLCJjdXJyZW50V2VhdGhlclRlbXBEYXRhIiwiY3VycmVudFdlYXRoZXJXaW5kRGF0YSIsImN1cnJlbnRXZWF0aGVyV2luZERpcmVjdGlvbiIsImN1cnJlbnRXZWF0aGVyUmFpbiIsImN1cnJlbnRIdW1pZGl0eUxldmVsIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJpbnB1dFZhbHVlIiwidmFsdWUiLCJjZWxjaXVzQnRuIiwiY3VycmVudENlbGNpdXNUZW1wIiwidGVtcF9jIiwiZGF5MUhpZ2hUZW1wIiwiZm9yZWNhc3QiLCJmb3JlY2FzdGRheSIsImRheSIsIm1heHRlbXBfYyIsImRheTFMb3dUZW1wIiwibWludGVtcF9jIiwiaGlnaExvd1RlbXBEYXRhIiwiZGF5MkhpZ2hUZW1wIiwiZGF5Mkxvd1RlbXAiLCJoaWdoTG93VGVtcERhdGFEYXkyIiwiZGF5M0hpZ2hUZW1wIiwiZGF5M0xvd1RlbXAiLCJoaWdoTG93VGVtcERhdGFEYXkzIiwiZkJ0biIsImN1cnJlbnRGVGVtcCIsInRlbXBfZiIsIm1heHRlbXBfZiIsIm1pbnRlbXBfZiIsImZvcmVjYXN0RGF0YSIsImlucHV0Rm9ySW1nRGF5MSIsImRheTFEYXRlIiwiZGF0ZSIsImRheTFJY29uIiwiY2hhbmNlT2ZSYWluIiwiZGFpbHlfY2hhbmNlX29mX3JhaW4iLCJ1dkluZGV4IiwidXYiLCJjaGFuY2VPZlNub3ciLCJkYWlseV9jaGFuY2Vfb2Zfc25vdyIsImFwcGVuZCIsImRhdGVBbmRJY29uRGF0YSIsImNoYW5jZU9mUmFpbkRhdGEiLCJ1dkluZGV4RGF0YSIsImNoYW5jZU9mU25vd0RhdGEiLCJmb3JlY2FzdERhdGEyIiwiaWNvbkRhdGEiLCJkYXkyRGF0ZSIsImRheTJJY29uSW1nIiwiZGF5MkNoYW5jZU9mUmFpbiIsImRheTJVVkluZGV4IiwiZGF5MkNoYW5jZU9mU25vdyIsImRhdGVEYXRhIiwiZm9yZWNhc3REYXRhMyIsImRheTNEYXRlIiwiZGF5M0ltZ0ljb24iLCJkYXkzUmFpbkNoYW5jZSIsImRheTNVVkluZGV4IiwiZGF5M0NoYW5jZU9mU25vdyJdLCJzb3VyY2VSb290IjoiIn0=