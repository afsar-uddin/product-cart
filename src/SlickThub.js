import React, { useState, useEffect } from 'react';
import './App.css';

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const SlickThub = () => {
    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    const [slider1, setSlider1] = useState(null);
    const [slider2, setSlider2] = useState(null);

    useEffect(() => {
        setNav1(slider1);
        setNav2(slider2);
    });
    const settingsMain = {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav',
        autoplay: false
    };

    const settingsThumbs = {
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        centerMode: true,
        swipeToSlide: true,
        focusOnSelect: true,
        centerPadding: '0',
        autoplay: false
    };
    const slidesData = [
        {
            id: 1,
            cover: "https://github.com/afsar-uddin/githubPhotos/blob/main/products-image/1.png?raw=true"
        }, {
            id: 2,
            cover: "https://github.com/afsar-uddin/githubPhotos/blob/main/products-image/2.png?raw=true"
        }, {
            id: 3,
            cover: "https://github.com/afsar-uddin/githubPhotos/blob/main/products-image/3.png?raw=true"
        }, {
            id: 4,
            cover: "https://github.com/afsar-uddin/githubPhotos/blob/main/products-image/4.png?raw=true"
        }
    ];

    return (
        <div className="slider-wrapper">
            <Slider
                {...settingsMain}
                asNavFor={nav2}
                ref={slider => (setSlider1(slider))}
            >

                {slidesData.map((slide) =>

                    <div className="slick-slide" key={slide.id}>
                        <img className="slick-slide-image" src={slide.cover} />
                    </div>

                )}

            </Slider>
            <div className="thumbnail-slider-wrap thumbnail">
                <Slider
                    {...settingsThumbs}
                    asNavFor={nav1}
                    ref={slider => (setSlider2(slider))}>

                    {slidesData.map((slide) =>

                        <div className="slick-slide" key={slide.id}>
                            <img className="slick-slide-image" src={slide.cover} />
                        </div>

                    )}

                </Slider>
            </div>
        </div>
    );
};

export default SlickThub;