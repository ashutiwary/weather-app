# Weather App

A simple weather app that allows users to search for the current weather based on a city or zip code. It fetches real-time weather data from the OpenWeather API and displays key weather information like temperature, description, and wind speed.

## Features
- Allows users to search for weather by city or zip code.
- Displays the current temperature, weather description, wind speed, and additional details like max/min temperature and "feels like" temperature.
- Displays weather icons corresponding to the weather condition.
- Automatically fetches the weather for a default city ("Delhi") when the app is loaded.

## Tech Stack
- **HTML** for the structure of the webpage.
- **CSS** for styling the webpage and making it visually appealing.
- **JavaScript** for fetching weather data from the OpenWeather API and manipulating the DOM.

## API Used
- **OpenWeatherMap API**: This app uses the OpenWeather API to get the current weather data based on city name or zip code. To use the app, you need an API key from [OpenWeatherMap](https://openweathermap.org/).

## File Structure
- `index.html`: The main HTML file that defines the structure of the webpage.
- `style.css`: The CSS file that contains the styles for the app.
- `script.js`: The JavaScript file that handles fetching weather data and manipulating the DOM.

## How It Works
1. The user enters a city or zip code in the input field and presses the **Search** button or presses **Enter**.
2. The app fetches the weather data for the inputted location from the OpenWeather API using the city or zip code provided.
3. The weather details are displayed, including:
   - **Location** (city name and country)
   - **Temperature** (in Celsius)
   - **Description** (e.g., Clear sky, Clouds)
   - **Max/Min Temperature**
   - **Feel Like** temperature
   - **Wind Speed**
   - **Weather Icon** to visually represent the current weather

## Getting Started
1. Clone the repository or download the code.
2. Create an account on [OpenWeatherMap](https://openweathermap.org/) and obtain an API key.
3. Replace the `apikey` variable in the `script.js` file with your own API key.
4. Open the `index.html` file in your browser to use the weather app.

## How to Use
1. **Search by City or Zip Code**: Enter a city name or a zip code in the input field and click **Search** or press **Enter**.
2. **Default Location**: The app will default to showing the weather of "Delhi" when it first loads.

## Example
- **City**: Delhi
- **Weather**: Clear sky, 25°C, Max 28°C / Min 18°C, Winds at 5 km/h

## Screenshots

_(Optional: Add screenshots of your weather app UI here)_

## License
This project is open-source and available under the MIT License.

