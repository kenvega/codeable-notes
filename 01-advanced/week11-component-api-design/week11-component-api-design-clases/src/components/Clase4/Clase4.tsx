import ButtonWithBasicPolymorphism from "../components_clase4/ButtonWithBasicPolymorphism/ButtonWithBasicPolymorphism";
import ButtonWithPolymorphism from "../components_clase4/ButtonWithPolymorphism/ButtonWithPolymorphism";
import CardPolymorphism from "../components_clase4/CardPolymorphism";
import CardValidElements from "../components_clase4/CardValidElements";

const Clase4 = () => {
  return (
    <div>
      <h1>Clase 4: Polymorphism</h1>

      <h2>ButtonWithBasicPolymorphism</h2>
      <ButtonWithBasicPolymorphism>Button</ButtonWithBasicPolymorphism>
      <ButtonWithBasicPolymorphism href="#">Link</ButtonWithBasicPolymorphism>

      <h2>ButtonWithPolymorphism</h2>
      <ButtonWithPolymorphism>Button</ButtonWithPolymorphism>
      <ButtonWithPolymorphism href="#">Link</ButtonWithPolymorphism>

      <h2>Card With Polymorphism</h2>
      <CardPolymorphism as="section">This is a section card.</CardPolymorphism>
      <CardValidElements as="article">
        This is an article card.
      </CardValidElements>
    </div>
  );
};

export default Clase4;
