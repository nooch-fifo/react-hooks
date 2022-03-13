//Implementation of Axios 

import axios from "axios";

const GET_LIST_API = "http://localhost:8001/posts";
const GET_SLUG_API = "http://localhost:8001/post"

class BlogPostsService{
    getAllPosts(){
        return axios.get(GET_LIST_API);
    }

    getPostBySlug(slug){
        return axios.get(GET_SLUG_API + "/" + slug);
    }
}

export default new BlogPostsService();