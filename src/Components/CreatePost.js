import React from 'react';
// import CreatePostService from '../Services/CreatePostService';

const addPostAPI = "http://localhost:9990/addPost";

class CreatePost extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: '',
            teaser: '',
            slug: '',
            postedOn: '',
            author: ''
        }
    }

    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitHandler = e => {
        e.preventDefault();
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
        return (
            <div class="container">
                <div className="greeting">
                    <h3 class="text-left text-primary text-capitalize">Welcome back Dominic...</h3>
                    <h1 class="text-dark text-left">What's on Your Mind Today?</h1>
                </div>
                <form onSubmit={this.submitHandler} className="text-center" style={{ marginTop: 75 }}>
                    <div className="form-group">
                        <label for="title">Blog Title</label>
                        <input type="text" name="title" className="form-control" placeholder="Enter Blog Title..." size="55" value={title} onChange={this.changeHandler} />
                    </div>
                    <div className="form-group">
                        <input type="text" name="body" className="form-control" placeholder="Post Body..." size="55" value={body} onChange={this.changeHandler} />
                    </div>
                    <div className="form-group">
                        <input type="text" name="teaser" className="form-control" placeholder="Tease the Post..." size="55" value={teaser} onChange={this.changeHandler} />
                    </div>
                    <div className="form-group">
                        <input type="text" name="slug" className="form-control" placeholder="Post Slug" size="55" value={slug} onChange={this.changeHandler} />
                    </div>
                    <div className="form-group">
                        <input type="text" name="postedOn" className="form-control" placeholder="Date" size="55" value={postedOn} onChange={this.changeHandler} />
                    </div>
                    {/* <div>
                        <input type="text" name="author" value={author} onChange={this.changeHandler} />
                    </div> */}
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }

}

export default CreatePost;