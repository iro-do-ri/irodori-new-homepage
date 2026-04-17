"use client";

import { useGLTF, useAnimations } from "@react-three/drei";
import { useEffect } from "react";
import * as THREE from "three";
import { ThreeElements } from "@react-three/fiber";

useGLTF.setDecoderPath("/draco/");

export default function MyModel(
  props: ThreeElements["group"]
) {
  const { scene, animations } = useGLTF("/models/irodori.glb");
  console.log("animations:", animations.map(a => a.name));
  const { actions } = useAnimations(animations, scene);
  useEffect(() => {
    const action = actions["ArmatureAction.002"];
    if (!action) return;
  
    action.reset().setLoop(THREE.LoopRepeat, Infinity).play();
  }, [actions]);
  
  return <primitive castShadow object={scene} {...props} />;
}

useGLTF.preload("/models/my-model-draco.glb");
