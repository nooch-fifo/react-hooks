import React from 'react';
import BlogPostsService from '../Services/BlogPostsService';
import { withRouter } from 'react-router-dom';

class ReadPost extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: '',
            teaser: '',
            slug: this.props.match.params.slug,
            postedOn: '',
            author: ''
        }

    }

    componentDidMount() {
        BlogPostsService.getPostBySlug(this.state.slug)
            .then((res) => {
                let post = res;
                this.setState({
                    title: post.title,
                    body: post.body,
                    postedOn: post.postedOn
                })
                console.log(res)
            });
    }

    render() {
        return (
            <div className="container text-left">
                <ol class="breadcrumb">
                    <li><a href="/">Home</a></li>
                    <li><a href="/posts/">Posts</a></li>
                    <li class="active">{this.state.title}</li>
                </ol>
                <article style={{marginTop:50}}>
                    <header>
                        <h2>{this.state.title}</h2>
                        {/* <p th:text="${#calendars.format(post.postedOn,'M/dd/yyyy hh:mm a')}">postedOn</p> */}
                        <p>{new Date(this.state.postedOn).toDateString()}</p>
                    </header>
                    <section style={{marginTop:25}}>
                        {this.state.body}
                    </section>
                    <footer style={{ marginTop: 25 }}>
                        {/* <address>
                Posted By <a href="|mailto:${post.author.email}|"> <span text="|${post.author.firstName} ${post.author.lastName}|">author</span></a>
            </address> */}
                        <p>Written By <span>Dominic Rego</span></p>
                    </footer>
                    <hr />
                </article>
            </div>
        );
    }
}

export default withRouter(ReadPost);