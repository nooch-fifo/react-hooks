import React, { useEffect, useState } from 'react';
import BlogPostsService from '../Services/BlogPostsService';
import { Link, withRouter } from 'react-router-dom';
import { useHistory } from 'react-router-dom';


// BEFORE REFACTOR TO HOOKS

// class BlogPosts extends React.Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             list: []
//         }
//         this.readPostBySlug = this.readPostBySlug.bind(this);
//     }

//     componentDidMount() {
//         BlogPostsService.getAllPosts()
//             .then((res) => {
//                 this.setState({ list: res });
//                 // confirmed all posts from backend are received
//                 console.log(res);
//             });
//     }

//     readPostBySlug(slug) {
//         this.props.history.push({
//             pathname: `/post/${slug}`
//         });
//     }

//     render() {
//         return (
//             <div className="container text-left">
//                 <h3 className="text-primary text-center" style={{ marginBottom: 100, fontSize: 27.5 }}>All Blog Posts</h3>
//                 {
//                     this.state.list.map(
//                         post =>
//                             <article key={post.id}>
//                                 <header style={{ marginTop: 55 }}>
//                                     <h2 style={{ fontSize: 27.5 }}>{post.title}</h2>
//                                     <p style={{ paddingTop: 10, paddingBottom: 10, fontStyle: 'italic', fontSize: 17.5 }}>{new Date(post.postedOn).toDateString()}</p>
//                                 </header>
//                                 <section style={{ fontSize: 15 }}>
//                                     {post.teaser}
//                                 </section>
//                                 <footer style={{ paddingTop: 10, paddingBottom: 10 }}>
//                                     {/* <a href="|@{/post/view/}${post.slug}|">Read More</a> */}
//                                     <Link className="text-primary" to={post.slug} onClick={() => this.readPostBySlug(post.slug)}>Read More</Link>
//                                     <address style={{ marginTop: 25 }}>
//                                         {/* <a href="|mailto:${post.author.email}|">Posted By <span text="|${post.author.firstName} ${post.author.lastName}|">author</span></a> */}
//                                         <p style={{ fontSize: 15 }}>Posted By <span>Dominic Rego</span></p>
//                                     </address>
//                                 </footer>
//                                 <hr />
//                             </article>
//                     ).reverse()
//                 }
//             </div>
//         )
//     }
// }

// export default withRouter(BlogPosts);



// AFTER REFACTOR TO HOOKS


function BlogPosts() {

    const [blogsList, setBlogsList] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);
    const history = useHistory();


    useEffect(() => {
        BlogPostsService.getAllPosts()
            .then((res) => {
                setBlogsList(res.data);
                setIsLoaded(true);
                console.log(res.data)
            },
                (error) => {
                    console.log(error);
                    setIsLoaded(true);
                    setError(error);
                })
    }, [])


    const readPostBySlug = (slug) => {
        history.push({
            pathname: `/post/${slug}`
        });
    }

    if (error) {
        return <div>Error: {error.message}</div>
    } else if (!isLoaded) {
        return <div style={{ fontSize: 50 }}>Loading... </div>
    } else {
        // map through API response body and display attributes in HTML
        return (
            <div className="container text-left">
                <h3 className="text-primary text-center" style={{ marginBottom: 100, fontSize: 27.5 }}>All Blog Posts</h3>
                {
                    blogsList.map(
                        blog =>
                            <article key={blog.id}>
                                <header style={{ marginTop: 55 }}>
                                    <h2 style={{ fontSize: 27.5 }}>{blog.title}</h2>
                                    <p style={{ paddingTop: 10, paddingBottom: 10, fontStyle: 'italic', fontSize: 17.5 }}>{new Date(blog.postedOn).toDateString()}</p>
                                </header>
                                <section style={{ fontSize: 15 }}>
                                    {blog.teaser}
                                </section>
                                <footer style={{ paddingTop: 10, paddingBottom: 10 }}>
                                    <Link className="text-primary" to={blog.slug} onClick={() => { readPostBySlug(blog.slug) }}>Read More</Link>
                                    <address style={{ marginTop: 25 }}>
                                        {/* <a href="|mailto:${post.author.email}|">Posted By <span text="|${post.author.firstName} ${post.author.lastName}|">author</span></a> */}
                                        <p style={{ fontSize: 15 }}>Posted By <span>Dominic Rego</span></p>
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

export default withRouter(BlogPosts);