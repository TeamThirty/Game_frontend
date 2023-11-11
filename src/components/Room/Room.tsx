import { Suspense } from "react";

import { Closet, Bed } from "../../models";
import { Canvas } from "@react-three/fiber";

import { useColor } from "../../store/color";

import s from "./room.module.css";

const Room = () => {
  const { pickModel, hidePicker } = useColor();
  return (
    <div className={s.container}>
      <Canvas
        onPointerMissed={hidePicker}
        camera={{ position: [0, 2, 5], zoom: 1.7 }}
      >
        <ambientLight />
        <Suspense fallback={null}>
          <Closet
            name="closet"
            onClick={() => pickModel(1)}
            position={[0, -1, -1]}
            rotation={[0, Math.PI / 1, 0]}
          />
        </Suspense>

        <Suspense>
          <Bed name="bed" onClick={() => pickModel(2)} position={[2, 0, 0]} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Room;
