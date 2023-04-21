import React from 'react'
import { useSwiper } from 'swiper/react';

const SwiperButtonPrev = () => {
  const swiper = useSwiper();
  
  return (
    <button className='booking-details__right__btn booking-details__right__btn-prev' 
      onClick={() => swiper.slidePrev()}
    >
      <i className='fa-solid fa-arrow-left'></i>
    </button>
  )
}

export default SwiperButtonPrev