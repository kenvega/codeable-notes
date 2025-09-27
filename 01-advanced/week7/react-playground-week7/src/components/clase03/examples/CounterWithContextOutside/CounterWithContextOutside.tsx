import DisplayWithContext from "./DisplayWithContextOutside";
import ButtonWithContext from "./ButtonWithContextOutside";
import CountProvider from "./CountProvider";

const CounterWithContextOutside = () => {
  return (
    <CountProvider>
      <div className="container">
        <h1>Counter Component using context outside</h1>
        <DisplayWithContext />
        <ButtonWithContext />
      </div>
    </CountProvider>
  );
};

export default CounterWithContextOutside;
