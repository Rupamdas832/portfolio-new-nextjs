import { projects } from "../../../utils/Data";
import ProjectCard from "./ProjectCard";
import styles from "./Style.module.css";

const ProjectHorizontalListSection = () => {
  return (
    <div className={styles.container}>
      {projects.map((project) => {
        return <ProjectCard key={project.title} project={project} />;
      })}
    </div>
  );
};

export default ProjectHorizontalListSection;
