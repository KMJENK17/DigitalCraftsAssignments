const showWeatherButton = document.getElementById('showWeatherButton')
const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=queens&appid=bb611625250c7bcc999039fbf9a4a115&units=imperial`
const usersUL = document.getElementById('usersUL')
const cityName = document.getElementById('cityName')


function weatherInfo(weather) {
    fetch(weatherUrl)
        .then(response => {
            return response.json()
        }).then(result => {
            console.log(result)
            displayWeather(result)
        }).catch(error => {
            console.log(error)
        })
}

function displayWeather(data) {
    const weatherData = data.main
    const weatherInfoLabel =
        ` <h1>${data.name}</h1> 
    <label>Min Temperature: ${weatherData.temp_min}</label>
    <label>Max Temperature: ${weatherData.temp_max}</label>
    <label>Pressure: </b> ${weatherData.pressure}</label> `
    usersUL.innerHTML = weatherInfoLabel
}

weatherInfo(function(result) {
    displayWeather(result)

})
showWeatherButton.addEventListener('click', function() {
    const cityNameInfo = cityName.value
    displayWeather(cityNameInfo)
})