import Button from './components/Button.js';
import Input from './components/Input.js';
const API_KEY = 'a65fb08488afa0b98629a4a7d5bb4123';

export default function ({ targetEl }) {
  this.showSearch = false;
  this.setShowSearch = (showState) => {
    this.showSearch = showState;
    this.formRender();
  };

  this.state = {
    keyword: '',
    weather: {},
  };
  this.setState = (nextState) => {
    this.state = nextState;
    searchInput.setState('');
    this.weatherRender();
  };

  const searchFormEl = document.createElement('form');
  searchFormEl.classList.add('search-form');
  targetEl.appendChild(searchFormEl);

  this.formRender = () => {
    if (this.showSearch) {
      searchFormEl.classList.add('show');
    } else {
      searchFormEl.classList.remove('show');
    }
  };

  new Button({
    targetEl,
    textContent: 'Toggle',
    onClick: (e) => {
      this.setShowSearch(!this.showSearch);
    },
  });

  const searchInput = new Input({
    targetEl: searchFormEl,
    labelText: 'Search weather',
  });

  const requestWeather = (keyword) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${keyword}&units=metric&lang=kr&appid=${API_KEY}`
    )
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          ...this.state,
          weather: data,
        })
      );
  };

  searchFormEl.addEventListener('submit', (e) => {
    e.preventDefault();
    requestWeather(searchInput.state);
  });

  const weatherBox = document.createElement('div');
  weatherBox.classList.add('weather-box');

  this.weatherRender = () => {
    const { weather } = this.state;
    weatherBox.innerHTML = `
      <img src="./src/assets/${weather.weather[0].icon}.svg" alt="" />
      <h1>${weather.name}</h1>
      <p>${weather.main.temp}℃</p>
      
    `;
    targetEl.appendChild(weatherBox);
  };
}
