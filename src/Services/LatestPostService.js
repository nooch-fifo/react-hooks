const api = 'http://localhost:9990/';

class LatestPostService{
    getPosts(){
        return fetch(api)
        .then((res=>res.json()));
    }
}

export default new LatestPostService();