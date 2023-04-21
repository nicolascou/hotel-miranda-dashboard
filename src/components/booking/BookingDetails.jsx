import React from 'react'
import allBookings from '../../data/bookings.json';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useParams } from 'react-router-dom';
import SwiperButtonNext from '../partials/SwiperButtonNext';

import 'swiper/css';
import 'swiper/css/navigation';
import SwiperButtonPrev from '../partials/SwiperButtonPrev';

const BookingDetails = () => {
  const params = useParams();
  const booking = allBookings.find(b => b.id === Number(params.id));
  
  let statusTagClass;
  if (booking.status === 'Check In') {
    statusTagClass = 'booking-details__right__status-tag--green';
  } else if (booking.status === 'Check Out') {
    statusTagClass = 'booking-details__right__status-tag--red';
  } else if (booking.status === 'In Progress') {
    statusTagClass = 'booking-details__right__status-tag--yellow';
  }

  if (!booking) {
    return <h2>This booking does not exist</h2>
  }
  
  return (
    <div className='booking-details'>
      <div className='booking-details__left'>
        <div className='booking-details__row'>
          <div className='booking-details__left__photo'>
            <i className='fa-solid fa-user'></i>
          </div>
          <div className='booking-details__left__main'>
            <h2>{booking.guest}</h2>
            <p>ID {booking.guest_id}</p>
            <div style={{ display: 'flex' }}>
              <button className='booking-details__left__main__phone-btn'>
                <i className='fa-solid fa-phone'></i>
              </button>
              <button className='booking-details__left__main__message-btn'>
                <i className='fa-solid fa-message'></i>
                Send message
              </button>
            </div>
          </div>
        </div>
        <div className='booking-details__row'>
          <div className='booking-details__left__check'>
            <p>Check In</p>
            <p>{booking.check_in}</p>
          </div>
          <div className='booking-details__left__check'>
            <p>Check Out</p>
            <p>{booking.check_out}</p>
          </div>
        </div>
        <div className='booking-details__left__bar'></div>
        <div className='booking-details__row'>
          <div className='booking-details__left__room'>
            <p>Room Info</p>
            <p>{booking.room_type}</p>
          </div>
          <div className='booking-details__left__room'>
            <p>Price</p>
            <p>$145<span> /night</span></p>
          </div>
        </div>
        <p className='booking-details__left__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
        <p className='booking-details__left__facilities'>Facilities</p>
        <div className='booking-details__left__amenities'>
          <div className='booking-details__left__amenities__box'>
            <i className='fa-solid fa-bed'></i>
            <p>3 Bed Space</p>
          </div>
          <div className='booking-details__left__amenities__box'>
            <i className='fa-solid fa-shield-halved'></i>
            <p>24 Hours Guard</p>
          </div>
          <div className='booking-details__left__amenities__box'>
            <i className='fa-solid fa-wifi'></i>
            <p>Free Wifi</p>
          </div>
        </div>
        <div className='booking-details__left__amenities'>
          <div className='booking-details__left__amenities__box booking-details__left__amenities__box--small'>
            <p>2 Bathroom</p>
          </div>
          <div className='booking-details__left__amenities__box booking-details__left__amenities__box--small'>
            <p>Air Conditioner</p>
          </div>
          <div className='booking-details__left__amenities__box booking-details__left__amenities__box--small'>
            <p>Television</p>
          </div>
        </div>
      </div>  
      <div className='booking-details__right'>
        <div className={`booking-details__right__status-tag ${statusTagClass}`}>
          <p>{booking.status}</p>
        </div>
        <Swiper
          loop={true}
          spaceBetween={0}
        >
          <SwiperSlide>
            <div className='booking-details__right__img booking-details__right__img--1'></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='booking-details__right__img booking-details__right__img--2'></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='booking-details__right__img booking-details__right__img--3'></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='booking-details__right__img booking-details__right__img--4'></div>
          </SwiperSlide>
          <SwiperButtonPrev />
          <SwiperButtonNext />
        </Swiper>
        <div className='booking-details__right__text'>
          <h3 className='booking-details__right__text__title'>Bed Room</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet facere earum expedita dolore, fuga nobis debitis sint illo. Nisi recusandae eveniet dolor adipisci quod sapiente accusantium sunt fugit ipsum molestias?</p>
        </div>
      </div>
    </div>
  )
}

export default BookingDetails