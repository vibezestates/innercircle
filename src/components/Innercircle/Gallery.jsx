import React from 'react'
import SliderImage1 from '../../assets/nearby/nearby1.webp'
import SliderImage2 from '../../assets/nearby/nearby2.webp'
import SliderImage3 from '../../assets/nearby/nearby3.webp'
import ProjectSlider from '../ProjectSilder/ProjectSlider'

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
            id: 3,
            image: SliderImage3,
            title: "",
            content: "",
        },
        {
            id: 3,
            image: SliderImage3,
            title: "",
            content: "",
        }
    ];
    return (<>
        <div className="pt-10">
            <ProjectSlider heading={"Take a glimpse at your Investment units"} cardData={cardData} color={"black"} bgColor={"#FFFCF6"} />
        </div>
    </>);
}

export default Gallery;