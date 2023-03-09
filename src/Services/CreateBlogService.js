import axios from "axios";

// const CREATE_BLOG_API = "http://localhost:8001/addBlog";
// const CREATE_BLOG_API = "http://domsportfolioelb-env.eba-rfqt3pm2.us-east-2.elasticbeanstalk.com/addBlog";
const CREATE_BLOG_API = "https://iqwhxy1099.execute-api.us-east-2.amazonaws.com/test/portfolio-api/addblog-api";

class CreateBlogService {

    postBlog(blog) {
        return axios.post(CREATE_BLOG_API, blog, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        });
    }

}



export default new CreateBlogService();