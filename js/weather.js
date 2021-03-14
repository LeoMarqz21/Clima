export class Weather {
  constructor(city,countryCode){
    this.ApiKey = "147206005de53910b8c8a5724d3684c5";
    this.city = city;
    this.countryCode = countryCode;
  }

  async getWeather(){
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.countryCode}&appid=${this.ApiKey}&units=metric`;
    const response = await fetch(URL);
    const data = await response.json();
    return data;
  }

  changeLocation(city, countryCode){
    this.city = city;
    this.countryCode = countryCode;
  }
}