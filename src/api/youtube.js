import axios from 'axios'
const KEY = 'AIzaSyB-LZQT0OZKqIXcXB4OBbVnisQtq74S76Y';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: '5',
        type: 'video',
        key: KEY
    }
})