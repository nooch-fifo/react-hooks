import React from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav class="navbar navbar-default" style={{ padding: 5 }}>
            <div class="container-fluid">
                <div class="navbar-header">
                    <Link to="/" className="navbar-brand"></Link>
                </div>
                <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1" style={{marginLeft: 32}}>
                    <ul class="nav navbar-nav">
                        <li class=""><Link to="/">Home</Link></li>
                        <li class="dropdown">
                            <Link to="/posts">Posts</Link>
                            {/* <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Posts <span class="caret"></span></a> */}
                            {/* <ul class="dropdown-menu">
                            <li><Link to="/posts/list"></Link></li>
                        </ul> */}
                        </li>
                        <li class="dropdown">
                            <Link to="/addPost">New Post <i class="bi bi-pencil-square"></i></Link>
                            {/* <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Authors <span class="caret"></span></a>
                        <ul class="dropdown-menu">
                            <li><a href="/authors/list">List</a></li>
                        </ul> */}
                        </li>
                    </ul>
                    <div class="navbar-text navbar-right" style={{marginRight:40}}>
                        <Link to="/editPosts">Edit Posts <i class="bi bi-file-earmark-minus"></i></Link>
                        {/* <form id="frmlogout" method="post" class="form-inline">
                    Welcome <span>Guest</span> | <a href="javascript:{}" onclick="document.getElementById('frmlogout').submit(); return false;">Logout</a>
                    </form> */}
                    </div>
                    {/* <p class="navbar-text navbar-right">Signed in as <a href="#" class="navbar-link">Guest User</a></p> */}
                </div>
            </div>
        </nav>
    );

}

export default Navbar;