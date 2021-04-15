import axios from "axios";

const request = axios.create({
    baseURL: 'https://youtube.googleapis.com/youtube/v3/',
    params : {
        key : "AIzaSyDmL3U-hNwja_Q3rl3jXIFiHEdAkMZXARI",
    }
})

export default request;