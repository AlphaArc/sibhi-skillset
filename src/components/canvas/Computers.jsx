import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import Loader from "../Loader";

const Computers = ({ isMobile }) => {
  // const computer = useGLTF("/desktop_pc/scene.gltf", (loader) => {
  //   loader.manager.onStart = () => console.log("Loading started");
  //   loader.manager.onProgress = (url, itemsLoaded, itemsTotal) =>
  //     console.log(`Loaded ${itemsLoaded} of ${itemsTotal} items`);
  //   loader.manager.onLoad = () => console.log("Loading complete");
  // });
  const computer = `${import.meta.env.BASE_URL}desktop_pc/scene.gltf`;
  return (
    <mesh>
      <hemisphereLight intensity={1} groundColor="black" />
      <pointLight intensity={4} castShadow />
      <ambientLight intensity={1} />
      <spotLight
        position={[0, 10, 10]}
        angle={0.3}
        penumbra={0.5}
        intensity={0.1}
        castShadow
      />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.75 : 0.75}
        position={isMobile ? [0, -3.25, -2.2] : [0, -3.25, 0]}
        rotation={[-0.01, -0.2, -0.1]}
        castShadow
        recieveShadow
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
      console.log(isMobile);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 30 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<Loader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
