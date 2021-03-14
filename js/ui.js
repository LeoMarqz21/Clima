export class LoadDataUI {
  constructor(){
     this.location = document.getElementById('weather-location');
     this.description = document.getElementById('weather-description');
     this.weather = document.getElementById('weather-string');
     this.humidity = document.getElementById('weather-humidity');
     this.wind = document.getElementById('weather-wind');
  }

  render(weather){
    this.location.textContent = weather.name + ' / ' + weather.sys.country;
    this.description.textContent = weather.weather[0]['description'];
    this.weather.textContent = weather.main.temp + 'ºC';
    this.humidity.textContent = 'Humidity: ' + weather.main.humidity + '%';
    this.wind.textContent = 'Wind: ' + weather.wind.speed + 'm/s';
  }
}