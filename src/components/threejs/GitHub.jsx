import React, { useEffect, useRef, useState } from "react"
import { useFrame } from "@react-three/fiber"
import { useGLTF } from "@react-three/drei"
import * as THREE from "three"

export default function GitHub(props) {
  const main = useRef()
  const { nodes, materials } = useGLTF("./assets/models/github.gltf")
  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    document.body.style.cursor = hovered ? "pointer" : "auto"
  }, [hovered])

  useFrame(({ mouse }) => {
    main.current.rotation.y = THREE.MathUtils.lerp(
      main.current.rotation.y,
      (mouse.x * Math.PI) / 3,
      0.1
    )
    main.current.rotation.x = THREE.MathUtils.lerp(
      main.current.rotation.x,
      (mouse.y * Math.PI) / 10,
      0.1
    )
  })

  return (
    <group ref={main} {...props} dispose={null}>
      <mesh
        onClick={() => window.open("https://github.com/itseramin")}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        geometry={nodes.Curve.geometry}
        material={materials.SVGMat}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </group>
  )
}

useGLTF.preload("./assets/models/github.gltf")
