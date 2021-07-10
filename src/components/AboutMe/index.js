import React from 'react';

function AboutMe() {
    return(
        <section>
            <div>
                <h1>About Me</h1>
            </div>
            <img 
                src={require(`../../assets/profile/profilephoto.jpg`).default}
                alt="profile"
                className="img-thumbnail mx-1"
                key="profile" />
            <p>This info is about me</p>
        </section>
    )
}

export default AboutMe;