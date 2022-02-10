import React from "react"
import Layout from "../components/Layout"

import { StaticImage } from "gatsby-plugin-image"

export default function Themes() {
  return (
    <Layout>
      <section className="themes">
        <h1>Themes</h1>
        <div className="themes__container">
          <StaticImage
            src="./../assets/images/0.png"
            className="themes__image"
            alt="h41 hack for inclusion"
          />
          <StaticImage
            src="./../assets/images/1.png"
            className="themes__image"
            alt="h41 hack for inclusion"
          />
          <StaticImage
            src="./../assets/images/2.png"
            className="themes__image"
            alt="h41 hack for inclusion"
          />
          <StaticImage
            src="./../assets/images/3.png"
            className="themes__image"
            alt="h41 hack for inclusion"
          />
          <StaticImage
            src="./../assets/images/4.png"
            className="themes__image"
            alt="h41 hack for inclusion"
          />
          <StaticImage
            src="./../assets/images/5.png"
            className="themes__image"
            alt="h41 hack for inclusion"
          />
          <StaticImage
            src="./../assets/images/6.png"
            className="themes__image"
            alt="h41 hack for inclusion"
          />
        </div>
      </section>
    </Layout>
  )
}
