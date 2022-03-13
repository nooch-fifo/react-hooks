import axios from "axios";

const GET_LATEST_API = 'http://localhost:8001/';


class LatestBlogService{
    getLatest(){
        return axios.get(GET_LATEST_API);
    }
}

export default new LatestBlogService();