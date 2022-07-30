let weather = {
    apiKey: "465f2845598bbcb754f736e17d4213d7",
    fetchWeather: function (city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + this.apiKey + "&units=metric")
            .then((response) => response.json())
            .then((data) => this.displayWeather(data));
    },
    displayWeather: function (data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        console.log(name, icon, description, temp, humidity, speed)
        document.querySelector("#CityName").innerHTML = name;
        document.querySelector("#temp").innerHTML = temp + "°";
        document.querySelector("#icon").src = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
        document.querySelector("#humidity").innerHTML = "Humidity:" + humidity + "°";
        document.querySelector("#windspeed").innerHTML = "Wind Speed:" + speed + " Km/h";
        document.querySelector("#description").innerHTML=description;
        document.querySelector(".weather").classList.remove("loading")
    },
    search: function(){
        this.fetchWeather(document.querySelector("#search").value)
    }
}

document.querySelector("#search_button").addEventListener("click", function(){
weather.search();
})

document.querySelector("#search").addEventListener("keyup", function(event){
if(event.key=="Enter"){
    weather.search();
}
})

weather.fetchWeather("Tokyo")