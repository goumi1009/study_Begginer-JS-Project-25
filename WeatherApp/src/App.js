import Input from './components/Input.js';
const API_KEY = 'a65fb08488afa0b98629a4a7d5bb4123';

export default function ({ targetEl }) {
  const searchFormEl = document.createElement('form');
  searchFormEl.classList.add('search-form');
  targetEl.appendChild(searchFormEl);

  const searchToggleEl = document.createElement('button');
  searchToggleEl.type = 'button';
  searchToggleEl.textContent = 'toggle';
  searchFormEl.appendChild(searchToggleEl);

  const searchInput = new Input({
    targetEl: searchFormEl,
    labelText: 'Search weather',
  });

  this.state = {
    keyword: '',
    weather: {},
  };

  this.setState = (nextState) => {
    this.state = nextState;
    searchInput.setState('');
    this.weatherRender();
  };

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

  const weatherIcon = document.createElement('img');

  this.weatherRender = () => {
    weatherIcon.src = `./src/assets/${this.state.weather.weather[0].icon}.svg`;
    targetEl.appendChild(weatherIcon);
  };
}
