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
            Hi! I’m Yonatan. I am a full stack web developer who recently earned a certificate in Web Development
            from University of Toronto, with newly developed skills in JavaScript, CSS, React.js, and responsive
            web design. I also have BSc in Applied Mathematics. I am also a self-taught in basic of Python 
            programming language. I like working with a team member because I believe we learn more from each 
            other. When I am working with team members or clients, my goal is to provide the best service, and 
            user-friendly high-level product. I’m excited to leverage my skills as part of a fast-paced, 
            quality-driven to build better experience on the web.
            </p><br></br>
            <div className="contact-about" style={{fontFamily:"Fontrix"}}>
                <h3>Contact Details</h3><br></br>
                <p>Yonatan Haddish</p>
                <p>Toronto, CA</p>
                <p>(437)-238-1223</p>
                <a href="mailto:yonihailshn@gmail.com" style={{color: "white", textDecoration: "none"}}>yonihailshn@gmail.com</a>
            </div>
        </section>
    )
}

export default AboutMe;