import React, { useState } from 'react';
import AboutMe from '../AboutMe';
import Portfolio from '../Portfolio';
import Resume from '../Resume';
import Contact from '../Contact';

function SingleCategory({currentCategory}) {

    const { name }= currentCategory;

    switch(name) {
        case 'About me':
            return <AboutMe></AboutMe>
        case 'Portfolio':
            return <Portfolio></Portfolio>
        case 'Contact':
            return <Contact></Contact>
        case 'Resume':
            return <Resume></Resume>
    }

    return(
        <section>
            <h1>{name}</h1>
            {/* {name === 'About me' ? (
                <> <AboutMe></AboutMe> </>
            ) : (
                <Portfolio></Portfolio>
            )} */}
        </section>
    )
}

export default SingleCategory;