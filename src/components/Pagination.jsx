import React from 'react'

const Pagination = ({ pagination, setPagination, bookingsLength }) => {

  const handlePagination = (page) => {
    if (page <= 0 || page > bookingsLength / 7) {
      return
    } else {
      setPagination(page);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  
  return (
    <div className='bookings__bottom__pagination'>
      <button onClick={() => handlePagination(pagination-1)} className='bookings__bottom__pagination__btn1'>Prev</button>
      <button onClick={() => handlePagination(1)} className={`bookings__bottom__pagination__btn2 
        ${pagination === 1 ? 'bookings__bottom__pagination__btn2--active' : ''}`}
      >1</button>
      <button onClick={() => handlePagination(2)} className={`bookings__bottom__pagination__btn2 
        ${pagination === 2 ? 'bookings__bottom__pagination__btn2--active' : ''}`}
      >2</button>
      <button onClick={() => handlePagination(3)} className={`bookings__bottom__pagination__btn2 
        ${pagination === 3 ? 'bookings__bottom__pagination__btn2--active' : ''}`}
      >3</button>
      <button onClick={() => handlePagination(4)} className={`bookings__bottom__pagination__btn2 
        ${pagination === 4 ? 'bookings__bottom__pagination__btn2--active' : ''}`}
      >4</button>
      <button onClick={() => handlePagination(pagination+1)} className='bookings__bottom__pagination__btn1'>Next</button>
    </div>
  )
}

export default Pagination