import React from 'react';


function Navbar(){
    return(
        <nav class="navbar navbar-default">
        <div class="container-fluid">
            <div class="navbar-header">
                <a class="navbar-brand" href="/">dominicrego.com</a>
            </div>
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav">
                    <li class="active"><a href="/">Home</a></li>
                    <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Posts <span class="caret"></span></a>
                        <ul class="dropdown-menu">
                            <li><a href="/posts/list">List</a></li>
                        </ul>
                    </li>
                    <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Authors <span class="caret"></span></a>
                        <ul class="dropdown-menu">
                            <li><a href="/authors/list">List</a></li>
                        </ul>
                    </li>
                </ul>
                <div class="navbar-text navbar-right">
                    Welcome <span>Guest</span>
                    <form id="frmlogout" method="post" class="form-inline">
                        | <a href="javascript:{}" onclick="document.getElementById('frmlogout').submit(); return false;">Logout</a>
                    </form>
                </div>
                {/* <p class="navbar-text navbar-right">Signed in as <a href="#" class="navbar-link">Guest User</a></p> */}
            </div>
        </div>
    </nav>
    );

}

export default Navbar;