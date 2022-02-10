import React, { useRef } from "react"
import Footer from "./Footer"
import Header from "./Header"
import Scene from "./Scene"

import { LocomotiveScrollProvider } from "react-locomotive-scroll"

export default function Layout({ children }) {
  const containerRef = useRef()
  return (
    <>
      <LocomotiveScrollProvider
        options={{
          smooth: true,
          direction: "vertical",
          // ... all available Locomotive Scroll instance options
        }}
        containerRef={containerRef}
      >
        <Header />
        <Scene />
        <main data-scroll-container ref={containerRef} className="main">
          {children}
        </main>
      </LocomotiveScrollProvider>
    </>
  )
}
