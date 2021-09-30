import React from 'react';
// import bk_img from '../../assets/bk-img/task-master-pro.png';

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
                            <img src={require(`../../assets/bk-img/${project.name}.png`).default}
                                    alt={project.name} style={{maxHeight: "150px"}}>
                                <h2><b>{project.name}</b></h2>
                                <p>{project.tools}</p>
                                <a className="github-link" href={project.github} target="_blank" rel="noopener noreferrer">Github</a>
                                <br></br>
                                <a className="website-link" href={project.website} target="_blank" rel="noopener noreferrer">Website</a>  
                                </img>
                            </div> 
                            
                        </div>
                        // <img src={bk_img} className="my-2" style={{width: "100%"}} alt="cover" />
                    ))}
                </div>
                
            </div>
        </header>
    );
}

export default Portfolio;
