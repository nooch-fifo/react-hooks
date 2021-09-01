import React from 'react';
import AboutMe from './AboutMe';
import LatestPost from './LatestPost';

function Home(){
    return(
        <div className="Home">
            <AboutMe />
            <LatestPost />
        </div>
    )
}

export default Home;