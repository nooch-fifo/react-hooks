import React from 'react';
import AboutMe from './AboutMe';
import LatestPost from './LatestPost';
import Socials from './Socials';

function Home(){
    return(
        <div className="Home">
            <AboutMe />
            <LatestPost />
            <Socials />
        </div>
    )
}

export default Home;