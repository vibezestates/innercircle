import React from "react";
import { BannerDiv, BannerContentWrapper, BannerTitle, BannerContent, BannerButton } from "./Banner.style";

function Banner({ image, title, button, content, bgEffect=false, buttonClick }) {

  return (
    <>
      <BannerDiv $bgImage={image} $effect={bgEffect}>
        <BannerContentWrapper>
          <BannerTitle>{title}</BannerTitle>
          <BannerContent>{content}</BannerContent>
          {button && <BannerButton onClick={buttonClick}>{button}</BannerButton>}
        </BannerContentWrapper>
      </BannerDiv>
    </>
  );
}

export default Banner;
