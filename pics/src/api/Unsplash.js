import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 889df13b13b42b1789508258c3ea9404d11bfec6f231576f8e6af320f67ca0cb'
    }
})