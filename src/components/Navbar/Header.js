import { Link } from "gatsby"
import React from "react"

import VisibleNav from '../Navbar/VisibleNav'
import Burger from '../Navbar/Burger'


const Header = () => {
  return (
    <nav>
      <Link to="/" className="logo">
        Quorum
      </Link>
        <VisibleNav />
        <Burger />
    </nav>
  )
}


export default Header
