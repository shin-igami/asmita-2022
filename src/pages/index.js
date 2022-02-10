import React from "react"
<<<<<<< Updated upstream
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
=======
import Footer from "../components/footer/Footer"
import Header from "../components/header/Header"
import Hero from "../components/hero/Hero"
import About from "../components/about/About"
import Events from "../components/events/Events"
import Contact from "../components/contact/Contact"

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Events />
      <Contact/>
      <Footer />
    </div>
>>>>>>> Stashed changes
  )
}
