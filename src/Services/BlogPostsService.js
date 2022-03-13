// const listAPI = "http://localhost:8001/posts";

// const slugAPI = "http://localhost:8001/post"

// class BlogPostsService{
//     getAllPosts(){
//         return fetch(listAPI)
//         .then((res=>res.json()));
//     }

//     getPostBySlug(slug){
//         return fetch(slugAPI + "/" + slug,
//         {
//             method: 'get'
//         })
//         .then((res => res.json()));
//     }
// }

// export default new BlogPostsService();



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