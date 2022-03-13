import React, { useState } from 'react';
import CreateBlogService from '../Services/CreateBlogService';
import { useHistory, withRouter } from 'react-router-dom';



function CreateBlog() {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [teaser, setTeaser] = useState('');
    const [slug, setSlug] = useState('');
    // current DateTime ** fix Null Bug **
    const [postedOn, setPostedOn] = useState(new Date().toISOString());
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const history = useHistory();

    const createBlog = (e) => {
        e.preventDefault();

        const blog = { title, body, teaser, slug };
        CreateBlogService.postBlog(blog)
            .then((res) => {
                console.log(res.data)
                setIsLoaded(true);
                history.push('/posts')
            },
                (error) => {
                    console.log(error);
                    setError(error);
                    setIsLoaded(true);
                }
            )

    }

    return (
        <div className="container">
            <div className="greeting1" style={{ padding: 25 }}>
                <h4 className="text-left text-primary text-capitalize">Welcome back, Dominic...</h4>
                <h2 className="text-dark text-left">What's on Your Mind Today?</h2>
            </div>
            <div className="panel panel-primary" style={{ marginTop: 50, padding: 25 }}>
                <h4 className="panel-heading text-left">Write a New Blog Post <i className="bi bi-chat-left-quote" style={{ fontSize: 17.5 }}></i></h4>
                {/* <hr style={{ marginTop: 50, marginBottom: 30 }} /> */}
                <div className="row" style={{ marginTop: 50 }}>
                    <form className="text-center col-md-6">
                        <div className="form-group">
                            {/* <label>Blog Title</label> */}
                            <input type="text" name="title" className="form-control" placeholder="Enter Blog Title..." size="55" value={title} onChange={(e => setTitle(e.target.value))} required />
                        </div>
                        <div className="form-group">
                            <textarea rows="4" name="body" className="form-control" placeholder="Post Body..." size="55" value={body} onChange={(e => setBody(e.target.value))} required />
                        </div>
                        <div className="form-group">
                            <textarea rows="3" name="teaser" className="form-control" placeholder="Tease the Post..." size="55" value={teaser} onChange={(e => setTeaser(e.target.value))} required />
                        </div>
                        <div className="form-group">
                            <input type="text" name="slug" className="form-control" placeholder="Post Slug" size="55" value={slug} onChange={(e => setSlug(e.target.value))} required />
                        </div>
                        <div className="form-group">
                            <input type="hidden" name="postedOn" className="form-control" placeholder="Date" size="55" value={postedOn} onChange={(e => setPostedOn(e.target.value))} />
                        </div>
                        <button type="submit" className="btn btn-primary" onClick={(e) => createBlog(e)}>Submit</button>
                    </form>
                    <div className="col-md-6">
                        <h4 className="text-info">Helpful Writing Tips <i className="bi bi-list-check" style={{ fontSize: 17.5 }}></i> </h4>
                        <div className="tips" style={{ marginTop: 55 }}>
                            <ul className="text-center text-capitalize" style={{ listStyle: 'none' }}>
                                <li style={{ padding: 10 }}><i className="bi bi-patch-check"></i> Choose a Topic and Remember Your Target Audience</li>
                                <li style={{ padding: 10 }}><i className="bi bi-patch-check"></i> Conduct thorough research and outline your post</li>
                                <li style={{ padding: 10 }}><i className="bi bi-patch-check"></i> Use images to further explain topics and enhance flow</li>
                                <li style={{ padding: 10 }}><i className="bi bi-patch-check"></i> Read your post aloud, have someone else proofread it</li>
                                <li style={{ padding: 10 }}><i className="bi bi-patch-check"></i> Listen to feedback, edit post, and have fun!</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withRouter(CreateBlog);