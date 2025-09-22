import styles from "./Nota.module.css";

function Nota({ title, children }: { title: string, children: React.ReactNode }) {
  return (
    <aside className={styles.wrapper}>
      <h3 className={styles.title}>{title}</h3>
      <p>{children}</p>
    </aside>
  );
}

export default Nota;
