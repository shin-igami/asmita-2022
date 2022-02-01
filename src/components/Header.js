import React from "react"

import { StaticImage } from "gatsby-plugin-image"

import mainData from "./../assets/data/main-data.json"
import { Link } from "gatsby"

export default function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <StaticImage
          src="./../assets/images/asmita_logo.png"
          alt="asmita iiita"
        />
        <span>asmita</span>
      </div>
      <div className="header__navbar">
        {mainData.navItems.map(navItem => (
          <Link
            key={navItem.name}
            to={navItem.link}
            className="header__navbar__nav"
          >
            {navItem.name}
          </Link>
        ))}
      </div>
    </header>
  )
}
