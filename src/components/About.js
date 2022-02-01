import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import { about } from "./../assets/data/main-data.json"

export default function About() {
  return (
    <section className="about">
      <div className="about__image">
        <StaticImage
          src="./../assets/images/about-image.png"
          alt="asmita iiita"
        />
      </div>

      <div className="about__content">
        <h1>{about.heading}</h1>
        <p>{about.description}</p>
      </div>
    </section>
  )
}
