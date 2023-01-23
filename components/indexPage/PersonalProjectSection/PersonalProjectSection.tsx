import { projects } from "../../../utils/Data";
import MobileProjectDetailCard from "./MobileProjectDetailCard";
import styles from "./Style.module.css";

const PersonalProjectSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.sectionHeading}>
        <h3>Personal Projects</h3>
      </div>
      <div className={styles.projectsContainer}>
        {projects.slice(0, 5).map((project, index) => {
          return (
            <MobileProjectDetailCard
              key={project.id}
              project={project}
              index={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default PersonalProjectSection;
