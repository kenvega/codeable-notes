import clsx from "clsx";
import styles from "./BadBanner.module.css";

type BadBannerProps = {
  user?: {
    name: string;
  };
  type: string;
  children: React.ReactNode;
};

// sobre carga de props
function BadBanner({ user, type, children }: BadBannerProps) {
  const bannerClassName = clsx(styles.banner, styles[type]);

  return (
    <div className={bannerClassName}>
      <p className={styles.user}>{user ? user.name : "Anonymous"}</p>
      {children}
    </div>
  );
}

export default BadBanner;
