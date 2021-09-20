import React from 'react';
import EditPostsService from '../Services/EditPostsService';
import { withRouter } from 'react-router-dom';


class UpdatePost extends React.Component {
    constructor(props) {
        super(props);
        var today = new Date();
        var currentDateTime = today.toISOString();
        this.state = {
            id: this.props.match.params.id,
            title: '',
            body: '',
            teaser: '',
            slug: '',
            postedOn: currentDateTime,
            author: ''
        }
    }
    componentDidMount() {
        if(this.state.id == -1){
            return
        }else{
        EditPostsService.getPostById(this.state.id)
            .then( (res) => {
                console.log(res);
                // let post = res.data;
                // this.setState({
                //     title: post.title,
                //     body: post.body,
                //     teaser: post.teaser,
                //     slug: post.slug,
                //     postedOn: post.postedOn
                // });
            });
        }
    }

    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    updateHandler = e => {
        e.preventDefault();
        let post = {
            title: this.state.title,
            body: this.state.body,
            teaser: this.state.teaser,
            slug: this.state.slug,
            postedOn: this.state.postedOn
        };
        console.log('updatedPost: ' + JSON.stringify(post))
    }

    render() {
        console.log(this.state.id);
        return (
            <div class="container">
                <h2>Update Post</h2>
                <h7>Check URL Path to Cofirm Correct Post ID</h7>
                <div className="greeting">
                    <h3 class="text-left text-primary text-capitalize">Something wrong, Dominic?</h3>
                    <h1 class="text-dark text-left">No Worries, We Can Fix That!</h1>
                </div>
                <div className="panel panel-primary" style={{ marginTop: 75, padding: 25 }}>
                    <h4 class="panel-heading text-left">Update Blog Post <i class="bi bi-chat-left-quote" style={{ fontSize: 17.5 }}></i></h4>
                    <hr style={{ marginTop: 50, marginBottom: 30 }} />
                    <div className="row">
                        <form onSubmit={this.updateHandler} className="text-center col-md-6">
                            <div className="form-group">
                                {/* <label>Blog Title</label> */}
                                <input type="text" name="title" className="form-control" placeholder="Enter Blog Title..." size="55" value={this.state.title} onChange={this.changeHandler} />
                            </div>
                            <div className="form-group">
                                <textarea rows="4" name="body" className="form-control" placeholder="Post Body..." size="55" value={this.state.body} onChange={this.changeHandler} />
                            </div>
                            <div className="form-group">
                                <textarea rows="3" name="teaser" className="form-control" placeholder="Tease the Post..." size="55" value={this.state.teaser} onChange={this.changeHandler} />
                            </div>
                            <div className="form-group">
                                <input type="text" name="slug" className="form-control" placeholder="Post Slug" size="55" value={this.state.slug} onChange={this.changeHandler} />
                            </div>
                            <div className="form-group">
                                <input type="hidden" name="postedOn" className="form-control" placeholder="Date" size="55" value={this.state.postedOn} onChange={this.changeHandler} />
                            </div>
                            {/* <div>
                                <input type="text" name="author" value={author} onChange={this.changeHandler} />
                            </div> */}
                            <button type="submit" className="btn btn-primary">Update</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(UpdatePost);