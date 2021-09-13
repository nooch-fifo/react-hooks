import React from 'react';
import LatestPostService from '../Services/LatestPostService';


class LatestPost extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        LatestPostService.getPosts()
            .then((res) => {
                this.setState({ posts: res });
                // confirmed the post from backend is received
                console.log(res);
            });
    }


    render() {
        const data = this.state;
        return (
            <div className="container text-left">
                <h3 class="text-primary text-center" style={{marginTop:25, marginBottom:55}}>My Latest Post</h3>
                <article>
                    <header>
                        <h2>{data.posts.title}</h2>
                        <p style={{ paddingTop: 10, paddingBottom: 10 }}>{new Date(data.posts.postedOn).toDateString()}</p>
                    </header>
                    <section>
                        {data.posts.teaser}
                    </section>
                    <footer style={{ paddingTop: 10, paddingBottom: 10 }}>
                        {/* <a href="|@{/post/view/}${post.slug}|">Read More</a> */}
                        <a href={data.posts.slug}>Read More</a>
                        <address style={{marginTop:25}}>
                            {/* <a href="|mailto:${post.author.email}|">Posted By <span text="|${post.author.firstName} ${post.author.lastName}|">author</span></a> */}
                            <a>Posted By <span>Dominic Rego</span></a>
                        </address>
                    </footer>
                    <hr />
                </article>
            </div>
        )
    }

}

export default LatestPost;