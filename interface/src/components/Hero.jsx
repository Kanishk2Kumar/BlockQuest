import { Loader } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Experience } from "./Experience";
import { UI } from "./UI";

function Hero() {
  return (
    <div className="relative w-full h-screen overflow-hidden" id="Hero">
      <UI />
      <Loader />
      <Canvas
        className="absolute top-0 left-0 w-full h-full"
        shadows
        camera={{
          position: [-0.5, 1, window.innerWidth > 800 ? 4 : 9],
          fov: 45,
        }}
      >
        <group position-y={0}>
          <Suspense fallback={null}>
            <Experience />
          </Suspense>
        </group>
      </Canvas>
    </div>
  );
}

export default Hero;
