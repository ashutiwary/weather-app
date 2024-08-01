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
        locationdisplay.textContent = data.name;
        title.textContent = `${data.name} ${Math.round((data.main.temp)-273)}°C`;
        temperature.textContent = `${Math.round((data.main.temp)-273)}°C`;
        description.textContent = (data.weather[0].description).toUpperCase();
        wicon.src = `${iconurl}${data.weather[0].icon}@2x.png`;
        favicon.href = `${iconurl}${data.weather[0].icon}@2x.png`;
    });
}

document.addEventListener('DOMContentLoaded', () => {
    let defaultLocation = locationInput.value;
    fetchweather(defaultLocation);
});