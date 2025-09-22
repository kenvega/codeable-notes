import "./App.css";
// import Notaejercicio from "./components/Notaejercicio";
// import ExampleUseId from "./components/clase03/ExampleUseId/ExampleUseId"
// import ExampleUseRef from "./components/clase03/ExampleUseRef/ExampleUseRef"
// import ExampleFetch01 from "./components/clase05/ExampleFetch01/ExampleFetch01"
import ExampleFetch02 from "./components/clase05/ExampleFetch02/ExampleFetch02"

function App() {
  return (
    <div style={{ margin: "1rem" }}>
      {/* <Notaejercicio title="This is a note!" type="info">Nota tipo "info"</Notaejercicio>
      <Notaejercicio title="This is a note!" type="success">Nota tipo "success"</Notaejercicio>
      <Notaejercicio title="This is a note!" type="warning">Nota tipo "warning"</Notaejercicio>
      <Notaejercicio title="This is a note!" type="danger">Nota tipo "danger"</Notaejercicio> */}
      {/* week6 - clase03-01 - useId */}
      {/* <ExampleUseId /> */}
      {/* week6 - clase03-02 - useRef */}
      {/* <ExampleUseRef /> */}
      {/* week6 - clase05-01 - fetch en evento */}
      {/* <ExampleFetch01 /> */}
      {/* week6 - clase05-02 - fetch al montar */}
      <ExampleFetch02 />
    </div>
  );
}

export default App;
