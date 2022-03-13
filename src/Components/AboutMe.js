import React from 'react';
import './AboutMe.css'

function AboutMe() {
    return (
        <div className="container">
            <section style={{ padding: 27.5 }}>
                <div className="hello">
                    <h4 className="text-left text-primary text-capitalize" style={{fontSize: 22.5}}>Welcome to my corner of the internet...</h4>
                    <h1 className="text-dark text-left">I'm Dominic.</h1>
                    <img src="/../face2.jpg" alt="Face Shot" className="rounded" style={{ width: 185, marginTop: 10}}></img>
                </div>
            </section>
            <section style={{ padding: 10, marginTop: 20}}>
                <h3 className="text-primary" style={{fontSize: 27.5, marginBottom: 5}}>About The Blog</h3>
                <div className="row">
                    <div className="col-md-12">
                        {/* <p class="text-dark" style={{ marginTop: 25, fontSize: 17.5}}>As a junior software engineer and UX design enthusiast, I’m passionate about creating cutting-edge designs
                            for the user, while innovating efficient, full-stack software that benefits the future. Dedicated to making a
                            positive impact, my work ethic, eagerness to learn, and my collaborative communication skills allow me to
                            be a productive, self-accountable, and easy-to-work-with professional.</p> */}
                             <p className="text-dark" style={{ marginTop: 25, fontSize: 17.5}}>After several recommendations from numerous senior colleagues & mentors, I decided the best personal project
                             I can build for my career, is none else, than a personal blog. This is a Full-Stack application with various microservices deployed to the Cloud. For the backend technologies,
                             I utilized Spring Boot with Gradle dependencies that include: Spring Boot Data JPA, Web, and JUnit. Furthermore, the frontend software used was React.js, with CRUD functionality
                             that persists from the React UI, to the API Endpoints, and into a MySQL database.</p>
                        {/* <p style={{ marginTop: 25}}>On a more personal note, I am more than just my career, and strive to keep a well-balanced and vivacious life in all aspects. Family and friends are dear to my heart, and I aspire to keep my social life in person with them, and less through the screen on my phone. I am keen on staying fit, whether that means going for runs or lifting weights. However, I am also a foodie, and there isn't a cusine (or sushi roll) I wouldn't try. Growing up in the NY/NJ area, I am a die-hard Yankees fan, and enjoy unwinding some nights watching a Michael Kay casted game, with a glass of red wine.</p> */}
                    </div>
                </div>
            </section>
            <div className="arrow">
                <span></span>
            </div>
            <hr style={{marginTop:55}}/>
        </div>
    );

}

export default AboutMe;