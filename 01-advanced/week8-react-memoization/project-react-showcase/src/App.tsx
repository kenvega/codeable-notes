import { useState } from "react";
import Header from "./components/Header";
import Projects from "./components/Projects";
import ShowProject from "./components/ShowProject";
import styles from "./App.module.css";

function App() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const onSelectedProject = (selected: string) => {
    setSelectedProject(selected);
  };

  return (
    <div>
      <Header />
      <div className={styles.mainContainer}>
        {selectedProject ? (
          <ShowProject selectedProject={selectedProject} />
        ) : (
          <Projects onSelectedProject={onSelectedProject} />
        )}
      </div>
    </div>
  );
}

export default App;
