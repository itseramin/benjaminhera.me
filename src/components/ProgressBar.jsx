import React from "react"
import styled from "styled-components"

export default function ProgressBar({ value }) {
  return (
    <Container>
      <Progress value={value} />
    </Container>
  )
}

const Container = styled.div.attrs({
  className: "w-25",
})`
  height: 3px;
`

const Progress = styled.div.attrs({
  className: "h-100",
})`
  background-color: white;
  border: none;
  border-radius: 5px;
  box-shadow: 0 0 100px 0px rgba(255, 255, 255, 1);
  transition: width 0.5s;
  width: ${props => (props.value > 0 ? `${props.value}%` : "1%")};
`
