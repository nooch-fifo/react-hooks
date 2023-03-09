import React from 'react';
import AboutMe from './AboutMe';
import LatestBlog from './LatestBlog';
import Socials from './Socials';

function BlogHome(){
    return(
        <div className="Home">
            <AboutMe />
            <LatestBlog />
            <Socials />
        </div>
    )
}

export default BlogHome;