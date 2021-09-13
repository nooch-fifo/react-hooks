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
            <div className="container text-left">
                <h3 class="text-primary text-center" style={{marginBottom:100}}>My Collection of Posts</h3>
                {
                    this.state.list.map(
                        post =>
                            <article>
                                <header>
                                    <h2>{post.title}</h2>
                                    <p style={{ paddingTop: 10, paddingBottom: 10 }}>{new Date(post.postedOn).toDateString()}</p>
                                </header>
                                <section>
                                    {post.teaser}
                                </section>
                                <footer style={{ paddingTop: 10, paddingBottom: 10 }}>
                                    {/* <a href="|@{/post/view/}${post.slug}|">Read More</a> */}
                                    <a href={post.slug}>Read More</a>
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

export default BlogPosts;