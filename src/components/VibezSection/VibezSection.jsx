import React from 'react'
import CardTwo from '../Card/CardTwo';
import { VibezHeader, VibezSectionContainer, Vibezcard } from './vibez.style';
import Img1 from '/src/assets/home/personalservice.png';
import Img2 from '/src/assets/home/unmatchexp.png';
import Img3 from '/src/assets/home/trackrec.png';
import Img4 from '/src/assets/home/suspractice.png';
import Img5 from '/src/assets/home/approach.png';
import Img6 from '/src/assets/home/innovation.png';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import { motion } from 'framer-motion';
import {
    slideFromLeft
} from '../../helpers/animationhelper';

export default function VibezSection() {

    const [ref, isInView] = useScrollAnimation();
    const MotionCard = motion(CardTwo);

    return (
        <>
            <VibezSectionContainer ref={ref}>
                <motion.div
                    variants={slideFromLeft()}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    <VibezHeader className='font-maharlika'
                    >Why choose Vibez Estates?</VibezHeader>
                </motion.div>
                <div className='flex flex-col w-full'>
                    <Vibezcard className='flex flex-row items-baseline justify-center'>
                        <MotionCard
                            variants={slideFromLeft()}
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                            imgSrc={Img1} title="Personalized Service" description="We understand that every investor has unique needs. Our team ensures your investment aligns perfectly with your goals." />
                        <CardTwo imgSrc={Img2} title="Unmatched Experience" description="With years of experience in the real estates market, our team will ensure you make informed decisions and maximize your returns." />
                        <CardTwo imgSrc={Img3} title="Proven Track Record" description="We have a well-established reputation for success, with a proven track record of delivering exceptional results for our clients." />
                    </Vibezcard>
                    <Vibezcard className='flex flex-row  items-baseline justify-center'>
                        <CardTwo imgSrc={Img4} title="Sustainable Practices" description="We are committed to responsible development practices that minimize environmental impact and promote a greener future." />
                        <CardTwo imgSrc={Img5} title="Holistic Approach" description="We don't just sell properties; we manage them too. Our approach takes care of day-to-day operations and revenue generation." />
                        <CardTwo imgSrc={Img6} title="Innovation & Transparency" description="We are constantly seeking innovative strategies and belief in transparency, always keeping you informed." />
                    </Vibezcard>
                </div>
            </VibezSectionContainer>
        </>
    )
}
