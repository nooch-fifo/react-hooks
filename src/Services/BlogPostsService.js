const listAPI = "http://localhost:9990/posts";

class BlogPostsService{
    getAllPosts(){
        return fetch(listAPI)
        .then((res=>res.json()));
    }
}

export default new BlogPostsService();