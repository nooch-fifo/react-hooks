// const deletePostAPI = "http://localhost:8001/delete"

// const getPostByIdAPI = "http://localhost:8001/posts"

// class EditPostsService {
//     deletePost(id) {
//         return fetch(deletePostAPI + '/' + id,
//             {
//                 method: 'delete',
//                 headers: {
//                     'Accept': 'application/json',
//                     'Content-Type': 'application/json'
//                 }
//             })
//             .then((res => res.text()));
//     }

//     getPostById(id){
//         return fetch(getPostByIdAPI + '/' + id,
//         {
//             method: 'get'
//         })
//         .then((res => res.json()));
//     }
// }

// export default new EditPostsService();


// Implementation of Axios

import axios from "axios";

const DELETE_BLOG_API = "http://localhost:8001/delete";

class EditBlogService{

    deleteBlog(id){
        return axios.delete(DELETE_BLOG_API + '/' + id);
    }

}


export default new EditBlogService();