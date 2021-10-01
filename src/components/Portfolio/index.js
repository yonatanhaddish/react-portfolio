import React from 'react';
// import bk_img from '../../assets/bk-img';

function Portfolio(proppass) {
    const { projects=[] }= proppass;
    return(
        <header>
            <h2 className="h2-title">Portfolio</h2>
            <div className="grid-container"> 
                <div className="grid-layout">
                    {projects.map((project) => (
                        <div className="card" key={project.name}>
                            <div className={`${project.name}`}>
                                <h2><b>{project.name}</b></h2>
                                <p>{project.tools}</p>
                                <a className="github-link" href={project.github} target="_blank" rel="noopener noreferrer">Github</a>
                                <br></br>
                                <a className="website-link" href={project.website} target="_blank" rel="noopener noreferrer">Website</a>  
                            </div> 
                            
                        </div>
                    ))}
                </div>
                
            </div>
        </header>
    );
}

export default Portfolio;
