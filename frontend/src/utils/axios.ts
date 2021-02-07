import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://18.224.109.88/'
});

export default instance;
