import React from "react";
import {
  SectionWrapper,
  ContentWrapper,
  ImageWrapper,
  InfoWrapper,
  InfoItem,
  Icon,
  Title,
  Description,
  Divider,
} from "./AboutSection.style";

import revenueDiscussion from "../../assets/villa/Villa3.png";
import ChooseVibez6 from "../../assets/home/ChooseVibez6.png";
import ChooseVibez7 from "../../assets/home/ChooseVibez7.png";
import ChooseVibez8 from "../../assets/home/ChooseVibez8.png";
import ChooseVibez9 from "../../assets/home/ChooseVibez9.png";
import ChooseVibez10 from "../../assets/home/ChooseVibez10.png";

const data = [
  { icon: ChooseVibez6, title: "Reliable Company", desc: "Partner with a company renowned for stability and trust." },
  { icon: ChooseVibez7, title: "Diversified Investments", desc: "Spread your investments across a variety of high-performing asset classes." },
  { icon: ChooseVibez8, title: "Community of Investors", desc: "Join a growing network of over 1100 satisfied customers." },
  { icon: ChooseVibez9, title: "Experienced Management", desc: "Benefit from the guidance of our highly experienced team." },
  { icon: ChooseVibez10, title: "Consistent Returns", desc: "Enjoy higher returns with a proven IRR of 18% on successful exits." },
];

const AboutSection = () => {
  return (
    <SectionWrapper>
      <ContentWrapper>
        <ImageWrapper>
          <img src={revenueDiscussion} alt="Revenue Discussion" />
        </ImageWrapper>

        <InfoWrapper>
          {data.map((item, index) => (
            <React.Fragment key={index}>
              <InfoItem>
                <Icon src={item.icon} alt={item.title} />
                <div>
                  <Title>{item.title}</Title>
                  <Description>{item.desc}</Description>
                </div>
              </InfoItem>
              {index < data.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </InfoWrapper>
      </ContentWrapper>
    </SectionWrapper>
  );
};

export default AboutSection;
