import React from 'react';
import { withRouter } from 'react-router-dom';
import BlogPostsService from '../Services/BlogPostsService';
import EditPostsService from '../Services/EditPostsService';


class EditPosts extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            list: []
        }

        this.deleteHandler = this.deleteHandler.bind(this);
        this.updatePost = this.updatePost.bind(this);
    }

    componentDidMount() {
        BlogPostsService.getAllPosts()
            .then((res) => {
                this.setState({ list: res });
                // confirmed all posts from backend are received
                console.log(res);
            });
    }

    updatePost(id){
        this.props.history.push({
            pathname: `/updatePost/${id}`,
            state: id
        });
    }

    deleteHandler(id) {
        EditPostsService.deletePost(id).then(res => {
            this.setState({ list: this.state.list.filter(post => post.id !== id) });
        });
    }

    render() {
        return (
            <div className="container text-left">
                <h3 class="text-primary text-center" style={{ marginBottom: 100 }}>Update / Delete Posts</h3>
                <hr style={{ marginTop: -50 }} />
                {
                    this.state.list.map(
                        post =>
                            <article>
                                <header>
                                    <div className="text-right">
                                        <button className="btn btn-danger" style={{ paddingLeft: 14, paddingRight: 14 }}
                                            onClick={() => this.deleteHandler(post.id)}>Delete Post</button>
                                    </div>
                                    <div className="text-right" style={{ marginTop: 5 }}>
                                        <button className="btn btn-warning" onClick = { () => this.updatePost(post.id) }>Update Post</button>
                                    </div>
                                    <h2>{post.title}</h2>
                                    <p style={{ paddingTop: 10, paddingBottom: 10 }}>{post.postedOn}</p>
                                </header>
                                <section>
                                    {post.teaser}
                                </section>
                                <footer style={{ paddingTop: 10, paddingBottom: 10 }}>
                                    {/* <a href="|@{/post/view/}${post.slug}|">Read More</a> */}
                                    {/* <a href={post.slug}>Read More</a> */}
                                    <address style={{ marginTop: 25 }}>
                                        {/* <a href="|mailto:${post.author.email}|">Posted By <span text="|${post.author.firstName} ${post.author.lastName}|">author</span></a> */}
                                        <a>Posted By <span>Dominic Rego</span></a>
                                    </address>
                                </footer>
                                <hr />
                            </article>
                    ).reverse()
                }
            </div>
        )
    }
}

export default withRouter(EditPosts);