const container = document.querySelector('.container')
const search = document.querySelector('.search-box button')
const input = document.querySelector('.search-box input')
const weatherData = document.querySelector('.weather-data')
const weatherBox = document.querySelector('.weather-box')
const weatherDetails = document.querySelector('.weather-details')
const sunDetails = document.querySelector('.sun-details')
const APIKey = '38f72dab54c470f7beaae93b7eb42290'
const loader = document.querySelector('.loader')
const error = document.querySelector('.error')

async function getWeather() {

    weatherData.classList.remove('active')
    loader.classList.add('active')

    const city = document.querySelector('.search-box input').value

    if(city == '')
        return

    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}&units=metric`
        );
    
        const data = await response.json();
    
        //console.log(data)
        showData(data)
    }
    catch(err) {
        loader.classList.remove('active')
        weatherData.classList.remove('active')
        error.classList.add('active')
    }
    
}

function showData(data)
{
    error.classList.remove('active')
    loader.classList.remove('active')
    weatherData.classList.add('active')

    const image = document.querySelector('.weather-box img')
    const temperature = document.querySelector('.weather-box .temperature span')
    const description = document.querySelector('.weather-box .description')
    const humidity = document.querySelector('.weather-details .humidity span')
    const wind = document.querySelector('.weather-details .wind span')
    const clouds = document.querySelector('.weather-details .clouds span')
    const sunrise = document.querySelector('.sun-details .sunrise span')
    const sunset = document.querySelector('.sun-details .sunset span')

    image.src = `images/${data.weather[0].main}.png`
    temperature.innerHTML = `${parseInt(data.main.temp)}`
    description.innerHTML = `${data.weather[0].description}`
    humidity.innerHTML = `${data.main.humidity}`
    wind.innerHTML = `${data.wind.speed}`
    clouds.innerHTML = `${data.clouds.all}`
    sunrise.innerHTML = `${new Date(data.sys.sunrise * 1000).toLocaleTimeString()}`
    sunset.innerHTML = `${new Date(data.sys.sunset * 1000).toLocaleTimeString()}`
}

search.addEventListener('click', () => {
    getWeather();
})

input.addEventListener('keypress', function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        search.click();
    }
});