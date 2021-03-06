import React from "react";
import { Link } from "react-router-dom";
import facebookIcon from "../assets/icon_facebook.svg";
import twitterIcon from "../assets/icon_twitter.svg";
import mailIcon from "../assets/icon_mail.svg";
import instagramIcon from "../assets/icon_instagram.svg";
import twitchIcon from "../assets/icon_twitch.svg";
import logo from "../assets/bcr_logo.png";
import Searchcontainer from "../components/Searchcontainer";

function Footer() {
  return (
    <div className=" font-helvetica">
      <div className="flex md:flex-row flex-col text-xs md:text-sm  items-center justify-center sm:justify-around md:py-24 ">
        <div className="address sm:pt-0 flex sm:items-center sm:justify-center flex-col md:text-left text-center py-6 sm:py-0">
          <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
          <p>binarcarrental@gmail.com</p>
          <p>081-233-334-808</p>
        </div>
        <div className="footer-nav py-6 sm:py-0 flex items-center sm:items-start justify-center flex-col">
          <Link to="/service">
            <p className="my-2">Our Services</p>
          </Link>
          <Link to="/whyus">
            <p className="my-2">Why Us</p>
          </Link>
          <Link to="/testimonial">
            <p className="my-2">Testimonial</p>
          </Link>
          <Link to="/faq">
            <p className="my-2">FAQ</p>
          </Link>
        </div>
        <div className="footer-social flex items-center sm:items-start justify-center flex-col py-6 sm:py-0">
          <p className="mb-3">Connect With Us</p>
          <div className="social-logo-container flex items-center justifty-center">
            <img className="mx-1" src={facebookIcon} alt="" />
            <img className="mx-1" src={instagramIcon} alt="" />
            <img className="mx-1" src={twitterIcon} alt="" />
            <img className="mx-1" src={mailIcon} alt="" />
            <img className="mx-1" src={twitchIcon} alt="" />
          </div>
        </div>
        <div className="copyright flex items-center sm:items-start justify-center flex-col">
          <p className="mb-3">Copyright Binar 2022</p>
          <img src={logo} width="100" height="34" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
