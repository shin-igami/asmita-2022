import React from "react"
import './footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../utils/font-awesome';
import logo from '../../utils/logo.png'
import { BsTwitter,BsInstagram } from "react-icons/bs";
import { FaFacebookF} from "react-icons/fa";
export default function Footer() {
  return <footer className="footer">
    <div className="footer-content">
      <img src={logo} alt="hh"/>
      <ul className="socials">
        <li><a href="#"><BsTwitter/></a></li>
        <li><a href="#"><BsInstagram/></a></li>
        <li><a href="#"><FaFacebookF/></a></li>
      </ul>
      <div>
        <p>copyright &copy; Asmita </p>
    
    </div>
    </div>
  </footer>
}
