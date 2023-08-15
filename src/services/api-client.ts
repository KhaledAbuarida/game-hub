import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
    key: 'ae04a4df5b99442c8f063f37189cc5d8'
    }    
})