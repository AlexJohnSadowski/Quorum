import React from "react"
import "../styles/styles.scss"
import Header from "../components/Navbar/Header"

import LP from "../components/Mainpage/LP"
import About from "../components/Mainpage/About"
import Footer from '../components/Footer/Footer'

const IndexPage = () => (
  <>
    <Header />
    <LP />
    <About />
    <Footer />
  </>
)

export default IndexPage
