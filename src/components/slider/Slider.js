

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import './slider.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { Navigation } from 'swiper/modules';
import { useTranslation } from '../../contexts/TranslationContext'; 
const Slider = () => {
  const { t } = useTranslation(); 

  return (
    <div id='slider' className="slider-section">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 5000 }}
        loop={true}
        navigation={true}
        modules={[Navigation]}
        speed={1000}
      >
        <SwiperSlide>
          <div className="slide" style={{ backgroundImage: 'url(/assets/images/event.jpeg)' }}>
            <div className="text-content">
              <h1>{t('sliderTitle')}</h1> 
              <p>{t('sliderSubtitle')}</p> 
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide" style={{ backgroundImage: 'url(/assets/images/garden.jpg)' }}>
            <div className="text-content">
              <h1>{t('sliderTitle')}</h1> 
              <p>{t('sliderSubtitle')}</p> 
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide" style={{ backgroundImage: 'url(/assets/images/workers.jpg)' }}>
            <div className="text-content">
              <h1>{t('sliderTitle')}</h1> 
              <p>{t('sliderSubtitle')}</p> 
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide" style={{ backgroundImage: 'url(/assets/images/tar.jpg)' }}>
            <div className="text-content">
              <h1>{t('sliderTitle')}</h1> 
              <p>{t('sliderSubtitle')}</p> 
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
