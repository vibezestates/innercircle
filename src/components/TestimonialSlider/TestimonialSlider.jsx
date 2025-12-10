import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import {
  SliderWrapper,
  Container,
  StyledSlider,
  ArrowsContainer,
  ArrowButtonRight,
  ArrowButtonLeft,
} from "./TestimonialSlider.styles";
import RoudLeftArrow from "../../assets/sliderglobal/black-right-arrow.png";
import RoudrightArrow from "../../assets/sliderglobal/black-right-arrow.png";
import testinBorderImg from "../../assets/bgVector/testi-border.png";

export default function TestimonialSlider({ cardData, sliderTitle }) {
  const sliderRef = React.useRef(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const settings = {
    className: "testimonial",
    infinite: true,
    slidesToShow: windowWidth >= 1024 ? 4 : windowWidth >= 768 ? 2 : 1,
    slidesToScroll: 1,
    speed: 300,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 280,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const goToPrev = () => {
    sliderRef.current?.slickPrev();
  };

  const goToNext = () => {
    sliderRef.current?.slickNext();
  };

  const SliderCardItem = ({ title, content }) => {
    return (
      <div className="testimonial-card">
        <p>{content}</p>
        <h6>{title}</h6>
      </div>
    );
  };

  return (
    <SliderWrapper>
      <Container>
        <h6 className="sectio-title1">{sliderTitle}</h6>
        <StyledSlider ref={sliderRef} {...settings}>
          {cardData.map((card) => (
            <SliderCardItem
              key={card.id}
              title={card.title}
              content={card.content}
            />
          ))}
        </StyledSlider>

        <ArrowsContainer>
          <ArrowButtonLeft direction="left" onClick={goToPrev}>
            <img className="left-arrow" src={RoudLeftArrow} alt="rightarror" />
          </ArrowButtonLeft>
          <ArrowButtonRight direction="right" onClick={goToNext}>
            <img src={RoudrightArrow} alt="rightarror" />{" "}
          </ArrowButtonRight>
        </ArrowsContainer>
      </Container>
    </SliderWrapper>
  );
}
