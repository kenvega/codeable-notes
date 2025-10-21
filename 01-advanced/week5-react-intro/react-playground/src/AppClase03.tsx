export default function App() {
  function setTheme(theme: string) {
    console.log("Cambiando al tema: " + theme);
  }

  function handleDark() {
    setTheme("dark");
  }

  return (
    <div>
      <button onClick={() => setTheme('light')}>Light Theme</button>
      <button onClick={handleDark}>Dark Theme</button>
    </div>
  );
}
