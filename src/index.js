console.log('TEE');
console.log("asdfsdf"); 
console.log("TESTING!");
console.log("using template repo"); 


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



async function fetchData() { 
    const getData = await fetch('http://api.weatherapi.com/v1/forecast.json?key=45464da38892450d95f10433230506 &q=lansdale&days=5&aqi=no&alerts=no');
    const jsonData = await getData.json();
    // const keyInData = jsonData.data
     console.log(jsonData); 
} 

fetchData();



// let searchBox = document.getElementById('search-box'); 

// console.log(searchBox);

// searchBox.addEventListener('input', (e) => { 
//     // let cityData = e.target.value; 

//     // console.log(cityData);
//      fetch(`http://api.weatherapi.com/v1/forecast.json?key=45464da38892450d95f10433230506 &q=${searchBox.value}&days=5&aqi=no&alerts=no`)
//      .then(function(response) {
//         // return response.json();
//         console.log(response.json());
//      })
// })