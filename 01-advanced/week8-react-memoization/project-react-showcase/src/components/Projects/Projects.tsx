import ProjectCard from "../ProjectCard";
import styles from "./Projects.module.css";

import { projects } from "../../constants/projects";

import ticTacToeImg from "../../assets/tic-tac-toe.png";
import pokeApiImg from "../../assets/pokeapi.png";
import wordleImg from "../../assets/wordle.png";

type ProjectsProps = {
  onSelectedProject: (selected: string) => void;
};

const Projects = ({ onSelectedProject }: ProjectsProps) => {
  return (
    <div className={styles.projectContainer}>
      <ProjectCard
        title="ReactDev Tic-Tac-Toe"
        onClick={() => onSelectedProject(projects.ticTacToe)}
        image={ticTacToeImg}
        features={[
          "useState",
          "useEffect",
          "Custom Hooks",
          "localStorage",
          "CSS Modules",
        ]}
      />
      <ProjectCard
        title="Poke Collection"
        onClick={() => onSelectedProject(projects.pokeCollection)}
        image={pokeApiImg}
        features={[
          "useState",
          "useEffect",
          "Custom Hooks",
          "localStorage",
          "CSS Modules",
        ]}
      />
      <ProjectCard
        title="React Wordle"
        onClick={() => onSelectedProject(projects.wordle)}
        image={wordleImg}
        features={[
          "useState",
          "useEffect",
          "Custom Hooks",
          "localStorage",
          "CSS Modules",
        ]}
      />
    </div>
  );
};

export default Projects;
