// import { useState, useEffect } from "react";
import { projects } from "../../constants/projects";
import TicTacToe from "../TicTacToeComponents/TicTacToe";
import PokeCollection from "../PokeCollection";
import Wordle from "../Wordle";
import styles from "./ShowProject.module.css";

type ShowProjecProps = {
  selectedProject: string;
};

const ShowProject = ({ selectedProject }: ShowProjecProps) => {
  let projectToShow: React.ReactNode | null;

  switch (selectedProject) {
    case projects.ticTacToe:
      projectToShow = <TicTacToe />;
      break;
    case projects.pokeCollection:
      projectToShow = <PokeCollection />;
      break;
    case projects.wordle:
      projectToShow = <Wordle />;
      break;
    default:
      projectToShow = null;
  }

  return <div className={styles.project}>{projectToShow}</div>;
};

export default ShowProject;
