import Room from "./components/Room/Room";

import s from "./App.module.css";
import ColorPicker from "./components/Color-picker/Color-picker";

function App() {
  return (
    <main className={s.main}>
      <Room />
      <ColorPicker />
    </main>
  );
}

export default App;
