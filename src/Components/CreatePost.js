import React from 'react';
// import CreatePostService from '../Services/CreatePostService';

const addPostAPI = "http://localhost:9990/addPost";

class CreatePost extends React.Component {

    constructor(props) {
        super(props);
        var today = new Date();
        var currentDateTime = today.toISOString();
        this.state = {
            title: '',
            body: '',
            teaser: '',
            slug: '',
            postedOn: currentDateTime,
            author: ''
        }
    }

    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitHandler = e => {
        // e.preventDefault();
        fetch(addPostAPI, {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        }).then(res => res.json())
            .then((res) => {
                console.log(res);
            })
    }
    render() {
        const { title, body, teaser, slug, postedOn } = this.state;
        console.log(postedOn);
        return (
            <div class="container">
                <div className="greeting" style={{padding:25}}>
                    <h4 class="text-left text-primary text-capitalize">Welcome back Dominic...</h4>
                    <h2 class="text-dark text-left">What's on Your Mind Today?</h2>
                </div>
                <div className="panel panel-primary" style={{ marginTop: 50, padding: 25 }}>
                    <h4 class="panel-heading text-left">Write a New Blog Post <i class="bi bi-chat-left-quote" style={{ fontSize: 17.5 }}></i></h4>
                    {/* <hr style={{ marginTop: 50, marginBottom: 30 }} /> */}
                    <div className="row" style={{marginTop:50}}>
                        <form onSubmit={this.submitHandler} className="text-center col-md-6">
                            <div className="form-group">
                                {/* <label>Blog Title</label> */}
                                <input type="text" name="title" className="form-control" placeholder="Enter Blog Title..." size="55" value={title} onChange={this.changeHandler} required/>
                            </div>
                            <div className="form-group">
                                <textarea rows="4" name="body" className="form-control" placeholder="Post Body..." size="55" value={body} onChange={this.changeHandler} required/>
                            </div>
                            <div className="form-group">
                                <textarea rows="3" name="teaser" className="form-control" placeholder="Tease the Post..." size="55" value={teaser} onChange={this.changeHandler} required/>
                            </div>
                            <div className="form-group">
                                <input type="text" name="slug" className="form-control" placeholder="Post Slug" size="55" value={slug} onChange={this.changeHandler} required/>
                            </div>
                            <div className="form-group">
                                <input type="hidden" name="postedOn" className="form-control" placeholder="Date" size="55" value={postedOn} onChange={this.changeHandler} />
                            </div>
                            {/* <div>
                        <input type="text" name="author" value={author} onChange={this.changeHandler} />
                    </div> */}
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                        <div className="col-md-6">
                            <h4 className="text-info">Helpful Writing Tips <i class="bi bi-list-check" style={{fontSize:17.5}}></i> </h4>
                            <div className="tips" style={{marginTop:55}}>
                                <ul className="text-center text-capitalize">
                                    <li style={{padding:10}}>Choose a Topic and Remember Your Target Audience</li>
                                    <li style={{padding:10}}>Conduct thorough research and outline your post</li>
                                    <li style={{padding:10}}>Use images to further explain topics and enhance flow</li>
                                    <li style={{padding:10}}>Read your post aloud, have someone else proofread it</li>
                                    <li style={{padding:10}}>Listen to feedback, edit post, and have fun!</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default CreatePost;