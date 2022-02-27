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
    console.log(nextState);
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

  const weatherIcon = document.createElement('img');

  this.weatherRender = () => {
    weatherIcon.src = `./src/assets/${this.state.weather.weather[0].icon}.svg`;
    targetEl.appendChild(weatherIcon);
  };
}
