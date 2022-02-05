import React from "react"
import Layout from "../components/Layout"

export default function Contact() {
  return (
    <Layout>
      <section className="contact">
        <div className="contact__message">
          <p>
            For any further queries drop a Message, or reach out to us below!
          </p>

          <span>hey@h4i.tech</span>
        </div>
        <div className="contact__form">
          <h1>Leave a Message</h1>
          <form>
            <div class="form__input">
              <input type="text" id="name" placeholder="Name"></input>
              <input type="email" id="email" placeholder="Email"></input>
            </div>
            <textarea placeholder="Message" rows={6} id="message"></textarea>
            <button type="submit" id="submit">
              SEND
            </button>
          </form>
        </div>
      </section>
    </Layout>
  )
}
