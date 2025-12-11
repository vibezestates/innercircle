import React, { useState, useEffect}  from 'react';
import Slider from 'react-slick';

import SliderCardItem from '../SliderCardItem/SliderCardItem';
import {
  SliderWrapper,
  Container,
  StyledSlider,
  ArrowsContainer,
  ArrowButton
} from './CardSlider.styles';
import RoudLeftArrow from '../../assets/sliderglobal/rounded-left-arrow.png';
import RoudrightArrow from '../../assets/sliderglobal/rounded-right-arrow.png';

export default function Conatct(props) {
  const sliderRef = React.useRef(null);
      const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    
      useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
      }, []);

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "20%",
    slidesToShow:  windowWidth >= 1024 ? 4 : windowWidth >= 768 ? 2 : 1,
    speed: 500,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          centerPadding: "20%",
        }
      },
      {
        breakpoint: 768,
        settings: {
          centerPadding: "15%",
        }
      },
      {
        breakpoint: 480,
        settings: {
          centerPadding: "5%",
        }
      }
    ]
  };

  const goToPrev = () => {
    sliderRef.current?.slickPrev();
  };

  const goToNext = () => {
    sliderRef.current?.slickNext();
  };

  return (
    <SliderWrapper style={{ 'background': props.bgColor }}>
      <Container>
        <StyledSlider ref={sliderRef} {...settings}>
          {props.cardData.map((card) => (
            <SliderCardItem key={card.id} image={card?.image} title={card.title} content={card.content} blur={props.blur}/>
          ))}
        </StyledSlider>

        <ArrowsContainer>
          <ArrowButton direction="left" onClick={goToPrev} ><img src={RoudLeftArrow} alt="rightarror" /></ArrowButton>
          <ArrowButton direction="right" onClick={goToNext} ><img src={RoudrightArrow} alt="rightarror" /> </ArrowButton>
        </ArrowsContainer>
      </Container>
    </SliderWrapper>
  );
}