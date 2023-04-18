import React, { useState } from 'react'
import Sidebar from './layout/Sidebar';
import Header from './layout/Header';
import { Card, CardActive, CardImg, CardImgActive } from './layout/styled';

const Dashboard = () => {
  const [hideSidebar, setHideSidebar] = useState(false);
  
  return (
    <>
     <Sidebar hideSidebar={hideSidebar} />
     <div className={`dashboard ${hideSidebar ? 'dashboard--100w' : ''}`}>
      <Header hideSidebar={hideSidebar} setHideSidebar={setHideSidebar} />
      <div className='dashboard__main'>
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
      </div>
     </div>
    </>
  )
}

export default Dashboard