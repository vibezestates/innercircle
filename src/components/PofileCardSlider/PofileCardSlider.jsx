import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import ProfileCard from "../ProfileCard/ProfileCard";
import shubhaImg from "../../assets/profile/shubha.webp";
import ashwinImg from "../../assets/profile/aswin.webp";
import udayImg from "../../assets/profile/uaday.webp";
import {
  SliderWrapper,
  ArrowButtonRight,
  ArrowButtonLeft,
} from "./PofileCardSlider.styles";
import RoudLeftArrow from "../../assets/sliderglobal/rounded-left-arrow.png";
import RoudrightArrow from "../../assets/sliderglobal/rounded-right-arrow.png";
import TitleWithImage from "../TitleWithImage/TitleWithImage";
import titleFlower from "../../assets/bgVector/mindTitle.png";

const profileData = [
  {
    id: 1,
    title: "Mrs. Shubha Vinay",
    subtitle: "Director",
    content: "",
    image: shubhaImg,
  },
  {
    id: 2,
    title: "Mr. Ashwin Kumar",
    subtitle: "CEO",
    content: "",
    image: ashwinImg,
  } 
];

function PofileCardSlider() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function NextArrow({ onClick }) {
    return (
      <ArrowButtonLeft onClick={onClick}>
        <img src={RoudLeftArrow} alt="left arrow" />
      </ArrowButtonLeft>
    );
  }

  function PrevArrow({ onClick }) {
    return (
      <ArrowButtonRight onClick={onClick}>
        <img src={RoudrightArrow} alt="right arrow" />
      </ArrowButtonRight>
    );
  }

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow:
      windowWidth >= 1024
        ? 2
        : windowWidth >= 768
        ? 2 
        : 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024, // below 1024px
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600, // below 600px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="pt-[60px]">
      <TitleWithImage title="Minds Behind the Mission" image={titleFlower} />
      <SliderWrapper key={windowWidth}>
        {/* 👇 Key ensures re-render on resize */}
        <Slider {...settings}>
          {profileData.map((card) => (
            <ProfileCard
              key={card.id}
              image={card.image}
              title={card.title}
              subTitle={card.subtitle}
              content={card.content}
            />
          ))}
        </Slider>
      </SliderWrapper>
    </div>
  );
}

export default PofileCardSlider;
