const deletePostAPI = "http://localhost:9990/delete"

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
}

export default new EditPostsService();