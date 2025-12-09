import React from 'react'
import Banner from "../components/FullSlider/Banner";
import ChooseVibez from '../components/ChooseVibez/ChooseVibez';
import AboutSection from '../components/ChooseVibez/AboutSection';
import CardOne from '../components/Card/CardOne';
import JoinVebz from '../assets/home/JoinVebz.jpg';
import bannerImg from "../assets/home/contactBackground.webp"
export default function RevenueDetail() {
  return (
    <>
      <Banner
        image={bannerImg}
        title="Earn higher returns with Vibez"
        content="Discover how Vibez Estates turns luxury living into a profitable venture with strategic revenue generation."
        button=""
      />
      <ChooseVibez />
      <AboutSection />
      
      <CardOne rev={false}
        bgColor={"#DDD7CB"}
        isFullBg={true}
        bgColor2={"#7B492E"}
        bgColorFullBg={"#E7E2DA"}
        img1={JoinVebz}
        img2={''}
        heading={"Join Vibez today and start earning higher returns"}
        description={`Ready to invest in a secure and profitable future? Become a part of Vibez and own your share of the fastest-growing company. Discover the benefits of investing with us and start earning higher returns today.`}
        color={"#F2EFEC"}
      />

    </>
  );
}
