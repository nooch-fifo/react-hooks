// const addPostAPI = "http://localhost:8001/addPost";

// class CreatePostService {
//     addPost() {
//         return (fetch(addPostAPI,
//             {   
//                 method: 'post',
//                 headers: {
//                     'Accept': 'application/json',
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify({ })
//             })
//             .then(res => res.json()));
//     }
// }

// export default new CreatePostService();

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