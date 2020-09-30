import React from "react"
import "../styles/styles.scss"
import Header from "../components/Navbar/Header"

import LP from "../components/Mainpage/LP"
import About from "../components/Mainpage/About"

const IndexPage = () => (
  <>
    <Header />
    <LP />
    <About />
  </>
)

export default IndexPage
