import React from 'react';
import BlogPostsService from '../Services/BlogPostsService';


class BlogPosts extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            list: []
        }
    }

    componentDidMount() {
        BlogPostsService.getAllPosts()
            .then((res) => {
                this.setState({ list: res });
                // confirmed all posts from backend are received
                console.log(res);
            });
    }

    render() {
        return (
            <div>
                <h1>List of Blog Posts Page</h1>
            </div>
        )
    }
}

export default BlogPosts;