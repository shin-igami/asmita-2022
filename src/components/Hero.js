import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { FaPlay } from "react-icons/fa"

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__image">
        <StaticImage
          src="./../assets/images/hero-image.png"
          alt="asmita iiita sports fest"
        />
      </div>
      <div className="hero__content">
        ASMITA 2022
        <div className="hero__content__date">
          23 <span>RD</span> FEBRUARY - 29 <span>TH</span> FEBRUARY
        </div>
      </div>
      <FaPlay className="hero__cta" />
    </section>
  )
}
