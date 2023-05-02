import React, { useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link, useParams } from 'react-router-dom';
import SwiperButtonNext from '../partials/SwiperButtonNext';
import 'swiper/css';
import 'swiper/css/navigation';
import SwiperButtonPrev from '../partials/SwiperButtonPrev';
import { useDispatch, useSelector } from 'react-redux';
import { getRoom } from '../../features/rooms/roomThunks';
import Loading from '../partials/Loading';

const RoomDetails = () => {
  const params = useParams();
  const { data, status } = useSelector(state => state.room);
  const room = data.roomList.find(({ id }) => id === Number(params.id));

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRoom(Number(params.id)));
    // eslint-disable-next-line
  }, [])

  const statusTagClassMap = {
    'Available': 'details__right__status-tag--green',
    'Booked': 'details__right__status-tag--red'
  };

  if (!room) {
    return (
      <>
        { status === 'pending' ? <Loading /> : <h2>This room does not exist</h2> }
      </>
    )
  }

  return (
    <div className='details'>
      <div className='details__left'>
        <div className='details__row'>
          <div className='details__left__photo'>
            <i className='fa-solid fa-bed'></i>
          </div>
          <div className='details__left__main'>
            <h2>{room.name}</h2>
            <p className='details__left__main__id'>ID #{room.id.toString().padStart(2, '0')}</p>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <button className='details__left__main__phone-btn'>
                <Link to={`/rooms/update/${room.id}`}>
                  <i className='fa-solid fa-edit'></i>
                </Link>
              </button>
              <p className='rooms__big-text'>{room.bed_type}</p>
            </div>
          </div>
        </div>
        <div className='details__row'>
          <div className='details__left__room'>
            <p>Price</p>
            <p>${room.rate}<span> /night</span></p>
          </div>
          <div className='details__left__room'>
            <p>Offer</p>
            <p>${room.offer || Math.floor(room.rate / 1.5)}<span> /night</span></p>
          </div>
        </div>
        <div className='details__left__bar'></div>
          <p style={{ margin: '50px 0' }} className='details__left__text'>
            { room.description || 
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'}
          </p>
          <p className='details__left__facilities'>Facilities</p>
          <div className='details__left__amenities'>
            <div className='details__left__amenities__box'>
              <i className='fa-solid fa-bed'></i>
              <p>3 Bed Space</p>
            </div>
            <div className='details__left__amenities__box'>
              <i className='fa-solid fa-shield-halved'></i>
              <p>24 Hours Guard</p>
            </div>
            <div className='details__left__amenities__box'>
              <i className='fa-solid fa-wifi'></i>
              <p>Free Wifi</p>
            </div>
          </div>
          <div className='details__left__amenities'>
            <div className='details__left__amenities__box details__left__amenities__box--small'>
              <p>2 Bathroom</p>
            </div>
            <div className='details__left__amenities__box details__left__amenities__box--small'>
              <p>Air Conditioner</p>
            </div>
            <div className='details__left__amenities__box details__left__amenities__box--small'>
              <p>Television</p>
            </div>
          </div>
      </div>  
      <div className='details__right'>
        <div className={`details__right__status-tag ${statusTagClassMap[room.status]}`}>
          <p>{room.status}</p>
        </div>
        <Swiper
          loop={true}
          spaceBetween={0}
        >
          <SwiperSlide>
            <div className='details__right__img details__right__img--1'></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='details__right__img details__right__img--2'></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='details__right__img details__right__img--3'></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='details__right__img details__right__img--4'></div>
          </SwiperSlide>
          <SwiperButtonPrev />
          <SwiperButtonNext />
        </Swiper>
        <div className='details__right__text'>
          <h3 className='details__right__text__title'>Bed Room</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet facere earum expedita dolore, fuga nobis debitis sint illo. Nisi recusandae eveniet dolor adipisci quod sapiente accusantium sunt fugit ipsum molestias?</p>
        </div>
      </div>
    </div>
  )
}

export default RoomDetails