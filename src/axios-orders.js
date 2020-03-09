import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-28d12.firebaseio.com/'
});

export default instance