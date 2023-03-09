import axios from "axios";

// const GET_LATEST_API = 'http://localhost:8001/';
// const GET_LATEST_API = 'http://domsportfolioelb-env.eba-rfqt3pm2.us-east-2.elasticbeanstalk.com/';
const GET_LATEST_API = 'https://iqwhxy1099.execute-api.us-east-2.amazonaws.com/test/portfolio-api';

class LatestBlogService{
    getLatest(){
        return axios.get(GET_LATEST_API);
    }
}

export default new LatestBlogService();