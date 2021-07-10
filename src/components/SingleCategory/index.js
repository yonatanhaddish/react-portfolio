import React from 'react';

function SingleCategory({currentCategory}) {
    const { name }= currentCategory;

    return(
        <section>
            <h1>{name}</h1>
        </section>
    )
}

export default SingleCategory;