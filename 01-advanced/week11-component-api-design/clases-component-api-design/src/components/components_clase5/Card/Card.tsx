import s from "./Card.module.css";

type CardProps = {
  headerElement: React.ReactNode;
  bodyElement: React.ReactNode;
  footerElement: React.ReactNode;
};

const Card = ({ headerElement, bodyElement, footerElement }: CardProps) => {
  return (
    <div className={s.card}>
      {headerElement && <div className={s.header}>{headerElement}</div>}
      {bodyElement && <div className={s.body}>{bodyElement}</div>}
      {footerElement && <div className={s.footer}>{footerElement}</div>}
    </div>
  );
};

export default Card;
