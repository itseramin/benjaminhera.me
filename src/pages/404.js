import React, { Suspense } from "react"
import { Stage } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import styled from "styled-components"

import Layout from "../layouts/main"

import Loader from "../components/threejs/Loader"
import FoF from "../components/threejs/404"

export default function FourOFour() {
  return (
    <Layout>
      <ThreeJs>
        <Suspense fallback={<Loader />}>
          <Stage preset="rembrandt" intensity={1} environment="city">
            <FoF />
          </Stage>
        </Suspense>
      </ThreeJs>
    </Layout>
  )
}

const ThreeJs = styled(props => <Canvas {...props} />).attrs({
  className: "position-fixed top-0 start-0",
})``
