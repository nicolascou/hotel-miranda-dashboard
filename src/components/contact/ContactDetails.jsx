import React, { useState } from 'react'

const ContactDetails = () => {
  const [hide, setHide] = useState(false); 

  return (
    <div className={`details-modal ${hide ? 'details-modal--hidden': ''}`}>
      <div className='details-modal__card'>
        <p className='details-modal__card__title'>fdsa</p>
        <p className='details-modal__card__text'>fdsafdsafds</p>
        <button onClick={() => setHide(true)} className='details-modal__card__close'>
          <i className='fa-solid fa-xmark'></i>
        </button>
      </div>
    </div>
  )
}

export default ContactDetails