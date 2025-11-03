import Banner from "../Banner";
import styles from "./UserBanner.module.css";

type UserBannerProps = {
  user?: {
    name: string;
  };
  type: string;
  children: React.ReactNode;
};

function UserBanner({ user, type, children }: UserBannerProps) {
  // se usa composicion para evitar repetir codigo
  return (
    <Banner type={type}>
      <p className={styles.user}>{user ? user.name : "Anonymous"}</p>
      {children}
    </Banner>
  );
}

export default UserBanner;
