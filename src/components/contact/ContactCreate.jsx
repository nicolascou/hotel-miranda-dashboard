import React, { useRef } from 'react'
import { useDispatch } from 'react-redux';
import { createContact } from '../../features/contact/contactThunks';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';

const ContactCreate = () => {
  const formRef = useRef(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const contact = {
      "date": moment().format('YYYY-MM-DD'),
      "name": formData.get('full_name'),
      "email": formData.get('email'),
      "phone": formData.get('phone'),
      "subject": formData.get('subject'),
      "comment": formData.get('comment'),
      "archived": false
    }
    dispatch(createContact(contact))
    navigate('/contact');
  }
  
  return (
    <div className='create'>
      <h2 className='create__title'>Add New Contact Message</h2>
      <form ref={formRef} className='create__form' onSubmit={(e) => handleSubmit(e)}>
        <div className='create__form__grid'>
          <div className='create__form__column'>
            <div className='create__form__column__cell'>
              <label className='weight-600' htmlFor="full_name">Full name</label>
              <input name='full_name' type="text" id='full_name' />
            </div>
            <div className='create__form__column__cell'>
              <label className='weight-600' htmlFor="email">Email</label>
              <input name='email' type="email" id='email' />
            </div>
            <div className='create__form__column__cell'>
              <label className='weight-600' htmlFor="phone">Phone</label>
              <input name='phone' type="tel" id='phone' />
            </div>
          </div>
          <div className='create__form__column'>
            <div className='create__form__column__cell'>
              <label className='weight-600' htmlFor="subject">Subject</label>
              <input name='subject' type="text" id='subject' />
            </div>
            <div className='create__form__column__cell'>
              <label className='weight-600' htmlFor="comment">Comment</label>
              <textarea name='comment' id="comment" cols="30" rows="5"></textarea>
            </div>
          </div>
        </div>
        <button type='submit' className='create__form__btn'>Create Contact</button>
      </form>
    </div>
  )
}

export default ContactCreate