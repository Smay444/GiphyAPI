import axios from 'axios';

export default{
    getGiphys(){
        return axios.get("api.giphy.com/v1/gifs/search?api_key=UZ6s5nfxK2FwIw1toENimYb97mijgbkw&q=dog")
    }
}