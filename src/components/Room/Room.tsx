import { Suspense } from "react";

import { Closet, Bed } from "../../models";

import { Canvas } from "@react-three/fiber";

import s from "./room.module.css";

const Room = () => {
  return (
    <div className={s.container}>
      <Canvas camera={{ position: [0, 2, 5], zoom: 1.7 }}>
        <ambientLight />
        <Suspense fallback={null}>
          <Closet position={[0, -1, -1]} rotation={[0, Math.PI / 1, 0]} />
        </Suspense>

        <Suspense>
          <Bed position={[2, 0, 0]} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Room;
