import { ref } from 'vue';
import axios from 'axios';

export default function useBase() {     
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + getCookie2('token');
    axios.defaults.headers.common['Content-Type'] = 'application/json';
    axios.defaults.baseURL = "http://192.168.0.253:8000/api/";
    function getCookie2(cookieName) {
        let cookie = {};
        document.cookie.split(';').forEach(function (el) {
            let [key, value] = el.split('=');
            cookie[key.trim()] = value;
        })
        return cookie[cookieName];
    }

    return {
        ref, axios, getCookie2
    }
}

