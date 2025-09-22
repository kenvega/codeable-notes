// import ContactFormProblem from "./ContactFormProblem";
import ContactFormSolution from "./ContactFormSolution";

// notaras que si tienes 2 inputs con el mismo id
// 2 veces renderizado el contactForm (sea el solution o el problem)
// entonces siempre se le hara focus al id del primer contactform
// entonces necesitas que el ContactForm tenga ids unicos
function ExampleUseId() {
  return (
    <>
      <header>
        <h2>Header</h2>
        <ContactFormSolution />
      </header>
      <main>
        <h2>Main</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          laudantium dolore aut earum quam ipsum non, voluptates, accusantium
          dolorum velit libero commodi harum quas suscipit ea, nihil
          consectetur? Numquam, quod?
        </p>
      </main>
      <footer>
        <h2>Footer</h2>
        <ContactFormSolution />
      </footer>
    </>
  );
}

export default ExampleUseId;
