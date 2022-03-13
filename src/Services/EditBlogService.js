//     getPostById(id){
//         return fetch(getPostByIdAPI + '/' + id,
//         {
//             method: 'get'
//         })
//         .then((res => res.json()));
//     }
// }


// Implementation of Axios

import axios from "axios";

const DELETE_BLOG_API = "http://localhost:8001/delete";

class EditBlogService{

    deleteBlog(id){
        return axios.delete(DELETE_BLOG_API + '/' + id);
    }

}


export default new EditBlogService();