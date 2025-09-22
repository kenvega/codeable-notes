// import { useState, useEffect } from 'react'
import styles from './Notaejercicio.module.css'

export type NoteProps = {
  title: string;
  children: React.ReactNode;
  type?: 'info' | 'success' | 'danger' | 'warning'
}

function Notaejercicio({ type = 'info', title, children }: NoteProps) {
  return (
    <aside className={styles.wrapper + ' ' + styles[type]}>
      <h3 className={styles.title}>{title}</h3>
      <p>{children}</p>
    </aside>
  );
}

export default Notaejercicio;