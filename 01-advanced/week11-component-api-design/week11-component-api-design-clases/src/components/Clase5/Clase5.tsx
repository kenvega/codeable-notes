import Card from "../components_clase5/Card";
import {
  CardBody,
  CardFooter,
  CardHeader,
  CardWithSubComponents,
} from "../components_clase5/CardWithSubComponents";
import s from "./Clase5.module.css";

const Clase5 = () => {
  return (
    <div>
      <h1>Clase 5: Compound Components</h1>

      <h2>Card with element props</h2>
      <Card
        headerElement={<h2 className={s.header}>Et consequat scelerisque</h2>}
        bodyElement={
          <p className={s.body}>
            Sagittis amet ut aenean gravida a pretium. Ornare feugiat dui sed
            sed. Pretium ante enim lacinia eget adipiscing id sed rhoncus
            sollicitudin.
          </p>
        }
        footerElement={
          <div className={s.footer}>
            <button>Accept</button>
          </div>
        }
      />

      <h2>Card with SubComponents</h2>
      {/* more readable */}
      <CardWithSubComponents>
        <CardHeader>
          <h2 className={s.header}>Et consequat scelerisque</h2>
        </CardHeader>
        <CardBody>
          <p className={s.body}>
            Sagittis amet ut aenean gravida a pretium. Ornare feugiat dui sed
            sed. Pretium ante enim lacinia eget adipiscing id sed rhoncus
            sollicitudin.
          </p>
        </CardBody>
        <CardFooter>
          <div className={s.footer}>
            <button>Accept</button>
          </div>
        </CardFooter>
      </CardWithSubComponents>
    </div>
  );
};

export default Clase5;
