import React from 'react'
import { Card, CardActive, CardImg, CardImgActive } from './layout/styled';
import Calendar from 'react-calendar';

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
          <div className='dashboard__bookings__card__img'></div>
          <div className='dashboard__bookings__card__content'>
            <p>Premium B-01</p>
            <div>
              <i className='fa-solid fa-user'></i>
              <p>Michael Brown</p>
              <p>15 minutes ago</p>
            </div>
          </div>
          <div className='dashboard__bookings__card__number'>3</div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard