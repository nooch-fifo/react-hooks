import axios from "axios";

const CREATE_BLOG_API = "http://localhost:8001/addBlog";

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