import styles from "./Card.module.css";

type CardProps = {
  children: React.ReactNode;
  elevation: 1 | 2 | 3;
};

const Card = ({ children, elevation }: CardProps) => {
  return (
    <div
      className={styles.card}
      style={{ boxShadow: `var(--elevation-${elevation})` }}
    >
      {children}
    </div>
  );
  // another solution for the elevation but you would have to create multiple CSS classes
  // return (
  //   <div className={clsx(styles.card, styles[`elevation-${elevation}`])}>
  //     {children}
  //   </div>
  // );
};

export default Card;
