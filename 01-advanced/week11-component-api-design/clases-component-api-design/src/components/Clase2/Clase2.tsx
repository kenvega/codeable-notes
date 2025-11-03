import { useState } from "react";
import BadInputField from "../components_clase2/BadInputField";
import InputField from "../components_clase2/InputField";
import InputFieldDelegated from "../components_clase2/InputFieldDelegated";
import Range from "../components_clase2/Range/Range";
import RangeDelegated from "../components_clase2/RangeDelegated";
import Toggle from "../components_clase2/Toggle/Toggle";
import useToggle from "./useToggle";
import ToggleDelegated from "../components_clase2/ToggleDelegated";

const Clase2 = () => {
  // related to BadInputField
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());
    alert(JSON.stringify(data, null, 2));
    event.currentTarget.reset();
  }

  // related to Range and RangeDelegated
  const [volume, setVolume] = useState(25);

  // related to Toggle
  const [wifi, toggleWifi] = useToggle(true);
  const [silentMode, toggleSilentMode] = useToggle(false);

  return (
    <div>
      <div>
        <h1>Clase 2: Prop Delegation</h1>

        <h2>BadInputField</h2>
        <form className="form" onSubmit={handleSubmit}>
          <BadInputField label="Username" id="username" name="username" />
          <BadInputField label="Email" id="email" name="email" />
          <BadInputField label="Password" id="password" name="password" />
          <button>Send</button>
        </form>

        <h2>InputField</h2>
        <InputField
          label="First Name"
          id="firstName"
          name="firstName"
          type="text"
          value="hello"
          onChange={() => {}}
        />

        <h2>InputFieldDelegated</h2>
        <InputFieldDelegated
          label="First Name"
          id="firstName"
          name="firstName"
          type="text"
          value="hello"
          onChange={() => {}}
        />
      </div>
      <div>
        <h1>Clase 2: Ejercicios</h1>

        <h2>Range</h2>
        <Range
          label="Volume"
          min={0}
          max={100}
          value={volume}
          onChange={(e) => setVolume(Number(e.target.value))}
          // step={20} // no se podria recibir este prop porque no se esta usando prop delegation
        />
        <p>{volume}</p>

        <h2>RangeDelegated</h2>
        <RangeDelegated
          label="Volume Delegated"
          min={0}
          max={100}
          value={volume}
          onChange={(e) => setVolume(Number(e.target.value))}
          step={20} // ahora si se podria recibir este prop porque se esta usando prop delegation
        />
        <p>{volume}</p>

        <h2>Toggle</h2>
        <Toggle label="Wi-Fi" checked={wifi} onClick={toggleWifi} />
        <Toggle
          className="pinktoggle" // needs prop delegation to work
          label="Silent Mode"
          checked={silentMode}
          onClick={toggleSilentMode}
        />

        <h2>Toggle Delegated</h2>
        <ToggleDelegated
          label="Wi-Fi Delegated"
          checked={wifi}
          onClick={toggleWifi}
        />
        <ToggleDelegated
          label="Silent Mode Delegated"
          checked={silentMode}
          onClick={toggleSilentMode}
          className="pinktoggle" // now it works because of prop delegation
        />
      </div>
    </div>
  );
};

export default Clase2;
