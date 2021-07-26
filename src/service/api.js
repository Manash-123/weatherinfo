import axios from 'axios';


const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = '4d89b2ed4316159b566384e04eca41cf';

export const getData = async(city, country) => {
     return await axios.get(`${URL}?q=${city},${country}&appid=${API_KEY}&units=metric`)
}