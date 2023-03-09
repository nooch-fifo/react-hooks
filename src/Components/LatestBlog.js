import React, { useState, useEffect } from 'react';
import LatestBlogService from '../Services/LatestBlogService';
import { Link, withRouter, useHistory } from 'react-router-dom';



function LatestBlog() {

    const [blogs, setBlogs] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);
    const history = useHistory();

    useEffect(() => {
        LatestBlogService.getLatest()
            .then((res) => {
                setBlogs([res.data]);
                setIsLoaded(true);
                console.log(res.data);
            },
                (error) => {
                    console.log(error);
                    setError(error);
                    setIsLoaded(true);
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
        // display blogs attribute data from api call
        return (
            <div className="container text-left">
                <h3 className="text-primary text-center" style={{ marginTop: 25, marginBottom: 55, fontSize: 27.5 }}>Recently Posted</h3>
                {
                    blogs.map(
                        blog =>
                            <article key={blog.id}>
                                <header>
                                    <h2 style={{ fontSize: 27.5 }}>{blog.title}</h2>
                                    <p style={{ paddingTop: 10, paddingBottom: 10, fontStyle: 'italic', fontSize: 17.5 }}>{new Date(blog.postedOn).toDateString()}</p>
                                </header>
                                <section style={{ fontSize: 17.5 }}>
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
                    )
                }
            </div>
        )
    }
}


export default withRouter(LatestBlog);