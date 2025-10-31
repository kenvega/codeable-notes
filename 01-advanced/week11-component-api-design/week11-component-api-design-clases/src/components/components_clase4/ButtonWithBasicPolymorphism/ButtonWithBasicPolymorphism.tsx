import s from "./ButtonWithBasicPolymorphism.module.css";

type ButtonWithBasicPolymorphismProps = {
  children: React.ReactNode;
  href?: string;
};

const ButtonWithBasicPolymorphism = ({
  children,
  href,
  ...delegated
}: ButtonWithBasicPolymorphismProps) => {
  return typeof href === "string" ? (
    <a className={s.button} href={href} {...delegated}>
      {children}
    </a>
  ) : (
    <button className={s.button} {...delegated}>
      {children}
    </button>
  );
};

export default ButtonWithBasicPolymorphism;
