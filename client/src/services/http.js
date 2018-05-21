import axios from 'axios';
// import settings from '../../../settings.json';
// const host = settings.production ? '/' : 'http://localhost:' + settings['api-port'] + '/';

export default {
    get(url){
        return axios.get(url);
    }
}