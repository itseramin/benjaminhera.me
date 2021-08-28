import React, { useEffect, useRef, useState } from "react"
import { useGLTF } from "@react-three/drei"

export default function FoF(props) {
  const main = useRef()
  const { nodes, materials } = useGLTF("./assets/models/404.gltf")
  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    document.body.style.cursor = hovered ? "pointer" : "auto"
  }, [hovered])

  return (
    <group ref={main} {...props} dispose={null}>
      <mesh
        onClick={() => (window.location.href = "https://benjaminhera.me/")}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        castShadow
        receiveShadow
        geometry={nodes.Text.geometry}
        material={materials["Material.001"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </group>
  )
}

useGLTF.preload("./assets/models/404.gltf")
