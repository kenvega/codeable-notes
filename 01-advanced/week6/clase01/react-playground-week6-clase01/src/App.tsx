import "./App.css";
import Notaejercicio from "./components/Notaejercicio";

function App() {
  return (
    <div style={{ margin: "1rem" }}>
      <Notaejercicio title="This is a note!" type="info">Nota tipo "info"</Notaejercicio>
      <Notaejercicio title="This is a note!" type="success">Nota tipo "success"</Notaejercicio>
      <Notaejercicio title="This is a note!" type="warning">Nota tipo "warning"</Notaejercicio>
      <Notaejercicio title="This is a note!" type="danger">Nota tipo "danger"</Notaejercicio>
    </div>
  );
}

export default App;
