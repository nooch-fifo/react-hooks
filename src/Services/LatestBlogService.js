import axios from "axios";

const GET_LATEST_API = 'http://localhost:8001/';

//refactor to Axios or keep Fetch?

class LatestBlogService{
    getLatest(){
        return axios.get(GET_LATEST_API);
    }
}

export default new LatestBlogService();