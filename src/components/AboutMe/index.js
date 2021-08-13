import React from 'react';

function AboutMe() {
    return(
        <section>
            <div>
                <h2 className="h2-title">About Me</h2>
            </div>
            <img 
                src={require(`../../assets/profile/profilephoto.jpg`).default}
                alt="profile"
                className="img-thumbnail mx-1"
                key="profile" />
            <p className="about-me">
                Hi! I'm Yonatan. I am a full stack web developer who recently graduated from University of Toronto.
                I have also BSc in Applied Mathematics. I am also a self taught in basic of Python programming language.
                I like working with a team members because I believe we learn more from each other. When I am working with
                team members or clients, my goal is to provide the best service, and user-friendly high level product.
                
            </p>
        </section>
    )
}

export default AboutMe;