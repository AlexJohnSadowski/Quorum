import React from "react"
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"
import { IconContext } from "react-icons"
import { Link } from "gatsby"

const Footer = () => {
  return (
    <>
      <div className="footer-bar">
        <div className="footer-logo"><Link to="/">Quorum</Link></div>
        <IconContext.Provider
          value={{
            size: "4vh",
            color: "white",
            className: "global-class-name",
          }}
        >
            <div>
              <FaFacebook />
            </div>
            <div>
            <FaInstagram />
            </div>
            <div>
            <FaTwitter />
            </div>
        </IconContext.Provider>
      </div>
      <div className="copyrights">
        this project was made by <a href="https://www.alexsadowski.pl">Alex</a>
      </div>
    </>
  )
}

export default Footer
