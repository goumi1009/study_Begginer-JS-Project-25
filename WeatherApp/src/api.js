const API_KEY = 'a65fb08488afa0b98629a4a7d5bb4123';

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

export default requestWeather;
