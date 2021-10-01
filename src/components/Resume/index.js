import React from 'react';

function Resume() {
    return(
        <section>
            <h2 className="h2-title">Resume</h2>
            <div>
                <h3>Tools</h3>
                <ol>
                    <li className="tool-list">HTML</li>
                    <li className="tool-list">CSS</li>
                    <li className="tool-list">JavaScript</li>
                    <li className="tool-list">JQuery</li>
                    <li className="tool-list">React</li>
                    <li className="tool-list">Bootstrap</li>
                    <li className="tool-list">Styled-components</li>
                    <li className="tool-list">APIs</li>
                    <li className="tool-list">Node</li>
                    <li className="tool-list">Express</li>
                    <li className="tool-list">MySQL, Sequelize</li>
                    <li className="tool-list">REST</li>
                    <li className="tool-list">GraphQL</li>
                    <li className="tool-list">MongoDb, Graphql</li>
                </ol>
            </div>
            <div>
                <a href="https://drive.google.com/file/d/1ZqubIBq-O7wF6hbzXHXtdUEy9U2fUzaT/view?usp=sharing"
                    target="_blank" rel="noopener noreferrer" >
                    <button>Download Resume</button>
                </a>
            </div>
        </section>
    );
}

export default Resume;