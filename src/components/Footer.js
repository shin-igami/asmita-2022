import { StaticImage } from "gatsby-plugin-image"
import React from "react"

import { BiCopyright } from "react-icons/bi"
import { FaTwitter, FaInstagram, FaFacebookF } from "react-icons/fa"
export default function Footer() {
  return (
    <section className="footer">
      <StaticImage
        src="./../assets/images/asmita_logo_white.png"
        alt="asmita iiita"
      />
      <div className="footer__links">
        <a href="#" target="_blank">
          <FaTwitter className="footer__link" />
        </a>
        <a href="#" target="_blank">
          <FaInstagram className="footer__link" />
        </a>
        <a href="#" target="_blank">
          <FaFacebookF className="footer__link" />
        </a>
      </div>
      <p>
        <BiCopyright /> All Copyrights Reserved
      </p>
    </section>
  )
}
