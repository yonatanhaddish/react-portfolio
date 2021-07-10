import React from 'react';
import AboutMe from '../AboutMe';
import Portfolio from '../Portfolio';
import Resume from '../Resume';
import Contact from '../Contact';

function SingleCategory({currentCategory}) {

    const { name }= currentCategory;

    switch(name) {
        case 'About me':
            return  <AboutMe></AboutMe>
        case 'Portfolio':
            return <Portfolio></Portfolio>
        case 'Contact':
            return <Contact></Contact>
        default:
            return <Resume></Resume>
    }
}

export default SingleCategory;