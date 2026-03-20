"use client";

import { useGLTF, useAnimations } from "@react-three/drei";
import { useEffect } from "react";
import * as THREE from "three";
import { ThreeElements } from "@react-three/fiber";

useGLTF.setDecoderPath("/draco/");

export default function MyModel(
  props: ThreeElements["group"]
) {
  const { scene, animations } = useGLTF("/models/my-model-draco.glb");
  const { actions } = useAnimations(animations, scene);

  useEffect(() => {
    const a1 = actions["Action.001"];
    const a2 = actions["Action.002"];
    const a3 = actions["Action.003"];
    const a4 = actions["Action.004"];
    if (!a1 || !a2 || !a3 || !a4) return;

    // 最初：一回だけ
    a1.reset().setLoop(THREE.LoopOnce, 0);
    a2.reset().setLoop(THREE.LoopOnce, 0);

    // 次：ずっとループ
    a3.reset().setLoop(THREE.LoopRepeat, Infinity);
    a4.reset().setLoop(THREE.LoopRepeat, Infinity);

    // 001と002が終わったら 003 と 004 を開始
    const mixer = a1.getMixer();
    mixer.addEventListener("finished", () => {
      a1.stop();
      a2.stop();
      a3.reset().play();
      a4.reset().play();
    });

    // 再生開始
    a1.reset().play();
    a2.reset().play();
  }, [actions]);

  return <primitive castShadow object={scene} {...props} />;
}

