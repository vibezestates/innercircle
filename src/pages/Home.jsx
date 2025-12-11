import React from "react";
import FullSlider from "../components/FullSlider/FullSlider";
import CardOne from '../components/Card/CardOne';
import Section1 from '../components/Section/Section1';
import CherryImg from '../assets/cards/cherry.webp';
import Vector1Img from '/src/assets/cards/vector1.webp';
import RoomImg from '/src/assets/cards/room.webp';
import LuxuryImg from '/src/assets/cards/luxury.webp';
import ChessImg from '/src/assets/cards/chess.webp';
import VectorImg from '/src/assets/cards/vector.webp';
import Scenery from '/src/assets/section2/scenery.jpg';
import Flower from '/src/assets/section2/flower.png';
import Tombsection from "../components/CommonSection/Tombsection";
import VibezSection from "../components/VibezSection/VibezSection";
import BG from '/src/assets/bgVector/lines.png';
import Banner from "../components/Innercircle/Banner";
import TrustBadge from "../components/Innercircle/TrustBadge";
import InfoSection from "../components/Innercircle/InfoSection";
import Choose from "../components/Innercircle/Chhose";
import PreLaunch from "../components/Innercircle/PreLaunch";
import InvestmentZone from "../components/Innercircle/InvestmentZone";
import Comparison from "../components/Innercircle/Comparison";
import WesternGhatsDestination from "../components/Innercircle/WesternGhatsDestination";
import Map from "../components/Innercircle/Map";
import Gallery from "../components/Innercircle/Gallery";
import Record from "../components/Innercircle/Record";
import TrustBadge1 from "../components/Innercircle/TrustBadge1";
import Faq from "../components/Innercircle/Faq";
import Review from "../components/Innercircle/Review";
import Life from "../components/Innercircle/Life";
import FormSection from "../components/Innercircle/FormSection";
import StickyButtons from "../components/Innercircle/StickyButtons";
import { Form } from "react-router-dom";


const Home = () => {
  return (
    <>
      {/* <ContactForm  /> */}
      <div id="Opportunity">
        <Banner />
      </div>
      
      <TrustBadge />
      <InfoSection />
      <Choose />
      <PreLaunch />
      <InvestmentZone />
      <Comparison />
      <WesternGhatsDestination />
      <Map />
      <Gallery />
      <Record />
      <TrustBadge1 />
      <Faq />
      <Review />
      <Life />
      <FormSection />
      <StickyButtons />
    </>
  );
};

export default Home;
