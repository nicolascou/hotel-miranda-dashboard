import React from 'react'
import { useSwiper } from 'swiper/react';

const SwiperButtonNext = () => {
  const swiper = useSwiper();
  
  return (
    <button className='details__right__btn details__right__btn-next' 
      onClick={() => swiper.slideNext()}
    >
      <i className='fa-solid fa-arrow-right'></i>
    </button>
  )
}

export default SwiperButtonNext