import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css';
import { useState } from 'react';

export default function SearchBox({ updateInfo }) {
  let [city, setCity] = useState('');
  let [error, setError] = useState(false);

  const API_URL = 'https://api.openweathermap.org/data/2.5/weather';
  const API_KEY = 'b7197fe1e13ebefeb4670e5bf07b9b07';

  let getWeatherInfo = async () => {
    try {
      let response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );
      let jsonResponse = await response.json();

      if (jsonResponse.cod !== 200) {
        throw new Error('No such place exists!');
      }

      let result = {
        city: city,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelslike: jsonResponse.main.feels_Like,
        weather: jsonResponse.weather[0].description,
      };
      return result;
    } catch (err) {
      throw err;
    }
  };

  let handleChange = (evt) => {
    setCity(evt.target.value);
  };

  let handleSubmit = async (evt) => {
    try {
      evt.preventDefault();
      setError(false); 
      let newInfo = await getWeatherInfo();
      updateInfo(newInfo);
      setCity(''); 
    } catch (err) {
      setError(true); 
    }
  };

  return (
    <div className='SearchBox'>
      <form onSubmit={handleSubmit}>
        <TextField
          id='City'
          label='City Name'
          variant='outlined'
          required
          value={city}
          onChange={handleChange}
        />
        <br />
        <br />
        <Button variant='contained' type='submit'>
          Search
        </Button>
        {error && <p style={{ color: 'red' }}>No such place exists!</p>}
      </form>
    </div>
  );
}

