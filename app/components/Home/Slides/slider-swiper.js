import React, {useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination, Scrollbar, A11y} from 'swiper/modules';
// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import SlideIndicator from "@/app/components/SlideIndicator";
import Image from "next/image";

const SliderSwiper = ({setView}) => {
    const [activeSlide, setActiveSlide] = useState(0);

    const handleSlideChange = (swiper) => {
        setActiveSlide(swiper.activeIndex);
    };

    return (
        <>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                slidesPerView={'auto'}
                spaceBetween="8px"
                onSlideChange={handleSlideChange}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide>
                    <b>Не мусор, а ценное вторсырье</b>
                    <p>Сдавайте ваш мусор в пункты приёма и получайте очки рейтинга</p>
                </SwiperSlide>
                <SwiperSlide>
                    <b>Не мусор, а ценное вторсырье</b>
                    <p>Сдавайте ваш мусор в пункты приёма и получайте очки рейтинга</p>
                </SwiperSlide>
                <SwiperSlide>
                    <b>Не мусор, а ценное вторсырье</b>
                    <p>Сдавайте ваш мусор в пункты приёма и получайте очки рейтинга</p>
                </SwiperSlide>

            </Swiper>
            <SlideIndicator activeIndex={activeSlide} totalSlides={3}/>
        </>

    );
};

export default SliderSwiper;