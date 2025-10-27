import s from "./UserCard.module.css";

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
    <div className={s.card}>
      <img className={s.avatar} alt={imageAlt} src={user.avatarSrc} />
      <p className={s.username}>{user.name}</p>
    </div>
  );
}

export default UserCard;
