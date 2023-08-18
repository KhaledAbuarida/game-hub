import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
    key: '7fbec043db1640f28bd84a7bbea8e062'
    }    
})