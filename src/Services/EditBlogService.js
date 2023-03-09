// Implementation of Axios

import axios from "axios";

// const DELETE_BLOG_API = "http://localhost:8001/delete";
// const GET_BLOG_BY_ID = "http://localhost:8001/posts";
// const UPDATE_BLOG = "http://localhost:8001/updateBlog";
const DELETE_BLOG_API = "https://iqwhxy1099.execute-api.us-east-2.amazonaws.com/test/portfolio-api/editposts-api";
const GET_BLOG_BY_ID = "https://iqwhxy1099.execute-api.us-east-2.amazonaws.com/test/portfolio-api/posts-api";
const UPDATE_BLOG = "https://iqwhxy1099.execute-api.us-east-2.amazonaws.com/test/portfolio-api/editposts-api";

class EditBlogService{

    deleteBlog(id){
        return axios.delete(DELETE_BLOG_API + '/' + id);
    }

    getBlogById(id){
        return axios.get(GET_BLOG_BY_ID + '/' + id);
    }

    updateBlog(blog){
        return axios.put(UPDATE_BLOG, blog);
    }

}


export default new EditBlogService();