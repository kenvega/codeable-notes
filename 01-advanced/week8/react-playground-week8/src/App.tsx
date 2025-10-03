import "./App.css";
import CounterWithoutReactMemo from "./components/clase01/examples/reactMemo/CounterWithoutReactMemo/CounterWithoutReactMemo";
import CounterWithReactMemo from "./components/clase01/examples/reactMemo/CounterWithReactMemo/CounterWithReactMemo";

// import Primes from "./components/clase01/useMemo/Primes";
// import Main from "./components/clase01/useMemoReduceReRenders/Main";

function App() {
  return (
    <>
      {/* clase 01 - Reactmemo */}
      <CounterWithoutReactMemo />
      <CounterWithReactMemo />
      {/* <Primes /> */}
      {/* <Main /> */}
    </>
  );
}

export default App;
