import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import './InfoBox.css';

export default function InfoBox({ info }) {
  const INIT_URL =
    'https://images.unsplash.com/photo-1680352267694-a7fd4c33d4e1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

  const HOT_URL =
    'https://images.unsplash.com/photo-1504386106331-3e4e71712b38?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
  const COLD_URL =
    'https://images.unsplash.com/photo-1528191710846-99b8717a2830?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
  const RAIN_URL =
    'https://images.unsplash.com/photo-1519692933481-e162a57d6721?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

  return (
    <div className='InfoBox'>
      <Card className='card'>
        <CardMedia
          className='cardMedia'
          image={
            info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL
          }
          title='Weather Image'
        />
        <CardContent className='cardContent'>
          <Typography variant='h5' component='div' className='city-info'>
            {info.city}
            {info.humidity > 80 ? (
              <ThunderstormIcon className='icon' />
            ) : info.temp > 15 ? (
              <WbSunnyIcon className='icon' />
            ) : (
              <AcUnitIcon className='icon' />
            )}
          </Typography>
          <Typography className='temperature'>{info.temp}°C</Typography>
          <Typography variant='body2' color='text.secondary'>
            <div>Humidity: {info.humidity}%</div>
            <div>Min Temp: {info.tempMin}°C</div>
            <div>Max Temp: {info.tempMax}°C</div>
            <div className='weather-description'>
              The weather can be described as a <i>{info.weather}</i> and feels
              like {info.feelslike}°C.
            </div>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
