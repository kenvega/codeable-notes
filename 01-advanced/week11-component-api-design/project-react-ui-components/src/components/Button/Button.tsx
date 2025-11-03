import styles from "./Button.module.css";

type ButtonProps = {
  variant?: "default" | "secondary" | "outline";
  size?: "default" | "sm" | "lg" | "icon";
  active?: boolean;
  disabled?: boolean;
  icon?: React.ReactNode;
  href?: string;
  children?: React.ReactNode;
};

const Button = ({
  variant = "default",
  size = "default",
  active,
  disabled,
  icon,
  href,
  children,
}: ButtonProps) => {
  const Tag = typeof href === "string" ? "a" : "button";

  return (
    <Tag
      className={`${styles.btn} ${styles[variant]} ${styles[size]} ${
        active ? styles.active : ""
      } ${disabled ? styles.disabled : ""}`}
      // className={`${styles.btn} ${styles[variant]} ${styles[size]}`}
      disabled={disabled}
    >
      {icon}
      {children}
    </Tag>
  );
};

export default Button;
