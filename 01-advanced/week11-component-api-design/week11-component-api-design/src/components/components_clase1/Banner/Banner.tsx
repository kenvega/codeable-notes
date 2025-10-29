import clsx from "clsx";
import styles from "./Banner.module.css";

type BannerProps = {
  type: string;
  children: React.ReactNode;
};

// este Banner es mas generico (ya no tiene que ver con el usuario. no como en BadBanner)
function Banner({ type, children }: BannerProps) {
  const bannerClassName = clsx(styles.banner, styles[type]);

  return <div className={bannerClassName}>{children}</div>;
}

export default Banner;
