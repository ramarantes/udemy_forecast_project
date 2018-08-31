import axios from 'axios';

const rootUrl = `https://api.openweathermap.org/data/2.5/forecast?appid=${config.API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city){
    console.log(city);
    const url = `${rootUrl}&q=${city},br`
    const request = axios.get(url);
    //const res = getData(url);

    console.log("request", request);

    return{
        type: FETCH_WEATHER,
        payload: request
    };
}

// async function getData(url){
//     const res = await axios.get(url);
//     return res;
// }