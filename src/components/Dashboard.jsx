import React from 'react'
import { Card, CardActive, CardImg, CardImgActive } from './layout/styled';
import Calendar from 'react-calendar';

import room1 from '../img/rooms-1.jpg';
import room2 from '../img/rooms-2.jpg';
import room3 from '../img/rooms-3.jpg';

const Dashboard = () => {
  return (
    <div className='dashboard'>
      <div className='dashboard__kpis'>
        <Card>
          <CardImg>
            <i className='dashboard__kpis__icon fa-solid fa-bed'></i>
          </CardImg>
          <div className='dashboard__content'>
            <h3 className='dashboard__content__number'>8,461</h3>
            <p className='dashboard__content__text'>New Booking</p>
          </div>
        </Card>
        <CardActive>
          <CardImgActive>
            <i className='dashboard__kpis__icon fa-solid fa-calendar-check'></i>
          </CardImgActive>
          <div className='dashboard__content'>
            <h3 className='dashboard__content__number'>963</h3>
            <p className='dashboard__content__text'>Scheduled Room</p>
          </div>
        </CardActive>
        <Card>
          <CardImg>
            <i className='dashboard__kpis__icon fa-solid fa-arrow-right-from-bracket'></i>
          </CardImg>
          <div className='dashboard__content'>
            <h3 className='dashboard__content__number'>753</h3>
            <p className='dashboard__content__text'>Check In</p>
          </div>
        </Card>
        <Card>
          <CardImg>
            <i className='dashboard__kpis__icon fa-solid fa-circle-arrow-left'></i>
          </CardImg>
          <div className='dashboard__content'>
            <h3 className='dashboard__content__number'>516</h3>
            <p className='dashboard__content__text'>Check out</p>
          </div>
        </Card>
      </div>
      <div className='dashboard__row'>
        <div className='dashboard__row__calendar'>
          <h3 className='dashboard__row__calendar__title'>Recent Booking Schedule</h3>
          <Calendar locale='en-US' className='dashboard__row__calendar__component' />
        </div>
      </div>
      <div className='dashboard__bookings'>
        <div className='dashboard__bookings__card'>
          <img src={room1} height='100' width='150' alt="room" className='dashboard__bookings__card__img' />
          <div className='dashboard__bookings__card__content'>
            <p className='dashboard__bookings__card__content__title'>Premium B-01</p>
            <div className='dashboard__bookings__card__content__row'>
              <i className='fa-solid fa-user'></i>
              <div>
                <p className='weight-500'>Michael Brown</p>
                <p>15 minutes ago</p>
              </div>
            </div>
          </div>
          <div style={{ background: '#135846' }} className='dashboard__bookings__card__number'>9</div>
        </div>
        <div className='dashboard__bookings__card'>
          <img src={room2} height='100' width='150' alt="room" className='dashboard__bookings__card__img' />
          <div className='dashboard__bookings__card__content'>
            <p className='dashboard__bookings__card__content__title'>Deluxe A-03</p>
            <div className='dashboard__bookings__card__content__row'>
              <i className='fa-solid fa-user'></i>
              <div>
                <p className='weight-500'>Angela Moss</p>
                <p>4 hours ago</p>
              </div>
            </div>
          </div>
          <div style={{ background: '#E23428' }} className='dashboard__bookings__card__number'>14, 15, 16</div>
        </div>
        <div className='dashboard__bookings__card'>
          <img src={room3} height='100' width='150' alt="room" className='dashboard__bookings__card__img' />
          <div className='dashboard__bookings__card__content'>
            <p className='dashboard__bookings__card__content__title'>Standard C-01</p>
            <div className='dashboard__bookings__card__content__row'>
              <i className='fa-solid fa-user'></i>
              <div>
                <p className='weight-500'>Alex Martinez</p>
                <p>8 hours ago</p>
              </div>
            </div>
          </div>
          <div style={{ background: '#FB9F44' }} className='dashboard__bookings__card__number'>20</div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard