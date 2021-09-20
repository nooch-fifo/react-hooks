const deletePostAPI = "http://localhost:9990/delete"

const getPostByIdAPI = "http://localhost:9990/posts"

class EditPostsService {
    deletePost(id) {
        return fetch(deletePostAPI + '/' + id,
            {
                method: 'delete',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            .then((res => res.text()));
    }

    getPostById(id){
        return fetch(getPostByIdAPI + '/' + id,
        {
            method: 'get'
        })
        .then((res => res.json()));
    }
}

export default new EditPostsService();