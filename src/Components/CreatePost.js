import React from 'react';
import CreatePostService from '../Services/CreatePostService';


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
        console.log(this.state);
        CreatePostService.addPost()
        .then((res) => {
            console.log(res);
        })
    }

    render(){
        const { title, body, teaser, slug, postedOn, author } = this.state;
        return(
            <div>
                <h2>Sample Create Post Page</h2>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <input type="text" name="title" value={title} onChange={this.changeHandler} />
                    </div>
                    <div>
                        <input type="text" name="body" value={body} onChange={this.changeHandler} />
                    </div>
                    <div>
                        <input type="text" name="teaser" value={teaser} onChange={this.changeHandler} />
                    </div>
                    <div>
                        <input type="text" name="slug" value={slug} onChange={this.changeHandler} />
                    </div>
                    <div>
                        <input type="text" name="postedOn" value={postedOn} onChange={this.changeHandler} />
                    </div>
                    <div>
                        <input type="text" name="author" value={author} onChange={this.changeHandler} />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }

}

export default CreatePost;