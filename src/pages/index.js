import React from "react"
import Layout from "../components/Layout"
import Hero from "./../components/Hero"
import About from "../components/About"

import "./../styles/main.css"
import Timeline from "../components/Timeline"

export default function Home() {
  return (
    <Layout>
      <Hero />
      <About />
      <Timeline />
    </Layout>
  )
}
