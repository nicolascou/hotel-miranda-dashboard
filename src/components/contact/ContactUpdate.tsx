import React, { useRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { updateContact } from '../../features/contact/contactThunks';
import { useAppDispatch, useAppSelector } from '../../app/hooks';

const ContactUpdate = () => {
  const { data } = useAppSelector(state => state.contact);
  const params = useParams();
  const contact = data.find((contact) => contact.id === params.id);
  const formRef = useRef(null);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  
  const handleSubmit = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    if (formRef.current && contact?.id) {
      const formData = new FormData(formRef.current);
      const newContact = {
        ...contact,
        "name": formData.get('full_name')?.toString(),
        "email": formData.get('email')?.toString(),
        "phone": formData.get('phone')?.toString(),
        "subject": formData.get('subject')?.toString(),
        "comment": formData.get('comment')?.toString()
      }
      dispatch(updateContact(newContact))
      navigate('/contact');
    }
  }

  return (
    <div className='create'>
      <h2 className='create__title'>Edit Contact Message</h2>
      <form ref={formRef} className='create__form' onSubmit={(e) => handleSubmit(e)}>
        <div className='create__form__grid'>
          <div className='create__form__column'>
            <div className='create__form__column__cell'>
              <label className='weight-600' htmlFor="full_name">Full name</label>
              <input name='full_name' type="text" id='full_name' defaultValue={contact?.name} />
            </div>
            <div className='create__form__column__cell'>
              <label className='weight-600' htmlFor="email">Email</label>
              <input name='email' type="email" id='email' defaultValue={contact?.email} />
            </div>
            <div className='create__form__column__cell'>
              <label className='weight-600' htmlFor="phone">Phone</label>
              <input name='phone' type="tel" id='phone' defaultValue={contact?.phone} />
            </div>
          </div>
          <div className='create__form__column'>
            <div className='create__form__column__cell'>
              <label className='weight-600' htmlFor="subject">Subject</label>
              <input name='subject' type="text" id='subject' defaultValue={contact?.subject} />
            </div>
            <div className='create__form__column__cell'>
              <label className='weight-600' htmlFor="comment">Comment</label>
              <textarea name='comment' id="comment" cols={30} rows={5} defaultValue={contact?.comment}></textarea>
            </div>
          </div>
        </div>
        <button type='submit' className='create__form__btn'>Update Contact</button>
      </form>
    </div>
  )
}

export default ContactUpdate