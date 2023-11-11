import Room from "./components/Room/Room";
import ColorPicker from "./components/Color-picker/Color-picker";

import { useColor } from "./store/color";

import s from "./App.module.css";
import { Canvas } from "@react-three/fiber";

function App() {
  const isColorPickerOpen = useColor((state) => state.isOpen);
  return (
    <main className={s.main}>
      <Room />
      {isColorPickerOpen && <ColorPicker />}
    </main>
  );
}

export default App;
