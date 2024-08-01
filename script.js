let apikey = 'c0b54a49d8207b8a6cbc9e2ac0ef0bd1';
let apiurl = 'https://api.openweathermap.org/data/2.5/weather';
let iconurl = 'https://openweathermap.org/img/wn/';


let locationInput = document.getElementById('locationInput');
let searchButton = document.getElementById('searchButton');
let locationdisplay = document.getElementById('locationdisplay');
let temperature = document.getElementById('temperature');
let description = document.getElementById('description');
let wicon = document.getElementById('wicon');
let favicon = document.getElementById('favicon');
let title = document.getElementById('title');
let minmax = document.getElementById('minmax');
let windspeed = document.getElementById('windspeed');
let feelLike = document.getElementById('feelLike');

searchButton.addEventListener('click',()=>{
    let mylocation = locationInput.value;
    if(mylocation){
        fetchweather(mylocation);
    }
});
locationInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        let mylocation = locationInput.value;
        if (mylocation) {
            fetchweather(mylocation);
        }
    }
});


function fetchweather(mylocation){
    let url = `${apiurl}?q=${mylocation}&appid=${apikey}&unit=metric`;
    console.log(url)
    fetch(url)
    .then(response => response.json())
    .then(data => {
        locationdisplay.textContent = `${data.name} (${data.sys.country})`;
        title.textContent = `${data.name} ${Math.round((data.main.temp)-273)}°C`;
        temperature.textContent = `${Math.round((data.main.temp)-273)}°C`;
        description.textContent = (data.weather[0].description).toUpperCase();
        wicon.src = `${iconurl}${data.weather[0].icon}@2x.png`;
        favicon.href = `${iconurl}${data.weather[0].icon}@2x.png`;
        minmax.innerHTML = `<span style="color:#fff;">Max / Min</span><br><br>${Math.round((data.main.temp_max) - 273)}°C / ${Math.round((data.main.temp_min) - 273)}°C`;
        feelLike.innerHTML = `<span style="color:#fff;">Feel Like</span><br><br>${Math.round((data.main.feels_like)-273)}°C`;
        windspeed.innerHTML = `<span style="color:#fff;">Wind</span><br><br>${data.wind.speed} Km/Hr`;
    });
}

document.addEventListener('DOMContentLoaded', () => {
    let defaultLocation = locationInput.value;
    fetchweather(defaultLocation);
});