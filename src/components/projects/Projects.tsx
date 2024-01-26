import FadeInSection from '../animations/FadeInSection/FadeInSection';
import { projects } from '@/data/data';
import ProjectCard from './projectCard/ProjectCard';
import styles from './Projects.module.scss';

function Projects() {
  return (
    <FadeInSection customClass={`${styles.projects} main-layout`} id="projects">
      <h2 className={`${styles.title} main-title fade-in`}>Projets.</h2>
      <div className={styles.container}>
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            link={project.link}
            imageSrc={project.imageSrc}
            tags={project.tags}
          />
        ))}
      </div>
    </FadeInSection>
  );
}

export default Projects;
