import React, { useState } from 'react'
import Sidebar from './layout/Sidebar';
import Header from './layout/Header';

const Dashboard = () => {
  const [hideSidebar, setHideSidebar] = useState(false);
  
  return (
    <>
     <Sidebar hideSidebar={hideSidebar} />
     <div className={`dashboard ${hideSidebar ? 'dashboard--100w' : ''}`}>
      <Header hideSidebar={hideSidebar} setHideSidebar={setHideSidebar} />
     </div>
    </>
  )
}

export default Dashboard