import './footer.css';
import React from "react";
import { Link, useLocation } from 'react-router-dom';
import Connect from '../Connect/Connect';
import {
  Container,
  Logo,
  LineBreak,
  Mail,
  Address,
  FooterItem,
  SocialIcon
} from './footer.style';
import MainLogo from "/src/assets/footer/logo2.png";
import Youtube from '/src/assets/footer/youtube.png'
import Instagram from '/src/assets/footer/instagram.png'
import Twitter from '/src/assets/footer/twitter.png'
import Facebook from '/src/assets/footer/facebook.png'
import Field from '/src/assets/home/openfield.webp'

const Footer = () => {
  
  const { pathname } = useLocation();

  return (
    <>
     
      {pathname==="/revenue" && <Connect content={"Experience the Vibez difference. Click the button below to book a demo and learn more about our offerings."} heading={"Book a Demo"} btnText={"Book a Demo now"} bg={Field} color={"white"}/>}
      <Container className="text-black px-4 mt-auto">
        <div className="container mx-auto px-4 py-4 flex justify-between">
          {/* LeftTop: Logo */}
          <Link to="/" className="text-2xl font-bold text-blue-600">
            <Logo src={MainLogo} alt="Logo" />
          </Link>

          {/* RightTop: Contact Us Button */}
          <div className="md:block text-black px-5 py-2 transition text-left font-poppins">
            <p className="mb-5">
              +91 8152 88 33 88
            </p>
            <Link to="/contact">
              <Mail>
                info@vibezclub.com
              </Mail>
            </Link>
          </div>
        </div>
        <LineBreak />

        <div className="address">
          <div className="sm:text-center md:text-left flex flex-col">
            <Address className="font-poppins text-left text-xs">
              #200, 4th floor, 10th cross, CBI Main Road, <br />
              Ganganagar, Bangalore – 560032.
            </Address>
            <div className="flex flex-row mt-5">
              <Link
                to="https://www.youtube.com/channel/UCvjK6y-8a2MUEx_4Hqarjww"
              >
                <SocialIcon src={Youtube} alt="Youtube"></SocialIcon>
              </Link>
              <Link
                to="https://www.instagram.com/vibezestates/"
              >
                <SocialIcon src={Instagram} alt="Insta"></SocialIcon>
              </Link>
              <Link
                to="https://x.com/i/flow/login?redirect_after_login=%2Fvibez_coffee"
              >
                <SocialIcon src={Twitter} alt="X"></SocialIcon>
              </Link>
              <Link
                to="https://www.facebook.com/VibezEstates/"
              >
                <SocialIcon src={Facebook} alt="Facebook"></SocialIcon>
              </Link>
            </div>
          </div>
          <div className="othersCont py-5 flex flex-row">
            <div className="md:mx-[40px] flex flex-col font-inter text-left text-sm">
              <FooterItem to="/about">About us</FooterItem>
              <FooterItem to="/farmland">Managed Farmlands</FooterItem>
              <FooterItem to="/villa">Luxury Villas</FooterItem>
              <FooterItem to="/revenue">Revenue Generation</FooterItem>
              <FooterItem to="/contact">Contact Us</FooterItem>
            </div>
            <div className="mx-2 flex flex-col font-inter text-left text-sm">
              <FooterItem to="/">Privacy Policy</FooterItem>
              <FooterItem to="/">Terms and Conditions</FooterItem>
              <FooterItem to="/">Disclaimer</FooterItem>
            </div>
          </div>
        </div>
      </Container >
    </>
  );
};

export default Footer;
