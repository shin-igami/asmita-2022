import React, { useState } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"

import mainData from "./../assets/data/main-data.json"

export default function Header() {
  const [width, setWidth] = useState(window.innerWidth)
  const [navStatus, setNavStatus] = useState(false)
  window.addEventListener("resize", () => {
    setWidth(window.innerWidth)
  })
  const renderIcon = () => {
    if (width <= 900) {
      return navStatus === true ? (
        <AiOutlineClose
          className="header__icon"
          onClick={() => setNavStatus(!navStatus)}
        />
      ) : (
        <AiOutlineMenu
          className="header__icon"
          onClick={() => setNavStatus(!navStatus)}
        />
      )
    } else return null
  }

  const renderNavClass = () => {
    if (width <= 900) {
      if (navStatus) {
        return " header__navbar header__navbar__mobile nav__active"
      } else {
        return " header__navbar header__navbar__mobile"
      }
    }
    return "header__navbar "
  }

  return (
    <header className="header">
      <div className="header__logo">
        <StaticImage
          className="header__image"
          src="./../assets/images/SVG/h4i_logo.svg"
          alt="hack for inclusion"
        />
      </div>

      {renderIcon()}
      <div className={renderNavClass()}>
        {mainData.navItems.map(navItem => (
          <Link key={navItem.name} to={navItem.link} className="header__nav">
            {navItem.name}
          </Link>
        ))}
      </div>
    </header>
  )
}
