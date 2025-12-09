import './section.css'
import BG1 from '/src/assets/bgVector/leavesleft.png';
import BG2 from '/src/assets/bgVector/leavesright.png';
import BG3 from '/src/assets/bgVector/arrowdown.png';
import { motion } from 'framer-motion'
import React from 'react'
import {
    slideFromLeft,
    slideFromRight,
} from '../../helpers/animationhelper';
import useScrollAnimation from '../../hooks/useScrollAnimation';

export default function Section1() {
    const [ref, isInView] = useScrollAnimation();
    return (
        <>
            <div ref={ref} className='section-container pt-[60px] vector-leaf-left-right' >
                <p className='font-maharlika section__heading'>Our vision. Your dream.
                    <br />A perfect blend.</p>
                <p className='font-barlow section__content' >
                    <motion.p className='text-[#6D3518] font-bold'
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        variants={slideFromLeft()}>
                        Transforming landscapes and lives through exceptional real estates ventures
                    </motion.p>
                    <br />
                    <motion.p
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        variants={slideFromRight()}>
                        Vibez Estates is more than just a real estates company. We're a team based in Karnataka with a vision to transform landscapes and lives through exceptional real estates ventures across the city.

                        <br />
                        <br />
                        From our origins in managed farmlands to a diverse portfolio that now includes exquisite villas and serene resorts, we connect individuals with luxury, sustainability, and nature.
                    </motion.p>
                </p>
                <motion.p className='font-maharlika mt-8 section__heading' 
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        variants={slideFromLeft()} >
                            <img src={BG3} />
                            
                </motion.p>
                <motion.p className='font-maharlika mt-8 section__heading' 
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        variants={slideFromLeft()} >
                    Welcome to Vibez Estates
                </motion.p>
            </div>
        </>
    )
}
