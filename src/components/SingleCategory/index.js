import React from 'react';
import AboutMe from '../AboutMe';

function SingleCategory({currentCategory}) {
    const { name }= currentCategory;

    return(
        <section>
            <h1>{name}</h1>
            <AboutMe></AboutMe>
        </section>
    )
}

export default SingleCategory;