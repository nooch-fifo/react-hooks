import React, { useEffect, useState } from 'react';
import BlogPostsService from '../Services/BlogPostsService';
import { withRouter, useParams } from 'react-router-dom';


// BEFORE REFACTOR TO HOOKS
// class ReadPost extends React.Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             title: '',
//             body: '',
//             teaser: '',
//             slug: this.props.match.params.slug,
//             postedOn: '',
//             author: ''
//         }

//     }

//     componentDidMount() {
//         BlogPostsService.getPostBySlug(this.state.slug)
//             .then((res) => {
//                 let post = res;
//                 this.setState({
//                     title: post.title,
//                     body: post.body,
//                     postedOn: post.postedOn
//                 })
//                 console.log(res)
//             });
//     }

//     render() {
//         return (
//             <div className="container text-left">
//                 <ol class="breadcrumb">
//                     <li><a href="/" className="text-primary">Home <i class="bi bi-house"></i></a></li>
//                     <li><a href="/posts/" className="text-primary">Posts <i class="bi bi-list"></i></a></li>
//                     <li class="active">{this.state.title}</li>
//                 </ol>
//                 <article style={{marginTop:50}}>
//                     <header>
//                         <h2>{this.state.title}</h2>
//                         {/* <p th:text="${#calendars.format(post.postedOn,'M/dd/yyyy hh:mm a')}">postedOn</p> */}
//                         <p style={{fontStyle: 'italic'}}>{new Date(this.state.postedOn).toDateString()} <i class="bi bi-share-fill"></i></p>
//                     </header>
//                     <section style={{marginTop:25}}>
//                         {this.state.body}
//                     </section>
//                     <footer style={{ marginTop: 25 }}>
//                         {/* <address>
//                 Posted By <a href="|mailto:${post.author.email}|"> <span text="|${post.author.firstName} ${post.author.lastName}|">author</span></a>
//             </address> */}
//                         <p>Written By <span>Dominic Rego</span></p>
//                     </footer>
//                     <hr />
//                 </article>
//                 <div className="text-center">
//                     <button><i class="bi bi-suit-heart" style={{fontSize:20}}></i></button>
//                 </div>
//             </div>
//         );
//     }
// }

//  export default withRouter(ReadPost);






// AFTER REFACTOR TO HOOKS

function ReadBlog() {

    const [blog, setBlog] = useState([]);
    const [like, setLike] = useState(0);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const { slug } = useParams();

    useEffect(() => {
        BlogPostsService.getPostBySlug(slug)
            .then((res) => {
                console.log(res.data);
                setBlog([res.data]);
                setIsLoaded(true);
            },
                (error) => {
                    console.log(error);
                    setError(error);
                    setIsLoaded(true);
                })
    }, [slug])


    if (error) {
        return <div>Error: {error.message}</div>
    } else if (!isLoaded) {
        return <div style={{ fontSize: 50 }}>Loading... </div>
    } else {
        return (
            <div className="container text-left">
                {
                    blog.map(slugBlog =>
                        <ol key={slugBlog.id} className="breadcrumb">
                            {/* <li><a href="/" className="text-primary">Home <i className="bi bi-house"></i></a></li> */}
                            <li><a href="/posts/" className="text-primary">Posts <i className="bi bi-list"></i></a></li>
                            <li className="active">{slugBlog.title}</li>
                        </ol>
                    )
                }
                {
                    blog.map(slugBlog =>
                        <article key={slugBlog.id} style={{ marginTop: 50 }}>
                            <header>
                                <h2>{slugBlog.title}</h2>
                                <p style={{ fontStyle: 'italic' }}>{new Date(slugBlog.postedOn).toDateString()} <i className="bi bi-share-fill"></i></p>
                            </header>
                            <section style={{ marginTop: 25 }}>
                                {slugBlog.body}
                            </section>
                            <footer style={{ marginTop: 25 }}>
                                {/* <address>
                Posted By <a href="|mailto:${post.author.email}|"> <span text="|${post.author.firstName} ${post.author.lastName}|">author</span></a>
            </address> */}
                                <p>Written By <span>Dominic Rego</span></p>
                            </footer>
                            <hr />
                        </article>
                    )
                }
                <div className="text-center">
                    <button onClick={() => setLike(like + 1)}><i className="bi bi-suit-heart" style={{ fontSize: 20 }}></i></button>
                    <p>{like}</p>
                </div>
            </div>
        )
    }
}

export default withRouter(ReadBlog);