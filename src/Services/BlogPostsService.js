const listAPI = "http://localhost:9990/posts";

const slugAPI = "http://localhost:9990/post"

class BlogPostsService{
    getAllPosts(){
        return fetch(listAPI)
        .then((res=>res.json()));
    }

    getPostBySlug(slug){
        return fetch(slugAPI + "/" + slug,
        {
            method: 'get'
        })
        .then((res => res.json()));
    }
}

export default new BlogPostsService();