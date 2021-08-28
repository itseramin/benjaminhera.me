import React from "react"
import { Html, useProgress } from "@react-three/drei"
import styled from "styled-components"

import ProgressBar from "../ProgressBar"

export default function Loader() {
  const { progress } = useProgress()

  return (
    <Html fullscreen>
      <Container>
        <Text>{progress}%</Text>
        <ProgressBar value={progress} />
      </Container>
    </Html>
  )
}

const Container = styled.div.attrs({
  className:
    "align-items-center d-flex flex-column h-100 justify-content-center w-100",
})``

const Text = styled.span.attrs({
  className: "fw-lighter",
})``
