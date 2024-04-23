import axios from 'axios';

const API_KEY = 'UZ6s5nfxK2FwIw1toENimYb97mijgbkw';
const API_BASE_URL = 'http://api.giphy.com/v1/gifs/search';

export default{
    getGiphys(query){
        const url = `${API_BASE_URL}?api_key=${API_KEY}&q=${query}`;
        return axios.get(url);
        //return axios.get("http://api.giphy.com/v1/gifs/search?api_key=UZ6s5nfxK2FwIw1toENimYb97mijgbkw&q=dog")
    }
}