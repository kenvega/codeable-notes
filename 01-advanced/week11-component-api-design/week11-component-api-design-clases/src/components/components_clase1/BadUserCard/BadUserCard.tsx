import styles from "./BadUserCard.module.css";

type BadUserCardProps = {
  user: {
    name: string;
    avatarSrc: string;
    avatarDescription: string;
  };
};

function BadUserCard({ user }: BadUserCardProps) {
  const imageAlt = `${user.avatarDescription} (user profile photo)`;

  return (
    <div className={styles.card}>
      <img className={styles.avatar} alt={imageAlt} src={user.avatarSrc} />
      <p className={styles.username}>{user.name}</p>
    </div>
  );
}

export default BadUserCard;
