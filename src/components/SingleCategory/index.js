import React, { useState } from 'react';
import AboutMe from '../AboutMe';
import Portfolio from '../Portfolio';
import Resume from '../Resume';
import Contact from '../Contact';

function SingleCategory({currentCategory}) {
    const [projects]= useState([
        {
            name: "Run Buddy",
            github: "https://github.com/yonatanhaddish/run-buddy",
            tools: "HTML, CSS",
            website: "https://yonatanhaddish.github.io/run-buddy/",
            description: "A front-end website created for a fitness training service provider that includes a sign-up form, a description of the services, and contact information."
        },
        {
            name: "Task Master",
            github: "https://github.com/yonatanhaddish/taskmaster-pro",
            tools: "HTML, CSS, JavaScript",
            website: "https://yonatanhaddish.github.io/taskmaster-pro/",
            description: "This project is a task-management application using Javascript and jQuery to manipulate the DOM."
        },
        {
            name: "Quiz app",
            github: "https://github.com/yonatanhaddish/quiz-app",
            tools: "HTML, CSS, JavaScript",
            website: "https://yonatanhaddish.github.io/quiz-app/",
            description: "A simple question asking web app in a multiple choice format."
        },
        {
            name: "Weather app",
            github: "https://github.com/yonatanhaddish/weather-app",
            tools: "HTML, CSS, JavaScript",
            website: "https://yonatanhaddish.github.io/weather-app/",
            description: "Weather dashboard that uses server-side API's and FETCH request to obtain weather forecasts from a searched city."
        },
        {
            name: "Robot Gladiators",
            github: "https://github.com/yonatanhaddish/robot-gladiators",
            tools: "HTML, JavaScript",
            website: "https://yonatanhaddish.github.io/robot-gladiators/",
            description: "A simple MVP browser based video game built using JavaScript."
        },
        {
            name: "Food Festival",
            github: "https://github.com/yonatanhaddish/food-festival",
            tools: "HTML, CSS, JavaScript",
            website: "https://yonatanhaddish.github.io/food-festival/",
            description: "Progressive Web Application that has the ability to be installed on a desktop or mobile device. It also demonstrates offline capability using Service Workers and JavaScript/Image bundling using Webpack."
        },
        {
            name: "Art-Gallery-Online(AGO)",
            github: "https://github.com/Stevtm/art-gallery-online",
            tools: "React, Express, Mongoose, Apollo Server, Firebase, Bootstap, GraphQL, styled-components, jsonwebtoken, Stripe",
            website: "https://shrouded-sands-03163.herokuapp.com/",
            description: "E-Commerce platform that allows users to post their homemade art for sale and purchase art posted by others."
        }
    ]);

    const [currentProject, setCurrentProject]= useState(projects[0]);

    const { name }= currentCategory;

    switch(name) {
        case 'About me':
            return  <AboutMe></AboutMe>
        case 'Portfolio':
            return <Portfolio projects= {projects} currentProject= {currentProject} setCurrentProject= {setCurrentProject}></Portfolio>
        case 'Contact':
            return <Contact></Contact>
        default:
            return <Resume></Resume>
    }
}

export default SingleCategory;