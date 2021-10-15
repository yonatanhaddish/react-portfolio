import React from 'react';
// import bk_img from '../../assets/bk-img';
// import backg from '../../assets/bk-img/'

function Portfolio(proppass) {
    const { projects=[] }= proppass;
    return(
        <header>
            <h1 className="h1-title">Welcome to my Portfolio</h1>
            <div className="cardtrial">
                {/* <div className="innercard"> */}
                    {projects.map((project) => (
                        <div className="newcard" key={project.name}>
                            <div className="background-card flex-child">
                                <img src={require(`../../assets/bk-img/${project.name}.png`).default}/>
                            </div>
                            <div className="inner-card flex-child">
                                <h3 className="pro-name">{project.name}</h3>
                                <p className="pro-description">{project.description}</p>
                                <p className= "pro-tools">{project.tools}</p>
                                <a className="pro-github" href={project.github} target="_blank" rel="noopener noreferrer">Github</a>
                                <a className="pro-link" href={project.website} target="_blank" rel="noopener noreferrer">Website</a>
                            </div>
                        </div>
                    ))}
                {/* </div> */}
            </div>
            
        </header>
    );
}

export default Portfolio;

{/* <div className="grid-container"> 
                <div className="grid-layout">
                    {projects.map((project) => (
                        <div className="card" key={project.name}>
                            <div id="singleproject" className={`${project.name}`}>
                                <h3><b>{project.name}</b></h3>
                                <p>{project.tools}</p>
                                <a className="github-link" href={project.github} target="_blank" rel="noopener noreferrer">Github</a>
                                <br></br>
                                <a className="website-link" href={project.website} target="_blank" rel="noopener noreferrer">Website</a>  
                            </div> 
                            <div>
                                <p className="pp">{project.description}</p>
                            </div> 
                        </div>
                    ))}
                </div>    
            </div> */}