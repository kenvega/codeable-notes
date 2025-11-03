import s from "./ButtonWithPolymorphism.module.css";

type ButtonWithPolymorphismProps = {
  children: React.ReactNode;
  href?: string;
};

const ButtonWithPolymorphism = ({
  children,
  href,
  ...delegated
}: ButtonWithPolymorphismProps) => {
  const Tag = typeof href === "string" ? "a" : "button";

  return (
    <Tag className={s.button} href={href} {...delegated}>
      {children}
    </Tag>
  );
};

export default ButtonWithPolymorphism;

// this component works without any problems
// in the end is like this

// return React.createElement(
//   Tag, // <- cuando se evalúe esta expresión obtendremos "a" o "button"
//   { className: s.button, href: href, ...delegated },
//   children
// );
