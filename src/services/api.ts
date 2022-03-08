import axios from 'axios';

console.log('process.env', process.env.BASE_URL);

const api = axios.create({
    baseURL: 'https://discord.com/api'
});

export { api };