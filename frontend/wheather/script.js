 //Weather Info Fetcher project
  console.log("=== Weather InfoFetcher Project ===");

const cities = {
  "bangalore": { lat: 12.97, lon: 77.59 },
  "tpt": { lat: 13.97, lon: 78.59 },
  "jmd": { lat: 11.97, lon: 79.59 },
  "mumbai": { lat: 19.07, lon: 72.88 }
};

document.getElementById("fetchbtn").addEventListener("click", () => {
  let city = document.getElementById("cityInput").value.toLowerCase();

  if (!cities[city]) {
    document.getElementById("weather").innerHTML = "City not in list";
    return;
  }

  let coords = cities[city];
  let url = `https://api.open-meteo.com/v1/forecast?latitude=${coords.lat}&longitude=${coords.lon}&current_weather=true`;

  fetch(url)
    .then(res => res.json())
    .then(data => {
      if (data.current_weather) {
        document.getElementById("weather").innerHTML = `
          <h2>Weather in ${city}</h2>
          <p>Temperature: ${data.current_weather.temperature}°C</p>
          <p>Wind Speed: ${data.current_weather.windspeed} km/h</p>
          <p>Weather Code: ${data.current_weather.weathercode}</p>
        `;
      } else {
        document.getElementById("weather").innerHTML = "<p>Weather data not available.</p>";
      }
    })
    .catch(error => {
      console.error('Error fetching weather data:', error);
      document.getElementById("weather").innerHTML = "<p>Error fetching weather data.</p>";
    });
});
