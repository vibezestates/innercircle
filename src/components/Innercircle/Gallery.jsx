import React, { useState} from 'react'
import SliderImage1 from '../../images/gallery/gl1.webp'
import SliderImage2 from '../../images/gallery/gl2.webp'
import SliderImage3 from '../../images/gallery/gl3.webp'
import SliderImage4 from '../../images/gallery/gl4.webp'
import SliderImage5 from '../../images/gallery/gl5.webp'
import ProjectSlider from '../ProjectSilder/ProjectSlider'
import Buttons from './Buttons'

function Gallery() {
    const cardData = [
        {
            id: 1,
            image: SliderImage1,
            title: "",
            content: "",
        },
        {
            id: 2,
            image: SliderImage2,
            title: "",
            content: "",
        },
        {
            id: 3,
            image: SliderImage3,
            title: "",
            content: "",
        },
        {
            id: 4,
            image: SliderImage4,
            title: "",
            content: "",
        },
        {
            id: 5,
            image: SliderImage5,
            title: "",
            content: "",
        }
    ];

    return (<>
        <div className="pt-10" id='Gallery'>
            <ProjectSlider heading={"Take a glimpse at your Investment units"} cardData={cardData} color={"black"} bgColor={"#FFFCF6"} />
            <Buttons  buttonText={"Book A Visit"} showPhoneButton={true} />
        </div>
    </>);
}

export default Gallery;