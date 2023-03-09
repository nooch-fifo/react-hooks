import React, { useEffect, useState } from 'react';
import BlogPostsService from '../Services/BlogPostsService';
import { withRouter, useParams } from 'react-router-dom';

function ReadBlog() {

    const [blog, setBlog] = useState([]);
    const [like, setLike] = useState(Number(localStorage.getItem('like')));
    const [likeClicked, setLikeClicked] = useState(false);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const { slug } = useParams();
    const [copyLink, setCopyLink] = useState(true);

    useEffect(() => {
        const data = Number(window.localStorage.getItem('likeCount'));
        if (data !== null) setLike((data));
    }, [])

    useEffect(() => {
        window.localStorage.setItem('likeCount', like);
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
    }, [slug, like])

    const handleLike = (e) => {
        console.log("clicked")
        if (likeClicked === false) {
            document.getElementById("likeButton").disabled = true;
            document.getElementById("heart-icon").style.color = "#FF0000";
            setLikeClicked(true);
            setLike(like + 1);
        }
        return;
    }

    const handleCopy = () => {
        const fakeUrl = document.createElement('input');
        document.body.appendChild(fakeUrl);
        const url = window.location.href;
        fakeUrl.value = url;
        fakeUrl.select();
        // deprectaed? may have to update
        document.execCommand('copy');
        document.body.removeChild(fakeUrl);
        setCopyLink(false);
    }

    var copied = (<span></span>)

    if (copyLink){
        copied = (
            <span>Share</span>
        )
    } else {
        copied = (
            <span>Link Copied!</span>
        )
    }

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
                                <p style={{ fontStyle: 'italic' }}>{new Date(slugBlog.postedOn).toDateString()} <i className="bi bi-share-fill" style={{ cursor: 'pointer' }} onClick={() => handleCopy()}> {copied}</i></p>
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
                    <button id="likeButton" onClick={() => handleLike()} style={{border: 'none', padding: 0, background: 'none'}}><i className="bi bi-suit-heart" id="heart-icon" style={{ fontSize: 20 }}></i></button>
                    <p>{like}</p>
                </div>
            </div>
        )
    }
}

export default withRouter(ReadBlog);