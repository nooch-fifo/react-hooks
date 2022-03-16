// Implementation of Axios

import axios from "axios";

const DELETE_BLOG_API = "http://localhost:8001/delete";
const GET_BLOG_BY_ID = "http://localhost:8001/posts";
const UPDATE_BLOG = "http://localhost:8001/updateBlog"

class EditBlogService{

    deleteBlog(id){
        return axios.delete(DELETE_BLOG_API + '/' + id);
    }

    getBlogById(id){
        return axios.get(GET_BLOG_BY_ID + '/' + id);
    }

    // 500 error on API call - may have to add ID
    updateBlog(blog){
        return axios.put(UPDATE_BLOG, blog);
    }

}


export default new EditBlogService();