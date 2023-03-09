import React from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
// import Socials from './Socials';

function Navbar() {
    const { user, isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
        return <div><h5>Loading...</h5></div>
    }

    // var auth = (<div ></div>)
    // var guest = (<div></div>)
    var authEdit = (<div></div>)
    var authCreate = (<div></div>)

    // if (!isAuthenticated) {
    //     guest = (
    //         <div className="navbar-text navbar-right" style={{ marginRight: 355 }}>Guest User</div>
    //     )
    // }

    if (isAuthenticated) {
        // auth = (
        //     <div className="navbar-text navbar-right" style={{ marginRight: 25 }}>
        //         <Link to="/adminDom">Signed in as: {user.name} </Link>
        //     </div>
        // );
        authEdit = (
            <Link to="/editPosts">Edit Posts <i className="bi bi-file-earmark-minus"></i></Link>
        );
        authCreate = (
            <Link to="/addPost">New Post <i className="bi bi-pencil-square"></i></Link>
        )
    }
    return (
        <nav className="navbar navbar-default" style={{ padding: 5 }}>
            <div className="container-fluid">
                <div className="navbar-header">
                    <Link to="/" className="navbar-brand"></Link>
                </div>
                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1" style={{ marginLeft: 355 }}>
                    <ul className="nav navbar-nav">
                        <li className="home-link"><Link to="/" style={{ color: 'black' }}>Home</Link></li>
                        {/* <li className="home-link"><Link to="/blog" style={{ color: 'black' }}>Blog</Link></li> */}
                        <li className="dropdown-blogs">
                            <Link to="/posts" style={{ color: 'black' }}>Posts</Link>
                        </li>
                        <li className="dropdown-blogs">
                            <a href='https://www.youtube.com/' style={{ color: 'black' }}>Video Walthrough</a>
                            {/* <Link to="https://www.youtube.com/" style={{ color: 'black' }}>Video Walthrough</Link> */}
                        </li>
                        {/* <li class="dropdown">
                            <Link to="/posts">Social Media</Link>
                        </li> */}

                        <li className="dropdown">
                            {authCreate}
                            {/* <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Authors <span class="caret"></span></a>
                        <ul class="dropdown-menu">
                            <li><a href="/authors/list">List</a></li>
                        </ul> */}
                        </li>
                        <li className="dropdown">
                            {authEdit}
                        </li>
                        <hr className='header' />
                    </ul>
                    {/*  
                    {auth}
                    {guest}
                    */}
                </div>
            </div>
        </nav>
    );

}

export default Navbar;