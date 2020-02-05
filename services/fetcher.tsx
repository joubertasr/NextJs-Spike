import axios from 'axios';

export default function fetcher(url) {
    return axios.get(url)
}