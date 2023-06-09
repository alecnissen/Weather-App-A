// import './styles.scss';

console.log('\u00B0');


let searchBox = document.getElementById('search-box'); 

let searchBtn = document.getElementById('search-btn'); 

// current weather data stored in here, 
let weatherContainer = document.getElementById('current-weather-container'); 

let storedWeatherData

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

celciusBtn.addEventListener('click', (e) => {

    let currentCelciusTemp = storedWeatherData.current.temp_c; 

    let currentWeatherTempData = document.getElementById('current-weather-temp-data'); 

    currentWeatherTempData.textContent = `Temprature Is: ${currentCelciusTemp} C`; 

    let day1HighTemp = storedWeatherData.forecast.forecastday[0].day.maxtemp_c;

    let day1LowTemp = storedWeatherData.forecast.forecastday[0].day.mintemp_c;

    let highLowTempData = document.getElementById('input-forecast-day1-high-low'); 

    highLowTempData.textContent = `High today is: ${day1HighTemp} C Low today is: ${day1LowTemp} C`;

    let day2HighTemp = storedWeatherData.forecast.forecastday[1].day.maxtemp_c;

    let day2LowTemp = storedWeatherData.forecast.forecastday[1].day.mintemp_c; 

    let highLowTempDataDay2 = document.getElementById('input-forecast-day2-high-low');

    highLowTempDataDay2.textContent = `High Today is: ${day2HighTemp} C Low today is: ${day2LowTemp} C`;  

    // 

    let day3HighTemp = storedWeatherData.forecast.forecastday[2].day.maxtemp_c;

    let day3LowTemp = storedWeatherData.forecast.forecastday[2].day.mintemp_c;

    let highLowTempDataDay3 = document.getElementById('input-forecast-day3-high-low');

    highLowTempDataDay3.textContent = `High today is: ${day3HighTemp} C Low today is: ${day3LowTemp} C`;
    
}); 

let fBtn = document.getElementById('F-toggle-btn'); 

fBtn.addEventListener('click', (e) => {

    let currentFTemp = storedWeatherData.current.temp_f; 

    let currentWeatherTempData = document.getElementById('current-weather-temp-data');

    currentWeatherTempData.textContent = `Temprature Is: ${currentFTemp} F`;

    let day1HighTemp = storedWeatherData.forecast.forecastday[0].day.maxtemp_f;

    let day1LowTemp = storedWeatherData.forecast.forecastday[0].day.mintemp_f;

    let highLowTempData = document.getElementById('input-forecast-day1-high-low'); 

    highLowTempData.textContent = `High today is: ${day1HighTemp} F Low today is: ${day1LowTemp} F`; 

    let day2HighTemp = storedWeatherData.forecast.forecastday[1].day.maxtemp_f;

    let day2LowTemp = storedWeatherData.forecast.forecastday[1].day.mintemp_f; 

    let highLowTempDataDay2 = document.getElementById('input-forecast-day2-high-low');

    highLowTempDataDay2.textContent = `High Today is: ${day2HighTemp} F Low today is: ${day2LowTemp} F`; 

    // 

    let day3HighTemp = storedWeatherData.forecast.forecastday[2].day.maxtemp_f;

    let day3LowTemp = storedWeatherData.forecast.forecastday[2].day.mintemp_f;

    let highLowTempDataDay3 = document.getElementById('input-forecast-day3-high-low');

    highLowTempDataDay3.textContent = `High today is: ${day3HighTemp} F Low today is: ${day3LowTemp} F`;
    
})


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

    highLowTempData.textContent = `High today is: ${day1HighTemp} F Low today is: ${day1LowTemp} F`;

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

    highLowTempData.textContent = `High Today is: ${day2HighTemp} F Low today is: ${day2LowTemp} F`; 

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

    highLowTempData.textContent = `High today is: ${day3HighTemp} F Low today is: ${day3LowTemp} F`;

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

// OK I was able to figure out the dom issue, it was more the icons that I had to replace, instead of clearning the dom each time, 

// setting the text Content of the element, to empty will make way for the new value/icon 

// next I need to figure out how to write a function or perform the logic that would allow me to change the f data to c data 

// first locate all values that use f, 

// just change the temp. there is one in current weather and days, each day will need to high and low temp changed, 

// I am confused on how to approach this, 

// a function? 

// once the btn is clicked, grab the values, grab all the inputs/fields, call another function, which will intake the current weather, key into values, 

// then display those values to the DOM? 