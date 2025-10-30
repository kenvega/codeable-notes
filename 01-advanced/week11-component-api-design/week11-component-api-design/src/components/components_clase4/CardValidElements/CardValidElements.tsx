import s from "./CardValidElements.module.css";

type CardValidElementsProps = {
  children: React.ReactNode;
  as?: "div" | "main" | "aside" | "article" | "section" | "li";
};

const validElements = ["div", "main", "aside", "article", "section", "li"];

const CardValidElements = ({
  children,
  as: Tag = "div",
}: CardValidElementsProps) => {
  if (!validElements.includes(Tag)) {
    throw new Error(`Invalid element: ${Tag}. Expected: ${validElements}`);
  }

  return <Tag className={s.card}>{children}</Tag>;
};

export default CardValidElements;
