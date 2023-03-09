import React from 'react';
import { useState, useEffect } from 'react';
import './AboutMe.css'

function AboutMe() {

    const [showElement, setShowElement] = useState(true);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    
      function handleScroll() {
        if (window.scrollY > 100) {
          setShowElement(false);
        }
      }

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
                             <p className="text-dark" style={{ marginTop: 25, fontSize: 17.5}}>After several recommendations from numerous colleagues & mentors, I decided the best personal project
                             I can build for my career, is none else than a personal blog. This is a Full-Stack application with various Microservices deployed to the Cloud. For the backend technologies,
                             I utilized Spring Boot with Gradle dependencies that include: Data JPA, Web, and JUnit. Furthermore, the frontend framework used was React.js & Axios, with CRUD functionality
                             that persists to the Spring MVC API endpoints, and into a MySQL database. On AWS, this translates to the mySQL DB being hosted on RDS, the Spring Boot JAR file running on 
                             an Elastic Beanstalk environment, the React app build being deployed on Amplify, and an API Gateway resource to make the site HTTPS encrypted & compliant with CORS. Happy Reading!</p>
                        {/* <p style={{ marginTop: 25}}>On a more personal note, I am more than just my career, and strive to keep a well-balanced and vivacious life in all aspects. Family and friends are dear to my heart, and I aspire to keep my social life in person with them, and less through the screen on my phone. I am keen on staying fit, whether that means going for runs or lifting weights. However, I am also a foodie, and there isn't a cusine (or sushi roll) I wouldn't try. Growing up in the NY/NJ area, I am a die-hard Yankees fan, and enjoy unwinding some nights watching a Michael Kay casted game, with a glass of red wine.</p> */}
                    </div>
                </div>
            </section>
            <div className="arrow">
                {showElement && <span></span>}
            </div>
            <hr style={{marginTop:45}}/>
        </div>
    );

}

export default AboutMe;