/*

STARTED WORKING ON NEW LANDING PAGE FOR UPDATED PORTFOLIO. UNRELEASED/UNUSED.

*/

import React from "react";
import RouteCard from "./RouteCard";
import blogPhoto from "../Components/Assets/blogStockPhoto.jpg"
import projectPhoto from "../Components/Assets/projectStockPhoto.jpg"
import contactPhoto from "../Components/Assets/contactMeStockPhoto.jpg"

import Particles from 'react-particles';
// import particlesConfig from "../config/configParticles";
const centralNavRoutes = [
    {
        header: "Dom's Blog",
        description: "Learn More About Me in My Own Full-Stack Blog",
        image: "",
    },
    {
        header: "Projects",
        description: "Showcase of Personal Projects with Details on Each",
        image: "",
    },
    {
        header: "Contact Me",
        description: "Like What You See? Get in Touch & Let's Build Something Together",
        image: "",
    },
]

function LandingPage() {
    return (
        <div className="centralNav-container" >
            <Particles style={{ position: "absolute" }}
                height="95%"
                width="95%" params={{
                    particles: {
                        color: {
                            value: "#000000"
                        },
                        line_linked: {
                            color: {
                                value: "#000000"
                            }
                        },
                        number: {
                            value: 50
                        },
                        size: {
                            value: 3
                        }
                    }
                }} />
            {
                centralNavRoutes.map((route, index) => {
                    return (
                        <RouteCard key={index} {...route}></RouteCard>
                    )
                })
            }
        </div>
    )
}

export default LandingPage;