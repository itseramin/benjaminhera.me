import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import styled from 'styled-components'
import Text from '../components/threejs/text'

import Layout from '../layouts/main'

function FoF() {
  const ref = useRef()
  useFrame(({ clock }) => (ref.current.rotation.y = clock.getElapsedTime()))

  return (
    <group ref={ref}>
      <Text text='404' position={[0, 0, -10]} size={12} />
    </group>
  )
}

export default function FourOFour() {
  return (
    <Layout>
      <ThreeJs>
        <ambientLight intensity={0.1} />
        <directionalLight color="red" position={[0, 0, 5]} />
        <FoF />
      </ThreeJs>
    </Layout>
  )
}

const ThreeJs = styled(props => <Canvas {...props} />).attrs({
  className: 'position-fixed top-0 start-0'
})``