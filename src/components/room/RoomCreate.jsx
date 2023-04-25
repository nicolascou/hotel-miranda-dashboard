import React, { useEffect, useState } from 'react'

const RoomCreate = () => {
  const [offer, setOffer] = useState(false);

  const handleSubmit = (e) => {
    console.log('hola')
    e.preventDefault();
  }
  
  return (
    <div className='room-create'>
      <h2 className='room-create__title'>Add New Room</h2>
      <form className='room-create__form' onSubmit={(e) => handleSubmit(e)}>
        <select>
          <option value="single">Single Bed</option>
          <option value="double">Double Bed</option>
          <option value="lux">Double Luxury</option>
        </select>
        <div>
          <label htmlFor="number">Room number</label>
          <input type="number" id='number' />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea id="description" cols="30" rows="10"></textarea>
        </div>
        <div>
          <label htmlFor="offerYes">Yes</label>
          <input type="radio" name='offer' id='offerYes' onChange={() => setOffer(true)} checked={offer} />
          <label htmlFor="offerNo">No</label>
          <input type="radio" name='offer' id='offerNo' onChange={() => setOffer(false)} checked={!offer} />
        </div>
        {
          offer &&
          <div>
            <label htmlFor="discount">Discount</label>
            <input type="number" id='discount' />
          </div>
        }
        <div>
          <label htmlFor="price">Price</label>
          <input type="number" />
        </div>
        <div>
          <label htmlFor="cancel">Cancellation Policy</label>
          <textarea cols="30" rows="10" id='cancel'></textarea>
        </div>
        <div>
          <label htmlFor="amenities">Amenities</label>
          <div>
            <div>
              <label htmlFor="shower">Shower</label>
              <input type="checkbox" id="shower" />
            </div>
            <div>
              <label htmlFor="ac">AC</label>
              <input type="checkbox" id="ac" />
            </div>
            <div>
              <label htmlFor="wifi">Wifi</label>
              <input type="checkbox" id="wifi" />
            </div>
            <div>
              <label htmlFor="ledtv">LED TV</label>
              <input type="checkbox" id="ledtv" />
            </div>
          </div>
        </div>
        <button type='submit'>Create Room</button>
      </form>
    </div>
  )
}

export default RoomCreate