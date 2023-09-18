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

    const imagesStyle = {
        width: "327px",
        height: "327px",
        objectFit: "cover"
    }

    return (
        <>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                slidesPerView={'auto'}
                onSlideChange={handleSlideChange}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide>
                    <Image
                        src="/auth-images/Mountain.png"
                        alt="Mountain Picture"
                        width="0"
                        height="0"
                        sizes="100vw"
                        style={{ width: '35.3132dvh', height: 'auto' }}
                    />
                    <h2>Узнайте больше об экологии Екатеринбурга</h2>
                    <p>Ежедневное обновление информации о состоянии экологии Екатеринбурга и модерироваие каждого отзыва
                        и
                        поступающего сигнала</p>
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src="/auth-images/recycling.png"
                        alt="Mountain Picture"
                        width="0"
                        height="0"
                        sizes="100vw"
                        style={{ width: '35.3132dvh', height: 'auto' }}
                    />
                    <h2>Будьте экологичными
                        и ответственными </h2>
                    <p>Возможность каждому стать эко-героем Екатеринбурга, делая его чище и лучше
                        с помощью социальных и экологических сервисов</p>
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src="/auth-images/Finance.png"
                        alt="Mountain Picture"
                        width="0"
                        height="0"
                        sizes="100vw"
                        style={{ width: '35.3132dvh', height: 'auto' }}
                    />

                    <h2>Зарабатывайте «Eco-Баллы»</h2>
                    <p>Поощрение вашего труда вместе со СберБанком бонусами «Спасибо»</p>
                </SwiperSlide>
            </Swiper>
            <SlideIndicator activeIndex={activeSlide} totalSlides={3}/>
            <div className="mobile-wrapper">
                <button className={`${activeSlide + 1 === 3 ? 'active' : ''}`}
                        onClick={() => setView('Features')}> Далее
                </button>
            </div>
        </>

    );
};

export default SliderSwiper;