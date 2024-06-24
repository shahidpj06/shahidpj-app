import React from 'react'
import styles from './ProjectsStyles.module.css'
import shopkart from './../../assets/ecomm.jpg'
import visitors from './../../assets/visitors.jpg'
import elearn from './../../assets/elearn.jpg'
import todo from './../../assets/todo.jpg'
import ProjectCard from '../../common/ProjectCard'

function Projects() {
  return (
    <section id='projects' className={styles.container}>
        <h1 className='sectionTitle'>Projects</h1>
        <div className={styles.projectsContainer}>
           <ProjectCard src={shopkart} 
           link='https://github.com/shahidpj06/shopkart'
           h3='Shopkart' p='E-Commerce'
           /> 
           <ProjectCard src={visitors} 
           link='https://github.com/shahidpj06/visitor_management'
           h3='VisitDesk' p='Visitors Management System'
           /> 
           <ProjectCard src={elearn} 
           link='https://github.com/shahidpj06/learning'
           h3='E-Learn' p='Online Learning System'
           /> 
           <ProjectCard src={todo} 
           link='https://github.com/shahidpj06/todo'
           h3='To-Do' p='To-Do App'
           />   
        </div>
    </section>
    )
}

export default Projects