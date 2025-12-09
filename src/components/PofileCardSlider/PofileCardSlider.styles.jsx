import styled from 'styled-components';
import Slider from 'react-slick';


export const SliderWrapper = styled.div`
  width: 100%;
  padding: 0 60px 40px 80px;
  overflow: hidden;
  position: relative;
  display: flex;
    align-items: center;
    justify-content: center;

    @media (width <=786px) {
    padding: 0 16px 40px 16px;
    }
    .slick-slide > div {
    display: flex;
    padding-top: 50px;
    justify-content: center;
  }

    .slick-slider {
    .slick-list {
      .slick-track {
      display: flex;
    align-items: center;
    justify-content: center;
      }
}
      .slick-slide.slick-active {
    max-width: 32%;
}
        width: inherit;
        .slick-dots {
            bottom:12px !important;
            transform: translate(50%);
                width: 50% !important;
        }
                .slick-list {
                    padding-bottom: 95px;
                }
            .slick-prev {
                top: unset !important;
                bottom: -14px;
                left: unset;
                
            }
             .slick-next {
                top: unset !important;
                bottom: -14px;
                left: unset;
                right: 0 !important;
            }
    }
`;

export const ArrowButtonLeft = styled.button`
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
  position:absolute;
    bottom: 0;
    left: 55px;
`;
export const ArrowButtonRight = styled.button`
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
position: absolute;
bottom: -9px;
    right: 59px;
    z-index: 99;

`;