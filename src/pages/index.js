import React from "react"
import Footer from "../components/footer/Footer"
import Header from "../components/header/Header"
import Hero from "../components/hero/Hero"
import About from "../components/about/About"
import Events from "../components/events/Events"

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Events />
      <Footer />
    </div>
  )
}
