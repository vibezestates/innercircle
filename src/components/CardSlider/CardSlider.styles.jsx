import styled from 'styled-components';
import Slider from 'react-slick';

export const SliderWrapper = styled.div`
  width: 100%;

  overflow: hidden;
  position: relative;
`;

export const Container = styled.div`
  width: 100%;
  margin: 0;
  padding: 0;
`;

export const StyledSlider = styled(Slider)`
  .slick-list {
    overflow: hidden;
  }
  
  .slick-slide {
    transition: none;
  }
  
  .slick-slide > div {
    display: flex;
    justify-content: center;
  }
  
  .slick-arrow {
    display: none !important;
  }

`;

export const ArrowsContainer = styled.div`
  position: absolute;
  top: 42%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 57%;
  display: flex;
  justify-content: space-between;
  pointer-events: none;
  z-index: 100;
  padding: 0 20px;
  
  @media (max-width: 768px) {
    max-width: 80%;
  }
`;

export const ArrowButton = styled.button`
  width: 62px;
  height: 62px;
  border-radius: 50%;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: all;

`;