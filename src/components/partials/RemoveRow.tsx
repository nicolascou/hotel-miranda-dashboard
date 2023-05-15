import React, { useEffect, useState } from 'react'

interface IRemoveRow {
  handleDelete: (e: React.MouseEvent<HTMLElement>, id: number) => void;
  id: number;
}

const RemoveRow: React.FC<IRemoveRow> = ({ handleDelete, id }) => {
  const [showDelete, setShowDelete] = useState(false);

  const toggleDeleteBtn = (e: React.MouseEvent<HTMLElement>) => {
    setShowDelete(prev => !prev);
    e.stopPropagation();
  }
  const closeDeleteBtn = () => setShowDelete(false);

  useEffect(() => {
    window.addEventListener('click', closeDeleteBtn);

    return () => {
      window.removeEventListener('click', closeDeleteBtn);
    }
    
  }, [])
  
  return (
    <div className='list__table__row__ellipsis'>
      <i onClick={(e) => toggleDeleteBtn(e)} className='fa-solid fa-ellipsis-vertical'></i>
      <p onClick={(e) => handleDelete(e, id)} className={`list__table__row__delete ${showDelete ? '' : 'd-none'}`}>Delete</p>
    </div>
  )
}

export default RemoveRow