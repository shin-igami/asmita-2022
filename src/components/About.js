import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import { about } from "./../assets/data/main-data.json"

export default function About() {
  return (
    <section className="about">
      <h1 className="about__heading">{about.heading}</h1>
      <div className="about__content">
        {about.data.map(data => (
          <div className="about__content__card">
            <h1>{data.subheading}</h1>
            <p>{data.detail}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
