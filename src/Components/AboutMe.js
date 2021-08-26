import React from 'react';

function AboutMe() {
    return (
        <div class="container">
            <section style={{ padding: 25 }}>
                <div class="hello">
                    <h4 class="text-left text-primary text-capitalize">Welcome to my corner of the internet...</h4>
                    <h1 class="text-dark text-left">I'm Dominic.</h1>
                    <img></img>
                </div>
            </section>
            <section style={{ padding: 15 }}>
                <h3 class="text-primary">About Me</h3>
                <div class="row">
                    <div class="col-md-12">
                        <p style={{ marginTop: 15 }}>As a junior software engineer and UX design enthusiast, I’m passionate about creating cutting-edge designs
                            for the user, while innovating efficient, full-stack software that benefits the future. Dedicated to making a
                            positive impact, my work ethic, eagerness to learn, and my collaborative communication skills allow me to
                            be a productive, self-accountable, and easy-to-work-with professional.</p>
                        <p>On a more personal note, I am more than just my career, and strive to keep a well-balanced and vivacious life in all aspects. Family and friends are dear to my heart, and I aspire to keep my social life in person with them, and less through the screen on my phone. I am keen on staying fit, whether that means going for runs or lifting weights. However, I am also a foodie, and there isn't a cusine (or sushi roll) I wouldn't try. Growing up in the NY/NJ area, I am a die-hard Yankees fan, and enjoy unwinding some nights watching a Michael Kay casted game, with a glass of red wine.</p>
                    </div>
                </div>
            </section>
        </div>
    );

}

export default AboutMe;