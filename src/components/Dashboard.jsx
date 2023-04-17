import React from 'react'
import Sidebar from './layout/Sidebar';
import Header from './layout/Header';

const Dashboard = () => {
  return (
    <>
     <Sidebar />
     <div className='dashboard'>
      <Header />
     </div>
    </>
  )
}

export default Dashboard