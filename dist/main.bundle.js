(self["webpackChunkwebpack_template"] = self["webpackChunkwebpack_template"] || []).push([["main"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

// import './styles.scss';

// import './style.css';

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

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0ICcuL3N0eWxlcy5zY3NzJztcblxuLy8gaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cbi8vIGltcG9ydCAnLi9zdHlsZXMuc2Nzcyc7XG5cbi8vIGluIG9yZGVyIHRvIHVzZSBlYXJ0aCBiYWNrZ3JvdW5kIGltZyB5b3UgbXVzdCBpbXBvcnQgaXQgYW5kIHNlZSBpZiB5b3UgY2FuIHVzZSBpdCBpbiBjc3MgXG5cbi8vIGJ1dCBpbiBqcywgXG5cbi8vIHF1ZXJ5IHNlbGVjdG9yIHRoZSBib2R5LCBzZWxlY3QgZWxlbWVudCwgXG5cbi8vIGFkZCB0aGUgaW1nIGFzIGEgYmFja2dyb3VuZCwgYW5kIHNldCB0aGUgaW1wb3J0ZWQgaW1nIGFzIHRoZSBzcmMuIFxuXG4vLyB3aHkgZm9lcyBmIGNoYW5nZSB3aGVuIEkgZW50ZXIgaXQgYWdhaW4/IENoZWNrIHRvIG1ha2Ugc3VyZSB5b3UgYXJlIGxvZ2dpbmcgY29ycmVjdCBkYXlzIFxuXG4vLyBjaGFuZ2UgaXQgdG8gZmVlbHMgbGlrZSBpbnN0ZWFkIG9mIGN1cnJlbnQgdGVtcCBcblxuLy8gT0sgc28gdG9kYXksIEkgTGlrZSB0aGUgc3R5bGluZyBmb3IgdGhlIGJhY2tncm91bmQsIG1vdmUgdGhlIHRoZSBpbWdzIGludG8gdGhlIHNyYyBkaXJlY3RvcnksIFxuXG4vLyBhbmQgdXNlIGdoIHBhZ2VzLCB0byBzZWUgaWYgdGhlIGltYWdlcyByZW5kZXIsIFxuXG4vLyBhbHNvIGNoYW5nZSB0aGUgY3VycmVudCB3ZWF0aGVyLCB0byB1c2UgY3VycmVudCBpbnN0ZWFkIG9mIGZlZWxzIGxpa2UsIGRvdWJsZSBjaGVjayB3aXRoIHRoYXQsIFxuXG4vLyBsYXN0IHRyeSB0byBpbnN0YWxsIHNhc3MsIG1heWJlIGFzayBpZiBpdCBpcyBuZWNlc3NhcnkgdG8gdXNlIHR3byBKUyBmaWxlcywgXG5cbi8vIGJydXNoIHVwIG9uIHRoZSBzdHlsaW5nIHRvbywgbWF5YmUgdXNlIERPTSBzdHlsaW5nIGZvciB0aGUgMyBkYXkgZm9yZWNhc3QgYm94ZXMsIG9uY2UgZGF0YSBpcyBlbnRlcmVkLCB0aGVuIGFwcGx5IHRoZSBiYWNrZ3JvdW5kIHN0eWxlcywgXG5cbi8vIHRlc3QgZ2ggcGFnZXMsIFxuXG4vLyBob3cgY2FuIEkgZGlzcGxheSBhbGwgY29udGVudCwgd2VicGFjayBpc3N1ZSBvZiBnaCBwYWdlcyBub3QgZGlzcGxheWluZyB0aGUgY29udGVudCwgaXQgb25seSBkaXNwbGF5cyB0aGUgaHRtbC4gXG5cbmxldCBzZWFyY2hCb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoLWJveCcpOyBcblxubGV0IHNlYXJjaEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gtYnRuJyk7IFxuXG4vLyBjdXJyZW50IHdlYXRoZXIgZGF0YSBzdG9yZWQgaW4gaGVyZSwgXG5sZXQgd2VhdGhlckNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXJyZW50LXdlYXRoZXItY29udGFpbmVyJyk7IFxuXG5sZXQgc3RvcmVkV2VhdGhlckRhdGEgXG5cbmFzeW5jIGZ1bmN0aW9uIGZldGNoRGF0YShpbnB1dCkgeyBcblxuICAgIGxldCBjaXR5RGF0YSA9IGlucHV0OyBcbiAgICBcbiAgICBjb25zb2xlLmxvZygnVGhlIGRhdGEgcGFzc2VkIGluIGlzOiAnICsgY2l0eURhdGEpO1xuICAgIFxuICAgIGNvbnN0IGdldERhdGEgPSBhd2FpdCBmZXRjaChgaHR0cDovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT00NTQ2NGRhMzg4OTI0NTBkOTVmMTA0MzMyMzA1MDYgJnE9JHtjaXR5RGF0YX0mZGF5cz01JmFxaT1ubyZhbGVydHM9bm9gKTtcblxuICAgIGNvbnN0IGpzb25EYXRhID0gYXdhaXQgZ2V0RGF0YS5qc29uKCk7XG4gICAgXG4gICAgbGV0IGN1cnJlbnRXZWF0aGVyRGF0YSA9IGpzb25EYXRhO1xuICAgIFxuICAgIHN0b3JlZFdlYXRoZXJEYXRhID0gY3VycmVudFdlYXRoZXJEYXRhOyBcblxuICAgLy8gY29uc29sZS5sb2coc3RvcmVkV2VhdGhlckRhdGEpO1xuXG4gICBkaXNwbGF5Q3VycmVudFdlYXRoZXIoY3VycmVudFdlYXRoZXJEYXRhKTtcblxuICAgYWRkV2VhdGhlckZvcmVjYXN0MShjdXJyZW50V2VhdGhlckRhdGEpO1xuXG4gICBhZGRXZWF0aGVyRm9yZWNhc3QyKGN1cnJlbnRXZWF0aGVyRGF0YSk7XG5cbiAgIGFkZFdlYXRoZXJGb3JlY2FzdDMoY3VycmVudFdlYXRoZXJEYXRhKTsgXG5cbiAgLy8gIHRvZ2dsZShjdXJyZW50V2VhdGhlckRhdGEpO1xuXG4gIC8vIHJldHVybiBqc29uRGF0YTtcblxufSBcblxuLy8gaG93IGNhbiBJIHN0b3JlIHdlYXRoZXIgZGF0YSBvdXRzaWRlIG9mIHRoZSBmdW5jdGlvbj8gXG5cbi8vIGFsbCBJIGNhbiB0aGluayBvZiBpcyBhIGdsb2JhbCB2YXJpYWJsZSxjXG5cbi8vIGZldGNoRGF0YS50aGVuKGRhdGEgPT4gY29uc29sZS5sb2coZGF0YSkpOyBcblxuLy8gT0sgSSBhbSBhYmxlIHRvIGdldCB0aGUgd2VhdGhlciBkYXRhLCB3aXRoaW4gbXkgZXZlbnQgbGlzdGVuZXIgZnVuY3Rpb24gXG4gXG5cbi8vICBsZXQgd2VhdGhlckNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXJyZW50LXdlYXRoZXItY29udGFpbmVyJyk7IFxuXG5hc3luYyBmdW5jdGlvbiBkaXNwbGF5Q3VycmVudFdlYXRoZXIod2VhdGhlcikgeyBcblxuICAgIGxldCBjdXJyZW50V2VhdGhlckljb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VycmVudC13ZWF0aGVyLWljb24nKTsgXG4gICAgLy8gY2xlYXIgRE9NLCByZXBsYWNlQ2hpbGRyZW4gYmVmb3JlIGFwcGVuZGluZyBuZXdcblxuICAgIGxldCBjdXJyZW50Rm9yZWNhc3QgPSBhd2FpdCB3ZWF0aGVyOyBcblxuICAgIC8vIGNvbnNvbGUubG9nKGN1cnJlbnRGb3JlY2FzdC5sb2NhdGlvbikgXG5cbiAgICBjdXJyZW50V2VhdGhlckljb24udGV4dENvbnRlbnQgPSAnJzsgXG5cblxuXG4gICAgbGV0IHdlYXRoZXJJY29uID0gbmV3IEltYWdlKCk7IFxuXG4gICAgd2VhdGhlckljb24uc3JjID0gY3VycmVudEZvcmVjYXN0LmN1cnJlbnQuY29uZGl0aW9uLmljb247XG5cbiAgICAvLyBjb25zb2xlLmxvZyhjdXJyZW50Rm9yZWNhc3QuY3VycmVudC5jb25kaXRpb24pXG5cbiAgICBsZXQgbG9jYXRpb25EYXRhID0gY3VycmVudEZvcmVjYXN0LmxvY2F0aW9uLm5hbWU7XG5cbiAgICBsZXQgd2VhdGhlckRlc2NyaXB0aW9uRGF0YSA9IGN1cnJlbnRGb3JlY2FzdC5jdXJyZW50LmNvbmRpdGlvbi50ZXh0OyBcblxuICAgIGxldCBjdXJyZW50V2VhdGhlck51bWJlckRhdGEgPSBjdXJyZW50Rm9yZWNhc3QuY3VycmVudC5mZWVsc2xpa2VfZjtcblxuICAgIGxldCB3aW5kRGF0YSA9IGN1cnJlbnRGb3JlY2FzdC5jdXJyZW50LndpbmRfbXBoO1xuXG4gICAgbGV0IHdpbmREaXJlY3Rpb24gPSBjdXJyZW50Rm9yZWNhc3QuY3VycmVudC53aW5kX2RpcjtcblxuICAgIGxldCByYWluSW5jaGVzID0gY3VycmVudEZvcmVjYXN0LmN1cnJlbnQucHJlY2lwX2luOyBcblxuICAgIGxldCBodW1pZGl0eUxldmVsID0gY3VycmVudEZvcmVjYXN0LmN1cnJlbnQuaHVtaWRpdHk7XG5cbiAgICBsZXQgbmV3SW1nID0gbmV3IEltYWdlKCk7XG5cbiAgICBuZXdJbWcuc3JjID0gY3VycmVudEZvcmVjYXN0LmN1cnJlbnQuY29uZGl0aW9uLmljb247XG5cbi8vICAgIGxldCBjdXJyZW50V2VhdGhlckljb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VycmVudC13ZWF0aGVyLWljb24nKTsgXG5cbiAgIC8vIGRvbnQgYXBwZW5kIHVzZSB2YXJpYWJsZSBhbmQgdGVtcGxhdGUgbGl0ZXJhbHMsIGFwcGVuZGluZyBtYXkgc3RvcCB0aGUgYWRkaW5nIG9udG8gdG8gaW5zdGVhZCBvZiByZXBsYWNpbmcsIFxuXG4gICBjdXJyZW50V2VhdGhlckljb24uYXBwZW5kQ2hpbGQod2VhdGhlckljb24pO1xuXG4gICBsZXQgY3VycmVudFdlYXRoZXJMb2NhdGlvblRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VycmVudC13ZWF0aGVyLWxvY2F0aW9uLXAnKTsgXG5cbiAgIGN1cnJlbnRXZWF0aGVyTG9jYXRpb25UZXh0LnRleHRDb250ZW50ID0gYExvY2F0aW9uOiAke2xvY2F0aW9uRGF0YX1gO1xuXG4gICBsZXQgY3VycmVudFdlYXRoZXJEZXNjcmlwdGlvblRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VycmVudC13ZWF0aGVyLWRlc2NyaXB0aW9uLXAnKTsgXG5cbiAgIGN1cnJlbnRXZWF0aGVyRGVzY3JpcHRpb25UZXh0LnRleHRDb250ZW50ID0gYENvbmRpdGlvbnM6ICR7d2VhdGhlckRlc2NyaXB0aW9uRGF0YX1gXG5cbiAgIGxldCBjdXJyZW50V2VhdGhlclRlbXBEYXRhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1cnJlbnQtd2VhdGhlci10ZW1wLWRhdGEnKTsgXG5cbiAgIGN1cnJlbnRXZWF0aGVyVGVtcERhdGEudGV4dENvbnRlbnQgPSBgVGVtcHJhdHVyZSBpczogJHtjdXJyZW50V2VhdGhlck51bWJlckRhdGF9IFxcdTAwQjBGYDtcblxuICAgbGV0IGN1cnJlbnRXZWF0aGVyV2luZERhdGEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VycmVudC13ZWF0aGVyLXdpbmQtZGF0YScpOyBcblxuICAgY3VycmVudFdlYXRoZXJXaW5kRGF0YS50ZXh0Q29udGVudCA9IGBXaW5kIFNwZWVkOiAke3dpbmREYXRhfSBtcGhgO1xuXG4gICBsZXQgY3VycmVudFdlYXRoZXJXaW5kRGlyZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1cnJlbnQtd2VhdGhlci13aW5kLWRpcmVjdGlvbi1kYXRhJyk7XG5cbiAgIGN1cnJlbnRXZWF0aGVyV2luZERpcmVjdGlvbi50ZXh0Q29udGVudCA9IGBXaW5kIERpcmVjdGlvbjogJHt3aW5kRGlyZWN0aW9ufWA7XG5cbiAgIGxldCBjdXJyZW50V2VhdGhlclJhaW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VycmVudC13ZWF0aGVyLXJhaW4taW5jaGVzLWRhdGEnKTtcblxuICAgY3VycmVudFdlYXRoZXJSYWluLnRleHRDb250ZW50ID0gYFJhaW46ICR7cmFpbkluY2hlc30gaW5gO1xuXG4gICBsZXQgY3VycmVudEh1bWlkaXR5TGV2ZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VycmVudC13ZWF0aGVyLWh1bWlkaXR5LWRhdGEnKTsgXG5cbiAgIGN1cnJlbnRIdW1pZGl0eUxldmVsLnRleHRDb250ZW50ID0gYEh1bWlkaXR5OiAke2h1bWlkaXR5TGV2ZWx9JWBcblxufSBcblxuLy8gbmVlZHMgdG8gc29tZWhvdyBiZSBjbGVhcmVkIGluIHRoZSBzZWFyY2ggYnRuIFxuXG5zZWFyY2hCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4geyBcblxuICAgIGNvbnNvbGUubG9nKCdjbGljaycpO1xuXG4gICAgbGV0IGlucHV0VmFsdWUgPSBzZWFyY2hCb3gudmFsdWU7XG5cbiAgICBmZXRjaERhdGEoaW5wdXRWYWx1ZSk7XG5cbn0pOyBcblxuLy8gZ3JhYiB0aGUgaW5wdXQgZmllbGRzIHRoYXQgaGF2ZSBGIFxuXG4vLyBzZXQgdmFyaWFibGVzIGZvciBjdXJyZW50IHRlbXAgaW4gYywgaGlnaCB0ZW1wIGluIGMsIGxvdyB0ZW1wIGluIGMgXG5cbi8vIHNldCB0aG9zZSB2YXJpYWJsZXMsIFxuXG4vLyBzZXQgYSB2YXJpYWJsZSBpc0MgdG8gZmFsc2UsIFxuXG4vLyBjb25kaXRpb25hbCBpZiBjIGlzIHRydWUgZ3JhYiB0aGUgdmFsdWVzLCB0aGVuIHJlcGxhY2UgdGhlbSB3aXRoIGMgdmFsdWUsIFxuXG4vLyBpZiBmYWxzZSwgc3dpdGNoIHRoZW0gYmFjayB0byBGLCBcblxuLy8gY2FuIHN3aXRjaCB0aGUgdGVtcCwgXG5cbi8vIGJ1dCBob3cgY2FuIEkgdG9nZ2xlIGJhY2sgYW5kIGZvcnRoIFxuXG4vLyBtYXliZSBJIHNob3VsZCBtYWtlIGFub3RoZXIgdmFyaWFibGUgZm9yIEYgXG5cblxuLy8gbGV0IHRvZ2dsZVRlbXByYXR1cmVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnRi1DLXRvZ2dsZS1idG4nKTsgXG5cbi8vIGxldCBpc0NlbGNpdXMgPSBmYWxzZTsgXG5cbi8vIC8vIGxldCBpc0YgPSB0cnVlOyBcblxuLy8gSEVSRSFcblxuLy8gZ3JhYiB0aGUgZWxlbWVudCwgQyBlbGVtZW50IFxuXG5sZXQgY2VsY2l1c0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdDLXRvZ2dsZS1idG4nKTsgXG5cbmNlbGNpdXNCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuXG4gICAgbGV0IGN1cnJlbnRDZWxjaXVzVGVtcCA9IHN0b3JlZFdlYXRoZXJEYXRhLmN1cnJlbnQudGVtcF9jOyBcblxuICAgIGxldCBjdXJyZW50V2VhdGhlclRlbXBEYXRhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1cnJlbnQtd2VhdGhlci10ZW1wLWRhdGEnKTsgXG5cbiAgICBjdXJyZW50V2VhdGhlclRlbXBEYXRhLnRleHRDb250ZW50ID0gYFRlbXByYXR1cmUgSXM6ICR7Y3VycmVudENlbGNpdXNUZW1wfSBDYDsgXG5cbiAgICBsZXQgZGF5MUhpZ2hUZW1wID0gc3RvcmVkV2VhdGhlckRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uZGF5Lm1heHRlbXBfYztcblxuICAgIGxldCBkYXkxTG93VGVtcCA9IHN0b3JlZFdlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRheS5taW50ZW1wX2M7XG5cbiAgICBsZXQgaGlnaExvd1RlbXBEYXRhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0LWZvcmVjYXN0LWRheTEtaGlnaC1sb3cnKTsgXG5cbiAgICBoaWdoTG93VGVtcERhdGEudGV4dENvbnRlbnQgPSBgSGlnaCB0b2RheSBpczogJHtkYXkxSGlnaFRlbXB9XFx1MDBCMEMgTG93IHRvZGF5IGlzOiAke2RheTFMb3dUZW1wfVxcdTAwQjBDYDtcblxuICAgIGxldCBkYXkySGlnaFRlbXAgPSBzdG9yZWRXZWF0aGVyRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsxXS5kYXkubWF4dGVtcF9jO1xuXG4gICAgbGV0IGRheTJMb3dUZW1wID0gc3RvcmVkV2VhdGhlckRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMV0uZGF5Lm1pbnRlbXBfYzsgXG5cbiAgICBsZXQgaGlnaExvd1RlbXBEYXRhRGF5MiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dC1mb3JlY2FzdC1kYXkyLWhpZ2gtbG93Jyk7XG5cbiAgICBoaWdoTG93VGVtcERhdGFEYXkyLnRleHRDb250ZW50ID0gYEhpZ2ggVG9kYXkgaXM6ICR7ZGF5MkhpZ2hUZW1wfVxcdTAwQjBDIExvdyB0b2RheSBpczogJHtkYXkyTG93VGVtcH1cXHUwMEIwQ2A7ICBcblxuICAgIC8vIFxuXG4gICAgbGV0IGRheTNIaWdoVGVtcCA9IHN0b3JlZFdlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzJdLmRheS5tYXh0ZW1wX2M7XG5cbiAgICBsZXQgZGF5M0xvd1RlbXAgPSBzdG9yZWRXZWF0aGVyRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsyXS5kYXkubWludGVtcF9jO1xuXG4gICAgbGV0IGhpZ2hMb3dUZW1wRGF0YURheTMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXQtZm9yZWNhc3QtZGF5My1oaWdoLWxvdycpO1xuXG4gICAgaGlnaExvd1RlbXBEYXRhRGF5My50ZXh0Q29udGVudCA9IGBIaWdoIHRvZGF5IGlzOiAke2RheTNIaWdoVGVtcH1cXHUwMEIwQyBMb3cgdG9kYXkgaXM6ICR7ZGF5M0xvd1RlbXB9XFx1MDBCMENgO1xuICAgIFxufSk7IFxuXG5sZXQgZkJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdGLXRvZ2dsZS1idG4nKTsgXG5cbmZCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuXG4gICAgbGV0IGN1cnJlbnRGVGVtcCA9IHN0b3JlZFdlYXRoZXJEYXRhLmN1cnJlbnQudGVtcF9mOyBcblxuICAgIGxldCBjdXJyZW50V2VhdGhlclRlbXBEYXRhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1cnJlbnQtd2VhdGhlci10ZW1wLWRhdGEnKTtcblxuICAgIGN1cnJlbnRXZWF0aGVyVGVtcERhdGEudGV4dENvbnRlbnQgPSBgVGVtcHJhdHVyZSBJczogJHtjdXJyZW50RlRlbXB9XFx1MDBCMEZgO1xuXG4gICAgbGV0IGRheTFIaWdoVGVtcCA9IHN0b3JlZFdlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRheS5tYXh0ZW1wX2Y7XG5cbiAgICBsZXQgZGF5MUxvd1RlbXAgPSBzdG9yZWRXZWF0aGVyRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXkubWludGVtcF9mO1xuXG4gICAgbGV0IGhpZ2hMb3dUZW1wRGF0YSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dC1mb3JlY2FzdC1kYXkxLWhpZ2gtbG93Jyk7IFxuXG4gICAgaGlnaExvd1RlbXBEYXRhLnRleHRDb250ZW50ID0gYEhpZ2ggdG9kYXkgaXM6ICR7ZGF5MUhpZ2hUZW1wfVxcdTAwQjBGIExvdyB0b2RheSBpczogJHtkYXkxTG93VGVtcH1cXHUwMEIwRmA7IFxuXG4gICAgbGV0IGRheTJIaWdoVGVtcCA9IHN0b3JlZFdlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzFdLmRheS5tYXh0ZW1wX2Y7XG5cbiAgICBsZXQgZGF5Mkxvd1RlbXAgPSBzdG9yZWRXZWF0aGVyRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsxXS5kYXkubWludGVtcF9mOyBcblxuICAgIGxldCBoaWdoTG93VGVtcERhdGFEYXkyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0LWZvcmVjYXN0LWRheTItaGlnaC1sb3cnKTtcblxuICAgIGhpZ2hMb3dUZW1wRGF0YURheTIudGV4dENvbnRlbnQgPSBgSGlnaCBUb2RheSBpczogJHtkYXkySGlnaFRlbXB9XFx1MDBCMEYgTG93IHRvZGF5IGlzOiAke2RheTJMb3dUZW1wfVxcdTAwQjBGYDsgXG5cbiAgICAvLyBcblxuICAgIGxldCBkYXkzSGlnaFRlbXAgPSBzdG9yZWRXZWF0aGVyRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsyXS5kYXkubWF4dGVtcF9mO1xuXG4gICAgbGV0IGRheTNMb3dUZW1wID0gc3RvcmVkV2VhdGhlckRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMl0uZGF5Lm1pbnRlbXBfZjtcblxuICAgIGxldCBoaWdoTG93VGVtcERhdGFEYXkzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0LWZvcmVjYXN0LWRheTMtaGlnaC1sb3cnKTtcblxuICAgIGhpZ2hMb3dUZW1wRGF0YURheTMudGV4dENvbnRlbnQgPSBgSGlnaCB0b2RheSBpczogJHtkYXkzSGlnaFRlbXB9XFx1MDBCMEYgTG93IHRvZGF5IGlzOiAke2RheTNMb3dUZW1wfVxcdTAwQjBGYDtcbiAgICBcbn0pXG5cblxuLy8gdG9nZ2xlVGVtcHJhdHVyZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7IFxuLy8gICAgICBpc0NlbGNpdXMgPSB0cnVlO1xuXG5cbi8vICAgICAvLyAgaXNGID0gZmFsc2U7XG5cbi8vICAgICBsZXQgeCA9IHNlYXJjaEJveC52YWx1ZTsgXG4gICAgXG4vLyAgICAvLyBzZXQgdmFyaWFibGUgZm9yIGN1cnJlbnQgdGVtcCBpbiBjXG5cbi8vICAgIC8vIGdyYWIgdGhlIGlucHV0IGZpZWxkIGZvciBjdXJyZW50IHRlbXAgXG5cbi8vICAgIC8vIHNob3VsZCBJIGhhdmUgdHdvIGRpZmZlcmVudCBidG5zLCBcblxuLy8gICAgLy8gaWYgRiBjbGlja2VkIGFwcGVuZCwgZiB2YWx1ZXMgXG5cbi8vICAgIC8vIGlmIGMgY2xpY2tlZCwgYXBwZW5kIGMgdmFsdWVzLCBcblxuLy8gICAgLy8gaG93IHRvIGZsaXAgYSBib29sZWFuIHZhbHVlIGJhc2VkIG9uIGJ0biBjbGlja1xuXG4vLyAgICAvLyBJIHRoaW5rIHRoZSBiZXN0IHdheSBpcyB0byBrZWVwIGEgc2VwZXJhdGUgYnRuLCBcblxuLy8gICAgLy8gaWRlYWxseSBJIHdvdWxkIGxpa2UgdG8gY29tcGxldGUgdGhpcyB3aXRoaW4gdGhlIGZ1bmN0aW9uLCBcblxuLy8gICAgLy8gYnV0IG1heSBiZSBlYXNpZXIgdG8gbWFrZSB0d28gYnRucywgaGl0IHRoZSBjIGJ0biBkaXNwbGF5IGMgdGVtcCBkYXRhIGluIGFsbCB0aGUgY29ycmVjdCBzcG90cyBcblxuLy8gICAgLy8gaWYgZiBpcyBoaXQgdGhlbiBkaXNwbGF5IEYgaW4gYWxsIHRoZSByaWdodCBwbGFjZXMsIFxuXG4vLyAgICAvLyBJIHdpbGwgbWFrZSB0d28gYnV0dG9ucywgZXZlbnQgbGlzdGVuZXIsIGlmIGYgY2xpY2tlZCBkaXBsc2F5IGYgdGVtcCBkYXRhLCBpZiBjIGNsaWNrZWQsIGRpc3BsYXkgYyB2YWx1ZXMsIGdyYWJiaW5nIHRoZSBpbnB1dCBmaWVsZHMsIGFuZCB1c2luZyAke31cblxuLy8gICAgLy8gdG8gYXBwZW5kIHZhcmlhYmxlcyB0byB0aGUgRE9NLiBcblxuLy8gICAgbGV0IGN1cnJlbnRDZWxjaXVzVGVtcCA9IHN0b3JlZFdlYXRoZXJEYXRhLmN1cnJlbnQudGVtcF9jOyBcblxuLy8gICAgbGV0IGN1cnJlbnRGVGVtcCA9IHN0b3JlZFdlYXRoZXJEYXRhLmN1cnJlbnQudGVtcF9mOyBcblxuLy8gICAgbGV0IGN1cnJlbnRXZWF0aGVyVGVtcERhdGEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VycmVudC13ZWF0aGVyLXRlbXAtZGF0YScpOyBcblxuLy8gICAgY29uc29sZS5sb2coY3VycmVudENlbGNpdXNUZW1wKTsgXG5cbi8vICAgIGNvbnNvbGUubG9nKGN1cnJlbnRGVGVtcCk7IFxuXG4vLyAgICBpZiAoaXNDZWxjaXVzKSB7IFxuLy8gICAgIGN1cnJlbnRXZWF0aGVyVGVtcERhdGEudGV4dENvbnRlbnQgPSBgJHtjdXJyZW50Q2VsY2l1c1RlbXB9YDtcbi8vICAgICAvLyBpc0NlbGNpdXMgPSBmYWxzZTtcbi8vICAgIH0gZWxzZSBpZiAoIWlzQ2VsY2l1cykgeyBcbi8vICAgICBjdXJyZW50V2VhdGhlclRlbXBEYXRhLnRleHRDb250ZW50ID0gYCR7Y3VycmVudEZUZW1wfWA7XG4vLyAgICB9XG5cbi8vICAgIGlzQ2VsY2l1cyA9IGZhbHNlO1xuXG4vLyAgICBjb25zb2xlLmxvZyhpc0NlbGNpdXMpO1xuLy8gLy8gICAgfSBlbHNlIChpc0YpIHsgXG4vLyAvLyAgICAgY3VycmVudFdlYXRoZXJUZW1wRGF0YS50ZXh0Q29udGVudCA9IGAke2N1cnJlbnRGVGVtcH1gO1xuLy8gLy8gICAgfVxuICAgIFxuLy8gICAgIC8vIGNvbnNvbGUubG9nKHN0b3JlZFdlYXRoZXJEYXRhLmN1cnJlbnQuY29uZGl0aW9uKTtcbi8vIC8vIGZldGNoRGF0YS50aGVuKGRhdGEgPT4gY29uc29sZS5sb2coZGF0YSkpO1xuLy8gfSk7XG5cbmFzeW5jIGZ1bmN0aW9uIGFkZFdlYXRoZXJGb3JlY2FzdDEod2VhdGhlcikgeyBcbiAgICBsZXQgZm9yZWNhc3REYXRhID0gYXdhaXQgd2VhdGhlcjsgXG5cbiAgICAgLy8gY29uc29sZS5sb2coZm9yZWNhc3REYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRheSk7XG5cbiAgICAvLyBjb25zb2xlLmxvZyhmb3JlY2FzdERhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uZGF5LmNvbmRpdGlvbi5pY29uKTtcblxuICAgIGxldCBpbnB1dEZvckltZ0RheTEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXQtZm9yZWNhc3QtZGF5MS1pY29uJyk7IFxuXG4gICAgaW5wdXRGb3JJbWdEYXkxLnRleHRDb250ZW50ID0gJyc7XG5cbiAgICBsZXQgZGF5MURhdGUgPSBmb3JlY2FzdERhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uZGF0ZTsgXG5cbiAgICBsZXQgZGF5MUljb24gPSBuZXcgSW1hZ2UoKTsgXG5cbiAgICBsZXQgZGF5MUhpZ2hUZW1wID0gZm9yZWNhc3REYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRheS5tYXh0ZW1wX2Y7XG5cbiAgICBsZXQgZGF5MUxvd1RlbXAgPSBmb3JlY2FzdERhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uZGF5Lm1pbnRlbXBfZjtcblxuICAgIGxldCBjaGFuY2VPZlJhaW4gPSBmb3JlY2FzdERhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uZGF5LmRhaWx5X2NoYW5jZV9vZl9yYWluO1xuXG4gICAgbGV0IHV2SW5kZXggPSBmb3JlY2FzdERhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uZGF5LnV2O1xuXG4gICAgbGV0IGNoYW5jZU9mU25vdyA9IGZvcmVjYXN0RGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXkuZGFpbHlfY2hhbmNlX29mX3Nub3c7XG5cbiAgICAvLyBkYXkxSWNvbi5zdHlsZS5oZWlnaHQgPSAnMTMwcHgnO1xuXG4gICAgZGF5MUljb24uc3JjID0gZm9yZWNhc3REYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRheS5jb25kaXRpb24uaWNvbjsgXG4gICAgXG4gICAgLy8gbGV0IGlucHV0Rm9ySW1nRGF5MSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dC1mb3JlY2FzdC1kYXkxLWljb24nKTsgXG5cbiAgICBpbnB1dEZvckltZ0RheTEuYXBwZW5kKGRheTFJY29uKTtcblxuICAgIGxldCBkYXRlQW5kSWNvbkRhdGEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXQtZm9yZWNhc3QtZGF5MS1kYXRhLWRhdGUnKTsgXG5cbiAgICBkYXRlQW5kSWNvbkRhdGEudGV4dENvbnRlbnQgPSBgRGF0ZSB0b2RheSBpczogJHtkYXkxRGF0ZX1gOyBcblxuICAgIGxldCBoaWdoTG93VGVtcERhdGEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXQtZm9yZWNhc3QtZGF5MS1oaWdoLWxvdycpOyBcblxuICAgIGhpZ2hMb3dUZW1wRGF0YS50ZXh0Q29udGVudCA9IGBIaWdoIHRvZGF5IGlzOiAke2RheTFIaWdoVGVtcH1cXHUwMEIwRiBMb3cgdG9kYXkgaXM6ICR7ZGF5MUxvd1RlbXB9XFx1MDBCMEZgO1xuXG4gICAgbGV0IGNoYW5jZU9mUmFpbkRhdGEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXQtZm9yZWNhc3QtZGF5LTEtcmFpbi1jaGFuY2UnKTtcbiAgICBcbiAgICBjaGFuY2VPZlJhaW5EYXRhLnRleHRDb250ZW50ID0gYENoYW5jZSBvZiBSYWluOiAke2NoYW5jZU9mUmFpbn0lYCBcblxuICAgIGxldCB1dkluZGV4RGF0YSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dC1mb3JlY2FzdC1kYXktMS11di1pbmRleCcpO1xuXG4gICAgdXZJbmRleERhdGEudGV4dENvbnRlbnQgPSBgVVYgSW5kZXggaXM6ICR7dXZJbmRleH1gO1xuXG4gICAgbGV0IGNoYW5jZU9mU25vd0RhdGEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXQtZm9yZWNhc3QtZGF5LTEtc25vdy1jaGFuY2UnKTsgXG5cbiAgICBjaGFuY2VPZlNub3dEYXRhLnRleHRDb250ZW50ID0gYENoYW5jZSBvZiBTbm93OiAke2NoYW5jZU9mU25vd30lYFxuXG59IFxuXG5cbmFzeW5jIGZ1bmN0aW9uIGFkZFdlYXRoZXJGb3JlY2FzdDIod2VhdGhlcikgeyBcbiAgICBsZXQgZm9yZWNhc3REYXRhMiA9IGF3YWl0IHdlYXRoZXI7IFxuXG4gICAgY29uc29sZS5sb2coZm9yZWNhc3REYXRhMik7XG5cbiAgICAvLyBjb25zb2xlLmxvZyhmb3JlY2FzdERhdGEyLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzFdLmRhdGUpO1xuXG4gICAgbGV0IGljb25EYXRhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0LWZvcmVjYXN0LWRheTItZGF0YS1pY29uJyk7XG5cbiAgICBpY29uRGF0YS50ZXh0Q29udGVudCA9ICcnO1xuXG4gICAgbGV0IGRheTJEYXRlID0gZm9yZWNhc3REYXRhMi5mb3JlY2FzdC5mb3JlY2FzdGRheVsxXS5kYXRlOyBcblxuICAgIGxldCBkYXkySWNvbkltZyA9IG5ldyBJbWFnZSgpOyBcblxuICAgIGRheTJJY29uSW1nLnNyYyA9IGZvcmVjYXN0RGF0YTIuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMV0uZGF5LmNvbmRpdGlvbi5pY29uO1xuXG4gICAgbGV0IGRheTJIaWdoVGVtcCA9IGZvcmVjYXN0RGF0YTIuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMV0uZGF5Lm1heHRlbXBfZjtcblxuICAgIGxldCBkYXkyTG93VGVtcCA9IGZvcmVjYXN0RGF0YTIuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMV0uZGF5Lm1pbnRlbXBfZjtcblxuICAgIGxldCBkYXkyQ2hhbmNlT2ZSYWluID0gZm9yZWNhc3REYXRhMi5mb3JlY2FzdC5mb3JlY2FzdGRheVsxXS5kYXkuZGFpbHlfY2hhbmNlX29mX3JhaW47XG5cbiAgICBsZXQgZGF5MlVWSW5kZXggPSBmb3JlY2FzdERhdGEyLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzFdLmRheS51djsgXG5cbiAgICBsZXQgZGF5MkNoYW5jZU9mU25vdyA9IGZvcmVjYXN0RGF0YTIuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMV0uZGF5LmRhaWx5X2NoYW5jZV9vZl9zbm93O1xuXG4gICAgLy8gY29uc29sZS5sb2coZGF5MkNoYW5jZU9mU25vdyk7XG5cbiAgICAvLyBjb25zb2xlLmxvZyhkYXkySWNvbik7XG5cbiAgICBsZXQgZGF0ZURhdGEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXQtZm9yZWNhc3QtZGF5Mi1kYXRhLWRhdGUnKTtcblxuICAgIGRhdGVEYXRhLnRleHRDb250ZW50ID0gYERhdGUgVG9kYXkgaXM6ICR7ZGF5MkRhdGV9YDsgXG5cbiAgICAvLyBsZXQgaWNvbkRhdGEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXQtZm9yZWNhc3QtZGF5Mi1kYXRhLWljb24nKTtcblxuICAgIGljb25EYXRhLmFwcGVuZChkYXkySWNvbkltZyk7IFxuXG4gICAgbGV0IGhpZ2hMb3dUZW1wRGF0YSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dC1mb3JlY2FzdC1kYXkyLWhpZ2gtbG93Jyk7XG5cbiAgICBoaWdoTG93VGVtcERhdGEudGV4dENvbnRlbnQgPSBgSGlnaCBUb2RheSBpczogJHtkYXkySGlnaFRlbXB9XFx1MDBCMEYgTG93IHRvZGF5IGlzOiAke2RheTJMb3dUZW1wfVxcdTAwQjBGYDsgXG5cbiAgICBsZXQgY2hhbmNlT2ZSYWluRGF0YSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dC1mb3JlY2FzdC1kYXkyLXJhaW4tY2hhbmNlJyk7XG5cbiAgICBjaGFuY2VPZlJhaW5EYXRhLnRleHRDb250ZW50ID0gYENoYW5jZSBvZiBSYWluOiAke2RheTJDaGFuY2VPZlJhaW59JWA7IFxuXG4gICAgbGV0IHV2SW5kZXhEYXRhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0LWZvcmVjYXN0LWRheTItdXYtaW5kZXgnKTtcblxuICAgIHV2SW5kZXhEYXRhLnRleHRDb250ZW50ID0gYFVWIEluZGV4IGlzOiAke2RheTJVVkluZGV4fWA7IFxuXG4gICAgbGV0IGNoYW5jZU9mU25vd0RhdGEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXQtZm9yZWNhc3QtZGF5Mi1zbm93LWNoYW5jZScpO1xuXG4gICAgY2hhbmNlT2ZTbm93RGF0YS50ZXh0Q29udGVudCA9IGBDaGFuY2Ugb2YgU25vdzogJHtkYXkyQ2hhbmNlT2ZTbm93fSVgO1xuXG59IFxuXG5hc3luYyBmdW5jdGlvbiBhZGRXZWF0aGVyRm9yZWNhc3QzKHdlYXRoZXIpIHsgXG4gICAgbGV0IGZvcmVjYXN0RGF0YTMgPSB3ZWF0aGVyOyBcblxuICAgIGxldCBkYXkzRGF0ZSA9IGZvcmVjYXN0RGF0YTMuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMl0uZGF0ZTsgXG5cbiAgICBsZXQgZGF5M0ltZ0ljb24gPSBuZXcgSW1hZ2UoKTsgXG5cbiAgICBsZXQgaWNvbkRhdGEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXQtZm9yZWNhc3QtZGF5My1pY29uJyk7XG5cbiAgICBpY29uRGF0YS50ZXh0Q29udGVudCA9ICcnO1xuXG5cbiAgICBkYXkzSW1nSWNvbi5zcmMgPSBmb3JlY2FzdERhdGEzLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzJdLmRheS5jb25kaXRpb24uaWNvbjtcblxuICAgIGxldCBkYXkzSGlnaFRlbXAgPSBmb3JlY2FzdERhdGEzLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzJdLmRheS5tYXh0ZW1wX2Y7XG5cbiAgICBsZXQgZGF5M0xvd1RlbXAgPSBmb3JlY2FzdERhdGEzLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzJdLmRheS5taW50ZW1wX2Y7XG5cbiAgICBsZXQgZGF5M1JhaW5DaGFuY2UgPSBmb3JlY2FzdERhdGEzLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzJdLmRheS5kYWlseV9jaGFuY2Vfb2ZfcmFpbjtcblxuICAgIGxldCBkYXkzVVZJbmRleCA9IGZvcmVjYXN0RGF0YTMuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMl0uZGF5LnV2O1xuXG4gICAgbGV0IGRheTNDaGFuY2VPZlNub3cgPSBmb3JlY2FzdERhdGEzLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzJdLmRheS5kYWlseV9jaGFuY2Vfb2Zfc25vdztcblxuICAgIGNvbnNvbGUubG9nKGRheTNDaGFuY2VPZlNub3cpO1xuXG4gICAgbGV0IGRhdGVEYXRhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0LWZvcmVjYXN0LWRheTMtZGF0YS1kYXRlJyk7XG5cbiAgICBkYXRlRGF0YS50ZXh0Q29udGVudCA9IGBEYXRlIFRvZGF5IGlzOiAke2RheTNEYXRlfWA7IFxuXG4gICAgLy8gbGV0IGljb25EYXRhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0LWZvcmVjYXN0LWRheTMtaWNvbicpO1xuXG4gICAgaWNvbkRhdGEuYXBwZW5kKGRheTNJbWdJY29uKTsgXG5cbiAgICBsZXQgaGlnaExvd1RlbXBEYXRhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0LWZvcmVjYXN0LWRheTMtaGlnaC1sb3cnKTtcblxuICAgIGhpZ2hMb3dUZW1wRGF0YS50ZXh0Q29udGVudCA9IGBIaWdoIHRvZGF5IGlzOiAke2RheTNIaWdoVGVtcH1cXHUwMEIwRiBMb3cgdG9kYXkgaXM6ICR7ZGF5M0xvd1RlbXB9XFx1MDBCMEZgO1xuXG4gICAgbGV0IGNoYW5jZU9mUmFpbkRhdGEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXQtZm9yZWNhc3QtZGF5My1yYWluLWNoYW5jZScpO1xuXG4gICAgY2hhbmNlT2ZSYWluRGF0YS50ZXh0Q29udGVudCA9IGBDaGFuY2Ugb2YgUmFpbjogJHtkYXkzUmFpbkNoYW5jZX0lYCBcblxuICAgIGxldCB1dkluZGV4RGF0YSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dC1mb3JlY2FzdC1kYXkzLXV2LWluZGV4Jyk7IFxuXG4gICAgdXZJbmRleERhdGEudGV4dENvbnRlbnQgPSBgVVYgSW5kZXggaXM6ICR7ZGF5M1VWSW5kZXh9YDsgXG5cbiAgICBsZXQgY2hhbmNlT2ZTbm93RGF0YSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dC1mb3JlY2FzdC1kYXkzLXNub3ctY2hhbmNlJyk7XG5cbiAgICBjaGFuY2VPZlNub3dEYXRhLnRleHRDb250ZW50ID0gYENoYW5jZSBvZiBTbm93OiAke2RheTNDaGFuY2VPZlNub3d9JWA7XG5cbn1cblxuLy8gU28gSSBsaWtlIHdhdmVzIHByb2plY3QgbG9vaywgbmV4dCBJIFdpbGwgZmlndXJlIG91dCBhIHdheSBcblxuLy8gbmV4dCBJIHdpbGwgZ2V0IHRoZSAzIGRheSBmb3JlY2FzdCwgXG5cbi8vIEkgYXNzdW1lIGl0IHdvdWxkIGJlIHRoZSBzYW1lIHByb2Nlc3MgZmV0Y2ggdGhlIGRhdGEgXG5cbi8vIGtleSBpbnRvIHRoZSB2YWx1ZSB0aGUgY3VycmVudCBmb3JlY2FzdCBcblxuLy8gSSB0aGluayBJIGFsc28gbmVlZCB0byB3cml0ZSBhIGZ1bmN0aW9uLCBcblxuLy8gdGhhdCB3aWxsIGRpc3BsYXkgdGhlIHRocmVlIGRheSBmb3JlY2FzdCwgXG5cbi8vIHBhc3MgdGhlIHdlYXRoZXIgZGF0YSB0byB0aGF0IHlvdSBnb3QgZnJvbSB0aGUgZmV0Y2ggZGF0YSBmdW5jdGlvbiBcblxuLy8gdG8gdGhlIG90aGVyIGZ1bmN0aW9uIHdoaWNoIHdpbGwganVzdCBkaXNwbGF5IGZvcmVjYXN0IHdlYWh0ZXIgXG5cbi8vIGZvciAzIGRheXMsIFxuXG4vLyBwcm9qZWN0LCAzIGRheSBmb3JlY2FzdCwgXG5cbi8vIHRvZ2dsZSBjZWxpdXMgYW5kIGYgXG5cbi8vIGZpbmQgd2F5IHRvIGNsZWFyIERPTSBiZWZvcmUgYWRkaW5nIG5ldyB2YWx1ZXMsIG5vIGFkZGluZyBvbiBcblxuLy8gYSB3YXkgdG8gaW1wb3J0IGljb25zIGFuZCBnZXQgdGhlIGNvcnJlY3QgcGF0aCBcblxuLy8gaWNvbnMgc2VlbXMgdG8gd29ya2luZyEhIFxuXG4vLyBtYWtlIHRoZSB3ZWF0aGVyIGRlc2NyaXB0aW9uIGVsZW1lbnRzIGFwcGVhciB3aXRoIHRoZSBET00sIFxuXG4vLyBpbnN0ZWFkIG9mIHRoZSBodG1sLCBcblxuLy8gZmluZCBhIHdheSBub3cgdG8ga2V5IGludG8gYW5kIGdldCBmb3JlY2FzdCBcblxuLy8gbmV4dCBzdGVwIGlzIHRvIGtleSBpbnRvIGRhdGEsIGFuZCBnZXQgdGhlIGZvcmVjYXN0IFxuXG4vLyBrZXkgaW50byBjZXJ0YWluIGRheXMsIG1ha2UgYSBIVE1MIGNhcmQsIFxuXG4vLyBhcHBlbmQgdGhlIGRhdGEgdG8gdGhlIGNhcmQsIGFsb25nIHdpdGggbG9nb3MgZm9yIHRoZSB3ZWF0aGVyLCBcblxuLy8gdGhlbiBpbnN0ZWFkIG9mIEhUTUwgTWVzc2FnZXMsIHVzZSBET00gcGx1cyBhcHBlbmQgZGF0YSBcblxuLy8gb25jZSBjdXJyZW50IGFuZCAzIGRheSBmb3JlY2FzdCBpcyBzZXQsIFxuXG4vLyBmaW5kIGEgd2F5IG9yIHdyaXRlIGEgZnVuY3Rpb24gdGhhdCBjYW4gY2hhbmdlZCBmIGRhdGEgdG8gYyBcblxuLy8gc3R5bGUgdXAgYW5kIGRvbmUsIFxuXG4vLyBXZSBrbm93IHdoYXQgd2UgbmVlZCB0byBkbywgZmlyc3QgSSB3b3VsZCBnZXQgdGhlIGNvcnJlY3QgXG5cbi8vIGZvcmVjYXN0IGRhdGEgYW5kIGFwcGVuZCBpbiB0aGUgY29ycmVjdCBzcG90LCBcblxuLy8gdGhlbiBmaXggdGhlIGN1cnJlbnQgd2VhdGhlciB0byB1c2UgRE9NIGRpc3BsYXllZCB0ZXh0LCBcblxuLy8gYWxvbmcgd2l0aCBhdHRhY2hpbmcgdGhlIGljb24sIFxuXG4vLyBzdGFydCB0aGVyZSwgZmlyc3QgbGV0cyBmaW5kIHRoZSBjb3JyZWN0IGZvcmVjYXN0IGZvciB0aGUgMyBkYXksIFxuXG4vLyBvayBsZXRzIGZpcnN0IGdvIHRoZSBIVE1MLCBuYWQgbWFrZSB0aGUgbWFya3VwLCBcblxuLy8gd2Ugd2lsbCBuZWVkIGEgY29udGFpbmVyLCBcblxuLy8gdGhhdCBjYW4gaG9sZCAzIGNhcmRzLCBkaXNwbGF5ZWQgaW4gZmxleCBzbyB0aGV5IGFyZSBpbiBhIHJvdywgXG5cbi8vIGFwcGVuZCB0aGUgdmFsdWVzIHRvIHRoZSBzcGVjaWZpYyBpbnB1dCBmaWVsZHMsIFxuXG4vLyBvayB3ZSBnb3QgdGhlIG1hcmt1cCBcblxuLy8gbm93IEkgdGhpbmsgSSBXb3VsZCBwYXNzIHRoZSBkYXRhIHRvIHRoZSBvdGhlciBmdW5jdGlvbiwgXG5cbi8vIG9rIG90aGVyIGZ1bmN0aW9uIGNhbiBhY2NlcHQgdGhlIGRhdGEsIFxuXG4vLyBhZGQgdGhlIHAgZWxlbWVudHMgb24gZWFjaCBjYXJkLCBhbmQgYXBwZW5kIGRhdGEgYWxvbmcgd2l0aCBhIG1lc3NhZ2UgXG5cbi8vIHAgZWxlbWVudCBhbmQgYXBwZW5kIHRoZSBkYXRlIGFuZCBpY29uIGZpcnN0IGluIHRoZSBzYW1lIGxpbmUgXG5cbi8vIG1ha2UgYSBuZXcgZnVuY3Rpb24gZm9yIGVhY2ggZm9yZWNhc3QgZGF5IFxuXG4vLyBqdXN0IHRvIG1vZHVsYXJpemUgdGhpbmdzIG1vcmUgYW5kIHRvIGF2b2lkIFxuXG4vLyBoYXZpbmcgb25lIGZ1bmN0aW9uIHRvIGFsbCB0aGUgd29yayBhbmQgdGhhdCBmdW5jdGlvbiB3aWxsIFxuXG4vLyBiZSB0b28gYmlnLCBvbmUgZnVuY3Rpb24gZm9yIGVhY2ggZGF5LCBcblxuLy8gcGFzcyB0aGUgZGF0YSB0byB0aG9zZSAzIGZ1bmN0aW9ucywgXG5cbi8vIGl0cyBvbmx5IDQgY2FsbHMsIG9uZSB0byBjdXJyZW50IFxuXG4vLyBvbmUgdG8gY3VycmVudCwgZGF5MSAyIDMgXG5cbi8vIG9rIG5vdyB1c2UgYSBmdW5jdGlvbiB0byBwcmludCB0aGUgZGF0YSBmb3IgZGF5IDIgZm9yZWNhc3QgXG5cbi8vIHVzZSBhIGRpZmZlcmVudCBmdW5jdGlvbiBzbyBpdCBkb2VzIG5vdCBnZXQgdG9vIGJpZyBcblxuLy8gYW5vdGhlciBpc3N1ZSBpcyBnZXR0aW5nIHRoZSBkZWdyZWVzIHN5bWJvbCB0byBzaG93LCBcblxuLy8gYW5kIGlmIHRoZSB1c2VyIGlucHV0cyBhbm90aGVyIHNlYXJjaCwgXG5cbi8vIGNsZWFyIHRoZSBET00gdG8gbWFrZSB3YXkgZm9yIHRoZSBuZXcuIFxuXG4vLyBjaGFuZ2UgYmFja2dyb3VuZCBiYXNlZCBvbiBjb25kaXRpb24gdGV4dCBcblxuLy8gaWYgPT09IHN1bm55IFxuXG4vLyBhcHBlbmQgc3VubnkgYmFja2dyb3VuZCBwaWN0dXJlLCBcblxuLy8gaWYgPT09IHJhaW55IFxuXG4vLyBhcHBlbmQgcmFpbnkgcGljIFxuXG4vLyBJIHRoaW5rIGV2ZXJ5dGhpbmcgaXMgZ29pbmcgb2ssIEkgd2lsbCBtYWtlIHRoZSB3ZWF0aGVyIGRhdGEgZm9yIHRoZSBsYXN0IGRheSBvZiB0aGUgZm9yZWNhc3QsIGNvbW1pdCwgdGhlbiBmaXggdGhlIGh0bWwgYWJvdmUgdG8gdXNlIG9ubHkgdGhlIERPTSBcblxuLy8gSSB3aWxsIGZpeCB0aGUgaHRtbCB0byB1c2UgRE9NIE9ubHksIFxuXG4vLyB0aGVuIHdvcmsgb24gY2xlYXJpbmcgdGhlIERPTSwgc28gdmFsdWVzIGRvIG5vdCBhZGQgb250byBcblxuLy8gSFRNTCBJcyBzZXQsIHNvIGhvdyBkbyBJIGNsZWFyIHRoZSB2YWx1ZXMgZnJvbSB0aGUgRE9NLCBcblxuLy8gYWRkIG5ldyBidXQgcmVwbGFjZSBvbGQsIFxuXG4vLyBoYXZpbmcgaXNzdWUgY2xlYXJpbmcgdGhlIERPTSwgXG5cbi8vIEkgdGhvdWdodCBjbGVhcm5pbmcgaXQgYmVmb3JlIHRoZSBmdW5jdGlvbiBjYWxsIG9yIGluc2lkZSB0aGUgZnVuY3Rpb250aGF0IHdhcyBjYWxsZWQgXG5cbi8vIHdoZXJlIGNhbiBJIGNsZWFyIHRoZSBET00sIFxuXG4vLyBpdCBuZWVkcyB0byBiZSBpbiB0aGUgcmlnaHQgc3BvdCwgXG5cbi8vIGNsZWFyIHRoZSBET00gb25jZSB0aGUgc2VhcmNoIGJ0biBpcyBwcmVzc2VkLCBcblxuLy8gY2xlYXIgb2xkIGRhdGEsIGFkZCB0aGUgbmV3LCBcblxuLy8gT0sgSSB3YXMgYWJsZSB0byBmaWd1cmUgb3V0IHRoZSBkb20gaXNzdWUsIGl0IHdhcyBtb3JlIHRoZSBpY29ucyB0aGF0IEkgaGFkIHRvIHJlcGxhY2UsIGluc3RlYWQgb2YgY2xlYXJuaW5nIHRoZSBkb20gZWFjaCB0aW1lLCBcblxuLy8gc2V0dGluZyB0aGUgdGV4dCBDb250ZW50IG9mIHRoZSBlbGVtZW50LCB0byBlbXB0eSB3aWxsIG1ha2Ugd2F5IGZvciB0aGUgbmV3IHZhbHVlL2ljb24gXG5cbi8vIG5leHQgSSBuZWVkIHRvIGZpZ3VyZSBvdXQgaG93IHRvIHdyaXRlIGEgZnVuY3Rpb24gb3IgcGVyZm9ybSB0aGUgbG9naWMgdGhhdCB3b3VsZCBhbGxvdyBtZSB0byBjaGFuZ2UgdGhlIGYgZGF0YSB0byBjIGRhdGEgXG5cbi8vIGZpcnN0IGxvY2F0ZSBhbGwgdmFsdWVzIHRoYXQgdXNlIGYsIFxuXG4vLyBqdXN0IGNoYW5nZSB0aGUgdGVtcC4gdGhlcmUgaXMgb25lIGluIGN1cnJlbnQgd2VhdGhlciBhbmQgZGF5cywgZWFjaCBkYXkgd2lsbCBuZWVkIHRvIGhpZ2ggYW5kIGxvdyB0ZW1wIGNoYW5nZWQsIFxuXG4vLyBJIGFtIGNvbmZ1c2VkIG9uIGhvdyB0byBhcHByb2FjaCB0aGlzLCBcblxuLy8gYSBmdW5jdGlvbj8gXG5cbi8vIG9uY2UgdGhlIGJ0biBpcyBjbGlja2VkLCBncmFiIHRoZSB2YWx1ZXMsIGdyYWIgYWxsIHRoZSBpbnB1dHMvZmllbGRzLCBjYWxsIGFub3RoZXIgZnVuY3Rpb24sIHdoaWNoIHdpbGwgaW50YWtlIHRoZSBjdXJyZW50IHdlYXRoZXIsIGtleSBpbnRvIHZhbHVlcywgXG5cbi8vIHRoZW4gZGlzcGxheSB0aG9zZSB2YWx1ZXMgdG8gdGhlIERPTT8gIl0sIm5hbWVzIjpbInNlYXJjaEJveCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzZWFyY2hCdG4iLCJ3ZWF0aGVyQ29udGFpbmVyIiwic3RvcmVkV2VhdGhlckRhdGEiLCJmZXRjaERhdGEiLCJpbnB1dCIsImNpdHlEYXRhIiwiY29uc29sZSIsImxvZyIsImdldERhdGEiLCJmZXRjaCIsImpzb25EYXRhIiwianNvbiIsImN1cnJlbnRXZWF0aGVyRGF0YSIsImRpc3BsYXlDdXJyZW50V2VhdGhlciIsImFkZFdlYXRoZXJGb3JlY2FzdDEiLCJhZGRXZWF0aGVyRm9yZWNhc3QyIiwiYWRkV2VhdGhlckZvcmVjYXN0MyIsIndlYXRoZXIiLCJjdXJyZW50V2VhdGhlckljb24iLCJjdXJyZW50Rm9yZWNhc3QiLCJ0ZXh0Q29udGVudCIsIndlYXRoZXJJY29uIiwiSW1hZ2UiLCJzcmMiLCJjdXJyZW50IiwiY29uZGl0aW9uIiwiaWNvbiIsImxvY2F0aW9uRGF0YSIsImxvY2F0aW9uIiwibmFtZSIsIndlYXRoZXJEZXNjcmlwdGlvbkRhdGEiLCJ0ZXh0IiwiY3VycmVudFdlYXRoZXJOdW1iZXJEYXRhIiwiZmVlbHNsaWtlX2YiLCJ3aW5kRGF0YSIsIndpbmRfbXBoIiwid2luZERpcmVjdGlvbiIsIndpbmRfZGlyIiwicmFpbkluY2hlcyIsInByZWNpcF9pbiIsImh1bWlkaXR5TGV2ZWwiLCJodW1pZGl0eSIsIm5ld0ltZyIsImFwcGVuZENoaWxkIiwiY3VycmVudFdlYXRoZXJMb2NhdGlvblRleHQiLCJjdXJyZW50V2VhdGhlckRlc2NyaXB0aW9uVGV4dCIsImN1cnJlbnRXZWF0aGVyVGVtcERhdGEiLCJjdXJyZW50V2VhdGhlcldpbmREYXRhIiwiY3VycmVudFdlYXRoZXJXaW5kRGlyZWN0aW9uIiwiY3VycmVudFdlYXRoZXJSYWluIiwiY3VycmVudEh1bWlkaXR5TGV2ZWwiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImlucHV0VmFsdWUiLCJ2YWx1ZSIsImNlbGNpdXNCdG4iLCJjdXJyZW50Q2VsY2l1c1RlbXAiLCJ0ZW1wX2MiLCJkYXkxSGlnaFRlbXAiLCJmb3JlY2FzdCIsImZvcmVjYXN0ZGF5IiwiZGF5IiwibWF4dGVtcF9jIiwiZGF5MUxvd1RlbXAiLCJtaW50ZW1wX2MiLCJoaWdoTG93VGVtcERhdGEiLCJkYXkySGlnaFRlbXAiLCJkYXkyTG93VGVtcCIsImhpZ2hMb3dUZW1wRGF0YURheTIiLCJkYXkzSGlnaFRlbXAiLCJkYXkzTG93VGVtcCIsImhpZ2hMb3dUZW1wRGF0YURheTMiLCJmQnRuIiwiY3VycmVudEZUZW1wIiwidGVtcF9mIiwibWF4dGVtcF9mIiwibWludGVtcF9mIiwiZm9yZWNhc3REYXRhIiwiaW5wdXRGb3JJbWdEYXkxIiwiZGF5MURhdGUiLCJkYXRlIiwiZGF5MUljb24iLCJjaGFuY2VPZlJhaW4iLCJkYWlseV9jaGFuY2Vfb2ZfcmFpbiIsInV2SW5kZXgiLCJ1diIsImNoYW5jZU9mU25vdyIsImRhaWx5X2NoYW5jZV9vZl9zbm93IiwiYXBwZW5kIiwiZGF0ZUFuZEljb25EYXRhIiwiY2hhbmNlT2ZSYWluRGF0YSIsInV2SW5kZXhEYXRhIiwiY2hhbmNlT2ZTbm93RGF0YSIsImZvcmVjYXN0RGF0YTIiLCJpY29uRGF0YSIsImRheTJEYXRlIiwiZGF5Mkljb25JbWciLCJkYXkyQ2hhbmNlT2ZSYWluIiwiZGF5MlVWSW5kZXgiLCJkYXkyQ2hhbmNlT2ZTbm93IiwiZGF0ZURhdGEiLCJmb3JlY2FzdERhdGEzIiwiZGF5M0RhdGUiLCJkYXkzSW1nSWNvbiIsImRheTNSYWluQ2hhbmNlIiwiZGF5M1VWSW5kZXgiLCJkYXkzQ2hhbmNlT2ZTbm93Il0sInNvdXJjZVJvb3QiOiIifQ==