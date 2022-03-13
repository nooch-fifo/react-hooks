// AFTER REFACTOR TO HOOKS

import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import BlogPostsService from '../Services/BlogPostsService';
import EditBlogService from '../Services/EditBlogService';



function EditBlogs() {

    const [blogsList, setBlogsList] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {

        getBlogsList();

    }, [])

    // updatePost(id){
    //     this.props.history.push({
    //         pathname: `/updatePost/${id}`,
    //         state: id
    //     });
    // }

    const getBlogsList = () => {
        BlogPostsService.getAllPosts()
            .then((res) => {
                setBlogsList(res.data);
                console.log(res);
            },
                (error) => {
                    console.log(error);
                    setError(error);
                })
    }

    const deleteBlog = (blogID) => {
        EditBlogService.deleteBlog(blogID)
            .then((res) => {
                getBlogsList();
            },
                (error) => {
                    console.log(error);
                    setError();
                })
    }

    return (
        <div className="container text-left">
            <h3 className="text-primary text-center" style={{ marginBottom: 100 }}>Update / Delete Posts</h3>
            <hr style={{ marginTop: -50 }} />
            {
                blogsList.map(
                    blog =>
                        <article key={blog.id}>
                            <header>
                                <div className="text-right">
                                    <button className="btn btn-danger" style={{ paddingLeft: 14, paddingRight: 14 }}
                                        onClick={() => deleteBlog(blog.id)}>Delete Post</button>
                                </div>
                                <div className="text-right" style={{ marginTop: 5 }}>
                                    <button className="btn btn-warning" onClick={() => this.updatePost(blog.id)}>Update Post</button>
                                </div>
                                <h2>{blog.title}</h2>
                                <p style={{ paddingTop: 10, paddingBottom: 10 }}>{blog.postedOn}</p>
                            </header>
                            <section>
                                {blog.teaser}
                            </section>
                            <footer style={{ paddingTop: 10, paddingBottom: 10 }}>
                                {/* <a href={post.slug}>Read More</a> */}
                                <address style={{ marginTop: 25 }}>
                                    <p>Posted By <span>Dominic Rego</span></p>
                                </address>
                            </footer>
                            <hr />
                        </article>
                ).reverse()
            }
        </div>
    )
}

export default withRouter(EditBlogs);