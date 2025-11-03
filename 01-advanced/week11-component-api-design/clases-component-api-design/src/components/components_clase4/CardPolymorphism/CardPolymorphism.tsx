import s from "./CardPolymorphism.module.css";
import type { JSX } from "react";

type CardPolymorphismProps = {
  children: React.ReactNode;
  as?: keyof JSX.IntrinsicElements;
};

// prop genérico llamado 'as' que reciba el tipo de elemento que el consumidor quiere utilizar
const CardPolymorphism = ({ children, as }: CardPolymorphismProps) => {
  const Tag = as || "div";

  return <Tag className={s.card}>{children}</Tag>;
};

export default CardPolymorphism;

// otra forma de escribir el componente
// function Card({ children, as: Tag = "div" }) {
//   return <Tag className={s.card}>{children}</Tag>;
// }
