import SearchBox from './SearchBox';
import InfoBox from './InfoBox';
import './WeatherInfo.css';

import { useState } from 'react';

export default function WeatherInfo() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: 'Sunshine',
    feelslike: 24.84,
    temp: 25.05,
    tempMin: 25.05,
    tempMax: 25.05,
    humidity: 47,
    weather: 'haze',
  });

  let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h3 className='Heading'>Weather App</h3>
      <SearchBox updateInfo={updateInfo} />
      <InfoBox info={weatherInfo} />
    </div>
  );
}
