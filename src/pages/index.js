import React from "react"
import Layout from "../components/Layout"

import Hero from "../components/Hero"
import About from "../components/About"

import "./../styles/main.css"

export default function Home() {
  return (
    <>
      <Layout>
        <Hero />

        <About />
      </Layout>
    </>
  )
}
