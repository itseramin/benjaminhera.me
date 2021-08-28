import React, { Suspense } from "react"
import { Stage } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import {
  EffectComposer,
  DepthOfField,
  Bloom,
  Vignette,
} from "@react-three/postprocessing"
import styled from "styled-components"

import Layout from "../layouts/main"

import Loader from "../components/threejs/Loader"
import GitHub from "../components/threejs/GitHub"

export default function Home() {
  return (
    <Layout>
      <ThreeJs>
        <Suspense fallback={<Loader />}>
          <Stage preset="rembrandt" intensity={1} environment="city">
            <GitHub />
          </Stage>
        </Suspense>
        <EffectComposer>
          <Bloom
            luminanceThreshold={0}
            luminanceSmoothing={2}
            height={1000}
            opacity={3}
          />
          <DepthOfField
            focusDistance={0}
            focalLength={0.12}
            bokehScale={2}
            height={480}
          />
          <Vignette eskil={false} offset={0.1} darkness={1.1} />
        </EffectComposer>
      </ThreeJs>
    </Layout>
  )
}

const ThreeJs = styled(props => <Canvas {...props} />).attrs({
  className: "position-fixed top-0 start-0",
})``
