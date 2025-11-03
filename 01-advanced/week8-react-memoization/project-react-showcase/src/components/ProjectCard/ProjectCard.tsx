import styles from "./ProjectCard.module.css";

type ProjectCardProps = {
  title: string;
  image: string;
  features: string[];
  onClick: () => void;
};

const ProjectCard = ({ title, features, image, onClick }: ProjectCardProps) => {
  return (
    <div className={styles.project} onClick={onClick}>
      <div className={styles.imgContainer}>
        <img src={image} alt="card image" className={styles.imgProject} />
      </div>
      <div className={styles.title}>{title}</div>
      <div className={styles.featuresContainer}>
        {features.map((feature) => {
          return (
            <div key={feature} className={styles.reactFeatureCard}>
              {feature}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectCard;
