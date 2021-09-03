const addPostAPI = "http://localhost:9990/addPost";

class CreatePostService {
    addPost() {
        return (fetch(addPostAPI,
            {   
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ })
            })
            .then(res => res.json()));
    }
}

export default new CreatePostService();