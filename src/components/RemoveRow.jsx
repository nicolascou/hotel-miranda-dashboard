import React, { useEffect, useState } from 'react'

const RemoveRow = ({ handleDelete, id }) => {
  const [showDelete, setShowDelete] = useState(false);

  const openDeleteBtn = (e) => {
    setShowDelete(true);
    e.stopPropagation(e);
  }
  const closeDeleteBtn = () => setShowDelete(false);

  useEffect(() => {
    window.addEventListener('click', closeDeleteBtn);

    return () => {
      window.removeEventListener('click', closeDeleteBtn);
    }
    
  }, [])
  
  return (
    <>
      <i onClick={(e) => openDeleteBtn(e)} className='fa-solid fa-ellipsis-vertical bookings__table__row__ellipsis'></i>
      <p onClick={(e) => handleDelete(e, id)} className={`bookings__table__row__delete ${showDelete ? '' : 'd-none'}`}>Delete</p>
    </>
  )
}

export default RemoveRow