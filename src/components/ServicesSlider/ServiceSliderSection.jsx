import React from "react";
import styled from "styled-components";
import ServicesSlider from "./ServicesSlider";
import servicebanneImg from '../../assets/villa/manageformland.webp'
import { Wrapper, WrapperDiv, SliderWrapperDiv,Title } from './ServicesSlider.styles'

function ServiceSliderSection({sliderData, title}) {
    return (
        <Wrapper>
            <WrapperDiv>
                <div>
                    <img
                        src={servicebanneImg}
                        alt="Example"
                        className=""
                    />
                </div>
                <SliderWrapperDiv>
                    <Title > {title}</Title>
                    <ServicesSlider cardData={sliderData} />
                </SliderWrapperDiv>
            </WrapperDiv>
        </Wrapper>
    );
}

export default ServiceSliderSection;