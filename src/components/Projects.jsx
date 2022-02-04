import React from 'react';
import './Projects.scss';
import ModalCard from './ModalCard';
import image from '../assets/Portfolio.PNG';
import Projects_List from '../config/Projects_List'

export default function Experience() {

    return(
        <div className='parent_project'>
            <h1 className='project-div-title'>Projects</h1>
            <div className='project-div'>
                {Projects_List.map(project => {
                    return(
                        <ModalCard className='project-card'>
                            <div className='project-name'>
                                <p>{project.name}</p>
                            </div>
                            <hr />
                            <a href="/projects/#" 
                                title='Visit'
                                // target="_blank" rel="noopener noreferrer"
                            >
                                <img src={image} alt='project'/>
                            </a>
                            <hr />
                            <div className='project-description'>
                                <p>{project.description}</p>
                            </div>
                            <hr />
                            <div className='tech-div'>
                                {project.technologies.map(tech => {
                                    return(
                                        <ModalCard className='tech-card'>
                                            <p>{tech}</p>
                                        </ModalCard>
                                    )
                                })}
                            </div>
                        </ModalCard>
                    )
                })}
            </div>
        </div>
    );
}
