import styles from "./UserCard.module.css";
import Card from "../Card";

type UserCardProps = {
  user: {
    name: string;
    avatarSrc: string;
    avatarDescription: string;
  };
};

function UserCard({ user }: UserCardProps) {
  const imageAlt = `${user.avatarDescription} (user profile photo)`;

  return (
    <Card elevation={1}>
      <img className={styles.avatar} alt={imageAlt} src={user.avatarSrc} />
      <p className={styles.username}>{user.name}</p>
    </Card>
  );
}

export default UserCard;
