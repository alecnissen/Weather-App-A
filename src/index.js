
let searchBox = document.getElementById('search-box'); 

let searchBtn = document.getElementById('search-btn'); 

// current weather data stored in here, 
let weatherContainer = document.getElementById('current-weather-container'); 

// tried this one too, no luck,
// let currentContainer = document.getElementById('current-weather-data');

// hello I am having difficulty clearing the DOM, in my current weather container, 

// I want it so when user enters new value, it will clear the old, 

// and make way for the new, right now, it will clear but 

// I cannot add the new values back in, 

// I've tried, clearing the DOM container once the search btn has been pressed, before the function calls, but nothing seems to be going through 

// attaching code pen, anyone know how I can achieve this? 

async function fetchData(input) { 

    let cityData = input; 
    console.log('The data passed in is: ' + cityData);
    const getData = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=45464da38892450d95f10433230506 &q=${cityData}&days=5&aqi=no&alerts=no`);
    const jsonData = await getData.json();
    // console.log(jsonData); 
    // let currentWeatherData = jsonData.current.condition.text; 
    let currentWeatherData = jsonData;
    // console.log(currentWeatherData);

   //  weatherContainer.clear();

   displayCurrentWeather(currentWeatherData);

   addWeatherForecast1(currentWeatherData);

   addWeatherForecast2(currentWeatherData);

   addWeatherForecast3(currentWeatherData); 

} 
 

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

   currentWeatherDescriptionText.textContent = `Conditions: ${weatherDescriptionData}`

   let currentWeatherTempData = document.getElementById('current-weather-temp-data'); 

   currentWeatherTempData.textContent = `Temprature is: ${currentWeatherNumberData} F`;

   let currentWeatherWindData = document.getElementById('current-weather-wind-data'); 

   currentWeatherWindData.textContent = `Wind Speed: ${windData} mph`;

   let currentWeatherWindDirection = document.getElementById('current-weather-wind-direction-data');

   currentWeatherWindDirection.textContent = `Wind Direction: ${windDirection}`;

   let currentWeatherRain = document.getElementById('current-weather-rain-inches-data');

   currentWeatherRain.textContent = `Rain: ${rainInches} in`;

   let currentHumidityLevel = document.getElementById('current-weather-humidity-data'); 

   currentHumidityLevel.textContent = `Humidity: ${humidityLevel}%`

} 

// needs to somehow be cleared in the search btn 

searchBtn.addEventListener('click', (e) => { 
   //  weatherContainer.replaceChildren(); 

    let inputValue = searchBox.value;

    // console.log(inputValue);

    fetchData(inputValue);
});

//  let x = currentForecast.forecast.forecastday[0].day; 

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

    highLowTempData.textContent = `High today is: ${day1HighTemp} Low today is: ${day1LowTemp}`;

    let chanceOfRainData = document.getElementById('input-forecast-day-1-rain-chance');
    
    chanceOfRainData.textContent = `Chance of Rain: ${chanceOfRain}%` 

    let uvIndexData = document.getElementById('input-forecast-day-1-uv-index');

    uvIndexData.textContent = `UV Index is: ${uvIndex}`;

    let chanceOfSnowData = document.getElementById('input-forecast-day-1-snow-chance'); 

    chanceOfSnowData.textContent = `Chance of Snow: ${chanceOfSnow}%`

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

    highLowTempData.textContent = `High Today is: ${day2HighTemp} Low today is: ${day2LowTemp}`; 

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

    highLowTempData.textContent = `High today is: ${day3HighTemp} Low today is: ${day3LowTemp}`;

    let chanceOfRainData = document.getElementById('input-forecast-day3-rain-chance');

    chanceOfRainData.textContent = `Chance of Rain: ${day3RainChance}%` 

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