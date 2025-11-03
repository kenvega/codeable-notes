import s from "./CardWithSubComponents.module.css";

export function CardWithSubComponents({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className={s.card}>{children}</div>;
}

export function CardHeader({ children }: { children: React.ReactNode }) {
  return <div className={s.header}>{children}</div>;
}

export function CardBody({ children }: { children: React.ReactNode }) {
  return <div className={s.body}>{children}</div>;
}

export function CardFooter({ children }: { children: React.ReactNode }) {
  return <div className={s.footer}>{children}</div>;
}

export default CardWithSubComponents;
