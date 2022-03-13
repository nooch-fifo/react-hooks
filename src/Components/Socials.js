import React from 'react';
import './Socials.css';

function Socials() {

    return (
        <div className="container">
            <section>
                <h3 className="text-primary" style={{fontSize: 30}}>Stay Connected</h3>
            </section>
            <div className="social-menu">
                <ul>
                    <li><a href="https://www.linkedin.com/in/dominic-rego-17dmr"><i className="bi bi-linkedin"></i></a></li>
                    <li><a href="https://github.com/nooch-fifo"><i className="bi bi-github"></i></a></li>
                    <li><a href="https://facebook.com"><i className="bi bi-facebook"></i></a></li>
                </ul>
                <ul className="text-dark" style={{ marginTop: 70, fontSize: 15, fontStyle: 'italic' }}>
                    <li style={{ marginLeft: 32 }}><p>LinkedIn</p></li>
                    <li style={{ marginLeft: 41 }}><p>Github</p></li>
                    <li style={{ marginLeft: 40 }}><p>Facebook</p></li>
                </ul>
            </div>
        </div>
    )
}

export default Socials;