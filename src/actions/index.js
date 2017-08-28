import axios from 'axios';

const API_KEY = 'a3b63e7d030e8b06b9e5cbc8812326ce';
const ROOT_URL = `http://samples.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather( city ){
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get( url );
    return {
        type: FETCH_WEATHER,
        payload: request
    };
}