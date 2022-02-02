import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { BiPlay } from "react-icons/bi"

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__image">
        <StaticImage
          src="./../assets/images/hero-image.png"
          alt="asmita iiita sports fest"
          className="hero__image__hero"
        />
      </div>
      <div className="hero__content">
        ASMITA 2022
        <div className="hero__content__date">
          12 <span>TH</span> FEBRUARY - 13 <span>TH</span> FEBRUARY
        </div>
      </div>
      <BiPlay className="hero__cta" />
    </section>
  )
}
