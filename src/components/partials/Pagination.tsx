import React from 'react'

interface IPagination {
  pagination: number;
  setPagination: React.Dispatch<React.SetStateAction<number>>;
  maxPage: number;
}

const Pagination: React.FC<IPagination> = ({ pagination, setPagination, maxPage }) => {

  const handlePagination = (page: number) => {
    if (page <= 0 || page > maxPage) return
    else setPagination(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  
  return (
    <div className='list__bottom__pagination'>
      <button onClick={() => handlePagination(pagination-1)} className='list__bottom__pagination__btn1'>Prev</button>
      <button onClick={() => handlePagination(1)} className={`list__bottom__pagination__btn2 
        ${pagination === 1 ? 'list__bottom__pagination__btn2--active' : ''}`}
      >1</button>
      <button onClick={() => handlePagination(2)} className={`list__bottom__pagination__btn2 
        ${pagination === 2 ? 'list__bottom__pagination__btn2--active' : ''}`}
      >2</button>
      <button onClick={() => handlePagination(3)} className={`list__bottom__pagination__btn2 
        ${pagination === 3 ? 'list__bottom__pagination__btn2--active' : ''}`}
      >3</button>
      <button onClick={() => handlePagination(4)} className={`list__bottom__pagination__btn2 
        ${pagination === 4 ? 'list__bottom__pagination__btn2--active' : ''}`}
      >4</button>
      <button onClick={() => handlePagination(pagination+1)} className='list__bottom__pagination__btn1'>Next</button>
    </div>
  )
}

export default Pagination