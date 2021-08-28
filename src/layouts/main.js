import React from "react"
import styled from "styled-components"

import Seo from "../components/seo"

export default function Layout({ children }) {
  return (
    <>
      <Seo />
      <Body>
        <Main>{children}</Main>
      </Body>
    </>
  )
}

const Body = styled.div.attrs({
  className: "min-vh-100 d-flex flex-column",
})``

const Main = styled.main.attrs({
  className:
    "d-flex flex-column flex-grow-1 align-items-center justify-content-center",
})`
  text-align: center;
`
