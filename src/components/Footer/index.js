import React from 'react';


function Footer() {
    return(
        <section className="footer">
            <div className="">
                <a href="https://github.com/yonatanhaddish" target="_blank" rel="noopener noreferrer" style= {{textDecoration: "none"}}>Github</a>
            </div>
            <div>
            <a href="https://www.linkedin.com/in/yonatan-haddish-2a5b93205/" target="_blank" rel="noopener noreferrer" style={{textDecoration: "none"}}>Linkedin</a>
            </div>
            <div>
                <a href="mailto:yonihailshn@gmail.com" style={{textDecoration: "none"}}>yonihailshn@gmail.com</a>
            </div>
            <div>
                <a href="tel:+14372381223" style={{textDecoration: "none"}}>  (437)-238-1223</a>
            </div>
        </section>
    )
}

export default Footer;