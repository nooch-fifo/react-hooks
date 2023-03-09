//Implementation of Axios 

import axios from "axios";

// const GET_LIST_API = "http://localhost:8001/posts";
// const GET_SLUG_API = "http://localhost:8001/post"
const GET_LIST_API = "https://iqwhxy1099.execute-api.us-east-2.amazonaws.com/test/portfolio-api/posts-api"
const GET_SLUG_API = "https://iqwhxy1099.execute-api.us-east-2.amazonaws.com/test/portfolio-api/slug-api"

class BlogPostsService{
    getAllPosts(){
        return axios.get(GET_LIST_API);
    }

    getPostBySlug(slug){
        return axios.get(GET_SLUG_API + "/" + slug);
    }
}

export default new BlogPostsService();