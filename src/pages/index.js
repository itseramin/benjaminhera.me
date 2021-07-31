import scrollTo from "gatsby-plugin-smoothscroll"
import React, { useRef, useState } from "react"
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import styled from "styled-components"

import Layout from "../layouts/main"

import { StyledIconBase } from "@styled-icons/styled-icon"
import { Github } from "@styled-icons/bootstrap/Github"
import { Linkedin } from "@styled-icons/bootstrap/Linkedin"
import { Facebook } from "@styled-icons/bootstrap/Facebook"

function Box(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef()
  const state = useThree()
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame(({ clock }) => (mesh.current.position.y = state.viewport.height / state.viewport.getCurrentViewport().height))

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}

export default function Home() {
  return (
    <Layout>
      <ThreeJs>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box position={[-1.2, 0, 0]} />
        <Box position={[1.2, 0, 0]} />
      </ThreeJs>
      <Container>
        <Section id={"home"}>
          <SnapTo to={"#social"}>Social</SnapTo>
        </Section>
        <Section>
          Middle
        </Section>
        <Section id={"social"}>
          <Link href="https://facebook.com"><Facebook size="48" title="Facebook" /></Link>
          <Link href="https://linkedin.com"><Linkedin size="48" title="LinkedIn" /></Link>
          <Link href="https://github.com"><Github size="48" title="GitHub" /></Link>
        </Section>
      </Container>
    </Layout>
  )
}

const ThreeJs = styled(props => <Canvas {...props} />).attrs({
  className: 'position-fixed top-0 start-0'
})``

const Container = styled.div.attrs({
  className: 'position-absolute'
})`
  height: 100vh;
  width: 100vw;
  overflow: scroll;
  -webkit-overflow-scrolling: touch; /* Fix for smooth scrolling on IOS */

  /* Making scrollbars disappear while maintaining the functionality */
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari and Opera */
  }

  scroll-snap-type: mandatory;
  scroll-snap-points-y: repeat(100vh);
  scroll-snap-type: y mandatory;
`

const Section = styled.section.attrs({
  className: "d-flex flex-row align-items-center justify-content-center",
})`
  height: 100vh;
  scroll-snap-align: start;
  position: relative;
`
const SnapTo = styled.div.attrs(props => ({
  className: "position-absolute",
  onClick: () => scrollTo(props.to || "#home"),
  size: 100,
}))`

  &:hover {
    cursor: pointer;
  }
`

const Link = styled.a.attrs({
  className: "mx-2",
  rel: "noreferrer",
  target: "_blank"
})`
  ${StyledIconBase} {
    color: white;

    transition: all .33s ease-in-out;;
    
    &:hover {
      color: rgba(212, 212, 212, 255);
      transform: scale(0.9);
    }
  }
`